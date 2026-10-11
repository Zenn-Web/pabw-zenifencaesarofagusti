// ==========================================================================
// PABW Pertemuan 8 — Data halaman profil sebagai nilai JavaScript
// Seluruh isi halaman (identitas, keahlian, target belajar, proyek) ditulis
// sekali di sini. Untuk mengubah isi halaman, ubah data di bagian 1 saja.
// ==========================================================================

// --------------------------------------------------------------------------
// 1. DATA (Lembar B & D) — semuanya const karena tidak ditunjuk ulang
// --------------------------------------------------------------------------

const profil = {
  nama: "Zenifen Caesarof Agusti",
  nim: "25523012",
  kelas: "C",
  peran: "Mahasiswa Informatika yang belajar front-end",
  judulHalaman: "Next language to master",
  deskripsi:
    "Saya adalah seorang developer yang ingin berkembang. Di halaman ini, " +
    "saya merencanakan beberapa bahasa pemrograman yang ingin saya kuasai untuk siap di Dunia Enterprise.",
  keahlian: ["HTML", "CSS", "JavaScript", "Laravel", "PostgreSQL"],
  // Sengaja belum ada label "alamat" — dipakai untuk contoh akses aman ?.
};

const pertemuan = 8; // angka, bukan "8"
const tahun = 2026;

const daftarTarget = [
  {
    bahasa: "Java",
    prioritas: 1,
    tujuan: "Memahami pemrograman berorientasi objek dan membangun aplikasi backend enterprise.",
    ringkasan: "Memahami fondasi pemrograman berorientasi objek yang kuat dan arsitektur enterprise skala besar.",
  },
  {
    bahasa: "C#",
    prioritas: 2,
    tujuan: "Mengembangkan aplikasi menggunakan ekosistem .NET berkinerja tinggi.",
    ringkasan: "Mendalami pengembangan aplikasi modern menggunakan ekosistem .NET yang kaya fitur dan terstruktur.",
  },
  {
    bahasa: "Go",
    prioritas: 3,
    tujuan: "Mempelajari bahasa yang sederhana, cepat, dan efisien untuk microservices backend.",
    ringkasan: "Membangun sistem microservices backend yang concurrency-friendly, cepat, dan hemat memori.",
  },
];

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, kategori: "kuliah", selesai: true, stack: ["HTML"] },
  { judul: "Design Token Profil", tahun: 2026, kategori: "kuliah", selesai: true, stack: ["CSS"] },
  { judul: "Profil Berbasis Data", tahun: 2026, kategori: "kuliah", selesai: false, stack: ["JavaScript"] },
  { judul: "Website Portofolio", tahun: 2025, kategori: "pribadi", selesai: true, stack: ["Laravel", "CSS", "Alpine.js"] },
  { judul: "Uptime Monitor", tahun: 2026, kategori: "pribadi", selesai: false, stack: ["Laravel", "Livewire", "PostgreSQL"] },
  { judul: "Laundry System Management", tahun: 2026, kategori: "pribadi", selesai: false, stack: ["Laravel", "Livewire", "PostgreSQL"] },
];

// let dipakai hanya untuk nilai yang memang akan berubah
let pilihanAktif = "semua";

// --------------------------------------------------------------------------
// 2. FUNGSI MURNI (Lembar C) — hanya bergantung pada argumen, selalu return
// --------------------------------------------------------------------------

// Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran = "Mahasiswa" }) {
  return `${nama} — ${peran}`;
}

// Merapikan daftar keahlian menjadi satu baris teks
function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

// Menghitung berapa proyek yang sudah selesai
function hitungProyekSelesai(daftar) {
  return daftar.filter((proyek) => proyek.selesai).length;
}

// Menyusun satu baris tabel dari satu target belajar
function buatBarisTarget({ bahasa, prioritas, tujuan }) {
  return `<tr><th scope="row">${bahasa}</th><td>${prioritas}</td><td>${tujuan}</td></tr>`;
}

// Menyusun satu kartu katalog dari satu target belajar
function buatKartuTarget({ bahasa, prioritas, ringkasan }) {
  return `
    <article class="kartu">
      <span class="lencana lencana--prioritas">Prioritas ${prioritas}</span>
      <h3>${bahasa}</h3>
      <p>${ringkasan}</p>
    </article>`;
}

// Menyusun satu kartu proyek; label yang belum ada diberi nilai bawaan
function buatKartuProyek(proyek) {
  const status = proyek.selesai ? "Selesai" : "Berjalan";
  const kelasStatus = proyek.selesai ? "lencana--prioritas" : "";
  const stack = formatKeahlian(proyek.stack ?? []);
  return `
    <article class="kartu">
      <span class="lencana ${kelasStatus}">${status}</span>
      <h3>${proyek.judul}</h3>
      <p>${proyek.kategori === "kuliah" ? "Tugas kuliah" : "Proyek pribadi"} · ${proyek.tahun}</p>
      <p>${stack}</p>
    </article>`;
}

// Mengubah teks dari kolom isian menjadi angka (kasus sulit E.4 nomor 3)
function ubahKeAngka(teks) {
  return Number(teks);
}

// --------------------------------------------------------------------------
// 3. PEMERIKSAAN DI CONSOLE (Lembar B, C, D)
// --------------------------------------------------------------------------

// Lembar B — tipe data dan template literal
console.log(typeof profil.nama); // "string"
console.log(typeof pertemuan); // "number"
console.log(typeof belumDibuat); // "undefined"
console.log(`Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`);

// Lembar B — ?? dan ?. (label "alamat" memang belum ada)
console.log(profil.alamat?.kota ?? "Alamat belum diisi");
console.log(profil.kelas ?? "Kelas belum diisi");

// Lembar C — dua fungsi murni, dipanggil dengan argumen berbeda
console.log(buatPerkenalan(profil));
console.log(buatPerkenalan({ nama: "Ayu" })); // peran memakai nilai bawaan
console.log(formatKeahlian(profil.keahlian));
console.log(formatKeahlian(["Java", "C#", "Go"]));

// Lembar D — console.table, filter, find, map
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const proyekPribadi = daftarProyek.filter((proyek) => proyek.kategori === "pribadi");
console.table(proyekPribadi);

const portofolio = daftarProyek.find((proyek) => proyek.judul === "Website Portofolio");
console.log(portofolio);

const tidakAda = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(tidakAda); // undefined — memang tidak ada di data saya

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek, judulProyek.length === daftarProyek.length);

// Lembar D — salinan, bukan penunjuk yang sama
const salinanProfil = { ...profil };
salinanProfil.nama = "Nama Salinan";
console.log(profil.nama, "|", salinanProfil.nama); // profil asli tidak ikut berubah

const urutJudul = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urutJudul);
console.log("Data asli tetap:", daftarProyek[0].judul); // "Halaman Profil"

console.log(`Filter aktif: ${pilihanAktif}`);
pilihanAktif = "selesai";
console.log(`Filter aktif: ${pilihanAktif}`);

// --------------------------------------------------------------------------
// 4. MENAMPILKAN DATA KE HALAMAN
// Fungsi di bagian ini TIDAK murni (menyentuh halaman), jadi dipisah dari
// fungsi murni di atas. Detail DOM dibahas di Pertemuan 9.
// --------------------------------------------------------------------------

// Kasus sulit E.4 nomor 2: querySelector bisa menghasilkan null
function isiElemen(selector, isi, pakaiHtml = false) {
  const elemen = document.querySelector(selector);
  if (elemen === null) {
    console.error(`Elemen ${selector} tidak ditemukan — periksa id di profil.html`);
    return;
  }
  if (pakaiHtml) {
    elemen.innerHTML = isi;
  } else {
    elemen.textContent = isi;
  }
}

// <title> dan <h1> memakai satu variabel yang sama
document.title = `${profil.judulHalaman} — ${profil.nama}`;
isiElemen("#judul-halaman", profil.judulHalaman);
isiElemen("#deskripsi-halaman", profil.deskripsi);
isiElemen("#perkenalan", buatPerkenalan(profil));
isiElemen("#daftar-keahlian", formatKeahlian(profil.keahlian));

isiElemen("#tabel-target", daftarTarget.map(buatBarisTarget).join(""), true);
isiElemen("#katalog-target", daftarTarget.map(buatKartuTarget).join(""), true);

isiElemen(
  "#ringkasan-proyek",
  `${hitungProyekSelesai(daftarProyek)} dari ${daftarProyek.length} proyek sudah selesai.`
);
isiElemen("#katalog-proyek", daftarProyek.map(buatKartuProyek).join(""), true);

isiElemen(
  "#info-footer",
  `${profil.nama} · NIM: ${profil.nim} · Kelas ${profil.kelas} · PABW Pertemuan ${pertemuan} · ${tahun}`
);

// Kasus sulit E.4 nomor 3: nilai dari kolom isian selalu teks
const inputPrioritas = document.querySelector("#prioritas");
inputPrioritas?.addEventListener("change", () => {
  const teks = inputPrioritas.value;
  const angka = ubahKeAngka(teks);
  console.log(`Tanpa Number(): ${teks + 1} | Dengan Number(): ${angka + 1}`);
});
