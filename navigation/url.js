// 判断用户网络环境是否支持IPv6
function supportsIPv6() {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => reject(false);
        img.src = 'https://v6.ipv6-test.com/imgtest.png'; // 使用一个支持IPv6的图片链接
    });
}

// 更新href值
function updateHref(href) {
    const domainToReplace = 'yq59.top';
    const replacement = 'v6.yq59.top:2087';

    // 判断是否包含yq59.top且不包含cf、vercel
    if (href.includes(domainToReplace) && !href.includes('cf') && !href.includes('vercel')) {
        return href.replace(domainToReplace, replacement);
    }

    return href;
}

/**
 * 将导航渲染到dom
 * @param {*} list
 * @param {*} container
 */
function urlListToElement(list, position) {
    var ulElement = document.querySelector('#urlContainer');

    // 遍历数组，构建 HTML 字符串
    var htmlString = '';
    list.forEach(function (category) {
        htmlString +=
            '<li class="title"><svg class="icon" aria-hidden="true"><use xlink:href="#' + category.icon + '"></use></svg> ' + category.title + '</li>';
        category.items.forEach(function (item) {
            htmlString +=
                '<li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="' +
                item.href +
                '" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#' +
                item.icon +
                '"></use></svg><span>' +
                item.text +
                '</span></a></li>';
        });
    });

    // 将 HTML 字符串填充到 ul 元素中
    ulElement.insertAdjacentHTML(position, htmlString);
}

function myFunction() {
    var fristList = [
        {
            title: '热门常用',
            icon: 'icon-remen',
            items: [
                { href: 'https://fnos.net/qqrr0910', icon: 'icon-self-fnos', text: '飞牛' },
                { href: 'https://webapp.songy.info/', icon: 'icon-self-daoshi', text: '学升' },
                { href: 'https://mubu.com/app', icon: 'icon-self-logo1', text: '幕布' },
                { href: 'https://to-do.live.com/tasks', icon: 'icon-self-TODO_INFO', text: 'Todo' },
                { href: 'https://ankiweb.net/', icon: 'icon-self-anki', text: 'Anki' },
                { href: 'https://weread.qq.com/', icon: 'icon-self-weixindushu', text: '微信读书' },
                { href: 'https://book.douban.com/', icon: 'icon-self-douban', text: '豆瓣读书' },
                { href: 'https://filehelper.weixin.qq.com/', icon: 'icon-self-weixinwenjian', text: '文件传输助手' }
            ]
        },
        {
            title: 'AI大模型',
            icon: 'icon-self-rengongzhineng',
            items: [
                { href: 'https://chatgpt.com/', icon: 'icon-self-chatgpticon', text: '官方ChatGPT' },
                { href: 'https://gemini.google.com/', icon: 'icon-self-googlebard', text: 'Gemini' },
                { href: 'https://chat.qwen.ai/', icon: 'icon-self-qianwen', text: '千问' },
                { href: 'https://ai.dangbei.com/chat', icon: 'icon-self-jiqiren', text: '当贝AI' },
                { href: 'https://yuanbao.tencent.com/', icon: 'icon-self-tengxunyuanbao', text: '元宝' },
                { href: 'https://chat.deepseek.com/', icon: 'icon-self-deepseek', text: 'DeepSeek' },
                { href: 'https://www.doubao.com/chat/', icon: 'icon-self-doubao', text: '豆包' }
                // { href: 'https://ai.vercel.yq59.top/', icon: 'icon-self-ic-chatgpt', text: 'ChatGPT Next' },
                // { href: 'https://lobe.vercel.yq59.top/', icon: 'icon-self-lobe', text: 'Lobe Chat' }
                // { href: 'http://public.agent-matrix.com:12311/', icon: 'icon-self-xueshubaogao', text: 'GPT学术优化' },
                // { href: 'https://xinghuo.xfyun.cn/desk/', icon: 'icon-self-xunfeichatgpt', text: '讯飞星火' },
                // { href: 'https://yiyan.baidu.com/', icon: 'icon-self-baiduchatgpt', text: '文心一言' },
                // { href: 'https://discord.com/channels/@me', icon: 'icon-self-discord', text: 'Discord' }
            ]
        },
        {
            title: '开发',
            icon: 'icon-kongzhitai',
            items: [
                { href: 'https://github.com/', icon: 'icon-github', text: 'Github' },
                { href: 'https://dash.cloudflare.com/', icon: 'icon-cloudflare', text: 'C. flare' },
                { href: 'https://www.iconfont.cn/', icon: 'icon-iconfont', text: '阿里图标' },
                { href: 'https://app.apifox.com/main', icon: 'icon-self-apifox', text: 'apifox' }
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
        }
    ];
    var secondList = [
        {
            title: '私有云',
            icon: 'icon-self-siyouyun',
            items: [
                { href: 'https://alist.yq59.top/', icon: 'icon-self-alist', text: '文件列表' },
                { href: 'https://photo.yq59.top/', icon: 'icon-self-xiangce', text: '相册' },
                { href: 'https://ariang.yq59.top/', icon: 'icon-self-aria2', text: 'AriaNg' },
                { href: 'https://image.yq59.top/', icon: 'icon-self-xiangce1', text: '图床' }
            ]
        },
        {
            title: '家庭服务',
            icon: 'icon-self-faxianye_jia_jiating',
            items: [
                { href: 'http://192.168.68.182:9978/', icon: 'icon-self-tv_airplay_line', text: 'TVBOX' },
                // { href: 'https://v2ray.yq59.top/', icon: 'icon-self-V2raya_A', text: 'v2rayA' },
                { href: 'https://ql.yq59.top/', icon: 'icon-self-dragon', text: '青龙' },
                { href: 'https://cups.yq59.top/', icon: 'icon-self-dayinji', text: 'cups' }
            ]
        }
    ];
    var thirdList = [
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
    urlListToElement([...fristList, ...thirdList], 'afterbegin');
    // 添加ipv6直链
    // var secondListCopy = JSON.parse(JSON.stringify(secondList));
    // secondListCopy.forEach((category) => {
    //     category.title = category.title + ' (v6 更快,可能要多次刷新)';
    //     category.items.forEach((item) => {
    //         item.href = updateHref(item.href);
    //     });
    // });
    // urlListToElement([...fristList, ...secondListCopy, ...secondList, ...thirdList], 'afterbegin');

    // urlListToElement(fristList, 'afterbegin');
    // urlListToElement(secondList, 'beforeend');

    // setTimeout(() => {
    //     supportsIPv6()
    //         .then((res) => {
    //             console.log('IPv6 is supported.');
    //             urlListToElement(secondListCopy, 'beforeend');
    //         })
    //         .catch(() => {
    //             console.log('IPv6 is not supported.');
    //         })
    //         .finally(() => {
    //             urlListToElement(thirdList, 'beforeend');
    //         });
    // }, 10);
}

myFunction();

//#region 一些暂时不用的网站
// { href: 'https://codepen.io/', icon: 'icon-codepen', text: 'Codepen' },
// { href: 'https://segmentfault.com/', icon: 'icon-msg', text: 'SF思否' },
// { href: 'https://cdnjs.com/', icon: 'icon-cdnjs', text: 'CdnJs' },
// { href: 'https://fontawesome.com/icons?d=gallery&m=free', icon: 'icon-font-awesome', text: 'Font A.' },
// { href: 'https://msdn.itellyou.cn/', icon: 'icon-windows', text: 'MSDN下载' },
// { href: 'http://www.w3school.com.cn/', icon: 'icon-h5', text: 'W3school' },
// { href: 'https://www.swiper.com.cn/', icon: 'icon-S', text: 'Swiper' }

// { href: 'https://feedly.com', icon: 'icon-feedly', text: 'Feedly' },
// { href: 'https://pandao.github.io/editor.md/index.html', icon: 'icon-md', text: 'MD编辑器' },
// { href: 'http://cubic-bezier.com', icon: 'icon-quxian', text: '贝赛尔曲线' },
// { href: 'https://5iux.cn/base64/', icon: 'icon-base64', text: 'Base64' },
// { href: 'https://javascriptobfuscator.com/Javascript-Obfuscator.aspx', icon: 'icon-jshunxiao', text: 'JS混淆器' },
// { href: 'https://ping.pe', icon: 'icon-wangluo1', text: 'Ping.pe' },
// { href: 'https://apkdl.in/', icon: 'icon-anzhuo', text: 'APK下载' }
// {
//     title: '视频媒体',
//     icon: 'icon-shipin',
//     items: [
//         // { href: 'https://v.qq.com/', icon: 'icon-tengxunshipin', text: '腾讯视频' },
//         // { href: 'https://www.youku.com/', icon: 'icon-youku', text: '优酷' },
//         // { href: 'https://www.iqiyi.com/', icon: 'icon-aiqiyi', text: '爱奇艺' },
//         // { href: 'https://tv.cctv.com/live/index.shtml', icon: 'icon-cctv', text: 'CCTV直播' },
//         { href: 'https://www.youtube.com/', icon: 'icon-youtube', text: 'Youtube' },
//         // { href: 'http://www.acfun.cn/index.html', icon: 'icon-acfun', text: 'ACFUN' },
//         { href: 'https://pianyuan.org/', icon: 'icon-yingshi', text: '片源网' },
//         { href: 'http://www.slimego.cn/', icon: 'icon-shilaimu', text: '史莱姆' },
//         { href: 'https://www.douban.com/', icon: 'icon-douban', text: '豆瓣' },
//         { href: 'https://www.bilibili.com/', icon: 'icon-bili', text: '哔哩哔哩' },
//         { href: 'https://www.555yy1.com/', icon: 'icon-yunbo', text: '555影视' }
//     ]
// },
// {
//     title: '购物',
//     icon: 'icon-gouwuche',
//     items: [
//         { href: 'https://www.jd.com', icon: 'icon-jingdong', text: '京东' },
//         { href: 'https://www.amazon.com/', icon: 'icon-amazon', text: '亚马逊' },
//     ]
// },
// {
//     title: '设计视觉',
//     icon: 'icon-sheji',
//     items: [
//         { href: 'https://hao.5iux.cn/', icon: 'icon-daohang1', text: '设计导航' },
//         { href: 'https://www.behance.net/', icon: 'icon-behance', text: 'Behance' },
//         { href: 'https://www.dribbble.com/', icon: 'icon-dribbble', text: 'Dribbble' },
//         { href: 'https://www.zcool.com.cn/', icon: 'icon-zhanku', text: '站酷' },
//         { href: 'https://www.iconfinder.com/', icon: 'icon-eye', text: 'IconFinder' },
//         { href: 'https://uiiiuiii.com/', icon: 'icon-jiaocheng', text: '优设教程' },
//         { href: 'https://huaban.com/', icon: 'icon-huaban', text: '花瓣' }
//     ]
// },
// { href: 'https://www.zhihu.com/', icon: 'icon-zhihu', text: '知乎' },
// { href: 'https://www.jianshu.com/', icon: 'icon-jianshu', text: '简书' },
// { href: 'https://www.weibo.com', icon: 'icon-weibo', text: '微博' },
// { href: 'https://www.instagram.com', icon: 'icon-instagram', text: 'Instagram' },
// { href: 'https://www.twitter.com', icon: 'icon-twitter', text: 'Twitter' },
// { href: 'https://www.facebook.com', icon: 'icon-facebook', text: 'Facebook' }

// {
//     title: '搜索引擎',
//     icon: 'icon-sousuo',
//     items: [
//         { href: 'https://duckduckgo.com/', icon: 'icon-duck', text: 'DuckGo' },
//         { href: 'https://www.sogou.com/', icon: 'icon-sougou', text: '搜狗' },
//         { href: 'https://www.naver.com/', icon: 'icon-icon-test', text: 'NAVER' },
//         { href: 'https://www.jiumodiary.com/', icon: 'icon-self-J', text: '鸠摩' },
//     ]
// }

// {
//     title: '中医学',
//     icon: 'icon-self-zhongyike',
//     items: [
//         { href: 'https://www.tcmbe.com/', icon: 'icon-self-hulu', text: '华夏中医论坛' },
//         { href: 'https://www.kunluncangyao.com/', icon: 'icon-self-taiji', text: '中医资源网' },
//         { href: 'http://zyzj.cn/', icon: 'icon-self-jia', text: '中医之家' },
//         { href: 'https://cmlearning.info/', icon: 'icon-self--jing', text: '大医精诚' },
//         { href: 'https://www.zysj.com.cn/', icon: 'icon-self-a-37zhongyike38zhongyiquanke', text: '中医世家' },
//         { href: 'http://www.mst1739.com/yidao/yuedu.php', icon: 'icon-self-guji', text: '中医古籍' }
//     ]
// },

//#endregion
