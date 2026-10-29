/* ================== Tarjimalar (UZ / RU / EN) ================== */
const I18N = {
  uz: {
    title: 'Grand Silk Hotel — Samarqand',
    nav_home: 'Bosh sahifa', nav_rooms: 'Xonalar', nav_services: 'Xizmatlar', nav_pick: 'Xona tanlash', nav_contact: 'Aloqa', cta_book: 'Band qilish',
    hero_badge: 'Samarqand, Registon yonida · 5 yulduz',
    hero_l1: 'Qulaylik va', hero_l2: 'mehmondo\'stlik', hero_l3: 'maskani',
    hero_p: 'Shahar markazidagi 5 yulduzli mehmonxona. Xonangizni xaritadan o\'zingiz tanlang — bo\'sh va band xonalar real vaqtda ko\'rinib turadi.',
    hero_btn1: 'Xonani tanlash', hero_btn2: 'AI yordamchidan so\'rash',
    st1: 'Hashamatli xona', st2: 'Yillik tajriba', st3: 'Mamnun mehmon', st4: 'Reyting (10 dan)',
    rooms_h: 'Bizning xonalar', per_night: '/ kecha', pick_btn: 'Shu turdan tanlash',
    type_standart: 'Standart', type_deluxe: 'Deluxe', type_lyuks: 'Lyuks',
    r1_p: '2 kishilik, Wi-Fi, konditsioner, nonushta.', r2_p: 'Keng xona, balkon, shahar manzarasi.', r3_p: 'Mehmonxona + yotoqxona, jakuzi, VIP xizmat.',
    services_h: 'Xizmatlar',
    s1_t: 'Restoran', s1_p: 'Milliy va Yevropa taomlari', s2_t: 'Basseyn va Spa', s2_p: 'Dam olish va sog\'lomlashtirish',
    s3_t: 'Bepul Wi-Fi', s3_p: 'Barcha xonalarda tezkor internet', s4_t: 'Transfer', s4_p: 'Aeroport va vokzaldan olib ketish',
    pick_h: 'Xonani tanlang', pick_sub: 'Sanani belgilang — shu sanada bo\'sh va band xonalar xaritada ko\'rinadi.',
    lbl_in: 'Kelish sanasi', lbl_out: 'Ketish sanasi',
    f_all: 'Barchasi', f_standart: 'Standart · ${standart}', f_deluxe: 'Deluxe · ${deluxe}', f_lyuks: 'Lyuks · ${lyuks}',
    lg_free: 'Bo\'sh', lg_booked: 'Band', lg_sel: 'Tanlangan', floor: '{n}-qavat', booked_until: '{d} gacha band',
    order_h: 'Buyurtma', sum_empty: 'Xaritadan bo\'sh xonani bosing', sum_date: 'Sana', sum_nights: 'Kechalar', sum_price: 'Narx / kecha', sum_total: 'Jami',
    ph_name: 'Ismingiz', ph_phone: 'Telefon raqam', btn_confirm: 'Band qilish', room_word: '{no}-xona',
    foot_addr: 'Samarqand sh., Registon ko\'chasi 1', foot_copy: '© 2026 Grand Silk Hotel. Barcha huquqlar himoyalangan.',
    chat_sub: 'Onlayn yordamchi', chat_ph: 'Savolingizni yozing...',
    t_busy: '{no}-xona {d} gacha band. Boshqa xonani tanlang.', t_taken: '{no}-xonani hozirgina boshqa mehmon band qildi. Boshqasini tanlang.', t_cancel: '{no}-xona tanlangan sanada band. Tanlov bekor qilindi.',
    t_done: 'Rahmat, {name}! {no}-xona {from}–{to} ga band qilindi.',
    sum_disc: 'Chegirma', skip: 'Asosiy mazmunga o\'tish', lbl_name: 'Ismingiz', lbl_phone: 'Telefon raqam',
    privacy: 'Ma\'lumotlaringiz faqat bron uchun ishlatiladi.',
    lang_aria: 'Til', theme_aria: 'Tungi rejim', menu_aria: 'Asosiy menyu', menu_btn: 'Menyu', chat_open: 'AI yordamchini ochish', chat_aria: 'Silk AI yordamchi', chat_close: 'Yopish', chat_send: 'Yuborish',
    alt_r1: 'Standart xona', alt_r2: 'Deluxe xona', alt_r3: 'Lyuks xona',
    meta_desc: 'Grand Silk Hotel — Samarqand markazidagi 5 yulduzli mehmonxona. Xonani xaritadan o\'zingiz tanlang va onlayn band qiling.',
    aria_free: '{no}-xona, bo\'sh, {type}, ${price}', aria_booked: '{no}-xona, band, {d} gacha',
    t_ref: 'Bron raqami: {ref}.', t_total: 'Jami: ${total}.', t_demo_done: 'DEMO: {no}-xona faqat shu brauzerda saqlandi, mehmonxonaga yuborilmadi.',
    e_name: 'Iltimos, ismingizni kiriting.', e_phone: 'Iltimos, telefon raqamni to\'g\'ri kiriting.', e_room: 'Bunday xona topilmadi. Xonani qayta tanlang.',
    e_dates: 'Sanalar noto\'g\'ri: ketish sanasi kelishdan keyin bo\'lishi kerak.', e_past: 'O\'tgan sanaga band qilib bo\'lmaydi.',
    e_rate_limited: 'Juda ko\'p urinish. Birozdan so\'ng qayta urinib ko\'ring.',
    e_network: 'Hozir band qilish imkoni yo\'q. Iltimos, telefon orqali bog\'laning: +998 90 123 45 67',
    e_server: 'Server xatosi. Birozdan so\'ng qayta urinib ko\'ring yoki +998 90 123 45 67 ga qo\'ng\'iroq qiling.',
    greet: 'Assalomu alaykum! Men Silk AI — mehmonxona yordamchisiman.\nXonalar, narxlar, bo\'sh xonalar va band qilish bo\'yicha yordam beraman.',
    c_free: 'Bo\'sh xonalar', c_prices: 'Narxlar', c_services: 'Xizmatlar', c_address: 'Manzil', c_discount: 'Chegirma', c_transfer: 'Transfer',
    c_std: 'Standart xonalar', c_dlx: 'Deluxe xonalar', c_lux: 'Lyuks xonalar', c_select: '{no} ni tanlash',
    a_hello: 'Va alaykum assalom! Sizga qanday yordam bera olaman?',
    a_booked: '{no}-xona {from}–{to} oralig\'ida band.', a_alt: '\nShu turdagi bo\'sh xona: {alt}.', a_noalt: '\nShu turdagi bo\'sh xona qolmagan.',
    a_selected: '{no}-xona ({type}, ${price}/kecha) {range} sanalari uchun tanlandi.\nEndi ism va telefonni kiritib, "Band qilish" tugmasini bosing.',
    a_none_type: '{range} sanalarida {type} xonalar qolmagan.\nBoshqa sanani tanlab ko\'ring yoki boshqa tur so\'rang.',
    a_free_type: '{range} uchun bo\'sh {type} xonalar ({n} ta):\n{list}',
    a_free_all: '{range} sanalari uchun:\n{lines}\nJami band: {booked} ta.', a_line: '• {type}: {n} ta bo\'sh',
    a_filter: '{type} xonalar xaritada ajratib ko\'rsatildi. Bo\'sh: {list}.', a_nolist: 'yo\'q',
    a_cheap: 'Eng arzon bo\'sh xona: {no} ({type}) — ${price}/kecha.', a_cheap_none: 'Bu sanalarda bo\'sh xona yo\'q.',
    a_best: 'Eng zo\'r variant — {no}-xona (Lyuks): jakuzi, alohida mehmonxona va VIP xizmat. ${lyuks}/kecha.', a_best_none: 'Lyuks xonalar bu sanalarda band. Deluxe xonani ko\'rib chiqing.',
    a_prices: 'Narxlar (1 kecha, nonushta bilan):\n• Standart — ${standart}\n• Deluxe — ${deluxe}\n• Lyuks — ${lyuks}\n{dn1} kechadan ortiq turganlarga {dp1}% chegirma.',
    a_discount: '{dn1} kechadan ortiq yashasangiz {dp1}% chegirma, {dn2} kechadan ortiq bo\'lsa {dp2}% — bron narxida avtomatik hisoblanadi.',
    a_wifi: 'Barcha xonalarda va umumiy hududda tezkor Wi-Fi bepul.',
    a_services: 'Xizmatlarimiz:\n• Restoran (nonushta narxga kiritilgan)\n• Basseyn va Spa\n• Bepul Wi-Fi\n• Aeroport/vokzal transferi',
    a_checkin: 'Check-in: 14:00 dan, check-out: 12:00 gacha. Qabulxona 24/7 ishlaydi.',
    a_address: 'Samarqand sh., Registon ko\'chasi 1\nTel: +998 90 123 45 67\ninfo@grandsilk.uz',
    a_book: 'Band qilish oson:\n1) Sanalarni tanlang\n2) Xaritadan bo\'sh (yashil) xonani bosing\n3) Ism va telefonni kiriting.\nXohlasangiz xona raqamini yozing, men o\'zim tanlab beraman.',
    a_thanks: 'Arzimaydi! Yana savol bo\'lsa, bemalol yozing.', a_bye: 'Xayr! Sizni Grand Silk Hotelda kutamiz.',
    a_fallback: 'Uzr, buni to\'liq tushunmadim.\nMen xonalar, narxlar, bo\'sh xonalar, xizmatlar va band qilish haqida javob bera olaman. Masalan: "302 ni tanla" yoki "bo\'sh deluxe xonalar".'
  },
  ru: {
    title: 'Grand Silk Hotel — Самарканд',
    nav_home: 'Главная', nav_rooms: 'Номера', nav_services: 'Услуги', nav_pick: 'Выбор номера', nav_contact: 'Контакты', cta_book: 'Забронировать',
    hero_badge: 'Самарканд, рядом с Регистаном · 5 звёзд',
    hero_l1: 'Дом комфорта и', hero_l2: 'гостеприимства', hero_l3: '',
    hero_p: 'Пятизвёздочный отель в центре города. Выберите номер на схеме сами — свободные и занятые номера видны в реальном времени.',
    hero_btn1: 'Выбрать номер', hero_btn2: 'Спросить AI-помощника',
    st1: 'Роскошных номеров', st2: 'Лет опыта', st3: 'Довольных гостей', st4: 'Рейтинг (из 10)',
    rooms_h: 'Наши номера', per_night: '/ ночь', pick_btn: 'Выбрать этот тип',
    type_standart: 'Стандарт', type_deluxe: 'Делюкс', type_lyuks: 'Люкс',
    r1_p: 'На 2 человек, Wi-Fi, кондиционер, завтрак.', r2_p: 'Просторный номер, балкон, вид на город.', r3_p: 'Гостиная + спальня, джакузи, VIP-сервис.',
    services_h: 'Услуги',
    s1_t: 'Ресторан', s1_p: 'Национальная и европейская кухня', s2_t: 'Бассейн и спа', s2_p: 'Отдых и оздоровление',
    s3_t: 'Бесплатный Wi-Fi', s3_p: 'Быстрый интернет во всех номерах', s4_t: 'Трансфер', s4_p: 'Встреча в аэропорту и на вокзале',
    pick_h: 'Выберите номер', pick_sub: 'Укажите даты — на схеме появятся свободные и занятые номера на эти даты.',
    lbl_in: 'Дата заезда', lbl_out: 'Дата выезда',
    f_all: 'Все', f_standart: 'Стандарт · ${standart}', f_deluxe: 'Делюкс · ${deluxe}', f_lyuks: 'Люкс · ${lyuks}',
    lg_free: 'Свободно', lg_booked: 'Занято', lg_sel: 'Выбрано', floor: '{n} этаж', booked_until: 'занят до {d}',
    order_h: 'Заказ', sum_empty: 'Нажмите на свободный номер на схеме', sum_date: 'Даты', sum_nights: 'Ночей', sum_price: 'Цена / ночь', sum_total: 'Итого',
    ph_name: 'Ваше имя', ph_phone: 'Номер телефона', btn_confirm: 'Забронировать', room_word: 'Номер {no}',
    foot_addr: 'г. Самарканд, ул. Регистан, 1', foot_copy: '© 2026 Grand Silk Hotel. Все права защищены.',
    chat_sub: 'Онлайн-помощник', chat_ph: 'Напишите вопрос...',
    t_busy: 'Номер {no} занят до {d}. Выберите другой.', t_taken: 'Номер {no} только что забронировал другой гость. Выберите другой.', t_cancel: 'Номер {no} занят на выбранные даты. Выбор отменён.',
    t_done: 'Спасибо, {name}! Номер {no} забронирован на {from}–{to}.',
    sum_disc: 'Скидка', skip: 'Перейти к содержимому', lbl_name: 'Ваше имя', lbl_phone: 'Номер телефона',
    privacy: 'Ваши данные используются только для бронирования.',
    lang_aria: 'Язык', theme_aria: 'Ночной режим', menu_aria: 'Главное меню', menu_btn: 'Меню', chat_open: 'Открыть AI-помощника', chat_aria: 'AI-помощник Silk AI', chat_close: 'Закрыть', chat_send: 'Отправить',
    alt_r1: 'Номер Стандарт', alt_r2: 'Номер Делюкс', alt_r3: 'Номер Люкс',
    meta_desc: 'Grand Silk Hotel — пятизвёздочный отель в центре Самарканда. Выберите номер на схеме и забронируйте онлайн.',
    aria_free: 'Номер {no}, свободен, {type}, ${price}', aria_booked: 'Номер {no}, занят до {d}',
    t_ref: 'Номер брони: {ref}.', t_total: 'Итого: ${total}.', t_demo_done: 'ДЕМО: номер {no} сохранён только в этом браузере, отелю не отправлено.',
    e_name: 'Пожалуйста, введите имя.', e_phone: 'Пожалуйста, введите корректный номер телефона.', e_room: 'Такой номер не найден. Выберите номер заново.',
    e_dates: 'Неверные даты: выезд должен быть позже заезда.', e_past: 'Нельзя бронировать на прошедшие даты.',
    e_rate_limited: 'Слишком много попыток. Повторите чуть позже.',
    e_network: 'Сейчас забронировать нельзя. Пожалуйста, свяжитесь по телефону: +998 90 123 45 67',
    e_server: 'Ошибка сервера. Повторите позже или позвоните: +998 90 123 45 67',
    greet: 'Здравствуйте! Я Silk AI — помощник отеля.\nПомогу с номерами, ценами, свободными номерами и бронированием.',
    c_free: 'Свободные номера', c_prices: 'Цены', c_services: 'Услуги', c_address: 'Адрес', c_discount: 'Скидка', c_transfer: 'Трансфер',
    c_std: 'Номера Стандарт', c_dlx: 'Номера Делюкс', c_lux: 'Номера Люкс', c_select: 'Выбрать {no}',
    a_hello: 'Здравствуйте! Чем могу помочь?',
    a_booked: 'Номер {no} занят с {from} по {to}.', a_alt: '\nСвободный номер того же типа: {alt}.', a_noalt: '\nСвободных номеров этого типа не осталось.',
    a_selected: 'Номер {no} ({type}, ${price}/ночь) выбран на даты {range}.\nТеперь введите имя и телефон и нажмите «Забронировать».',
    a_none_type: 'На {range} номеров типа «{type}» не осталось.\nПопробуйте другие даты или другой тип.',
    a_free_type: 'Свободные номера «{type}» на {range} ({n} шт.):\n{list}',
    a_free_all: 'На даты {range}:\n{lines}\nВсего занято: {booked}.', a_line: '• {type}: свободно {n}',
    a_filter: 'Номера «{type}» выделены на схеме. Свободны: {list}.', a_nolist: 'нет',
    a_cheap: 'Самый недорогой свободный номер: {no} ({type}) — ${price}/ночь.', a_cheap_none: 'На эти даты свободных номеров нет.',
    a_best: 'Лучший вариант — номер {no} (Люкс): джакузи, отдельная гостиная и VIP-сервис. ${lyuks}/ночь.', a_best_none: 'Люксы на эти даты заняты. Посмотрите номера Делюкс.',
    a_prices: 'Цены (за ночь, с завтраком):\n• Стандарт — ${standart}\n• Делюкс — ${deluxe}\n• Люкс — ${lyuks}\nСкидка {dp1}% при проживании более {dn1} ночей.',
    a_discount: 'Скидка {dp1}% при проживании более {dn1} ночей и {dp2}% — более {dn2} ночей. Учитывается в стоимости брони автоматически.',
    a_wifi: 'Быстрый Wi-Fi бесплатно во всех номерах и общих зонах.',
    a_services: 'Наши услуги:\n• Ресторан (завтрак включён)\n• Бассейн и спа\n• Бесплатный Wi-Fi\n• Трансфер из аэропорта/с вокзала',
    a_checkin: 'Заезд с 14:00, выезд до 12:00. Ресепшн работает круглосуточно.',
    a_address: 'г. Самарканд, ул. Регистан, 1\nТел: +998 90 123 45 67\ninfo@grandsilk.uz',
    a_book: 'Бронировать просто:\n1) Выберите даты\n2) Нажмите на свободный (зелёный) номер на схеме\n3) Введите имя и телефон.\nМожете написать номер комнаты — я выберу его сам.',
    a_thanks: 'Пожалуйста! Если будут вопросы — пишите.', a_bye: 'До свидания! Ждём вас в Grand Silk Hotel.',
    a_fallback: 'Извините, я не совсем понял.\nЯ могу ответить про номера, цены, свободные номера, услуги и бронирование. Например: «выбери 302» или «свободные делюкс».'
  },
  en: {
    title: 'Grand Silk Hotel — Samarkand',
    nav_home: 'Home', nav_rooms: 'Rooms', nav_services: 'Services', nav_pick: 'Pick a room', nav_contact: 'Contact', cta_book: 'Book now',
    hero_badge: 'Samarkand, near Registan · 5 stars',
    hero_l1: 'A home of comfort and', hero_l2: 'hospitality', hero_l3: '',
    hero_p: 'A five-star hotel in the city centre. Choose your room on the map yourself — free and booked rooms are shown in real time.',
    hero_btn1: 'Choose a room', hero_btn2: 'Ask the AI assistant',
    st1: 'Luxury rooms', st2: 'Years of experience', st3: 'Happy guests', st4: 'Rating (out of 10)',
    rooms_h: 'Our rooms', per_night: '/ night', pick_btn: 'Pick this type',
    type_standart: 'Standard', type_deluxe: 'Deluxe', type_lyuks: 'Suite',
    r1_p: 'Double room, Wi-Fi, air conditioning, breakfast.', r2_p: 'Spacious room, balcony, city view.', r3_p: 'Living room + bedroom, jacuzzi, VIP service.',
    services_h: 'Services',
    s1_t: 'Restaurant', s1_p: 'National and European cuisine', s2_t: 'Pool & Spa', s2_p: 'Relaxation and wellness',
    s3_t: 'Free Wi-Fi', s3_p: 'Fast internet in every room', s4_t: 'Transfer', s4_p: 'Airport and station pick-up',
    pick_h: 'Choose your room', pick_sub: 'Pick your dates — free and booked rooms for those dates appear on the map.',
    lbl_in: 'Check-in', lbl_out: 'Check-out',
    f_all: 'All', f_standart: 'Standard · ${standart}', f_deluxe: 'Deluxe · ${deluxe}', f_lyuks: 'Suite · ${lyuks}',
    lg_free: 'Free', lg_booked: 'Booked', lg_sel: 'Selected', floor: 'Floor {n}', booked_until: 'booked till {d}',
    order_h: 'Your order', sum_empty: 'Click a free room on the map', sum_date: 'Dates', sum_nights: 'Nights', sum_price: 'Price / night', sum_total: 'Total',
    ph_name: 'Your name', ph_phone: 'Phone number', btn_confirm: 'Book now', room_word: 'Room {no}',
    foot_addr: '1 Registan St., Samarkand', foot_copy: '© 2026 Grand Silk Hotel. All rights reserved.',
    chat_sub: 'Online assistant', chat_ph: 'Type your question...',
    t_busy: 'Room {no} is booked until {d}. Please pick another.', t_taken: 'Room {no} was just booked by another guest. Please pick another.', t_cancel: 'Room {no} is booked for the chosen dates. Selection cleared.',
    t_done: 'Thank you, {name}! Room {no} is booked for {from}–{to}.',
    sum_disc: 'Discount', skip: 'Skip to content', lbl_name: 'Your name', lbl_phone: 'Phone number',
    privacy: 'Your details are used only for your booking.',
    lang_aria: 'Language', theme_aria: 'Night mode', menu_aria: 'Main menu', menu_btn: 'Menu', chat_open: 'Open AI assistant', chat_aria: 'Silk AI assistant', chat_close: 'Close', chat_send: 'Send',
    alt_r1: 'Standard room', alt_r2: 'Deluxe room', alt_r3: 'Suite',
    meta_desc: 'Grand Silk Hotel — a five-star hotel in central Samarkand. Choose your room on the map and book online.',
    aria_free: 'Room {no}, free, {type}, ${price}', aria_booked: 'Room {no}, booked till {d}',
    t_ref: 'Booking reference: {ref}.', t_total: 'Total: ${total}.', t_demo_done: 'DEMO: room {no} was saved in this browser only, nothing was sent to the hotel.',
    e_name: 'Please enter your name.', e_phone: 'Please enter a valid phone number.', e_room: 'That room was not found. Please pick again.',
    e_dates: 'Invalid dates: check-out must be after check-in.', e_past: 'You cannot book past dates.',
    e_rate_limited: 'Too many attempts. Please try again shortly.',
    e_network: 'Booking is unavailable right now. Please contact us by phone: +998 90 123 45 67',
    e_server: 'Server error. Please try again later or call +998 90 123 45 67.',
    greet: 'Hello! I\'m Silk AI, the hotel assistant.\nI can help with rooms, prices, availability and booking.',
    c_free: 'Free rooms', c_prices: 'Prices', c_services: 'Services', c_address: 'Address', c_discount: 'Discount', c_transfer: 'Transfer',
    c_std: 'Standard rooms', c_dlx: 'Deluxe rooms', c_lux: 'Suites', c_select: 'Select {no}',
    a_hello: 'Hello! How can I help you?',
    a_booked: 'Room {no} is booked from {from} to {to}.', a_alt: '\nA free room of the same type: {alt}.', a_noalt: '\nNo free rooms of this type are left.',
    a_selected: 'Room {no} ({type}, ${price}/night) selected for {range}.\nNow enter your name and phone and press "Book now".',
    a_none_type: 'No {type} rooms are left for {range}.\nTry other dates or another type.',
    a_free_type: 'Free {type} rooms for {range} ({n}):\n{list}',
    a_free_all: 'For {range}:\n{lines}\nTotal booked: {booked}.', a_line: '• {type}: {n} free',
    a_filter: '{type} rooms are highlighted on the map. Free: {list}.', a_nolist: 'none',
    a_cheap: 'Cheapest free room: {no} ({type}) — ${price}/night.', a_cheap_none: 'No free rooms for these dates.',
    a_best: 'The best option — room {no} (Suite): jacuzzi, separate living room and VIP service. ${lyuks}/night.', a_best_none: 'Suites are booked for these dates. Consider a Deluxe room.',
    a_prices: 'Prices (per night, breakfast included):\n• Standard — ${standart}\n• Deluxe — ${deluxe}\n• Suite — ${lyuks}\n{dp1}% discount for stays over {dn1} nights.',
    a_discount: '{dp1}% off for stays over {dn1} nights and {dp2}% off over {dn2} nights — applied to the booking total automatically.',
    a_wifi: 'Fast Wi-Fi is free in all rooms and public areas.',
    a_services: 'Our services:\n• Restaurant (breakfast included)\n• Pool & Spa\n• Free Wi-Fi\n• Airport/station transfer',
    a_checkin: 'Check-in from 14:00, check-out until 12:00. Reception is open 24/7.',
    a_address: '1 Registan St., Samarkand\nTel: +998 90 123 45 67\ninfo@grandsilk.uz',
    a_book: 'Booking is easy:\n1) Pick your dates\n2) Click a free (green) room on the map\n3) Enter your name and phone.\nOr just tell me a room number and I\'ll select it.',
    a_thanks: 'You\'re welcome! Ask anything else anytime.', a_bye: 'Goodbye! We look forward to seeing you at Grand Silk Hotel.',
    a_fallback: 'Sorry, I didn\'t quite get that.\nI can answer about rooms, prices, availability, services and booking. For example: "select 302" or "free deluxe rooms".'
  }
};

let lang = 'uz';
try { lang = localStorage.getItem('gs_lang') || ((navigator.language || '').startsWith('ru') ? 'ru' : (navigator.language || '').startsWith('en') ? 'en' : 'uz'); } catch { /* storage yo'q */ }

/* ================== Narx va chegirma (server bermasa — zaxira konstantalar) ================== */
const TYPES = ['standart', 'deluxe', 'lyuks'];
let PRICE = { standart: 60, deluxe: 110, lyuks: 200 };
let DISCOUNTS = [{ minNights: 4, pct: 10 }, { minNights: 8, pct: 15 }];

// Tarjima matnlaridagi {standart}, {dn1}, {dp1} kabi o'zgaruvchilar
function baseVars() {
  const d1 = DISCOUNTS[0] || { minNights: 4, pct: 10 }, d2 = DISCOUNTS[1] || d1;
  return { ...PRICE, dn1: d1.minNights - 1, dp1: d1.pct, dn2: d2.minNights - 1, dp2: d2.pct };
}
const t = (key, vars = {}) => {
  const all = { ...baseVars(), ...vars };
  return (I18N[lang][key] ?? I18N.uz[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => all[k] ?? '');
};

/* ================== Yordamchi funksiyalar ================== */
const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
// 'YYYY-MM-DD' ni lokal yarim tunga o'giradi (new Date(str) UTC deb o'qiladi — vaqt zonasida xato beradi)
const parseISO = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const short = s => { const [, m, d] = s.split('-'); return `${d}.${m}`; };
const nightsBetween = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 86400000);
const priceOf = r => (r.price ?? PRICE[r.type]);
const discountPct = n => DISCOUNTS.reduce((m, d) => (n >= d.minNights && d.pct > m ? d.pct : m), 0);
function calcTotal(p, n) {
  const pct = discountPct(n), gross = p * n;
  return { pct, gross, total: Math.round(gross * (100 - pct) / 100) };
}

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover: hover)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const smooth = () => (reduceMotion ? 'auto' : 'smooth');

function toast(text, ms = 3500) {
  const el = $('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('show'), ms);
}

// fetch + timeout (AbortController)
async function fetchT(url, opts = {}, ms = 10000) {
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), ms);
  try { return await fetch(url, { ...opts, signal: ctl.signal }); } finally { clearTimeout(timer); }
}

/* ================== Tungi rejim ================== */
function syncThemeBtn() { $('theme').setAttribute('aria-pressed', document.documentElement.dataset.theme === 'dark'); }
$('theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('gs_theme', next); } catch { /* storage yo'q */ }
  syncThemeBtn();
});
syncThemeBtn();

/* ================== Menyu, scroll, animatsiyalar ================== */
const header = $('header'), nav = $('nav'), burger = $('burger'), ind = $('navInd');
const links = [...nav.querySelectorAll('a')];

function moveIndicator() {
  const a = nav.querySelector('a.active') || links[0];
  ind.style.left = a.offsetLeft + 'px';
  ind.style.width = a.offsetWidth + 'px';
}
function setActive(a) {
  links.forEach(l => l.classList.toggle('active', l === a));
  setTimeout(moveIndicator, 20);
}
function setMenu(open) {
  nav.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
}
links.forEach(a => {
  a.addEventListener('mouseenter', () => { ind.style.left = a.offsetLeft + 'px'; ind.style.width = a.offsetWidth + 'px'; });
  a.addEventListener('click', () => setMenu(false));
});
nav.addEventListener('mouseleave', moveIndicator);
window.addEventListener('resize', moveIndicator);
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
// Menyu tashqariga bosilganda yopiladi
document.addEventListener('click', e => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) setMenu(false);
});

const sections = ['home', 'rooms', 'services', 'booking', 'contact'].map($);
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 60);
  const max = document.documentElement.scrollHeight - innerHeight;
  $('progress').style.width = (max > 0 ? Math.min(scrollY / max, 1) * 100 : 0) + '%';
  let cur = sections[0];
  sections.forEach(s => { if (scrollY + innerHeight * 0.4 >= s.offsetTop) cur = s; });
  const a = links.find(l => l.getAttribute('href') === '#' + cur.id);
  if (a && !a.classList.contains('active')) setActive(a);
}, { passive: true });

if (!reduceMotion) {
  const stars = $('stars');
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('i');
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s`;
    stars.appendChild(s);
  }
}

const fmtCount = (el, v) => { el.textContent = +el.dataset.count === 49 ? (v / 10).toFixed(1) : v.toLocaleString('en-US'); };
const countUp = el => {
  const target = +el.dataset.count;
  if (reduceMotion) { fmtCount(el, target); return; }
  const dur = 1600, t0 = performance.now();
  const step = now => {
    const p = Math.min((now - t0) / dur, 1);
    fmtCount(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      const c = e.target.querySelector('[data-count]');
      if (c) countUp(c);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    io.observe(el);
  });
} else {
  revealEls.forEach(el => el.classList.add('in')); // eski brauzer: hammasini ko'rsat
}

// Karta qiyaligi faqat sichqonchali qurilmada va harakat kamaytirilmagan bo'lsa
if (canHover && !reduceMotion) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

/* ================== Xonalar ma'lumoti ================== */
const typeName = k => t('type_' + k);
const typeOf = (floor, n) => {
  if (floor <= 1) return 'standart';
  if (floor === 2) return n <= 3 ? 'standart' : 'deluxe';
  if (floor === 3) return 'deluxe';
  return n <= 2 ? 'deluxe' : 'lyuks';
};
// Zaxira ro'yxat: /api/rooms ishlamasa shu ishlatiladi
let ROOMS = [];
for (let f = 1; f <= 4; f++)
  for (let n = 1; n <= 5; n++)
    ROOMS.push({ no: f * 100 + n, floor: f, type: typeOf(f, n) });

const TODAY = new Date();
const DEMO = new URLSearchParams(location.search).has('demo'); // ?demo — faqat brauzerda saqlanadigan sinov rejimi

function userBookings() {
  try { return JSON.parse(localStorage.getItem('gs_bookings')) || []; } catch { return []; }
}
function saveBooking(b) {
  try { localStorage.setItem('gs_bookings', JSON.stringify([...userBookings(), b])); } catch { /* storage yo'q */ }
}
let serverBookings = null, lastBookingsTxt = '';
async function loadServerBookings() {
  try {
    const r = await fetchT('/api/bookings', { cache: 'no-store' }, 8000);
    if (!r.ok) throw new Error();
    const txt = await r.text();
    if (txt === lastBookingsTxt) return; // o'zgarmagan — qayta chizmaymiz
    const data = JSON.parse(txt);
    if (!Array.isArray(data)) throw new Error();
    lastBookingsTxt = txt;
    serverBookings = data;
    if (state.selected && conflict(state.selected, state.from, state.to)) { toast(t('t_cancel', { no: state.selected })); state.selected = null; }
    render();
  } catch { /* tarmoq xatosi: oldingi ma'lumot qoladi */ }
}
const allBookings = () => DEMO ? userBookings() : (serverBookings || []);
const conflict = (roomNo, from, to) => allBookings().find(b => b.room === roomNo && b.from < to && from < b.to);

// Server xonalar va narxlarni beradi; bo'lmasa lokal konstantalar qoladi
async function loadRooms() {
  try {
    const r = await fetchT('/api/rooms', { cache: 'no-store' }, 8000);
    if (!r.ok) throw new Error();
    const j = await r.json();
    const okRooms = Array.isArray(j.rooms) && j.rooms.length && j.rooms.every(x => x && Number.isFinite(+x.no) && Number.isFinite(+x.floor) && TYPES.includes(x.type));
    const okPrices = j.prices && TYPES.every(k => Number.isFinite(+j.prices[k]));
    if (!okRooms || !okPrices) throw new Error();
    ROOMS = j.rooms.map(x => ({ no: +x.no, floor: +x.floor, type: x.type, price: Number.isFinite(+x.price) ? +x.price : undefined }));
    PRICE = Object.fromEntries(TYPES.map(k => [k, +j.prices[k]]));
    if (Array.isArray(j.discounts)) {
      const d = j.discounts.filter(x => Number.isFinite(+x.minNights) && Number.isFinite(+x.pct)).map(x => ({ minNights: +x.minNights, pct: +x.pct })).sort((a, b) => a.minNights - b.minNights);
      if (d.length) DISCOUNTS = d;
    }
    if (state.selected && !ROOMS.some(x => x.no === state.selected)) state.selected = null;
    buildMap();
    applyTexts();
  } catch { /* zaxira konstantalar ishlaydi */ }
}

/* ================== Xona tanlash xaritasi ================== */
const state = { from: iso(TODAY), to: iso(addDays(TODAY, 1)), filter: 'all', selected: null };
const checkin = $('checkin'), checkout = $('checkout');
checkin.value = state.from; checkout.value = state.to;
checkin.min = iso(TODAY); checkout.min = state.to;

const mapEls = new Map(); // xona raqami -> { btn, small }
let floorLabels = [];

// Xarita DOM'i bir marta quriladi (xonalar ro'yxati o'zgarsa qayta); keyin faqat holatlar yangilanadi
function buildMap() {
  const b = $('building'), focusNo = document.activeElement && document.activeElement.dataset && document.activeElement.dataset.no;
  b.innerHTML = '';
  mapEls.clear();
  floorLabels = [];
  const floors = [...new Set(ROOMS.map(r => r.floor))].sort((a, c) => c - a);
  floors.forEach((f, fi) => {
    const row = document.createElement('div');
    row.className = 'floor';
    row.innerHTML = '<div class="floor-label"></div><div class="floor-rooms"></div>';
    floorLabels.push([row.firstChild, f]);
    const wrap = row.lastChild;
    ROOMS.filter(r => r.floor === f).forEach((r, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'room enter';
      btn.style.animationDelay = (i * 40 + fi * 60) + 'ms';
      btn.dataset.no = r.no;
      btn.innerHTML = `<b>${r.no}</b><small></small>`;
      btn.addEventListener('animationend', e => { if (e.animationName === 'pop') btn.classList.remove('enter'); });
      setTimeout(() => btn.classList.remove('enter'), 1500);
      btn.addEventListener('click', () => {
        const c = conflict(r.no, state.from, state.to);
        c ? toast(t('t_busy', { no: r.no, d: short(c.to) })) : selectRoom(r.no);
      });
      wrap.appendChild(btn);
      mapEls.set(r.no, { btn, small: btn.lastChild });
    });
    b.appendChild(row);
  });
  render();
  if (focusNo && mapEls.has(+focusNo)) mapEls.get(+focusNo).btn.focus({ preventScroll: true });
}

// Faqat o'zgargan holatlarni yangilaydi (animatsiya qayta o'ynamaydi, fokus saqlanadi)
function render() {
  let free = 0, booked = 0;
  floorLabels.forEach(([el, f]) => { el.textContent = t('floor', { n: f }); });
  ROOMS.forEach(r => {
    const el = mapEls.get(r.no);
    if (!el) return;
    const c = conflict(r.no, state.from, state.to), { btn, small } = el;
    const dim = state.filter !== 'all' && r.type !== state.filter;
    btn.classList.toggle('free', !c);
    btn.classList.toggle('booked', !!c);
    btn.classList.toggle('selected', r.no === state.selected);
    btn.classList.toggle('dim', dim);
    btn.tabIndex = dim ? -1 : 0;
    btn.setAttribute('aria-pressed', r.no === state.selected);
    if (!dim) c ? booked++ : free++;
    const label = c ? t('booked_until', { d: short(c.to) }) : typeName(r.type);
    if (small.textContent !== label) small.textContent = label;
    btn.title = c ? `${short(c.from)} — ${short(c.to)}` : `${typeName(r.type)} · $${priceOf(r)}`;
    btn.setAttribute('aria-label', c ? t('aria_booked', { no: r.no, d: short(c.to) }) : t('aria_free', { no: r.no, type: typeName(r.type), price: priceOf(r) }));
  });
  $('cntFree').textContent = free;
  $('cntBooked').textContent = booked;
  renderSummary();
}

function renderSummary() {
  const r = ROOMS.find(x => x.no === state.selected);
  $('sumEmpty').hidden = !!r;
  $('sumBody').hidden = !r;
  if (!r) return;
  const n = nightsBetween(state.from, state.to), p = priceOf(r), c = calcTotal(p, n);
  $('sRoom').textContent = t('room_word', { no: r.no });
  $('sType').textContent = typeName(r.type);
  $('sDates').textContent = `${short(state.from)} → ${short(state.to)}`;
  $('sNights').textContent = n;
  $('sPrice').textContent = '$' + p;
  $('sDiscRow').hidden = !c.pct;
  $('sDisc').textContent = c.pct ? `${c.pct}% (−$${c.gross - c.total})` : '';
  $('sTotal').textContent = '$' + c.total;
}

function selectRoom(no, scroll) {
  state.selected = no;
  render();
  if (scroll) {
    $('booking').scrollIntoView({ behavior: smooth() });
    const el = mapEls.get(no);
    if (el) setTimeout(() => el.btn.classList.add('flash'), 500);
  }
}

function setDates() {
  const f = checkin.value, to = checkout.value;
  if (!f) return;
  state.from = f;
  checkout.min = iso(addDays(parseISO(f), 1));
  state.to = (!to || to <= f) ? checkout.min : to;
  checkout.value = state.to;
  if (state.selected && conflict(state.selected, state.from, state.to)) {
    toast(t('t_cancel', { no: state.selected }));
    state.selected = null;
  }
  render();
}
checkin.addEventListener('change', setDates);
checkout.addEventListener('change', setDates);

function setFilter(f) {
  state.filter = f;
  document.querySelectorAll('#filters .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.f === f);
    c.setAttribute('aria-pressed', c.dataset.f === f);
  });
  render();
}
document.querySelectorAll('#filters .chip').forEach(c => c.addEventListener('click', () => setFilter(c.dataset.f)));
document.querySelectorAll('.pick').forEach(b => b.addEventListener('click', () => {
  setFilter(b.dataset.type);
  $('booking').scrollIntoView({ behavior: smooth() });
}));

// Bronni serverga yuboradi. Natija: { ok, ref, total } yoki { err: kod }
async function postBooking(rec) {
  let r;
  try {
    r = await fetchT('/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(rec) }, 12000);
  } catch { return { err: 'network' }; }
  let j = {};
  try { j = await r.json(); } catch { /* JSON emas */ }
  if (r.ok && j.ok !== false) return { ok: true, ref: j.ref, total: j.total };
  const code = j.error || j.code || (r.status === 409 ? 'busy' : r.status === 429 ? 'rate_limited' : r.status >= 500 || r.status === 404 ? 'network' : 'server');
  return { err: code };
}
const ERR_KEYS = ['room', 'dates', 'past', 'name', 'phone', 'rate_limited', 'network', 'server'];

$('confirm').addEventListener('click', async () => {
  const btn = $('confirm'), name = $('name').value.trim(), phone = $('phone').value.trim();
  if (!state.selected || btn.disabled) return;
  if (name.length < 2) { toast(t('e_name')); return; }
  if (phone.replace(/\D/g, '').length < 9) { toast(t('e_phone')); return; }
  const rec = { room: state.selected, from: state.from, to: state.to, name, phone };
  const vars = { name, no: rec.room, from: short(rec.from), to: short(rec.to) };

  if (DEMO) {
    saveBooking(rec);
    toast(t('t_demo_done', vars), 7000);
  } else {
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');
    const res = await postBooking(rec);
    btn.disabled = false;
    btn.removeAttribute('aria-busy');
    if (!res.ok) {
      if (res.err === 'busy') {
        lastBookingsTxt = '';
        await loadServerBookings();
        toast(t('t_taken', { no: rec.room }));
        state.selected = null;
        render();
      } else {
        toast(t('e_' + (ERR_KEYS.includes(res.err) ? res.err : 'server')), 7000);
      }
      return;
    }
    lastBookingsTxt = '';
    await loadServerBookings();
    const total = Number.isFinite(+res.total) && res.total !== null ? +res.total : null;
    toast([t('t_done', vars), res.ref ? t('t_ref', { ref: res.ref }) : '', total !== null ? t('t_total', { total }) : ''].filter(Boolean).join(' '), 9000);
  }
  state.selected = null;
  $('name').value = $('phone').value = '';
  render();
});

/* ================== Til almashtirish ================== */
// Matnlar, aria-label, alt, meta — chat holatiga tegmaydi
function applyTexts() {
  document.documentElement.lang = lang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => { const s = t(el.dataset.i18n); el.textContent = s; el.hidden = s === ''; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-alt]').forEach(el => el.alt = t(el.dataset.i18nAlt));
  document.querySelectorAll('[data-price]').forEach(el => el.textContent = '$' + PRICE[el.dataset.price]);
  document.querySelectorAll('#lang button').forEach(b => { b.classList.toggle('on', b.dataset.l === lang); b.setAttribute('aria-pressed', b.dataset.l === lang); });
  document.querySelectorAll('#filters .chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.f === state.filter));
  const desc = t('meta_desc');
  [['meta[name="description"]'], ['meta[property="og:description"]'], ['meta[name="twitter:description"]']].forEach(([q]) => { const m = document.querySelector(q); if (m) m.content = desc; });
  [['meta[property="og:title"]'], ['meta[name="twitter:title"]']].forEach(([q]) => { const m = document.querySelector(q); if (m) m.content = t('title'); });
  render();
  setTimeout(moveIndicator, 50);
}
function applyLang() {
  applyTexts();
  if (msgs.children.length) { msgs.innerHTML = ''; convo.length = 0; greet(); }
}
document.querySelectorAll('#lang button').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.l;
  try { localStorage.setItem('gs_lang', lang); } catch { /* storage yo'q */ }
  applyLang();
}));

/* ================== AI yordamchi (Silk AI) ================== */
const chat = $('chat'), msgs = $('chatMsgs'), input = $('chatInput'), chatSend = $('chatSend'), fab = $('chatFab');
let pending = false; // javob kutilayotganda yangi xabar yuborilmaydi

function greet() {
  botSay(t('greet'), [t('c_free'), t('c_prices'), t('c_services'), t('c_address')]);
}
function openChat() {
  chat.classList.add('open');
  fab.setAttribute('aria-expanded', 'true');
  if (!msgs.children.length) greet();
  // Mobilda avtomatik fokus klaviaturani ochib yuboradi — faqat desktopda inputga, aks holda oynaning o'ziga
  setTimeout(() => (finePointer ? input : chat).focus({ preventScroll: true }), 300);
}
function closeChat(restoreFocus = true) {
  chat.classList.remove('open');
  fab.setAttribute('aria-expanded', 'false');
  if (restoreFocus) fab.focus();
}
fab.addEventListener('click', () => chat.classList.contains('open') ? closeChat(false) : openChat());
$('chatClose').addEventListener('click', () => closeChat());
$('heroAsk').addEventListener('click', openChat);
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (chat.classList.contains('open')) closeChat();
  else if (nav.classList.contains('open')) { setMenu(false); burger.focus(); }
});

function addMsg(text, who) {
  const m = document.createElement('div');
  m.className = 'msg ' + who;
  m.textContent = text;
  msgs.appendChild(m);
  msgs.scrollTop = msgs.scrollHeight;
}
function addChips(list) {
  if (!list || !list.length) return;
  const box = document.createElement('div');
  box.className = 'chips';
  list.forEach(label => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.addEventListener('click', () => { if (pending) return; box.remove(); userSay(label); });
    box.appendChild(b);
  });
  msgs.appendChild(box);
  msgs.scrollTop = msgs.scrollHeight;
}
function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'msg bot typing';
  typing.innerHTML = '<i></i><i></i><i></i>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  return typing;
}
function botSay(text, chips) {
  const typing = showTyping();
  return new Promise(res => setTimeout(() => { typing.remove(); addMsg(text, 'bot'); addChips(chips); res(); }, 600 + Math.min(text.length * 6, 700)));
}
// --- Claude AI (server.js orqali). Server yo'q bo'lsa — qoidali javobga qaytadi ---
const convo = [];
let aiOff = false;

function chatContext() {
  const free = {};
  TYPES.forEach(k => free[k] = freeRooms(k).map(r => r.no));
  return { from: state.from, to: state.to, selected: state.selected, free };
}
async function askClaude() {
  const r = await fetchT('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: convo, lang, context: chatContext() })
  }, 25000);
  if (r.status === 503) aiOff = true;
  if (!r.ok) throw new Error('ai ' + r.status);
  return (await r.json()).text || '';
}
// Javob oxiridagi [[SELECT:302]] / [[FILTER:deluxe]] buyruqlarini bajaradi
function runActions(text) {
  const s = text.match(/\[\[SELECT:(\d{3})\]\]/), f = text.match(/\[\[FILTER:(standart|deluxe|lyuks)\]\]/);
  if (s) {
    const no = +s[1];
    if (ROOMS.some(r => r.no === no) && !conflict(no, state.from, state.to)) selectRoom(no, true);
  } else if (f) {
    setFilter(f[1]);
    $('booking').scrollIntoView({ behavior: smooth() });
  }
  return text.replace(/\[\[[A-Z]+:\w+\]\]/g, '').trim();
}
function setPending(on) {
  pending = on;
  input.disabled = chatSend.disabled = on;
  if (!on && finePointer && chat.classList.contains('open')) input.focus({ preventScroll: true });
}
async function userSay(text) {
  if (pending) return;
  setPending(true);
  try {
    addMsg(text, 'user');
    convo.push({ role: 'user', content: text });
    if (!aiOff) {
      const typing = showTyping();
      try {
        const out = runActions(await askClaude());
        typing.remove();
        if (out) {
          addMsg(out, 'bot');
          convo.push({ role: 'assistant', content: out });
          return;
        }
      } catch { typing.remove(); }
    }
    // Zaxira: oddiy qoidali yordamchi
    const r = reply(text);
    convo.push({ role: 'assistant', content: r.text });
    await botSay(r.text, r.chips);
  } finally { setPending(false); }
}
$('chatForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = input.value.trim();
  if (!v || pending) return;
  input.value = '';
  userSay(v);
});

const freeRooms = type => ROOMS.filter(r => (!type || r.type === type) && !conflict(r.no, state.from, state.to));
const range = () => `${short(state.from)}–${short(state.to)}`;
const selChips = list => list.slice(0, 3).map(r => t('c_select', { no: r.no }));

// Kalit so'zlar: foydalanuvchi qaysi tilda yozmasin tushuniladi, javob esa tanlangan tilda
const KW = {
  hello: ['salom', 'assalom', 'hello', 'qalay', 'привет', 'здравств', 'добрый'],
  free: ['bo\'sh', 'bosh xona', 'mavjud', 'bor mi', 'qaysi xona', 'free', 'available', 'свобод', 'доступн', 'есть ли'],
  cheap: ['arzon', 'cheap', 'дешев', 'недорог', 'бюджет'],
  best: ['eng yaxshi', 'hashamat', 'vip', 'jakuzi', 'best', 'luxury', 'jacuzzi', 'лучш', 'роскош', 'джакузи'],
  price: ['narx', 'qancha', 'price', 'cost', 'how much', 'tarif', 'цен', 'стоимост', 'сколько'],
  discount: ['chegirma', 'aksiya', 'discount', 'скидк', 'акци'],
  wifi: ['wifi', 'wi-fi', 'internet', 'интернет'],
  services: ['xizmat', 'spa', 'basseyn', 'restoran', 'nonushta', 'transfer', 'ovqat', 'taom', 'service', 'pool', 'restaurant', 'breakfast', 'услуг', 'бассейн', 'ресторан', 'завтрак', 'трансфер'],
  checkin: ['check', 'kelish vaqti', 'soat', 'ishlay', 'hours', 'время', 'заезд', 'выезд'],
  address: ['manzil', 'qayerda', 'joylash', 'adres', 'location', 'aloqa', 'telefon', 'raqam', 'address', 'where', 'phone', 'contact', 'адрес', 'где', 'телефон', 'контакт'],
  book: ['band qil', 'bron', 'buyurtma', 'rezerv', 'book', 'reserv', 'брон', 'заброни'],
  thanks: ['rahmat', 'raxmat', 'tashakkur', 'thank', 'спасибо', 'благодар'],
  bye: ['xayr', 'ko\'rishguncha', 'bye', 'пока', 'до свидан'],
  roomword: ['xona', 'room', 'номер', 'tanla', 'select', 'выбр', 'kerak', 'show', 'покаж', 'ko\'rsat']
};

function reply(raw) {
  const q = raw.toLowerCase().replace(/[‘’`ʻʼ]/g, '\'');
  const has = k => KW[k].some(w => q.includes(w));
  const hasW = (...w) => w.some(x => q.includes(x));
  // Tartib muhim: "deluxe" ichida "lux" bor
  const type = hasW('standart', 'standard', 'стандарт') ? 'standart'
    : hasW('deluxe', 'delux', 'deluks', 'делюкс') ? 'deluxe'
    : hasW('lyuks', 'lux', 'lüks', 'люкс', 'suite') ? 'lyuks' : null;

  const m = q.match(/\b([1-4]0[1-5])\b/);
  const mr = m && ROOMS.find(x => x.no === +m[1]);
  if (mr) {
    const no = mr.no, r = mr, c = conflict(no, state.from, state.to);
    if (c) {
      const alt = freeRooms(r.type)[0];
      return { text: t('a_booked', { no, from: short(c.from), to: short(c.to) }) + (alt ? t('a_alt', { alt: alt.no }) : t('a_noalt')), chips: alt ? [t('c_select', { no: alt.no })] : [] };
    }
    selectRoom(no, true);
    return { text: t('a_selected', { no, type: typeName(r.type), price: priceOf(r), range: range() }), chips: [t('c_prices'), t('c_free')] };
  }

  if (has('hello')) return { text: t('a_hello'), chips: [t('c_free'), t('c_prices'), t('c_services')] };

  if (has('free')) {
    if (type) {
      const f = freeRooms(type);
      if (!f.length) return { text: t('a_none_type', { range: range(), type: typeName(type) }), chips: [t('c_free')] };
      return { text: t('a_free_type', { range: range(), type: typeName(type), n: f.length, list: f.map(r => r.no).join(', ') }), chips: selChips(f) };
    }
    const lines = TYPES.map(k => t('a_line', { type: typeName(k), n: freeRooms(k).length })).join('\n');
    return { text: t('a_free_all', { range: range(), lines, booked: ROOMS.length - freeRooms().length }), chips: [t('c_std'), t('c_dlx'), t('c_lux')] };
  }

  if (type && has('roomword')) {
    setFilter(type);
    $('booking').scrollIntoView({ behavior: smooth() });
    const f = freeRooms(type);
    return { text: t('a_filter', { type: typeName(type), list: f.map(r => r.no).join(', ') || t('a_nolist') }), chips: selChips(f) };
  }

  if (has('cheap')) {
    const r = freeRooms('standart')[0] || freeRooms()[0];
    return r ? { text: t('a_cheap', { no: r.no, type: typeName(r.type), price: priceOf(r) }), chips: [t('c_select', { no: r.no })] } : { text: t('a_cheap_none') };
  }
  if (has('best')) {
    const r = freeRooms('lyuks')[0];
    return r ? { text: t('a_best', { no: r.no }), chips: [t('c_select', { no: r.no })] } : { text: t('a_best_none'), chips: [t('c_dlx')] };
  }

  if (has('price')) return { text: t('a_prices'), chips: [t('c_free'), t('c_discount')] };
  if (has('discount')) return { text: t('a_discount'), chips: [t('c_prices')] };
  if (has('wifi')) return { text: t('a_wifi') };
  if (has('services')) return { text: t('a_services'), chips: [t('c_transfer'), t('c_free')] };
  if (has('checkin')) return { text: t('a_checkin') };
  if (has('address')) return { text: t('a_address') };
  if (has('book')) return { text: t('a_book'), chips: [t('c_free')] };
  if (has('thanks')) return { text: t('a_thanks') };
  if (has('bye')) return { text: t('a_bye') };

  return { text: t('a_fallback'), chips: [t('c_free'), t('c_prices'), t('c_services')] };
}

/* ================== Ishga tushirish ================== */
buildMap();
applyLang();
if (location.protocol.startsWith('http')) {
  loadRooms();
  if (!DEMO) {
    loadServerBookings();
    setInterval(() => { if (!document.hidden) loadServerBookings(); }, 20000);
  }
}
