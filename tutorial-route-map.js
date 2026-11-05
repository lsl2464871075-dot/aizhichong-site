/* 本地审阅版：四阶段顺序入口；保留原有文章与收藏链接。 */
const tutorialRouteStages=[
 {name:'准备好自己的账号',goal:'环境、邮箱、Claude 账号与手机号验证。',steps:[
  {n:1,title:'准备环境并检测',desc:'先配置浏览器，再检测能否继续。',href:'#/path/1'},
  {n:2,title:'注册邮箱，确认能收信',desc:'准备自己的邮箱与辅助邮箱。',href:'#/path/2/register-mail'},
  {n:3,title:'用邮箱注册 Claude',desc:'打开官网，收取登录邮件，创建账户。',href:'#/path/2/register-claude'},
  {n:4,title:'完成手机号验证',desc:'PingMe 登录与审核 → 选号 → 收码 → 填回 Claude。',href:'tutorial-phone-guide.html'}]},
 {name:'用上网页版，再按需开 Pro',goal:'先收到回复，观察使用情况，再决定会员。',steps:[
  {n:5,title:'网页版登录与第一次对话',desc:'能发送消息并收到回复，再往下走。',href:'#/path/3'},
  {n:6,title:'新号正常使用与观察（养号）',desc:'使用建议和异常判断；观察时长属于个人经验。',href:'#/path/5'},
  {n:7,title:'开通 Pro，核对到账',desc:'确认目标账号、会员商品与当前订单条件。',href:'#/path/4'}]},
 {name:'把桌面版用起来',goal:'配置桌面程序的网络，再安装、登录和聊天。',steps:[
  {n:8,title:'配置桌面端网络',desc:'Mac / Windows 分开做，每个实际入口分别验收。',href:'tutorial-desktop-guide.html#network'},
  {n:9,title:'安装并登录 Claude 桌面版',desc:'官网下载 → 安装 → 登录 → 完成桌面聊天。',href:'tutorial-desktop-guide.html#desktop'}]},
 {name:'安装并使用 Claude Code',goal:'按所选入口完成安装、登录和首个任务，再学日常注意事项。',steps:[
  {n:10,title:'安装 Claude Code，完成首个任务',desc:'桌面版 / CLI / VS Code：选择一种，跟着安装和登录。',href:'tutorial-desktop-guide.html#code'},
  {n:11,title:'日常使用与问题排查',desc:'看清权限、核对文件修改、按报错找问题。',href:'tutorial-desktop-guide.html#daily'}]}
];
function renderRouteHome(){return `<div class="path-home journey-home">
<section class="path-hero"><div><span class="path-eyebrow">AI智充 · 新手跟做路线</span><h1>Claude 从零到一<br><span class="gradient-text">从网页到桌面，<br>一步步用上 Code。</span></h1><p class="path-lead">先准备账号，再用网页版；<br>需要桌面或 Code，就沿着后面的步骤继续。</p><div class="path-actions"><a class="btn btn-primary-new" href="#/path/1">从第 1 步开始 →</a><a class="btn btn-secondary-new" href="#/path/3/path-existing-login">已有账号，直接登录</a></div><p class="path-small">只想用免费聊天，完成第 5 步就能开始。Pro 与 Code 按需要继续。</p></div><div class="path-hero-map"><span class="path-eyebrow">你会按这个顺序完成</span><ol class="journey-overview">${tutorialRouteStages.map((s,i)=>`<li><a href="#journey-stage-${i+1}" data-scroll="journey-stage-${i+1}"><b>0${i+1}</b><span>${s.name}<small>第 ${s.steps[0].n}–${s.steps.at(-1).n} 步</small></span><span>↓</span></a></li>`).join('')}</ol></div></section>
<details class="path-toolbox journey-relations"><summary><span><strong>开始前：网页版、桌面版、CLI、Claude Code 是什么关系？</strong><small>先认清入口，避免重复安装或登录错账号。</small></span><span>展开 ＋</span></summary><div class="journey-explain"><p><b>网页版 / 桌面 Chat：</b>日常聊天、问答和文件阅读。</p><p><b>桌面 Code / 终端 CLI / VS Code 扩展：</b>Claude Code 的三种入口，基础账号准备可共用，安装和网络仍要分别确认。</p><p>本路线用同一个 Claude 账号登录；需要 Code 时确认账号有相应权限。安装桌面版不等于安装了终端 CLI；VS Code 扩展也不会自动把 <code>claude</code> 命令加到终端。</p></div></details>
<section class="path-block"><div class="path-block-title"><div><span class="path-eyebrow">四个阶段 · 11 个顺序步骤</span><h2>找到当前这一步，跟着做</h2></div><a href="#/path/6">遇到问题，直接查 →</a></div><div class="journey-stages">${tutorialRouteStages.map((s,i)=>`<section class="journey-stage" id="journey-stage-${i+1}"><header><span class="path-pill">阶段 0${i+1}</span><h2>${s.name}</h2><p>${s.goal}</p></header><div>${s.steps.map(t=>`<a class="journey-step" href="${t.href}"><span class="path-number">${String(t.n).padStart(2,'0')}</span><span><strong>${t.title}</strong><small>${t.desc}</small></span><b>→</b></a>`).join('')}</div></section>`).join('')}</div></section>
<section class="path-block"><div class="path-soft-note"><strong>手机号验证用到的 PingMe</strong><p>官网 <a href="https://pingme.tel/" target="_blank" rel="noopener">pingme.tel ↗</a> · 邀请码 <b>AEGHZGZ</b> · 新用户按平台活动填写可领取奖励。</p><a class="path-text-link" href="tutorial-phone-guide.html#invite">看邀请码填在哪里，以及领取条件 →</a></div></section>
<section class="path-block" id="path-toolkit"><details class="path-toolbox"><summary><span><strong class="toolkit-main-title">教程里需要的工具和网址</strong><small>用到时再打开，跟着当前步骤选择。</small></span><span>展开 ＋</span></summary>${toolkitSection()}</details></section>
<section class="path-more path-block"><div class="path-block-title"><h2>资料与答疑</h2><a href="#/path/6">按提示查问题 →</a></div><div><a href="#/lesson/claude-complete-guide"><strong>原版注册与会员教程</strong><span>查原视频和资料</span><b>→</b></a><a href="tutorial-desktop-guide.html"><strong>桌面与 Code 跟做页</strong><span>网络、安装、登录与首个任务</span><b>→</b></a><a href="tutorial-clashmi.html#video"><strong>Claude Code 视频教程</strong><span>保留原有 6 章视频 + 分步图文</span><b>→</b></a></div></section></div>`;}
