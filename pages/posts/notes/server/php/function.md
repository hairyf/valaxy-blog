---
title: PHP 扩展方法
date: 2019-04-04
categories:
  - Notes
  - Server
  - PHP
tags: 
  - PHP
---

## php 字符串扩展

~~~php
header('Content-type:text/html;charset=utf-8');
$str1 = '151651323';
$str2 = '你好中国123';
// 得到字符串字节数-> 9 15
echo strlen($str1), strlen($str2);
~~~

<!-- more -->

### 多字节字符串扩展模块

加载php mbstring扩展=>php.ini=>extension=php.mbstring.dll

~~~php
// 得到字符串长度(不指定字符集标准)-> 9 7
echo mb_strlen($str1), mb_strlen($str2);
// 指定字符集标准-> 9 7
echo mb_strlen($str1, "utf-8"), mb_strlen($str2, "utf-8");
~~~

### 相关函数

~~~php
// implode('拼接字符', [数组]) -> 数组以指定字符串进行转换拼接为字符串
var_dump(implode(',', [131,131])); // -> string "131,131"
// implode('拼接字符', [数组]) -> 数组以指定字符串进行转换拼接为字符串
var_dump(explode(',', '131,131')); // -> array [131, 131]

// trim(string, [, string]) -> 默认为去除两边空格, 也可指定去除的内容(两边)

// substr(string, start_index, [, end_index]) -> 位置开始截取字符串, 不指定截取长度默认到最后
var_dump(substr('123456', 0, 3)); // -> string "123"
// strstr(string, string [, end_index]) -> 由匹配字符开始截取, 特性与substr一致
var_dump(strstr('abcde f g', 'c')); // -> string "cde f g"

// strtoupper('abc') -> ABC
// ucfirst('abc') -> abc

// strpos(string, string) -> 字符在目标字符串出现的位置(左寻找)
var_dump(strpos('123a3b2a', 'a')); // -> int 3
// strrpos(string, string) -> 字符在目标字符串出现的位置(右寻找)
var_dump(strrpos('123a3b2a', 'a')); // -> int 7

// str_replace($匹配目标, $替换内容, 目标字符串) -> 将部分字符串替换
var_dump(str_replace('a', 'b', 'aaaaa')); // -> string bbbbb

// sprintf(特殊字符串, args....) -> 根据字符串占位符, 定义格式化字符串
$name = "王海峰";
$age = 18;
var_dump(sprintf('我叫%s, 今年%d', $name, $age)); // -> 我叫王海峰 今年18

// str_repeat(string, int) -> 字符串重复多次
var_dump(str_repeat('abc', 3)); // -> abcabcabc
// str_shuffle(string) -> 打乱字符串顺序
~~~

## php 数组扩展

### 定义数组方式

~~~php
// 1, 使用array关键字
$arr = array('y1', 'y2');
// 2, 使用中括号包裹
$arr = ['y1', 'y2'];
// 3, 隐式定义数组
$arr[] = 'y1';
$arr[0] = 'y1';
$arr[1] = 'y2';
// 多维数组定义
$arr = array(
  array(3,3,3),
  array(3,3,3)
);
// 获取数组长度
count($arr);
~~~

### 数组特点

~~~php
// 整数下标或字符串下标
$arr = [ '231' => 'y1' ];
// 不同下标可以混合存在
$arr = ['231' => 'y1', 1 => 'y2'];
// 数组顺序为放入顺序为准，跟下标无关
$arr = [1=> 'y1', 0=> 'y2'];
// 特殊下标自动进行转换
$arr[false] = false; // 0
$arr[true] = true; // 1
$arr[null] = null; // ""
~~~

### 数组遍历

~~~php
$arr = array(0,1,2,3,4,5,6);
foreach($arr as $key){
    // $key 索引值
    echo $arr[$key];
}
~~~

### 相关函数

~~~php
// list函数(解析赋值？)
$arr = array(1, 2);
list($one, $two) = $arr;
echo $one,'--',$two; // 1--2

// sort($arr)/rsort($arr) -> 顺/逆序排序(下标重排)
// asort($arr)/arsort($arr) -> 顺/逆序排序(下标保留)
// ksort($arr)/krsort($arr) -> 顺/逆序排序(按照键名)
// shuffle($arr) -> 打乱数组元素

// reset($arr) -> 将数组指针回到首位
// end($arr) -> 将数组指针指向最后一位
// next($arr) -> 指针下移, 取得下一个元素的值
// prev($arr) -> 指针上移, 取得上一个元素的值
// current($arr) -> 当前指针的元素值
// key($arr) -> 当前指针对应的下标值

// count($arr) -> 统计数组中元素的数量
// array_push($arr, $val) -> 往数组尾部添加一个元素
// array_pop($arr) -> 往数组尾部取出一个元素
// array_unshift($arr, $val) -> 往数组头部添加一个元素
// array_shift($arr) -> 往数组头部取出一个元素
// array_reverse($arr) -> 将数组元素顺序取反
// in_array($arr, $val) -> 判断数组是否存在某个个元素
// array_keys($arr) -> 获取元素的所有下标, 组成返回一个索引数组
// array_values($arr) -> 获取一个元素的所有值, 组成返回一个值数组

~~~

