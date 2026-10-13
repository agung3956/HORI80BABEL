(function(root){
'use strict';
let index=0,paused=false,hovered=false;
const reduced=()=>!!root.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const slides=()=>root.HORI_CONTENT?.activitySlides||[];
const posters=()=>root.HORI_CONTENT?.posters||[];
const $=id=>document.getElementById(id);
function paint(){const list=slides();if(!list.length)return;index=(index+list.length)%list.length;document.querySelectorAll?.('[data-activity-slide]').forEach((slide,i)=>{const active=i===index;slide.classList.toggle('active',active);slide.setAttribute('aria-hidden',String(!active));});document.querySelectorAll?.('[data-activity-index]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.activityIndex)===index)));const count=$('activity-count');if(count)count.textContent=(index+1)+' / '+list.length+' informasi';const pause=document.querySelector?.('[data-activity="pause"]');if(pause)pause.textContent=paused?'Putar carousel':'Jeda carousel';}
function step(n){index+=n;paint();}
function mount(){if(reduced())paused=true;hovered=false;paint();const deck=document.querySelector?.('.activity-section');if(deck){deck.onmouseenter=()=>hovered=true;deck.onmouseleave=()=>hovered=false;deck.onfocusin=()=>hovered=true;deck.onfocusout=e=>hovered=deck.contains(e.relatedTarget);}}
function openPoster(path){if(!path)return;const poster=posters().find(p=>p.path===path)||{path,title:'Gambar kegiatan HORI 80'};const full=$('poster-full');if(!full)return;full.src=poster.path;full.alt=poster.title;$('poster-title').textContent=poster.title;$('poster-dialog').showModal();}
document.addEventListener('click',e=>{const poster=e.target.closest('[data-poster]');if(poster){openPoster(poster.dataset.poster);return;}const dot=e.target.closest('[data-activity-index]');if(dot){index=Number(dot.dataset.activityIndex);paint();return;}const button=e.target.closest('[data-activity]');if(!button)return;const action=button.dataset.activity;if(action==='previous')step(-1);if(action==='next')step(1);if(action==='pause'){paused=!paused;paint();}});
setInterval(()=>{if(!paused&&!hovered&&!document.hidden&&document.querySelector?.('.activity-section')&&!$('poster-dialog')?.open)step(1);},7000);
root.HORI_SLIDES={mount};
})(window);
