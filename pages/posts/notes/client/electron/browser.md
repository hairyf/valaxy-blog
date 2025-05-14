---
title: Electron 窗口方法与事件
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 18:40:00
---

BrowserWindow 是 Electron 中用于创建和控制应用程序窗口的模块。每个 BrowserWindow 实例都代表一个独立的窗口，可以显示 Web 内容，并提供了许多配置选项和功能来满足应用程序的需求。

<!-- more -->

BrowserWindow 的一些主要特性和功能：

- 创建窗口：用于创建和管理桌面应用程序窗口，并提供了许多方法来控制窗口的状态，比如最大化、最小化、关闭等。

- 加载 Web 内容：可以使用 loadURL 方法加载一个本地或远程的 URL 到窗口中，也可以使用 loadFile 方法加载本地的 HTML 文件。

- 自定义窗口样式：可以通过设置 BrowserWindow 的属性来自定义窗口的外观和行为，例如设置窗口的标题、图标、背景色、透明度等。

- 窗口事件处理：可以通过监听窗口的事件来响应窗口的行为和状态变化，例如处理窗口的关闭事件、最小化和最大化事件、焦点变化事件等。

- 与主进程通信：BrowserWindow 可以通过 Electron 提供的 IPC 机制与主进程进行通信。可以发送消息给主进程，也可以接收主进程发送的消息。

- 窗口间通信：如果应用程序有多个窗口，可以使用 BrowserWindow 实例之间的 IPC 机制来实现窗口之间的通信，以便在不同窗口之间共享数据和状态。

- 窗口操作和控制：最小化、最大化、还原窗口大小，设置窗口是否可调整大小，显示和隐藏窗口等。

- Web 内容集成：BrowserWindow 支持与 Web 内容的集成，可以使用 JavaScript、HTML 和 CSS 来构建丰富的用户界面和互动体验。

## 加载窗口内容(win.loadURL/win.loadFile)

```ts
// 在主进程中.
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 600 })

// Load a remote URL
win.loadURL('https://github.com')

// Or load a local HTML file
win.loadFile('index.html')
```

> 注意: `win.loadURL(url[, options])` 和 `loadFile` 互斥

## 优化显示窗口

每次加载页面都是直接展示，用户突然就看到了，这不是一个好的本地应用使用体验 要使窗口显示时没有视觉闪烁，对于不同情况有两种解决方案。

在加载页面时，渲染进程第一次完成绘制时，如果窗口还没有被显示，渲染进程会发出 `ready-to-show` 事件 。 在此事件后显示窗口将没有视觉闪烁：

```ts
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({ show: false })
win.once('ready-to-show', () => win.show())
```

## 背景颜色

```ts
const win = new BrowserWindow({ backgroundColor: '#2e2c29' })
win.setBackgroundColor('hsl(230, 100%, 50%)')
win.setBackgroundColor('rgb(255, 145, 145)')
win.setBackgroundColor('#ff00a3')
win.setBackgroundColor('blueviolet')
```

## 父子窗口

通过使用 `parent` 选项，你可以创建子窗口：

```ts
const { BrowserWindow } = require('electron')

const top = new BrowserWindow()
const child = new BrowserWindow({
  // 可一起拖动
  parent: top,
  // 设置为模态窗口
  model: true
})
child.show()
top.show()
```

## 子窗显示与隐藏

```ts
child = new BrowserWindow({
  show: false
})

setTimeout(() => {
  child.show()
  setTimeout(() => child.hide(), 3000)
}, 2000)
```

## 无边框窗口

```ts
const win = new BrowserWindow({
  frame: false
})
```

而通过设置 `titleBarStyle: 'hidden'` 可以仅显示窗口控件:

```ts
const win = new BrowserWindow({
  titleBarStyle: 'hidden'
})
```

## 保留窗口状态

通过 `electron-win-state` 可保留程序刷新后的窗口状态。

```ts
import WinState from 'electron-win-state'

const winState = new WinState({
  defaultWidth: 800,
  defaultHeight: 600,
})

const browserWindow = new BrowserWindow({
  ...winState.winOptions,
  // your normal BrowserWindow options...
})

// Attach the required event listeners
winState.manage(this.browserWindow)
```

## 元素可拖拽

默认情况下, 无边框窗口是不可拖拽的。 应用程序需要在 CSS 中指定 `-webkit-app-region: drag` 来告诉 Electron 哪些区域是可拖拽的（如操作系统的标准标题栏），在可拖拽区域内部使用 `-webkit-app-region: no-drag` 则可以将其中部分区域排除。 请注意, 当前只支持矩形形状。

```html
<body style="user-select: none; -webkit-app-region: drag;">
```

通过 no-drag 可使一些特殊的元素无法拖动：

```css
input {
  -webkit-app-region: no-drag
}
```

## 最低宽高(minWidth/minHeight)

```ts
const win = new BrowserWindow({
  minWidth: 300,
  minHeight: 300
})
```

## 焦点事件

```ts
const win = new BrowserWindow({
  width: 400,
  height: 300,
})

win.on('focus', () => {
  console.log('mainWindow focused')
})

win.on('focus', () => {
  console.log('secWindow focused')
})

app.on('browser-window-focus', () => {
  console.log('App focused')
})
```

## 加载事件

```ts
// 页面加载完毕
win.webContents.on('did-finish-load')
// DOM 加载完毕
win.webContents.on('dom-ready')
```

## 右键上下文

```ts
wc.on('context-menu', (_event, params) => {
  console.log(`Context menu opened on: ${params.mediaType} at x:${params.x}, y:${params.y}`)
})

wc.on('context-menu', (_event, params) => {
  console.log(`User seleted text: ${params.selectionText}`)
  console.log(`Selection can be copied: ${params.editFlags.canCopy}`)
})
```

通过右键显示选择文本:

```ts
wc.on('context-menu', (_event, params) => {
  wc.executeJavaScript(`alert('${params.selectionText}')`)
})
```
