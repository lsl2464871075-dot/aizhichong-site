(()=>{
 'use strict';
 if(document.querySelector('.az-keep'))return;
 const key='az-keep-dismissed-v1',wechat='tuanzi0897';
 const tutorial=location.pathname.includes('/tutorial-');
 const host=document.createElement('aside');host.className='az-keep';host.setAttribute('aria-label','收藏与微信客服');
 host.innerHTML=`<section class="az-keep-card" aria-label="收藏提醒"><button class="az-keep-close" aria-label="关闭收藏提醒" type="button">×</button><div class="az-keep-heading"><span class="az-keep-star" aria-hidden="true">☆</span><h2 class="az-keep-title">${tutorial?'收藏 AI智充教程':'收藏 AI智充官网'}</h2></div><p class="az-keep-desc">${tutorial?'下次接着学，注册、登录和使用步骤随时查。':'下次充值或找教程，直接打开，不用重新搜索。'}</p><button type="button" class="az-keep-primary" aria-expanded="false" aria-controls="az-keep-help">立即收藏</button><div class="az-keep-help" id="az-keep-help" hidden><p></p><small>完成浏览器的收藏操作后，就能在收藏夹里找到本页。</small></div></section><div class="az-keep-bar"><button type="button" class="az-keep-reopen" aria-label="打开收藏提醒" hidden>☆ 收藏</button><button type="button" class="az-keep-contact" aria-label="复制客服微信 tuanzi0897"><strong>有问题？加微信</strong><span>tuanzi0897 · 点击复制</span></button></div><div class="az-keep-status" role="status" aria-live="polite" hidden></div>`;
 document.body.append(host);
 const spacer=document.createElement('div');spacer.className='az-keep-space';document.body.append(spacer);
 const card=host.querySelector('.az-keep-card'),reopen=host.querySelector('.az-keep-reopen'),status=host.querySelector('.az-keep-status'),help=host.querySelector('.az-keep-help'),button=host.querySelector('.az-keep-primary');
 function close(remember){card.hidden=true;reopen.hidden=false;if(remember){try{sessionStorage.setItem(key,'1');}catch{}}}
 try{if(sessionStorage.getItem(key))close(false);}catch{}
 host.querySelector('.az-keep-close').onclick=()=>{close(true);reopen.focus();};
 reopen.onclick=()=>{card.hidden=false;reopen.hidden=true;button.focus();};
 card.addEventListener('keydown',e=>{if(e.key==='Escape'){close(true);reopen.focus();}});
 let statusTimer;
 function announce(text){clearTimeout(statusTimer);status.textContent=text;status.hidden=false;statusTimer=setTimeout(()=>status.hidden=true,6000);}
 async function copy(text){try{await navigator.clipboard.writeText(text);return true;}catch{return false;}}
 host.querySelector('.az-keep-contact').onclick=async()=>{const ok=await copy(wechat);announce(ok?'微信号已复制：tuanzi0897。打开微信，添加好友。':'请长按或选中复制微信号：tuanzi0897');};
 button.onclick=async()=>{
  const mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform));
  const mac=/Mac|iPhone|iPad|iPod/i.test(navigator.platform||navigator.userAgent);
  help.hidden=false;button.setAttribute('aria-expanded','true');
  help.querySelector('p').textContent=mobile?'打开浏览器菜单或分享菜单，选择“收藏”或“添加书签”。':`按 ${mac?'⌘ + D':'Ctrl + D'}，在浏览器弹出的窗口里确认收藏。`;
  const ok=await copy(location.href);
  announce(ok?'本页网址已复制，请按上方提示完成收藏。':'请按上方提示收藏当前页面。');
 };
})();
