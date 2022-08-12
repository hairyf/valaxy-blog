---
title: uniapp 多端开发框架
date: 2020-04-03
categories:
  - Notes
  - Client
  - uniapp
tags: 
  - Mini Program
---

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

## 跨平台的多种解决方式

语言层面编译转换一下，编译成C语言或者字节码之类的，能够运行在不同的设备上面，但是这个语言转换过程很复杂，而且还需要做移植的工作。比如著名的：swiftUI，kotlin-native就是这类型的跨平台框架。

自带渲染引擎，不依赖于任何平台，一套代码就可以自动编译成多个平台的应用程序。比如：Flutter

中转类型的框架，使用JS衔接原生平台的一些功能，要么由社区开发者自己维护一套扩展兼容库，要么本身带有一系列的兼容库，这类型的框架有：React Native，Weex，当然也包括提出的 5+app 以及 uni-app。

## 小程序的对比

小程序的每个页面的 json 配置文件都是单独的：
-	pages/index/index.js
-	pages/index/index.wxml
-	pages/index/index.wxss
-	pages/index/index.json

uni中每个页面都由Vue架构的文件组成, 且配置文件统一在根路径 pages.json 中集中管理：
-	pages/index/index.vue
-	pages.json

---

uniapp 中, wx 对象与 uni 对象功能基本一致, 官方推荐使用 uni

- wx.showToast...
- uni.showToast...

---

uniapp 中, 基本配置了市面上的流行的 css 预编辑器, 只需安装插件即可开箱使用。

~~~html
<style lang="less"></style>
<style lang="stylus"></style>
<style lang="scss"></style>
~~~

uniapp 有丰富的[插件市场](https://ext.dcloud.net.cn/), 里面有组件, API各种方便开发的插件, 点击安装即可使用。

## VSCode 的使用

uni-app 是一个用 vue 语法来开发小程序、App、H5 的框架，其官方推荐的开发工具为 HBuilderX，使用起来有很好的开发体验（并没有。

不过，由于 HBuilderX 没有 Linux 版以及很多前端之前已经习惯了 vscode，不想更换编辑器。直接使用 vscode 开发 uni-app，其体验很好。

~~~makefile
## 拷贝项目模板
vue create -p dcloudio/uni-preset-vue my-project

#↓↓↓↓↓↓#
Preset options:
? 请选择 uni-app 模板  
  默认模板
> 默认模板(TypeScript) 
  Hello uni-app        
  登录模板
  看图模板
  新闻/资讯类模板      
  自定义模板
~~~


## 常见问题

uniapp 由于兼容多端的缘故，导致有大量的兼容性问题。

### 解决多视频播放问题

根据点击后，传入组件 ID 值，通过上下文对象关闭this中储存的上一个上下文播放状态。

### 优化多 video 卡顿

将 video 替换为 image 标签，点击播放时，在替换为 viode