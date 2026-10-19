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
    'fotografi': [{ title: 'KAK lomba fotografi HORI 80 Babel', path: 'handbooks/kak-fotografi-hori-80-babel.pdf', format: 'PDF', pages: 7 }],
    'gobak-voli-pantai': [{title: 'Aturan dan bagan Gobak Sodor terbaru', path: 'handbooks/aturan-gobak-sodor-update.pdf', format: 'PDF', pages: 4}]
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
    {path: 'assets/posters/mlbb-klasemen-15-oktober.jpg', title: 'Klasemen Mobile Legends · 15 Oktober 2026', sportId: 'mlbb'},
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
    'GOB-VOL': {note: 'Khusus Gobak Sodor: peserta wajib hadir dan siap mulai pukul 08.00 WIB sesuai PDF aturan terbaru. Lihat halaman cabor untuk bagan dan ketentuan lengkap.'},
    'TL-TM': {date: '2026-10-15T14:00:00+07:00', endDate: '2026-10-15T15:00:00+07:00', title: 'Technical meeting tenis lapangan HORI Babel 2026', note: 'Peserta: 1 orang perwakilan dari masing-masing satker. Tautan rapat: https://teams.microsoft.com/meet/451711671812590?p=v7IOJCmFiM21Me4rI0. Detail ID dan kode sandi mengikuti undangan panitia.'},
    'J-tenis-meja-P5': {title: 'Perebutan juara 3 · KPPN Pangkalpinang vs KPPBC Pangkalpinang', note: 'Wasit: Kanwil DJPb.'},
    'J-tenis-meja-P6': {title: 'Final · Kanwil DJPb vs KPP Bangka', note: 'Wasit: KPPN Pangkalpinang.'},
    'BAKSOS-DONASI-20261014': {date: '2026-10-14T16:00:00+07:00', title: 'Batas pengumpulan donasi bakti sosial Dusun Serdang', note: 'Dana dan pakaian layak pakai dikumpulkan melalui PIC KPP Pratama Pangkalpinang. Poster memuat rincian rekening donasi.'}
  };
  const matchExtras = [{id:'mlbb-20261013-A1',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'13 Okt · A1',teamA:'U03',teamB:'U04',winnerId:'U03',scoreA:2,scoreB:0,state:'official',status:'Selesai',date:'2026-10-13',allDay:true,location:'Mobile Legends',parts:[],revision:0},{id:'mlbb-20261013-A2',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'13 Okt · A2',teamA:'U04',teamB:'U01',winnerId:'U01',scoreA:0,scoreB:2,state:'official',status:'Selesai',date:'2026-10-13',allDay:true,location:'Mobile Legends',parts:[],revision:0},{id:'mlbb-20261013-B1',sportId:'mlbb',groupId:'ML-GRUP-B',stage:'Grup',label:'13 Okt · B1',teamA:'U08',teamB:'U07',winnerId:'U08',scoreA:2,scoreB:0,state:'official',status:'Selesai',date:'2026-10-13',allDay:true,location:'Mobile Legends',parts:[],revision:0}];
  matchExtras.push({
    id: 'mlbb-20261014-A1', sportId: 'mlbb', groupId: 'ML-GRUP-A',
    stage: 'Grup', label: '14 Okt · Grup A', teamA: 'U01', teamB: 'U05',
    winnerId: 'U05', scoreA: 0, scoreB: 2, state: 'official', status: 'Selesai',
    date: '2026-10-14', allDay: true, location: 'Mobile Legends', parts: [], revision: 0
  });
  scheduleExtras.push({
    id: 'J-mlbb-20261014-A1', sportId: 'mlbb',
    title: 'Grup A · Kanwil DJPb Babel vs KPPN Pangkalpinang', type: 'Pertandingan',
    date: '2026-10-14', endDate: null, allDay: true, location: 'Mobile Legends',
    note: 'Hasil: Kanwil DJPb Babel 0–2 KPPN Pangkalpinang.',
    status: 'Selesai', unitIds: ['U01', 'U05'], revision: 0
  });
  posters.push(
    {path: 'assets/posters/bagan-tenis-lapangan.png', title: 'Bagan tenis lapangan hasil technical meeting', sportId: 'tenis-lapangan'},
    {path: 'assets/posters/bagan-gobak-sodor.jpg', title: 'Bagan perlombaan Gobak Sodor', sportId: 'gobak-voli-pantai'}
  );
  matchExtras.push(
    {id:'mlbb-20261015-A1',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'15 Okt · Grup A',teamA:'U03',teamB:'U01',winnerId:'U03',scoreA:2,scoreB:0,state:'official',status:'Selesai',date:'2026-10-15',allDay:true,location:'Mobile Legends',parts:[],revision:0},
    {id:'mlbb-20261015-B1',sportId:'mlbb',groupId:'ML-GRUP-B',stage:'Grup',label:'15 Okt · Grup B',teamA:'U07',teamB:'U02',winnerId:'U02',scoreA:0,scoreB:2,state:'official',status:'Selesai',date:'2026-10-15',allDay:true,location:'Mobile Legends',parts:[],revision:0}
  );
  matchExtras.push({id:'mlbb-20261016-A1',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'16 Okt · Grup A',teamA:'U04',teamB:'U05',winnerId:'U04',scoreA:2,scoreB:0,state:'official',status:'Selesai',date:'2026-10-16',allDay:true,location:'Mobile Legends',parts:[],revision:0});
  scheduleExtras.push({id:'J-mlbb-20261016-A1',sportId:'mlbb',title:'Grup A · KPP Bangka 2–0 KPPN Pangkalpinang',type:'Pertandingan',date:'2026-10-16',endDate:null,allDay:true,location:'Mobile Legends',note:'Hasil pertandingan 16 Oktober 2026.',status:'Selesai',unitIds:['U04','U05'],revision:0});
  matchExtras.push(
    {id:'mlbb-playoff-SF1',sportId:'mlbb',stage:'Semifinal',label:'Semifinal 1',teamA:'U03',teamB:'U08',date:'2026-10-21',location:'Mobile Legends',state:'draft',status:'Terjadwal',scoreA:null,scoreB:null,parts:[],revision:0},
    {id:'mlbb-playoff-SF2',sportId:'mlbb',stage:'Semifinal',label:'Semifinal 2',teamA:'U02',teamB:'U04',date:'2026-10-21',location:'Mobile Legends',state:'draft',status:'Terjadwal',scoreA:null,scoreB:null,parts:[],revision:0},
    {id:'mlbb-playoff-F',sportId:'mlbb',stage:'Final',label:'Final',teamA:null,teamB:null,sourceA:{match:'mlbb-playoff-SF1',outcome:'winner'},sourceB:{match:'mlbb-playoff-SF2',outcome:'winner'},date:'2026-10-23',location:'Mobile Legends',state:'draft',status:'Terjadwal',scoreA:null,scoreB:null,parts:[],revision:0},
    {id:'mlbb-playoff-3P',sportId:'mlbb',stage:'Juara III',label:'Perebutan juara III',teamA:null,teamB:null,sourceA:{match:'mlbb-playoff-SF1',outcome:'loser'},sourceB:{match:'mlbb-playoff-SF2',outcome:'loser'},date:'2026-10-23',location:'Mobile Legends',state:'draft',status:'Terjadwal',scoreA:null,scoreB:null,parts:[],revision:0}
  );
  matchExtras.filter(m=>m.date==='2026-10-15').forEach(m=>scheduleExtras.push({
    id:'J-'+m.id,sportId:'mlbb',title:m.groupId==='ML-GRUP-A'?'Grup A · KPP Pangkalpinang 2–0 Kanwil DJPb Babel':'Grup B · KPP Tanjung Pandan 0–2 KPPBC Pangkalpinang',
    type:'Pertandingan',date:m.date,endDate:null,allDay:true,location:'Mobile Legends',note:'Hasil pertandingan 15 Oktober 2026.',status:'Selesai',unitIds:[m.teamA,m.teamB],revision:0
  }));
  const tennisRules = [
    'Hasil technical meeting 15 Oktober 2026 menggantikan format pertandingan pada handbook lama.',
    'Round 1 sampai semifinal: 1 set, 8 game, tanpa deuce.',
    'Final: 1 set, 8 game, menggunakan deuce.',
    'Ganda laki-laki, perempuan, atau campuran. Setiap unit maksimal tiga orang: dua inti dan satu cadangan.',
    'Bagan sesuai hasil pengundian technical meeting; jadwal rinci setiap pertemuan mengikuti panitia.',
    'Turnamen 17–18 Oktober 2026 di Lapangan Tenis Komplek Bea Cukai Pasir Garam. Peserta membawa raket sendiri dan hadir paling lambat 15 menit sebelum jadwal.'
  ];
  const gobakRules = [
    'Setiap tim terdiri atas 4 pemain utama laki-laki dari unit yang didaftarkan, dengan 1–2 cadangan opsional. Peserta siap mulai pukul 08.00 WIB. Persiapan penggabungan ulang tim maksimal 15 menit setelah arahan panitia.',
    'Penyerang pertama ditentukan melalui undian. Setiap pertandingan terdiri atas 2 ronde; kedua tim bertukar peran. Durasi 5 menit per ronde dengan pergantian posisi 1–2 menit.',
    'Penyerang melewati seluruh garis hingga garis akhir lalu kembali ke garis awal. Berhasil masuk mendapat 0,5 poin; kembali ke garis awal menambah 0,5 poin. Maksimal 1 poin per pemain.',
    'Pemain tersentuh secara sah dinyatakan mati dan berhenti pada putaran aktifnya; pemain lain tetap bermain. Sudah masuk tetapi tersentuh sebelum kembali mendapat 0,5 poin. Pemain yang sudah kembali tidak boleh masuk lagi untuk menambah poin.',
    'Penjaga hanya bergerak di garisnya dan menyentuh dengan tangan secara wajar. Dilarang mendorong, menarik, menjegal, memukul, melempar pasir, atau keluar batas lapangan.',
    'Poin tertinggi setelah 2 ronde menang. Jika seri, panitia dapat mengadakan ronde tambahan. Petugas mencatat poin dan wasit mengesahkan; keputusan wasit selama pertandingan bersifat final.',
    'Wasit bergiliran dari perwakilan unit. Panitia menyiapkan lapangan pasir yang aman beserta perlengkapan. Pertandingan dihentikan jika cuaca atau pantai membahayakan, termasuk petir atau ombak mencapai lapangan. Pelanggaran berat dapat berujung diskualifikasi.',
    'Bagan: KPP Pangkalpinang (A) mendapat bye dan bertemu pemenang KPP Bangka (B) vs KPPBC Pangkalpinang (C). Kanwil DJPb Babel (F) mendapat bye dan bertemu pemenang KPPN Pangkalpinang (D) vs KPKNL Pangkalpinang (E). Kedua pemenang bertemu di final.'
  ];
  const awardExtras = [
    {id:'TT-JUARA-20261015-1',sportId:'tenis-meja',categoryId:'beregu',rank:1,unitId:'U04',state:'official'},
    {id:'TT-JUARA-20261015-2',sportId:'tenis-meja',categoryId:'beregu',rank:2,unitId:'U01',state:'official'},
    {id:'TT-JUARA-20261015-3',sportId:'tenis-meja',categoryId:'beregu',rank:3,unitId:'U05',state:'official'},
    {id:'TL-JUARA-20261017-1',sportId:'tenis-lapangan',categoryId:'ganda',rank:1,unitId:'U04',state:'official'},
    {id:'TL-JUARA-20261017-2',sportId:'tenis-lapangan',categoryId:'ganda',rank:2,unitId:'U07',state:'official'},
    {id:'TL-JUARA-20261017-3',sportId:'tenis-lapangan',categoryId:'ganda',rank:3,unitId:'U01',state:'official'}
  ];
  const activitySlides = [
    {id: 'TL-TM-UPDATE', kind: 'event', eventId: 'TL-TM'},
    {id: 'NYANYI-UPDATE', kind: 'event', eventId: 'NYANYI-TM', poster: 'assets/posters/lomba-menyanyi-hori-80.jpg'},
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
    // A backend correction (including a revoked result) takes precedence.
    const additions = matchExtras.filter(match => !payload.matches.some(remote =>
      remote.id === match.id || (remote.sportId === match.sportId &&
      remote.date?.slice(0,10) === match.date.slice(0,10) &&
      [remote.teamA, remote.teamB].includes(match.teamA) &&
      [remote.teamA, remote.teamB].includes(match.teamB))
    )).map(match => ({...match, parts: [...(match.parts || [])]}));
    const singing = root.HORI_SEED?.sports.find(sport => sport.id === 'menyanyi');
    const sports = payload.sports.map(sport => {
      if (sport.id === 'menyanyi' && singing && sport.rules.some(rule => rule.includes('menunggu panitia'))) return {...sport, period: singing.period, rules: [...singing.rules], notes: [...singing.notes]};
      if (sport.id === 'tenis-lapangan') return {...sport, medalConfirmed: true, rules: [...tennisRules], notes: ['Juara tenis lapangan HORI 2026: KPP Bangka juara I, KPP Tanjung Pandan juara II, dan Kanwil DJPb juara III.', 'Format 8 game mengikuti hasil TM terbaru. Ketentuan lama 6/7 game dan tie-break tidak dijadikan acuan format pertandingan terbaru.']};
      if (sport.id === 'mlbb') return {...sport, rules: [...sport.rules.slice(0,2), 'Playoff menggunakan sistem single elimination karena waktu pelaksanaan terbatas.', ...sport.rules.slice(3)], notes: [...(sport.notes || []), 'Playoff dilaksanakan Rabu–Jumat. Final dan perebutan juara III menggunakan wasit independen. Livestream dapat dilakukan dengan delay 10 detik; panitia membuka bantuan teknis OBS atau Streamlabs.']};
      if (sport.id === 'gobak-voli-pantai') return {...sport, rules: [...gobakRules], notes: ['Aturan dan bagan ini khusus Gobak Sodor. Aturan Voli Pantai belum disertakan dalam pembaruan ini.']};
      if (sport.id === 'tenis-meja') return {...sport, medalConfirmed: true};
      return sport;
    });
    const matches = payload.matches.map(match => {
      const teams = {'tenis-meja-P5': ['U05','U02'], 'tenis-meja-P6': ['U01','U04']}[match.id];
      return teams && match.state === 'draft' && !match.needsReview ? {...match, teamA: teams[0], teamB: teams[1], sourceA: null, sourceB: null} : match;
    });
    const groups = (payload.groups.length ? payload.groups : [
      {id: 'ML-GRUP-A', name: 'Grup A', unitIds: ['U03','U01','U05','U04']},
      {id: 'ML-GRUP-B', name: 'Grup B', unitIds: ['U02','U08','U07']}
    ]).map(group => group.id === 'ML-GRUP-A' ? {...group, unitIds: ['U03','U04','U01','U05'], manualOrder: ['U03','U04','U01','U05']} : group);
    const awards = [...payload.awards, ...awardExtras.filter(award => !payload.awards.some(remote => remote.sportId === award.sportId && remote.categoryId === award.categoryId && remote.rank === award.rank))];
    return {...payload, sports, groups, awards, settings: {...payload.settings, standingsConfirmed: true, mlConfirmed: true, mlPointsUnit: 'match'}, matches: [...matches, ...additions]};
  }
  root.HORI_CONTENT = { handbooks, kickoff, posters, scheduleExtras, scheduleOverrides, matchExtras, activitySlides, withSchedule, withMatches };
  if (typeof module === 'object' && module.exports) module.exports = root.HORI_CONTENT;
})(typeof window === 'undefined' ? globalThis : window);
