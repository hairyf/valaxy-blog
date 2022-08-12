---
title: Git 高级概念应用(CRUD)
date: 2019-10-07 14:00:00
categories:
  - Notes
  - Git
tags: 
  - Git
---

## 初始化仓库:`git init`（初始化）

**作用**：初始化后，在当前目录下会出现一个名为 .git 的目录，所有 Git 需要 的数据和资源都存放在这个目录中。不过目前，仅仅是按照既有的结构框架初始化 好了里边所有的文件和目录，但我们还没有开始跟踪管理项目中的任何一个文件。

工作目录下面的所有文件都不外乎这两种状态**：已跟踪** 或 **未跟踪**

已跟踪的文件是指本来就被纳入版本控制管理的文件，在上次快照中有它 们的记录，工作一段时间后，它们的状态可能是**已提交**，**已修改**或者**已暂存**

所有其他文件都属于未跟踪文件。它们既没有上次更新时的快照，也不在 当前的暂存区域。

初次克隆某个仓库时，工作目录中的所有文件都属于已跟踪文件，且状态 为已提交；在编辑过某些文件之后，Git 将这些文件标为已修改。我们逐步把 这些修改过的文件放到暂存区域，直到最后一次性提交所有这些暂存起来的文 件。使用 Git 时的文件状态变化周期如下图所示

## 检查当前文件状态：`git status`

确定文件当前处于什么状态

**如果创建一个新文件 README,保存退出后运行 git status 会看到该文件出现 在未跟踪文件列表中**：

~~~sh
On branch master
Untracked files:
 (use "git add <file>..." to include in what will be committed)
 README
nothing added to commit but untracked files present (use "git add" to
track)
~~~

## 跟踪新文件:`git add`（暂存）

**作用**：跟踪一个新文件

**当运行此命令在运行 git status 命令，会看到 README 文件已被跟踪，并处于暂存 状态**：

~~~sh
Changes to be committed:
 (use "git reset HEAD <file>..." to unstage)
 new file: README
~~~

只要在 “Changes to be committed” 这行下面的，就说明是已暂存状态。

如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。在 git add 后面可以指明要跟踪的**文件**或**目录路径**。如果是目录的话，就说明要递归 跟踪该目录下的所有文件。

> 其实 git add 的潜台词就是把目标文件快 照放入暂存区域，也就是 add file into staged area，同时未曾跟踪过的文件标 记为已跟踪。

现在 README 文件都已暂存，下次提交时就会一并记录到仓库。假设此时， 你想要在 README 里再加条注释，重新编辑存盘后，准备好提交。不过且慢，再 运行 git status 看看：

~~~sh
On branch master
Changes to be committed:
 (use "git reset HEAD <file>..." to unstage)
 new file: README
Changes not staged for commit:
 (use "git add <file>..." to update what will be committed)
 (use "git checkout -- <file>..." to discard changes in working directory)
 modified: README
~~~

README 文件出现了两次！一次算已修改，一次算已暂存，这怎么可能呢？ 好吧，实际上 Git 只不过暂存了你运行 git add 命令时的版本，如果现在提交，那 么提交的是添加注释前的版本，而非当前工作目录中的版本。所以，**运行了 git add 之后又作了修订的文件，需要重新运行 git add 把最新版本重新暂存起来**

~~~sh
$ git add README
$ git status
~~~

git diff 命令.这个命令它已经能解决我们 两个问题了：当前做的哪些更新还没有暂存？有哪些更新已经暂存起来准备 好了下次提交？

### 查看哪些更新还没有暂存

命令：`git diff（不加参数直接输入 git diff）`

### 查看哪些更新已暂存准备下次提交

命令： `git diff –cached 或者 git diff –staged(1.6.1 以上)`

## 提交更新:`git commit`（提交）

当暂存区域已经准备妥当可以提交时，在此之前，请一定要确认还有什么修改 过的或新建的文件还没有 git add 过，否则提交的时候不会记录这些还没暂存起来 的变化。所以，每次准备提交前，先用 git status 看下，是不是都已暂存起来了， 然后再运行提交命令 `git commit`

`git commit`会启动文本编辑器，以便输入本次提交的说明 默认的提交消息包含最后一次运行 git status 的输出，放在注释行里， 另外开头还有一空行，供你输入提交说明。你完全可以去掉这些注释行， 不过留着也没关系，多少能帮你回想起这次更新的内容有哪些。

**以用 -m 参数后跟提交说明的方式，在一行命令中提交更新**：`git commit –m “message xxx”`

提交时记录的是放在暂存区域的快照，任何还未暂存的仍然保持已修改状态， 可以在下次提交时纳入版本管理。每一次运行提交操作，都是对你项目作一次快照， 以后可以回到这个状态，或者进行比较

### 跳过使用暂存区域

尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁 琐。Git 提供了一个跳过使用暂存区域的方式，只要在提交的时候，给 git commit 加上 -a 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交， 从而**跳过 git add 步骤 `git commit -a -m [注释]`**

## 移除文件: `git rm 文件名`（删除）

要从 Git 中移除某个文件，就必须要从已跟踪文件清单中注册删除（确切地说， 是在暂存区域注册删除），然后提交。可以用 **git rm** 命令完成此项工作，并连带 从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。

[^注意]:删除并不是真正意义上的删除，rm命令运行后要进行`git add ./ 以及git commit -m 我删除了`，删除操作实际上只是删除了工作空间的文件 ，并且在数据库里面会存着删除的信息

## 文件改名:`git mv 文件名`（改名）

`git mv laoliu.txt laoliuliu.txt`
`git commit -a / git status`

~~~
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    laoliu.txt -> laoliuliu.txt
~~~

**其实，运行 git mv 就相当于运行了下面三条命令**：

~~~
$ mv laoliu.txt laoliuliu.txt
$ git rm laoliu.txt
$ git add laoliuliu.txt
~~~

## 查看历史记录: `git log`（提交）

在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 `git log` 命令

**默认不用任何参数的话，git log 会按提交时间列出所有的更新**，最近的 更新排在最上面。 正如你所看到的，这个命令会列出每个提交的 `SHA-1` 校验和、 作者的名字和电子邮件地址、提交时间以及提交说明。

只显示一行：`git log --pretty=oneline`

显示一行并截取hash值：`git log --oneline`
