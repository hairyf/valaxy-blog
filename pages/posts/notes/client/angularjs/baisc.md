---
title: AngularJS 基本应用
categories:
  - Notes
  - Client
  - angularjs
tags:
  - angularjs
date: 2019-08-05 13:00:00
---

## ng-app（指令）

告诉angular核心它管理当前标签所包含的整个区域,并且会自动创建$rootScope根作用域对象

~~~html
<body ng-app>
</body>
~~~

## ng-model（指令）

将当前输入框的值与谁关联(属性名:属性值), 并作为当前作用域对象($rootScope)的属性
通常表示一个完整的执行单位，一段完整的js可执行的代码，有的语句也可以用表达式来执行，叫做表达式语句。

<!-- more -->

## 大括号表达式`{{}}`

显示数据,从作用域对象的指定属性名上取

~~~html
<body ng-app>
  <input type="text" ng-model="username">
	<p>您输入的内容是：<span>{{username}}</span></p>
</body>
~~~

![理解第一个Angular应用](https://pic.rmb.bdstatic.com/bjh/f2994edbaf0ee07d9f9b2f50ec4791d3.png)

## 表达式可操作数据

- 基本类型数据: `number/string/boolean/undefined`
- Infinity, NaN, null` 解析为空串: `""`
- 对象的属性或方法，以及数组

~~~html
<body ng-app="">
  <p>{{1}}</p>
  <p>{{'尚硅谷'}}</p>
  <p>{{undefined}}</p>
  <p>{{'atguigu'+3}}</p>
  <p>{{4+3}}</p>
  <p>{{true}}</p>
  <p ng-init="a=3;b=4">{{a+b}}</p>
  <p ng-init="p={name:'Tom',age:12};arr=[true, 3, 'atguigu']">
    {{p.name}}---{{p.age}}----{{arr[2]}}
  </p>
</body>
~~~

表达式通常有一个返回值，可以放在任何需要值得地方，比如函数调用的参数，一个变量名，一个运算。

## 双向绑定数据

**View（视图）**： 也就是我们的页面 (主要是`AngularJS`指令和表达式)

**Model(模型) **：作用域对象(当前为`$rootScope`), 它可以包含一些属性或方法

## 数据绑定

当改变View中的数据, Model对象的对应属性也会随之改变:  ng-model指令  数据从`View-->Model`
当Model域对象的属性发生改变时, 页面对应数据随之更新:  `{{}}`表达式  数据从`Model-->View``
``ng-model`是双向数据绑定, 而`{{}}`是单向数据绑定

~~~html
<body ng-app="" ng-init="name='tom'">
<!-- ng-init  用来初始化当前作用域变量。-->
<input type="text" ng-model="name">
<p>姓名1：{{name}}</p>  <!-- tom -->
<input type="text" ng-model="name">
<p>姓名2：{{name}}</p>	<!-- tom -->
</body>
~~~

![双向数据绑定](https://pic.rmb.bdstatic.com/bjh/03f8db95cc89f73b88cf8252f0f95912.png)
