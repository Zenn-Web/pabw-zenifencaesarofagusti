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

