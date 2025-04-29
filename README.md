# BERBAGI Apps - Landing Page

Ini adalah landing page resmi untuk **BERBAGI Apps**, sebuah platform sosial untuk menghubungkan relawan, donatur, dan komunitas dalam aksi nyata berbagi.

Website ini dibangun dengan **Next.js 15.1.7** dan **Tailwind CSS** agar tampil modern, cepat, dan responsif di semua device.

---

## 🚀 Fitur Utama

- Hero Section dengan headline kuat dan mockup aplikasi
- About Us Section untuk mengenalkan platform
- Fitur Unggulan BERBAGI Apps
- Testimoni nyata dari pengguna
- Call To Action untuk download aplikasi
- Footer berisi navigasi tambahan
- Desain sepenuhnya **mobile-first** dan **responsif**

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- [Next/Image](https://nextjs.org/docs/api-reference/next/image) (Optimized Images)

---

## 📁 Struktur Project

```
src/
├── components/
│   ├── HeroSection.js
│   ├── AboutUsSection.js
│   ├── FeaturesSection.js
│   ├── TestimonialSection.js
│   ├── CTASection.js
│   └── Footer.js
├── pages/
│   └── index.js
├── public/
│   ├── images/
│   │   └── mockup.png
│   │   └── user-placeholder.png
```

---

## ⚙️ Cara Instalasi

1. Clone repository ini:

```bash
git clone https://github.com/Farhan-TechDev/berbagi-apps-web.git
```

2. Masuk ke folder project:

```bash
cd berbagi-apps-web
```

3. Install dependencies:

```bash
npm install
```
atau
```bash
yarn install
```

---

## 🖥️ Cara Menjalankan Development Server

```bash
npm run dev
```
atau
```bash
yarn dev
```

Server berjalan di:  
`http://localhost:3000`

---

## 📸 Catatan Next.js 15.1.7 (Upgrade Important!)

- Jangan gunakan prop `layout="fill"` di `<Image />` — sekarang pakai `fill` + `style={{ objectFit: 'contain' }}`.
- Semua komponen harus di-**default export** supaya bisa diimport tanpa `{}`.
- Pastikan semua gambar ada di folder `public/images/`.

---

## ✨ Improvement Selanjutnya

- Menyelesaikan Section-Section.
- Menambahkan animasi scroll.
- Mengintegrasikan form kontak menggunakan Formspree atau API sederhana.
- SEO Optimization: title, meta description, open graph tag.
- Menghubungkan tombol download dengan link Google Play & App Store.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---
