/* Toolavio Action embed loader v0.1.0-alpha.1. No processing engines are included. */
(function () {
  'use strict';
  const script=document.currentScript;
  if(!script)return;
  const langs=['en','it','de'];
  const tools=['json-format','csv-to-json','json-to-csv','compare-csv','resize-image'];
  const lang=langs.includes(script.dataset.lang)?script.dataset.lang:'en';
  const words={en:['Loading Toolavio Action…','The embedded tools are not available. Open Toolavio instead.','Toolavio Action tools'],it:['Caricamento di Toolavio Action…','Gli strumenti incorporati non sono disponibili. Apri Toolavio.','Strumenti Toolavio Action'],de:['Toolavio Action wird geladen…','Die eingebetteten Werkzeuge sind nicht verfügbar. Toolavio direkt öffnen.','Toolavio Action Werkzeuge']}[lang];
  let base=new URL('https://toolavio.com/tae/');
  // Localhost is only a development convenience, never a domain-license control.
  const source=new URL(script.src,document.baseURI);
  const isLoopback=u=>['127.0.0.1','localhost'].includes(u.hostname)&&['http:','https:'].includes(u.protocol);
  if(isLoopback(source)&&isLoopback(new URL(location.href)))base=new URL('/tae/',source);
  function start(){
    const host=document.getElementById(script.dataset.container||'toolavio-action');
    if(!host || host.dataset.taeMounted==='true')return;
    host.dataset.taeMounted='true';
    const notice=document.createElement('p');notice.setAttribute('role','status');notice.textContent=words[0];
    const fallback=document.createElement('a');fallback.href=new URL('/'+lang+'/',base).href;fallback.textContent=words[1];fallback.target='_blank';fallback.rel='noopener noreferrer';fallback.hidden=true;
    if(!/^https?:$/.test(location.protocol)){host.append(fallback);fallback.hidden=false;return;}
    const bytes=new Uint8Array(16);crypto.getRandomValues(bytes);
    const channel=Array.from(bytes,n=>n.toString(16).padStart(2,'0')).join('');
    const frame=document.createElement('iframe');frame.title=words[2];frame.setAttribute('width','100%');frame.setAttribute('height','850');frame.setAttribute('frameborder','0');
    frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-downloads');
    frame.setAttribute('allow','clipboard-write');frame.referrerPolicy='no-referrer';frame.loading='lazy';
    const url=new URL(base);url.searchParams.set('lang',lang);url.searchParams.set('embed','1');
    if(tools.includes(script.dataset.tool))url.searchParams.set('tool',script.dataset.tool);
    url.hash=new URLSearchParams({channel,parent:location.origin}).toString();frame.src=url.href;
    let timer,ready=false;
    function onMessage(event){
      if(event.origin!==base.origin || event.source!==frame.contentWindow)return;
      const m=event.data;
      if(!m || typeof m!=='object' || m.source!=='toolavio-tae' || m.channel!==channel)return;
      if(m.type==='ready'){ready=true;clearTimeout(timer);notice.hidden=true;fallback.hidden=true;}
      if(m.type==='resize' && Number.isFinite(m.height) && m.height>=300 && m.height<=5000)frame.height=String(Math.ceil(m.height));
    }
    window.addEventListener('message',onMessage);
    function beginTimeout(){clearTimeout(timer);timer=setTimeout(()=>{if(!ready){notice.hidden=true;fallback.hidden=false;}},15000);}
    frame.addEventListener('load',beginTimeout);frame.addEventListener('error',()=>{notice.hidden=true;fallback.hidden=false;});
    host.append(notice,frame,fallback);beginTimeout();
    // Consumers can remove/recreate the container; this event releases listeners explicitly.
    host.addEventListener('tae:destroy',()=>{clearTimeout(timer);window.removeEventListener('message',onMessage);frame.remove();notice.remove();fallback.remove();delete host.dataset.taeMounted;},{once:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
