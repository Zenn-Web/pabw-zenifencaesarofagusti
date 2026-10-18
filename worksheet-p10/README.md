## Pertemuan 10 — JavaScript asinkron: fetch, Promise, dan JSON

- Berkas awal: hasil Pertemuan 9 (`profil.html`, lima berkas CSS, `js/app.js`, `js/dom.js`, `zen.jpg`).
- Berkas baru: **`js/api.js`** (lapisan data). Fungsi yang diekspor: **`ambilRepo()`** (nama ini yang akan ditulis pengimpor di Pertemuan 11).
- API: `https://api.github.com/users/Zenn-Web/repos?sort=pushed&per_page=12` (publik, tanpa kunci akses, mengirim `Access-Control-Allow-Origin: *`).
- Cara menjalankan: Live Server pada folder `worksheet-p10/` (atau `python -m http.server 8000`), bukan `file://`.

### Lembar A — panggilan pertama dan status respons

**A.1 Berkas yang harus ada** (jumlah baris saat disalin dari Pertemuan 9)

| Berkas | Dari | Ada? | Baris |
|---|---|---|---|
| `profil.html` | M9 | ✔ | 138 |
| Berkas CSS (`tokens`, `base`, `layout`, `komponen`, `tema`) | M4–M6 | ✔ (lima berkas, bukan enam) | 60 / 57 / 103 / 186 / 33 |
| `js/app.js` | M8 | ✔ | 199 |
| `js/dom.js` | M9 | ✔ | 145 |

**A.2 Alamat di satu tempat** — `const URL_API` di baris teratas `js/api.js`. Memakai https, tidak ada `apiKey`/token, dan alamat tidak ditulis ulang di fungsi lain atau di `app.js`. Dinamai `URL_API` (bukan `URL` seperti di contoh worksheet) agar tidak menimpa class `URL` bawaan browser.

**A.3 Hasil panggilan**

| Yang dicatat | Nilai |
|---|---|
| Alamat API | `https://api.github.com/users/Zenn-Web/repos?sort=pushed&per_page=12` |
| Status respons | `200` |
| `response.ok` | `true` |
| Content-Type | `application/json; charset=utf-8` |

Console menampilkan `status 200 ok true` tanpa teks merah.

### Lembar B — async/await dan satu try/catch

`ambilRepo()` adalah `async function`; seluruh langkahnya (`fetch` → cek `response.ok` → `json()` → cek bentuk) ada dalam satu `try/catch`. `catch` mencatat galat lalu melemparnya lagi (`throw error`), dan `try/catch` kedua di pemanggil (dipasang di Lembar D) akan menampilkan pesannya di halaman.

### Lembar C — membaca JSON

Akar respons GitHub adalah **array** (bukan objek berisi array), jadi tabel C.2 di worksheet disesuaikan.

| Nama kunci | Jenis nilai dan contoh | Cara mengaksesnya |
|---|---|---|
| (akar) `data` | array, 6 elemen | `data.forEach((repo) => …)`, `data.length` |
| `name` | teks, `"zen-porto"` | `repo.name` |
| `language` | teks atau `null`, `"PHP"` | `repo.language ?? "Tanpa bahasa"` |
| `description` | teks atau `null` (5 dari 6 repo `null`) | `repo.description ?? "Belum ada deskripsi."` |
| `stargazers_count` | angka, `1` | `repo.stargazers_count` |
| `pushed_at` | teks tanggal ISO, `"2026-10-17T17:37:27Z"` | `new Date(repo.pushed_at)` |
| `html_url` | teks, `"https://github.com/Zenn-Web/zen-porto"` | `repo.html_url` |
| `fork` | true/false, `false` | `repo.fork` |

Arah JSON: `response.json()` (teks → nilai) dipakai di `api.js`. `JSON.stringify` (nilai → teks) belum dipakai di halaman ini karena belum ada data yang dikirim ke server; baru muncul bila ada pengiriman atau penyimpanan ke `localStorage`.

