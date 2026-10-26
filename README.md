# THE VISIONARY — Personal Portfolio

Website statis (HTML/CSS/JS) + satu Vercel Serverless Function untuk form kontak.

```
visionary/
├── index.html
├── css/        fonts.css · base.css · sections.css
├── js/         config.js · i18n.js · background.js · ui.js · effects.js · contact.js
├── api/        contact.js        ← kirim email + verifikasi reCAPTCHA (server)
├── assets/     img/ (foto, kota)  ·  fonts/ (Plus Jakarta Sans)  ·  favicon.svg
├── package.json · vercel.json · .env.example · .gitignore
```

## Langkah deploy ke Vercel

### 1. Buat kunci reCAPTCHA
1. Buka https://www.google.com/recaptcha/admin/create (login akun Google).
2. Label bebas, tipe: **reCAPTCHA v2 → "I'm not a robot" Checkbox**.
3. Domain: isi `localhost` dan domain Vercel kamu (mis. `nama-project.vercel.app`; tambahkan domain custom kalau ada). Kamu bisa menambah domain lagi nanti di pengaturan.
4. Simpan dua kunci: **Site Key** (publik) dan **Secret Key** (rahasia).
5. Buka `js/config.js`, ganti `RECAPTCHA_SITE_KEY` dengan **Site Key**.

### 2. Buat App Password Gmail (pengirim email)
Email dikirim lewat Gmail SMTP. Bisa pakai `aditamaputra044@gmail.com` sebagai pengirim sekaligus penerima.
1. Aktifkan **Verifikasi 2 Langkah** di https://myaccount.google.com/security
2. Buka https://myaccount.google.com/apppasswords → buat App Password (nama bebas, mis. "portfolio").
3. Salin 16 karakter yang muncul (tanpa spasi). Ini **bukan** password Gmail biasa.

### 3. Upload ke GitHub
```bash
cd visionary
git init
git add .
git commit -m "THE VISIONARY portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/visionary-portfolio.git
git push -u origin main
```
(`.env` sudah di-ignore, jadi secret tidak ikut ter-upload.)

### 4. Import ke Vercel
1. https://vercel.com/new → **Import** repo tadi.
2. **Framework Preset: Other**. Build Command, Output Directory, Install Command: biarkan kosong/default.
3. Buka **Environment Variables**, tambahkan:

| Name | Value |
|---|---|
| `RECAPTCHA_SECRET` | Secret Key reCAPTCHA |
| `GMAIL_USER` | alamat Gmail pengirim |
| `GMAIL_APP_PASSWORD` | App Password 16 karakter |
| `CONTACT_TO` | `aditamaputra044@gmail.com` |

4. Klik **Deploy**.

### 5. Tes
Buka URL Vercel → bagian Contact → isi form → centang reCAPTCHA → kirim. Cek inbox `aditamaputra044@gmail.com` (juga folder Spam saat pertama kali). Balas email dari inbox akan langsung ke alamat pengirim form (Reply-To).

Kalau env var diubah setelah deploy, lakukan **Redeploy** agar berlaku.

### Alternatif: lewat Vercel CLI
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # produksi
```

## Tes lokal
- Tampilan saja: buka `index.html`, atau `npx serve .`
- Termasuk form kontak: salin `.env.example` → `.env`, isi nilainya, lalu `npx vercel dev`.

## Yang perlu kamu isi / ganti
- `js/config.js` → Site Key reCAPTCHA.
- Footer `index.html` → link GitHub (masih `#`) dan cek link Instagram.
- `js/i18n.js` → teks EN/ID, skill, dan daftar proyek.
- `assets/img/` → ganti foto (`profile.jpg`, `profile-hover.jpg`) atau latar kota (`city.jpg`; kalau punya versi resolusi lebih tinggi, hasilnya lebih tajam).

## Troubleshooting
- **Form menjawab "reCAPTCHA isn't configured"** → Site Key di `js/config.js` belum diganti.
- **reCAPTCHA tidak muncul / "Invalid domain"** → domain Vercel belum ditambahkan di pengaturan reCAPTCHA.
- **"Couldn't send the message"** → cek Vercel → Project → Logs (`/api/contact`). Biasanya env var belum lengkap, App Password salah, atau belum Redeploy.
- Batas kirim Gmail sekitar 500 email/hari — lebih dari cukup untuk portfolio.
