---
title: 微信小程序应用
categories:
  - Notes
  - Client
  - Mini Program
tags: 
  - Mini Program
date: 2020-04-01 14:00:00
---

微信小程序，小程序的一种，英文名Wechat Mini Program，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。

小程序没有 DOM 对象，一切基于组件化。

~~~
*.wxml ---> view 结构 ----> html
*.wxss ---> view 样式 ----> css
~~~

## 适配方案

微信官方提供的换算方式：

`1rpx` = `1物理像素` = `0.5px`

- 以 `iPhone6` 的物理像素个数为标准: `750`;
- `1rpx` = `目标设备宽度` / `750` * `0.5px`;
- 注意此时底层已经做了 `viewport` 适配的处理，即实现了理想视口。

## 项目结构

~~~
pages				            主要编写页面目录
utils	  		            工具目录
app.js   		            注册小程序 js
app.json		            小程序全局配置
app.wxss 		            基本样式
probject.config.json		项目配置文件
~~~

## pages.json

`pages.json` 是小程序定义页面数据、导航栏、页面样式的位置，小程序是单页面应用，没有总入口。

~~~json
{
  "pages": [
    "pages/index/main"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "color": "#999",
    "backgroundColor": "#fafafa",
    "selectedColor": "#333",
    "borderStyle": "white",

    "list": [{
      "text": "首页",
      "pagePath": "pages/index/main",
      "iconPath": "static/tabs/home.png",
      "selectedIconPath": "static/tabs/home-active.png"
    }, {
      "text": "订单",
      "pagePath": "pages/logs/main",
      "iconPath": "static/tabs/orders.png",
      "selectedIconPath": "static/tabs/orders-active.png"
    }],

    "items": [{
      "name": "首页",
      "pagePath": "pages/index/main",
      "icon": "static/tabs/home.png",
      "activeIcon": "static/tabs/home-active.png"
    }, {
      "name": "订单",
      "pagePath": "pages/logs/main",
      "icon": "static/tabs/orders.png",
      "activeIcon": "static/tabs/orders-active.png"
    }],
    "position": "bottom"
  }
}

~~~

