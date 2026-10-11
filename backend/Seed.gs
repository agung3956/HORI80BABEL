(function(root) {
const units=[
 {id:'U01',name:'Kanwil DJPb Provinsi Bangka Belitung',short:'Kanwil DJPb',mark:'DJPb',color:'#2563eb'},
 {id:'U02',name:'KPPBC TMP C Pangkalpinang',short:'Bea Cukai Pangkalpinang',mark:'BC',color:'#0061af'},
 {id:'U03',name:'KPP Pratama Pangkalpinang',short:'KPP Pangkalpinang',mark:'DJP',color:'#c48b05'},
 {id:'U04',name:'KPP Pratama Bangka',short:'KPP Bangka',mark:'DJP',color:'#b87632'},
 {id:'U05',name:'KPPN Pangkalpinang',short:'KPPN Pangkalpinang',mark:'KPPN',color:'#3a846a'},
 {id:'U06',name:'KPKNL Pangkalpinang',short:'KPKNL Pangkalpinang',mark:'DJKN',color:'#7259ab'}
];
const sports=[
{id:'tenis-meja',name:'Tenis meja',type:'team',icon:'table',tag:'Beregu · Sistem gugur',period:'13 & 15 Oktober',medalEnabled:true,medalConfirmed:false,color:'#edf5ff',rules:['Sistem gugur beregu. Ganda putra dimainkan pertama. Urutan ganda campuran dan ganda putri ditetapkan admin.','Setiap partai: best of five, kemenangan tiga gim, game point 11. Ketentuan deuce menunggu konfirmasi panitia.','Tim yang memenangkan dua partai pertama menang. Partai ketiga berstatus Tidak dimainkan.','Kanwil DJPb dan KPPN Pangkalpinang mendapat bye ke semifinal.'],notes:['Urutan partai kedua dan ketiga serta deuce belum ditegaskan.'],bestOf:5},
{id:'bulutangkis',name:'Bulutangkis',type:'team',icon:'badminton',tag:'Beregu · Sistem gugur',period:'20 & 22 Oktober',medalEnabled:true,medalConfirmed:false,color:'#eff8f3',rules:['Setiap unit maksimal satu tim dengan maksimal enam pemain.','Urutan: ganda campuran, ganda putra, ganda putri. Tiap partai best of three, rally point 21, batas poin 30. Deuce mengikuti konfirmasi panitia.','Partai ketiga tidak dimainkan ketika satu tim memenangkan dua partai pertama.','Pemain laki-laki hanya bermain sekali dalam satu pertemuan antarunit. Pemain perempuan boleh bermain dua kali.','Kanwil DJPb dan KPKNL Pangkalpinang mendapat bye ke semifinal.'],notes:['Ketentuan deuce perlu pengesahan panitia.'],bestOf:3},
{id:'tenis-lapangan',name:'Tenis lapangan',type:'knockout',icon:'tennis',tag:'Ganda · Sistem gugur',period:'17–18 Oktober',medalEnabled:true,medalConfirmed:false,color:'#fff7e7',rules:['Ganda laki-laki, perempuan, atau campuran. Setiap unit maksimal tiga orang: dua inti dan satu cadangan.','Babak awal sampai semifinal: satu set, enam game pro set, tie-break pada 5–5.','Final: satu set, tujuh game pro set, tie-break pada 6–6.','Tie-break target tujuh poin dengan selisih dua. Batas sepuluh poin. Pada 9–9 gunakan sudden death.','Bagan mengikuti pengundian resmi pada technical meeting.'],notes:['Aturan lokal dari poster. Bagan belum tersedia.']},
{id:'mlbb',name:'Mobile Legends',type:'groups',icon:'game',tag:'Esport · Grup & playoff',period:'12–25 Oktober',medalEnabled:true,medalConfirmed:false,color:'#f2effc',rules:['Satu tim per unit. Minimal lima dan maksimal delapan orang termasuk PIC/manager. Tampilan publik memakai kode pemain.','Pertandingan BO3. Grand final BO5. Dua tim teratas setiap grup lolos ke playoff.','Playoff memakai upper bracket dan lower bracket. Detail grand final reset menunggu keputusan panitia.','Menang atau menang WO +1. Kalah atau kalah WO 0. Pelanggaran chat all/radio all −1. Nickname berbeda −1. Penalti harus disahkan.','Pemecah seri: persentase game, kemudian head-to-head. Unit penghitungan poin dan rumus persentase harus disahkan sebelum klasemen resmi.'],notes:['Handbook: 12–18 Oktober (grup), 19–25 Oktober (playoff), 15.00–23.59 WIB. Excel mencantumkan akhir 23 Oktober dan 23.00.','Unit poin match/game dan detail reset grand final perlu konfirmasi.']},
{id:'fotografi',name:'Fotografi',type:'judged',icon:'camera',tag:'Karya · Penilaian juri',period:'12–30 Oktober',medalEnabled:false,medalConfirmed:false,color:'#fff0eb',rules:['Tema: Uang untuk Pembangunan Bangka Belitung.','Maksimal tiga karya per peserta. JPEG/JPG, minimal 2 MB setiap foto.','Pengumpulan 12–26 Oktober, penjurian 27–29 Oktober, pengumuman 30 Oktober menurut KAK.','Bobot: tema 30%, kreativitas dan orisinalitas 25%, komposisi dan teknik 20%, pesan atau cerita 15%, estetika 10%.','Skala penilaian ditetapkan panitia. Galeri hanya menampilkan karya yang diizinkan dan metadata yang sudah dibersihkan.','Juara I–III mengikuti pengesahan. Kontribusi medali belum diaktifkan.'],notes:['Poster menyebut pengumuman akan diinformasikan kemudian. Acuan awal 30 Oktober menurut KAK.']},
{id:'voli',name:'Bola voli',type:'pending',icon:'volleyball',tag:'Beregu',period:'14–23 Oktober',medalEnabled:true,medalConfirmed:false,color:'#eff6ff',rules:['Tanggal dalam Excel: 14, 16, 19, 21, dan 23 Oktober.','Jam, lokasi, peserta, dan sistem pertandingan menunggu panitia.'],notes:[]},
{id:'catur',name:'Catur',type:'pending',icon:'chess',tag:'Catur online',period:'23 Oktober',medalEnabled:true,medalConfirmed:false,color:'#f5f1ec',rules:['Catur online, 23 Oktober 2026, 08.00–11.00 WIB.','Sistem pertandingan dan aturan rinci menunggu panitia.'],notes:[]},
{id:'menyanyi',name:'Menyanyi',type:'pending',icon:'mic',tag:'Penilaian juri',period:'Menunggu jadwal',medalEnabled:true,medalConfirmed:false,color:'#fff0f4',rules:['Jadwal, kategori, dan aturan rinci menunggu panitia.'],notes:[]},
{id:'gobak-voli-pantai',name:'Gobak sodor / Voli pantai',type:'pending',icon:'sun',tag:'Entri sementara',period:'24 Oktober',medalEnabled:false,medalConfirmed:false,color:'#eef8f7',rules:['24 Oktober, 07.00–11.00 WIB, Pantai Temberan.','Satu entri sementara. Panitia perlu menetapkan apakah ini satu atau dua cabang.'],notes:['Panahan dan voli ekshibisi tidak masuk perolehan medali.']}
];
const matches=[];
function teamBracket(sport, pairs, byes, times) {
const desc=[['P1',pairs[0][0],pairs[0][1],null,null,'Babak awal'],['P2',pairs[1][0],pairs[1][1],null,null,'Babak awal'],['P3',null,byes[0],{match:sport+'-P1',outcome:'winner'},null,'Semifinal'],['P4',null,byes[1],{match:sport+'-P2',outcome:'winner'},null,'Semifinal'],['P5',null,null,{match:sport+'-P3',outcome:'loser'},{match:sport+'-P4',outcome:'loser'},'Juara III'],['P6',null,null,{match:sport+'-P3',outcome:'winner'},{match:sport+'-P4',outcome:'winner'},'Final']];
desc.forEach((r,i)=>matches.push({id:sport+'-'+r[0],sportId:sport,label:r[0],teamA:r[1],teamB:r[2],sourceA:r[3],sourceB:r[4],stage:r[5],date:times[i],location:'Aula KPPN Pangkalpinang',status:'Terjadwal',state:'draft',scoreA:null,scoreB:null,parts:[],revision:0}));
}
teamBracket('tenis-meja',[['U03','U02'],['U04','U06']],['U01','U05'],['2026-10-13T16:00:00+07:00','2026-10-13T16:00:00+07:00','2026-10-13T17:00:00+07:00','2026-10-13T17:00:00+07:00','2026-10-15T16:00:00+07:00','2026-10-15T17:00:00+07:00']);
teamBracket('bulutangkis',[['U04','U02'],['U03','U05']],['U01','U06'],['2026-10-20T16:00:00+07:00','2026-10-20T16:40:00+07:00','2026-10-20T17:20:00+07:00','2026-10-22T16:00:00+07:00','2026-10-22T16:40:00+07:00','2026-10-22T17:20:00+07:00']);
const schedule=[];
function event(id,sportId,title,type,date,endDate,location,note,allDay){schedule.push({id,sportId,title,type,date,endDate:endDate||null,location:location||'Menunggu informasi',note:note||'',allDay:!!allDay,status:'Terjadwal',unitIds:[],revision:0});}
matches.forEach(m=>event('J-'+m.id,m.sportId,m.stage+' · '+m.label,'Pertandingan',m.date,null,m.location));
event('TM-TM','tenis-meja','Technical meeting tenis meja','Technical meeting','2026-10-08T14:30:00+07:00');
event('TM-BT','bulutangkis','Technical meeting bulutangkis','Technical meeting','2026-10-08T14:00:00+07:00');
event('TL-REG','tenis-lapangan','Pendaftaran tenis lapangan','Pendaftaran','2026-10-09','2026-10-14',null,null,true);
event('TL-VERIFY','tenis-lapangan','Verifikasi peserta','Verifikasi','2026-10-14',null,null,null,true);
event('TL-TM','tenis-lapangan','Technical meeting & pengundian','Technical meeting','2026-10-15T16:30:00+07:00',null,'Microsoft Teams');
event('TL-PLAY','tenis-lapangan','Pertandingan tenis lapangan','Pertandingan','2026-10-17T06:00:00+07:00','2026-10-18T23:59:00+07:00','Lapangan Tenis Komplek Bea Cukai Pasir Garam','Jam pertandingan hari kedua menunggu panitia.');
event('TL-AWARD','tenis-lapangan','Pengumuman & penyerahan hadiah','Pengumuman','2026-10-18',null,'Lapangan Tenis Komplek Bea Cukai Pasir Garam',null,true);
event('ML-REG','mlbb','Pendaftaran Mobile Legends','Pendaftaran','2026-10-07','2026-10-09',null,null,true);
event('ML-TM','mlbb','Technical meeting & pembagian grup','Technical meeting','2026-10-09',null,null,null,true);
event('ML-GROUP','mlbb','Babak grup Mobile Legends','Pertandingan','2026-10-12','2026-10-18',null,'Rentang pertandingan 15.00–23.59 WIB. Mengikuti handbook.',true);
event('ML-PLAY','mlbb','Playoff Mobile Legends','Pertandingan','2026-10-19','2026-10-25',null,'Rentang pertandingan 15.00–23.59 WIB. Mengikuti handbook.',true);
event('FOTO-SUBMIT','fotografi','Pengumpulan karya fotografi','Pengumpulan karya','2026-10-12','2026-10-26',null,'Mengikuti mekanisme pengumpulan resmi.',true);
event('FOTO-JUDGE','fotografi','Penjurian fotografi','Penjurian','2026-10-27','2026-10-29',null,null,true);
event('FOTO-ANNOUNCE','fotografi','Pengumuman pemenang fotografi','Pengumuman','2026-10-30',null,null,'Tanggal acuan KAK, dapat diperbarui panitia.',true);
[14,16,19,21,23].forEach(d=>event('VOLI-'+d,'voli','Pertandingan bola voli','Pertandingan','2026-10-'+d,null,null,'Jam dan lokasi menunggu panitia.',true));
event('CATUR','catur','Catur online','Pertandingan','2026-10-23T08:00:00+07:00','2026-10-23T11:00:00+07:00','Online');
event('GOB-VOL','gobak-voli-pantai','Gobak sodor / Voli pantai','Pertandingan','2026-10-24T07:00:00+07:00','2026-10-24T11:00:00+07:00','Pantai Temberan');
const data={settings:{title:'HORI 80',theme:'Indonesia Berdaulat, APBN Kuat',timezone:'Asia/Jakarta',standingsConfirmed:false,rankingMethod:'medals',mlPointsUnit:'unconfirmed',mlPercentFormula:'gameWins / (gameWins + gameLosses) × 100',mlConfirmed:false,photoScale:null,tennisTableDeuce:false,badmintonDeuce:false,tableOrderConfirmed:false,tablePartOrder:['Ganda putra','Ganda campuran','Ganda putri'],updatedAt:null,revision:0},units,sports,matches,schedule,awards:[],penalties:[],works:[],groups:[],participants:[],bracketSlots:[],judging:[]};
root.HORI_SEED=data;if(typeof module==='object'&&module.exports)module.exports=data;
})(typeof window==='undefined'?globalThis:window);

var HORI_SEED = globalThis.HORI_SEED;
function seedData_(){return JSON.parse(JSON.stringify(HORI_SEED));}
