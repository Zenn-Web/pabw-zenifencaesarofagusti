// ==========================================================================
// PABW Pertemuan 10 — Lapisan data
// Berkas ini satu-satunya tempat yang memanggil fetch.
// ==========================================================================

// Alamat API ditulis sekali di sini (Lembar A.2): publik, https, tanpa kunci akses.
// Dinamai URL_API, bukan URL, supaya tidak menimpa class URL bawaan browser.
const URL_API = "https://api.github.com/users/Zenn-Web/repos?sort=pushed&per_page=12";

// Lembar A.3 — ambil, cek response.ok sebelum body dibaca
export async function ambilRepo() {
  const response = await fetch(URL_API);
  console.log("status", response.status, "ok", response.ok);
  if (!response.ok) {
    throw new Error("status " + response.status);
  }
  return response.json();
}
