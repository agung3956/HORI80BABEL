(function(root) {
  'use strict';
  const handbooks = {
    'tenis-meja': [{ title: 'Ketentuan tenis meja HORI', path: 'handbooks/ketentuan-tenis-meja-hori.pdf', format: 'PDF', pages: 2 }],
    'bulutangkis': [{ title: 'Peraturan cabor bulutangkis HORI', path: 'handbooks/peraturan-bulutangkis-hori.pdf', format: 'PDF', pages: 2 }],
    'tenis-lapangan': [{ title: 'Handbook tenis HORI 2026', path: 'handbooks/handbook-tenis-hori-2026.pdf', format: 'PDF', pages: 7 }],
    'mlbb': [
      { title: 'Handbook MLBB HORI 2026', path: 'handbooks/handbook-mlbb-hori-2026.pdf', format: 'PDF', pages: 4 },
      { title: 'Informasi technical meeting MLBB', path: 'handbooks/informasi-mlbb.html', format: 'Ringkasan nota dinas' }
    ],
    'fotografi': [{ title: 'KAK lomba fotografi HORI 80 Babel', path: 'handbooks/kak-fotografi-hori-80-babel.pdf', format: 'PDF', pages: 7 }]
  };
  const kickoff = {
    title: 'Kick off HORI ke-80',
    account: '@djpbbabel',
    published: '9 Oktober 2026',
    summary: 'Kick off Hari Oeang Republik Indonesia ke-80 menandai dimulainya rangkaian peringatan HORI 2026 di lingkungan Kementerian Keuangan Provinsi Kepulauan Bangka Belitung. Kegiatan ini mengangkat semangat kebersamaan, sinergi, dan pengabdian kepada negeri.',
    message: 'APBN Kuat, Indonesia Berdaulat! Tumbuh Lebih Tinggi, Sejahtera Lebih Cepat.',
    sourceUrl: 'https://www.instagram.com/p/DeRR1KwHyo_/?img_index=2',
    embedUrl: 'https://www.instagram.com/p/DeRR1KwHyo_/embed/'
  };
  const posters = [{
    id: 'poster-donasi-bakti-sosial',
    title: 'Pengumpulan Donasi Bakti Sosial',
    date: '2026-10-14T16:00:00+07:00',
    location: 'Dusun Serdang, Desa Jelutung 2, Kecamatan Simpang Rimba, Kabupaten Bangka Selatan',
    path: 'assets/poster-donasi-bakti-sosial-2026-10-14.jpg',
    alt: 'Poster pengumpulan donasi bakti sosial peduli korban kebakaran',
    caption: 'Batas pengumpulan bantuan: Rabu, 14 Oktober 2026 pukul 16.00 WIB.'
  }];
  root.HORI_CONTENT = { handbooks, kickoff, posters };
  if (typeof module === 'object' && module.exports) module.exports = root.HORI_CONTENT;
})(typeof window === 'undefined' ? globalThis : window);
