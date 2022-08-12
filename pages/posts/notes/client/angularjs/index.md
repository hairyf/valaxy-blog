---
title: AngularJS 前端框架开发
date: 2019-08-05 12:00:00
categories:
  - Notes
  - Client
  - angular
tags:
  - angularjs
---

Google开源的前端结构化框架，动态展示页面数据, 并与用户进行交互，它们具有以下特点：

- 双向数据绑定
- 声明式依赖注入
- 解耦应用逻辑, 数据模型和视图
- 完善的页面指令
- 定制表单验证
- Ajax 封装

<!-- more -->

> `angualr` 就是通过声明式依赖注入， 来得到作用域对象 ，形参名不能随便定义（只是针对当前这种写法）

## MVC 模式

**M: Model, 即模型**
  - 在`angular`中： 为`scope`
  - 储存数据的容器
  - 提供操作数据的方法

**V: View, 即视图**
  - 在`angular`中：为页面
  - 包括: `html/css/directive/expression`
  - 显示Model的数据
  - 将数据同步到Model
  - 与用户交互

**C: Controller, 即控制器**
  - 在angular中：为`angular`的`Controller`
  - 初始化`Model`数据
  - 为`Model`添加行为方法

## MVVM 模式

**M: Model, 即数据模型,** 
- 在angular中：为scope中的各个数据对象

**V: View, 即视图,** 
- 在angular中：为页面

**VM: ViewModel, 即视图模型,** 
- 在angular中：为scope对象