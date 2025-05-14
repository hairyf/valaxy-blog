---
title: Electron 桌面开发应用
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 17:51:00
---

[Electron](https://www.electronjs.org/) 是一个开源的框架，用于构建跨平台的桌面应用程序。它由GitHub开发，并且被许多知名的应用程序使用，如 [Visual Studio Code](https://code.visualstudio.com/)、[Slack](https://slack.com/intl) 和 [Discord](https://discord.com/) 等。

Electron 最初是为了开发 GitHub 的桌面客户端而创建的，它的前身是 Atom Shell。它的设计目标是允许开发者使用 Web 技术，如 HTML、CSS 和 JavaScript 来构建桌面应用程序，而不需要了解底层的操作系统的特定细节。

以下是 Electron 的一些关键特点和优势：

- 跨平台：Electron 可以在多个操作系统上运行，包括 Windows、macOS 和 Linux。这意味着开发者可以使用相同的代码库来构建适用于不同平台的应用程序，从而提高开发效率和代码重用性。

- 基于Web技术：开发者可以使用熟悉的Web技术来构建应用程序界面，包括 HTML、CSS 和 JavaScript。这使得Web开发者可以迅速上手并开始构建桌面应用程序，而无需学习额外的桌面开发技术。

- 强大的生态系统：Electron 拥有庞大的生态系统，包括许多第三方库和插件，可以帮助开发者实现各种功能和扩展应用程序的能力。开发者可以从已有的库中选择适合自己需求的工具，加速开发过程。

- 自定义能力：Electron 提供了灵活的自定义能力，开发者可以根据自己的需求定制应用程序的外观和行为。这意味着开发者可以实现与传统桌面应用程序相似的用户体验，同时通过Web技术带来更多的创新和交互方式。

<!-- more -->

## Electron 安装

```sh
pnpm add electron -D
```

如果你一直卡在运行 electron scripts 上，可通过配置 CDN 解决：

以 China CDN 为例:

```sh
pnpm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
```

> 注意，如果你用 yarn 或 npm 不能用 pnpm 的设置，他们都要单独设置

删除 node_modules 后重新运行安装命令，如果没有运行成功，则运行 `node node_modules/electron/install.js` 文件手动安装。

## 初始化项目

1. 安装 typescript，初始化：

```sh
pnpm add typescript -D
pnpm tsc init
```

2. 在 package.json 里配置 npm 脚本：

```json
{
  "scripts": {
    "start": "npm run build && electron ./dist/main.js",
    "build": "tsc",
    "watch": "tsc -w"
  }
}
```

3. 在项目根目录下创建文件 index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electron Demo</title>
</head>
<body>
  hello Electron
</body>
</html>
```

4. 在项目根目录下创建 index.ts 文件，这是程序的入口文件：

```ts
import { BrowserWindow, app } from 'electron'

// 主进程
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // 窗口通过 url 加载
  // win.loadURL('https://github.com/')

  // 窗口通过 file 加载
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
```

html 中处理控制台警告：

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src * data:; script-src 'self'; style-src 'self' 'unsafe-inline'">
```

## 关闭窗口和保留窗口

```ts
function watchReloadWindow() {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow()
  })
}

// 所有窗口关闭
app.on('window-all-closed', () => {
  console.log(100)
  // 对于 MacOS 系统 > 关闭窗口时，直接退出应用
  if (process.platform === 'darwin')
    app.quit()
})

// 当窗口就绪
app.whenReady()
  .then(createWindow)
  // 在 MacOS 下，当全部窗口关闭，点击 dock 图表，再次打开。
  .then(watchReloadWindow)
```

```ts
const win = new BrowserWindow({
  width: 1000,
  height: 800,
  webPreferences: {
    // 预加载文件
    preload: path.resolve(__dirname, './preload.js'),
    // 沙盒关闭
    sandbox: false
  }
})
```

```ts
import { writeFile } from 'node:fs'
import { contextBridge } from 'electron'

writeFile('./example.txt', 'abc', () => {
  // 在页面中打印
  console.log('done.')
})

// 注入 window 变量
contextBridge.exposeInMainWorld('api', {
  platform: process.platform
})
```

渲染进程访问变量：

```ts
console.log(window.platform)
```
