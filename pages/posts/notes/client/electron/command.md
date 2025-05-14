---
title: Electron 快捷键与系统快捷键
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 19:10:00
---

Electron 提供了一种简单而灵活的方式来定义和处理快捷键。通过 Electron，开发人员可以为应用程序添加自定义的全局快捷键，以触发特定的操作或功能。

Electron 的快捷键分为两种，一种是程序自定义的快捷键，另外一种是系统快捷键：

- **快捷键**：定义键盘快捷键。
- **系统快捷键**：在应用程序没有键盘焦点时，监听键盘事件。

快捷键可以包含多个功能键和一个键码的字符串，由符号 + 结合，用来定义你应用中的键盘快捷键。

例如：

- `CommandOrControl+A`
- `CommandOrControl+Shift+Z`

通过调用 `globalShortcut.register()` 方法，可以注册一个特定的快捷键和相应的回调函数。当用户按下注册的快捷键时，回调函数将被触发，从而执行相应的操作。

<!-- more -->

> 注意: 快捷方式是全局的; 即使应用程序没有键盘焦点, 它也仍然在持续监听键盘事件。 在应用程序模块发出 ready 事件之前, 不应使用此模块。

```ts
import { BrowserWindow, app, globalShortcut } from 'electron'

globalShortcut.register('G', () => {
  console.log('User pressed G')
})

globalShortcut.register('CommandOrControl+Y', () => {
  console.log('User pressed G with a combination key')
  // 注销快捷键
  globalShortcut.unregister('CommandOrControl+Y')
})
```
