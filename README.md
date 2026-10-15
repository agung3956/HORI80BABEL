# HORI 80 Kemenkeu Satu Kepulauan Bangka Belitung 2026

Tema: Indonesia Berdaulat, APBN Kuat.

## Lisensi dan kontribusi

Kode sumber proyek ini tersedia dengan [lisensi MIT](LICENSE). Anda dapat menggunakan ulang dan mengembangkan kode untuk pengelolaan jadwal, klasemen, serta hasil kegiatan lain. Kontribusi melalui issue dan pull request dipersilakan. Jelaskan masalah atau perubahan, hindari data pribadi, dan sertakan langkah verifikasi yang relevan. Semua kontributor mengikuti [Code of Conduct](CODE_OF_CONDUCT.md).

Lisensi MIT berlaku untuk kode asli proyek dan dokumentasi teknis yang dibuat untuk kode tersebut. Logo resmi, merek, poster, foto, handbook, dokumen kegiatan, data peserta, dan materi pihak ketiga tidak termasuk dalam pemberian lisensi MIT. Materi tersebut tetap mengikuti hak dan izin pemiliknya. Font dan dependensi pihak ketiga mengikuti lisensinya masing-masing. Penggunaan ulang kode tidak memberikan hak untuk memakai identitas resmi atau menyatakan dukungan instansi.

Website ini mendukung informasi kegiatan HORI 80 Babel tanpa layanan hosting atau dukungan berbayar. Penambahan lisensi dan Code of Conduct tidak berarti pengajuan Netlify Open Source sudah disetujui.

## Slideshow dan admin web (12 Oktober 2026)

Enam poster pengguna tampil utuh pada beranda dengan tombol sebelumnya/berikutnya, jeda, pemilih poster, dan dialog ukuran penuh. Slideshow berhenti saat fokus/hover, tab tersembunyi, atau preferensi reduced motion aktif.

Menu Admin memuat akses Google Sheets dan Drive serta panel per cabor. Setelah apiUrl dipasang, panel web Apps Script dapat dibuka langsung dengan filter cabang. Admin web menggunakan kunci acak 256 bit yang dibuat dari menu Sheets; sesi 30 menit diverifikasi di server untuk setiap baca/tulis. Audit web memakai aktor web-admin; untuk audit per akun gunakan panel Sheets dengan ADMIN_EMAILS.

Paket siap tempel: `backend/HORI80Babel-Code.gs`. Lihat [panduan pemasangan](PANDUAN-BACKEND.md). ID spreadsheet dan folder mengikuti tautan pengguna. Untuk pemeliharaan, edit file sumber backend lalu jalankan `node build-backend.cjs`; paket dan AdminUi.gs dihasilkan ulang dari sumber.

Endpoint publik hanya membaca hasil yang disaring. Tidak ada doPost; operasi admin memakai google.script.run dengan pemeriksaan token/akun. Kunci dan sesi tidak disertakan pada respons publik.

## Koneksi backend Google aktif

`frontend/config.js` sudah memakai URL Web App yang diberikan pengguna pada 12 Oktober 2026. Pembacaan anonim JSON dan JSONP telah diperiksa: 9 unit, 9 cabor, 12 pertandingan, dan 33 agenda. Menu Admin membuka halaman Apps Script dengan filter cabang melalui parameter `sport`. Login memerlukan kunci yang dibuat pengelola dari menu HORI 80 di Google Sheets.

## Technical meeting Gobak Sodor & Voli Pantai

Poster pengguna ditambahkan ke slideshow (total tujuh poster), kartu informasi beranda, dan halaman cabor. Technical meeting: Selasa, 13 Oktober 2026 pukul 14.00 WIB; lokasi belum tercantum pada poster. Agenda ID `TM-GOB-VOL` tersedia pada jadwal website dan seed backend. `content.js` melengkapi agenda ini bila endpoint Google lama belum memuatnya; bila Google memuat ID yang sama, koreksi tanggal, lokasi dan status admin dipertahankan tanpa duplikasi. Paket GS telah dihasilkan ulang untuk setup berikutnya; penayangan informasi di website tidak memerlukan redeploy Apps Script.

## Hosting Vercel

Repositori: https://github.com/agung3956/HORI80BABEL

Hosting aktif hanya Vercel: https://hori80babel.vercel.app/. Sejak 15 Oktober 2026, situs Netlify dinonaktifkan dan koneksi deploy GitHub di Netlify diputus. Jangan deploy atau mengaktifkan kembali situs Netlify.

Vercel terhubung ke branch `main`. Konfigurasi `vercel.json` memublikasikan folder `frontend`, tanpa build command atau instalasi dependensi. Folder `backend`, `tests`, dan arsip ZIP tidak dipublikasikan. Backend tetap berjalan di Google Apps Script; `frontend/config.js` menyimpan URL Web App Google.

## Pembaruan konten 12 Oktober 2026

- Daftar unit ditambah KPP Tanjung Pandan (DJP), KPPBC Tanjung Pandan (DJBC), dan KPPN Tanjung Pandan (DJPb). ID unit lama dipertahankan. KPPBC Pangkalpinang memakai label DJBC dan KPPN Pangkalpinang memakai label DJPb.
- Lima PDF asli tersedia di `frontend/handbooks`: MLBB, tenis lapangan, fotografi, tenis meja, dan bulutangkis. Ringkasan aturan telah dicocokkan dengan dokumen tersebut. Tautan dokumen tersedia di halaman cabor dan menu Aturan.
- Nota dinas ND-1077/KPP.0306/2026 menjadi sumber waktu technical meeting MLBB 9 Oktober, 16.00–17.00 WIB. `frontend/handbooks/informasi-mlbb.html` menyediakan ringkasan untuk publik; akses rapat disampaikan oleh panitia.
- Beranda memuat informasi kick off dari postingan @djpbbabel yang dipublikasikan 9 Oktober 2026: https://www.instagram.com/p/DeRR1KwHyo_/?img_index=2. Foto ditampilkan melalui sematan resmi Instagram dengan tautan ke postingan asli. Tanggal tersebut adalah tanggal publikasi, bukan penetapan tanggal kegiatan.
- `frontend/content.js` menyimpan referensi dokumen dan informasi kick off, sehingga konten ini tetap tersedia saat data pertandingan dimuat dari Google.

Seed backend juga diperbarui untuk setup Google berikutnya. `setupHori` menambahkan ID baru tetapi mempertahankan record yang sudah ada; pengelola Google yang sudah menjalankan setup perlu memperbarui label dan ringkasan lama melalui panel admin.

Paket ini menyediakan frontend statis, kode Google Apps Script yang terikat ke Google Sheets, setup tabel, panel admin, data jadwal awal, dan pengujian. Tidak ada hasil atau medali fiktif. Backend Google belum terhubung sampai Anda mengisi URL Web App.

## Isi paket

| Lokasi | Isi |
| --- | --- |
| frontend/ | Salin isi folder ke root GitHub Pages atau hosting statis Anda. |
| backend/Code.gs | Setup, akses admin, validasi server, transaksi, dan endpoint publik. |
| backend/Engine.gs | Aturan skor, bagan, medali, MLBB, dan fotografi. |
| backend/Seed.gs | Unit, cabang, bagan, dan jadwal awal. |
| backend/Admin.html | Panel Google Sheets siap digunakan. |
| backend/appsscript.json | Runtime, zona waktu, dan cakupan izin. |
| tests/hori.test.cjs | Pengujian logika aplikasi dan backend. |

## 1. Buat Google Sheets

1. Buat spreadsheet privat bernama HORI 80 Babel 2026.
2. Buka Ekstensi > Apps Script.
3. Salin Code.gs, Engine.gs, dan Seed.gs sebagai tiga file skrip terpisah. Hapus kode bawaan yang namanya bertabrakan.
4. Tambahkan file HTML bernama Admin. Salin isi backend/Admin.html. Jangan menyalin Admin.template.html.
5. Di pengaturan project, aktifkan tampilan appsscript.json. Ganti isinya dengan manifest paket.
6. Jalankan setupHori dari editor dengan akun Google Anda. Selesaikan otorisasi.
7. Setup mengisi ID spreadsheet dan ADMIN_EMAILS di Script Properties. Untuk admin tambahan, isi ADMIN_EMAILS dengan alamat akun Google dipisahkan koma. Berikan akses Editor ke spreadsheet hanya kepada pengelola.
8. Muat ulang spreadsheet. Buka HORI 80 > Buka panel admin.

setupHori aman dijalankan ulang. ID yang sudah ada dipertahankan. Setup menolak header tabel yang berbeda dan tidak menimpa data yang sudah ada. Jangan memakai spreadsheet publik sebagai database.

## 2. Struktur tabel

Setiap tabel memiliki ID, Revisi, Status, dan Data JSON. ID harus stabil. Kode tidak memakai nomor baris sebagai identitas. Edit data melalui panel admin agar validasi, audit, dan pembaruan cache berjalan.

| Tab | Data |
| --- | --- |
| Pengaturan | Zona waktu, pengesahan metode klasemen, unit poin MLBB, skala fotografi, dan urutan partai. |
| Unit Kerja | Nama institusi, singkatan, dan warna unit. |
| Cabang dan Kategori | Ringkasan aturan, jenis lomba, kontribusi medali, dan catatan referensi. |
| Peserta Anonim | Kode peserta/pasangan, unit, dan cabang. |
| Jadwal | Jenis agenda, tanggal awal/akhir, lokasi, status, dan unit terkait. |
| Pertandingan | Tim, sumber slot bagan, skor seri, partai, skor gim, WO, dan pengesahan. |
| Grup | Susunan tim MLBB setelah technical meeting. |
| Slot Bagan | Disediakan untuk pengembangan. Aplikasi saat ini memakai sourceA/sourceB di Pertandingan. |
| Penilaian Karya | Kode juri, karya, lima nilai, skala, dan nilai akhir berbobot. |
| Karya Publik | Kode karya dan peserta, unit, judul, deskripsi tersaring, izin publikasi, pemeriksaan metadata. |
| Penalti | Grup, unit, alasan, nilai −1, dan pengesahan. |
| Penetapan Juara | Cabang, kategori, juara I–III, unit, dan dasar hasil resmi. |
| Riwayat Perubahan | ID operasi, akun admin, waktu, alasan, dan revisi. Tidak tersedia di endpoint publik. |
| _Transaksi | Snapshot pemulihan operasi yang gagal. Tab disembunyikan, tidak tersedia di endpoint publik. |

Skor partai dan gim disimpan di dalam record Pertandingan. Snapshot menyimpan tiap record terpisah. Audit dan backup tidak dikirim ke frontend. Spreadsheet tetap privat walaupun Web App menyediakan data publik yang telah disaring.

## 3. Atur Google Drive

1. Buat folder internal HORI 80 Babel. Simpan dokumen sumber, bukti hasil, dan naskah keputusan di sini. Batasi akses ke pengelola.
2. Buat folder terpisah Aset Publik HORI 80. Isinya hanya logo, ringkasan aturan, dan foto yang telah memperoleh izin publikasi.
3. Jangan membagikan workbook persiapan, daftar panitia, identitas, rekening, atau dokumen asli yang belum disaring.
4. Untuk foto, hapus EXIF dan metadata yang mengungkap identitas. Pastikan foto final JPEG/JPG minimal 2 MB. Pertahankan orisinalitas karya sesuai keputusan panitia.
5. Masukkan URL gambar HTTPS pada panel Karya fotografi. Gunakan URL yang benar-benar mengembalikan gambar. Tautan halaman Drive /view tidak mengembalikan gambar secara langsung. Jika menggunakan URL thumbnail Drive, pastikan file memiliki izin publik dan uji pemuatannya dari domain website. Folder bukti internal tidak perlu memiliki izin publik.
6. Centang izin publikasi dan metadata bersih, lalu pilih Sahkan hasil untuk menampilkan karya di galeri. Belum ada foto peserta dalam data awal.

Logo resmi dan font Figtree sudah disalin dari folder referensi pengguna ke frontend/assets. Aset dimuat dari hosting website agar pengunjung tidak bergantung pada halaman Drive.

## 4. Deploy endpoint publik Apps Script

1. Pada Apps Script, pilih Deploy > New deployment > Web app.
2. Pilih Execute as: Me. Pilih Who has access: Anyone jika kebijakan akun mengizinkan data lomba publik.
3. Endpoint ini hanya membaca data yang disaring. Tidak ada doPost. Panel admin memakai google.script.run: panel Sheets memeriksa akun Google, panel web memeriksa sesi dari kunci admin.
4. Salin URL yang berakhir /exec. Jangan gunakan URL /dev atau halaman editor.
5. Isi apiUrl di frontend/config.js. Contoh:

```js
window.HORI_CONFIG = {
  apiUrl: 'https://script.google.com/macros/s/ISI_DEPLOYMENT_ID/exec',
  transport: 'jsonp',
  refreshSeconds: 120
};
```

6. Deploy ulang frontend. Pengunjung tetap berada pada alamat website utama.
7. Buka URL /exec untuk memeriksa respons JSON. Dari domain frontend yang sebenarnya, tekan Muat ulang. Pastikan waktu pembaruan muncul setelah pengelola menyimpan data.
8. Ketika kode Apps Script berubah, pilih Manage deployments > Edit > New version. Mengedit kode saja tidak memperbarui Web App yang sudah dideploy.

JSONP dipakai untuk pembacaan publik lintas domain. Callback harus mengikuti pola horiCallback + angka. Jangan memakai JSONP untuk data privat, operasi tulis, atau autentikasi. Transport fetch tersedia jika koneksi lintas domain sudah diuji berhasil. Kebijakan akun atau domain bisa membatasi Web App anonim. Jika akses publik tidak diizinkan, gunakan akun/deployment yang diizinkan panitia, tanpa membuka spreadsheet internal.

## 5. Jalankan pertandingan

1. Pada Pengaturan pengesahan, sahkan metode klasemen, urutan partai tenis meja, dan ketentuan deuce sesuai keputusan panitia.
2. Pada Cabang & kontribusi medali, konfirmasi cabang yang menyumbang medali. Fotografi dan Gobak sodor / Voli pantai awalnya belum diaktifkan. Panahan dan voli ekshibisi tidak masuk medali.
3. Pilih Pertandingan & skor. Pilih pertandingan. Simpan skor sebagai draft. Draft tidak menampilkan skor di website.
4. Untuk tenis meja dan bulutangkis, masukkan skor gim tiap partai. Format contoh: 11-5, 11-8, 11-9. Tandai partai ketiga Tidak dimainkan setelah tim menang 2–0. Jangan memasukkan 0–0.
5. Pilih pemenang dan Sahkan hasil. Server memeriksa skor, peserta, urutan partai, dan hasil babak sebelumnya.
6. Setelah final dan perebutan juara III disahkan, input Penetapan juara. Kode kategori: tenis meja dan bulutangkis = beregu, tenis lapangan = ganda, MLBB = tim, fotografi = utama.
7. Kemenangan babak awal atau semifinal tidak langsung memberikan medali. Server menolak kategori partai ganda putra/ganda campuran sebagai medali terpisah untuk lomba beregu.
8. Untuk hasil yang salah, pilih Koreksi dan isi alasan. Koreksi menyimpan draft. Periksa peserta dan skor sebelum Sahkan hasil lagi. Pertandingan lanjutan dan penetapan juara yang terdampak dicabut dan ditandai untuk diperiksa.
9. Batalkan pengesahan menghapus hasil dari publik, mempertahankan draft dan audit untuk admin.

Kode tim pada semifinal/final mengikuti pemenang atau yang kalah dari pertandingan sumber. Bye sudah sesuai spesifikasi dan berbeda antara tenis meja dan bulutangkis. Jangan mengganti sumber slot tanpa keputusan pengundian resmi.

## 6. MLBB

1. Masukkan grup yang benar dari technical meeting. Belum ada pembagian grup fiktif.
2. Konfirmasi unit poin match atau game dan rumus persentase sebelum mengesahkan klasemen grup.
3. Buat pertandingan dengan Babak: Grup, Upper bracket, Lower bracket, Grand final, atau Juara III. Grup membutuhkan groupId dan tim yang memang termasuk grup.
4. Skor seri normal BO3, grand final BO5. Menang WO disimpan tanpa skor gim. Poin WO +1 sesuai konfigurasi implementasi awal dari handbook.
5. Input penalti melalui menu terpisah. Alasan chat all/radio all atau Nickname berbeda, nilai −1. Penalti berlaku setelah disahkan.
6. Head-to-head untuk dua tim dengan poin dan persentase sama. Seri banyak tim atau head-to-head yang masih sama ditandai belum selesai. Panitia perlu menetapkan hasil seri melalui keputusan lanjutan. Aplikasi tidak mengarang peringkat seri.
7. Penempatan tim playoff, hasil pengundian, detail reset grand final, dan mekanisme perebutan juara III menunggu keputusan panitia. Buat sumber slot bagan melalui Sumber slot tim A/B setelah keputusan tersedia.

## 7. Fotografi

Tetapkan skala nilai terlebih dahulu, misalnya 0–100 sesuai keputusan panitia. Input lima nilai dalam rentang skala. Nilai akhir = nilai/skala × bobot, dengan bobot 30%, 25%, 20%, 15%, 10%. Hasil dinormalisasi ke 100. Skala tidak bisa diubah saat masih ada penilaian resmi.

Panel mendukung beberapa kode juri anonim. Setiap record menyimpan nilai satu juri. Agregasi antarkode juri, tata cara menangani seri, dan urutan juara mengikuti keputusan panitia. Admin mengesahkan juara berdasarkan hasil penjurian resmi. Aplikasi tidak mengarang pemenang. Koreksi atau pembatalan penilaian mencabut penetapan juara terkait karya.

## 8. Referensi dan perbedaan sumber

Data jadwal awal berasal dari Pasted markdown(1).md yang diunggah pengguna. Ringkasan lima cabor telah dicocokkan dengan handbook dan ketentuan PDF yang diberikan pada pembaruan 12 Oktober 2026. Perubahan jadwal serta ketentuan yang belum ditegaskan tetap mengikuti pengesahan panitia. Referensi desain telah dibaca langsung dari folder Google Drive.

| Sumber | Perbedaan / tindak lanjut |
| --- | --- |
| Pedoman visual HORI 80 | Tema tertulis APBN Kuat, Indonesia Berdaulat. Tampilan memakai arahan terbaru pengguna: Indonesia Berdaulat, APBN Kuat. |
| MLBB | Handbook sampai 25 Oktober, 23.59 WIB. Excel sampai 23 Oktober, 23.00. Acuan awal mengikuti handbook menurut spesifikasi pengguna. |
| Fotografi | KAK: pengumuman 30 Oktober. Poster: akan diinformasikan kemudian. |
| Tenis meja | Urutan setelah ganda putra dan aturan deuce perlu konfirmasi. |
| Bulutangkis | Ketentuan deuce perlu konfirmasi. |
| Gobak sodor / Voli pantai | Belum diputuskan satu atau dua cabang. |
| Juara umum | Metode dan kontribusi cabang menunggu pengesahan panitia. |

Pedoman: https://drive.google.com/file/d/1K3KKMsEye1R53tmpjEqZ259kphqQzUaQ/view

Folder referensi: https://drive.google.com/drive/folders/1xUmOg824XEiPEs5xPYirZ0XR87F4-dWJ

Dokumentasi Google untuk pengelola:

- https://developers.google.com/apps-script/guides/content
- https://developers.google.com/apps-script/guides/html/communication
- https://developers.google.com/apps-script/reference/base/session

## 9. Verifikasi

Jalankan node --test tests/hori.test.cjs pada checkout sumber. Dalam paket unduhan, tests mencari folder frontend melalui penyesuaian jalur yang sudah disertakan.

Pengujian logika menggunakan implementasi nyata serta mock layanan Google. Pengujian mencakup validasi skor, koreksi dan pembatalan, ACL, idempotensi, revisi, rollback, JSONP, dan penyaringan data. Pengujian ini tidak menggantikan pengujian akun Google, kebijakan deployment, maupun koneksi dari domain hosting sebenarnya.

Frontend, JavaScript, HTML, dan logika backend menjalani pemeriksaan statis dan pengujian otomatis. Pada pembaruan 12 Oktober 2026, tampilan beranda, sembilan unit, sematan Instagram, dan tautan dokumen diperiksa melalui browser pada ukuran desktop dan ponsel. Lakukan uji ponsel nyata sebelum penggunaan acara.

Uji akhir setelah Google tersambung: simpan draft, pastikan skor belum tampil, sahkan hasil, tekan Muat ulang di website, koreksi hasil, periksa bagan lanjutan, batalkan pengesahan, dan periksa medali berubah. Uji dua akun admin untuk konflik revisi. Jangan memakai hasil uji fiktif pada deployment acara.
