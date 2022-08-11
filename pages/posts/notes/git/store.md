---
title: Git 储存(store)
date: 2020-11-01
categories:
  - Notes
  - git
tags: 
  - git
---

有时，当你在项目的一部分上已经工作一段时间后，所有东西都进入了混乱的状 态，而这时你想要切换到另一个分支做一点别的事情。 问题是，你不想仅仅因为 过会儿回到这一点而为做了一半的工作创建一次提交。 针对这个问题的答案是`git stash` 命令

<!-- more -->

## 创建储存

命令会将未完成的修改保存到一个栈上，而你 可以在任何时候重新应用这些改动**(git stash apply)**

## 查看存储

`git stash list`
`git stash apply stash@{2}`

如果不指定一个储藏，Git 认为指定的是最近的储藏

## 应用储藏并从栈上清除

`git stash pop`

## 移除储藏

`git stash drop`
