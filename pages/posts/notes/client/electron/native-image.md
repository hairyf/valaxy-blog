---
title: Electron 原生图片模块
categories:
  - Notes
  - Client
  - Electron
tags:
  - Electron
date: 2023-12-05 18:40:00
---

Electron 的 nativeImage 模块是一个用于处理图像的功能强大的模块。它允许你在 Electron 应用程序中创建、操作和转换图像。

nativeImage 模块提供了创建图像对象的方法，这些图像对象可以从文件系统中的文件、Buffer 对象或原生操作系统剪贴板中的图像数据中加载。还可以使用 nativeImage 实例的方法来处理和转换这些图像对象。

<!-- more -->

## 从文件加载

可以使用 `nativeImage.createFromPath(path)` 方法从文件路径加载图像，或者使用 `nativeImage.createFromBuffer(buffer[, options])` 方法从内存中的图像数据加载图像。加载的图像可以用于显示在应用程序的界面上或者进行进一步的处理。

```ts
import { nativeImage } from 'electron'
const image = nativeImage.createFromPath('/path/to/image.png')
```

or

```ts
import fs from 'node:fs'
const buffer = fs.readFileSync('/path/to/image.png')
const image = nativeImage.createFromBuffer(buffer)
```

## 调整和裁剪

```ts
const resizedImage = image.resize({ width: 200, height: 200 })
```

```ts
const croppedImage = image.crop({ x: 0, y: 0, width: 100, height: 100 })
```
