(function(root){
'use strict';
function unit(data,id){return data.units.find(u=>u.id===id);}
function sport(data,id){return data.sports.find(s=>s.id===id);}
function validOfficial(m){return m&&m.state==='official'&&!m.needsReview;}
function resolvedMatch(data,m,visited){
 const copy=JSON.parse(JSON.stringify(m)),seen=new Set(visited||[]);if(seen.has(m.id))throw Error('Siklus bagan tidak valid.');seen.add(m.id);
 ['A','B'].forEach(side=>{const src=m['source'+side];if(!src)return;const parent=data.matches.find(x=>x.id===src.match);if(!validOfficial(parent)){copy['team'+side]=null;return;}const p=resolvedMatch(data,parent,seen);copy['team'+side]=src.outcome==='winner'?p.winnerId:(p.teamA===p.winnerId?p.teamB:p.teamA);});return copy;
}
function medals(data,sportId){
 const rows=data.units.map(u=>({...u,gold:0,silver:0,bronze:0,total:0})),seen=new Set();
 data.awards.filter(a=>a.state==='official'&&(!sportId||a.sportId===sportId)).forEach(a=>{const s=sport(data,a.sportId),key=a.sportId+'|'+a.categoryId+'|'+a.rank;if(!s||!s.medalEnabled||!s.medalConfirmed||seen.has(key)||a.exhibition)return;seen.add(key);const u=rows.find(r=>r.id===a.unitId);if(!u)return;const field={1:'gold',2:'silver',3:'bronze'}[a.rank];if(field){u[field]++;u.total++;}});
 rows.sort((a,b)=>b.gold-a.gold||b.silver-a.silver||b.bronze-a.bronze||a.name.localeCompare(b.name,'id'));
 let prev=null;rows.forEach((r,i)=>{r.rank=data.settings.standingsConfirmed&&r.total?((prev&&r.gold===prev.gold&&r.silver===prev.silver&&r.bronze===prev.bronze)?prev.rank:i+1):null;prev=r;});return rows;
}
function photoScore(values,scale){if(!Number.isFinite(scale)||scale<=0||!Array.isArray(values)||values.length!==5)throw Error('Tetapkan skala dan lima nilai penjurian.');if(values.some(v=>!Number.isFinite(v)||v<0||v>scale))throw Error('Nilai di luar skala.');return Math.round(values.reduce((a,v,i)=>a+v/scale*[30,25,20,15,10][i],0)*100)/100;}
function validateGame(g,s,settings){
 if(!Number.isInteger(g.a)||!Number.isInteger(g.b)||g.a<0||g.b<0||g.a===g.b)throw Error('Skor gim harus bilangan bulat dan menentukan pemenang.');
 const hi=Math.max(g.a,g.b),lo=Math.min(g.a,g.b),target=s.id==='tenis-meja'?11:21;
 if(hi<target)throw Error('Gim belum mencapai target poin.');
 if(s.id==='bulutangkis'){if(hi>30||!(hi===target&&lo<=target-2||hi>target&&hi<30&&hi-lo===2||hi===30&&(lo===28||lo===29)))throw Error('Skor gim bulutangkis tidak valid.');if(lo>=20&&!settings.badmintonDeuce)throw Error('Konfirmasi aturan deuce bulutangkis dahulu.');}
 else {if(!(hi===11&&lo<=9||hi>11&&hi-lo===2))throw Error('Skor gim tenis meja tidak valid.');if(lo>=10&&!settings.tennisTableDeuce)throw Error('Konfirmasi deuce tenis meja dahulu.');}
 return g.a>g.b?'A':'B';
}
function validateMatch(data,input){
 const m=resolvedMatch(data,input),s=sport(data,m.sportId);if(!s)throw Error('Cabang tidak ditemukan.');if(!m.teamA||!m.teamB||m.teamA===m.teamB)throw Error('Dua peserta resmi harus tersedia.');if(![m.teamA,m.teamB].includes(m.winnerId))throw Error('Pemenang harus merupakan salah satu peserta.');
 if(m.wo){if(m.parts&&m.parts.length||m.scoreA!=null||m.scoreB!=null)throw Error('WO disimpan tanpa skor fiktif.');return {...m,status:'Selesai'};}
 if(s.type==='team'){
  if(s.id==='tenis-meja'&&!data.settings.tableOrderConfirmed)throw Error('Sahkan urutan partai tenis meja dahulu.');
  const order=s.id==='bulutangkis'?['Ganda campuran','Ganda putra','Ganda putri']:data.settings.tablePartOrder;
  if(!Array.isArray(m.parts)||m.parts.length!==3)throw Error('Isi tiga partai, termasuk Tidak dimainkan bila perlu.');
  let a=0,b=0;const need=Math.ceil(s.bestOf/2);
  m.parts.forEach((p,i)=>{
   if(p.name!==order[i])throw Error('Urutan partai tidak sesuai konfigurasi.');
   if(a===2||b===2){if(p.status!=='Tidak dimainkan'||p.games&&p.games.length)throw Error('Partai setelah kemenangan tim harus Tidak dimainkan tanpa skor.');return;}
   if(p.status!=='Selesai'||!Array.isArray(p.games))throw Error('Partai wajib memiliki skor gim selesai.');
   let ga=0,gb=0;p.games.forEach(g=>{if(ga===need||gb===need)throw Error('Ada gim setelah partai berakhir.');const win=validateGame(g,s,data.settings);if(win==='A')ga++;else gb++;});
   if(Math.max(ga,gb)!==need)throw Error('Partai belum selesai.');p.scoreA=ga;p.scoreB=gb;if(ga>gb)a++;else b++;
  });
  if(Math.max(a,b)!==2)throw Error('Tim belum memenangkan dua partai.');m.scoreA=a;m.scoreB=b;
 } else if(s.id==='mlbb'){
  const need=m.stage==='Grand final'?3:2;
  if(!Number.isInteger(m.scoreA)||!Number.isInteger(m.scoreB)||m.scoreA<0||m.scoreB<0||Math.max(m.scoreA,m.scoreB)!==need||Math.min(m.scoreA,m.scoreB)>=need)throw Error('Skor seri tidak sesuai BO3/BO5.');
 } else if(s.id==='tenis-lapangan'){
  const target=m.stage==='Final'?7:6,hi=Math.max(m.scoreA,m.scoreB),lo=Math.min(m.scoreA,m.scoreB);
  if(!Number.isInteger(m.scoreA)||!Number.isInteger(m.scoreB)||lo<0||hi!==target||lo>target-1)throw Error('Skor set tidak sesuai pro set lokal.');
  if(lo===target-1){const tb=m.tieBreak;if(!tb||!Number.isInteger(tb.a)||!Number.isInteger(tb.b))throw Error('Isi skor tie-break.');const h=Math.max(tb.a,tb.b),l=Math.min(tb.a,tb.b);if(!(h===7&&l<=5||h>7&&h<10&&h-l===2||h===10&&(l===8||l===9)))throw Error('Tie-break lokal tidak valid.');if((tb.a>tb.b)!==(m.scoreA>m.scoreB))throw Error('Pemenang tie-break tidak sesuai skor set.');}
 } else {if(!Number.isFinite(m.scoreA)||!Number.isFinite(m.scoreB)||m.scoreA===m.scoreB||m.scoreA<0||m.scoreB<0)throw Error('Isi skor akhir yang menentukan pemenang.');}
 if((m.scoreA>m.scoreB?m.teamA:m.teamB)!==m.winnerId)throw Error('Pemenang tidak sesuai skor.');return {...m,status:'Selesai'};
}
function groupTable(data,group){
 const rows=group.unitIds.map(id=>({unitId:id,played:0,won:0,lost:0,gameWins:0,gameLosses:0,penalty:0,points:0,percent:0}));
 const matches=data.matches.filter(m=>m.sportId==='mlbb'&&m.groupId===group.id&&validOfficial(m));
 matches.forEach(m=>{const a=rows.find(x=>x.unitId===m.teamA),b=rows.find(x=>x.unitId===m.teamB);if(!a||!b)return;[a,b].forEach(r=>r.played++);const win=m.winnerId===m.teamA?a:b,lose=win===a?b:a;win.won++;lose.lost++;
 if(!m.wo){a.gameWins+=m.scoreA;a.gameLosses+=m.scoreB;b.gameWins+=m.scoreB;b.gameLosses+=m.scoreA;}
 if(data.settings.mlPointsUnit==='match')win.points++;
 if(data.settings.mlPointsUnit==='game'){if(m.wo)win.points++;else{a.points+=m.scoreA;b.points+=m.scoreB;}}
 });
 data.penalties.filter(p=>p.state==='official'&&p.groupId===group.id).forEach(p=>{const r=rows.find(x=>x.unitId===p.unitId);if(r)r.penalty+=p.points;});
 rows.forEach(r=>{r.points+=r.penalty;r.percent=r.gameWins+r.gameLosses?r.gameWins/(r.gameWins+r.gameLosses)*100:0;});
 rows.sort((a,b)=>b.points-a.points||b.percent-a.percent);
 const buckets=new Map();rows.forEach(r=>{const key=r.points+'|'+r.percent;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(r);});
 buckets.forEach(tied=>{if(tied.length===2){const head=matches.filter(m=>tied.every(r=>[m.teamA,m.teamB].includes(r.unitId)));const counts=tied.map(r=>head.filter(m=>m.winnerId===r.unitId).length);if(counts[0]!==counts[1]){const p=rows.indexOf(tied[0]);if(counts[1]>counts[0])rows.splice(p,2,tied[1],tied[0]);return;}}if(tied.length>1)tied.forEach(r=>r.tieUnresolved=true);});
 return {official:!!data.settings.mlConfirmed&&['match','game'].includes(data.settings.mlPointsUnit),rows};
}
const api={unit,sport,validOfficial,resolvedMatch,medals,photoScore,validateMatch,groupTable};root.HORI_ENGINE=api;if(typeof module==='object'&&module.exports)module.exports=api;
})(typeof window==='undefined'?globalThis:window);
