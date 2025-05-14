---
title: Git 基础概念应用
date: 2019-10-06 17:00:00
categories:
  - Notes
  - Git
tags:
  - Git
---

git 地址 : https://git-scm.com/download/win，下载完安装包之后，双击 exe 安装包，可以看到如下图窗口界面，一直点击下一步，就安装完成了。

<!-- more -->

## 基础的 linux 命令

~~~sh
[查看版本] $ git --version
[清除屏幕] $ clear
[控制台输出信息] $ echo 'test content'
[输入信息输出文件] $ echo 'test content' > test.txt
[输出文件夹/文件列表] $ ll
[输出指定文件夹的文件夹/文件列表] $ find <dir>
[只输出文件] $ find <dir> -type f
[删除文件] rm <dir|file>
[重命名文件] mv <源文件> <新名称>
[查看文件内容] cat <file>
[查看文件内容(可编辑模式)] vim <file>
	# 按 i 进插入模式 进行文件的编辑
	# 按 esc 键|按:键 进行命令的执行
	# q! 强制退出（不保存）
	# wq 保存退出
	# set nu 设置行号
~~~

## 初始化新仓库

对现有的某个项目开始用 Git 管理，只需到此项目所在的目录

`git init`

作用：初始化后，在当前目录下会出现一个名为 .git 的目录，所有 Git 需要 的数据和资源都存放在这个目录中。不过目前，仅仅是按照既有的结构框架初始化 好了里边所有的文件和目录，但我们还没有开始跟踪管理项目中的任何一个文件。

## .git目录

- `hooks` 目录包含客户端或服务端的钩子脚本；
- `info` 包含一个全局性排除文件
- `logs` 保存日志信息
- `objects` 目录存储所有数据内容；
- `refs` 目录存储指向数据的提交对象的指针（分支）
- `config` 文件包含项目特有的配置选项
- `description` 用来显示对仓库的描述信息
- `HEAD` 文件指示目前被检出的分支
- `index` 文件保存暂存区信息

## Git对象

向数据库写入内容 并返回对应键值

~~~sh
echo 'test content' | git hash-object -w --stdin
~~~

`-w` 选项指示 hash-object 命令存储数据对象；若不指定此选项，则 该命令仅返回对应的键值

`-stdin（standard input）`选项则指示该命令从标准输入读取内容； 若不指定此选项，则须在命令尾部给出待存储文件的路径

~~~sh
# 存文件
git hash-object -w [文件路径]
# 返回文件对应键值
git hash-object -w [文件路径]
# 返回文件对应键值
git hash-object [文件路径]
# 根据键值拉取数据
git cat-file -p [filehash]
~~~

-p 选项可指示该命令自动判断内容的类型，并为我们显示格式友好的内容

记住文件的每一个版本所对应的 SHA-1 值并不现实，且在 Git 中，文件名并没有被保存——我们仅保存了文件的内容

[^注意 ]:当前的操作都是在对本地数据库进行操作 不涉及暂存区

## 树对象

树对象（tree object），它能解决文件名保存的问题，也允许我们将多个文件 组织到一起。Git 以一种类似于 UNIX 文件系统的方式存储内容。所有内容均以 树对象和数据对象(git 对象)的形式存储，其中树对象对应了 UNIX 中的目录项， 数据对象(git 对象)则大致上对应文件内容。一个树对象包含了一条或多条记录（每条记录含有一个指向 git 对象或者子树对象的 SHA-1 指针，以及相应的模式、类 型、文件名信息）。一个树对象也可以包含另一个树对象。

### 构建树对象

我们可以通过 `update-index`，`write-tree`，`read-tree` 等命令来构建 树对像并塞入到暂存区。

利用 `update-index` 命令 为 `test.txt` 文件的首个版本——创建一个 暂存区。并通过 `write-tree` 命令生成树对像。

~~~sh
git update-index --add --cacheinfo 100644 83baae61804e65cc73a7201a7252750c76066a30 test.txt
~~~

- 文件模式

  > 100644，表明这是一个普通文件
  >
  > 100755，表示一个可执行文件
  >
  > 120000，表示一个符号链接。

- --add 选项

  > 因为此前该文件并不在暂存区中 首次需要—add

- --cacheinfo 选项

  > 因为将要添加的文件位于 Git 数据库中，而不是位于当前 目录下 所有需要—`cacheinfo`

~~~sh
# 查看暂存区
git ls-files -s
# 查看树对象
git cat-file -p master^{tree}（或者是树对象的 hash）
# 暂存区生成树对象存入库
git write-tree
~~~

新增 new.txt 将 new.txt 和 test.txt 文件的第二个版本塞入暂存区。并通过 write-tree 命令生成树对像。

~~~sh
echo 'new file' > new.txt
git update-index --cacheinfo 100644 / 1f7a7a472abf3dd9643fd615f6da379c4acb3e3a test.txt
git update-index --add new.txt git write-tree
~~~

将第一个树对象加入第二个树对象，使其成为新的树对象

~~~sh
git read-tree --prefix=bak 06e21bb0105e2de6c846725a9a7172f57dd1af96
~~~

![最后的树对象](https://pic.imgdb.cn/item/62ece7678c61dc3b8eb56655.jpg)

现在有三个树对象（执行了三次 write-tree），分别代表了我们想要跟踪 的不同项目快照。然而问题依旧：若想重用这些快照，你必须记住所有三个 SHA-1 哈希值。 并且，你也完全不知道是谁保存了这些快照，在什么时刻保 存的，以及为什么保存这些快照。而以上这些，正是提交对象（commit object） 能为你保存的基本信息

## 提交对象

我们可以通过调用 commit-tree 命令创建一个提交对象，为此需要指定一个树 对象的 SHA-1 值，以及该提交的父提交对象（如果有的话 第一次将暂存区做快 照就没有父对象）

~~~sh
# 创建提交对象
echo 'first commit' | git commit-tree [树哈希]` 返回:`fdf4fc3344e67ab068f836878b6c4951e3b15f3d
# 查看提交对象
git cat-file -p [提交对象哈希]
~~~

提交对象的格式很简单： 它先指定一个顶层树对象，代表当前项目快照；然后是作者/提交者信息（依 据你的 user.name 和 user.email 配置来设定，外加一个时间戳）；留空 一行，最后是提交注释

![提交对象视图](https://pic.imgdb.cn/item/62ece78e8c61dc3b8eb5e2ae.jpg)
