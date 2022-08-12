---
title: PHP 基本应用
date: 2019-04-02
categories:
  - Server
  - PHP
tags: 
  - PHP
---

## 基本语法

~~~php
<?php // 代表php代码的开始
// 由$为前缀定义变量
$count_1 = 50;
$count_2 = 50;
if ($count_1 == $count_2) {
  echo '数值匹配成功'; // 输出语句, 浏览器访问时自动被编译为字符串
  unset($count_1); // 卸除变量
  echo $count_1; // 变量卸除后, 变量一则不存在, echo无任何效果
    
  // 错误抑制符
  @('wadwada'+'wdwandia');
    
  // 模板字符串
  echo "count_1:{$count_1}"
}
?> // 代表php代码的结束, 不填写默认在编译时自动添加
~~~

<!-- more -->

## 操作符集

~~~php
/*
= 赋值运算

+ 累加 - 相减 * 乘法
/ 除法 % 余数

> 大于 >= 大于等于
< 小于 <= 小于等于
== 等于 != 不等于
=== 全等于 !== 不全等于

|| 逻辑或 && 逻辑且
! 取反

. 串连接 .= 拼接并赋值(js中的+=)

@ 错误抑制

xx ? xx : xx 三元表达式

++ 原值+1 -- 原值-1

+= 相加并赋值 .= 拼接并赋值
*= 相乘并赋值 /= 相除并赋值
%= 相余并赋值

& 按位与 -> 两个数都为1, 结果为1, 否则为0
| 按位或 -> 两个数应该为1, 结果为1, 否则为0
~ 按位非 -> 0/1之前取反
^ 按位异或 -> 两个相同则为0, 不同则1
<< 按位左移 -> 整个数(32位), 向左移动一位, 右边补0
>> 按位右移 -> 整个数(32位), 向右移动一位 (正数补0, 负数补1)
*/
~~~

## 变量传值

~~~php
<?php
$var1 = 50;
$var2 = $var1; // $var2引用$var1内存地址
echo $var2.'<br />'; // 50
$var2 = 60; // 当$var2重新赋值时, 将重新开辟一条内存存放数据, 与$var1完全不相干
echo '$var1:'.$var1.'$var2:'.$var2; // $var1:50$var2:60
~~~

## 常量定义

~~~php
/* 1、常量不需要'$'符号，一旦使用，系统就认为是变量
 * 2、常量的名字组成由字母、数字和下划线组合
 * 3、常量是不允许被修改的 */
<?php
// 方式一: 使用函数定义常量: define
define('PI',3.14);
echo PI.'---'; // 3.14

// 方式二: 使用count关键字定义
const PII=3;
echo PII.'---'; // 3

// count关键字不允许定义特殊字符, 定义特殊字符采用函数定义, 由constant函数输出
define('-_-', '这是一个神奇的常量');
echo constant('-_-');
~~~

## 系统/魔术变量

~~~php
echo '<br/>';
echo 'get请求参数: '.$_GET.'<br/>';
echo 'post请求参数: '.$_POST.'<br/>';
echo 'php版本号: '.PHP_VERSION.'<br/>';
echo '整形大小: '.PHP_INT_SIZE.'<br/>';
// 如带-符号的整数则为负数
echo '整形能表示的最大的数: '.PHP_INT_MAX.'<br/>';
~~~

在php中还有一些特殊的常量，他们有双下划线开始+常量名+双下划线结束，这种常量称之为系统魔术常量：魔术常量的之通常会跟着环境变化，但用户改变不了。

~~~php
echo '当前脚本执行绝对路径: '.__DIR__.'<br/>';
echo '当前脚本执行绝对路径(带文件名): '.__FILE__.'<br/>';
echo '当前所属的脚本行数: '.__LINE__.'<br/>';

echo '当前所属的命名空间: '.__NAMESPACE__.'<br/>';
echo '当前所属的类: '.__CLASS__.'<br/>';
echo '当前所属的方法: '.__METHOD__.'<br/>';
~~~

## php 数据类型

### 八种数据类型

数据类型，在php中指的是存储的数据本身类型，而本身变量的类型。php是一种弱语言，变量本身没有数据类型。

~~~php
<?php
/* 基本数据类型 */
$integer = 500; // 整数型 -> 系统分配四个字节储存,表示整数类型
$float = 4.56; // 浮点型 -> 系统分配八个字节储存，表示小数或者整数存不下的整数
$string = "啦啦啦"; // 字符型 -> 系统根据实际长度分配，表示字符串
$boolean = true; // 布尔型

/* 复合数据类型 */
// 对象型 -> 用于存放无序数据, 一个键对应一个值
$obj = new class {};
class obj {};
// 数组型 -> 用于存放有序/无序数据, 一个下标对应一个值
$arr = array( 0 => '110', 1 => '120' );
$arr2 = [32131, 123213, 12312];
$arr[3] = '1201';
$arr['numc'] = '1313'; // php允许使用字符串作为下标

/* 特殊数据类型 */
// 资源型 -> 存放资源数据（php外部数据，如数据库、文件）
// 空类型 -> null
$null = null;
~~~

### 类型转换

 在PHP中有两种类型转换方式
自动转换：系统根据需求自己判定，自己转换（用的比较多，效率偏低）
强制（手动）转换：认为根据需要的目标类型转换

在转换的过程中，用的比较多的就是转布尔类型（判断）和转数值类型（算数运算）

其他类型转布尔类型：true或flase，在php中比较少类型转换为flase

~~~php
$a = 'abc1.1.1';
$b = '1.1.1abc';
// echo $a + 600; 自动转换 -> php7会报错
// 强制转换 -> (类型)$变量;

// 字符串转数值规则: 第一个字符串是字母 则为0
echo (integer)$a; // 0
echo (integer)$b; // 1
echo '--';
// 布尔值无法正常echo显示, 当true时echo为1, false时无任何反应
echo true;
// 布尔值输出采用var_dump函数
var_dump(true); // bool(true)
var_dump(false); // bool(false)

// 使用判断类型函数 is_[类型/类型简写](值)
var_dump(is_int($a)); // bool(false)
var_dump(is_string($a)); // bool(true)
~~~

### 伪类型

~~~php
Number // -> 整数或浮点数
mixed // 任意类型
~~~

## php 函数类型

### 函数以及作用域

~~~php
// 默认的代码空间为全局空间
// 在全局空间定义常量时, 最终会被系统纳入到超全局变量中-> $GLOBALS['global']
$global = 'global area';

function echoWorld()
{
  // 在php中, 函数内部不允许直接访问全局变量
  // echo $global; // 报错

  // 需访问全局变量时, 使用$GLOBALS常量进行访问
  echo $GLOBALS['global']; // global area

  // 使用global关键字创建可访问全局变量
  global $global;
  echo $global; // global area

  // 可在函数内部使用global创建可访问全局变量(需执行该函数才会存在噢~)
  global $local;
  $local = 156156156;
}
echoWorld();

echo $local; // 156156156
~~~

### 静态变量

~~~php
<?php
/* 静态变量的使用场景->
 * 为了统计当前函数被调用的次数
 * 为了统筹函数多次调用得到的不同结果
 */
function display(){
  // 定义变量
  $local = 1;
  // 定义静态变量, 当函数再次访问时, 会寻找之前的静态变量
  // 如果查找到之前的变量, 那么该静态变量的值则为之前变量的值
  // 赋值符号将不是=1, 而是=之前的值
  static $count = 1;
  echo '<br>', $local++, '-', $count++;
}
display(); // 2-2
display(); // 2-3
display(); // 2-4
~~~

### 函数默认值

~~~php
function setCount ($number = 1) {
  echo $number; // 1
}
~~~

### 可变函数

~~~php
<?php
// 可变函数：当前有一个变量所保存到的值, 刚好是一个函数名称, 那么将可以使用变量+()来充当函数名使用
$fun_name = 'display';
function display () {
  echo 'xxx';
};
$fun_name();
~~~

### 匿名函数

`跟前端匿名函数特性一致`

## php 自带函数

### 输出与时间函数

~~~php
<?php
// print(), 类似于echo输出提供的内容, 返回1
print '161561561';
print('123123');

// print_r(), 类似于var_dump, 但比var_dump简单
// 不会输出数据的类型, 只会输出值
print_r([
  'adas' => 123, 123213, 1231
]);

// date()：按照指定格式对对应的时间戳(从1970年格林威治时间开始计算的秒数)
// 没有输入指定时间戳，则默认当前的时间戳
echo date('Y 年 m 月 d 日 H:i:s') . '<br>';
// time()：获取当前时间对应的时间戳
echo time() . '<br>';
// microtime()：获取微妙级别的时间
echo microtime() . '<br>';
// Strtotime()：获取指定时间
echo strtotime('tomorrow 10 hours');
~~~

### 数值与function函数

~~~php
/** 数值相关函数
 * max(num,num)：数之间最大的值
 * min(num,num)：比较两个数中较小的值
 * rand([,$min], [,$max])：得到一个随机数,指定区间的随机整数
 * mt_rand([,$min], [,$max])：与rand一样,只是底层结构不一样,效率比rand高（建议使用）
 * round(num)：四舍五入
 * ceil(num)：向上取整
 * floor(num)：向下取整
 * pow(num, num)：求指定数字的指定数次结果：pow(2,8) == 2^8 == 256
 * abs(num/-num)：绝对值
 * sqrt(num)：求平方根
 * */
/** 函数相关的函数
 * function_exists($function_name)：判断指定函数(名称)是否在内存中存在
 * func_get_arg($index)：获取函数中指定索引的参数
 * func_get_args(void)：函数中获取所有的参数（数组）
 * func_num_args()：函数的参数数量
 * */
function test($a,$b){
    //获取指定参数
    var_dump(func_get_arg(0));
    echo '<br>';
    //获取所有参数
    var_dump(func_get_args());
    echo '<br>';
    //获取参数数量
    var_dump(func_num_args());
};
test(60,70);
~~~

## php 文件模块

include：系统碰到一次，执行一次；如果对同一个文件进行多次加载，那么系统就会执行多次；

lnclude_once：系统碰到多次，也会执行一次；

require：include 报错并不会阻塞代码执行，但 require 会阻塞代码执行；

~~~php
// include_1.php
<?php
define('LOCAL_HOST', '11023612315');
~~~
