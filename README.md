## PABW - Zenifen Caesarof Agusti - 25523012
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 3 — Halaman profil saya
 
Topik halaman saya: bahasa pemrograman yang saya ingin pelajari.
 
- Judul halaman: Next language to master.
- Deskripsi: Saya adalah seorang developer yang ingin berkembang. Disinilah saya memberikan bahasa pemrograman apa yang selanjutnya ingin ku kuasai agar knowledge ku berkembang.
- Tautan navigasi: Reason, Planning, About
- Dua bagian utama: Alasan saya, Planning saya
- Kolom tabel: Target, Prioritas, Tujuan
- Kolom form: Bahasa pemrograman, Prioritas, Alasan
- Gambar: zen.jpg
 
## Catatan penggunaan AI
 
Menggunakan AI = Melihat dokumentasi HTML yang lupa
Tidak menggunakan AI = Membuat struktur tugas, git dan github, menulis beberapa code html

## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: Lime Green (#15803D di tema terang, #0AFF1B di tema gelap), dipilih karena menjadi simbol saya untuk selalu aktif dan update terhadap perkembangan teknologi/stack enterprise yang akan saya kuasai, sekaligus memenuhi rasio kontras WCAG AA (minimal 4.5:1).
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #15803D (gelap: #0AFF1B) | tombol, tautan, judul, penanda |
| --color-fg | #0F172A (gelap: #E2E8F0) | warna teks utama |
| --color-bg | #F8FAFC (gelap: #0F172A) | latar halaman |
| --color-surface | #FFFFFF (gelap: #1E293B) | latar kartu dan panel |
| --color-border | #CBD5E1 (gelap: #334155) | garis tepi dan pemisah |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah `--color-primary` di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus secara serempak.

### Catatan penggunaan AI (Pertemuan 4)
- Menggunakan AI: Diskusi kalkulasi rasio kontras warna lime terhadap standar WCAG AA, referensi sintaks selector CSS modern `:has()` dan `:user-invalid`, serta verifikasi kelengkapan checklist worksheet.
- Tidak menggunakan AI: Penentuan konsep warna lime, perancangan tema profil, penyusunan struktur token dua lapis, dan penyesuaian tata letak.

## Pertemuan 8 — Halaman profil yang datanya bergerak

- Berkas awal: hasil Pertemuan 4 (`profil.html` + `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, `zen.jpg`).
- Berkas baru: `js/app.js`, dihubungkan dengan satu baris `<script type="module" src="js/app.js"></script>` tepat sebelum `</body>`.
- Cara menjalankan: buka folder `worksheet-p8/` di VS Code → klik kanan `profil.html` → **Open with Live Server** (atau `python -m http.server 8000`). Jangan dibuka dengan klik dua kali (`file://`).

### Data yang dipindah dari HTML ke JavaScript

| Data | Variabel | Bentuk |
|---|---|---|
| Nama lengkap | `profil.nama` | string |
| Kalimat peran | `profil.peran` | string |
| Daftar keahlian | `profil.keahlian` | array of string (5 isi) |
| Target belajar (tabel + kartu) | `daftarTarget` | array of object (3 isi) |
| Daftar proyek | `daftarProyek` | array of object (6 isi) |
| Angka yang dipakai | `pertemuan`, `tahun`, `daftarProyek.length` | number |

Judul halaman ditulis sekali di `profil.judulHalaman` lalu dipakai untuk `<title>` dan `<h1>`.

### Fungsi murni
- `buatPerkenalan({ nama, peran })` → `"Nama — Peran"` (peran punya nilai bawaan).
- `formatKeahlian(daftar)` → menggabungkan array menjadi satu baris dengan `" · "`.
- Tambahan: `hitungProyekSelesai`, `buatBarisTarget`, `buatKartuTarget`, `buatKartuProyek`, `ubahKeAngka`.

### Array methods
- `filter` → proyek yang selesai (3 isi) dan proyek pribadi (3 isi).
- `find` → "Website Portofolio" (satu object); "Katalog Produk" → `undefined` karena tidak ada di data.
- `map` → daftar judul proyek (panjang 6 = panjang asal), juga untuk menyusun baris tabel dan kartu.
- `sort` dipakai pada salinan `[...daftarProyek]`, jadi urutan data asli tidak berubah.

### Galat yang ditemui (Lembar E)

| Pesan galat | Baris | Sebab | Yang diubah |
|---|---|---|---|
| `Access to script at 'file:///…/js/app.js' from origin 'null' has been blocked by CORS policy` | profil.html:1 (baris `<script>` 125) | Halaman dibuka dengan klik dua kali (`file://`), peramban menolak memuat modul | Membuka lewat Live Server sehingga alamat berawalan `http://` |
| `Failed to load resource: the server responded with a status of 404` untuk `app.js` | profil.html:125 | Atribut `src` ditulis `app.js` padahal berkasnya ada di dalam folder `js/` | Mengembalikan `src="js/app.js"` |
| `Elemen #ringkasan-proyk tidak ditemukan — periksa id di profil.html` (dari `console.error`) | js/app.js:175 | Selector salah ketik `#ringkasan-proyk`, sedangkan id di HTML `ringkasan-proyek`; `querySelector` mengembalikan `null`. Tanpa pemeriksaan `elemen === null`, baris berikutnya akan melempar `TypeError: Cannot read properties of null` | Membetulkan selector menjadi `#ringkasan-proyek`; pemeriksaan null di fungsi `isiElemen` tetap dipertahankan |

Tangkapan layar Console: `worksheet-p8/screenshots/e1-cors.png`, `e2-404.png`, `e3-null.png`.

### Deklarasi penggunaan AI (Pertemuan 8)
- Dibantu AI (Claude): penulisan `js/app.js` (struktur data, fungsi murni, array methods, fungsi `isiElemen`), penyesuaian `profil.html` agar isinya diisi dari JavaScript, pengujian halaman di peramban untuk memastikan Console bersih, reproduksi tiga galat Lembar E, dan draf README ini.
- Saya kerjakan sendiri: *(isi bagian yang benar-benar Anda kerjakan sendiri — misalnya memeriksa ulang setiap baris, menjalankan di Live Server, tangkapan layar Console, commit Git, tiket keluar)*.
