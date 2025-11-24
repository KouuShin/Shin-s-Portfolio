# 设计参考文档

## 页面结构

### 页面顺序
1. **Home** (Hero) - 大标题 "SHIN KOU" + 个人照片
2. **About** - "AI·UX·Product" + 描述文字 + 个人照片
3. **Project** - 项目展示页面
4. **Thoughts** - 思考与洞察
5. **Design** - 设计作品集
6. **Contact** - 联系方式

## 颜色系统

```css
/* 主要颜色 */
背景色: #000000 (纯黑)
主题色: #C0F200 (霓虹绿/黄绿色)
文字色: #FFFFFF (白色)
灰色: #E5E5E5 (浅灰，用于占位区域)

/* 透明度变化 */
rgba(192, 242, 0, 0.25) - 25% 透明度（背景发光）
rgba(192, 242, 0, 0.3) - 30% 透明度（边框）
rgba(192, 242, 0, 0.6) - 60% 透明度（文字发光）
```

## 字体使用

### 标题字体
- **ZCOOL-GDH** (站酷高端黑)
  - 用于: 大标题 (SHIN KOU, THOUGHTS, DESIGN, CONTACT)
  - 字号: 120px - 180px
  - 字重: 900

### 副标题字体
- **HuXiaoBo-NanShenTi** (胡晓波男神体2.0)
  - 用于: 导航菜单、英文标题
  - 字号: 24px - 72px
  - 字重: 400 - 700

### 正文字体
- **YouYou-YiSong** (优优意宋)
  - 用于: 中文描述文字、项目标题
  - 字号: 24px - 48px
  - 字重: 300 - 400

## 布局规范

### 画布尺寸
- 宽度: 1440px
- 高度: 1024px
- 内边距: 80px

### 导航栏
- 位置: fixed, right: 48px, top: 50%
- 垂直居中: transform: translateY(-50%)
- 间距: 32px (space-y-8)
- 字号: 28px (text-2xl)

### 图片规格
- 首页照片: 380x380px, 圆角 40px
- About 照片: 480x640px, 圆角 50px
- 滤镜: grayscale(100%) brightness(0.9)
- 边框: 3-4px solid rgba(192, 242, 0, 0.3)

## 特效说明

### 霓虹发光效果
```css
/* 强烈发光 (.neon-glow) */
text-shadow: 
  0 0 10px #C0F200,
  0 0 20px #C0F200,
  0 0 30px #C0F200,
  0 0 40px #C0F200,
  0 0 70px #C0F200,
  0 0 80px #C0F200,
  0 0 100px #C0F200;

/* 柔和发光 (.neon-glow-soft) */
text-shadow: 
  0 0 20px rgba(192, 242, 0, 0.8),
  0 0 40px rgba(192, 242, 0, 0.6),
  0 0 60px rgba(192, 242, 0, 0.4);
```

### 径向渐变背景
```css
/* 中心发光 */
background: radial-gradient(
  circle at 40% 50%, 
  rgba(192, 242, 0, 0.25) 0%, 
  rgba(192, 242, 0, 0.1) 30%, 
  transparent 60%
);

/* 左侧发光 */
background: radial-gradient(
  circle at 10% 50%, 
  rgba(192, 242, 0, 0.2) 0%, 
  transparent 50%
);
```

## 交互效果

### 导航菜单悬停
- 颜色变化: #FFFFFF → #C0F200
- 添加文字发光效果
- 过渡时间: 300ms

### 按钮/链接悬停
- 颜色变化
- 发光效果增强
- 平滑过渡

## 图标使用
- **hand-click.jpg** - 用于品牌标识
  - 尺寸: 40x40px
  - 滤镜: invert(1) (反色为白色)
  - 位置: SHIN KOU 文字旁边

## 响应式建议
虽然当前设计针对 1440x1024 画布，但建议：
- 平板: 适当缩小字号和间距
- 手机: 改为单列布局，导航改为底部或顶部
- 保持视觉风格一致性

## 品牌元素
- 主标识: "SHIN KOU" 大字 + 霓虹效果
- 辅助图标: hand-click 图标
- 配色: 黑色背景 + 霓虹绿
- 字体组合: 中英文混排，现代感强
