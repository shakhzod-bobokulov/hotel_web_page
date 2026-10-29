const $ = id => document.getElementById(id);
const TYPE_NAME = { standart: 'Standart', deluxe: 'Deluxe', lyuks: 'Lyuks' };
const ERR = {
  room: 'Xona raqami noto\'g\'ri.', dates: 'Sanalar noto\'g\'ri (ketish kelishdan keyin bo\'lishi kerak, 60 kechagacha).',
  past: 'O\'tgan sanaga band qilib bo\'lmaydi.', name: 'Ism 2–60 belgi bo\'lishi kerak.', phone: 'Telefon raqam noto\'g\'ri.',
  busy: 'Bu xona tanlangan sanalarda band.', unauthorized: 'Seans tugadi, qayta kiring.', bad_password: 'Parol noto\'g\'ri.',
  rate_limited: 'Juda ko\'p urinish. Bir daqiqadan keyin qayta urining.', admin_disabled: 'Admin o\'chiq: serverda ADMIN_PASSWORD o\'rnatilmagan.',
  network: 'Server bilan aloqa yo\'q — qayta urinib ko\'ring.', server: 'Serverda xatolik. Birozdan keyin qayta urinib ko\'ring.'
};
const PAGE = 50;
let data = { bookings: [], rooms: [], today: '' };
let sort = null;            // { key: 'room'|'from'|'total', dir: 'asc'|'desc' } yoki null (standart tartib)
let shown = PAGE;           // jadvalda ko'rsatilayotgan qatorlar soni
let sessionLost = false;    // dialog ochiq paytida seans tugagan
let acting = false;         // qator amali bajarilmoqda

/* pure:start */
// CSV katagi: formula-injection himoyasi (= + - @ tab CR) va qo'shtirnoq/vergul ekranlash
function csvCell(v) {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  if (/[",\n\r]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function toCsv(header, rows) {
  return [header, ...rows].map(r => r.map(csvCell).join(',')).join('\r\n');
}
// Saralash: key = room | from | total; ikkilamchi kalit — sana, keyin xona
function sortBookings(list, key, dir, totalOf) {
  const m = dir === 'desc' ? -1 : 1;
  const cmp = (a, b) => {
    if (key === 'room') return a.room - b.room;
    if (key === 'total') return totalOf(a) - totalOf(b);
    return a.from < b.from ? -1 : a.from > b.from ? 1 : 0;
  };
  return list.slice().sort((a, b) => m * cmp(a, b) || (a.from < b.from ? -1 : a.from > b.from ? 1 : 0) || a.room - b.room);
}
/* pure:end */

const short = s => { const [, m, d] = s.split('-'); return `${d}.${m}`; };
const full = s => { const [y, m, d] = s.split('-'); return `${d}.${m}.${y}`; };
const nights = b => Math.round((new Date(b.to) - new Date(b.from)) / 86400000);
const roomOf = no => data.rooms.find(r => r.no === no);
const money = n => '$' + Number(n || 0).toLocaleString('en-US');
// Server bergan chegirmali total; bo'lmasa eski hisob
const totalOf = b => typeof b.total === 'number' ? b.total : nights(b) * (roomOf(b.room)?.price || 0);
const isoDate = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const addDays = (iso, n) => { const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); return isoDate(d); };

function toast(text, ms = 3000, isError = false) {
  const t = $('toast');
  t.textContent = text;
  t.classList.toggle('error', isError);
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), ms);
}
const errMsg = e => ERR[e.code] || 'Xatolik yuz berdi.';
const errToast = e => toast(errMsg(e), 5000, true);

// Xavfsiz DOM yaratish: foydalanuvchi matni hech qachon innerHTML orqali qo'yilmaydi
function el(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  const { ariaLabel, ...rest } = props;
  Object.assign(e, rest);
  if (ariaLabel) e.setAttribute('aria-label', ariaLabel);
  kids.forEach(k => e.append(k));
  return e;
}

async function call(method, url, body) {
  let r;
  try {
    r = await fetch(url, {
      method, headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined, credentials: 'same-origin'
    });
  } catch { throw Object.assign(new Error('network'), { code: 'network' }); }
  let j = {};
  try { j = await r.json(); } catch { /* bo'sh javob */ }
  if (r.status === 401 && url !== '/api/admin/login') { onUnauthorized(); throw Object.assign(new Error('unauthorized'), { code: 'unauthorized', status: 401 }); }
  if (!r.ok) {
    throw Object.assign(new Error(j.error || 'error'), {
      code: j.error || (r.status >= 500 ? 'server' : 'error'), status: r.status,
      retryAfter: Number(r.headers.get('Retry-After')) || 0
    });
  }
  return j;
}

/* ---------- Seans / ko'rinishlar ---------- */
function onUnauthorized() {
  if ($('cdlg').open) $('cdlg').close('cancel');
  if (dlg.open) {
    // Kiritilgan ma'lumot yo'qolmasin: dialogni yopmaymiz, shu yerda qayta kirish
    sessionLost = true;
    $('reauth').hidden = false;
    showFormMsg('Seans tugadi. Kiritilgan ma\'lumotlar saqlanib turibdi — parolni kiriting va «Kirish» ni bosing.');
    $('fPass').focus();
    return;
  }
  showLogin();
}

function showLogin() {
  $('netErr').hidden = true;
  $('appView').hidden = true;
  $('loginView').hidden = false;
  $('rows').replaceChildren();
  $('roomGrid').replaceChildren();
  setPwVisible(false);
  $('password').focus();
}

function showNetErr() {
  $('netErr').hidden = false;
  if ($('appView').hidden) $('loginView').hidden = true;
}

async function load() {
  try { data = await call('GET', '/api/admin/bookings'); }
  catch (e) { if (e.code !== 'unauthorized') showNetErr(); throw e; }
  const wasHidden = $('appView').hidden, y = window.scrollY;
  $('netErr').hidden = true;
  $('loginView').hidden = true;
  $('appView').hidden = false;
  render();
  if (!wasHidden) window.scrollTo(0, y);
}

const statusOf = b => b.status === 'cancelled' ? 'cancelled' : (b.to <= data.today ? 'past' : 'confirmed');
const STATUS_TEXT = { confirmed: 'Faol', cancelled: 'Bekor', past: 'O\'tgan' };
const SOURCE_TEXT = { web: 'Sayt', admin: 'Admin', seed: 'Namuna' };
const telHref = p => 'tel:' + String(p).replace(/[^\d+]/g, '');

function render() {
  const T = data.today;
  const confirmed = data.bookings.filter(b => b.status === 'confirmed');
  const occupiedToday = confirmed.filter(b => b.from <= T && T < b.to);
  const occRooms = new Set(occupiedToday.map(b => b.room));
  const total = data.rooms.length;

  $('stOcc').textContent = occRooms.size;
  $('stOccPct').textContent = (total ? Math.round(occRooms.size / total * 100) : 0) + '% bandlik';
  $('stFree').textContent = total - occRooms.size;
  $('stFreeSub').textContent = `${total} ta xonadan`;
  $('stActive').textContent = confirmed.filter(b => b.to > T).length;
  const future = confirmed.filter(b => b.to >= T);
  $('stFut').textContent = money(future.reduce((s, b) => s + totalOf(b), 0));
  $('stFutSub').textContent = `${future.length} ta band · ketish bugun va keyin`;
  $('stRev').textContent = money(confirmed.reduce((s, b) => s + totalOf(b), 0));
  $('stRevSub').textContent = confirmed.length + ' ta band, barcha davr';

  // Bugungi xonalar xaritasi (holat matn bilan ham ko'rsatiladi, faqat rang emas)
  const grid = $('roomGrid');
  grid.replaceChildren();
  data.rooms.forEach(r => {
    const cur = occupiedToday.find(b => b.room === r.no);
    const next = confirmed.filter(b => b.room === r.no && b.from > T).sort((a, b) => a.from.localeCompare(b.from))[0];
    const arrives = cur && cur.from === T;
    const cls = cur ? (arrives ? 'arrive' : 'booked') : 'free';
    const st = cur ? (arrives ? 'Bugun keladi' : 'Band') : 'Bo\'sh';
    const line2 = cur ? cur.name : (next ? `keyingi: ${short(next.from)}` : TYPE_NAME[r.type]);
    const line3 = cur ? `${short(cur.from)} → ${short(cur.to)}` : `$${r.price}`;
    grid.append(el('div', { className: 'room ' + cls, title: cur ? `${cur.name}, ${cur.phone}` : '' },
      el('b', { textContent: r.no }), el('small', { className: 'st', textContent: st }),
      el('small', { textContent: line2 }), el('small', { textContent: line3 })));
  });

  // Bugun kelish / ketishlar
  const fill = (ul, cntEl, list) => {
    ul.replaceChildren();
    cntEl.textContent = list.length;
    if (!list.length) ul.append(el('li', { className: 'none', textContent: 'Yo\'q' }));
    list.sort((a, b) => a.room - b.room).forEach(b => ul.append(el('li', {},
      el('b', { textContent: b.room }), el('span', { textContent: b.name }),
      el('a', { className: 'tel', href: telHref(b.phone), textContent: b.phone }))));
  };
  fill($('todayIn'), $('inCnt'), confirmed.filter(b => b.from === T));
  fill($('todayOut'), $('outCnt'), confirmed.filter(b => b.to === T));

  renderTable();
}

// Filtr + saralash natijasi (jadval va CSV uchun umumiy)
function currentList() {
  const q = $('search').value.trim().toLowerCase();
  const sf = $('statusF').value, tf = $('typeF').value;
  const list = data.bookings.filter(b => {
    const st = statusOf(b);
    if (sf === 'active' && st !== 'confirmed') return false;
    if (sf === 'cancelled' && st !== 'cancelled') return false;
    if (sf === 'past' && st !== 'past') return false;
    if (tf !== 'all' && roomOf(b.room)?.type !== tf) return false;
    if (q && !(`${b.room} ${b.name} ${b.phone}`.toLowerCase().includes(q))) return false;
    return true;
  });
  if (sort) return sortBookings(list, sort.key, sort.dir, totalOf);
  return sortBookings(list, 'from', sf === 'active' ? 'asc' : 'desc', totalOf);
}

function renderTable() {
  const list = currentList();
  const body = $('rows');
  const ae = document.activeElement;
  const focusKey = ae && body.contains(ae) ? ae.dataset.key : '';

  document.querySelectorAll('th[data-sort]').forEach(th => {
    if (sort && sort.key === th.dataset.sort) th.setAttribute('aria-sort', sort.dir === 'asc' ? 'ascending' : 'descending');
    else th.removeAttribute('aria-sort');
  });

  body.replaceChildren();
  $('empty').hidden = list.length > 0;
  list.slice(0, shown).forEach(b => {
    const st = statusOf(b), r = roomOf(b.room), n = nights(b);
    const actions = el('td');
    if (b.status === 'confirmed') {
      actions.append(el('button', {
        className: 'row-btn', textContent: 'Bekor qilish', onclick: () => cancelBooking(b),
        ariaLabel: `${b.room}-xona bronini bekor qilish (${b.name})`
      }));
    } else {
      actions.append(el('button', {
        className: 'row-btn', textContent: 'Tiklash', onclick: () => setStatus(b, 'confirmed'),
        ariaLabel: `${b.room}-xona bronini tiklash (${b.name})`
      }));
    }
    actions.firstChild.dataset.key = 'st:' + b.id;
    const del = el('button', {
      className: 'row-btn danger', textContent: 'O\'chirish', onclick: () => remove(b),
      ariaLabel: `${b.room}-xona bronini o'chirish (${b.name})`
    });
    del.dataset.key = 'del:' + b.id;
    actions.append(del);
    body.append(el('tr', {},
      el('td', { textContent: `${b.room} · ${TYPE_NAME[r?.type] || ''}` }),
      el('td', { className: 'name', textContent: b.name, title: b.name }),
      el('td', {}, el('a', { className: 'tel', href: telHref(b.phone), textContent: b.phone })),
      el('td', { textContent: `${full(b.from)} → ${full(b.to)}` }),
      el('td', { textContent: n }),
      el('td', { textContent: money(totalOf(b)) }),
      el('td', {}, el('span', { className: 'badge ' + st, textContent: STATUS_TEXT[st] })),
      el('td', { textContent: SOURCE_TEXT[b.source] || b.source }),
      actions));
  });

  const hidden = list.length - Math.min(list.length, shown);
  $('more').hidden = hidden <= 0;
  $('moreInfo').textContent = `${Math.min(list.length, shown)} / ${list.length} ta ko'rsatilmoqda`;
  $('moreBtn').textContent = `Yana ${Math.min(PAGE, hidden)} ta ko'rsatish`;

  if (focusKey) {
    const n = body.querySelector(`[data-key="${CSS.escape(focusKey)}"]`);
    (n || $('search')).focus({ preventScroll: true });
  }
}

/* ---------- Qator amallari ---------- */
function askConfirm(title, msg, yesLabel, danger) {
  return new Promise(res => {
    const c = $('cdlg');
    $('cTitle').textContent = title;
    $('cMsg').textContent = msg;
    $('cYes').textContent = yesLabel;
    $('cYes').classList.toggle('danger-btn', !!danger);
    c.returnValue = '';
    c.addEventListener('close', () => res(c.returnValue === 'ok'), { once: true });
    c.showModal();
    $('cNo').focus(); // xavfsiz variant standart
  });
}

async function act(fn, okText) {
  if (acting) return;
  acting = true;
  try { await fn(); toast(okText); await load(); }
  catch (e) { if (e.code !== 'unauthorized') errToast(e); }
  finally { acting = false; }
}
async function setStatus(b, status) {
  await act(() => call('PATCH', `/api/admin/bookings/${b.id}`, { status }), status === 'cancelled' ? 'Band bekor qilindi' : 'Band tiklandi');
  focusRow('st:' + b.id);
}
async function cancelBooking(b) {
  if (!await askConfirm('Bronni bekor qilish', `${b.room}-xona, ${b.name} (${full(b.from)} → ${full(b.to)}) bronini bekor qilasizmi?`, 'Ha, bekor qilish', true)) { focusRow('st:' + b.id); return; }
  await setStatus(b, 'cancelled');
}
async function remove(b) {
  if (!await askConfirm('Butunlay o\'chirish', `${b.room}-xona, ${b.name} — butunlay o'chirilsinmi? Buni qaytarib bo'lmaydi.`, 'Ha, o\'chirish', true)) { focusRow('del:' + b.id); return; }
  await act(() => call('DELETE', `/api/admin/bookings/${b.id}`), 'O\'chirildi');
  focusRow('del:' + b.id);
}
function focusRow(key) {
  if ($('appView').hidden) return;
  const n = $('rows').querySelector(`[data-key="${CSS.escape(key)}"]`);
  (n || $('search')).focus({ preventScroll: true });
}

/* ---------- CSV ---------- */
function exportCsv() {
  const list = currentList();
  if (!list.length) { toast('Eksport qilish uchun qator yo\'q', 3000, true); return; }
  const rows = list.map(b => [
    b.room, TYPE_NAME[roomOf(b.room)?.type] || '', b.name, b.phone, b.from, b.to, nights(b),
    totalOf(b), STATUS_TEXT[statusOf(b)], SOURCE_TEXT[b.source] || b.source || '', b.ref || ''
  ]);
  const csv = '﻿' + toCsv(['Xona', 'Turi', 'Mehmon', 'Telefon', 'Kelish', 'Ketish', 'Kechalar', 'Summa (USD)', 'Holat', 'Manba', 'Ref'], rows);
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const a = el('a', { href: url, download: `bronlar-${data.today || 'export'}.csv` });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast(`${list.length} ta qator yuklab olindi`);
}

/* ---------- Kirish / chiqish ---------- */
function setPwVisible(on) {
  $('password').type = on ? 'text' : 'password';
  $('pwToggle').textContent = on ? 'Yashirish' : 'Ko\'rsatish';
  $('pwToggle').setAttribute('aria-pressed', String(on));
}
$('pwToggle').addEventListener('click', () => { setPwVisible($('password').type === 'password'); $('password').focus(); });

const waitText = s => s >= 60 ? `${Math.ceil(s / 60)} daqiqa` : `${s} soniya`;
let lockTimer;
// 429: Retry-After bo'lsa qolgan vaqtni sanab ko'rsatadi
function startLock(sec, box, btn) {
  clearInterval(lockTimer);
  let left = sec;
  btn.disabled = true;
  const tick = () => {
    if (left <= 0) { clearInterval(lockTimer); btn.disabled = false; box.textContent = ''; return; }
    box.textContent = `Juda ko'p urinish. ${waitText(left)}dan keyin qayta urining.`;
    left--;
  };
  tick();
  lockTimer = setInterval(tick, 1000);
}
function loginFail(err, box, btn, input) {
  if (err.code === 'rate_limited' && err.retryAfter > 0) startLock(err.retryAfter, box, btn);
  else box.textContent = errMsg(err);
  if (input) { input.focus(); input.select(); }
}

$('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  $('loginErr').textContent = '';
  try {
    await call('POST', '/api/admin/login', { password: $('password').value });
    clearInterval(lockTimer);
    $('password').value = '';
    setPwVisible(false);
    await load();
  } catch (err) {
    if (err.code === 'network' || err.code === 'server') $('loginErr').textContent = errMsg(err);
    else if (err.code !== 'unauthorized') loginFail(err, $('loginErr'), $('loginBtn'), $('password'));
    $('password').focus();
  }
});
$('logout').addEventListener('click', async () => { try { await call('POST', '/api/admin/logout'); } catch { /* baribir chiqamiz */ } showLogin(); });
$('refresh').addEventListener('click', () => load().then(() => toast('Yangilandi')).catch(e => { if (e.code !== 'unauthorized') errToast(e); }));
$('netRetry').addEventListener('click', () => load().catch(() => {}));
$('theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('gs_theme', next); } catch { /* storage yo'q */ }
});

/* ---------- Filtr, qidiruv, saralash ---------- */
let searchT;
$('search').addEventListener('input', () => { clearTimeout(searchT); searchT = setTimeout(() => { shown = PAGE; renderTable(); }, 150); });
['statusF', 'typeF'].forEach(id => $(id).addEventListener('input', () => { shown = PAGE; renderTable(); }));
document.querySelectorAll('th[data-sort] .sort').forEach(btn => btn.addEventListener('click', () => {
  const key = btn.closest('th').dataset.sort;
  sort = sort && sort.key === key ? { key, dir: sort.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' };
  shown = PAGE;
  renderTable();
}));
$('moreBtn').addEventListener('click', () => { shown += PAGE; renderTable(); });
$('csvBtn').addEventListener('click', exportCsv);

/* ---------- Yangi band ---------- */
const dlg = $('dlg');
function showFormMsg(text, warn) {
  $('fErr').textContent = text;
  $('fErr').classList.toggle('warn', !!warn);
}
// Formani tekshiradi: { error } — yuborishga to'sqinlik qiladi; { warn } — faqat ogohlantirish
function checkForm() {
  const from = $('fFrom').value, to = $('fTo').value, room = Number($('fRoom').value);
  if (!from || !to) return { error: 'Kelish va ketish sanalarini kiriting.' };
  if (from > to) return { error: 'Kelish sanasi ketish sanasidan keyin bo\'lishi mumkin emas.' };
  if (from === to) return { error: 'Kamida 1 kecha bo\'lishi kerak: ketish sanasi kelishdan keyin bo\'lsin.' };
  if (from < data.today) return { error: ERR.past };
  if (Math.round((new Date(to) - new Date(from)) / 86400000) > 60) return { error: ERR.dates };
  const clash = data.bookings.find(b => b.status === 'confirmed' && b.room === room && b.from < to && from < b.to);
  if (clash) return { warn: `Diqqat: ${room}-xona ${full(clash.from)} → ${full(clash.to)} oralig'ida band (${clash.name}).` };
  return {};
}
function liveCheck() {
  if (sessionLost) return;
  const c = checkForm();
  showFormMsg(c.error || c.warn || '', !c.error && !!c.warn);
}
$('fFrom').addEventListener('input', () => { if ($('fFrom').value) $('fTo').min = addDays($('fFrom').value, 1); liveCheck(); });
$('fTo').addEventListener('input', liveCheck);
$('fRoom').addEventListener('input', liveCheck);

$('addBtn').addEventListener('click', () => {
  $('fRoom').replaceChildren(...data.rooms.map(r => el('option', { value: r.no, textContent: `${r.no} — ${TYPE_NAME[r.type]} ($${r.price})` })));
  $('fFrom').min = data.today;
  $('fFrom').value = data.today;
  $('fTo').min = addDays(data.today, 1);
  $('fTo').value = addDays(data.today, 1);
  $('fName').value = $('fPhone').value = $('fPass').value = '';
  $('reauth').hidden = true;
  sessionLost = false;
  $('fSave').disabled = false;
  liveCheck();
  dlg.showModal();
});
$('fCancel').addEventListener('click', () => dlg.close());
dlg.addEventListener('close', () => {
  if (sessionLost) { sessionLost = false; showLogin(); return; }
  if (!$('appView').hidden) $('addBtn').focus();
});

$('addForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (sessionLost) { $('fPass').focus(); return; }
  const c = checkForm();
  const name = $('fName').value.trim(), phone = $('fPhone').value.trim();
  const problem = c.error || (name.length < 2 ? ERR.name : (phone.length < 5 ? ERR.phone : ''));
  if (problem) { showFormMsg(problem); return; }
  showFormMsg('');
  $('fSave').disabled = true;
  try {
    const j = await call('POST', '/api/admin/bookings', {
      room: Number($('fRoom').value), from: $('fFrom').value, to: $('fTo').value, name, phone
    });
    dlg.close();
    toast(`Band saqlandi${j.ref ? ': ' + j.ref : ''}${typeof j.total === 'number' ? ' · ' + money(j.total) : ''}`);
    await load();
  } catch (err) {
    if (err.code !== 'unauthorized') showFormMsg(errMsg(err));
  } finally { $('fSave').disabled = false; }
});

// Dialog ichida qayta kirish (kiritilgan ma'lumotlar yo'qolmaydi)
async function reauth() {
  const btn = $('fReauthBtn');
  btn.disabled = true;
  try {
    await call('POST', '/api/admin/login', { password: $('fPass').value });
    clearInterval(lockTimer);
    sessionLost = false;
    $('fPass').value = '';
    $('reauth').hidden = true;
    showFormMsg('Qayta kirildi. Endi «Saqlash» ni bosishingiz mumkin.');
    $('fSave').focus();
    btn.disabled = false;
  } catch (err) {
    btn.disabled = false;
    if (err.code === 'rate_limited' && err.retryAfter > 0) startLock(err.retryAfter, $('fErr'), btn);
    else showFormMsg(errMsg(err));
    $('fPass').focus();
  }
}
$('fReauthBtn').addEventListener('click', reauth);
$('fPass').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); reauth(); } });

/* ---------- Ishga tushirish ---------- */
load().catch(() => { /* 401 — kirish oynasi ko'rsatilgan; boshqa xato — aloqa xabari */ });
setInterval(() => {
  if (!$('appView').hidden && !document.hidden && !dlg.open && !$('cdlg').open && !acting) load().catch(() => {});
}, 30000);
