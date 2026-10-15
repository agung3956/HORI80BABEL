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
  posters.push(
    {path: 'assets/posters/donasi-baksos-serdang.jpg', title: 'Pengumpulan donasi bakti sosial korban kebakaran', sportId: ''},
    {path: 'assets/posters/lomba-menyanyi-hori-80.jpg', title: 'Lomba menyanyi HORI ke-80', sportId: 'menyanyi'},
    {path: 'assets/posters/mlbb-klasemen-13-oktober.jpg', title: 'Klasemen Mobile Legends · 13 Oktober 2026', sportId: 'mlbb'},
    {path: 'assets/posters/ketentuan-lomba-menyanyi.png', title: 'Formulir dan ketentuan lomba menyanyi', sportId: 'menyanyi'}
  );
  // Poster panitia yang belum tercatat pada deployment Google saat ini.
  // Record Google dengan ID yang sama tetap menjadi acuan untuk koreksi/status.
  const scheduleExtras = [{
    id: 'BAKSOS-SERDANG', sportId: '',
    title: 'Bakti sosial korban kebakaran Dusun Serdang', type: 'Bakti sosial',
    date: '2026-10-15T08:00:00+07:00', endDate: null, allDay: false,
    location: 'Dusun Serdang, Desa Jelutung II, Kabupaten Bangka Selatan',
    note: 'Pengumpulan donasi paling lambat Rabu, 14 Oktober 2026 pukul 16.00 WIB melalui PIC KPP Pratama Pangkalpinang. Donasi dana diprioritaskan untuk sembako dan kebutuhan lainnya; pakaian layak pakai di lokasi sudah sangat menumpuk.',
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
  }, {
    id: 'NYANYI-REG', sportId: 'menyanyi', title: 'Pendaftaran lomba menyanyi HORI ke-80', type: 'Pendaftaran',
    date: '2026-10-18', endDate: null, allDay: true, location: 's.kemenkeu.go.id/BabelNyanyiHORI80',
    note: 'Setiap unit mengirim minimal 1 dan maksimal 3 peserta. Setiap peserta dapat membawakan maksimal 2 lagu. CP: Angga 087888061381.', status: 'Terjadwal', unitIds: [], revision: 0
  }, {
    id: 'NYANYI-TM', sportId: 'menyanyi', title: 'Technical meeting lomba menyanyi HORI ke-80', type: 'Technical meeting',
    date: '2026-10-19', endDate: null, allDay: true, location: 'Microsoft Teams',
    note: 'Waktu pelaksanaan dan tautan Microsoft Teams menyusul.', status: 'Terjadwal', unitIds: [], revision: 0
  }, {
    id: 'MLBB-20261013-A1', sportId: 'mlbb', title: 'Grup A · KPP Pangkalpinang vs KPP Bangka', type: 'Pertandingan',
    date: '2026-10-13', endDate: null, allDay: true, location: 'Mobile Legends', note: 'Hasil: KPP Pangkalpinang menang 2–0.', status: 'Selesai', unitIds: [], revision: 0
  }, {
    id: 'MLBB-20261013-A2', sportId: 'mlbb', title: 'Grup A · KPP Bangka vs Kanwil DJPb Babel', type: 'Pertandingan',
    date: '2026-10-13', endDate: null, allDay: true, location: 'Mobile Legends', note: 'Hasil: Kanwil DJPb Babel menang 2–0.', status: 'Selesai', unitIds: [], revision: 0
  }, {
    id: 'MLBB-20261013-B1', sportId: 'mlbb', title: 'Grup B · KPPBC Tanjung Pandan vs KPP Tanjung Pandan', type: 'Pertandingan',
    date: '2026-10-13', endDate: null, allDay: true, location: 'Mobile Legends', note: 'Hasil: KPPBC Tanjung Pandan menang 2–0.', status: 'Selesai', unitIds: [], revision: 0
  }];
  const scheduleOverrides = {
    'TL-TM': {date: '2026-10-15T14:00:00+07:00', endDate: '2026-10-15T15:00:00+07:00', title: 'Technical meeting tenis lapangan HORI Babel 2026', note: 'Peserta: 1 orang perwakilan dari masing-masing satker. Tautan rapat: https://teams.microsoft.com/meet/451711671812590?p=v7IOJCmFiM21Me4rI0. Detail ID dan kode sandi mengikuti undangan panitia.'},
    'J-tenis-meja-P5': {title: 'Perebutan juara 3 · KPPN Pangkalpinang vs KPPBC Pangkalpinang', note: 'Wasit: Kanwil DJPb.'},
    'J-tenis-meja-P6': {title: 'Final · Kanwil DJPb vs KPP Bangka', note: 'Wasit: KPPN Pangkalpinang.'},
    'BAKSOS-DONASI-20261014': {date: '2026-10-14T16:00:00+07:00', title: 'Batas pengumpulan donasi bakti sosial Dusun Serdang', note: 'Dana dan pakaian layak pakai dikumpulkan melalui PIC KPP Pratama Pangkalpinang. Poster memuat rincian rekening donasi.'}
  };
  const matchExtras = [{id:'mlbb-20261013-A1',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'13 Okt · A1',teamA:'U03',teamB:'U04',winnerId:'U03',scoreA:2,scoreB:0,state:'draft',status:'Selesai',date:'2026-10-13T16:00:00+07:00',location:'Mobile Legends',parts:[],revision:0},{id:'mlbb-20261013-A2',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'13 Okt · A2',teamA:'U04',teamB:'U01',winnerId:'U01',scoreA:0,scoreB:2,state:'draft',status:'Selesai',date:'2026-10-13T17:00:00+07:00',location:'Mobile Legends',parts:[],revision:0},{id:'mlbb-20261013-B1',sportId:'mlbb',groupId:'ML-GRUP-B',stage:'Grup',label:'13 Okt · B1',teamA:'U08',teamB:'U07',winnerId:'U08',scoreA:2,scoreB:0,state:'draft',status:'Selesai',date:'2026-10-13T18:00:00+07:00',location:'Mobile Legends',parts:[],revision:0}];
  const activitySlides = [
    {id: 'TM-GOB-VOL', kind: 'event', eventId: 'TM-GOB-VOL', poster: 'assets/posters/tm-gobak-sodor-voli-pantai.png'},
    {id: 'TM-VOLI', kind: 'event', eventId: 'TM-VOLI'},
    {id: 'BAKSOS-SERDANG', kind: 'event', eventId: 'BAKSOS-SERDANG'},
    ...posters.filter(p => !['assets/posters/tm-gobak-sodor-voli-pantai.png', 'assets/posters/kickoff-hori.jpg'].includes(p.path)).map((p, i) => ({id: `poster-${i}`, kind: 'poster', poster: p.path, title: p.title, subtitle: 'Poster informasi kegiatan HORI ke-80.'})),
    {id: 'kickoff-hori', kind: 'poster', poster: 'assets/posters/kickoff-hori.jpg', title: kickoff.title, subtitle: kickoff.summary}
  ];
  function withSchedule(payload) {
    const existing = new Set(payload.schedule.map(event => event.id));
    const schedule = payload.schedule.map(event => {
      const override = scheduleOverrides[event.id];
      return override && event.status === 'Terjadwal' ? {...event, ...override} : event;
    });
    return {...payload, schedule: [...schedule, ...scheduleExtras.filter(event => !existing.has(event.id)).map(event => ({...event, unitIds: [...event.unitIds]}))]};
  }
  function withMatches(payload) {
    const existing = new Set(payload.matches.map(match => match.id));
    return {...payload, matches: [...payload.matches, ...matchExtras.filter(match => !existing.has(match.id)).map(match => ({...match, parts: [...(match.parts || [])]}))]};
  }
  root.HORI_CONTENT = { handbooks, kickoff, posters, scheduleExtras, scheduleOverrides, matchExtras, activitySlides, withSchedule, withMatches };
  if (typeof module === 'object' && module.exports) module.exports = root.HORI_CONTENT;
})(typeof window === 'undefined' ? globalThis : window);
