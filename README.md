# Nihongo N5 - Static JLPT N5 Learning Website

Website statis untuk membantu belajar JLPT N5: Kanji N5, flashcard, quiz, latihan soal, viewer halaman PDF, dan percakapan dasar bahasa Jepang.

## Fitur

- Dashboard progress belajar
- Daftar Kanji JLPT N5
- Search kanji, arti, onyomi, kunyomi, dan kosakata
- Filter sudah/belum dipelajari
- Detail kanji
- Flashcard
- Quiz kanji
- Latihan JLPT N5 interaktif
- Viewer halaman PDF latihan
- Percakapan bahasa Jepang level N5
- Progress tersimpan menggunakan `localStorage`

## Struktur folder

```txt
nihongo-n5-static-clean/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── jlpt-app.js
├── data/
│   ├── kanji-data.js
│   └── exam-data.js
└── assets/
    └── jlpt-pages/
        ├── page-01.webp
        └── ...
```

## Cara menjalankan di lokal

Cara paling mudah:

1. Buka folder project.
2. Klik dua kali `index.html`.

Cara yang lebih rapi:

```bash
python -m http.server 8000
```

Lalu buka:

```txt
http://localhost:8000
```

## Cara push ke GitHub

```bash
git init
git add .
git commit -m "Initial static JLPT N5 learning website"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Deploy ke GitHub Pages

1. Masuk ke repository GitHub.
2. Buka **Settings**.
3. Pilih **Pages**.
4. Source: **Deploy from a branch**.
5. Branch: **main** dan folder **/root**.
6. Save.

Tunggu beberapa menit sampai link GitHub Pages aktif.

## Catatan

Website ini masih statis, jadi progress user hanya tersimpan di browser masing-masing. Untuk banyak pengguna dengan akun, leaderboard, progress lintas perangkat, dan AI tutor, project ini bisa dinaikkan ke Laravel + database.

## Fitur Tema

Website sudah mendukung **dark mode** dan **light mode**. Klik tombol `Dark` / `Light` di kanan atas navbar untuk mengganti tema. Pilihan tema akan tersimpan otomatis di browser menggunakan `localStorage`, jadi saat website dibuka lagi temanya tetap sama.
