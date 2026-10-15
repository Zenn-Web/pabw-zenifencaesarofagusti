// ==========================================================================
// PABW Pertemuan 9 — DOM, event, dan interaktivitas
// app.js menyimpan data dan fungsi murni; berkas ini yang menyentuh halaman.
// ==========================================================================

import { daftarProyek } from "./app.js";


// --------------------------------------------------------------------------
// Lembar A — memilih elemen (diuji di Console, tidak ada yang null)
// --------------------------------------------------------------------------

const daftarEl = document.querySelector("#katalog-proyek");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const formRencana = document.querySelector("#form-rencana");
const tombolSimpan = document.querySelector("#tombol-simpan");
const statusForm = document.querySelector("#status-form");
const labelKategori = { kuliah: "Tugas kuliah", pribadi: "Proyek pribadi" };

// --------------------------------------------------------------------------
// Lembar B & D.1 — render: kosongkan, cek kosong, isi ulang
// --------------------------------------------------------------------------

// Satu objek proyek → satu elemen kartu. Semua teks lewat textContent.
function buatKartu(proyek) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const lencana = document.createElement("span");
  lencana.className = proyek.selesai ? "lencana lencana--prioritas" : "lencana";
  lencana.textContent = proyek.selesai ? "Selesai" : "Berjalan";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const info = document.createElement("p");
  info.textContent = `${labelKategori[proyek.kategori] ?? proyek.kategori} · ${proyek.tahun}`;

  const stack = document.createElement("p");
  stack.textContent = (proyek.stack ?? []).join(" · ");

  kartu.append(lencana, judul, info, stack);
  return kartu;
}

function render(daftar, kategori = "semua") {
  daftarEl.textContent = ""; // 1. kosongkan dulu

  if (daftar.length === 0) { // 2. tangani keadaan kosong
    pesanKosong.textContent = `Belum ada proyek untuk kategori "${kategori}".`;
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  const wadah = document.createDocumentFragment(); // 3. isi ulang, gambar sekali
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
  daftarEl.append(wadah);
}

// --------------------------------------------------------------------------
// Lembar C — satu pendengar di induk melayani semua tombol filter
// --------------------------------------------------------------------------

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("active", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // klik di luar tombol, abaikan

  const kategori = tombol.dataset.category;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih, kategori);
});

render(daftarProyek); // tampilan awal: semua proyek, tombol "Semua" sudah aktif dari HTML
