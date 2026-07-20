# 个人作品集网站

基于 React、Vite、TypeScript 和 Tailwind CSS 的个人在线作品集。

## 常用命令

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

提交或发布前至少运行 `npm run typecheck` 和 `npm run build`。

## 项目结构

```text
assets/                 网站使用的图片与视频
components/
  modals/               作品与图片弹窗
  sections/             首页各内容区块
content/
  portfolio.ts          个人资料、时间线和作品内容
styles/
  globals.css           全局设计变量与基础样式
App.tsx                 页面区块组合与页脚
main.tsx                React 入口
```

## 更新内容

- 修改个人资料、LinkedIn、时间线：编辑 `content/portfolio.ts` 顶部对应数据。
- 新增作品：在 `content/portfolio.ts` 的 `projects` 数组中复制一个现有项目对象，修改唯一 `id`、文字和资源引用。
- 新增媒体：放入 `assets/`，再从 `content/portfolio.ts` 导入使用。
- 修改版块布局：进入 `components/sections/` 对应目录。
- 修改弹窗展示：进入 `components/modals/`。

项目配置了 Vercel 部署，构建产物由 Vite 生成，无需提交 `dist/`。
