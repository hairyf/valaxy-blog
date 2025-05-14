---
title: Electron 主应用方法与事件
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 18:30:00
---

Electron 主进程是 Electron 应用程序的核心组成部分，它负责管理应用程序的生命周期、处理系统级别的操作和提供与操作系统和渲染进程的通信。主进程在 Electron 应用程序启动时创建，并且只有一个实例。

主进程的代码通常位于应用程序的主文件中，例如 main.js。它使用 Node.js 运行，并可以访问底层的操作系统资源和 Electron API。

下面的这个例子将会展示如何在最后一个窗口被关闭时退出应用：

```ts
const { app } = require('electron')
app.on('window-all-closed', () => app.quit())
```

<!-- more -->

主要功能和责任：

- 生命周期管理：例如应用程序的启动、退出和窗口的打开与关闭。它可以响应这些事件并执行适当的操作。

- 创建和控制窗口：它可以创建主窗口和其他辅助窗口，并处理窗口的大小、位置、关闭事件等。

- 系统级别操作：主进程可以访问底层操作系统的功能和资源，例如文件系统、原生对话框、系统托盘和菜单等。

- 渲染进程通信：使用 Electron 提供的 IPC（进程间通信）机制，主进程和渲染进程可以进行双向通信。

- 托管应用程序逻辑：主进程通常也是应用程序的逻辑中心，负责处理业务逻辑、调用外部服务和库。

## events

### 关闭窗口前(before-quit)

在程序关闭窗口前发信号。 调用 `event.preventDefault()` 将阻止终止应用程序的默认行为。

> 如果由 `autoUpdater.quitAndInstal()` 退出应用程序 ，那么在所有窗口触发 `close` 之后 才会触发 `before-quit` 并关闭所有窗口。

```ts
app.on('before-quit', (e) => {
  console.log('App is quiting')
  e.preventDefault()
})
```

### 窗口失焦(browser-window-blur)

当一个 [browserWindow](https://www.electronjs.org/zh/docs/latest/api/browser-window) 失去焦点时触发。

```ts
app.on('browser-window-blur', (e) => {
  console.log('App unfocused')
})
```

### 窗口获焦(browser-window-focus)

当一个 [browserWindow](https://www.electronjs.org/zh/docs/latest/api/browser-window) 获得焦点时触发。

```ts
app.on('browser-window-focus', (e) => {
  console.log('App focused')
})
```

## functions

### 退出程序(app.quit)

```ts
app.on('browser-window-blur', (e) => {
  setTimeout(() => {
    app.quit()
  }, 3000)
})

app.on('browser-window-blur', (e) => {
  setTimeout(app.quit, 3000)
})
```

### 请求路径(app.getPath)

返回 string - 当前系统的不同目录。

```ts
app.whenReady().then(() => {
  // 当前用户的桌面文件夹
  console.log(app.getPath('desktop'))
  // 用户音乐目录的路径
  console.log(app.getPath('music'))
  // 临时文件夹
  console.log(app.getPath('temp'))
  // 储存应用程序配置文件的文件夹
  console.log(app.getPath('userData'))

  createWindow()
})
```

> 更多参考官网 [app.getPath(name)](https://www.electronjs.org/zh/docs/latest/api/app#appgetpathname)
