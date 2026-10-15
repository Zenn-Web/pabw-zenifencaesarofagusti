## Pertemuan 9 — DOM, event, dan interaktivitas

- Berkas awal: hasil Pertemuan 8 (`profil.html`, lima berkas CSS, `js/app.js`, `zen.jpg`).
- Berkas baru: `js/dom.js`, dihubungkan setelah `app.js` lewat `<script type="module" src="js/dom.js"></script>` sebelum `</body>`.
- Perubahan di `app.js`: `daftarProyek` di-`export`, penggambaran kartu proyek lewat `innerHTML` dipindah ke `dom.js`, `pertemuan = 9`.
- Cara menjalankan: Live Server pada folder `worksheet-p9/` (atau `python -m http.server 8000`), bukan `file://`.

### Elemen yang dipilih (Lembar A)

| Area | Selector | Variabel |
|---|---|---|
| Daftar proyek | `#katalog-proyek` | `daftarEl` |
| Baris tombol filter | `#filter` | `barisFilter` |
| Pesan daftar kosong | `#pesan-kosong` | `pesanKosong` |
| Form dan kolomnya | `#form-rencana`, `input, textarea` | `formRencana`, `semuaKolom` |

### Yang dikerjakan
- **B** — `render(daftar)` membuat satu kartu per item dengan `createElement` + `textContent` + `append` (lewat `DocumentFragment`); baris pertamanya mengosongkan wadah.
- **C** — satu `addEventListener("click")` di `#filter` memakai `event.target.closest("button")` dan `dataset.category`; tombol aktif ditandai dengan class `active` (`classList.toggle`). Kategori "Magang" sengaja kosong untuk menguji pesan kosong.
- **D** — form `novalidate`: `preventDefault()` di baris pertama submit, `trim()`, `aria-invalid`, pesan galat per kolom yang hilang saat kolom valid, `focus()` ke kolom pertama yang gagal, tombol disabled sampai semua kolom valid (setelah percobaan submit pertama).

### Kasus sulit (Lembar E)

| Gejala | Sebab | Baris yang diubah |
|---|---|---|
| Tombol filter tidak bereaksi, daftar kosong; `TypeError: Cannot read properties of null (reading 'addEventListener')` di `dom.js:72` | `querySelector("#filtr")` salah ketik, hasilnya `null` | `js/dom.js:13` → `#filter` |
| Konsol bersih, tetapi handler klik berjalan 6 kali untuk 3 klik | `addEventListener` ada di dalam `render()` sehingga tertambah setiap render | dihapus dari `render()` (`dom.js:47`); dipasang sekali di `dom.js:72` |
| Konsol bersih, kartu berlipat jadi 18 setelah klik kuliah, kuliah, semua | baris pengosongan wadah hilang dari `render()` | dikembalikan `daftarEl.textContent = ""` (`dom.js:48`) |

Tangkapan layar (`worksheet-p9/screenshots/`): `e1-senyap-selector-null.png`, `e3-kartu-berlipat.png`, `c-filter-kuliah.png`, `c-filter-kosong.png`, `d-validasi-galat.png`. Tangkapan panel DevTools → Event Listeners belum ada.

### Deklarasi penggunaan AI (Pertemuan 9)
- Dibantu AI (Claude): menulis `js/dom.js`, perubahan HTML/CSS pendukung, mengisi worksheet.
- Saya kerjakan sendiri: Melakukan testing di browser, Membuatkan boilerplate
