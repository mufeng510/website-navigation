const NAVIGATION_GROUPS = [
    {
        title: '热门常用',
        icon: 'icon-remen',
        items: [
            { href: 'https://fnos.net/qqrr0910', icon: 'icon-self-fnos', text: '飞牛' },
            { href: 'https://to-do.live.com/tasks', icon: 'icon-self-TODO_INFO', text: 'Todo' },
            { href: 'https://www.siriser.com/siriser/workbench', icon: 'icon-self-AIxunlian', text: '晓天' },
            { href: 'https://docs.qq.com/desktop/', icon: 'icon-self-tengxunwendang', text: '腾讯文档' },
            { href: 'https://filehelper.weixin.qq.com/', icon: 'icon-self-weixinwenjian', text: '文件传输助手' }
        ]
    },
    {
        title: '学习',
        icon: 'icon-self-xuexi',
        items: [
            { href: 'https://webapp.songy.info/', icon: 'icon-self-daoshi', text: '学升' },
            { href: 'https://mubu.com/app', icon: 'icon-self-logo1', text: '幕布' },
            { href: 'https://ankiweb.net/', icon: 'icon-self-anki', text: 'Anki' },
            { href: 'https://weread.qq.com/', icon: 'icon-self-weixindushu', text: '微信读书' },
            { href: 'https://book.douban.com/', icon: 'icon-self-douban', text: '豆瓣读书' }
        ]
    },
    {
        title: 'AI大模型',
        icon: 'icon-self-rengongzhineng',
        items: [
            { href: 'https://chatgpt.com/', icon: 'icon-self-chatgpticon', text: '官方ChatGPT' },
            { href: 'https://gemini.google.com/', icon: 'icon-self-googlebard', text: 'Gemini' },
            { href: 'https://grok.com/', icon: 'icon-self-grok', text: 'Grok' },
            { href: 'https://chat.qwen.ai/', icon: 'icon-self-QWen', text: 'QWen' },
            { href: 'https://www.qianwen.com/', icon: 'icon-self-qianwen', text: '千问' },
            { href: 'https://ai.dangbei.com/chat', icon: 'icon-self-jiqiren', text: '当贝AI' },
            { href: 'https://chat.deepseek.com/', icon: 'icon-self-deepseek', text: 'DeepSeek' },
            { href: 'https://www.doubao.com/chat/', icon: 'icon-self-doubao', text: '豆包' }
        ]
    },
    {
        title: '开发',
        icon: 'icon-kongzhitai',
        items: [
            { href: 'https://github.com/', icon: 'icon-github', text: 'Github' },
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
        title: '资源分享',
        icon: 'icon-msg',
        items: [
            { href: 'https://book.daohangxie.com/', icon: 'icon-self-a-24h', text: '24h搜书' },
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
    }
];

function createIcon(iconName) {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    icon.setAttribute('class', 'icon');
    icon.setAttribute('aria-hidden', 'true');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + iconName);
    icon.appendChild(use);

    return icon;
}

function createTitleItem(group) {
    const titleItem = document.createElement('li');

    titleItem.className = 'title';
    titleItem.appendChild(createIcon(group.icon));
    titleItem.append(' ' + group.title);

    return titleItem;
}

function createLinkItem(item) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const text = document.createElement('span');

    listItem.className = 'col-3 col-sm-3 col-md-3 col-lg-1';
    link.href = item.href;
    link.target = '_blank';
    link.rel = 'nofollow noopener noreferrer';

    link.appendChild(createIcon(item.icon));
    text.textContent = item.text;
    link.appendChild(text);
    listItem.appendChild(link);

    return listItem;
}

function renderNavigation(groups, container) {
    const fragment = document.createDocumentFragment();

    groups.forEach(function (group) {
        fragment.appendChild(createTitleItem(group));
        group.items.forEach(function (item) {
            fragment.appendChild(createLinkItem(item));
        });
    });

    container.replaceChildren(fragment);
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('urlContainer');

    if (!container) {
        return;
    }

    renderNavigation(NAVIGATION_GROUPS, container);
});
