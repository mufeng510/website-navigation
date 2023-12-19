// 在这里定义你的 JavaScript 代码
function myFunction() {
    var listItems = [
        {
            title: '热门常用',
            icon: 'remen',
            items: [
                { href: 'https://www.taobao.com', icon: 'taobao', text: '淘宝网' },
                { href: 'https://www.pinterest.com/', icon: 'pinterest', text: 'Pinterest' },
                { href: 'https://huaban.com/', icon: 'huaban', text: '花瓣' },
                { href: 'https://www.weibo.com', icon: 'weibo', text: '微博' },
                { href: 'https://www.nfmovies.com/', icon: 'netflix', text: '奈非影视' }
            ]
        },
        {
            title: '视频媒体',
            icon: 'shipin',
            items: [
                { href: 'https://v.qq.com/', icon: 'tengxunshipin', text: '腾讯视频' },
                { href: 'https://www.youku.com/', icon: 'youku', text: '优酷' },
                { href: 'https://www.iqiyi.com/', icon: 'aiqiyi', text: '爱奇艺' },
                { href: 'https://tv.cctv.com/live/index.shtml', icon: 'cctv', text: 'CCTV直播' },
                { href: 'https://www.youtube.com/', icon: 'youtube', text: 'Youtube' },
                { href: 'http://www.acfun.cn/index.html', icon: 'acfun', text: 'ACFUN' },
                { href: 'https://www.bilibili.com/', icon: 'bili', text: '哔哩哔哩' },
                { href: 'https://k1080.net/', icon: 'yingshi', text: 'K1080' },
                { href: 'https://yunbtv.com/', icon: 'yunbo', text: '云播TV' }
            ]
        },
        {
            title: '购物',
            icon: 'gouwuche',
            items: [
                { href: 'https://www.taobao.com/', icon: 'taobao', text: '淘宝网' },
                { href: 'https://www.jd.com', icon: 'jingdong', text: '京东' },
                { href: 'https://www.suning.com/', icon: 'suning', text: '苏宁易购' },
                { href: 'http://you.163.com/', icon: 'yanxuan', text: '网易严选' },
                { href: 'https://www.amazon.com/', icon: 'amazon', text: '亚马逊' },
                { href: 'http://www.dangdang.com/', icon: 'dangdang', text: '当当' }
            ]
        },
        {
            title: "设计视觉",
            icon: "sheji",
            items: [
              { href: "https://hao.5iux.cn/", icon: "daohang1", text: "设计导航" },
              { href: "https://www.behance.net/", icon: "behance", text: "Behance" },
              { href: "https://www.dribbble.com/", icon: "dribbble", text: "Dribbble" },
              { href: "https://www.zcool.com.cn/", icon: "zhanku", text: "站酷" },
              { href: "https://www.iconfont.cn/", icon: "iconfont", text: "阿里图标" },
              { href: "https://www.iconfinder.com/", icon: "eye", text: "IconFinder" },
              { href: "https://uiiiuiii.com/", icon: "jiaocheng", text: "优设教程" }
            ]
          },
          {
            title: "社交资讯",
            icon: "msg",
            items: [
              { href: "https://www.zhihu.com/", icon: "zhihu", text: "知乎" },
              { href: "https://www.douban.com/", icon: "douban", text: "豆瓣" },
              { href: "https://www.jianshu.com/", icon: "jianshu", text: "简书" },
              { href: "https://www.v2ex.com/", icon: "v2ex", text: "V2EX" },
              { href: "https://www.instagram.com", icon: "instagram", text: "Instagram" },
              { href: "https://www.twitter.com", icon: "twitter", text: "Twitter" },
              { href: "https://www.facebook.com", icon: "facebook", text: "Facebook" }
            ]
          },
          {
            title: "邮箱",
            icon: "youxiang",
            items: [
              { href: "https://mail.google.com/mail/u/0/#inbox", icon: "gmail", text: "Gmail" },
              { href: "https://outlook.live.com/mail/", icon: "windows", text: "Hotmail" },
              { href: "https://mail.163.com/", icon: "wangyi", text: "网易邮箱" },
              { href: "https://mail.sina.com.cn/", icon: "xinlangwang", text: "新浪邮箱" },
              { href: "https://mail.qq.com/", icon: "QQ", text: "QQ邮箱" },
              { href: "https://qiye.aliyun.com/", icon: "yunyouxiang", text: "阿里邮箱" }
            ]
          },
          {
            title: "工具",
            icon: "ai-tool",
            items: [
              { href: "https://tools.miku.ac/", icon: "ai-tool", text: "Miku工具" },
              { href: "https://ip233.cn/", icon: "wangluo", text: "IP查询" },
              { href: "https://translate.google.cn/?hl=zh-CN", icon: "fanyi", text: "谷歌翻译" },
              { href: "http://www.slimego.cn/", icon: "shilaimu", text: "史莱姆" },
              { href: "https://feedly.com", icon: "feedly", text: "Feedly" },
              { href: "https://pandao.github.io/editor.md/index.html", icon: "md", text: "MD编辑器" },
              { href: "http://cubic-bezier.com", icon: "quxian", text: "贝赛尔曲线" },
              { href: "https://5iux.cn/base64/", icon: "base64", text: "Base64" },
              { href: "https://javascriptobfuscator.com/Javascript-Obfuscator.aspx", icon: "jshunxiao", text: "JS混淆器" },
              { href: "https://ping.pe", icon: "wangluo1", text: "Ping.pe" },
              { href: "https://ping.chinaz.com/", icon: "pingup", text: "站长Ping" },
              { href: "https://apkdl.in/", icon: "anzhuo", text: "APK下载" }
            ]
          }
          ,
          {
            title: "开发",
            icon: "kongzhitai",
            items: [
              { href: "http://www.w3school.com.cn/", icon: "h5", text: "W3school" },
              { href: "https://github.com/", icon: "github", text: "Github" },
              { href: "https://codepen.io/", icon: "codepen", text: "Codepen" },
              { href: "https://www.52pojie.cn/", icon: "theater-masks", text: "吾爱破解" },
              { href: "https://segmentfault.com/", icon: "msg", text: "SF思否" },
              { href: "https://cdnjs.com/", icon: "cdnjs", text: "CdnJs" },
              { href: "https://fontawesome.com/icons?d=gallery&m=free", icon: "font-awesome", text: "Font A." },
              { href: "https://msdn.itellyou.cn/", icon: "windows", text: "MSDN下载" },
              { href: "https://dash.cloudflare.com/", icon: "cloudflare", text: "C. flare" },
              { href: "https://www.swiper.com.cn/", icon: "S", text: "Swiper" }
            ]
          }
          ,
          {
            title: '搜索引擎',
            icon: 'sousuo',
            items: [
              { href: 'https://www.google.com/', icon: 'google', text: 'Google' },
              { href: 'https:/m.baidu.com/?pu=sz%401321_480&wpo=btmfast', icon: 'icon_baidulogo', text: '百度' },
              { href: 'https://duckduckgo.com/', icon: 'duck', text: 'DuckGo' },
              { href: 'https://www.bing.com/', icon: 'bing', text: 'Bing' },
              { href: 'https://www.sogou.com/', icon: 'sougou', text: '搜狗' },
              { href: 'https://www.naver.com/', icon: 'icon-test', text: 'NAVER' },
              { href: 'https://mijisou.com/', icon: 'miji', text: '秘迹' },
              { href: 'https://www.dogedoge.com/', icon: 'gougou', text: '多吉' }
            ]
          }
          
          
    ];

    // 找到要渲染的 ul 元素
    var ulElement = document.querySelector('#urlContainer');

    // 遍历数组，构建 HTML 字符串
    var htmlString = '<ul class="mylist row">';
    listItems.forEach(function (category) {
        htmlString +=
            '<li class="title"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-' + category.icon + '"></use></svg> ' + category.title + '</li>';
        category.items.forEach(function (item) {
            htmlString +=
                '<li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="' +
                item.href +
                '" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-' +
                item.icon +
                '"></use></svg><span>' +
                item.text +
                '</span></a></li>';
        });
    });

    // 将 HTML 字符串填充到 ul 元素中
    ulElement.innerHTML = htmlString;
}

// 使用事件监听器绑定 "load" 事件
window.addEventListener('load', myFunction);
