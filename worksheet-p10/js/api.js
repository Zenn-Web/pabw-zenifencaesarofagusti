// ==========================================================================
// PABW Pertemuan 10 — Lapisan data
// Berkas ini satu-satunya tempat yang memanggil fetch. app.js hanya
// mengimpor ambilRepo() dan menggambar hasilnya.
// ==========================================================================

// Alamat API ditulis sekali di sini (Lembar A.2): publik, https, tanpa kunci akses.
// Dinamai URL_API, bukan URL, supaya tidak menimpa class URL bawaan browser.
const URL_API = "https://api.github.com/users/Zenn-Web/repos?sort=pushed&per_page=12";

// Lembar A.3 + B.1 — ambil, cek status, baca JSON. Satu try/catch untuk seluruh rantai.
export async function ambilRepo() {
  try {
    const response = await fetch(URL_API);
    console.log("status", response.status, "ok", response.ok);

    // fetch tidak melempar galat untuk 404/403/500, jadi status dicek sebelum body dibaca
    if (!response.ok) throw new Error("status " + response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("gagal memuat", error.message);
    throw error; // dilempar lagi: try/catch kedua ada di pemanggil (app.js)
  }
}
