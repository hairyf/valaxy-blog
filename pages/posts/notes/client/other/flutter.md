---
title: Flutter 移动端应用开发
date: 2022-07-01
categories:
  - Notes
  - Client
  - Other
tags:
  - Flutter
---

Flutter 是谷歌的移动 UI 框架，可以快速在 IOS 和 Android 上构建高质量的原生用户界面。 Flutter 可以与现有的代码一起工作。在全世界，Flutter 正在被越来越多的开发者和组织使用，并且 Flutter 是完全免费、开源的。

- **跨平台**：现在 Flutter 至少可以跨 4 种平台，甚至支持嵌入式开发。我们常用的有 Linux、Android、IOS，甚至可以在谷歌最新的操作系统上 Fuchsia 进行运行,经过第三方扩展，甚至可以跑在 MacOS 和 Windows 上，到目前为止，Flutter 算是支持平台最多的框架了，良好的跨平台性，直接带来的好处就是减少开发成本。
- **原生用户界面**：它是原生的，让我们的体验更好，性能更好。用官方的话讲就是平滑而自然的滑动效果和平台感知，为您的用户带来全新的体验。

<!-- more -->

## 超高性能

Flutter 采用 GPU 渲染技术，所以性能极高。

Flutter 编写的应用是可以达到 120fps(每秒传输帧数)，这也就是说，它完全可以胜任游戏的制作。而我们常说的 RN 的性能只能达到 60fps，这也算是 Flutter 的一个超高竞争力吧。官方宣称 Flutter 甚至会超过原生性能。

## 生态情况

由于有 google 这样的超级公司支持和推广，Flutter 虽然刚出来没有多久，但是生态还是非常好的，中国也有了大量的Flutter 爱好者。

插件由法国人总结了一个 Flutter 的插件列表，里边的插件非常丰富：https://github.com/Solido/awesome-flutter

目前阿里集团已经开始使用 Flutter 来进行开发了，比如我们经常使用的闲鱼，主要模块就是 Flutter 进行开发的。再给大家一个图片，这些效果都是 Flutter 进行开发的。

## 系统要求

- **操作系统**：必须 windows7 以上 64 位操作系统。
- **磁盘空间**：大于 3 个 G，虽然官方说的是 400M，但还需要安装 Android Studio 和虚拟机，所以至少要3个G左右。
- **JAVA环境**：https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

## 环境配置

~~~makefile
## 安装JAVA环境
JAVA下载地址: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

#↓↓↓↓↓↓↓↓↓↓#

## 安装FlutterSDK包
FlutterSDK下载地址: https://flutter.io/sdk-archive/#windows

#↓↓↓↓↓↓↓↓↓↓#

## 将安装包解压到对应路径 (如： E:\fluter\flutter)

#↓↓↓↓↓↓↓↓↓↓#

## 国内环境配置环境变量
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn

#↓↓↓↓↓↓↓↓↓↓#

## 运行flutter命令
在Flutter安装目录的flutter文件下找到flutter_console.bat，双击运行并启动flutter命令行。

#↓↓↓↓↓↓↓↓↓↓#

## 配置环境变量
flutter/bin
~~~

## 环境测试

终端中输入 `flutter doctor`，会得到下面类似的结果。

~~~
Android toolchain - develop for Android devices
    • Android SDK at D:\Android\sdk
    ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
    • Try re-installing or updating your Android SDK,
      visit https://flutter.io/setup/#android-setup for detailed instructions.
~~~

### Android Studio 安装

~~~makefile
## 下载并安装AndroidStudio
AndroidStudio下载地址: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
## AndroidStuido安装插件
打开Android Stuido 软件，找到Plugin的配置，搜索Flutter插件。
点中间的Search in repositories点击安装。安装完成后，重新启动Android Studio软件。
~~~

### Android 证书安装

安装好Android Studio后，再次打开终端（命令行），输入`flutter doctor`,这时候的x会明显减少，但是还是会遇到1-2个，其中有一个就是提示没有安装证书。安装证书只要在终端里执行下面的命令。

~~~makefile
## 安装证书(一律选择Y, 就可以把证书安装好)
flutter doctor --android-licenses
~~~

## 项目构建流程

![](https://pic.imgdb.cn/item/62fb0b6916f2c2beb1782ef8.jpg)

![](https://pic.imgdb.cn/item/62fb0b8d16f2c2beb17876cd.jpg)

![](https://pic.imgdb.cn/item/62fb0baf16f2c2beb178b823.jpg)

## 构建问题解决

运行时会卡在 Running ‘gradle assembleDebug, 因为 Gradle 的 Maven 仓库在国外, 可以使用阿里云的镜像地址。
