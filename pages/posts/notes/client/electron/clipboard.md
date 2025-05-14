---
title: Electron 系统剪切板
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-06 10:59:00
---

Electron 提供了与剪贴板（clipboard）交互的功能，使开发者能够在应用程序中读取和写入剪贴板的内容。剪贴板是操作系统提供的一种机制，用于在应用程序之间传输数据，例如文本、图像或文件路径等。

## 读取剪贴板内容

通过调用 `clipboard.readText()` 方法，开发者可以读取剪贴板中的文本内容。

<!-- more -->

```ts
import { clipboard } from 'electron'
// preload.ts
function showClipboardText() {
  const text = clipboard.readText()
  alert(text)
}
```

## 写入剪贴板内容

通过调用 `clipboard.writeText(text)` 方法，开发者可以将指定的文本写入剪贴板。这使得开发者可以将应用程序中的文本数据复制到剪贴板，以供用户在其他应用程序中粘贴使用。

```ts
import { clipboard } from 'electron'
// preload.ts
function writeClipboardText() {
  clipboard.writeText('hello clipboard')
}
```

## 读取和写入图像

Electron 还提供了读取和写入剪贴板中图像数据的功能。通过调用 `clipboard.readImage()` 方法可以读取剪贴板中的图像，而调用 `clipboard.writeImage(image)` 方法可以将图像数据写入剪贴板。

## 监听剪贴板变化

监听剪贴板变化：开发者可以使用 `clipboard.on('text-changed', callback)` 方法来监听剪贴板内容的变化。当剪贴板中的文本发生变化时，将触发回调函数，开发者可以在回调函数中执行相应的操作。
