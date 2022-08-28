---
title: MongoDB 分布式关系数据库
date: 2020-05-01 14:00:00
categories:
  - Notes
  - Server
  - MongoDB
tags: 
  - MongoDB
---

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。它支持的数据结构非常松散，是类似 `json` 的 `bson` 格式，因此可以存储比较复杂的数据类型。Mongo 最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

在 MongoDB 中，数据库（database）和集合（collection）都不需要手动创建，当我们创建文档（document）时，如果文档所在的集合或数据库不存在会自动创建数据库和集合。

<!-- more -->

## 安装与启动

点击安装后配置环境变量，添加 MongoDB 路径，即可启动服务器。

```sh
## 启动服务器, 可指定数据库路径和端口
mongod --dppath [?path] --port [?port]

## 启动客户端, 可用于操作数据库
mongo
```

## 基本指令

显示当前的所有数据库：

```sh
show dbs | show databases
```

进入指定数据库：

```sh
use [database-name]
```

显示当前数据库：

```sh
db
```

显示数据库中所有的集合：

```sh
show collections
```

## 设置路径

1. 在任意目录创建 `data`，在 `data` 下创建 `db` 和 `log` 文件夹。

2. 在软件 `bin` 的上级目录创建文件配置 `mongod.cfg`。

3. 以管理员的身份打开命令行窗口，执行如下路径。

```sh
sc.exe create MongoDB 
  binPath = "\"mongod的bin目录\mongod.exe\" --service --config=\"mongo的安装目录\mongod.cfg\""
  DisplayName = "MongoDB"
  start = "auto"
```

4. 启动 MongoDB 服务。

> 如果启动失败，证明上边的操作有误，在控制台输入 `sc delete MongoDB` 删除之前配置的服务然后从第一步再来一次。

