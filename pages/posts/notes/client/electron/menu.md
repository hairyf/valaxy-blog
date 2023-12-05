---
title: Electron 菜单定制化
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 19:30:00
---

在 Electron 中，Menu（菜单）是一种用于创建应用程序菜单栏和上下文菜单的重要组件。它允许开发人员定义应用程序的菜单结构，并与相应的操作或功能关联起来。

菜单可以包含多个菜单项（MenuItem），每个菜单项可以包含子菜单（SubMenu），形成多级菜单结构。

<!-- more -->

通过 `Menu.buildFromTemplate` 创建一个菜单模板：

```ts
import { Menu } from 'electron'

const menu = Menu.buildFromTemplate([
  {
    label: 'electron',
    submenu: [
      { label: 'submenu-1', },
      { label: 'submenu-2', }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      // 一些系统编辑功能（可用）
      { role: 'undo' },
      { role: 'redo' },
      { role: 'copy' },
      { role: 'paste' },
    ]
  },
  {
    label: 'Actions',
    submenu: [
      // 打开 dev tools
      { label: 'DevTools', role: 'toggleDevTools' },
      // 切换全屏
      { role: 'togglefullscreen' },
      // 自定义
      {
        label: 'Greet',
        click: () => { console.log('Hello from Main Menu') },
        accelerator: 'Shift+Alt+G'
      }
    ]
  }
])
```

通过 `Menu.setApplicationMenu` 挂载菜单：

```ts
import { Menu, app } from 'electron'
app.whenReady().then(() => {
  // ...
  Menu.setApplicationMenu(menu)
})
```

## 外部菜单

通过 `Menu.buildFromTemplate` 创建一个菜单模板：

```ts
const contextMenu = Menu.buildFromTemplate([
  { label: 'Item 1' },
  { role: 'editMenu' }
])
```

通过右键弹出菜单：

```ts
win.webContents.on('context-menu', () => {
  contextMenu.popup()
})
```