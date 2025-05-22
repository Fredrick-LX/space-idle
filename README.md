# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Space Idle

一个基于 Vue 3 + TypeScript + Vite 开发的太空主题放置类游戏。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - JavaScript 的超集
- Vite - 下一代前端构建工具
- Pinia - Vue 的状态管理库
- Vue Router - Vue.js 的官方路由
- Pixi.js - 2D WebGL 渲染引擎
- Socket.io - 实时双向通信库

## 项目设置

### 安装依赖

```bash
pnpm install
```

### 开发环境运行

```bash
pnpm dev
```

### 生产环境构建

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 项目结构

```
space-idle/
├── src/           # 源代码目录
├── public/        # 静态资源目录
├── .vscode/       # VS Code 配置
├── index.html     # 入口 HTML 文件
└── vite.config.ts # Vite 配置文件
```

## 开发指南

本项目使用 Vue 3 的 `<script setup>` 语法，更多信息请参考 [Vue 3 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)。

TypeScript 相关配置和 IDE 支持请参考 [Vue TypeScript 指南](https://vuejs.org/guide/typescript/overview.html#project-setup)。

## 许可证

[MIT](LICENSE)