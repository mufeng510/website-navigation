// 局域网切换配置 —— 这个文件由你自己维护。
//
// 工作原理：
// 页面顶部有一个“公网 / 局域网”切换按钮，点击立即切换，选择保存在浏览器
// localStorage（website-navigation:lan-mode）。切换到“局域网”时，下方导航链接的
// 【源站】会按 LAN_ORIGIN_MAP 替换为局域网地址，路径、查询参数、hash 保持不变；
// 切换回“公网”时再换回来。

// 局域网主机地址（大部分服务都在这台机器上）。只写协议+主机即可，带不带端口都行；
// 如果 LAN 服务全是同一个 IP，只需要改这里，不用改下面的条目。
export const LAN_HOST = '192.168.31.13';

// LAN 服务默认使用的协议。覆盖单个条目时用完整 origin，不受这个影响。
export const LAN_PROTOCOL = 'http://';

// 公网 origin -> 局域网地址。value 支持三种写法：
//   ''         不映射，链接保持公网地址不变
//   '31001'    端口号 → 自动拼成 LAN_PROTOCOL + LAN_HOST + ':31001'
//   'https://192.168.31.20:8443'   完整 origin → 原样使用（单独 IP / 协议不同的条目用这个）
export const LAN_ORIGIN_MAP = {
    'https://dst.nas.yq59.top:31000': '',
    'https://chamber.nas.yq59.top:31000': 'http://192.168.31.64:35623',
    'https://cups.nas.yq59.top:31000': '631',
    'https://xhs.nas.yq59.top:31000': '31001',
    'https://claw.nas.yq59.top:31000': '31002',
    'https://workstation.nas.yq59.top:31000': '31003',
    'https://book.nas.yq59.top:31000': '31005',
    'https://xhs-product-selection.nas.yq59.top:31000': '31006',
    'https://bookmarks.nas.yq59.top:31000': '31007',
    'https://xhs-goods-copy.nas.yq59.top:31000': '31008',
    'https://web-node.nas.yq59.top:31000': '31009',
    'https://e450.nas.yq59.top:31000': '31010',
    'https://lucky.nas.yq59.top:31000': '',
    'https://dst.nas.yq59.top:31000': '',
};
