# Grand Silk Hotel

Samarqanddagi mehmonxona sayti: statik sahifalar, xona band qilish, admin panel va Claude asosidagi yordamchi (chat). Sof Node.js, framework yo'q.

## Ishga tushirish

```
npm install
cp .env.example .env     # va qiymatlarni to'ldiring
npm start                # yoki: npm run dev (o'zgarishda qayta ishga tushadi)
```

Sayt: http://localhost:3000, admin: http://localhost:3000/admin. Node 18+ kerak.

## .env o'zgaruvchilari

| Nomi | Izoh |
|---|---|
| `ANTHROPIC_API_KEY` | Chat uchun kalit. Bo'sh bo'lsa chat oddiy (qoidali) rejimda ishlaydi. |
| `ADMIN_PASSWORD` | Admin paroli. Bo'sh bo'lsa admin o'chiq. |
| `CLAUDE_MODEL` | Default `claude-haiku-5-5`. |
| `CHAT_DAILY_LIMIT` | Chatga kunlik umumiy so'rovlar soni (default 500). |
| `PORT` | Default 3000. |
| `TRUST_PROXY=1` | Proksi ortida: IP `X-Forwarded-For` dan, HTTPS `X-Forwarded-Proto` dan olinadi. |
| `SEED_DEMO=1` | Faqat demo: birinchi ishga tushishda 12 ta soxta bron yaratadi. |
| `DATA_DIR` | Ma'lumotlar papkasi (default `./data`). |

## API

Ommaviy:
- `GET /api/health` — holat.
- `GET /api/rooms` — xonalar, narxlar, chegirmalar.
- `GET /api/bookings` — band oraliqlar (faqat room/from/to).
- `POST /api/bookings` — `{room, from, to, name, phone}` -> `{ok, ref, total}`. Xatolar: `room`, `dates`, `past`, `name`, `phone`, `busy` (409), `rate_limited` (429).
- `POST /api/chat` — AI yordamchi.

Admin (cookie orqali kirish):
- `POST /api/admin/login`, `POST /api/admin/logout`
- `GET /api/admin/bookings` — bronlar (`total` bilan), xonalar, chegirmalar.
- `POST /api/admin/bookings` -> `{ok, id, total}`
- `PATCH /api/admin/bookings/:id` (`{status}`), `DELETE /api/admin/bookings/:id`

Narx: 4+ tun -10%, 8+ tun -15%.

## Deploy eslatmalari

- Faqat HTTPS orqali ishlating (nginx/Caddy/Cloudflare). Proksi ortida `TRUST_PROXY=1` qo'ying, aks holda barcha foydalanuvchilar bitta IP bo'lib ko'rinadi va limitlar noto'g'ri ishlaydi. HTTPS bo'lganda admin cookie'ga `Secure` avtomatik qo'shiladi.
- `data/bookings.json` da mehmonlarning ism va telefonlari bor (PII): gitga kiritilmaydi, muntazam zaxira nusxa oling va ruxsatlarini cheklang.
- Jarayon menejeri (systemd/pm2) ishlating; server SIGTERM da bronlarni saqlab, to'g'ri to'xtaydi.
- Kunlik chat chegarasi xotirada saqlanadi: qayta ishga tushirganda nolga tushadi.
