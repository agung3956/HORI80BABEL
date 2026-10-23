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
    'gobak-voli-pantai': [{title: 'Aturan dan bagan Gobak Sodor terbaru', path: 'handbooks/aturan-gobak-sodor-update.pdf', format: 'PDF', pages: 4}],
    'menyanyi': [{title: 'Handbook Lomba Karaoke HORI 2026',path:'handbooks/handbook-karaoke-hori-2026.pdf',format:'PDF',pages:5}]
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
    'GOB-VOL': {title:'Perlombaan Gobak Sodor',date:'2026-10-24T09:00:00+07:00',endDate:null,allDay:false,location:'Pantai Temberan',note:'Bersih pantai dimulai pukul 08.00 WIB, dilanjutkan Gobak Sodor pukul 09.00 WIB. Setiap kantor mengirim perwakilan dan membawa alat kebersihan; trashbag disediakan panitia.'},
    'NYANYI-REG': {date:'2026-10-20',note:'Pendaftaran sesuai handbook paling lambat 20 Oktober 2026 melalui https://s.kemenkeu.go.id/BabelNyanyiHORI80. Maksimal 4 peserta per unit. CP Dyna Juhara 081617384728.'},
    'TL-TM': {date: '2026-10-15T14:00:00+07:00', endDate: '2026-10-15T15:00:00+07:00', title: 'Technical meeting tenis lapangan HORI Babel 2026', note: 'Peserta: 1 orang perwakilan dari masing-masing satker. Tautan rapat: https://teams.microsoft.com/meet/451711671812590?p=v7IOJCmFiM21Me4rI0. Detail ID dan kode sandi mengikuti undangan panitia.'},
    'J-tenis-meja-P5': {title: 'Perebutan juara 3 · KPPN Pangkalpinang vs KPPBC Pangkalpinang', note: 'Wasit: Kanwil DJPb.'},
    'J-tenis-meja-P6': {title: 'Final · Kanwil DJPb vs KPP Bangka', note: 'Wasit: KPPN Pangkalpinang.'},
    'J-bulutangkis-P4': {title: 'Semifinal 2 · KPP Pangkalpinang vs KPKNL Pangkalpinang', note: 'Wasit dan hakim garis: KPPN Pangkalpinang.'},
    'J-bulutangkis-P5': {title: 'Perebutan juara 3 · Kanwil DJPb vs kalah semifinal 2', note: 'Wasit dan hakim garis: pemenang semifinal 2.'},
    'J-bulutangkis-P6': {title: 'Final · KPP Bangka vs pemenang semifinal 2', note: 'Wasit dan hakim garis: pemenang perebutan juara 3.'},
    'BAKSOS-DONASI-20261014': {date: '2026-10-14T16:00:00+07:00', title: 'Batas pengumpulan donasi bakti sosial Dusun Serdang', note: 'Dana dan pakaian layak pakai dikumpulkan melalui PIC KPP Pratama Pangkalpinang. Poster memuat rincian rekening donasi.'},
    'CATUR': {title: 'Hasil lomba catur HORI ke-80', status: 'Selesai', note: '10 pegawai terdaftar; 8 hadir dan 2 tidak hadir. Juara I Saiful Ragatna Berutu, Juara II Mohamad Hamzah, Juara III Fauzan Nugroho Prakoso.'}
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
    {path: 'assets/posters/bagan-gobak-sodor.jpg', title: 'Bagan perlombaan Gobak Sodor', sportId: 'gobak-voli-pantai'},
    {path: 'assets/posters/hasil-catur-hori-80.jpg', title: 'Hasil lomba catur HORI ke-80', sportId: 'catur'}
  );
  matchExtras.push(
    {id:'mlbb-20261015-A1',sportId:'mlbb',groupId:'ML-GRUP-A',stage:'Grup',label:'15 Okt · Grup A',teamA:'U03',teamB:'U01',winnerId:'U03',scoreA:2,scoreB:0,state:'official',status:'Selesai',date:'2026-10-15',allDay:true,location:'Mobile Legends',parts:[],revision:0},
    {id:'mlbb-20261015-B1',sportId:'mlbb',groupId:'ML-GRUP-B',stage:'Grup',label:'15 Okt · Grup B',teamA:'U07',teamB:'U02',winnerId:'U02',scoreA:0,scoreB:2,state:'official',status:'Selesai',date:'2026-10-15',allDay:true,location:'Mobile Legends',parts:[],revision:0}
  );
  matchExtras.push(
    {id:'tl-20261017-R1',sportId:'tenis-lapangan',stage:'Babak awal',label:'Round 1',teamA:'U01',teamB:'U09',winnerId:'U01',scoreA:8,scoreB:0,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-17',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261017-R2A',sportId:'tenis-lapangan',stage:'Perempat final',label:'Round 2 · 1',teamA:'U06',teamB:null,sourceB:{match:'tl-20261017-R1',outcome:'winner'},winnerId:'U01',scoreA:0,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-17',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261017-R2B',sportId:'tenis-lapangan',stage:'Perempat final',label:'Round 2 · 2',teamA:'U08',teamB:'U04',winnerId:'U04',scoreA:0,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-17',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261017-R2C',sportId:'tenis-lapangan',stage:'Perempat final',label:'Round 2 · 3',teamA:'U05',teamB:'U03',winnerId:'U03',scoreA:3,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-17',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261017-R2D',sportId:'tenis-lapangan',stage:'Perempat final',label:'Round 2 · 4',teamA:'U02',teamB:'U07',winnerId:'U07',scoreA:4,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-17',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261018-SF1',sportId:'tenis-lapangan',stage:'Semifinal',label:'Semifinal 1',teamA:null,teamB:'U04',sourceA:{match:'tl-20261017-R2A',outcome:'winner'},winnerId:'U04',scoreA:4,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-18',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261018-SF2',sportId:'tenis-lapangan',stage:'Semifinal',label:'Semifinal 2',teamA:'U03',teamB:'U07',winnerId:'U07',scoreA:3,scoreB:8,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-18',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0},
    {id:'tl-20261018-F',sportId:'tenis-lapangan',stage:'Final',label:'Final',teamA:'U04',teamB:'U07',winnerId:'U04',scoreA:8,scoreB:4,format:'eight-game',state:'official',status:'Selesai',date:'2026-10-18',allDay:true,location:'Lapangan Tenis Komplek Bea Cukai Pasir Garam',parts:[],revision:0}
  );
  matchExtras.filter(m=>m.sportId==='tenis-lapangan').forEach(m=>scheduleExtras.push({
    id:'J-'+m.id,sportId:'tenis-lapangan',title:`${m.stage} · ${m.label}`,type:'Pertandingan',date:m.date,endDate:null,allDay:true,location:m.location,
    note:`Hasil: ${m.scoreA}–${m.scoreB}. Pemenang: ${m.winnerId}.`,status:'Selesai',unitIds:[m.teamA,m.teamB].filter(Boolean),revision:0
  }));
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
  // Pembaruan panitia 23 Oktober. Tanggal hasil yang tidak disebutkan tetap kosong.
  const karaokeRules = [
    'Lomba perorangan untuk pejabat, pegawai, dan PPNPN Satu Kemenkeu Bangka Belitung. Maksimal 4 peserta per unit; pendaftaran paling lambat 20 Oktober 2026.',
    'Ketentuan tambahan terbaru: siapkan 2 lagu, satu untuk penyisihan 27 Oktober dan satu untuk persiapan final 29 Oktober 2026. Satu lagu dibawakan pada setiap babak.',
    'Pelaksanaan pukul 15.30 WIB di Aula Kanwil DJPb Provinsi Bangka Belitung lantai 2. Registrasi dan persiapan teknis pukul 15.00–15.15; peserta hadir minimal 15 menit sebelum lomba.',
    'Video karaoke diserahkan paling lambat Senin, 26 Oktober 2026 pukul 15.00 WIB. Musik dan lirik harus jelas, tanpa vokal utama yang mendominasi. Disarankan MP4 dengan nama NomorPeserta_NamaPeserta_JudulLagu.mp4.',
    'Sampaikan judul lagu dan penyanyi asli. Lagu Indonesia atau bahasa lain diperbolehkan dengan lirik yang pantas. Perubahan lagu atau video setelah tenggat harus disetujui panitia.',
    'Urutan tampil diundi dengan spin wheel. Operator panitia memutar video terverifikasi; peserta bernyanyi langsung dan tidak mengganti video atau menggunakan perangkat sendiri tanpa persetujuan.',
    'Usulan bobot dalam handbook: teknik vokal 50%, tempo dan musikalitas 20%, interpretasi dan penghayatan 15%, performance serta kreativitas 15%. Komposisi ini dapat disesuaikan dan disahkan panitia sebelum lomba.',
    'Juri profesional dari luar Kemenkeu menetapkan Juara I–III berdasarkan total nilai. Keputusan final. Peserta dan pendukung wajib tertib; pelanggaran dapat berakibat diskualifikasi.',
    'Narahubung: Dyna Juhara, Kanwil DJPb Provinsi Bangka Belitung, 081617384728.'
  ];
  const latestPosters = [
    {path:'assets/posters/jadwal-voli-23-oktober.jpg',title:'Jadwal voli · 23 Oktober 2026',sportId:'voli'},
    {path:'assets/posters/bersih-pantai-24-oktober.jpg',title:'Bersih pantai dan Gobak Sodor · 24 Oktober 2026',sportId:'gobak-voli-pantai'},
    {path:'assets/posters/mlbb-bagan-semifinal.jpg',title:'Hasil semifinal dan bagan final Mobile Legends',sportId:'mlbb'},
    {path:'assets/posters/voli-grup-a.jpg',title:'Klasemen dan skor voli Grup A',sportId:'voli'},
    {path:'assets/posters/voli-grup-b.jpg',title:'Klasemen dan skor voli Grup B',sportId:'voli'}
  ];
  posters.push(...latestPosters);
  const eventDefaults={endDate:null,allDay:false,status:'Terjadwal',unitIds:[],revision:0,note:''};
  scheduleExtras.push(
    {...eventDefaults,id:'BERSIH-PANTAI-20261024',sportId:'',title:'Bakti sosial bersih-bersih pantai',type:'Bakti sosial',date:'2026-10-24T08:00:00+07:00',location:'Pantai Temberan',note:'Masing-masing kantor mengirim perwakilan dan membawa peralatan kebersihan. Trashbag disediakan panitia. Dilanjutkan perlombaan Gobak Sodor pukul 09.00 WIB.'},
    {...eventDefaults,id:'KARAOKE-VIDEO',sportId:'menyanyi',title:'Batas pengumpulan video karaoke',type:'Pengumpulan karya',date:'2026-10-26T15:00:00+07:00',location:'Melalui panitia karaoke',note:'Siapkan 2 lagu untuk penyisihan dan persiapan final. Kirim video karaoke sesuai handbook; CP Dyna Juhara 081617384728.'},
    {...eventDefaults,id:'KARAOKE-PENYISIHAN',sportId:'menyanyi',title:'Penyisihan lomba karaoke',type:'Perlombaan',date:'2026-10-27T15:30:00+07:00',endDate:'2026-10-27T17:30:00+07:00',location:'Aula Kanwil DJPb Provinsi Bangka Belitung lantai 2',note:'Registrasi 15.00–15.15, pembukaan 15.15, penjelasan teknis 15.20–15.30. Penampilan 15.30–17.30, rekap 17.30, pengumuman 17.40, penutupan 17.45–17.50.'},
    {...eventDefaults,id:'KARAOKE-FINAL',sportId:'menyanyi',title:'Final lomba karaoke',type:'Perlombaan',date:'2026-10-29T15:30:00+07:00',endDate:'2026-10-29T17:00:00+07:00',location:'Aula Kanwil DJPb Provinsi Bangka Belitung lantai 2',note:'Registrasi 15.00–15.15. Penampilan 15.30–17.00; rekap 17.00, pengumuman 17.10, penutupan dan foto bersama 17.15–17.20.'},
    {...eventDefaults,id:'VOLI-20261023-B3',sportId:'voli',title:'Grup B · KPKNL Pangkalpinang vs Kanwil DJPb Babel',type:'Pertandingan',date:'2026-10-23T07:00:00+07:00',location:'Lapangan KPP Pratama Bangka',unitIds:['U06','U01']},
    {...eventDefaults,id:'VOLI-20261023-A3',sportId:'voli',title:'Grup A · KPPN Pangkalpinang vs KPPBC Pangkalpinang',type:'Pertandingan',date:'2026-10-23T16:00:00+07:00',location:'Lapangan KPP Pratama Bangka',unitIds:['U05','U02']}
  );
  const matchDefaults={date:null,allDay:true,location:'Menunggu informasi',state:'official',status:'Selesai',parts:[],revision:0,reportedAt:'2026-10-23T12:00:00+07:00'};
  matchExtras.push(
    {...matchDefaults,id:'ML-SF1',sportId:'mlbb',stage:'Semifinal',label:'SF1 · BO3',teamA:'U03',teamB:'U08',winnerId:'U03',scoreA:2,scoreB:0},
    {...matchDefaults,id:'ML-SF2',sportId:'mlbb',stage:'Semifinal',label:'SF2 · BO3',teamA:'U02',teamB:'U04',winnerId:'U02',scoreA:2,scoreB:1},
    {...matchDefaults,id:'ML-BRONZE',sportId:'mlbb',stage:'Juara III',label:'Perebutan peringkat 3',teamA:'U08',teamB:'U04',winnerId:null,scoreA:null,scoreB:null,state:'draft',status:'Terjadwal'},
    {...matchDefaults,id:'ML-FINAL',sportId:'mlbb',stage:'Grand final',label:'Final · BO5',teamA:'U03',teamB:'U02',winnerId:null,scoreA:null,scoreB:null,state:'draft',status:'Terjadwal'}
  );
  const badmintonUpdates = [
    {id:'bulutangkis-P1',teamA:'U04',teamB:'U02',winnerId:'U04',scoreA:2,scoreB:1,state:'official'},
    {id:'bulutangkis-P2',teamA:'U03',teamB:'U05',winnerId:'U03',scoreA:2,scoreB:0,state:'official'},
    {id:'bulutangkis-P3',teamA:'U04',teamB:'U01',winnerId:'U04',scoreA:2,scoreB:0,state:'official'},
    {id:'bulutangkis-P4',teamA:'U03',teamB:'U06',winnerId:'U03',scoreA:null,scoreB:null,state:'draft'},
    {id:'bulutangkis-P5',teamA:'U01',teamB:'U06',winnerId:'U01',scoreA:null,scoreB:null,state:'draft'},
    {id:'bulutangkis-P6',teamA:'U04',teamB:'U03',winnerId:'U03',scoreA:null,scoreB:null,state:'draft'}
  ];
  const volleyballResults = [
    {id:'VOLI-A1',group:'A',teamA:'U04',teamB:'U05',sets:[{a:25,b:21},{a:25,b:18}]},
    {id:'VOLI-A2',group:'A',teamA:'U04',teamB:'U02',sets:[{a:18,b:25},{a:22,b:25}]},
    {id:'VOLI-B1',group:'B',teamA:'U03',teamB:'U06',sets:[{a:25,b:17},{a:25,b:22}]},
    {id:'VOLI-B2',group:'B',teamA:'U03',teamB:'U01',sets:[{a:25,b:18},{a:25,b:21}]}
  ];
  volleyballResults.forEach(m=>{const a=m.sets.filter(s=>s.a>s.b).length,b=m.sets.length-a;matchExtras.push({...matchDefaults,...m,sportId:'voli',stage:'Grup '+m.group,label:'Penyisihan Grup '+m.group,scoreA:a,scoreB:b,winnerId:a>b?m.teamA:m.teamB,location:'Lapangan KPP Pratama Bangka'});});
  function volleyballTable(group) {
    const ids=group==='A'?['U02','U04','U05']:['U03','U06','U01'];
    return ids.map(unitId=>{const row={unitId,played:0,won:0,lost:0,points:0,setWins:0,setLosses:0,ballWins:0,ballLosses:0};
      volleyballResults.filter(m=>m.group===group&&[m.teamA,m.teamB].includes(unitId)).forEach(m=>{const a=m.teamA===unitId;row.played++;let w=0,l=0;m.sets.forEach(s=>{const mine=a?s.a:s.b,other=a?s.b:s.a;row.ballWins+=mine;row.ballLosses+=other;mine>other?w++:l++;});row.setWins+=w;row.setLosses+=l;w>l?row.won++:row.lost++;});row.points=row.won*3;return row;
    }).sort((a,b)=>b.points-a.points||(b.ballWins-b.ballLosses)-(a.ballWins-a.ballLosses));
  }
  const tennisRules = [
    'Hasil technical meeting 15 Oktober 2026 menggantikan format pertandingan pada handbook lama.',
    'Round 1 sampai semifinal: 1 set, 8 game, tanpa deuce.',
    'Final: 1 set, 8 game, menggunakan deuce.',
    'Ganda laki-laki, perempuan, atau campuran. Setiap unit maksimal tiga orang: dua inti dan satu cadangan.',
    'Bagan sesuai hasil pengundian technical meeting; jadwal rinci setiap pertemuan mengikuti panitia.',
    'Turnamen 17–18 Oktober 2026 di Lapangan Tenis Komplek Bea Cukai Pasir Garam. Peserta membawa raket sendiri dan hadir paling lambat 15 menit sebelum jadwal.'
  ];
  const gobakRules = [
    'Bersih-bersih pantai dimulai pukul 08.00 WIB. Perlombaan Gobak Sodor dimulai pukul 09.00 WIB di Pantai Temberan. Setiap kantor mengirim perwakilan dan membawa peralatan kebersihan; trashbag disediakan panitia.',
    'Setiap tim terdiri atas 4 pemain utama laki-laki dari unit yang didaftarkan, dengan 1–2 cadangan opsional. Persiapan penggabungan ulang tim maksimal 15 menit setelah arahan panitia.',
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
    {id:'TL-JUARA-20261017-3',sportId:'tenis-lapangan',categoryId:'ganda',rank:3,unitId:'U01',state:'official'},
    {id:'CATUR-JUARA-20261023-1',sportId:'catur',categoryId:'perorangan',rank:1,unitId:'U01',state:'official'},
    {id:'CATUR-JUARA-20261023-2',sportId:'catur',categoryId:'perorangan',rank:2,unitId:'U04',state:'official'},
    {id:'CATUR-JUARA-20261023-3',sportId:'catur',categoryId:'perorangan',rank:3,unitId:'U03',state:'official'},
    {id:'BT-JUARA-20261022-1',sportId:'bulutangkis',categoryId:'beregu',rank:1,unitId:'U03',state:'official'},
    {id:'BT-JUARA-20261022-2',sportId:'bulutangkis',categoryId:'beregu',rank:2,unitId:'U04',state:'official'},
    {id:'BT-JUARA-20261022-3',sportId:'bulutangkis',categoryId:'beregu',rank:3,unitId:'U01',state:'official'}
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
      (match.date ? remote.date?.slice(0,10) === match.date.slice(0,10) : remote.stage === match.stage) &&
      [remote.teamA, remote.teamB].includes(match.teamA) &&
      [remote.teamA, remote.teamB].includes(match.teamB))
    )).map(match => ({...match, parts: [...(match.parts || [])]}));
    const singing = root.HORI_SEED?.sports.find(sport => sport.id === 'menyanyi');
    const sports = payload.sports.map(sport => {
      if (sport.id === 'menyanyi') return {...sport, name:'Lomba Karaoke', period:'27 & 29 Oktober · 15.30 WIB', rules:[...karaokeRules], notes:['Pendaftaran ditutup 20 Oktober 2026. Video karaoke dikirim paling lambat 26 Oktober 2026 pukul 15.00 WIB.']};
      if (sport.id === 'tenis-lapangan') return {...sport, medalConfirmed:true, rules: [...tennisRules], notes: ['Juara tenis lapangan HORI 2026: KPP Bangka juara I, KPP Tanjung Pandan juara II, dan Kanwil DJPb juara III.', 'Format 8 game mengikuti hasil TM terbaru. Ketentuan lama 6/7 game dan tie-break tidak dijadikan acuan format pertandingan terbaru.']};
      if (sport.id === 'mlbb') return {...sport, rules: [...sport.rules.slice(0,2), 'Playoff menggunakan sistem single elimination karena waktu pelaksanaan terbatas.', ...sport.rules.slice(3)], notes: [...(sport.notes || []), 'Playoff dilaksanakan Rabu–Jumat. Final dan perebutan juara III menggunakan wasit independen. Livestream dapat dilakukan dengan delay 10 detik; panitia membuka bantuan teknis OBS atau Streamlabs.']};
      if (sport.id === 'gobak-voli-pantai') return {...sport, name:'Gobak Sodor & Voli Pantai', period:'24 Oktober · Pantai Temberan', rules: [...gobakRules], notes: ['Bersih-bersih pantai dimulai pukul 08.00 WIB dan lomba Gobak Sodor pukul 09.00 WIB. Aturan Voli Pantai belum disertakan dalam pembaruan ini.']};
      if (sport.id === 'tenis-meja') return {...sport, medalConfirmed: true};
      if (sport.id === 'bulutangkis') return {...sport, medalConfirmed: true, notes: ['Juara akhir: KPP Pangkalpinang, KPP Bangka, dan Kanwil DJPb Babel. Skor semifinal dan final tidak disampaikan.']};
      if (sport.id === 'catur') return {...sport, name:'Catur', period:'Selesai · 23 Oktober', medalConfirmed:true, rules:['Jumlah peserta: 10 pegawai; peserta hadir 8 pegawai dan tidak hadir 2 pegawai.','Juara I: Saiful Ragatna Berutu (Kanwil DJPb Provinsi Bangka Belitung).','Juara II: Mohamad Hamzah (KPP Pratama Bangka).','Juara III: Fauzan Nugroho Prakoso (KPP Pratama Pangkal Pinang).'], notes:['Selamat kepada para pemenang dan terima kasih kepada seluruh peserta yang menjunjung sportivitas.']};
      if (sport.id === 'voli') return {...sport, period:'23 Oktober · Lapangan KPP Pratama Bangka', rules:['Jadwal 23 Oktober 2026: KPKNL Pangkalpinang vs Kanwil DJPb Babel pukul 07.00 WIB; KPPN Pangkalpinang vs KPPBC Pangkalpinang pukul 16.00 WIB.','Hasil dan klasemen penyisihan Grup A dan B mengikuti tabel terbaru panitia. Pertandingan yang belum dimainkan tetap menunggu hasil resmi.'], notes:['Peringkat yang memiliki poin dan selisih bola sama ditandai seri sampai pertandingan penentu selesai.']};
      return sport;
    });
    const badmintonById = new Map(badmintonUpdates.map(update => [update.id, update]));
    const matches = payload.matches.map(match => {
      const teams = {'tenis-meja-P5': ['U05','U02'], 'tenis-meja-P6': ['U01','U04']}[match.id];
      const badminton = badmintonById.get(match.id);
      const patched = badminton && !match.needsReview ? {...match, ...badminton, status:'Selesai'} : match;
      return teams && patched.state === 'draft' && !patched.needsReview ? {...patched, teamA: teams[0], teamB: teams[1], sourceA: null, sourceB: null} : patched;
    });
    const groups = (payload.groups.length ? payload.groups : [
      {id: 'ML-GRUP-A', name: 'Grup A', unitIds: ['U03','U01','U05','U04']},
      {id: 'ML-GRUP-B', name: 'Grup B', unitIds: ['U02','U08','U07']}
    ]).map(group => group.id === 'ML-GRUP-A' ? {...group, unitIds: ['U03','U04','U01','U05'], manualOrder: ['U03','U04','U01','U05']} : group);
    const awards = [...payload.awards, ...awardExtras.filter(award => !payload.awards.some(remote => remote.sportId === award.sportId && remote.categoryId === award.categoryId && remote.rank === award.rank))];
    return {...payload, sports, groups, awards, settings: {...payload.settings, standingsConfirmed: true, mlConfirmed: true, mlPointsUnit: 'match'}, matches: [...matches, ...additions]};
  }
  root.HORI_CONTENT = { handbooks, kickoff, posters, scheduleExtras, scheduleOverrides, matchExtras, activitySlides, karaokeRules, volleyballResults, volleyballTable, withSchedule, withMatches };
  if (typeof module === 'object' && module.exports) module.exports = root.HORI_CONTENT;
})(typeof window === 'undefined' ? globalThis : window);
