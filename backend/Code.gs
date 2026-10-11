/** HORI 80. Bound Google Sheets script, V8 runtime. Public doGet is read-only. */
var TABLES_={units:'Unit Kerja',sports:'Cabang dan Kategori',participants:'Peserta Anonim',schedule:'Jadwal',matches:'Pertandingan',groups:'Grup',bracketSlots:'Slot Bagan',judging:'Penilaian Karya',works:'Karya Publik',penalties:'Penalti',awards:'Penetapan Juara'};
var HEADER_=['ID','Revisi','Status','Data JSON'];
function onOpen(){SpreadsheetApp.getUi().createMenu('HORI 80').addItem('Buka panel admin','openAdmin').addItem('Setup awal / lengkapi tabel','setupHori').addToUi();}
function props_(){return PropertiesService.getScriptProperties();}
function assertAdmin_(){var email=Session.getActiveUser().getEmail().toLowerCase();var admins=(props_().getProperty('ADMIN_EMAILS')||'').toLowerCase().split(',').map(function(x){return x.trim();});if(!email||admins.indexOf(email)<0)throw Error('Akses ditolak. Gunakan akun Google admin yang terdaftar.');return email;}
function book_(){var id=props_().getProperty('SPREADSHEET_ID');if(!id)throw Error('Jalankan setupHori di Google Sheets dahulu.');return SpreadsheetApp.openById(id);}
function openAdmin(){assertAdmin_();SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile('Admin').setTitle('Admin HORI 80'));}
function setupHori(){
 var p=props_(),email=Session.getActiveUser().getEmail().toLowerCase();if(!email)throw Error('Jalankan setup dari editor dengan akun Google Anda.');
 if(p.getProperty('ADMIN_EMAILS'))assertAdmin_();else p.setProperty('ADMIN_EMAILS',email);
 var lock=LockService.getScriptLock();lock.waitLock(30000);
 try{var ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw Error('Gunakan script yang terikat pada Google Sheets.');if(p.getProperty('SPREADSHEET_ID')&&p.getProperty('SPREADSHEET_ID')!==ss.getId())throw Error('Script sudah terikat pada spreadsheet berbeda.');p.setProperty('SPREADSHEET_ID',ss.getId());ss.setSpreadsheetTimeZone('Asia/Jakarta');
  Object.keys(TABLES_).forEach(function(key){ensureSheet_(TABLES_[key]);});ensureSheet_('Pengaturan');ensureSheet_('Riwayat Perubahan');ensureSheet_('_Transaksi');
  if(p.getProperty('PENDING_TX'))recover_();var seed=seedData_();
  Object.keys(TABLES_).forEach(function(k){var sh=ss.getSheetByName(TABLES_[k]);var present=readRows_(sh),ids=new Set(present.map(function(x){return x.id;}));seed[k].forEach(function(x){if(!ids.has(x.id))present.push(x);});writeRows_(sh,present);});
  var settings=readRows_(ss.getSheetByName('Pengaturan'));if(!settings.length)writeRows_(ss.getSheetByName('Pengaturan'),[{id:'CONFIG',revision:0,data:seed.settings}]);
  if(!p.getProperty('DATA_REVISION'))p.setProperty('DATA_REVISION','0');ss.getSheetByName('_Transaksi').hideSheet();invalidate_();
 }finally{lock.releaseLock();}
 SpreadsheetApp.getUi().alert('Setup selesai. Data yang sudah ada dipertahankan. Buka menu HORI 80 > Buka panel admin.');
}
function ensureSheet_(name){var ss=book_(),sh=ss.getSheetByName(name)||ss.insertSheet(name);if(sh.getLastRow()===0){sh.getRange(1,1,1,4).setValues([HEADER_]);sh.setFrozenRows(1);sh.getRange(1,1,1,4).setBackground('#0061af').setFontColor('#ffffff').setFontWeight('bold');sh.setColumnWidth(1,210);sh.setColumnWidth(4,650);sh.getRange('A:D').setNumberFormat('@');}else if(JSON.stringify(sh.getRange(1,1,1,4).getValues()[0])!==JSON.stringify(HEADER_))throw Error('Header tabel '+name+' berbeda. Data tidak ditimpa.');return sh;}
function readRows_(sh){if(!sh||sh.getLastRow()<2)return [];return sh.getRange(2,1,sh.getLastRow()-1,4).getValues().filter(function(r){return r[0];}).map(function(r){var data=JSON.parse(r[3]);if(data.id!==String(r[0]))throw Error('ID baris tidak sesuai Data JSON.');return data;});}
function writeRows_(sh,rows){if(sh.getLastRow()>1)sh.getRange(2,1,sh.getLastRow()-1,4).clearContent();if(rows.length)sh.getRange(2,1,rows.length,4).setValues(rows.map(function(x){return [x.id,String(x.revision||0),x.state||x.status||'',JSON.stringify(x)];}));}
function readData_(){var ss=book_(),out={};Object.keys(TABLES_).forEach(function(k){out[k]=readRows_(ss.getSheetByName(TABLES_[k]));});out.settings=readRows_(ss.getSheetByName('Pengaturan'))[0].data;out.settings.revision=Number(props_().getProperty('DATA_REVISION')||0);out.settings.updatedAt=props_().getProperty('UPDATED_AT')||null;return out;}
function writeData_(d){var ss=book_();Object.keys(TABLES_).forEach(function(k){writeRows_(ss.getSheetByName(TABLES_[k]),d[k]);});writeRows_(ss.getSheetByName('Pengaturan'),[{id:'CONFIG',revision:d.settings.revision,data:d.settings}]);}
function invalidate_(){CacheService.getScriptCache().remove('hori-public');}
function backup_(d,op){var rows=[{id:'META',data:{revision:props_().getProperty('DATA_REVISION'),updatedAt:props_().getProperty('UPDATED_AT')||'',operationId:op}}];Object.keys(TABLES_).forEach(function(k){d[k].forEach(function(x){rows.push({id:k+'|'+x.id,key:k,record:x});});});rows.push({id:'SETTINGS',record:d.settings});readRows_(book_().getSheetByName('Riwayat Perubahan')).forEach(function(x){rows.push({id:'audit|'+x.id,key:'audit',record:x});});writeRows_(book_().getSheetByName('_Transaksi'),rows);SpreadsheetApp.flush();props_().setProperty('PENDING_TX',op);}
function recover_(){var rows=readRows_(book_().getSheetByName('_Transaksi')),meta=rows.find(function(x){return x.id==='META';});if(!meta)throw Error('Snapshot transaksi tidak ditemukan. Minta pengelola memulihkan spreadsheet.');var d={settings:rows.find(function(x){return x.id==='SETTINGS';}).record};Object.keys(TABLES_).forEach(function(k){d[k]=rows.filter(function(x){return x.key===k;}).map(function(x){return x.record;});});writeData_(d);writeRows_(book_().getSheetByName('Riwayat Perubahan'),rows.filter(function(x){return x.key==='audit';}).map(function(x){return x.record;}));props_().setProperty('DATA_REVISION',meta.data.revision||'0');props_().setProperty('UPDATED_AT',meta.data.updatedAt);props_().deleteProperty('PENDING_TX');invalidate_();}
function adminLoad(){assertAdmin_();var lock=LockService.getScriptLock();lock.waitLock(30000);try{if(props_().getProperty('PENDING_TX'))recover_();return readData_();}finally{lock.releaseLock();}}
function adminCommand(request){
 var actor=assertAdmin_(),lock=LockService.getScriptLock();lock.waitLock(30000);
 try{
  if(props_().getProperty('PENDING_TX'))recover_();if(!request||!/^[a-zA-Z0-9_-]{10,100}$/.test(request.operationId||''))throw Error('ID operasi tidak valid.');
  var log=readRows_(book_().getSheetByName('Riwayat Perubahan')),done=log.find(function(x){return x.id===request.operationId;});if(done)return {revision:done.resultRevision,message:'Operasi ini sudah tersimpan.'};
  var before=readData_();if(request.revision!==before.settings.revision)throw Error('Data sudah berubah. Muat ulang panel sebelum menyimpan.');
  var next=JSON.parse(JSON.stringify(before));applyCommand_(next,request);var nextRevision=before.settings.revision+1;next.settings.revision=nextRevision;next.settings.updatedAt=new Date().toISOString();
  backup_(before,request.operationId);
  try{writeData_(next);log.push({id:request.operationId,revision:nextRevision,actor:actor,at:next.settings.updatedAt,kind:request.kind,action:request.action,targetId:request.item&&request.item.id,reason:request.reason||'',resultRevision:nextRevision});writeRows_(book_().getSheetByName('Riwayat Perubahan'),log);SpreadsheetApp.flush();props_().setProperties({DATA_REVISION:String(nextRevision),UPDATED_AT:next.settings.updatedAt});props_().deleteProperty('PENDING_TX');invalidate_();}
  catch(err){recover_();throw err;}
  return {revision:nextRevision,message:request.action==='approve'?'Hasil disahkan. Data publik diperbarui.':request.action==='revoke'?'Pengesahan dibatalkan.':'Perubahan tersimpan.'};
 }finally{lock.releaseLock();}
}
function text_(v,max){if(typeof v!=='string'||!v.trim()||v.length>(max||180))throw Error('Teks wajib diisi dan tidak boleh terlalu panjang.');return v.trim();}
function ref_(d,key,id){var x=d[key].find(function(x){return x.id===id;});if(!x)throw Error('Referensi '+key+' tidak ditemukan: '+id);return x;}
function id_(v){if(!/^[a-zA-Z0-9_-]{1,80}$/.test(v||''))throw Error('ID hanya boleh huruf, angka, tanda hubung, atau garis bawah.');return v;}
function validateRefs_(d){
 Object.keys(TABLES_).forEach(function(k){var ids=new Set();d[k].forEach(function(x){id_(x.id);if(ids.has(x.id))throw Error('ID ganda pada '+k);ids.add(x.id);});});
 d.matches.forEach(function(m){ref_(d,'sports',m.sportId);['A','B'].forEach(function(s){if(m['team'+s])ref_(d,'units',m['team'+s]);if(m['source'+s]){var p=ref_(d,'matches',m['source'+s].match);if(p.sportId!==m.sportId||!['winner','loser'].includes(m['source'+s].outcome))throw Error('Sumber bagan tidak sesuai.');}});HORI_ENGINE.resolvedMatch(d,m);});
 d.groups.forEach(function(g){g.unitIds.forEach(function(id){ref_(d,'units',id);});if(new Set(g.unitIds).size!==g.unitIds.length)throw Error('Tim ganda dalam grup.');});
}
function invalidateDependencies_(d,id){var affected=new Set([id]),more=true;while(more){more=false;d.matches.forEach(function(m){if(!affected.has(m.id)&&['A','B'].some(function(s){return m['source'+s]&&affected.has(m['source'+s].match);})){affected.add(m.id);more=true;}});}d.matches.forEach(function(m){if(m.id!==id&&affected.has(m.id)){m.state='draft';m.needsReview=true;m.revision=(m.revision||0)+1;var ev=d.schedule.find(function(e){return e.id==='J-'+m.id;});if(ev)ev.status='Ditunda';}});d.awards.forEach(function(a){if(affected.has(a.resultId)){a.state='draft';a.needsReview=true;a.revision=(a.revision||0)+1;}});}
function applyCommand_(d,r){
 if(!['save','approve','correct','revoke'].includes(r.action))throw Error('Aksi tidak didukung.');if(['correct','revoke'].includes(r.action))text_(r.reason,400);
 if(r.kind==='settings'){
  if(r.action!=='save')throw Error('Pengaturan memakai Simpan.');
  var allowed=['standingsConfirmed','mlPointsUnit','mlConfirmed','photoScale','tennisTableDeuce','badmintonDeuce','tableOrderConfirmed','tablePartOrder'];allowed.forEach(function(k){if(Object.prototype.hasOwnProperty.call(r.item,k))d.settings[k]=r.item[k];});
  if(!['unconfirmed','match','game'].includes(d.settings.mlPointsUnit))throw Error('Unit poin tidak valid.');if(d.settings.mlConfirmed&&d.settings.mlPointsUnit==='unconfirmed')throw Error('Pilih unit penghitungan poin MLBB.');if(d.settings.photoScale!==null&&(!Number.isFinite(d.settings.photoScale)||d.settings.photoScale<=0||d.settings.photoScale>1000))throw Error('Skala fotografi tidak valid.');
  if(JSON.stringify([...d.settings.tablePartOrder].sort())!==JSON.stringify(['Ganda campuran','Ganda putra','Ganda putri'].sort())||d.settings.tablePartOrder[0]!=='Ganda putra')throw Error('Ganda putra harus menjadi partai pertama.');
  ['standingsConfirmed','mlConfirmed','tennisTableDeuce','badmintonDeuce','tableOrderConfirmed'].forEach(function(k){if(typeof d.settings[k]!=='boolean')throw Error('Pengaturan konfirmasi harus boolean.');});
  if(d.judging.some(function(j){return j.state==='official';})&&r.item.photoScale!==undefined&&r.item.photoScale!==d.judging.find(function(j){return j.state==='official';}).scale)throw Error('Batalkan pengesahan penilaian sebelum mengubah skala.');return;
 }
 if(!TABLES_[r.kind])throw Error('Jenis data tidak didukung.');var item=JSON.parse(JSON.stringify(r.item||{}));id_(item.id);var list=d[r.kind],pos=list.findIndex(function(x){return x.id===item.id;}),old=pos<0?null:list[pos];
 if(old&&old.state==='official'&&['save','approve'].includes(r.action))throw Error('Gunakan Koreksi atau Batalkan pengesahan untuk hasil resmi.');
 if(r.action==='revoke'){if(!old||old.state!=='official')throw Error('Hasil belum disahkan.');item=JSON.parse(JSON.stringify(old));item.state='draft';item.needsReview=false;if(r.kind==='matches')invalidateDependencies_(d,item.id);}
 else {
  if(r.kind==='matches'){
   if(old)item=Object.assign({},old,item);
   text_(item.label,50);text_(item.stage,60);ref_(d,'sports',item.sportId);if(!item.date||isNaN(Date.parse(item.date)))throw Error('Tanggal pertandingan tidak valid.');text_(item.location,200);
   if(item.sportId==='mlbb'&&!['Grup','Upper bracket','Lower bracket','Grand final','Juara III'].includes(item.stage))throw Error('Babak MLBB: Grup, Upper bracket, Lower bracket, Grand final, atau Juara III.');
   if(item.groupId){var group=ref_(d,'groups',item.groupId);if(item.sportId!=='mlbb'||![item.teamA,item.teamB].every(function(id){return group.unitIds.includes(id);}))throw Error('Tim tidak sesuai grup.');}
   if(old&&old.state==='official'&&r.action==='correct')invalidateDependencies_(d,item.id);
   if(r.action==='approve'){var resolved=HORI_ENGINE.resolvedMatch(d,item);if(item.teamA&&item.teamA!==resolved.teamA||item.teamB&&item.teamB!==resolved.teamB)throw Error('Peserta berubah setelah koreksi bagan. Muat ulang panel.');item=HORI_ENGINE.validateMatch(d,item);item.needsReview=false;}
  }
  if(r.kind==='awards'){
   ref_(d,'units',item.unitId);var sport=ref_(d,'sports',item.sportId);text_(item.categoryId,80);if(![1,2,3].includes(item.rank))throw Error('Peringkat juara hanya I, II, atau III.');
   var category={'tenis-meja':'beregu','bulutangkis':'beregu','tenis-lapangan':'ganda','mlbb':'tim','fotografi':'utama'}[item.sportId];if(category&&item.categoryId!==category)throw Error('Kode kategori cabang ini harus '+category+'. Partai beregu bukan kategori medali terpisah.');
   if(list.some(function(a){return a.id!==item.id&&a.sportId===item.sportId&&a.categoryId===item.categoryId&&a.rank===item.rank&&a.state==='official';}))throw Error('Juara kategori ini sudah disahkan. Cegah medali ganda.');
   if(r.action==='approve'&&['team','knockout','groups'].includes(sport.type)){
    var result=ref_(d,'matches',item.resultId);if(!HORI_ENGINE.validOfficial(result)||result.sportId!==item.sportId)throw Error('Dasar pertandingan belum disahkan.');var rm=HORI_ENGINE.resolvedMatch(d,result);var expected=item.rank===2?(rm.teamA===rm.winnerId?rm.teamB:rm.teamA):rm.winnerId;
    if((item.rank===3?rm.stage!=='Juara III':!['Final','Grand final'].includes(rm.stage))||item.unitId!==expected)throw Error('Juara tidak sesuai hasil final atau perebutan juara III.');
   }
   if(r.action==='approve'&&sport.type==='judged'&&!d.judging.some(function(j){return j.state==='official'&&j.workId===item.resultId&&ref_(d,'works',j.workId).unitId===item.unitId;}))throw Error('Dasar penilaian karya belum disahkan.');
   if(r.action==='approve'&&sport.type==='pending')text_(item.decisionNote,400);
  }
  if(r.kind==='penalties'){ref_(d,'units',item.unitId);var gr=ref_(d,'groups',item.groupId);if(!gr.unitIds.includes(item.unitId))throw Error('Tim tidak termasuk grup.');if(item.points!==-1||!['chat all/radio all','Nickname berbeda'].includes(item.reason))throw Error('Penalti harus −1 dengan alasan sesuai handbook.');}
  if(r.kind==='judging'){ref_(d,'works',item.workId);item.scale=d.settings.photoScale;item.finalScore=HORI_ENGINE.photoScore(item.values,item.scale);text_(item.judgeCode,40);}
  if(r.kind==='groups'){text_(item.name,80);if(!Array.isArray(item.unitIds)||item.unitIds.length<2)throw Error('Grup harus memiliki minimal dua tim.');if(d.matches.some(function(m){return m.groupId===item.id&&HORI_ENGINE.validOfficial(m);}))throw Error('Batalkan hasil resmi grup sebelum mengganti anggotanya.');}
  if(r.kind==='works'){
   ref_(d,'units',item.unitId);text_(item.code,50);text_(item.title,180);text_(item.participantCode,50);text_(item.location,180);text_(item.description,500);if(item.imageUrl&&!/^https:\/\//.test(item.imageUrl))throw Error('URL karya harus HTTPS.');if(item.publicApproved&&!item.metadataClean)throw Error('Bersihkan metadata sebelum publikasi.');
   if(list.filter(function(w){return w.id!==item.id&&w.participantCode===item.participantCode;}).length>=3)throw Error('Maksimal tiga karya per peserta.');if(!Number.isFinite(item.sizeBytes)||item.sizeBytes<2000000||!['image/jpeg','image/jpg'].includes(item.mimeType))throw Error('Karya harus JPG/JPEG minimal 2 MB.');
  }
  if(r.kind==='participants'){ref_(d,'units',item.unitId);ref_(d,'sports',item.sportId);text_(item.code,60);if(!/^[A-Z0-9 _-]+$/i.test(item.code))throw Error('Gunakan kode anonim.');}
  if(r.kind==='units'){text_(item.name,180);text_(item.short,70);text_(item.mark,12);if(!/^#[0-9a-f]{6}$/i.test(item.color))throw Error('Warna unit tidak valid.');}
  if(r.kind==='schedule'){ref_(d,'sports',item.sportId);text_(item.title,180);text_(item.type,50);text_(item.location,200);if(!item.date||isNaN(Date.parse(item.date))||item.endDate&&Date.parse(item.endDate)<Date.parse(item.date))throw Error('Rentang tanggal tidak valid.');if(!['Terjadwal','Berlangsung','Selesai','Ditunda','Dibatalkan'].includes(item.status))throw Error('Status jadwal tidak valid.');}
  if(r.kind==='sports'){
   if(!old)throw Error('Tambah cabang lewat penyesuaian seed oleh pengelola.');item=Object.assign({},old,item);text_(item.name,80);if(!Array.isArray(item.rules)||item.rules.some(function(t){return typeof t!=='string'||t.length>1000;}))throw Error('Ringkasan aturan tidak valid.');if(typeof item.medalEnabled!=='boolean'||typeof item.medalConfirmed!=='boolean')throw Error('Kontribusi medali harus dikonfirmasi.');
  }
  item.state=r.action==='approve'?'official':'draft';if(r.action==='approve')item.approvedAt=new Date().toISOString();else delete item.approvedAt;
 }
 item.revision=(old&&old.revision||0)+1;if(pos<0)list.push(item);else list[pos]=item;validateRefs_(d);
 if(r.kind==='judging'&&old&&old.state==='official'&&['correct','revoke'].includes(r.action)){d.awards.forEach(function(a){if(a.resultId===old.workId){a.state='draft';a.needsReview=true;}});}
 if(r.kind==='matches'){
  var ev=d.schedule.find(function(e){return e.id==='J-'+item.id;});if(!ev){ev={id:'J-'+item.id,sportId:item.sportId,title:item.stage+' · '+item.label,type:'Pertandingan',unitIds:[],allDay:false,note:'',endDate:null,revision:0};d.schedule.push(ev);}ev.status=item.state==='official'?'Selesai':item.needsReview?'Ditunda':'Terjadwal';ev.date=item.date;ev.location=item.location;ev.revision++;
 }
}
function pick_(o,keys){var out={};keys.forEach(function(k){if(o[k]!==undefined)out[k]=o[k];});return out;}
function publicData_(d){
 var out={settings:pick_(d.settings,['title','theme','timezone','standingsConfirmed','rankingMethod','mlPointsUnit','mlPercentFormula','mlConfirmed','photoScale','updatedAt','revision']),units:d.units.map(function(x){return pick_(x,['id','name','short','mark','color']);}),sports:d.sports.map(function(x){return pick_(x,['id','name','type','icon','tag','period','medalEnabled','medalConfirmed','color','rules','bestOf']);})};
 out.matches=d.matches.map(function(x){var m=pick_(x,['id','sportId','label','teamA','teamB','stage','groupId','date','location','needsReview','revision']);['A','B'].forEach(function(s){if(x['source'+s])m['source'+s]=pick_(x['source'+s],['match','outcome']);});if(HORI_ENGINE.validOfficial(x)){Object.assign(m,pick_(x,['winnerId','scoreA','scoreB','wo','approvedAt']));if(x.tieBreak)m.tieBreak=pick_(x.tieBreak,['a','b']);m.state='official';m.status='Selesai';m.parts=(x.parts||[]).map(function(p){var part=pick_(p,['name','status','scoreA','scoreB']);part.games=(p.games||[]).map(function(g){return pick_(g,['a','b']);});return part;});}else{m.state='draft';m.status='Terjadwal';m.scoreA=null;m.scoreB=null;m.parts=[];}return m;});
 out.schedule=d.schedule.map(function(x){return pick_(x,['id','sportId','title','type','date','endDate','allDay','location','note','status','unitIds','revision']);});
 out.awards=d.awards.filter(function(x){return x.state==='official'&&!x.needsReview;}).map(function(x){return pick_(x,['id','sportId','categoryId','unitId','rank','state','exhibition']);});
 out.penalties=d.penalties.filter(function(x){return x.state==='official';}).map(function(x){return pick_(x,['id','unitId','groupId','points','reason','state']);});
 out.works=d.works.filter(function(x){return x.state==='official'&&x.publicApproved&&x.metadataClean;}).map(function(x){return pick_(x,['id','code','unitId','title','location','description','imageUrl','publicApproved','metadataClean']);});
 out.groups=d.groups.map(function(x){return pick_(x,['id','name','unitIds']);});out.participants=d.participants.map(function(x){return pick_(x,['id','sportId','unitId','code']);});out.bracketSlots=d.bracketSlots.map(function(x){return pick_(x,['id','sportId','stage','matchId','sourceMatchId','outcome']);});
 out.judging=[];return out;
}
function doGet(e){
 var callback=e&&e.parameter&&e.parameter.callback,body;
 if(callback&&!/^horiCallback[0-9]{10,30}$/.test(callback))return ContentService.createTextOutput(JSON.stringify({error:'Callback tidak valid.'})).setMimeType(ContentService.MimeType.JSON);
 try{var cache=CacheService.getScriptCache();body=cache.get('hori-public');if(!body){var lock=LockService.getScriptLock();lock.waitLock(20000);try{if(props_().getProperty('PENDING_TX'))throw Error('Pembaruan sedang dipulihkan.');body=JSON.stringify(publicData_(readData_()));if(body.length<90000)cache.put('hori-public',body,90);}finally{lock.releaseLock();}}}
 catch(err){body=JSON.stringify({error:'Data belum tersedia. Silakan coba lagi.'});}
 return ContentService.createTextOutput(callback?callback+'('+body.replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029')+');':body).setMimeType(callback?ContentService.MimeType.JAVASCRIPT:ContentService.MimeType.JSON);
}
// doPost sengaja tidak tersedia. Endpoint anonim tidak menerima operasi tulis.
