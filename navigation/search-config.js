export const SEARCH_STORAGE_KEYS = {
    engine: 'search_engine',
    blank: 'search_blank'
};

export const SEARCH_ENGINES = [
    {
        id: 'type-bing',
        action: 'https://cn.bing.com/search?q=',
        placeholder: 'Bing搜索',
        labelParts: [{ text: 'Bing', color: '#048787' }]
    },
    {
        id: 'type-google',
        action: 'https://www.google.com/search?q=',
        placeholder: '谷歌搜索',
        labelParts: [
            { text: 'G', color: '#3B83FA' },
            { text: 'o', color: '#F3442C' },
            { text: 'o', color: '#FFC300' },
            { text: 'g', color: '#4696F8' },
            { text: 'l', color: '#2CAB4E' },
            { text: 'e', color: '#F54231' }
        ]
    },
    {
        id: 'type-sougou',
        action: 'https://weixin.sogou.com/weixin?type=2&query=',
        placeholder: '微信公众号搜索',
        labelParts: [{ text: '微信', color: '#FF8022' }]
    },
    {
        id: 'type-book',
        action: 'https://zh.annas-archive.org/search?q=',
        placeholder: '书籍搜索',
        labelParts: [{ text: '书籍', color: '#000000' }]
    }
];
