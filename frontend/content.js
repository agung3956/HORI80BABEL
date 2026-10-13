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
  const posters = [
  {
    "path": "assets/posters/donasi-bakti-sosial-2026-10-14.jpg",
    "title": "Pengumpulan Donasi Bakti Sosial",
    "sportId": "",
    "date": "2026-10-14T16:00:00+07:00"
  },
  {
    "path": "assets/posters/turnamen-tenis.png",
    "title": "Turnamen tenis HORI 2026",
    "sportId": "tenis-lapangan"
  },
  {
    "path": "assets/posters/jadwal-tenis-meja.png",
    "title": "Jadwal pertandingan tenis meja",
    "sportId": "tenis-meja"
  },
  {
    "path": "assets/posters/lomba-fotografi.jpg",
    "title": "Lomba fotografi HORI ke-80",
    "sportId": "fotografi"
  },
  {
    "path": "assets/posters/kickoff-hori.jpg",
    "title": "Kick off Hari Oeang ke-80",
    "sportId": ""
  },
  {
    "path": "assets/posters/tm-bulutangkis.jpg",
    "title": "Technical meeting bulutangkis",
    "sportId": "bulutangkis"
  },
  {
    "path": "assets/posters/tm-tenis-meja.jpg",
    "title": "Technical meeting tenis meja",
    "sportId": "tenis-meja"
  }
];
  posters.push({path: 'assets/posters/tm-gobak-sodor-voli-pantai.png', title: 'Technical meeting Gobak Sodor & Voli Pantai', sportId: 'gobak-voli-pantai'});
  // Poster panitia yang belum tercatat pada deployment Google saat ini.
  // Record Google dengan ID yang sama tetap menjadi acuan untuk koreksi/status.
  const scheduleExtras = [{
    id: 'BAKSOS-SERDANG', sportId: '',
    title: 'Bakti sosial korban kebakaran Dusun Serdang', type: 'Bakti sosial',
    date: '2026-10-14T16:00:00+07:00', endDate: null, allDay: false,
    location: 'Dusun Serdang, Desa Jelutung 2, Kecamatan Simpang Rimba, Kabupaten Bangka Selatan',
    note: 'Batas pengumpulan bantuan Rabu, 14 Oktober 2026 pukul 16.00 WIB. Donasi dana melalui Bank Mandiri 900-00-0696252-7 a.n. Said Rachmad Hidayat; pakaian layak pakai diterima sampai batas waktu.',
    status: 'Terjadwal', unitIds: [], revision: 0
  }, {
    id: 'TM-VOLI', sportId: 'voli',
    title: 'Technical meeting Voli HORI Babel 2026', type: 'Technical meeting',
    date: '2026-10-13T16:00:00+07:00', endDate: '2026-10-13T17:00:00+07:00', allDay: false,
    location: 'Microsoft Teams',
    note: 'Peserta: 1 orang (kapten atau perwakilan tim). Tautan rapat: https://teams.microsoft.com/meet/473449822352676?p=54pQfNiX2vUucALFOW. Detail ID dan kode sandi mengikuti undangan panitia.',
    status: 'Terjadwal', unitIds: [], revision: 0
  }, {
    id: 'TM-GOB-VOL', sportId: 'gobak-voli-pantai',
    title: 'Technical meeting Gobak Sodor & Voli Pantai HORI Babel 2026', type: 'Technical meeting',
    date: '2026-10-13T14:00:00+07:00', endDate: '2026-10-13T15:00:00+07:00', allDay: false,
    location: 'Microsoft Teams',
    note: 'Peserta: perwakilan dari setiap unit. Tautan rapat: http://s.kemenkeu.go.id/TMGobakSodor. Detail ID dan kode sandi mengikuti undangan panitia.',
    status: 'Terjadwal', unitIds: [], revision: 0,
    poster: 'assets/posters/tm-gobak-sodor-voli-pantai.png'
  }];
  const activitySlides = [
    {id: 'TM-GOB-VOL', kind: 'event', eventId: 'TM-GOB-VOL', poster: 'assets/posters/tm-gobak-sodor-voli-pantai.png'},
    {id: 'TM-VOLI', kind: 'event', eventId: 'TM-VOLI'},
    {id: 'BAKSOS-SERDANG', kind: 'event', eventId: 'BAKSOS-SERDANG', poster: 'assets/posters/donasi-bakti-sosial-2026-10-14.jpg'},
    ...posters.filter(p => !['assets/posters/tm-gobak-sodor-voli-pantai.png', 'assets/posters/kickoff-hori.jpg'].includes(p.path)).map((p, i) => ({id: `poster-${i}`, kind: 'poster', poster: p.path, title: p.title, subtitle: 'Poster informasi kegiatan HORI ke-80.'})),
    {id: 'kickoff-hori', kind: 'poster', poster: 'assets/posters/kickoff-hori.jpg', title: kickoff.title, subtitle: kickoff.summary}
  ];
  function withSchedule(payload) {
    const existing = new Set(payload.schedule.map(event => event.id));
    return {...payload, schedule: [...payload.schedule, ...scheduleExtras.filter(event => !existing.has(event.id)).map(event => ({...event, unitIds: [...event.unitIds]}))]};
  }
  root.HORI_CONTENT = { handbooks, kickoff, posters, scheduleExtras, activitySlides, withSchedule };
  if (typeof module === 'object' && module.exports) module.exports = root.HORI_CONTENT;
})(typeof window === 'undefined' ? globalThis : window);
