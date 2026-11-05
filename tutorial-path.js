/* Local-only path experience. Legacy article source stays unchanged. */
(() => {
 'use strict';
 const oldRoute=route, legacyFragments=new Map();
 const doneKey='aizc-path-done', checksKey='aizc-path-checks';
 const e=s=>esc(String(s??''));
 function readJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
 function checked(n){const x=readJSON(checksKey,{});return Array.isArray(x?.[n])?x[n].filter(v=>Number.isInteger(v)&&v>=0&&v<claudePath[n-1].checks.length):[];}
 function done(){const x=readJSON(doneKey,[]);return Array.isArray(x)?x.filter(n=>Number.isInteger(n)&&n>=1&&n<=6):[];}
 function cleanupLegacy(){window.guideChapterObserver?.disconnect();if(window.guideMq&&window.guideMqHandler)window.guideMq.removeEventListener('change',window.guideMqHandler);}
 function fragment(id){
  if(!legacyFragments.size){renderClaudeArticle();document.querySelectorAll('.plain-section,.plain-step').forEach(el=>legacyFragments.set(el.id,el.outerHTML));cleanupLegacy();}
  return legacyFragments.get(id)||'';
 }
 function number(n){return String(n).padStart(2,'0');}
 function miniProgress(current=0){const completed=done();return `<nav class="path-progress" aria-label="入门三步">${claudePath.slice(0,3).map(p=>`<a href="#/path/${p.n}" ${current===p.n?'aria-current="step"':''}><span class="path-number ${completed.includes(p.n)?'is-done':''}">${completed.includes(p.n)?'✓':number(p.n)}</span><span>${e(p.short)}<small>${completed.includes(p.n)?'已完成':current===p.n?'正在这一步':'入门步骤'}</small></span></a>`).join('')}</nav>`;}
 function pathCard(p){return `<a class="path-card ${p.n===1?'path-card-start':''}" href="#/path/${p.n}"><span class="path-card-top"><span class="path-number">${number(p.n)}</span><span class="path-pill">${p.n===1?'从这里开始':p.n===3?'做到这里，就能用':'接着做'}</span></span><h3>${e(p.name)}</h3><p>${e(p.goal)}</p><span class="path-card-bottom">${p.n===1?'准备浏览器 · 登录前检测':p.n===2?'邮箱 → 注册 → 手机验证':'登录 → 发消息 → 收到回复'}<b>→</b></span></a>`;}
 function helpCard(p){return `<a class="path-service" href="#/path/${p.n}"><span class="path-service-icon">${p.n===4?'＋':p.n===5?'✓':'?'}</span><div><span class="path-pill">${p.n===4?'可选 · 有需要再开':'随时查看'}</span><h3>${e(p.name)}</h3><p>${e(p.goal)}</p></div><b aria-hidden="true">↗</b></a>`;}
 function home(){app.innerHTML=renderRouteHome();bindCommon();}
 function videoBlock(p,target){if(!p.video)return '';return `<section class="path-video" id="path-video" aria-labelledby="path-video-title"><div class="path-video-heading"><h2 id="path-video-title">完整视频</h2><small>默认定位本步骤 · 可从头观看，也可选章节</small></div><video controls playsinline preload="none" data-start-time="${p.n===2?(target==='register-claude'?242.8:target==='register-phone'?286.16:118.28):p.video.chapters[0][0]}" poster="${p.video.demo?'tutorial-v2-use-02-chat.jpg':'tutorial-claude-1022-cover.jpg'}" aria-label="${e(p.name)}视频" src="${p.video.src}"></video><div class="path-chapters"><button type="button" data-video-time="0">▷ 从头看完整视频</button>${p.video.chapters.map(([t,label])=>`<button type="button" data-video-time="${t}"><small>${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}</small>${e(label)}</button>`).join('')}</div><p class="path-small">${p.video.demo?'注册实拍视频 V5，配合下方图文分步操作。':'沿用原教程视频，界面以当前页面为准。'}</p></section>`;}
 function stepsHTML(section,index){return `<details class="path-group" id="${section.id}" ${index===0?'open':''}><summary><span>${e(section.title)}</span><small>${section.id==='register-phone'?1:section.steps.length} 个操作 · 点击展开 / 收起</small></summary><div class="path-group-content"><p class="path-group-intro">${e(section.intro)}</p>${section.id==='register-claude'?'<a class="path-text-link" href="https://claude.ai/" target="_blank" rel="noopener">打开 Claude 官网 ↗</a>':''}${section.id==='register-phone'?'<div class="path-soft-note"><strong>不知道怎么准备号码？</strong><p>新增 PingMe 图文：登录、资料审核、选号、充值入口、等待短信和填回验证码。</p><a class="path-text-link" href="tutorial-phone-guide.html">打开手机号验证跟做教程 →</a></div>':''}${(section.id==='register-phone'?section.steps.filter(s=>s.img==='tutorial-v2-reg-21-us.jpg'):section.steps).map((s,i)=>`<section class="path-step"><div class="path-step-heading"><span>${i+1}</span><h3>${e(s.title)}</h3></div><p>${e(s.text)}</p>${s.experience?`<p class="path-small">${e(s.experience)}</p>`:''}${s.translation?`<p class="path-translation">${e(s.translation)}</p>`:''}${s.img?`<figure><button class="path-enlarge" type="button" aria-label="放大：${e(s.title)}"><img src="${e(s.img)}" alt="${e(s.title)}" width="1720" height="724" loading="lazy"></button><figcaption>实操截图 · 点击放大查看</figcaption></figure>`:`<p class="path-small">${e(s.notice)}</p>`}<p class="path-result"><span>完成标志</span>${e(s.result)}</p>${s.time?`<button class="path-text-button" data-video-time="${s.time}" type="button">看这一步的视频 ↗</button>`:''}</section>`).join('')}<div class="path-group-finish">✓ ${section.id==='register-mail'?'邮箱能收信了，接着注册 Claude。':section.id==='register-claude'?'邮箱步骤完成，接着处理手机验证。':section.id==='register-phone'?'核对国家与号码后，打开上方手机号专页继续接码与验证。':'收到回复，就完成了入门。'}</div>${section.id==='register-mail'?'<button type="button" class="btn btn-secondary-new" data-scroll="register-claude">继续第 3 步 · 注册 Claude →</button>':section.id==='register-claude'?'<button type="button" class="btn btn-secondary-new" data-scroll="register-phone">继续第 4 步 · 手机验证 →</button>':''}</div></details>`;}
 function faqBlock(p){return `<section class="path-faq" id="path-help"><h2>卡在这一步？</h2>${p.faqIds.map(id=>{const q=claudeFaqTopics.find(x=>x.id===id);if(!q)return '';return `<details><summary>${e(q.title)}</summary><ol>${q.steps.map(s=>`<li>${e(s)}</li>`).join('')}</ol><a href="${q.link}" class="path-text-link">查看对应操作 →</a></details>`;}).join('')}<div class="path-contact"><div><strong>仍然没解决，联系微信客服</strong><p>${p.n<=3?`说明“第 ${p.n} 步 + 屏幕提示”，客服更容易定位。`:'说明卡住的操作和屏幕提示，客服更容易定位。'}</p><code>tuanzi0897</code></div><button type="button" class="btn btn-secondary-new" data-copy-contact>复制微信号</button></div></section>`;}
 function issues(){return `<section class="path-issues"><label for="path-issue-search">搜索你遇到的提示</label><input type="search" id="path-issue-search" placeholder="例如：收不到邮件、手机号、KYC" autocomplete="off"><p id="path-issue-count" class="path-small" role="status"></p>${[
 ['登录失败，提示换浏览器','先看登录失败的操作步骤，按顺序检查。不要用换浏览器处理账号停用或身份验证。','#/path/3/path-login-help','打开登录排查步骤',null],
 ['收不到 Claude 登录邮件','先核对邮箱，查看垃圾邮件文件夹；登录链接失效时，回登录页重新获取。','#/path/3/path-existing-login','查看邮箱登录步骤',null],
 ['手机号能不能跳过？','录屏在创建账号后出现了手机验证。遇到这个页面，先准备可收短信的号码，再按页面要求完成验证。','#/path/2/register-phone','查看手机验证步骤','tutorial-v2-fix-01-policy.jpg'],
 ['提示号码最近用过了','录屏中的提示是：号码最近使用过，7 天后再试。按你当前页面的提示处理；这不是等满时间一定能用的承诺。','#/path/2/register-phone','返回手机验证步骤','tutorial-v2-fix-02-used.jpg'],
 ['出现 KYC / 身份验证','短信验证码和身份验证是不同的步骤。按当前页面要求处理；不清楚要准备什么，先联系商家。','https://aizhichong.cc/#contact','咨询 KYC 协助','tutorial-v2-fix-03-kyc.jpg'],
 ['账号停用 / 被封了','账号限制与网络连接失败分开处理。先保存页面完整提示，再联系支持；换浏览器不能解除账号限制。','https://aizhichong.cc/#contact','联系商家协助判断',null],
 ['付款后还是 Free，会员没到账','先核对登录账号和订单状态，把订单编号、付款时间和当前提示发给商家，别直接重复付款。','#/path/4/guide-step-15','查看到账核对步骤',null],
 ['登录前还没检测环境','在实际使用的同一个浏览器窗口中完成检测，再注册或登录。','#/path/1/guide-check','回第 1 步完成检测',null]
 ].map(([title,text,href,label,img])=>`<details class="path-issue"><summary>${title}</summary><p>${text}</p>${img?`<button class="path-enlarge" type="button" aria-label="放大：${title}"><img src="${img}" alt="${title}" loading="lazy"></button>`:''}<a class="path-text-link" href="${href}" ${href.startsWith('https:')?'target="_blank" rel="noopener"':''}>${label} →</a></details>`).join('')}<p id="path-issue-empty" hidden>暂时没有匹配的问题。换个关键词，或复制下方微信号咨询。</p></section>`;}
 function aside(p){return `<aside class="path-sidebar"><a class="path-back" href="#/">← 完整路线首页</a>${tutorialRouteStages.map(stage=>`<span class="path-eyebrow path-side-label">${stage.name}</span>${stage.steps.map(step=>`<a class="path-side-link" href="${step.href}"><span>${number(step.n)}</span>${step.title}</a>`).join('')}`).join('')}<a class="path-legacy-link" href="#/path/6">遇到问题 →</a></aside>`;}
 function page(n,target){
  const p=claudePath[n-1];
  const legacy=p.legacy.map(fragment).join('');
  const existing=n===3?fragment('guide-step-7')+fragment('guide-step-8'):'';
  const loginHelp=n===3?fragment('guide-login-help'):'';
  cleanupLegacy();
  app.innerHTML=`<div class="path-layout">${aside(p)}<article class="path-content"><header class="path-page-head"><div class="path-page-overline"><span class="path-pill">${({1:'第 1 步 · 环境准备',2:'第 2–3 步 · 注册准备',3:'第 5 步 · 网页版',4:'第 7 步 · 按需开通',5:'第 6 步 · 使用与观察',6:'按问题查找'})[n]}</span><a href="#/path/6">遇到问题？ →</a></div><h1>${e(p.name)}</h1><p>${e(p.goal)}</p><div class="path-meta"><span>准备：${p.need.map(e).join(' · ')}</span><span>${e(p.time)}</span></div>${p.video?'<div class="path-actions"><button class="btn btn-primary-new" type="button" data-scroll="path-instructions">跟图文一步步做 ↓</button><button class="btn btn-secondary-new" type="button" data-scroll="path-video">查看完整视频 ↓</button></div>':''}</header>
  ${n===4?'<div class="path-soft-note"><strong>这一步按需选择。</strong>已经完成第一次对话，就可以先免费使用。确认需要会员，再继续下单。</div>':''}
  ${n===2?'<nav class="path-subnav" aria-label="注册的三个小步骤"><button data-scroll="register-mail">第 2 步 · 准备邮箱</button><button data-scroll="register-claude">第 3 步 · 注册 Claude</button><button data-scroll="register-phone">第 4 步 · 手机验证</button></nav>':''}
  ${videoBlock(p,target)}
  <div id="path-instructions"><section class="path-risk"><strong>操作前，先注意</strong><ul>${p.risks.map(t=>`<li>${e(typeof t==='string'?t:t.text)}${t.experience?`<small style="display:block">${e(t.experience)}</small>`:''}</li>`).join('')}</ul></section>
  ${n===3?`<details class="path-group" id="path-existing-login"><summary><span>已有账号？先按这里登录</span><small>刚注册完可直接往下做</small></summary><div class="path-group-content path-legacy">${existing}</div></details>`:''}
  ${n===2?'<p class="path-small">图文来自注册视频 V5；标有“团子实测经验”的内容为本次录屏中的使用建议。</p>':''}
  ${p.sections.map(stepsHTML).join('')}
  ${legacy?`<div class="path-legacy">${legacy}</div>`:''}
  ${n===3?`<details class="path-group" id="path-login-help"><summary><span>登录卡住 / 提示换浏览器</span><small>需要时展开排查</small></summary><div class="path-group-content path-legacy">${loginHelp}</div></details>`:''}
  ${n===4?'<details class="path-experience"><summary>森林的个人经验：开会员前先观察</summary><p>我自己的做法都是，拿到号先正常用，过四个小时左右稳定了，再去开 Pro 会员。</p><p>这是个人经验，不是充值门槛或安全保证。能否充值仍以本次订单和当前激活页的条件为准。</p><small>来源：注册视频字幕第 61 句；原版教程激活步骤。</small></details>':''}
  ${n===5?`<div class="path-rules">${pathUsageRules.map(([title,text,source],i)=>`<section><span class="path-number">${number(i+1)}</span><div><h2>${e(title)}</h2><p>${e(text)}</p><small>来源：${e(source)}</small></div></section>`).join('')}</div>`:''}
  ${n===6?issues():''}
  </div>
  <section class="path-checklist" id="path-checklist"><div><span class="path-eyebrow">${n<=3?'做完再勾选':'看完再确认'}</span><h2>${n===3?'收到回复，入门就完成了':'确认这一步已完成'}</h2></div><p class="path-small">按实际结果勾选，进度只保存在当前浏览器。</p>${p.checks.map((t,i)=>`<label><input type="checkbox" data-path-check="${i}" ${checked(n).includes(i)?'checked':''}><span>${e(t)}</span></label>`).join('')}<p class="path-check-status" role="status"></p></section>
  ${n===3?'<section class="path-finished" hidden><span>✓</span><h2>你已经能用 Claude 了</h2><p>收到第一条回复后，接下来可以继续免费使用。需要会员或遇到问题，再打开下面的入口。</p><div class="path-actions"><a class="btn btn-primary-new" href="https://claude.ai/" target="_blank" rel="noopener">去 Claude 继续使用 ↗</a><a class="btn btn-secondary-new" href="#/path/5">接着看使用与观察 →</a></div></section>':''}
  ${faqBlock(p)}
  ${p.shortcut?`<section class="path-shortcut"><div><span class="path-eyebrow">${n===2?'另一种选择':'相关商品'}</span><h2>${e(p.shortcut.text)}</h2><p>${e(p.shortcut.note)}</p></div><a href="${p.shortcut.href}" target="_blank" rel="noopener" class="btn btn-secondary-new">查看商品 ↗</a></section>`:''}
  <nav class="path-bottom"><a href="#/">← 完整路线首页</a>${({1:'<a class="btn btn-primary-new" href="#/path/2/register-mail">下一步 · 注册邮箱 →</a>',2:'<a class="btn btn-primary-new" href="tutorial-phone-guide.html">继续 · 手机号准备与验证 →</a>',3:'<a class="btn btn-primary-new" href="#/path/5">下一步 · 使用与观察 →</a>',5:'<a class="btn btn-primary-new" href="#/path/4">下一步 · 按需开通 Pro →</a>',4:'<a class="btn btn-primary-new" href="tutorial-desktop-guide.html#network">下一步 · 桌面端网络 →</a>',6:'<a href="#/">回路线继续 →</a>'})[n]}</nav></article></div>`;
  decorateLegacy(p);bindCommon();bindChecks(p);
  if(n===6){const input=document.querySelector('#path-issue-search');const filter=()=>{let count=0;document.querySelectorAll('.path-issue').forEach(d=>{const show=d.textContent.toLowerCase().includes(input.value.trim().toLowerCase());d.hidden=!show;if(show)count++;});document.querySelector('#path-issue-count').textContent=`找到 ${count} 个问题`;document.querySelector('#path-issue-empty').hidden=!!count;};input.addEventListener('input',filter);filter();}
  if(target)requestAnimationFrame(()=>scrollToID(target));
 }
 const anchorRoutes={
  'guide-ready':1,'guide-network':1,'guide-kernel':1,'guide-check':1,
  'guide-login':3,'guide-login-help':3,'guide-buy':4,'guide-questions':6,'guide-comments':6
 };
 function scrollToID(id){const el=document.getElementById(id);if(!el){window.scrollTo(0,0);return;}let p=el;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement;}el.scrollIntoView({behavior:'smooth',block:'start'});}
 function decorateLegacy(p){
  document.querySelectorAll('.path-legacy .plain-section>h2').forEach(h=>h.textContent=h.textContent.replace(/^[一二三四]、/,''));
  document.querySelectorAll('.path-legacy [data-time]').forEach(b=>{b.dataset.oldVideoTime=b.dataset.time;b.removeAttribute('data-time');});
  document.querySelectorAll('.path-legacy .plain-step').forEach(s=>{const h=s.querySelector('h3');if(!h)return;const num=h.querySelector('span');if(num)num.remove();});
  const results={'guide-step-1':'已按自己的实际条件选择套餐；已有可用代理可跳过购买。','guide-step-2':'已找到主机、端口、用户名、密码四项连接信息。','guide-step-3':'已新建并命名自己的浏览器窗口。','guide-step-4':'四项连接信息分别填进对应栏位。','guide-kernel':'已保存所选内核和 UA；兼容情况以实际能否登录为准。','guide-step-5':'代理检测正常，已保存并打开窗口。','guide-step-6':'已在实际使用的窗口完成检测，异常先处理。','guide-step-7':'已发起自己账号的登录请求。','guide-step-8':'通过本次登录邮件回到 Claude。','guide-step-10':'确认选择的是需要的会员商品，并读过当前条件。','guide-step-11':'已完成付款并保存订单。','guide-step-12':'找到自己的卡密和本次订单给出的激活入口。','guide-step-13':'按当前页面条件完成卡密验证。','guide-step-14':'核对目标账号，并确认本次充值。','guide-step-15':'目标账号的 Billing 显示对应套餐。'};
  for(const [id,text] of Object.entries(results)){const s=document.getElementById(id);if(s)s.insertAdjacentHTML('beforeend',`<p class="path-result"><span>完成标志</span>${e(text)}</p>`);}
  document.querySelector('#guide-copy-contact')?.setAttribute('data-copy-contact','');
 }
 function bindChecks(p){
  const inputs=[...document.querySelectorAll('[data-path-check]')],status=document.querySelector('.path-check-status');
  function update(save){const selected=inputs.filter(x=>x.checked).map(x=>Number(x.dataset.pathCheck));const full=selected.length===p.checks.length;
   let saved=true;if(save){try{let record=readJSON(checksKey,{});if(!record||typeof record!=='object'||Array.isArray(record))record={};record[p.n]=selected;localStorage.setItem(checksKey,JSON.stringify(record));const complete=done().filter(n=>n!==p.n);if(full)complete.push(p.n);localStorage.setItem(doneKey,JSON.stringify(complete));}catch{saved=false;}}
   status.textContent=(full?(p.n===3?'✓ 入门已完成。接下来按需继续。':'✓ 这一步已完成。'):`已确认 ${selected.length} / ${p.checks.length} 项`)+(saved?'':' 当前浏览器无法保存进度，本次勾选仍有效。');
   const finished=document.querySelector('.path-finished');if(finished)finished.hidden=!full;
   // 文章勾选状态不改写完整路线的 01–11 步骤编号。
  }inputs.forEach(i=>i.addEventListener('change',()=>update(true)));update(false);
 }
 function openImage(button){const source=button.querySelector('img');if(!source)return;let dialog=document.getElementById('path-image-dialog');if(!dialog){dialog=document.createElement('dialog');dialog.id='path-image-dialog';dialog.innerHTML='<button type="button" class="path-dialog-close" aria-label="关闭放大图片">关闭 ×</button><div class="path-image-inner"></div><p class="path-small">可滚动查看大图 · 按 Esc 关闭</p>';document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.onclick=event=>{if(event.target===dialog)dialog.close();};}
  const body=dialog.querySelector('.path-image-inner');body.replaceChildren();const inner=button.cloneNode(true);inner.removeAttribute('aria-label');const img=inner.querySelector('img');img.removeAttribute('loading');img.removeAttribute('width');img.removeAttribute('height');const wrap=document.createElement('div');wrap.className='path-image-full';wrap.innerHTML=inner.innerHTML;body.append(wrap);dialog.showModal();
 }
 function playAt(time,isOld=false){const section=document.getElementById('path-video');if(!section)return;const video=section.querySelector('video');const desired=isOld?'tutorial-claude-1022-wm.mp4':claudePath[Number(location.hash.split('/')[2])-1]?.video?.src;
  if(!desired)return;video.dataset.explicitSeek='true';if(!video.src.endsWith(desired)){video.src=desired;section.querySelector('.path-small').textContent=isOld?'正在查看原版教程的对应步骤。':'注册实拍视频 V5，配合下方图文分步操作。';}
  const start=()=>{video.currentTime=Number(time);video.play().catch(()=>{});};if(video.readyState>=1)start();else{video.addEventListener('loadedmetadata',start,{once:true});video.load();}scrollToID('path-video');
 }
 function bindCommon(){
  const initialVideo=document.querySelector('#path-video video');
  if(initialVideo)initialVideo.addEventListener('loadedmetadata',()=>{if(!initialVideo.dataset.explicitSeek)initialVideo.currentTime=Number(initialVideo.dataset.startTime)||0;},{once:true});
  document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',event=>{event.preventDefault();scrollToID(b.dataset.scroll);}));
  document.querySelectorAll('.path-enlarge,.path-content .enlarge-shot').forEach(b=>b.addEventListener('click',()=>openImage(b)));
  document.querySelectorAll('[data-video-time]').forEach(b=>b.addEventListener('click',()=>playAt(b.dataset.videoTime)));
  document.querySelectorAll('[data-old-video-time]').forEach(b=>b.addEventListener('click',()=>playAt(b.dataset.oldVideoTime,true)));
  document.querySelectorAll('[data-copy-contact]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('tuanzi0897');toast('微信号已复制：tuanzi0897');}catch{toast('请手动复制微信号：tuanzi0897');}}));
  document.querySelectorAll('.path-content a[href^="#guide-"]').forEach(a=>a.addEventListener('click',ev=>{ev.preventDefault();const id=a.getAttribute('href').slice(1);if(document.getElementById(id)){scrollToID(id);return;}let n=anchorRoutes[id];const match=id.match(/^guide-step-(\d+)$/);if(match)n=+match[1]<=6?1:+match[1]<=9?3:4;location.hash=`#/path/${n||6}/${id==='guide-login'?'path-existing-login':id==='guide-login-help'?'path-login-help':id==='guide-comments'?'path-help':id==='guide-questions'?'path-issue-search':id}`;}));
 }
 window.removeEventListener('hashchange',oldRoute);
 route=function(){document.querySelectorAll('video').forEach(v=>v.pause());document.getElementById('path-image-dialog')?.remove();cleanupLegacy();const parts=location.hash.replace(/^#\/?/,'').split('/');
  if(!parts[0]){home();window.scrollTo(0,0);}else if(parts[0]==='path'){const n=Number(parts[1]);if(n>=1&&n<=6&&Number.isInteger(n)){page(n,parts[2]);if(!parts[2])window.scrollTo(0,0);}else{home();window.scrollTo(0,0);}}
  else if(parts[0]==='toolkit'||parts[0]==='tools'){home();const box=document.querySelector('#path-toolkit .path-toolbox');box.open=true;scrollToID('path-toolkit');}
  else{oldRoute();}
 };
 window.addEventListener('hashchange',route);route();
})();
