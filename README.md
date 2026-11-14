# website-navigation
个人网址导航

基于[5iux](https://github.com/5iux/5iux.github.io/tree/master)

## 开发与构建

```bash
npm install
npm run dev
```

发布构建：

```bash
npm run build
```

构建产物输出到 `dist/`。`Vite` 会为打包后的 `js` 和 `css` 生成带内容 hash 的文件名，部署时只要发布 `dist/` 目录，就能从架构上避免旧静态资源缓存导致的新导航项不生效问题。

## 局域网切换

页面顶部有一个「公网 / 局域网」切换按钮，点击立即切换，选择保存在 `localStorage`（`website-navigation:lan-mode`）。切换到「局域网」时，导航链接会按 `navigation/lan-config.js` 里的 `LAN_ORIGIN_MAP` 把源站替换为局域网地址（只替换 协议+主机+端口，路径与参数保留）。

局域网地址由一个常量决定：`LAN_HOST`（默认 192.168.31.13）、`LAN_PROTOCOL`（默认 http://）。`LAN_ORIGIN_MAP` 的 value 支持三种写法：留空 = 不映射；写端口号（如 `'31001'`）= 自动拼成 `http://192.168.31.13:31001`；写完整 origin = 原样使用（特殊条目用）。大部分条目填端口即可。

## 项目说明

- `navigation/index.html`: 页面结构与资源入口
- `navigation/main.js`: 页面启动入口，负责组织各模块初始化
- `navigation/search.js`: 搜索表单渲染、状态恢复与提交行为
- `navigation/sou.js`: 搜索建议请求与联想词交互
- `navigation/url.js`: 导航列表渲染
- `navigation/navigation-data.js`: 导航分组与链接数据
- `navigation/lan-config.js`: 公网↔局域网 origin 映射表（用户维护）
- `navigation/lan.js`: 局域网切换逻辑（重写链接、按钮状态）
- `navigation/search-config.js`: 搜索引擎配置与本地存储键
