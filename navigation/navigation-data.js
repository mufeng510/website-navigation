// Central navigation data source. The rendering layer reads this structure
// directly, so new sections and links should usually be added here first.
//
// Icon format supports:
// - SVG sprite reference: 'icon-name' (uses internal SVG sprite)
// - Image URL: 'https://example.com/icon.png' or '/path/to/icon.png'
export const NAVIGATION_GROUPS = [
    {
        title: '热门常用',
        icon: 'icon-remen',
        items: [
            { href: 'https://fnos.net/qqrr0910', icon: 'icon-self-fnos', text: '飞牛' },
            { href: 'https://www.icloud.com.cn/', icon: 'icon-self-iCloudyunpan', text: 'iCloud' },
            // { href: 'https://y.qq.com/', icon: 'icon-self-QQyinle', text: 'QQ音乐' },
            // { href: 'https://to-do.live.com/tasks', icon: 'icon-self-TODO_INFO', text: 'Todo' },
            // { href: 'https://www.siriser.com/siriser/workbench', icon: 'icon-self-AIxunlian', text: '晓天' },
            { href: 'https://docs.qq.com/desktop/', icon: 'icon-self-tengxunwendang', text: '腾讯文档' },
            { href: 'https://filehelper.weixin.qq.com/', icon: 'icon-self-weixinwenjian', text: '文件传输助手' }
        ]
    },
    {
        title: '工作',
        icon: 'icon-self-gongzuo',
        items: [
            { href: 'https://www.xiaohongshu.com/', icon: 'icon-self-xiaohongshu', text: '小红书' },
            { href: 'https://xhs.nas.yq59.top:31000/', icon: 'icon-self-xhs', text: 'XHS运营' },
            { href: 'https://claw.nas.yq59.top:31000/', icon: 'icon-self-claw', text: '龙虾' }
        ]
    },
    {
        title: '学习',
        icon: 'icon-self-xuexi',
        items: [
            { href: 'https://webapp.songy.info/', icon: 'icon-self-daoshi', text: '学升' },
            { href: 'https://lixiaolai.com/books', icon: 'https://lixiaolai.com/icon.svg', text: '笑来' },
            { href: 'https://app.enjoy.bot/home', icon: 'icon-self-svg', text: 'Enjoy' },
            // { href: 'https://mubu.com/app', icon: 'icon-self-logo1', text: '幕布' },
            // { href: 'https://ankiweb.net/', icon: 'icon-self-anki', text: 'Anki' },
            { href: 'https://book.nas.yq59.top:31000/', icon: 'icon-self-tushuguan-fuwuye', text: '馆藏图书' },
            { href: 'https://weread.qq.com/', icon: 'icon-self-weixindushu', text: '微信读书' },
            { href: 'https://book.douban.com/', icon: 'icon-self-douban', text: '豆瓣读书' }
        ]
    },
    {
        title: 'AI大模型',
        icon: 'icon-self-rengongzhineng',
        items: [
            { href: 'https://chatgpt.com/', icon: 'icon-self-chatgpticon', text: '官方ChatGPT' },
            { href: 'https://gemini.google.com/', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg', text: 'Gemini' },
            // { href: 'https://gemini.google.com/', icon: 'icon-self-googlebard', text: 'Gemini' },
            { href: 'https://grok.com/', icon: 'icon-self-grok', text: 'Grok' },
            { href: 'https://chat.qwen.ai/', icon: 'icon-self-QWen', text: 'QWen' },
            { href: 'https://www.qianwen.com/', icon: 'icon-self-qianwen', text: '千问' },
            // { href: 'https://ai.dangbei.com/chat', icon: 'icon-self-jiqiren', text: '当贝AI' },
            { href: 'https://chat.deepseek.com/', icon: 'icon-self-deepseek', text: 'DeepSeek' },
            { href: 'https://www.doubao.com/chat/', icon: 'icon-self-doubao', text: '豆包' }
        ]
    },
    {
        title: '开发',
        icon: 'icon-kongzhitai',
        items: [
            { href: 'https://github.com/', icon: 'icon-github', text: 'Github' },
            { href: 'https://hub.docker.com/', icon: 'icon-self-docker', text: 'Docker' },
            { href: 'https://dash.cloudflare.com/', icon: 'icon-cloudflare', text: 'C. flare' },
            { href: 'https://www.iconfont.cn/', icon: 'icon-iconfont', text: '阿里图标' },
            { href: 'https://app.apifox.com/main', icon: 'icon-self-apifox', text: 'Apifox' }
        ]
    },
    {
        title: '工具',
        icon: 'icon-ai-tool',
        items: [
            { href: 'https://123apps.com/cn/', icon: 'icon-self-logo', text: '文件工具' },
            { href: 'https://tools.miku.ac/', icon: 'icon-ai-tool', text: 'Miku工具' },
            { href: 'https://waifu2x.udp.jp/?tdsourcetag=s_pctim_aiomsg', icon: 'icon-self-gonggong-gongjulan-shangjiaobiaopx', text: '图片放大' },
            { href: 'https://www.gaitubao.com/', icon: 'icon-self-tubiaozhizuomoban', text: '改图宝' },
            { href: 'https://translate.google.com/?hl=zh-CN', icon: 'icon-fanyi', text: '谷歌翻译' },
            { href: 'https://ip233.cn/', icon: 'icon-wangluo', text: 'IP查询' },
            { href: 'https://ping.chinaz.com/', icon: 'icon-pingup', text: '站长Ping' }
        ]
    },
    {
        title: '社区论坛',
        icon: 'icon-msg',
        items: [
            // { href: 'https://book.daohangxie.com/', icon: 'icon-self-a-24h', text: '24h搜书' },
            { href: 'https://linux.do/', icon: 'icon-self-linux-do', text: 'LINUX DO' },
            { href: 'https://www.52pojie.cn/', icon: 'icon-theater-masks', text: '吾爱破解' },
            { href: 'https://www.v2ex.com/', icon: 'icon-v2ex', text: 'V2EX' }
        ]
    },
    {
        title: '邮箱',
        icon: 'icon-youxiang',
        items: [
            { href: 'https://mail.google.com/mail/u/0/#inbox', icon: 'icon-gmail', text: 'Gmail' },
            { href: 'https://outlook.live.com/mail/', icon: 'icon-windows', text: 'Hotmail' },
            { href: 'https://mail.163.com/', icon: 'icon-wangyi', text: '163网易邮箱' },
            { href: 'https://mail.sina.com.cn/', icon: 'icon-xinlangwang', text: '新浪邮箱' },
            { href: 'https://mail.qq.com/', icon: 'icon-QQ', text: 'QQ邮箱' },
            { href: 'https://qiye.aliyun.com/', icon: 'icon-yunyouxiang', text: '阿里邮箱' }
        ]
    },
    {
        title: '其他',
        icon: 'icon-self-qitachajianqu',
        items: [
            { href: 'https://lucky.nas.yq59.top:31000', icon: 'icon-self-Lucky', text: 'Lucky' },
            { href: 'https://clash.nas.yq59.top:31000', icon: 'icon-self-clash', text: 'Clash' },
            { href: 'https://dst.nas.yq59.top:31000', icon: 'icon-self-dst', text: '饥荒' }
        ]
    }
];
