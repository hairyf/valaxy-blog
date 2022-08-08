---
title: AngularJS 控制器
date: 2020-11-01
categories:
  - notes
  - client
  - angularjs
tags:
  - angularjs
---
## 函数控制器 （v1.2）

用来控制 AngularJS 应用数据的 实例对象
`ng-controller` 指定控制器构造函数, `Angular`会自动`new`此函数创建控制器对象，同时`Angular`还有创建一个新的域对象`$scope`, 它是`$rootScope`的子对象。

> 形参必须是特定的名称, 否则 `AngularJS` 无法注入抛异常

<!-- more -->

~~~html
<body ng-app="">
<!--
    * 回调函数的event的就是依赖对象
    * 回调函数有形参就是依赖注入
-->
<div ng-controller="MyController">
  <input type="text" placeholder="姓" ng-model="firstName"> <!-- 小飞机 -->
  <input type="text" placeholder="名" ng-model="lastName">	<!-- 大飞机 -->
  <p>输入的姓名为: {{firstName+'-'+lastName}}</p>
  <p>输入的姓名2为: {{getName()}}</p> <!-- 小飞机 大飞机 -->
</div>

<script type="text/javascript">
  function MyController ($scope) { //必须是$scope, $scope就是依赖对象, 被angular动态注入的
    $scope.firstName = '小飞机'
    $scope.lastName = '大飞机'
    $scope.getName = function() {
      return $scope.firstName + "  " + this.lastName;
    };
  }
</script>
</body>
~~~

## 依赖注入

依赖的对象以形参的形式被注入进来使用，这种方式就是依赖注入。`angular`的 `$scope对象`就是依赖对象，并且是依赖注入的形式进行使用。回调函数有形参就是依赖注入

## 依赖对象

完成某个特定的功能需要某个对象才能实现，这个对象就是依赖对象。

~~~js
document.getElementById('btn').onclick = function (event) {
  alert(event.clientX) // clientX 必须依赖event
}
~~~

**命令式**：命令程序执行的时候每一步都是按照自己的指令，更注重执行的过程

~~~js
var arr = [1, 2, 3, 4, 5]
var newArr = []
for (let i = 0; i < arr.length; i++) {
  const num = arr[i] * 2
  newArr.push(num)
}console.log(newArr)
~~~

**声明式**：更注重执行的结果。

~~~js
var newArr2 = arr.map((item) => {
  return item * 2
})
console.log(newArr2)
~~~

## 模块控制器（v1.5）

模块间具有作用域，两个模块不会受到干扰

~~~html
<body ng-app="MyApp">
	<div ng-controller="MyCtrl">
  	<input type="text" ng-model="empName">
  	<p>员工名:{{empName}}</p> <!--Tom-->
	</div>
  
	<div ng-controller="MyCtrl1"> <!--Jack-->
  	<input type="text" ng-model="empName">
  	<p>员工:{{empName}}</p>
	</div>
</body>
<script>
   //创建当前应用的模块对象
	var module = angular.module('MyApp',[]); // 定义根作用域对象
	module.controller('MyCtrl',function ($scope) { // 定义作用域对象
		  $scope.empName = 'Tom';
	});
	module.controller('MyCtrl1',function ($scope) { // 定义第二个作用域对象
			$scope.empName = 'Jack';
	})
</script>
~~~

## 方法链调用

~~~js
angular.module('MyApp', [])// 模块对象的方法执行完返回的就是模块对象本身
  .controller('MyCtrl', ($scope) => { // ）
    $scope.empName = 'Tom'
  }).controller('MyCtrl1', ($scope) => {
    $scope.empName = 'Jack'
  })
~~~

## $scope 问题

`js`代码压缩时会把所有的局部变量压缩成 `abcd` 等

~~~js
angular.module('MyApp', [])
  .controller('MyCtrl', ['$scope', function ($scope) {
    $scope.empName = 'Tom'
  }]).controller('MyCtrl1', ['$scope', function ($scope) {
    $scope.empName = 'Jack'
  }])
~~~
