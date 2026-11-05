/* 本地 demo；2026-11-05 森林确认的入门主线与按需入口。 */
const claudePath=[
  {
    "n": 1,
    "name": "准备与检测",
    "short": "准备与检测",
    "goal": "先准备浏览器，再检查能否进入下一步。",
    "time": "约 15 分钟",
    "need": [
      "一台电脑",
      "能收信的邮箱",
      "本教程使用的浏览器环境"
    ],
    "video": {
      "src": "tutorial-claude-1022-wm.mp4",
      "demo": false,
      "chapters": [
        [
          136,
          "准备工具"
        ],
        [
          196.3,
          "配置浏览器"
        ],
        [
          229.16,
          "内核设置"
        ],
        [
          273.39,
          "登录前检测"
        ]
      ]
    },
    "legacy": [
      "guide-ready",
      "guide-network",
      "guide-check"
    ],
    "sections": [],
    "checks": [
      "我已经保存好要使用的浏览器窗口",
      "我在同一个窗口完成了登录前检测",
      "我知道检测通过不代表账号不会受限"
    ],
    "risks": [
      "先完成检测，再注册或登录。检测异常时先处理，不反复尝试登录。",
      "一个账号固定使用一个环境，避免来回更换。"
    ],
    "faqIds": [
      "guide-faq-01",
      "guide-faq-06"
    ],
    "next": 2
  },
  {
    "n": 2,
    "name": "注册账号",
    "short": "注册账号",
    "goal": "准备邮箱，用邮件创建 Claude 账户，再进入手机号验证。",
    "time": "约 20 分钟，另计审核或等待时间",
    "need": [
      "第 1 步准备好的环境",
      "能收信的辅助邮箱"
    ],
    "video": {
      "src": "tutorial-claude-1105-v5.mp4?v=20261105-v5",
      "demo": true,
      "chapters": [
        [
          95,
          "准备工作"
        ],
        [
          118.28,
          "注册微软邮箱"
        ],
        [
          242.8,
          "注册 Claude"
        ],
        [
          286.16,
          "验证手机号"
        ],
        [
          310.951,
          "进入 Claude、第一次对话"
        ],
        [
          345,
          "注册常见问题"
        ]
      ]
    },
    "legacy": [],
    "sections": [
      {
        "id": "register-mail",
        "title": "第 2 步 · 准备微软邮箱",
        "intro": "已有可用的微软邮箱，可直接继续第 3 步。",
        "steps": [
          {
            "img": "tutorial-v2-reg-01-search.jpg",
            "title": "搜索“微软邮箱”，点最上面的官网",
            "text": "首先我们打开比特指纹浏览器，搜索微软邮箱，最上面这个就是微软的官网，我们点进去",
            "result": "进入 Microsoft Outlook 官网。",
            "translation": "",
            "time": 121.98,
            "source": "注册视频 V5 · 第 12 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-02-create.jpg",
            "title": "点“创建免费帐户”",
            "text": "然后点创建免费账户，就进到注册页面了。",
            "result": "看到创建账号的输入框。",
            "translation": "Create free account = 创建免费账户",
            "time": 124.97,
            "source": "注册视频 V5 · 第 13 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-03-name.jpg",
            "title": "起一个邮箱名，后缀不用改",
            "text": "第一步，让我们起一个邮箱名，后面的后缀默认就是微软邮箱的，不用改。",
            "result": "邮箱名可以继续使用，进入密码页。",
            "translation": "Next = 下一步",
            "time": 133.27,
            "source": "注册视频 V5 · 第 14 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-04-password.jpg",
            "title": "设密码：至少 8 位，大小写 + 数字 + 符号",
            "text": "然后我们点下一步，设置一个密码，至少八位数，大小写字母、数字、符号最好都带上，这个密码自己要记好。",
            "result": "密码设置完成，进入下一页。",
            "translation": "Next = 下一步",
            "time": 150.5,
            "source": "注册视频 V5 · 第 16 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-05-nosave.jpg",
            "title": "浏览器问要不要保存密码，点 No Thanks",
            "text": "遇到浏览器问要不要保存密码，点不保存就行，再点下一步。",
            "result": "保存密码提示关闭。",
            "translation": "No Thanks = 不保存",
            "time": 152.93,
            "source": "注册视频 V5 · 第 17 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-06-country.jpg",
            "title": "填国家或地区",
            "text": "国家选 United States（美国），跟你所在的网络地区保持一致。",
            "result": "国家栏显示所选地区。",
            "translation": "United States = 美国",
            "time": 164.93,
            "source": "注册视频 V5 · 第 19 句",
            "notice": "",
            "experience": "团子实测经验"
          },
          {
            "img": "tutorial-v2-reg-07-birth.jpg",
            "title": "填出生日期",
            "text": "年龄要在 18 岁以上，年份选 2006 年之前都可以（录屏里选的是 1999 年），月份和日子随便选。",
            "result": "出生日期填写完成，可以继续。",
            "translation": "",
            "time": 180.16,
            "source": "注册视频 V5 · 第 20 句",
            "notice": "",
            "experience": "团子实测经验"
          },
          {
            "img": "tutorial-v2-reg-08-name.jpg",
            "title": "填写姓名，点 Next",
            "text": "填写姓名，点 Next（下一步）。",
            "result": "姓名填写完成，进入验证页。",
            "translation": "Next = 下一步",
            "time": 184.16,
            "source": "注册视频 V5 · 第 21 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-09-human.jpg",
            "title": "人机验证：按住中间按钮，走完再点一次",
            "text": "这个时候会弹出一个人机验证，我们按住中间这个按钮，等它走完再点一次，就算验证成功。",
            "result": "人机验证通过，进入下一页。",
            "translation": "Press and hold = 按住",
            "time": 191.71,
            "source": "注册视频 V5 · 第 22 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-10-aux.jpg",
            "title": "加一个辅助邮箱（保护账户）",
            "text": "接下来，它会让我们加一个辅助邮箱，用来保护账号的安全。",
            "result": "进入辅助邮箱填写页。",
            "translation": "",
            "time": 216.72,
            "source": "注册视频 V5 · 第 24 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-11-aux-fill.jpg",
            "title": "填你自己能收信的邮箱",
            "text": "这里填一个你自己能收到邮件的邮箱就行，主播这里填的是自己的谷歌邮箱。",
            "result": "页面提示已发送验证码。",
            "translation": "Next = 下一步",
            "time": 223.43,
            "source": "注册视频 V5 · 第 25 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-12-code.jpg",
            "title": "去辅助邮箱里收 6 位验证码，填回来",
            "text": "然后到这个辅助邮箱里，接一下微软发来的 6 位数验证码，回来填进去，它会自动验证。",
            "result": "验证码验证完成。",
            "translation": "",
            "time": 231.99,
            "source": "注册视频 V5 · 第 26 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-13-passkey.jpg",
            "title": "弹出“创建通行密钥”，点取消",
            "text": "如果浏览器弹出一个让你创建通行密钥的窗口，点取消就行。",
            "result": "通行密钥弹窗关闭。",
            "translation": "Cancel = 取消",
            "time": 235.27,
            "source": "注册视频 V5 · 第 27 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-14-done.jpg",
            "title": "微软邮箱注册完成，全程不用手机",
            "text": "这样我们就成功注册了一个微软邮箱，整个过程不需要手机。",
            "result": "能进入 Outlook 收件箱，记好自己的邮箱地址。",
            "translation": "",
            "time": 237.52,
            "source": "注册视频 V5 · 第 28 句",
            "notice": ""
          }
        ]
      },
      {
        "id": "register-claude",
        "title": "第 3 步 · 用邮箱注册 Claude",
        "intro": "在刚才准备好的浏览器窗口中继续。",
        "steps": [
          {
            "img": "tutorial-v2-reg-15-check.jpg",
            "title": "打开 Claude 官网，先等安全检查转完",
            "text": "首先打开 Claude 官网，它会先做一个安全检查，我们等它转完就好。",
            "result": "安全检查结束，出现登录入口。",
            "translation": "",
            "time": 252.32,
            "source": "注册视频 V5 · 第 30 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-16-email.jpg",
            "title": "填刚注册的微软邮箱，点 Continue with email",
            "text": "然后在这里填入我们刚注册的微软邮箱账号，点黑色邮箱，也就是用邮箱继续。",
            "result": "页面提示去邮箱收取登录邮件。",
            "translation": "Continue with email = 用邮箱继续",
            "time": 256.62,
            "source": "注册视频 V5 · 第 31 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-17-mail.jpg",
            "title": "回微软邮箱，打开 Claude 发来的邮件，点 Sign in",
            "text": "我们回微软邮箱里面的收件箱，找到 Claude 发来的这封登录邮件，打开，点里面的这个登录按钮。",
            "result": "邮件中的登录按钮打开 Claude。",
            "translation": "Sign in = 登录",
            "time": 268.41,
            "source": "注册视频 V5 · 第 32 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-18-captcha.jpg",
            "title": "弹图片验证码就按提示点对",
            "text": "这个时候可能会弹出一个图片验证码，比如让你选出所有能做饭的东西，我们按提示把图片点对就行。",
            "result": "图片验证码通过。",
            "translation": "",
            "time": 278.23,
            "source": "注册视频 V5 · 第 33 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-19-agree.jpg",
            "title": "勾上同意条款，点 Create account",
            "text": "接着把同意条款这个框勾上，点下面这个创建账户的按钮。",
            "result": "进入后续账号验证流程。",
            "translation": "Create account = 创建账户",
            "time": 282.73,
            "source": "注册视频 V5 · 第 34 句",
            "notice": ""
          }
        ]
      },
      {
        "id": "register-phone",
        "title": "第 4 步 · 完成手机验证",
        "intro": "先备好能收验证码的号码，再发送短信；邮箱注册完成，不等于 Claude 注册完成。",
        "steps": [
          {
            "img": "tutorial-v2-reg-24-sms-platform.jpg",
            "title": "先准备能收短信的号码",
            "text": "这次录屏使用的接码平台，身份审核等了一天。这是本次实操经历，不代表所有人都能立即完成。",
            "result": "已准备好自己可收短信的号码，再回 Claude 验证。",
            "translation": "",
            "time": 386.59,
            "source": "注册视频 V5 · 第 48 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-20-phone.jpg",
            "title": "遇到“验证手机号”页面",
            "text": "这个时候我们会遇到一个验证手机号的页面",
            "result": "看清手机号输入框和国家选项。",
            "translation": "",
            "time": 288.99,
            "source": "注册视频 V5 · 第 35 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-21-us.jpg",
            "title": "核对国家与手机号",
            "text": "国家默认是美国，这里只能填美国的手机号，手机号地区要跟你的网络地区一致。",
            "result": "确认号码与页面国家选项相符。",
            "translation": "",
            "time": 297.28,
            "source": "注册视频 V5 · 第 36 句",
            "notice": "",
            "experience": "团子实测经验"
          },
          {
            "img": "tutorial-v2-reg-22-send.jpg",
            "title": "填号码，点 Send verification code",
            "text": "我们把手机号填进去之后，点下面这个发送验证码的按钮。",
            "result": "页面进入短信验证码填写步骤。",
            "translation": "Send verification code = 发送验证码",
            "time": 300.02,
            "source": "注册视频 V5 · 第 37 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-reg-23-verify.jpg",
            "title": "填短信验证码，点 Verify",
            "text": "手机收到短信以后，把验证码填到里面，点验证。",
            "result": "验证通过，进入 Claude 后续设置。",
            "translation": "Verify = 验证",
            "time": 305.33,
            "source": "注册视频 V5 · 第 38 句",
            "notice": ""
          }
        ]
      }
    ],
    "checks": [
      "我的微软邮箱能收到邮件",
      "我已完成邮箱登录并到达 Claude 后续验证页面",
      "我知道接着去第 4 步准备号码并完成手机验证"
    ],
    "risks": [
      {
        "text": "国内的 QQ 邮箱、163 邮箱不要拿去注册 Claude，有人连登录邮件都收不到。",
        "experience": "团子实测经验"
      },
      "微软邮箱这一段不需要手机，不代表 Claude 注册可以跳过手机验证。",
      "若出现与演示不同的验证要求，按实际提示处理；不把本次成功当作保证。"
    ],
    "faqIds": [
      "guide-faq-04",
      "guide-faq-07"
    ],
    "shortcut": {
      "text": "不想自己注册？查看普通成品账号",
      "note": "普号 ¥30，不含会员；首登质保 1 小时。购买后按订单里的登录说明操作。",
      "href": "https://aizhichong.cc/#accounts"
    },
    "next": 3
  },
  {
    "n": 3,
    "name": "登录与第一次对话",
    "short": "第一次对话",
    "goal": "登进 Claude，发出第一句话并收到回复。",
    "time": "按页面提示完成",
    "need": [
      "可登录的 Claude 账号",
      "第 1 步准备好的环境"
    ],
    "video": {
      "src": "tutorial-claude-1105-v5.mp4?v=20261105-v5",
      "demo": true,
      "chapters": [
        [
          310.951,
          "进入 Claude、第一次对话"
        ]
      ]
    },
    "legacy": [],
    "sections": [
      {
        "id": "first-chat",
        "title": "完成你的第一次对话",
        "intro": "刚注册完直接往下做；已有账号的，先展开下面的登录步骤。",
        "steps": [
          {
            "img": "tutorial-v2-use-01-free.jpg",
            "title": "套餐页先选 Free（免费版）",
            "text": "验证通过，就能进入到 Claude 里面了。它会先弹出一个套餐页，我们点选免费版。",
            "result": "选择免费版，继续进入账号。",
            "translation": "Use Claude for free = 免费使用",
            "time": 314.27,
            "source": "注册视频 V5 · 第 39 句",
            "notice": ""
          },
          {
            "img": "tutorial-v2-use-02-chat.jpg",
            "title": "发一句“你好”，回复了就说明能用",
            "text": "然后再点几下下一步，就到了聊天页面，我们发一句“你好”，它回复了，就说明这个号已经能够正常使用。",
            "result": "对话页收到回复，入门完成。",
            "translation": "",
            "time": 324.2,
            "source": "注册视频 V5 · 第 40 句",
            "notice": ""
          }
        ]
      }
    ],
    "checks": [
      "我已经进入自己的 Claude 对话页",
      "我发出了一句话，并收到回复",
      "我知道可以先免费使用，开会员按需选择"
    ],
    "risks": [
      "登录卡住时先检查提示，不反复切换环境。"
    ],
    "faqIds": [
      "guide-faq-03",
      "guide-faq-04"
    ],
    "next": null
  },
  {
    "n": 4,
    "name": "开通会员",
    "short": "开通会员",
    "goal": "按需购买会员，充值到自己的账号，再核对到账。",
    "time": "按当前订单的处理时间",
    "need": [
      "已经能正常对话的账号",
      "确认好的会员商品和当前使用条件"
    ],
    "video": {
      "src": "tutorial-claude-1022-wm.mp4",
      "demo": false,
      "chapters": [
        [
          492.32,
          "开通 Pro"
        ],
        [
          520.82,
          "选择会员商品"
        ],
        [
          548.04,
          "付款方式说明"
        ],
        [
          549.56,
          "按订单说明激活"
        ],
        [
          556.84,
          "核对到账"
        ]
      ]
    },
    "legacy": [
      "guide-buy"
    ],
    "sections": [],
    "checks": [
      "我确认购买的是会员商品，不是成品账号",
      "我已按订单要求完成充值并保存订单",
      "我在目标账号的 Billing 看到了对应套餐"
    ],
    "risks": [
      "卡密发出不退；充值没成功，核实后全额退；掉会员按售后规则处理。",
      "已有账号要开会员，就选会员商品，不要误选成品账号。"
    ],
    "faqIds": [
      "guide-faq-04"
    ],
    "shortcut": {
      "text": "查看 Claude Pro · 188 元/月",
      "note": "价格、交付方式和售后以当前商品说明为准。Max / KYC 协助请先联系商家。",
      "href": "https://aizhichong.cc/#pricing"
    },
    "next": null
  },
  {
    "n": 5,
    "name": "使用注意事项",
    "short": "使用注意事项",
    "goal": "了解新号使用建议，分清个人经验和平台要求。",
    "time": "按需阅读",
    "need": [
      "已经能正常使用的账号"
    ],
    "video": null,
    "legacy": [],
    "sections": [],
    "checks": [
      "我知道先确认网页版正常使用",
      "我知道观察时长是个人经验，不是安全保证",
      "我知道账号限制最终由 Claude 决定"
    ],
    "risks": [
      "以下是森林的使用经验，不是 Claude 官方防封规则。等待时间、检测分数都不能保证账号不受限。"
    ],
    "faqIds": [
      "guide-faq-02",
      "guide-faq-05"
    ],
    "next": null
  },
  {
    "n": 6,
    "name": "遇到问题",
    "short": "遇到问题",
    "goal": "按屏幕上的提示找解决步骤，不从头重做。",
    "time": "按问题查找",
    "need": [
      "你遇到的完整提示",
      "卡住的操作步骤"
    ],
    "video": null,
    "legacy": [],
    "sections": [],
    "checks": [
      "我已分清自己遇到的是登录、短信还是身份验证问题",
      "我已查看对应的处理步骤",
      "若仍未解决，我已记下提示和卡住的步骤"
    ],
    "risks": [
      "向客服描述问题时，不发送密码、验证码、完整卡密或 SessionKey。"
    ],
    "faqIds": [],
    "next": null
  }
];
const pathUsageRules=[["先在网页版正常使用", "我的建议是，先在比特里用网页版。", "口播稿 V9 第 90 句"], ["开会员前先观察账号状态", "拿到以后先放着正常用，过四个小时左右稳定了，再去开 Pro。", "口播稿 V9 第 25 句；个人经验，不是平台要求"], ["自己注册的新号，先正常使用", "自己注册的号，主播建议先正常用一两天再开 Pro。", "注册视频字幕 第 56 句；个人建议"], ["一个号，一个环境，只给自己用", "一个号，一个环境，只给自己用。", "口播稿 V9 第 92 句"], ["按自己的实际需求对话", "按我的经验关系不大，我自己就是中国作息、中文对话。", "口播稿 V9 第 96 句；个人体验"], ["别把这些做法当作保证", "封不封号最后还是 Claude 官方决定的。", "注册视频字幕 第 57 句"]];
