---
title: Git 标签(tag)
date: 2020-11-01
categories:
  - Notes
  - git
tags: 
  - git
---

Git 可以给历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会 使用这个功能来标记发布结点（v1.0 等等）。

<!-- more -->

## 列出标签 

`git tag`

## 创建标签

### 当前分支创建

`git tag 1.0`

### 指定分支创建

`git tag v1.4 commitHash`

### 创建附注标签

[打开文本编辑器添加注释]`git tag -a v1.4`  
[可以指定分支]`git tag -a v1.4 commitHash` 	
[可以单行注释]`git tag -a v1.4 commitHash -m 'my version 1.4'` 

## 查看标签 

`git show` 可以显示任意类型的对象（git 对象 树对象 提交对象 tag 对象）

**git show tagname**

## 远程标签

默认情况下，git push 命令并不会传送标签到远程仓库服务器上。 在创建完 标签后你必须显式地推送标签到 共享服务器上。你可以运行
`git push origin [tagname]`

## 删除标签

删除标签 要删除掉你本地仓库上的标签，可以使用命令 git tag -d 。 例如，可以使用下面的命令删除掉 一个轻量级标签
`git tag -d v1.4`

**注意**：上述命令并不会从任何远程仓库中移除这个标签，你必须使用 `git push  :refs/tags/` `来更新你的远程仓库`
`git push origin :refs/tags/v1.4`

## 检出标签分支

如果你想查看某个标签所指向的文件版本，可以使用 `git checkout` 命令
`git checkout tagname`

虽然说这会使你的仓库处于“分离 头指针（detacthed HEAD）”状态。在“分 离头指针”状态下，如果你做了某些更改然后提交它们，标签不会发生变化，但你 的新提交将不属于任何 分支，并且将无法访问，除非访问确切的提交哈希。因此， 如果你需要进行更改——比如说你正在修复旧版本的错 误——这通常需要创建一 个新分支：
`git checkout -b version2`
