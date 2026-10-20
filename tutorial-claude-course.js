/* Claude first: merchant's own recorded workflow. No raw recordings or secrets in dist. */
const memberHome='https://aizhichong.cc/#pricing';
const gptHome='https://aizhichong.cc/#chatgpt';
const officialLogin='https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account';
const officialPhone='https://support.claude.com/en/articles/8287232-verify-your-phone-number';
const course=[
{id:'claude-prepare',icon:'mail',title:'准备邮箱与账号',desc:'先分清自己注册、已有账号、购买成品号三条路线。',time:'图文步骤',result:'能打开自己的邮箱，知道接下来从哪一步开始。',
 steps:[
 ['先确认你是哪一种情况','已经有 Claude 账号：直接看第 04 步。准备自己注册：先完成下面的邮箱检查。准备购买成品号：先看交付内容和售后说明，收到后按交付说明检查首次登录。'],
 ['打开你准备长期使用的邮箱','可以准备 Gmail、Outlook（微软邮箱）或 GMX。先登录邮箱网页，确认收件箱和垃圾邮件文件夹都能打开。已有能正常收信的邮箱，不必再申请一个。'],
 ['确认能收到新邮件','可以给这个邮箱发一封测试邮件。如果收不到，先解决邮箱本身的问题，再注册 Claude。保存好邮箱恢复方式；不要把邮箱密码当作 Claude 的独立密码。'],
 ['自己注册时，从 Claude 官方网站开始','打开 claude.ai。选择 Google 登录，或填写邮箱后选择 Continue with email，按照页面继续。如果是首次创建账号，完成页面要求的验证。'],
 ['遇到手机验证，按官方要求处理','手机验证是新用户注册所需的验证环节，不等于已经被封号。官方要求使用支持地区的可收短信号码，并符合所在地使用条件。没有符合要求的条件时，先看官方说明，不要反复尝试。']
 ],notice:'原视频没有完整拍摄“申请邮箱”和“首次注册新账号”，这一章用文字补充；后面的实拍展示已有账号登录，不把它当成注册成功示范。',
 cta:{title:'还没有账号？',text:'查看普通成品号与 KYC 成品号的区别、交付内容和首登质保说明。成品账号与付费会员是两类商品。',label:'查看 Claude 账号与会员',url:memberHome},
 sources:[[officialPhone,'查看官方注册验证说明'],[officialLogin,'查看官方登录说明']],
 checks:['我可以访问自己的邮箱并接收邮件','我已确定：自己注册，或检查已交付的账号']},
{id:'claude-network',icon:'globe',title:'按需准备网络工具',desc:'跟着实拍认识供应商页面，知道配置时需要哪些信息。',time:'02:16–02:29',video:'network',poster:'network',
 result:'如需单独配置代理，能找到供应商提供的连接信息。',
 steps:[
 ['先判断是否需要这一章','如果你已经能在符合平台使用条件的环境下正常打开 Claude，可以直接去第 04 步。下面展示视频里的网络工具配置流程，不要求所有人先买工具。'],
 ['打开视频中的供应商页面','点击下方 Cliproxy 入口。登录后先阅读当前套餐、期限、地区和费用，再决定购买。视频里的折扣和界面属于录制时情况，以当前页面为准。'],
 ['找到订单或代理管理页面','完成购买后，在供应商控制台找到自己购买的代理。需要提取连接信息的，按供应商页面操作。不要把登录网站的账号密码，误填成代理的用户名和密码。'],
 ['准备四项连接信息','配置浏览器时通常需要：主机地址、端口、代理用户名、代理密码。协议也要与供应商提供的连接方式一致。逐项复制，注意不要带入空格；这一页不展示真实凭据。'],
 ['下一步把配置填进浏览器','第 03 步演示视频里的比特浏览器。购买了 IP 不代表所有软件已经自动走这个 IP，仍需要按工具说明配置和检查。']
 ],notice:'第三方 IP 检测分数不能证明账号不会受限；视频中的“养号”“IP 段”等经验不作为平台保证。代理工具也不能替代平台对支持地区的要求。',
 cta:{title:'需要视频里的工具入口？',text:'打开后先看套餐和连接说明，确认适合自己的需求。',label:'查看 Cliproxy 套餐 ↗',url:links.ip},
 checks:['我知道主机、端口、用户名和密码分别在哪里','如果不需要单独配置，我已跳过这一章']},
{id:'claude-browser',icon:'download',title:'创建浏览器窗口',desc:'创建窗口 → 填写代理 → 检测 → 保存并打开。',time:'04:19–04:54',video:'browser',poster:'browser',
 result:'保存一个自己能识别的浏览器窗口，并完成代理连接检查。',
 steps:[
 ['从官网下载对应版本','点击“下载比特浏览器”，按自己的电脑系统选择安装包。完成安装和登录后，找到“浏览器窗口”页面。已有可用浏览器环境的用户，可以跳过这一章。'],
 ['点击创建窗口，给它起一个好记的名字','例如“我的 Claude”。这个名字只是方便你下次找到同一个配置，不是 Claude 账号名称。'],
 ['填写代理配置','在代理设置中选择与供应商一致的协议。原视频用的是 Socks5。把供应商的主机地址、端口、代理用户名、代理密码填到对应栏；不要照抄视频里的示例值。'],
 ['点击“代理检测”，先确认连接','关键按钮见下面的放大图。检测失败时，先检查四项信息、协议、代理是否到期，以及供应商要求的连接条件。不要在检测失败时继续反复登录账号。'],
 ['保存，再打开这个窗口','检测通过后点击“确定”保存。回到窗口列表，打开刚才命名的窗口，再在这个窗口里访问 Claude。下次继续使用时，也从这里找到已保存的配置。']
 ],figure:{image:'check-detail',caption:'原片 05:13 · “代理检测”按钮局部放大。上方配置完成后，先点击这里检查连接。',marks:[[77,44,15,18,'1']]},
 notice:'比特浏览器内的代理配置只作用于对应浏览器窗口，不代表桌面版 Claude、普通 Chrome 或 Claude Code 已使用相同配置。AdsPower 是另一款工具入口，本视频没有演示其配置。',
 cta:{title:'下载演示中的浏览器',text:'使用官网安装包，按你的设备选择版本。',label:'下载比特浏览器 ↗',url:links.bit},
 checks:['代理检测没有报错','我能找到并打开刚才保存的窗口']},
{id:'claude-login',icon:'login',title:'登录并完成第一次对话',desc:'邮箱登录 → 打开登录邮件 → 回到 Claude → 发一句话。',time:'07:30–07:47',video:'login',poster:'login',
 result:'进入目标账号，并确认可以正常发送一条消息。',
 steps:[
 ['打开 Claude，确认邮箱','在你准备使用的浏览器里访问 claude.ai。使用 Google 登录就选择 Continue with Google；使用邮箱登录则输入目标邮箱，再选择 Continue with email。购买成品号的用户按实际交付方式登录。'],
 ['去收件箱找 Claude 登录邮件','打开你刚刚填写的那个邮箱，寻找 Claude 的登录邮件。没有看到时，也检查垃圾邮件。不要用另一个邮箱反复申请，避免最后进错账号。'],
 ['点击邮件里的 Sign in 按钮','下图是实拍中的 Outlook 登录邮件正文。红框标出需要点击的 Sign in。登录链接有时效；失效时回到登录页重新获取，不要把链接发在评论里。'],
 ['回到发起登录的设备完成验证','同一设备打开链接时，按页面继续。若在另一台设备打开邮件后看到验证码，把验证码输入发起登录的设备。需要完成的额外验证，以官方页面为准。'],
 ['发送一句简单的话','看到 Claude 对话页后，输入“你好，请用一句话介绍你能帮我做什么”。能发出并收到回复，再检查当前登录的是目标账号。本章视频展示登录后的第一次对话。']
 ],figure:{image:'mail-detail',caption:'原片 07:04 · 登录邮件正文局部。① 点击 Sign in；画面没有展示邮箱申请流程。',marks:[[37,66,29,27,'1']]},
 notice:'收不到邮件时先核对邮箱拼写、垃圾邮件和拦截规则；可以检查来自 @mail.anthropic.com 的邮件。出现服务异常时先查看官方状态页。',
 sources:[[officialLogin,'官方登录与收不到邮件的排查'],['https://status.claude.com/','查看 Claude 服务状态']],
 cta:{title:'准备好邮箱或已收到账号？',text:'先完成登录和一次对话，再继续选择会员。',label:'打开 Claude 官网 ↗',url:links.claude},
 checks:['当前登录的是我要使用的账号','我已发送一条消息并收到回复']},
{id:'claude-recharge',icon:'card',title:'选择并购买 Claude 会员',desc:'从官网商品区开始，按需求选择套餐和交付方式。',time:'09:51–10:28',video:'purchase',poster:'purchase',
 result:'看清自己购买的是会员服务还是成品账号，完成正确商品的下单。',
 steps:[
 ['从本站商品区开始','点击下方“回官网选择 Claude 商品”，直接进入官网商品区。这里有会员与成品账号入口；你已经有可用账号、想开通会员，就查看相应会员商品。'],
 ['先看商品名称，再看交付说明','普通成品号、KYC 成品号与 Pro / Max 会员不是同一件商品。账号商品不自动包含付费会员；会员升级所需的账号条件，以当前商品页面为准。'],
 ['选择对应套餐','找到适合自己的 Pro 或 Max 商品。需要商家处理的套餐，先按商品说明联系商家确认；可以自助购买的商品，点击按钮进入秋风对应详情页。'],
 ['下单前读完条件与售后','核对会员周期、交付方式、目标账号条件、处理时间和售后范围。视频里的旧价格、旧按钮和旧服务网址不作为今天的承诺。'],
 ['按页面提供的方式付款，保留订单','按实际结算页面选择微信或支付宝等可用方式，填写自己能找回订单的联系信息。付款后保存订单编号和购买记录，进入下一章核对交付。']
 ],notice:'首次登录正常、等待 4 小时等经验，不等于满足所有充值商品条件。若商品要求更长账号注册时间或其他条件，先确认符合再下单。',
 cta:{title:'用微信 / 支付宝，按商品流程购买',text:'官网选择商品 → 秋风查看详情 → 按实际页面付款与领取交付内容。',label:'回官网选择 Claude 商品 →',url:memberHome},
 checks:['我已确认商品类型、条件和售后范围','我保存了订单信息，没有重复付款']},
{id:'claude-arrival',icon:'shield',title:'领取交付并核对到账',desc:'按自己的订单操作，最后到 Claude 账号里确认套餐。',time:'12:01–12:14',video:'arrival',poster:'arrival',
 result:'不只看“付款成功”，还确认目标账号里的会员状态。',
 steps:[
 ['回到自己的订单查看交付内容','付款成功后打开订单详情，找到卡密、激活入口或商家处理说明。没有找到时先查询订单或联系商家，不要直接重复购买。'],
 ['只按这笔订单的说明继续','卡密类商品，使用当前订单提供的激活入口。人工处理类商品，按商家确认的安排等待。原片展示的旧激活网址不在这里作为固定入口，防止走错服务。'],
 ['提交前再次确认目标账号','核对自己准备开通会员的账号。不要把邮箱密码、验证码、卡密或登录会话发到公开评论里；不清楚某一步要求什么时，先向商家确认。'],
 ['到 Claude 内检查套餐','处理完成后回到 Claude 刷新页面，打开账号设置，找到 Billing（账单）或当前页面对应的套餐管理入口。下图展示原片中的 Pro plan 状态。不同支付渠道的账单说明可能不同。'],
 ['尚未到账时，带着订单联系商家','说明订单编号、付款时间、购买商品和当前套餐状态。截图遮住敏感内容。支付成功与会员到账是两件事，先核对订单和账号，再判断问题。']
 ],figure:{image:'arrival-detail',caption:'原片 12:09 · ① 设置中的 Billing；② 目标账号当前显示 Pro plan。',marks:[[1,60,19,16,'1'],[30,21,23,23,'2']]},
 notice:'原片包含卡密及账号会话凭据操作。公开教程保留购买和到账实拍，省略凭据画面；具体激活字段与最新流程，以自己的订单说明为准。',
 cta:{title:'需要查询自己的订单？',text:'回到秋风店铺使用订单查询入口；处理问题时请保留订单信息。',label:'打开秋风店铺 ↗',url:links.shop},
 checks:['我核对的是自己的目标账号','账号内显示的会员套餐与购买内容相符']},
{id:'claude-safety',icon:'help',title:'日常使用与常见问题',desc:'把真实答疑集中在这里，出问题时按现象查。',time:'图文答疑',
 result:'知道哪些问题自己检查，哪些问题需要商家或官方处理。',
 steps:[
 ['日常使用先保证自己能管理账号','保管好邮箱和恢复方式，定期检查账号安全提示。使用第三方工具或购买服务前，确认对方需要什么信息、会做什么操作。'],
 ['不要把“能打开网页”当作所有环节都正常','网页登录、额度、会员到账、桌面客户端配置是不同问题。哪一步出错，就先记录哪一步的提示。'],
 ['发生异常时，保留可以排查的信息','记录发生时间、使用设备、具体报错和已尝试的操作。分享截图前遮挡邮箱、订单凭据和验证码。'],
 ['区分经验与保证','原视频中的“先养号再充值”等是商家当时的操作经验。不存在可以保证不封号的固定时长、IP 分数或浏览器配置；以平台规则和实际账号情况为准。']
 ],checks:['我能区分登录、网络、额度和到账问题','需要帮助时，我知道提供哪些信息']},
].map(x=>({...x,product:'claude',own:true}));

lessons.splice(0,lessons.length,...course,...lessons.filter(l=>l.product!=='claude'));
tools[3]={title:'Claude 会员与账号',sub:'回官网商品区 · 微信 / 支付宝',icon:'card',url:memberHome};
products.claude.desc='原创实拍 · 7 步走通';
products.claude.title='Claude 从准备到到账，一步步跟着做';

const practicalFaq=[
 ['没有账号，应该先买会员还是成品号？','先分清商品类型。成品号解决账号交付，Pro / Max 是付费会员服务。购买会员前先确认目标账号能够登录，并符合该商品的开通条件。'],
 ['收不到登录邮件怎么办？','核对邮箱是否填对，再看垃圾邮件和邮件拦截规则。登录链接不要反复转发；失效后重新获取。仍不成功时，记录报错并查看 Claude 官方登录说明。'],
 ['代理检测失败，先查哪里？','依次检查协议、主机、端口、代理用户名和密码，确认复制时没有多余空格，再检查到期状态与供应商的连接说明。不要把代理密码误填成网站登录密码。'],
 ['已经在比特里配置了，为什么普通浏览器还是另一个 IP？','配置通常只作用于你创建的那个浏览器窗口。请从比特的窗口列表打开对应窗口；普通 Chrome、桌面版 Claude 和 Claude Code 的配置需要分别检查。'],
 ['IP 检测 100 分，就不会封号了吗？','不能这样判断。检测分数不是平台的账号安全承诺，也不能替代支持地区、身份验证或其他使用要求。'],
 ['提示手机验证，是不是账号被封？','不一定。手机验证、身份验证和账号停用是不同提示。先看准确文字；新用户的手机验证要求可查看本页链接的官方说明。'],
 ['收到成品号，等 4 小时就一定能充值吗？','不能仅凭等待时长判断。先检查首次登录，再核对当前会员商品的账号条件。不同商品条件可能不同，以实际详情和商家确认为准。'],
 ['付款成功，为什么还是 Free？','先核对目标账号有没有登错，再查订单的交付状态和处理时间。需要激活的商品按订单说明完成操作；不要在没有确认原因前重复下单。'],
 ['下一次使用还要重新配置吗？','已经保存的浏览器窗口一般可以继续打开使用。先确认配置仍有效、代理未到期；不要误开一个没有保存配置的新窗口。']
];
function courseFaq(){return `<section class="faq-section"><h2>遇到问题，先看这里</h2><p class="quiet">按过往视频评论与业务答疑整理</p>${practicalFaq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</section>`;}
function courseCta(c){return `<section class="source-box course-cta"><small>这一步用得到</small><strong>${c.title}</strong><p>${c.text}</p>${ext(c.url,c.label,'btn btn-primary-new')}</section>`;}
function courseFigure(f){return `<figure class="real-figure"><a class="annotated" href="tutorial-${f.image}.jpg" target="_blank" rel="noopener" aria-label="打开截图原图"><img src="tutorial-${f.image}.jpg" alt="${f.caption}" loading="lazy">${f.marks.map(([x,y,w,h,n])=>`<span class="image-mark" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"><b>${n}</b></span>`).join('')}</a><figcaption>${f.caption}<small> 点击图片可放大</small></figcaption></figure>`;}
const oldHub=renderHub;
renderHub=function(p='claude'){
 if(p!=='claude'){oldHub(p);return;}
 currentProduct='claude';
 app.innerHTML=`<section class="hero-learn focused-hero"><span class="eyebrow-pill"><span class="dot"></span>aizhichong.cc · 教程中心</span><h1>Claude，从准备到用起来<br><span class="gradient-text">跟着实拍，一步一步完成</span></h1><p>看对应片段 · 对照关键截图 · 完成一步再往下走</p><div class="hero-actions"><a class="btn btn-primary-new" href="#/lesson/claude-prepare">从第 01 步开始 →</a><a class="btn btn-secondary-new" href="#/lesson/claude-recharge">已有账号，直接看充值</a></div></section><div class="container"><div class="product-tabs" role="group" aria-label="选择产品">${Object.keys(products).map(k=>`<a href="#/category/${k}" class="product-tab ${k===p?'selected':''}" ${k===p?'aria-current="page"':''}>${productMark(k)}<span><strong>${products[k].label}<span class="tab-label"> 使用教程</span></strong><small>${products[k].desc}</small></span></a>`).join('')}</div><div class="layout"><div><div class="section-heading"><div><h2>先把这一套流程走通</h2><p>商家原创实拍，拆成 7 个学习步骤</p></div><span class="quiet">5 段实拍 · 配套图文</span></div><div class="route-hint"><span>没有账号从 01 开始；已有账号从 04 开始。</span><a href="#/lesson/claude-login">去登录账号 →</a></div><div class="course-list">${course.map((c,i)=>`<a class="course-row" href="#/lesson/${c.id}"><span class="course-num">${String(i+1).padStart(2,'0')}</span><span class="icon-tile">${ico(c.icon)}</span><div><h3>${c.title}</h3><p>${c.desc}</p><small>${c.video?'▷ 实拍片段 + 图文':'▤ 图文指引'}${c.figure?' · 关键位置放大':''}</small></div><span class="arrow">→</span></a>`).join('')}</div>${courseFaq()}</div><aside>${toolPanel()}<div class="side-panel contact-help"><h3>需要商家处理？</h3><p>充值与订单问题，可以联系微信。</p><strong>tuanzi0897</strong><button class="text-button copy-merchant" type="button">复制微信号</button></div></aside></div></div>`;
 bindMerchant();
};
const oldLesson=renderLesson;
renderLesson=function(id){
 const c=course.find(x=>x.id===id);
 if(!c){oldLesson(id);return;}
 currentProduct='claude';
 const n=course.indexOf(c);
 const nav=course.map((l,i)=>`<a href="#/lesson/${l.id}" class="${l.id===id?'current':''}" ${l.id===id?'aria-current="page"':''}><span>${String(i+1).padStart(2,'0')}</span>${l.title}</a>`).join('');
 app.innerHTML=`<div class="container"><div class="breadcrumb"><a href="#/">教程中心</a> / <a href="#/category/claude">Claude 使用教程</a> / 第 ${n+1} 步</div><div class="detail-layout"><aside class="chapter-nav"><h3>Claude · 完整路线</h3>${nav}</aside><div><details class="mobile-chapters"><summary>第 ${n+1} / 7 步 · 切换章节</summary>${nav}</details><article class="article course-article"><span class="source-pill">第 ${String(n+1).padStart(2,'0')} 步 · ${c.video?'商家原创实拍':'图文指引'}</span><h1>${c.title}</h1><p class="lead">${c.desc}</p><div class="outcome"><strong>完成后，你会得到</strong>${c.result}</div>${c.video?`<div class="chapter-video"><video controls playsinline preload="metadata" poster="tutorial-${c.poster}.jpg" aria-label="${c.title}实拍视频"><source src="tutorial-${c.video}.mp4" type="video/mp4">你的浏览器暂不支持播放，请下载后查看。</video><p>实拍节选 · 原片 ${c.time} · 已遮挡部分私人信息 · <a href="tutorial-${c.video}.mp4" target="_blank" rel="noopener">单独打开视频 ↗</a></p></div>`:''}<h2>跟着步骤操作</h2>${c.steps.map(([t,b],i)=>`<section class="step-item"><span class="number">${i+1}</span><h3>${t}</h3><p>${b}</p>${c.figure&&((id==='claude-login'&&i===2)||(id==='claude-browser'&&i===3)||(id==='claude-arrival'&&i===3))?courseFigure(c.figure):''}</section>`).join('')}${c.notice?`<p class="notice">${c.notice}</p>`:''}${c.cta?courseCta(c.cta):''}<section class="completion-check"><h2>这一步完成了吗？</h2>${c.checks.map((v,i)=>`<label><input type="checkbox" data-check="${id}:${i}"><span>${v}</span></label>`).join('')}</section>${id==='claude-safety'?courseFaq():''}${c.sources?`<div class="official-links"><strong>需要核对最新规则？</strong>${c.sources.map(([url,label])=>ext(url,label+' ↗')).join('')}</div>`:''}<div class="lesson-next">${n?`<a href="#/lesson/${course[n-1].id}">← 上一步</a>`:'<a href="#/">← 返回教程中心</a>'}${course[n+1]?`<a href="#/lesson/${course[n+1].id}">下一步：${course[n+1].title} →</a>`:'<a href="#/">已走完，返回目录 →</a>'}</div>${comments(c)}</article></div><aside class="detail-aside">${toolPanel()}<div class="side-panel contact-help"><h3>这一页没解决？</h3><p>订单、到账等需要商家处理的问题，联系微信：</p><strong>tuanzi0897</strong><button class="text-button copy-merchant" type="button">复制微信号</button></div></aside></div></div>`;
 bindComments(id);bindMerchant();
 document.querySelectorAll('[data-check]').forEach(el=>{
  const key='learn-check:'+el.dataset.check;
  try{el.checked=localStorage.getItem(key)==='1';}catch{}
  el.onchange=()=>{try{localStorage.setItem(key,el.checked?'1':'0');}catch{}};
 });
};
function bindMerchant(){document.querySelectorAll('.copy-merchant').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText('tuanzi0897');toast('微信号已复制');}catch{toast('请手动复制：tuanzi0897');}});}
route();
