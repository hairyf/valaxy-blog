---
title: Windows 关于 C++ 集成的 node 插件配置
date: 2023-12-05 14:00:00
categories:
  - Notes
  - Options
tags:
  - Options
---

在一些特殊的开发场景上，会用到 node-gyp，它需要 C++ 集成的工具和 python3，遇到了挺多坑点，整理一下自己踩过的坑，和具体配置的流程。

node-gyp 是一个可以编译 node 插件的工具，在使用 node-gyp 前需要安装 python 环境和 C++ 环境。

<!-- more -->

## 1. 安装 **windows-build-tools**

我有去尝试过不使用 `windows-build-tools` 去安装，但都会提示 `gyp ERR! stack Error: Could not find any Visual Studio installation to use`，虽然说 `windows-build-tools` 不在维护，但这个包能帮助我们一键安装 node-gyp 所需要的 python 环境和 C++ 环境。

但 `windows-build-tools` 包已经不维护了。如需要继续使用的话，我们可以将 python2.7 替换成 python3。

**具体步骤如下:**

1. 采用管理员模式开启 cmd 或者 powershell, 安装 `windows-build-tools`

```sh
npm install --global --production windows-build-tools
```

2. 如果遇到了 successfully installed python 卡着、界面不动了情况

![20210523095213711.png](https://pic.imgdb.cn/item/656ef3cec458853aef8b30fe.webp)

不要慌，疑似 window-build-tools 自带的bug，[可查看相关issue链接](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ffelixrieseberg%2Fwindows-build-tools%2Fissues%2F244)

![image.png](https://pic.imgdb.cn/item/656ef3dfc458853aef8b684e.webp)

**解决方案:**

1. 打开资源管理器（左下角搜索-资源管理器或者直接window+E），在路径处输入`%temp%`

![image.png](https://pic.imgdb.cn/item/656ef3e6c458853aef8b7f01.webp)

2. 在`%temp%`目录下创建一个名为`dd_client_.log`的文件

![image.png](https://pic.imgdb.cn/item/656ef3edc458853aef8b9405.webp)

3. 编辑创建的文件，加入一行`Closing installer. Return code: 3010.`然后保存。

![image.png](https://pic.imgdb.cn/item/656ef3f4c458853aef8baa95.webp)

4. 回到执行安装命令的窗口，重新安装 `windows-build-tools` 的步骤

![image.png](https://pic.imgdb.cn/item/656ef3fcc458853aef8bc9e0.webp)

## 2. 安装 **python3**

网上部分文章说 node-gyp 应该用 python 版本 2.7 版本，可能是因为时效性的问题，目前 python2 已经不在维护了，并且 node-gyp 在官方文档上也说明应该用 python3。

1. 在 C 盘 Users 目录下的 .windows-build-tools, 找到python相关的 msi 文件, 打开并卸载掉 python2, 因为 node-gyp@9 版本对应是 python3 的版本

![image.png](https://pic.imgdb.cn/item/656ef403c458853aef8bdd53.webp)

> 这里需要注意，不同 window 系统存放的位置不一样，win11 的话是在 `C:\Users\[user]\.windows-build-tools`

2. 安装 python3 环境并配置环境变量 [传送门](https://link.juejin.cn/?target=https%3A%2F%2Fwww.python.org%2F)

## 3. 安装 **C++ 环境**

有人可能会说，已经安装了 `windows-build-tools` 为什么还要安装 `C++` 环境，但不装这个还是无法识别 C++ 环境（汗

1. 点击 vs_BuildTools.exe（如果显示以安装则直接进行下一步）
2. 下载 [visual studio 2017](http://xz.cncrk.com:8080/soft/keygen/visual studio 2017.rar) 使用 `vs_Community.exe` 安装

## 4. 安装 **node-gyp**

```sh
npm install -g node-gyp
```

