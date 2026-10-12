(function(root){
'use strict';
let index=0,paused=false,hovered=false;
const reduced=()=>!!root.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const posters=()=>root.HORI_CONTENT?.posters||[];
const $=id=>document.getElementById(id);
function paint(){const list=posters(),img=$('slide-image');if(!list.length||!img)return;index=(index+list.length)%list.length;img.src=list[index].path;img.alt=list[index].title;$('slide-title').textContent=list[index].title;$('slide-count').textContent=(index+1)+' / '+list.length+' poster';document.querySelectorAll('[data-slide-index]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.slideIndex)===index)));const pause=document.querySelector?.('[data-slide="pause"]');if(pause)pause.textContent=paused?'Putar slideshow':'Jeda slideshow';}
function step(n){index+=n;paint();}
function mount(){if(reduced())paused=true;hovered=false;paint();const deck=document.querySelector?.('.poster-section');if(deck){deck.onmouseenter=()=>hovered=true;deck.onmouseleave=()=>hovered=false;deck.onfocusin=()=>hovered=true;deck.onfocusout=e=>hovered=deck.contains(e.relatedTarget);}}
document.addEventListener('click',e=>{const dot=e.target.closest('[data-slide-index]');if(dot){index=Number(dot.dataset.slideIndex);paint();return;}const button=e.target.closest('[data-slide]');if(!button)return;const action=button.dataset.slide;if(action==='previous')step(-1);if(action==='next')step(1);if(action==='pause'){paused=!paused;paint();}if(action==='open'){const p=posters()[index];$('poster-full').src=p.path;$('poster-full').alt=p.title;$('poster-title').textContent=p.title;$('poster-dialog').showModal();}});
setInterval(()=>{if(!paused&&!hovered&&!document.hidden&&$('slide-image')&&!$('poster-dialog')?.open)step(1);},7000);
root.HORI_SLIDES={mount};
})(window);
