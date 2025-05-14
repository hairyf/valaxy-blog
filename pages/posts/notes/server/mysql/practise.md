---
title:  MySQL 案例练习
date: 2019-04-04
categories:
  - Notes
  - Server
  - MySQL
tags:
  - MySQL
---

根据课堂学习的内容进行案例练习，熟系 MySQL 的各种创建、删除、修改还有其他各种数据库操作。

<!-- more -->

## 创建学生表

```sql
-- 创建学生表
CREATE TABLE Student(
  -- 日期 Primary Key
  Sno char(9) PRIMARY KEY,
  -- 名称
  Sname char(20) unique,
  -- 性别
  Ssex char(2) ,
  -- 年龄
  Sage smallint,
  -- 所属系
  Sdept char(20)
);

-- 创建课程表
CREATE TABLE Course(
  -- 课程编号
  Cno char(4) PRIMARY KEY,
  -- 课程名称
  Cname char(40) not null,
  -- 先修课(外键 Cno)
  Cpno char(4),
  -- 学分
  Ccredit smallint,
  -- Key Cpno 是 Course 的外键 Cno
  foreign key(Cpno) references Course(Cno)
);

-- 创建选课表
CREATE TABLE SC(
  Sno char(9),
  Cno char(4) ,
  Grade smallint,
  PRIMARY KEY(Sno,Cno),
  foreign key(Sno) references Student(Sno),
  foreign key(Cno) references Course(Cno)
);
```

## 插入学生表

```sql
-- 创建选课表
CREATE TABLE SC(
  Sno char(9),
  Cno char(4) ,
  Grade smallint,
  PRIMARY KEY(Sno,Cno),
  foreign key(Sno) references Student(Sno),
  foreign key(Cno) references Course(Cno)
);

-- 插入学生表
INSERT INTO student VALUES
  ('201215121', '李勇', '男', 20, '计算机系'),
  ('201215122', '刘晨', '女', 19, '计算机系'),
  ('201215123', '王敏', '女', 18, '数学系'),
  ('201215125', '张立', '男', 19, '信息系');

-- 插入课程表
INSERT INTO course VALUES ('2', '数学',          null,  2);
INSERT INTO course VALUES ('6', '数据处理',     null,   2);
INSERT INTO course VALUES ('4', '操作系统',     '6',    3);
INSERT INTO course VALUES ('7', 'Pascal语言',   '6',    4);
INSERT INTO course VALUES ('5', '数据结构',     '7',    4);
INSERT INTO course VALUES ('1', '数据库',       '5',    4);
INSERT INTO course VALUES ('3', '信息系统',     '1',    4);

-- 插入选课表
INSERT INTO SC VALUES
  ('201215121', '1', 92),
  ('201215121', '2', 85),
  ('201215121', '3', 88),
  ('201215122', '2', 90),
  ('201215122', '3', 80);
```

## 复制表与数据

```sql
-- 复制表
CREATE TABLE student2 LIKE student;
-- 复制表数据
INSERT INTO student2 SELECT * FROM student;
```

## 连接查询多个表

```sql
-- 查询多个表连接
SELECT * FROM student, course;
-- 查询多个表连接, 并 student.sno 与 sc.sno 相同才拼接
SELECT * FROM student JOIN sc ON student.Sno = sc.Sno;

-- 左外连接: 除了匹配的行外, 还包括左表有的, 但在右表不匹配的行
LEFT JOIN
-- 右外连接: 除了匹配的行外, 还包括右表有的, 但在左表不匹配的行
RIGHT JOIN
```

## 条件查询（一）

```sql
-- 查询男性的信息
SELECT * FROM customers
  WHERE sex='M';

-- 查询id在 903~912 之间的客户
-- cust_id > 903 AND cust_id < 912 相同效果
SELECT * FROM customers
  WHERE cust_id BETWEEN 903 AND 912;

-- 查询客户 ID 是 803、806、908 的三个客户的信息
SELECT * FROM customers
  WHERE cust_id IN (903, 906, 908);

-- 查询没有联系方式为空的客户
SELECT * FROM customers
  WHERE cust_contact IS NULL;

-- 查询成绩高于 89 的学生的学号与姓名信息
SELECT Sno, Sname
  FROM student
  WHERE
  Sno IN(SELECT Sno FROM sc WHERE grade > 89);

-- 查询成绩大于90分的学号
SELECT DISTINCT sno FROM sc
  WHERE grade > 90;
```

## 条件多表查询

```sql
-- 查询所有选修了 1 号课程的学生姓名
SELECT Sname FROM student
  WHERE EXISTS(
    SELECT * FROM sc
    WHERE sno = student.sno AND cno = '1'
  );
-- 查询所有选修了 1 号课程的学生姓名
SELECT distinct sname FROM student JOIN sc ON student.sno=sc.sno
  WHERE sc.cno=1;
```

## 条件查询（二）

```sql
-- 查询选修了课程的学生号
SELECT sno FROM sc;

-- 查询计算机系全体学生
SELECT SName from student
  WHERE SDept = '计算机系';

-- 查询所有年龄在20岁以下的学生姓名和年龄
SELECT Sname, Sage FROM student
  WHERE Sage < 20;

-- 查询成绩大于90分的同学的学号
SELECT distinct sno FROM sc
  WHERE grade > 90;
```

## 查询函数

```sql
-- 查询表总数（行）
SELECT count() FROM student;

-- 查询总人数并分组
SELECT cust_address, sex, count(*) as '人数'
  FROM customers
  GROUP BY cust_address, sex;

-- 查询总人数并分组并过滤
SELECT cust_name, cust_address
  FROM customers
  GROUP BY cust_address, cust_name
  HAVING count(*) <= 1;

-- 查询倒叙
SELECT sno, grade FROM sc
  WHERE cno = '3'
  ORDER BY grade DESC;

-- 查询选修了课的数量
SELECT count(distinct sno) FROM sc;

-- 查询各个课程号及相应的选课人数
SELECT cno, count(sno) FROM sc
GROUP BY cno;

-- 查询行数
SELECT cust_id, cust_name
FROM customers
ORDER BY cust_id
LIMIT 1, 3;
```

## 练习题（商品）

```sql
SELECT 商品编号 FROM 商品编号
FROM 价格 BETWEEN 10 and 15;

SELECT 商品编号, 采购日期, 采购数量 FROM 采购
WHERE 编号 IN (SELECT 编号 FROM 采购员 WHERE 采购员='刘聪');

SELECT 职工号, SUM(工资) as 总收入 FROM 报酬
GROUP BY 工程号;

CREATE VIEW VSC AS
SELECT 商品编号, 编号, 采购日期 FROM 采购 WHERE 采购数量 > 100;

CREATE VIEW VSH AS(会员编号, 会员名, 性别, 联系电话)
SELECT 会员编号, 会员名, 性别, 联系电话 FROM 会员
WHERE 性别 = '男';
```

## 表视图

```sql
-- create or replace view的意思就是若数据库中已经存在这个名字的视图的话，就替代它，若没有则创建视图；
 create VIEW customers_view
  AS
  SELECT * FROM customers WHERE sex='M'
  with check option;

 CREATE VIEW is_student AS
    SELECT * FROM student
    WHERE sdept='信息系'
    WITH CHECK OPTION;

 INSERT INTO customers_view VALUES('周明', 909, 'M', '武汉市', '洪山区');

 UPDATE FROM customers_view
  SET cust_address='上海市';

 DELETE FROM customers_view
  WHERE cust_name='周明';
```

## 账号管理

MySQL 的用户账号及相关信息都存储在一个名为 `mysql` 的数据库中，这个数据库里有一个名为 `user` 的数据表，包含了所有用户账号，并且它用一个名为 `user` 的列储存用户的登录名。可以使用下述 SQL 语句 查看 MySQL 数据库的使用者账号。

```sql
select user from mysql.user;
```

作为一个新安装的系统，当前只有一个名为 root 的用户。这个用户是在重构安装 MySQL 服务器后，由系统创建的，并被赋予操作和管理 MySQL 的所有权限，一次，root 用户拥有对整个 MySQL 服务器完全控制的能力。

```sql
create user 'zhangSan'@'localhost' identified by '123',
            'lisi'    @'localhost' identified by password '*531E182E@F...',
```

> 创建用户账户，必须拥有 MySQL 中 `mysql` 数据库的 `insert` 权限或全局 `create user` 权限；

删除用户：

```sql
drop user lisi;
```

修改用户：

```sql
rename user 'zhangSan'@'localhost' to 'wangwu'@'localhost'
```

修改密码：

```sql
-- 修改名为 hello 散列值
select password('hello')
-- 修改密码
set password 'wangwu'@'localhost' = password('hello')
```

## 用户授权

成功创建用户账户后，需要为该用户访问适当的权限，因为新创建的用户账户没有访问权限，只能登录 MySQL 服务器，不能执行任何数据库操作，使用 `show grants for` 就可以查看用户的授权表：

```sql
show grants for 'wangwu'@'localhost'
```

可以看到用户 `wangwu` 仅有一个权限 `usage on *.*`，其实质表示该用户在任何数据库和任何表上对任何内容都没有权限。

使用 `grant` 语句来对用户授权：

```sql
grant
  prive_type[(column_list)]
    [,prive_type[(column_list)]] ...
  ON [object_type] priv_level
  TO user_specification[,user_specification]
  [with grant option]
```

授予用户 `zhangsan` 在数据库 `mysql_test` 的表 `customers` 上拥有对列 `cust_id` 和列 `cust_name` 的 `select` 权限。

```sql
grant select(cust_id, cust_name)
  ON mysql_test.customers
  TO 'wangwu'@'localhost'
```

切换用户，则需要输入 `exit` 跳出 `mysql`，任何输入 `mysql -u[用户名] -p[密码]` 来切换不同权限的用户。

```sql
exit;

mysql -uwangwu -phello;
```

## 事务与并发

所谓事务是用户定义的一个数据操作序列，这些操作可作为一个完整的工作单元，要么全部执行，要么全部不执行，是一个不可分割的工作。例如在关系型数据库中，一个事务可以是一条 SQL 语句，一组 SQL 语句或整个程序。

事务与程序很相似，但他们是两个彼此相连而又不同的概念；程序是静止的，事务是动态的。是程序的执行而不是程序本身；同一程序的多个独立执行可以同时进行，而每一步执行则是一个不同的事务。

要让 DBMS 知道哪些动作属于一个事务，而不是单纯的数据库操作或程序，必须要显式告诉数据库系统，这可以通过标记事务的开始与结束实现。在 SQL 中，用户定义事务的语句一般有这三条： `begin transaction`、`commit`、`rollback`，且事务通常是以 `begin transaction` 开始，以 `commit`、`rollback` 结束。

`rollback` 表示回滚，即事务运行的过程中若发生了某种故障，事务不能继续执行，则回滚到事务开始时的状态。
