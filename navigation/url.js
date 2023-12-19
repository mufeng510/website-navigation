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

function myFunction() {
    var listItems = [
        {
            title: '热门常用',
            icon: 'icon-remen',
            items: [
                { href: 'https://ai.vercel.yq59.top/', icon: 'icon-self-ic-chatgpt', text: 'ChatGPT Next' },
                { href: 'https://chat.openai.com/', icon: 'icon-self-chatgpticon', text: 'ChatGPT官方' },
                { href: 'https://test.hyper-ai.top/', icon: 'icon-self-xueshubaogao', text: 'GPT学术优化' }
            ]
        },
        {
            title: '私有云',
            icon: 'icon-self-siyouyun',
            items: [
                { href: 'https://alist.yq59.top/', icon: 'icon-self-alist', text: '文件列表' },
                { href: 'https://photo.yq59.top/', icon: 'icon-self-chatgpticon', text: '相册' }
            ]
        },
        {
            title: '视频媒体',
            icon: 'icon-shipin',
            items: [
                { href: 'https://v.qq.com/', icon: 'icon-tengxunshipin', text: '腾讯视频' },
                { href: 'https://www.youku.com/', icon: 'icon-youku', text: '优酷' },
                { href: 'https://www.iqiyi.com/', icon: 'icon-aiqiyi', text: '爱奇艺' },
                { href: 'https://tv.cctv.com/live/index.shtml', icon: 'icon-cctv', text: 'CCTV直播' },
                { href: 'https://www.youtube.com/', icon: 'icon-youtube', text: 'Youtube' },
                { href: 'http://www.acfun.cn/index.html', icon: 'icon-acfun', text: 'ACFUN' },
                { href: 'https://www.bilibili.com/', icon: 'icon-bili', text: '哔哩哔哩' },
                { href: 'https://k1080.net/', icon: 'icon-yingshi', text: 'K1080' },
                { href: 'https://www.nfmovies.com/', icon: 'icon-netflix', text: '奈非影视' },
                { href: 'https://yunbtv.com/', icon: 'icon-yunbo', text: '云播TV' }
            ]
        },
        {
            title: '购物',
            icon: 'icon-gouwuche',
            items: [
                { href: 'https://www.taobao.com/', icon: 'icon-taobao', text: '淘宝网' },
                { href: 'https://www.jd.com', icon: 'icon-jingdong', text: '京东' },
                { href: 'https://www.suning.com/', icon: 'icon-suning', text: '苏宁易购' },
                { href: 'http://you.163.com/', icon: 'icon-yanxuan', text: '网易严选' },
                { href: 'https://www.amazon.com/', icon: 'icon-amazon', text: '亚马逊' },
                { href: 'http://www.dangdang.com/', icon: 'icon-dangdang', text: '当当' }
            ]
        },
        {
            title: '设计视觉',
            icon: 'icon-sheji',
            items: [
                { href: 'https://hao.5iux.cn/', icon: 'icon-daohang1', text: '设计导航' },
                { href: 'https://www.behance.net/', icon: 'icon-behance', text: 'Behance' },
                { href: 'https://www.dribbble.com/', icon: 'icon-dribbble', text: 'Dribbble' },
                { href: 'https://www.zcool.com.cn/', icon: 'icon-zhanku', text: '站酷' },
                { href: 'https://www.iconfont.cn/', icon: 'icon-iconfont', text: '阿里图标' },
                { href: 'https://www.iconfinder.com/', icon: 'icon-eye', text: 'IconFinder' },
                { href: 'https://uiiiuiii.com/', icon: 'icon-jiaocheng', text: '优设教程' },
                { href: 'https://huaban.com/', icon: 'icon-huaban', text: '花瓣' }
            ]
        },
        {
            title: '社交资讯',
            icon: 'icon-msg',
            items: [
                { href: 'https://www.zhihu.com/', icon: 'icon-zhihu', text: '知乎' },
                { href: 'https://www.douban.com/', icon: 'icon-douban', text: '豆瓣' },
                { href: 'https://www.jianshu.com/', icon: 'icon-jianshu', text: '简书' },
                { href: 'https://www.weibo.com', icon: 'icon-weibo', text: '微博' },
                { href: 'https://www.v2ex.com/', icon: 'icon-v2ex', text: 'V2EX' },
                { href: 'https://www.instagram.com', icon: 'icon-instagram', text: 'Instagram' },
                { href: 'https://www.twitter.com', icon: 'icon-twitter', text: 'Twitter' },
                { href: 'https://www.facebook.com', icon: 'icon-facebook', text: 'Facebook' }
            ]
        },
        {
            title: '邮箱',
            icon: 'icon-youxiang',
            items: [
                { href: 'https://mail.google.com/mail/u/0/#inbox', icon: 'icon-gmail', text: 'Gmail' },
                { href: 'https://outlook.live.com/mail/', icon: 'icon-windows', text: 'Hotmail' },
                { href: 'https://mail.163.com/', icon: 'icon-wangyi', text: '网易邮箱' },
                { href: 'https://mail.sina.com.cn/', icon: 'icon-xinlangwang', text: '新浪邮箱' },
                { href: 'https://mail.qq.com/', icon: 'icon-QQ', text: 'QQ邮箱' },
                { href: 'https://qiye.aliyun.com/', icon: 'icon-yunyouxiang', text: '阿里邮箱' }
            ]
        },
        {
            title: '工具',
            icon: 'icon-ai-tool',
            items: [
                { href: 'https://tools.miku.ac/', icon: 'icon-ai-tool', text: 'Miku工具' },
                { href: 'https://ip233.cn/', icon: 'icon-wangluo', text: 'IP查询' },
                { href: 'https://translate.google.cn/?hl=zh-CN', icon: 'icon-fanyi', text: '谷歌翻译' },
                { href: 'http://www.slimego.cn/', icon: 'icon-shilaimu', text: '史莱姆' },
                { href: 'https://feedly.com', icon: 'icon-feedly', text: 'Feedly' },
                { href: 'https://pandao.github.io/editor.md/index.html', icon: 'icon-md', text: 'MD编辑器' },
                { href: 'http://cubic-bezier.com', icon: 'icon-quxian', text: '贝赛尔曲线' },
                { href: 'https://5iux.cn/base64/', icon: 'icon-base64', text: 'Base64' },
                { href: 'https://javascriptobfuscator.com/Javascript-Obfuscator.aspx', icon: 'icon-jshunxiao', text: 'JS混淆器' },
                { href: 'https://ping.pe', icon: 'icon-wangluo1', text: 'Ping.pe' },
                { href: 'https://ping.chinaz.com/', icon: 'icon-pingup', text: '站长Ping' },
                { href: 'https://apkdl.in/', icon: 'icon-anzhuo', text: 'APK下载' }
            ]
        },
        {
            title: '开发',
            icon: 'icon-kongzhitai',
            items: [
                { href: 'http://www.w3school.com.cn/', icon: 'icon-h5', text: 'W3school' },
                { href: 'https://github.com/', icon: 'icon-github', text: 'Github' },
                { href: 'https://codepen.io/', icon: 'icon-codepen', text: 'Codepen' },
                { href: 'https://www.52pojie.cn/', icon: 'icon-theater-masks', text: '吾爱破解' },
                { href: 'https://segmentfault.com/', icon: 'icon-msg', text: 'SF思否' },
                { href: 'https://cdnjs.com/', icon: 'icon-cdnjs', text: 'CdnJs' },
                { href: 'https://fontawesome.com/icons?d=gallery&m=free', icon: 'icon-font-awesome', text: 'Font A.' },
                { href: 'https://msdn.itellyou.cn/', icon: 'icon-windows', text: 'MSDN下载' },
                { href: 'https://dash.cloudflare.com/', icon: 'icon-cloudflare', text: 'C. flare' },
                { href: 'https://www.swiper.com.cn/', icon: 'icon-S', text: 'Swiper' }
            ]
        },
        {
            title: '搜索引擎',
            icon: 'icon-sousuo',
            items: [
                { href: 'https://www.google.com/', icon: 'icon-google', text: 'Google' },
                { href: 'https:/m.baidu.com/?pu=sz%401321_480&wpo=btmfast', icon: 'icon-icon_baidulogo', text: '百度' },
                { href: 'https://duckduckgo.com/', icon: 'icon-duck', text: 'DuckGo' },
                { href: 'https://www.bing.com/', icon: 'icon-bing', text: 'Bing' },
                { href: 'https://www.sogou.com/', icon: 'icon-sougou', text: '搜狗' },
                { href: 'https://www.naver.com/', icon: 'icon-icon-test', text: 'NAVER' },
                { href: 'https://mijisou.com/', icon: 'icon-mf-a-034_tupian-19', text: '秘迹' },
                { href: 'https://www.dogedoge.com/', icon: 'icon-gougou', text: '多吉' }
            ]
        }
    ];

    supportsIPv6()
        .then((res) => {
            console.log('IPv6 is supported.');
            // 根据条件更新href值
            listItems.forEach((category) => {
                category.items.forEach((item) => {
                    item.href = updateHref(item.href);
                });
            });
        })
        .catch(() => {
            console.log('IPv6 is not supported.');
        })
        .finally(() => {
            console.log(listItems);
            // 找到要渲染的 ul 元素
            var ulElement = document.querySelector('#urlContainer');

            // 遍历数组，构建 HTML 字符串
            var htmlString = '<ul class="mylist row">';
            listItems.forEach(function (category) {
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
            ulElement.innerHTML = htmlString;
        });
}

// 使用事件监听器绑定 "load" 事件
window.addEventListener('load', myFunction);
