const fs=require('node:fs');
fs.writeFileSync('backend/AdminUi.gs','function adminHtml_(){return '+JSON.stringify(fs.readFileSync('backend/Admin.html','utf8'))+';}\n');
const files=['Seed.gs','Engine.gs','Code.gs','AdminUi.gs'];
fs.writeFileSync('backend/HORI80Babel-Code.gs','// HORI 80 Babel — paket satu file. Ganti skrip lama; jangan pasang bersamaan.\n'+files.map(f=>'// ---- '+f+' ----\n'+fs.readFileSync('backend/'+f,'utf8')).join('\n'));
console.log('Apps Script single-file bundle generated.');
