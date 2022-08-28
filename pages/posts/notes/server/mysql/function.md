---
title:  MySQL 常用函数
date: 2019-04-04
categories:
  - Notes
  - Server
  - MySQL
tags: 
  - MySQL
---

MySQL数据库中提供了很丰富的函数。MySQL函数包括数学函数、字符串函数、日期和时间函数、条件判断函数、系统信息函数、加密函数、格式化函数等。通过这些函数，可以简化用户的操作。

<!-- more -->

## 字符串函数

~~~sh
## length() -> 字符串字节长度
SELECT length('嘻嘻嘻') -- 9

## concat() -> 拼接字符串
SELECT concat(<字段名称|字符串>, ...) FROM <表名称>

## upper() -> 转为大写
SELECT upper('dark doctor') -- DARK DOCTOR
## lower() -> 转为小写
SELECT lower('dark doctor') -- dark doctor

## substr()/substring() -> 截取字符串
SELECT substr('闪电侠爱上了一个魏大勋', 4); -- 爱上了一个魏大勋
SELECT substr('闪电侠爱上了一个魏大勋',1,3); -- 闪电侠

## instr() -> 查询字符串在目标字符串出现的所有, 找不到则返回 0
SELECT instr('内马尔爱上了魏霞则','魏霞则'); -- 7

## trim() -> 去除前后空格(默认)或指定字符
SELECT trim(' 张翠山 '); -- 张翠山

## lpad() -> 指定长度, 左填充字符串
SELECT lead('若相惜', 10, 'w'); -- wwwwwww若相惜
## rpad() -> 指定长度, 又填充字符串
SELECT rpad('若相惜', 10, 'w'); -- 若相惜wwwwwww

## replace() -> 替换指定字符串
SELECT replace('魏大勋魏大勋-得唔得闲', '得唔得闲', '唔得闲'); -- 魏大勋魏大勋-唔得闲
~~~

## 数值函数

~~~sh
## round() -> 四舍五入(可指定小数点长度)
SELECT round(1.65); -- 2
SELECT round(-1.6545,2); -- 1.65

## ceil() -> 向上取整
SELECT ceil(1.001); -- 2
SELECT ceil(-1.001); -- -1

## floor() -> 向下取整
SELECT floor(-9.9); -- -9

## truncate() -> 指定小数点长度
SELECT truncate(1.65999, 1); -- 1.6

## mod(a, b) -> 取余(a-a/b*b)
SELECT mod(10, 3); -- 1
SELECT 10%3; -- 1
~~~

## 日期函数

~~~sh
## now() -> 当前系统日期与时间
SELECT now();
## curdate() -> 返回当前系统日期
SELECT curdate();
## curtime() -> 返回当前系统时间
SELECT curtime();

## 获取年部分
SELECT year(now()); -- 2020
SELECT year('1998-1-1'); -- 1998
## 获取月部分
SELECT month(now()); -- 15

## 日期转换为字符串
SELECT date_format(now(),'%Y年%m月%d日');
~~~

## 其他函数

~~~sh
## version() -> 版本号
SELECT version(); --  5.7.31-log
## database() -> 当前数据库
SELECT database(); -- performance_schema
## user() -> 数据库用户信息
SELECT user(); -- root@localhost
~~~

## 流程控制函数

~~~sh
## if() -> if else 效果
SELECT if(10 > 5, '大', '小') -- 大

## 判断是否有奖金(练习)
SELECT
  name,
  bonus,
  IF(bonus IS NULL, '没奖金，呵呵', '有奖金，嘻嘻')
FROM tab;

## case 关键字 -> switch case 效果
case <字段名称|表达式>
  when <值1> then <字段|表达式>
  when <值2> then <字段|表达式>
  else <字段|表达式>
end

## 根据身高计算工资(练习)
SELECT
  salary 原始工资,
  case age
    when 1.64 then salary * 1.1
    when 1.77 then salary * 1.2
  	else salary
  end as 新工资
FROM tab;
~~~

## 分组函数

分组函数用作与一组字段的统计与计算使用，分组函数又称为聚合函数或统计函数或组函数

~~~sh
## sum() -> 字段的总和
SELECT sum(<字段名称>) FROM <表名称>;
## avg() -> 平均值
SELECT avg(<字段名称>) FROM <表名称>;
## min() -> 最小值
SELECT min(<字段名称>) FROM <表名称>;
## max() -> 最大值
SELECT max(<字段名称>) FROM <表名称>;
## count() -> 字段个数
SELECT count(<字段名称>) FROM <表名称>;
~~~

