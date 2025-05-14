---
title: NodeJS 操作系统（os）
date: 2020-05-03 17:00:00
categories:
  - Notes
  - Server
  - NodeJS
tags:
  - NodeJS
---

os 模块是 Node.js 官方提供的，可以获取操作系统的一些参数，如操作系统CPU架构、CPU内核信息、空闲系统内存等。

<!-- more -->

- 查看 CPU 架构
	- `os.arch()`
- CPU内核信息/状态
	- `os.cpus()`
- 系统内存总量
	- `os.totalmem()`
- 系统空闲内存量
	- `os.freemem()`
- 操作系统名称
	- `os.type()`
- 系统正常运行时间
	- `os.uptime()`
- 操作系统主机名
	- `os.hostname()`
