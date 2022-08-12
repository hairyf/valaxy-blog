---
title: Git 回退与指针
date: 2019-10-07 16:48:00
categories:
  - Notes
  - Git
tags: 
  - Git
---
Git 强大的撤销、版本回退功能，让我们在开发的过程中能够随意的回到任何一个时间点的状态，本文将从如下三个方面介绍 Git 中的后悔药：

- 工作区的代码想撤销
- add 到暂存区的代码想撤销
- 提交到本地仓库的代码想撤销

<!-- more -->

## 工作目录文件撤销

**命令**：`git checkout -- 文件名` 
**作用**：将在工作目录中对文件的修改撤销

## 暂存区文件撤销

**命令**：`git reset HEAD 文件名` 
**作用**：将文件从暂存区中撤回到工作目录

## 覆盖提交

**命令**：`git commit --amend` 
**作用**：这个命令会将暂存区中的文件提交，并将上一次提交覆盖

如果你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作

1. `git commit -m 'initial commit' --->[提交了但发现还有东西要修改]`
2. `git add forgotten_file ---> [修改后添加入暂存]`
3. `git commit –amend  ---> [覆盖之前的提交]`

最终你只会有一个提交 - 第二次提交将代替第一次提交的结果

## reset 回退三部曲 

reset 做的第一件事是移动 HEAD 的指向，假设我们再次修改了 file.txt 文件并第三次提交它。 现在的历史看 起来是这样

![commitv3](https://pic.imgdb.cn/item/62ecec7b8c61dc3b8ec7790b.jpg)

### 回退提交

**`git reset –soft HEAD~`，回退指针。**这与改变 HEAD 自身不同（checkout 所做的）；reset 移动 HEAD 指向的分支。

![reset](https://pic.imgdb.cn/item/62ecec8a8c61dc3b8ec7b603.jpg)

看一眼上图，理解一下发生的事情：它本质上是**撤销了上一次 git commit 命令**。 当你在运行 git commit 时，Git 会创建一个新的提交，并 移动 HEAD 所指向的分支来使其指向该提交。

当你将它 reset 回 HEAD~（HEAD 的父结点）时，其实就是把该分支移 动回原来的位置，而不会改变索引和工作目录。 现在你可以更新索引并**再次运 行 git commit 来完成 git commit --amend 所要做的事情了。**

### 回退暂存区（索引） 

![resetv2](https://pic.imgdb.cn/item/62ecec988c61dc3b8ec7ebd5.jpg)

**注意： git reset HEAD~ 等同于 git reset –mixed HEAD~**

理解一下发生的事情：它依然会撤销一上次 提交，但还会 取消暂存 所有 的东西。 于是，我们回滚到了所有 git add 和 git commit 的命令执行之前。

### 回退工作目录 

![resetv3](https://pic.imgdb.cn/item/62ececa38c61dc3b8ec81251.jpg)

**`git reset --hard HEAD~`：你撤销了最后的提交、git add 和 git commit 命令以及工作目录 中的所有工作。**

**必须注意**：--hard 标记是 reset 命令唯一的危险用法，它也是 Git 会 真正地销毁数据的仅有的几个操作之一。 其他任何形式的 reset 调用都可 以轻松撤消，但是 --hard 选项不能，因为它强制覆盖了工作目录中的文件。 在这种特殊情况下，我们的 Git 数据库中的一个提交内还留有该文件的 v3 版 本，**我们可以通过 reflog 来找回它**。但是若该文件还未提交，Git 仍会覆 盖它从而导致无法恢复。

## reset 文件路径

reset 还可以给它提供一个作用路径。 若 指定了一个路径，**reset 将会跳过第 1 步**，并且将它的作用范围限定为指定的文 件或文件集合。 

![resetfile](https://pic.imgdb.cn/item/62ececaf8c61dc3b8ec8387e.jpg)

现在，假如我们运行 **git reset file.txt** （这其实是 git reset --mixed HEAD file.txt 的简写形式，），它会：
`移动 HEAD 分支的指向 （因为是文件这一步忽略）`
`将 file.txt 从 HEAD 复制到索引中`

![resetfilev2](https://pic.imgdb.cn/item/62ececca8c61dc3b8ec89044.jpg)

## reset [bran-hash]（指定指针）

`git reset [分支hash]`：将`HEAD`、`Index`、`Working`直接跳到所对应分支上

## checkout [bran-hash]（指定指针）

**运行 git checkout [branch] 与运行 git reset [branch] 非常相似**，它会更新三者使其看起来像 [branch]，不过有两 点重要的区别

**首先不同于 reset --hard，checkout 对工作目录是安全的**，它会 通过检查来确保不会将已更改的文件弄丢。而 reset --hard 则会不做检 查就全面地替换所有东西。

第二个重要的区别是如何更新 HEAD。 reset 会移动 HEAD 分支的 指向，而 checkout 只会移动 HEAD 自身来指向另一个分支。

### 退回v2版本并创建、切换该分支

`$ git branch -b 分支名 提交对象hash`
