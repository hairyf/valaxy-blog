---
title: PHP 系统错误代号
date: 2019-04-03
categories:
  - Server
  - PHP
tags: 
  - PHP
---

php 中所有看到的错误代码在 php 中都被定义成了系统常量（可以直接使用）


## 系统错误

~~~php
E_PARSE; // 编译错误
E_ERROR; // fatal error 致密错误, 会导致代码不能正确继续执行（出错的位置断掉）
E_WARNING; // warning 警告错误, 不会影响代码执行, 但可能得到意想不到的结果
E_NOTICE; // notice 通知错误, 不会影响代码执行
~~~

<!-- more -->

## 用户错误

用户在使用自定义错误触发的时候，会使用到的错误代号（系统不会用到）

~~~php
E_USER_ERROR;
E_USER_WARNING;
E_USER_NOTICE;
~~~

## 其他错误

~~~php
E_ALL; // 代表所有错误
E_ALL & ~E_NOTICE; // 排除通知级别
E_WARNING | E_NOTICE; // 只要警告和通知
~~~

## 触发错误函数

~~~php
header('Content-type:text/html;charset=utf-8');
$b = 0;
if ($b == 0){
  trigger_error('除数不能为0'); // 该函数默认报错为E_USER_NOTICE
  trigger_error('除数不能为0', E_USER_ERROR); // 设置为错误
}
~~~

## 错误配置

可以在运行php脚本设置，也可以在php.ini中配置，脚本中定义的配置项级别比配置文件高。

~~~php
Error_reporting(); // 设置对应错误显示级别
Ini_set('配置文件的配置项', '配置值'); // 设置脚本中配置
Ini_set('error_reporting', E_ALL); // 是否开启错误
Ini_set('display_errors', 1); // 是否开启错误
~~~

## 自定义错误处理

最简单的错误处理：trgger_errors()函数，该函数默认不会阻止系统报错。

php系统提供了一种用户处理错误的机制；用户自定义错误处理函数，然后将该函数增加到系统错误的句柄中，然后系统会在碰到错误之后，使用用户定义的错误函数。

**使用set_error_handler定义自定义错误**

~~~php
// 对应参数为错误处理回调, 第二个是错误的级别
set_error_handler(callback $error_handler, [, E_ALL | E_STRICT]);
handler(
  int $errno, // 
  string $errstr,
  [, string $errfile],
  [, int $errline],
  [, array $errcontext]
)
~~~

~~~php
function my_error($errno, $errstr, $errfile, $errline){
  // 判断: 当前会碰到的错误有哪些??
  if (!(error_reporting() & $errno)) return false;
  // 判断错误类型
  switch($errno){
    case E_ERROR:
    case E_USER_ERROR:
      echo "fatal error in file {$errfile} on line {$errline} <br/>";
      echo "error info: {$errstr}";
      break;
    case E_WARNING:
    case E_USER_WARNING:
      echo "Warning in file {$errfile} on line {$errline} <br/>";
      echo "error info: {$errstr}";
      break;
    case E_NOTICE:
    case E_USER_NOTICE:
      echo "Notice in file {$errfile} on line {$errline} <br/>";
      echo "error info: {$errstr}";
      break;
  }
}
set_error_handler('my_error');
~~~
