---
title: Electron 原生对话框
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 19:00:00
---

Electron 提供了一个强大的模块，称为 dialog，用于在应用程序中显示对话框（dialog）。对话框是一种常见的用户界面元素，用于与用户进行交互，例如选择文件、保存文件、显示消息等。

这些对话框提供了一种简单而方便的方式，使开发人员能够与用户进行交互，并在桌面应用程序中提供常见的操作和反馈机制。使用 Electron 的 dialog 模块，开发人员可以轻松地创建这些对话框，并根据应用程序的需要进行自定义。

<!-- more -->

## 选择模态(showOpenDialog)

```ts
await dialog.showOpenDialog({
  // 确认按钮文本
  buttonLabel: '选择',
  // 打开后默认路径
  defaultPath: app.getPath('desktop'),
  // 多选/可创建文件夹/可打开文件/可打开文件夹
  properties: ['multiSelections', 'createDirectory', 'openFile', 'openDirectory']
})

console.log(result.filepaths)
```

## 保存模态(showSaveDialog)

```ts
const result = await dialog.showSaveDialog({})
console.log(result.filePath)
```

> 该模态无任何，仅提供选择，返回 filePath 可用于程序存储。

## 消息模态(showMessageBox)

```ts
const answers = ['Yes', 'No', 'Maybe']
const response = await dialog.showMessageBox({
  title: 'Message Box',
  message: 'Please select an option',
  detail: 'Message details.',
  buttons: answers
})
console.log(`User selected: ${answers[response]}`)
```
