# Sink · 个人作品集

基于 React、Vite、TypeScript 和 Tailwind CSS 的作品集。当前版本采用米白纸感与蓝色强调，通过首页、作品和关于我三个原地切换视图展示内容。

## 开发与构建

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

默认预览地址为 http://127.0.0.1:884/。发布前运行类型检查与生产构建。沿用原 Vercel 配置，构建目录为 dist，不提交生成物。

## 当前内容

- 三个 Dify 插件：Engineering Source Reader、Image Tiler、STEP Text Converter。
- Dify 工程资料处理流程、制造业设计工程师业务流程。
- 制造业工程设计智能体平台，标注为设计中产品。
- 业务需求分析 Skill（已接入截图）、业务需求转 Agent 架构 Skill（截图待补充）。
- 原有 AI 明检、Synapse、C2C Bike Rental、AI Sleep Companion，保留完整案例、图片与视频。

## 文件与维护

- `App.tsx`：页面结构、新展品数据、筛选、截图详情与导航。
- `content/portfolio.ts`：个人资料、时间线及原有项目的完整案例和媒体数据。
- `components/ProjectCaseViewer.tsx`：案例过程、图集翻阅、图片放大与视频播放。
- `styles/studio.css`：新版布局、中文字体、响应式与交互样式。
- `styles/globals.css`：全局设计变量与基础样式。
- `assets/`：正式使用的照片、截图、封面与视频。
- `docs/`：改版记录和预览截图。

新增插件、流程、Skill 或 Agent，在 App.tsx 的 items 中维护；新增原有类型案例，在 content/portfolio.ts 的 projects 中维护。截图存入 assets 后使用模块导入，不引用临时目录。旧版 components/sections 和 components/modals 暂保留供参考，当前入口不使用它们。

中文采用 Noto Sans SC，英文主要采用 Archivo。外部字体不可用时使用系统字体回退。
