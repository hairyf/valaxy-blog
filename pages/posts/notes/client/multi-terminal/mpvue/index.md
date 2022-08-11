---
title: mpvue 小程序开发框架
date: 2020-11-01
categories:
  - Notes
  - Client
  - mpvue
tags: 
  - Mini Program
---


mpVue (Vue in Mini Program) 美团工程师推出的基于 Vue.js 封装的用于开发小程序的框架，融合了原生小程序和 Vue.js 的特点，可完全组件化开发。

mpvue 具有组件化开发、完整 Vue.js 的开发体验、可使用 Vue 第三方扩展插件、Webpack 构建项目、最终 H5 转换工具将项目编译成小程序识别的文件。

<!-- more -->

## 基本应用

~~~makefile
1. npm install vue-cli -g   ## 下载vue脚手架
2. vue init mpvue/mpvue-quickstart my-project  ## 初始化项目
3. cd my-project  ## 进入项目根目录
4. npm install  ## 根据package.json安装项目依赖包
5. npm start || npm run dev  ## 启动初始化项目

npm install less-loader@4.1.0 --save ## 使用less
~~~

目录结构：

~~~makefile
src/app.json  ## 全局配置文件
src/App.vue   ## 等同于小程序中的app.js, 可写小程序应用实例的声明周期	  函数 || 全局样式
main.js       ## 应用入口文件, 声明组件类型，挂载组件
~~~

main.js：

~~~js
import Vue from 'vue'
import App from './App.vue'
// Vue.config.productionTip = false 默认为false，用于启动项目的时候提示信息，设置为false关闭提示
Vue.config.productionTip = true
// 这个值是为了与小程序页面组件所区分开来，因为小程序页面组件和这个App.vue组件的写法和引入方式是一致的，为了区分两者，需要设置mpType值
App.mpType = 'app'
// 生成Vue实例
const app = new Vue(App)
// 挂载组件
app.$mount()
~~~

page 目录：

~~~makefile
index.vue	#	等同于原生中的 wxml + wxss + js
main.js		#	当前组件页面的入口文件，用于生成当前组件实例，并挂载组件
main.json	#	当前页面的局部配置文件(注意：index.vue组件最终会被转化为 main.wxml 以及 main.wxss 文件, 所以当前的json文件需命名main)
~~~

源文件与编译后文件的比较：
| ![](https://pic.imgdb.cn/item/62f4c4e916f2c2beb1ba3589.jpg) | ![](https://pic.imgdb.cn/item/62f4c4f516f2c2beb1ba582a.jpg) |
| ------------- | ------------- |

## 创建页面

1. 创建页面： `src/pages/index/index.vue`

~~~vue
<script>
export default {}
</script>

<template>
  <div />
</template>

<style>
</style>
~~~

2. 创建入口：`src/pages/index/main.js`

~~~js
import Vue from 'vue'
import Index from './index.vue'

const index = new Vue(Index)
// 挂载当前页面
index.$mount()
~~~
