---
title: Electron 渲染进程与主线程通信
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 17:51:00
---

Electron 是一个用于构建跨平台桌面应用程序的开源框架。它由主进程和渲染进程组成。

主进程是 Electron 应用程序的入口点，负责管理应用程序的生命周期和系统级的操作，如窗口管理、文件系统访问等。

渲染进程是负责显示用户界面的组件，使用 Web 技术构建界面，如 HTML、CSS 和 JavaScript。每个渲染进程对应一个应用程序窗口，可以通过 IPC 与主进程进行通信。

![](https://pic.imgdb.cn/item/656f0bd5c458853aefd8c13e.png)

主进程使用 BrowserWindow 创建实例，主进程销毁后，对应的渲染进程回被终止。主进程与渲染进程通过 IPC 方式（事件驱动）进行通信。

<!-- more -->

## 渲染进程集成 Node 功能

```ts
const win = new BrowserWindow({
  // ...
  webPreferences: {
    // 渲染进程集成 Node
    nodeIntegration: true,
    // 关闭主/渲染进程隔离
    contextIsolation: false
  }
})
```

::: warning
不建议直接关闭隔离，这样不太安全
:::

## 预加载 Node 代码与数据

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
import { writeFile } from 'fs'
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

## ipcRenderer/webContents 消息转发

`webContents`是一个[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)。它负责渲染和控制网页，是[`BrowserWindow`](https://www.electronjs.org/docs/latest/api/browser-window)对象的一个属性。访问对象的示例 `webContents`：

```ts
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('https://github.com')

const contents = win.webContents
console.log(contents)
```

1. 通过 `preload` 集成 `ipcRenderer` API

```ts
import { contextBridge, ipcRenderer } from 'electron'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', withPrototype(ipcRenderer))

function withPrototype(obj: Record<string, any>) {
  const protos = Object.getPrototypeOf(obj)

  for (const [key, value] of Object.entries(protos)) {
    if (Object.prototype.hasOwnProperty.call(obj, key))
      continue

    if (typeof value === 'function') {
      // Some native APIs, like `NodeJS.EventEmitter['on']`, don't work in the Renderer process. Wrapping them into a function.
      obj[key] = function (...args: any) {
        return value.call(obj, ...args)
      }
    }
    else {
      obj[key] = value
    }
  }
  return obj
}
```

2. 在主线程中等待页面加载完成后随意发送一个消息：

```ts
win.webContents.on('did-finish-load', () => {
  win?.webContents.send('main-process-message', (new Date()).toLocaleString())
})
```

3. 页面中接收消息并打印

```ts
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
```

