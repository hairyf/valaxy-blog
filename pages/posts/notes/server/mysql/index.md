---
title:  MySQL 关系型数据库管理系统
date: 2019-04-02
categories:
  - Server
  - MySQL
tags: 
  - MySQL
---

MySQL是一个**[关系型数据库管理系统](https://baike.baidu.com/item/关系型数据库管理系统/696511)**，由瑞典MySQL AB 公司开发，属于 [Oracle](https://baike.baidu.com/item/Oracle) 旗下产品。MySQL 是最流行的[关系型数据库管理系统](https://baike.baidu.com/item/关系型数据库管理系统/696511)之一，在 WEB 应用方面，MySQL是最好的 [RDBMS](https://baike.baidu.com/item/RDBMS/1048260) (Relational Database Management System，关系数据库管理系统) 应用软件之一。

<!-- more -->

MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。

MySQL所使用的 SQL 语言是用于访问[数据库](https://baike.baidu.com/item/数据库/103728)的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是[开放源码](https://baike.baidu.com/item/开放源码/7176422)这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。

例如 [Oracle](https://baike.baidu.com/item/Oracle)、[DB2](https://baike.baidu.com/item/DB2)、[SQL Server](https://baike.baidu.com/item/SQL Server)等相比，MySQL [1] 自有它的不足之处，但是这丝毫也没有减少它受欢迎的程度。对于一般的个人使用者和中小型企业来说，MySQL提供的功能已经绰绰有余，而且由于 MySQL是[开放源码](https://baike.baidu.com/item/开放源码)软件，因此可以大大降低总体拥有成本。

## 启动与停止

~~~sh
## 方式一: 通过命令行开启
NET START <服务名称>
NET STOP <服务名称>
## 方式二: 计算机--右键--管理--服务
~~~

## 登录与退出

~~~sh
## 登录数据库
mysql [-h主机名称 -p端口号] -u用户名 -p密码
## 退出数据库
exit | ctrl+c
~~~

