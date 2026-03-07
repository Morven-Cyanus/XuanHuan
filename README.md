# 玄荒道府

> 繁星峥嵘而渐灭，浮华避世而逍遥

一个以**仙侠玄幻**为主题的 Vue 3 单页应用，呈现玄荒道府的世界观设定。

---

## 项目简介

**玄荒道府**是神域第一道统，始建于天元初代，由天府三圣石辰阳创立。本项目以网页形式还原道府的核心典籍，涵盖起源、七圣、主脉与诗文四大篇章。

---

## 技术栈

| 技术                                      | 版本 | 用途                        |
| ----------------------------------------- | ---- | --------------------------- |
| [Vue 3](https://vuejs.org/)               | ^3.4 | 前端框架（Composition API） |
| [Vue Router 4](https://router.vuejs.org/) | ^4.3 | 客户端路由                  |
| [Vite 5](https://vitejs.dev/)             | ^5.0 | 构建工具与开发服务器        |

---

## 目录结构

```
XuanHuan/
├── public/
│   └── images/          # 背景图片资源
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css      # 全局 CSS 变量与基础样式
│   ├── components/
│   │   ├── AppSidebar.vue      # 左侧导航栏
│   │   ├── GlassPanel.vue      # 玻璃拟态面板（含金角装饰）
│   │   └── PageLayout.vue      # 通用页面布局（含返回按钮）
│   ├── composables/
│   │   └── useStarCanvas.js    # 星空画布动画逻辑
│   ├── data/
│   │   ├── sages.js            # 天府七圣数据
│   │   ├── clans.js            # 十三主脉数据
│   │   └── poem.js             # 神域天府吟诗文
│   ├── router/
│   │   └── index.js            # 路由配置
│   ├── views/
│   │   ├── HomeView.vue        # 主殿（首页）
│   │   ├── OriginView.vue      # 天府起源
│   │   ├── SevenSagesView.vue  # 天府七圣
│   │   ├── ThirteenClansView.vue # 十三主脉
│   │   └── PoemView.vue        # 神域天府吟
│   ├── App.vue                 # 根组件
│   └── main.js                 # 应用入口
├── index.html                  # Vite HTML 入口
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器访问 [http://localhost:5173](http://localhost:5173)

### 构建生产版本

```bash
npm run build
```

构建产物输出至 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

---

## 页面路由

| 路径              | 页面       | 简介                       |
| ----------------- | ---------- | -------------------------- |
| `/`               | 道府主殿   | 动态星空 + 飘落花瓣的主页  |
| `/origin`         | 天府起源   | 玄荒道府的创立历史         |
| `/seven-sages`    | 天府七圣   | 七位圣者的道则与传奇       |
| `/thirteen-clans` | 十三主脉   | 北斗七脉与六合脉的详细介绍 |
| `/poem`           | 神域天府吟 | 归元道人阳辰所著长诗       |

---

## 设计特色

- **星空背景**：Canvas 绘制的 220 颗闪烁星体，金色与银蓝双色调
- **飘落花瓣**：首页随机生成的飘落仙花动效
- **玻璃拟态**：深色毛玻璃面板配合金色边框与四角装饰
- **页面过渡**：路由切换时的淡入淡出 + 位移动画
- **响应式布局**：移动端自动收缩侧边栏为图标模式

---

## 图片资源

背景图片存放于 `public/images/` 目录，按页面对应：

| 文件     | 使用页面   |
| -------- | ---------- |
| `a1.jpg` | 十三主脉   |
| `c1.png` | 天府七圣   |
| `d1.png` | 天府起源   |
| `e1.png` | 神域天府吟 |

---

## 许可

本项目为个人创作项目，世界观内容版权归原作者所有。
