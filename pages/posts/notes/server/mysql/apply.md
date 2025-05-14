---
title:  MySQL 基本应用
date: 2019-04-03
categories:
  - Notes
  - Server
  - MySQL
tags:
  - MySQL
---

## 数据类型

数据类型是指列、存储过程参数、表达式和局部变量的数据特征，它决定了数据的存储格式，代表了不同的信息类型。有一些数据是要存储为数字的，数字当中有些是要存储为整数、小数、日期型等...

<!-- more -->

~~~sh
## 数值类型
tinyint[,(m)] ## 字节[1] 范围[-128, 128]
smallint[,(m)] ## 字节[2] 范围[-32768, 32768]
mediumint[,(m)] ## 字节[3] 范围[-8388608, 8388608]
int[,(m)] ## 字节[4] 范围[-2147483648 , 2147483648]
smallint ## 比int更小
bigint[,(m)] ## 字节[8] 范围[-92233720........ ~ 92233720........]

## 浮点型
float[,(m,d)] ## 字节[4] 单精度浮点数值
double[,(m,d)] ## 字节[8] 双精度浮点数值

## 日期型(在生产里，日期时间型，往往用的比较少，而是用数字类型来取代日期类型)
date ## 字节[3] YYYY-MM-DD
time ## 字节[3] HH:MM:SS
year ## 字节[1] YYYY
datetime ## 字节[8] YYYY-MM-DD HH:MM:SS
timestamp ## 字节[8] YYYYMMDD HHMMSS

## 字符型
char[,(m)] ## 字节[0-255] 定长字符串
varchar[,(m)] ## 字节[0-65535] 变长字符串
tinytext[,(m)] ## 字节[0-255](2^5-1) 短文本字符串
text[,(m)] ## 字节[0-65535](2^16-1) 长文本数据
mediumtext[,(m)] ## 字节[0-16777215](2^24-1) 中等长度文本数据
longtext[,(m)] ## 字节[0-4294967295](2^22-1) 极大文本数据
enum[,(m)] ## 字节[1-2] 取决于枚举值的个数(最多65535个值)
set[,(m)] ## 字节[1-4/8] 取决于set成员的数目(最多64个成员)
~~~

## 基本命令

~~~sh
## 查询所有数据库
SHOW DATABASES;
## 查询当前数据库
SHOW TABLES;
## 创建测试数据库
CREATE DATABASE <数据库名称>;
## 进入测试数据库
USE <数据库名称>;
## 删除数据库
DROP DATABASE <库名称>;
~~~

## 创建表
~~~sh
CREATE TABLE <表名称> (
`<字段名称>` <类型> <, 其他关键字>,
 ....
)

## 建表类型
CHAR(length) # 字符串（长度）
INT # 数字

## 建表关键字
UNSIGNED ## 非负数
AUTO_INCREMENT ## 自增
NOT NULL ## 数据空时不为 null
UNIQUE ## 唯一的，不可重复
PRIMARY KEY([...keys]) ## 主键组合(keys)
~~~

## 表命令

~~~sh
## 更改表名称
RENAME TABLE <表名称> TO <新的表名称>;
## 更改表中字段名
ALTER TABLE <表名称> CHANGE <字段名称> <新字段名称> <数据类型] [, 其他关键字];
## 删除表
DROP TABLE <表名称>;
## 查看表结构
DESC <表名称>
~~~

## 表索引

~~~sh
# 创建索引
CREATE INDEX <索引名称> ON <表名称> ([...<字段>(长度)], <排序>)
# CREATE INDEX xxxIndex ON xxxTable(name(3), ASC)

# 查看索引
SHOW INDEX|INDEXES|KEYS

# 删除索引
DROP INDEX <索引名称> ON <表名称>

~~~

## 插入数据

```sh
INSERT [INTO] [(col_name, ...)]
VALUES|VALUE ({value|DEFAULT}, ...), (...)

# 根据字段排序插入
INSERT INTO myTable
VALUES(12, '张山', ...)

# 根据 key value 插入
INSERT INTO myTable
SET name='李四', address='武汉'

# 根据定义字段插入
INSERT INTO myTable(id, name, ...)
VALUES(12, '张山', ...)
```

## 删除数据

```sh
DELETE FROM <tbl_name>
[WHERE <condition>]
[ORDER BY ...]
[LIMIT <count>];

DELETE FROM  testTable WHERE name='王五';
```

## 修改数据

~~~sh
## 基本语法(单字段)
UPDATE <表名称> SET <字段名称> = <新值>;
## 基本语法(多字段)
UPDATE <表名称> SET
<字段名称1> <排序方式>,
<字段名称2> <排序方式>;
~~~

## 查询数据

~~~sh
## 输出表中多个字段
SELECT <字段1>, <字段2>... FROM <表名称>;
## 输出表中的所有字段
SELECT * FROM <表名称>;
## 输出常量值
SELECT 100;
## 输出表达式
SELECT 100/50;
SELECT 10+10;
SELECT 10%9;
SELECT 10/5;
## 输出版本号
SELECT VERSION();

## 输出结果起别名
SELECT 100%98 AS <别名名称>
## 输出查询起别名
SELECT <字段1> AS <字段1别名>,
	   <字段2> AS <字段2别名>
FROM <表名称>
## 别名输出特殊字符
SELECT 100%98 AS '_out';
## 可忽略AS关键字
SELECT 100%98 '_out';

## 查询字段时去除重复字段
SELECT DISTINCT <字段1> FROM <表名称>
## IFNULL函数 -> 字段为null指定为某个值
SELECT IFNULL(<字段名称>, <值>) FROM <表名称>

## CONCAT函数 -> 多个字段或字符串拼接为一个字段
SELECT CONCAT(<字段|字符串>, .....) AS 结果 FROM <表名称>
~~~

基本字段：

~~~sh
# 返回的列/表达式
SELECT #Required
# 从中检索的表
FROM # 仅从表选择列数据时使用
# 筛选条件
WHERE
# 分组说明
GROUP BY
# 组级过滤
HAVING
# 输出排序顺序(ASC|DESC)
ORDER BY
# 检索的行数
LIMIT
~~~

携带运算：

~~~sh
SELECT cust_name, cust_id+100
FROM customers;
~~~

携带条件输出：

~~~sql
SELECT cust_name,
CASE WHEN
sex='M' then '男' else '女'
END AS '性别'
FROM customers;
~~~
