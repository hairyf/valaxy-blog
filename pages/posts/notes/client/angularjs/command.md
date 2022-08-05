---
title: AngularJS 常用指令
date: 2020-11-01
categories:
  - notes
  - client
  - angularjs
tags:
  - angularjs
---

`Angular` 为 `HTML` 页面扩展的自定义标签属性或标签 与`Angular` 的作用域对象 `(scope)` 交互,扩展页面的动态表现力。

- ng-app: 指定模块名，angular管理的区域
- ng-model： 双向绑定，输入相关标签
- ng-init： 初始化数据
- ng-click： 调用作用域对象的方法（点击时）
- ng-controller: 指定控制器构造函数名，内部会自动创建一个新的子作用域（外部的）
- ng-bind： 解决使用`{{}}`显示数据闪屏（在很短时间内显示`{{}}`）
- ng-repeat： 遍历数组显示数据， 数组有几个元素就会产生几个新的作用域
  - $index, $first, $last, $middle, $odd, $even
- ng-show: 布尔类型， 如果为true才显示
- ng-hide: 布尔类型， 如果为true就隐藏

<!-- more -->

## ng-repeat

当ng-repeat命令遍历数组时，会在当前代码作用域产生六个变量
`$index(当前索引), $first(第一个), $last(最后一个), $middle(中间的), $odd(奇数行), $even(偶数行)`

~~~html
 <ul>
 	<li ng-repeat="person in persons">
		第一个：{{$first}},第{{$index + 1}}个，
		中间的：{{$middle}},最后一个：{{$last}},
		偶数行：{{$even}},奇数行{{$odd}},
		{{person.name}}----{{person.age}}
	</li>
</ul>
<script>
  angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
		$scope.persons = [
			{name: 'kobe',age: 39},
			{name: 'anverson',age: 41},
			{name: 'weide',age: 38},
			{name: 'tim',age: 40},
			{name: 'curry',age: 29}
		];
}])
</script>
~~~

## ng-bind

ng-bind 可以用于指令解决闪烁加载

**`ng-bind`与`{{}}`取值的区别**

-  **{{ }}** 是等页面加载完后，再取值
-  **ng-bind** 它是在页面加载的时候，是不会显示{{name}}这种变量出来
-  **ng-bind** 可以解决 ng 页面闪烁加载问题
-  **ng-bind** 只能绑定单个变量，但是 **{{ }}** 这种方法可以绑定多个变量。

~~~html
<p ng-bind="count2">{{'asdfdsfds'}}</p>
<p>{{count2}}</p>
~~~

## 条件渲染

**ng-show**：布尔类型， 如果为true才显示
**ng-hide**：布尔类型， 如果为true就隐藏

~~~html
<p ng-show="isLike">我喜欢贾静雯</p> <!--显示-->
<p ng-hide="isLike">贾静雯喜欢我</p> <!--隐藏-->
<script>
  angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
		$scope.isLike = true
}])
</script>
~~~

**ng-class**：动态引用定义的样式  {aClass:true, bClass:false}
**ng-style**：动态引用通过js指定的样式对象   {color:'red', background:'blue'}

~~~html
<style>
  .evenB {background-color: grey;}
  .oddB {background-color: green;}
</style>
<p ng-class="{evenB:$even, oddB:$odd}">猜猜我什么颜色</p>
<div ng-style="myStyle">猜猜我颜色是什么</div>
<script>
  angular.module('myApp', [])
		.controller('MyController', function($scope) {
			$scope.evenB = false
			$scope.oddB = true
			$scope.myStyle = {
        	background: 'green'
    }
});
</script>
~~~



## 事件绑定

**ng-click**：点击监听, 值为函数调用, 可以传$event

~~~html
<button ng-click="switch()">切换</button> <!--绑定点击更改isLike的值-->
<p ng-show="isLike">我喜欢贾静雯</p> <!--显示-->
<p ng-hide="isLike">贾静雯喜欢我</p> <!--隐藏-->
<script>
  angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
		$scope.isLike = true
		$scope.switch = function () {
      $scope.isLike = false 
    }
}])
</script>
~~~

**ng-mouseenter**：鼠标移入监听, 值为函数调用, 可以传$event

~~~html
<button ng-click="enter()">啦啦啦</button>
<script>
  angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
		$scope.enter = function () {}
}])
</script>
~~~

**ng-mouseleave**：鼠标移出监听, 值为函数调用, 可以传$event

~~~html
<button ng-click="enter()">啦啦啦</button>
<script>
  angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
		$scope.enter = function () {}
}])
</script>
~~~
