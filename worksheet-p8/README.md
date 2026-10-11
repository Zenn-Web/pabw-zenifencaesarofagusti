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
- Dibantu AI (Claude): Membantu mengarahkan dan membetulkan sintaksis di js/app.js, menjelaskan ulang code yang saya buat, menulis keterangan untuk membantu saya belajar
- Saya kerjakan sendiri: menyambungkan js/app.js, mendeklarasi variabel dan isi nilai di app.js, menuliskan code logic ke js/app.js (mencoba)
