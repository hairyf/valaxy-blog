---
title: Electron 系统托盘
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-06 10:10:00
---

Electron 的 tray 是一个用于创建系统托盘图标的功能。它允许开发者在操作系统的任务栏或菜单栏中添加一个小图标，用于快速访问应用程序的某些功能或显示通知。

通过调用 new Tray(path) 方法，开发者可以在应用程序中创建一个托盘图标，并指定图标的路径：

<!-- more -->

```ts
import { Menu, Tray } from 'electron'

const tray = new Tray('icon.png')
tray.setToolTip('My Tray Tips')

// 用户按着 shiftKey 在关闭应用
tray.on('click', (e) => {
  if (e.shiftKey)
    app.quit()
})

const menu = Menu.buildFromTemplate([
  { label: 'item1' },
  {
    label: 'item2',
    click: () => {
      win.isVisible()
        ? win.hide()
        : win.show()
    }
  }
])

// 添加菜单
tray.setContextMenu(menu)
```
