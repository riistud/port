# Kaizen Developer Portfolio

Portfolio website interaktif dengan animasi menarik, tampilan responsif, dan fitur pemutar musik.

## Fitur

- 📱 Tampilan responsif untuk berbagai perangkat (mobile, tablet, desktop)
- ✨ Animasi halus dengan framer-motion
- 🎵 Pemutar musik background dengan control volume
- 🌓 Desain modern dengan gradien dan glassmorphism
- 📞 Integrasi WhatsApp untuk kontak langsung
- 🚀 Siap deploy ke Vercel

## Teknologi

- React + Vite
- TypeScript
- TailwindCSS
- Framer Motion
- Express.js
- Font Awesome

## Cara Menjalankan Locally

1. Clone repository
2. Install dependencies:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm run dev
   ```

## Cara Kustomisasi

### Mengganti Gambar Profile

1. Simpan file gambar JPG Anda di folder `client/public/images/`
2. Beri nama filenya, misalnya `profile.jpg`
3. Edit file `client/src/components/sections/HeroSection.tsx` 
   ```jsx
   // Cari bagian ini di HeroSection.tsx
   <ProfileImage />
   
   // Ganti dengan
   <ProfileImage imagePath="profile.jpg" />
   ```

### Mengganti Nomor WhatsApp

1. Edit file `client/src/components/sections/ContactSection.tsx`
2. Cari variabel `whatsappNumber` dan ganti dengan nomor WhatsApp Anda:
   ```typescript
   const whatsappNumber = "6282295954278";
   ```

## Deployment ke Vercel

Website ini dapat di-deploy ke Vercel dengan dua cara berbeda:

### 1. Mode Static (Vite-only)

Untuk deployment mode static yang hanya mengandalkan Vite tanpa backend Express:

1. Rename file `vercel-vite.json` menjadi `vercel.json`
2. Login ke Vercel dan deploy dengan mengimpor project GitHub
3. Vercel akan otomatis mendeteksi konfigurasi dan men-deploy versi static

Mode ini cocok jika Anda tidak memerlukan fitur backend dan hanya menampilkan website statis.

### 2. Mode Full-stack (Express + Vite)

Untuk deployment full-stack dengan Express sebagai backend:

1. Pastikan file `vercel.json` (bukan vercel-vite.json) ada di root project
2. Login ke Vercel dan deploy dengan mengimpor project GitHub
3. Vercel akan menjalankan server Express dan build client Vite secara bersamaan

Mode ini diperlukan jika Anda menggunakan API routes atau fitur backend lainnya.

## Struktur Project

- `/client` - Kode frontend React+Vite
- `/server` - Server Express
- `/shared` - Kode yang digunakan bersama antara client dan server
- `/db` - Konfigurasi database

## Kontributor

- KaiziDEV - Lead developer dan mentor
- RiiCODE - Backend expertise dan guidance
- HamzDEV - Frontend design collaboration
- KyamiSilence - Testing dan quality assurance
- Asy - Creative ideas dan inspiration