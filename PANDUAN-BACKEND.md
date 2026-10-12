# Pemasangan backend HORI80Babel (satu file GS)

Frontend sudah menyediakan slideshow enam poster dan menu Admin per cabor.

1. Buka spreadsheet yang Anda berikan: https://docs.google.com/spreadsheets/d/1SrMwx_C2RS7Le3P53pzqDKgKUBIPbJPjj8MJiomk90g/edit
2. Pilih Ekstensi > Apps Script. Ganti kode lama dengan isi `backend/HORI80Babel-Code.gs`. Paket ini sudah berisi Seed, Engine, Code dan HTML admin. Tidak perlu menambahkan file Admin.html. Jangan memasang paket ini bersama Code.gs/Engine.gs/Seed.gs/AdminUi.gs lama karena fungsi akan ganda. Simpan salinan kode lama jika perlu.
3. Jalankan `setupHori` dengan akun pemilik spreadsheet, lalu izinkan akses yang diminta. Setup menambahkan tabel HORI tanpa menimpa ID yang sudah ada atau Sheet1. Spreadsheet lain akan ditolak. Folder Drive sudah diatur ke `1mkG9C5rfiF6XxoQWmceu4zvuf37y5WBj`.
4. Muat ulang spreadsheet. Menu HORI 80 > Buka panel admin menyediakan edit skor, pertandingan, jadwal, penetapan juara, grup, dan penilaian. Filter cabor tersedia di bagian atas. Untuk memakai admin web, pilih HORI 80 > Buat / ganti kunci admin web. Simpan kunci yang tampil secara privat.
5. Deploy > New deployment (atau Manage deployments > Edit > New version) > Web app. Execute as: Me. Who has access: Anyone, bila akun Anda mengizinkan. Copy URL `/exec`.
6. Masukkan URL tersebut pada `apiUrl` di `frontend/config.js`, atau kirim URL kepada Codex agar konfigurasi website diperbarui. Setelah frontend diperbarui, menu Admin membuka panel login dan tombol tiap cabor langsung memfilter cabangnya. Semua pengunjung memuat data publik dari spreadsheet; spreadsheet tetap privat.
7. Masuk memakai kunci admin. Sesi berlaku 30 menit, disimpan di memori tab, hilang saat tab dimuat ulang, dan dapat dicabut dengan mengganti kunci. Simpan draft, periksa skor, lalu Sahkan hasil. Pengunjung dapat menekan Muat ulang, atau menerima pembaruan otomatis setiap 120 detik. Cache publik maksimal 90 detik dan dibersihkan saat admin menyimpan.

Untuk fotografi, tombol Pilih gambar dari Drive membaca maksimal 100 gambar langsung dalam folder. Memilih file tidak mengubah izin berbagi. Karya publik harus JPG/JPEG minimal 2 MB, sudah berizin publik, dan dinyatakan bersih dari metadata oleh pengelola. Tautan thumbnail perlu diuji pada browser publik setelah file diizinkan; poster slideshow memakai aset Netlify lokal agar tetap tampil tanpa Drive.

Jika Apps Script memakai `oauthScopes` eksplisit dalam appsscript.json, tambahkan `https://www.googleapis.com/auth/drive.readonly` untuk pemilih gambar (manifest backend yang disertakan sudah memuatnya). Jika project baru memakai cakupan otomatis, tidak perlu mengedit manifest. Zona waktu aplikasi menggunakan Asia/Jakarta.

Validasi skor dan aturan cabor tetap memakai mesin sebelumnya. Koreksi hasil resmi wajib beralasan dan mencabut hasil lanjutan yang terdampak. Foto poster merupakan konten slideshow, tidak otomatis mengubah ketentuan pertandingan dari handbook.

URL deployment pengguna sudah tersambung ke frontend pada 12 Oktober 2026. Pembacaan publik dan halaman login diperiksa dari browser. Pengujian lokal penyimpanan menggunakan mock layanan Google; penyimpanan hasil nyata dilakukan oleh pengelola setelah masuk dengan kunci admin.
