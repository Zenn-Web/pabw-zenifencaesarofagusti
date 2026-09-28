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

### Catatan penggunaan AI
- Menggunakan AI: Diskusi kalkulasi rasio kontras warna lime terhadap standar WCAG AA, referensi sintaks selector CSS modern `:has()` dan `:user-invalid`, serta verifikasi kelengkapan checklist worksheet.
- Tidak menggunakan AI: Penentuan konsep warna lime, perancangan tema profil, penyusunan struktur token dua lapis, dan penyesuaian tata letak.
