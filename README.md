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

## 项目说明

- `navigation/index.html`: 页面结构与资源入口
- `navigation/main.js`: 页面启动入口，负责组织各模块初始化
- `navigation/search.js`: 搜索表单渲染、状态恢复与提交行为
- `navigation/sou.js`: 搜索建议请求与联想词交互
- `navigation/url.js`: 导航列表渲染
- `navigation/navigation-data.js`: 导航分组与链接数据
- `navigation/search-config.js`: 搜索引擎配置与本地存储键
