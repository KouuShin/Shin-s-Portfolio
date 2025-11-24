# Homepage 更新说明

## 主要变更

### 1. 页面结构改变
- **从滚动页面改为单页应用（SPA）**
- 每个页面都是固定的全屏视图（100vw x 100vh）
- 不能向下滚动，只能通过点击右上角菜单切换页面
- 使用 `position: fixed` 确保页面不滚动

### 2. 导航栏位置和样式
**位置**: 右上角（不再是右侧中间）
- `position: fixed`
- `right: 64px` (right-16)
- `top: 48px` (top-12)

**文字样式**:
- 字体: HuXiaoBo-NanShenTi
- 字号: 32px
- Letter spacing: 16% (0.16em)
- 文字右对齐 (`text-align: right`)
- 颜色: 白色 (#FFFFFF)，激活时为霓虹绿 (#C0F200)

### 3. Homepage 设计

#### 布局
- 全屏居中布局
- 个人图片在页面正中间
- "SHIN KOU" 文字在图片上方

#### SHIN KOU 文字
- 字体: ZCOOL-GDH
- 字号: **240px** (从 180px 增大)
- 字重: 900
- 颜色: #C0F200
- 效果: 强烈霓虹发光 (`.neon-glow`)
- Letter spacing: 0.05em
- 行高: 0.85

#### 个人图片
- 尺寸: 420x420px
- **圆角: 80px** (从 40px 增大)
- **Drop shadow**: `drop-shadow(0 20px 60px rgba(192, 242, 0, 0.4))`
- **Background blur**: `backdrop-filter: blur(10px)`
- 位置: 页面正中央

#### 背景效果
- 纯黑背景 (#000000)
- 径向渐变发光，中心在图片位置
- `radial-gradient(circle at 50% 50%, rgba(192, 242, 0, 0.3) 0%, rgba(192, 242, 0, 0.15) 25%, transparent 50%)`

### 4. 页面切换机制

#### App.tsx 实现
```typescript
const [currentPage, setCurrentPage] = useState('home');

// 根据 currentPage 渲染对应组件
switch (currentPage) {
  case 'home': return <Hero />;
  case 'about': return <About />;
  case 'project': return <Portfolio />;
  case 'thoughts': return <Thoughts />;
  case 'design': return <Design />;
  case 'contact': return <Contact />;
}
```

#### Navigation 组件
- 接收 `currentPage` 和 `onPageChange` props
- 点击菜单项调用 `onPageChange(pageId)`
- 不再使用 `scrollIntoView`

### 5. 所有页面统一规范

每个页面组件都使用相同的容器样式：
```css
{
  backgroundColor: '#000000',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '80px'
}
```

### 6. 菜单项
- About (对应 home 页面)
- Project
- Thoughts
- Design
- Contact

## 技术要点

### 防止滚动
```css
overflow: hidden  /* 在 App 容器上 */
position: fixed   /* 在每个页面上 */
```

### 页面切换
- 使用 React state 管理当前页面
- 通过条件渲染显示对应页面组件
- 可以后续添加页面切换动画

### 响应式考虑
- 使用 `100vw` 和 `100vh` 确保全屏
- 所有页面都是固定定位
- 导航栏固定在右上角

## 与之前的区别

| 特性 | 之前 | 现在 |
|------|------|------|
| 页面类型 | 滚动页面 | 单页应用 |
| 导航位置 | 右侧中间 | 右上角 |
| 导航字号 | 28px | 32px |
| Letter spacing | - | 16% |
| 标题字号 | 180px | 240px |
| 图片圆角 | 40px | 80px |
| 图片位置 | 左上角 | 正中央 |
| 图片效果 | 边框 | Drop shadow + Blur |
| 页面切换 | 滚动 | 点击菜单 |

## 视觉效果增强

1. **更大的标题** - 240px 字号更有冲击力
2. **居中布局** - 图片和文字都居中，更加平衡
3. **阴影和模糊** - 增加图片的层次感和科技感
4. **更大的圆角** - 80px 圆角更加柔和现代
5. **右上角导航** - 更符合现代网页设计习惯

## 下一步优化建议

1. 添加页面切换动画（淡入淡出或滑动）
2. 添加键盘导航支持（方向键切换页面）
3. 添加页面指示器（显示当前在第几页）
4. 优化移动端体验
5. 添加加载动画
