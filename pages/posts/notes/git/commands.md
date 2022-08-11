---
title: Git 项目命令集
date: 2020-11-01
categories:
  - Notes
  - git
tags: 
  - git
---

一般情况下，`git add`、`git commit` 其实都是一些基层指令的集合

- git add

  > `git add ./`  将目录下所有文件进行以下操作(存入项目对象，在存入暂存区)
  >
  > ↓
  >
  > `git hash-object -w 文件名`	(修改了多少个文件目录中的文件，次命令就要被执行多少次)
  >
  > 	↓
  >	
  > 	`git ipdata-index ....` 		(存入暂存区)

- git commit

  > `git commit -m "注释内容"`  暂存区存入数据库，并对应创建树对象，提交对象
  >
  > ↓
  >
  > `git write-tree`		创建树对象
  >
  > 	↓
  >	
  > 	`git commit-tree`	  提交对象

<!-- more -->

~~~sh
# 存文件
git hash-object -w [文件路径]
# 返回文件对应键值
git hash-object [文件路径]
# 根据键值拉取数据
git cat-file -p [filehash]

# 查看暂存区
git ls-files -s
# 查看树对象
git cat-file -p master^{tree}（或者是树对象的 hash）
# 暂存区生成树对象存入库
git write-tree
~~~

~~~sh
# 初始化仓库
git init
# 检查当前文件状态
git status

# 将修改添加到暂存区
git add ./
# 查看哪些更新还没有暂存
git diff
# 查看哪些更新已暂存准备下次提交
git diff –cached | git diff –staged (1.6.1 以上)

# 将暂存区提交到版本库
git commit -m [注释]
# 跳过暂存区直接提交到版本库
git commit -a
~~~

~~~sh
# 查看历史记录
git log
# 查看所有分支的所有操作记录
git reflog
~~~

退回版本并创建、切换该分支

> 首先`git reflog`找到旧版本hash值，在调用` git branch -b 分支名 提交对象hash`

直接退回旧版本

> git reset [分支hash]`：将`HEAD`、`Index`、`Working`直接跳到所对应分支上

## 提交注释规范

一般情况下，提交 `GIT` 时的注释可以分成几类，可以用几个动词开始

~~~sh
"feat(name): [description]" # 新功能，重大更改
"fix(name|id): [description]"  # 修复 bug
"chore: [description]"      # 一些杂活，例如更新，发布，添加版本........
"refactor: [description]"   # 重构些什么
"docs(name):[description]"  # 文档的编写，修复，添加
~~~

`name` 可看情况而定，例如

~~~sh
"fix(#1120): 修复页面跳转错误"
"fix(useFunction): 修复方法....."
~~~

尽量将注释缩减为一句话，不要包含详细的内容。

假如有 `Issues` 系统，其中可以包含 `Issue` 的 `ID`。比如：`Issue #123456`，包含作者的信息。比如 `by Bruce`

~~~sh
git commit -m 'Issue #[issue number] by [username]: [Short summary of the change].'
~~~

## 分支操作

~~~sh
# 创建分支
git branch [新分支名称] [?指定分支名称/hash, 可选, 默认当前分支]
# 切换分支
git checkout [分支名称/hash]
# 根据当前分支, 创建并切换分支
git checkout -b [新分支名称]

# 删除分支
git  branch -d [分支名称]
# 删除分支(强制)
git  branch -D [分支名称]

# 当前合并指定分支, 执行命令有可能会进入快进合并|非快进合并
# 快进合并 > 当前分支与父分支没有冲突, git 执行命令不会发生 commit, 会直接合并代码
# 非快进合并 > 产生冲突, 自动生成一次 commit, 解决冲突提交即可
git merge [分支名称]

# 查看分支列表
git branch
# 查看哪些分支已经合并到当前分支, 通常此列表下没有* 标记的分支可以删除
git branch --merged
# 查看没有合并到当前分支的分支列表
git branch --no-merged

# 重置基本分支
git rebase
# 重置基本分支为指定分支
git rebase [分支名]
# 重置分支不保留提交信息
git rebase --continu
~~~

## 储存操作

在分支上的工作做到一半时 如果有切换分支的需求, 我们应该将现有的工作存储起来

~~~sh
# 将当前分支上的工作推到一个栈中
git stash
~~~

完成其他工作后 切回原分支

~~~sh
# 将栈顶的工作内容还原
git stash apply || git stash apply stash@{2}
# 删除栈
git stash drop = git stash apply +  git stash drop
# 查看储存
git stash list
~~~

## 远程协助

~~~sh
# 克隆远程仓库到本地
git clone [远程仓库地址]

# 推送本地分支到远程分支
git push [远程仓库别名] [分支名]

# 拉取远程仓库更新
git fetch [?远程地址别名, 可不填, 默认当前别名]
# 拉取远程仓库更新, 并删除远程不存在的本地分支
git fetch --prune|-p
# 同步本地所有分支
git fetch -all|-a = git remote update

# 创建并切换远程分支
git checkout --track|-t [远程分支名称/hash]

# 当前分支跟踪上游分支
git branch --upstream-branch|-u [远程分支名称/hash]
# 查看分支十方跟跟踪分支绑定
git branch -vv

# 删除远程分支
git push origin --delete [远程分支名称/hash]
# 列出仍在远程跟踪但是远程已被删除的无用分支
git remote prune origin --dry-run
# 清除上面命令列出来的远程跟踪
git remote prune origin
~~~

## 标签（版本号）

~~~sh
[列出标签] $ git tag
[创建标签] $ git tag [标签名]
[指定分支创建] $ git tag [标签名] [分支名称/hash]
[创建添加注释的标签] $ git tag -a [标签名]
[创建单行注释的标签] $ git tag -a [标签名] -m [注释]
[查看标签] $ git show [标签名]

[推送标签(远程)] $ git push origin [标签名]
[删除标签(远程)] $ git push -d [标签名]
[删除标签(本地)] $ git tag -d [标签名]
[签出标签分支] $ git checkout -b [标签名]

[删除所有远程标签] $ git tag | foreach-object -process { git push origin --delete $_ }
[删除所有本地标签] $ git tag | foreach-object -process { git tag -d $_ }
~~~

## 代码别名

Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入 完整的 Git 命令，可以通过 git config 文件来轻松地为每一个命令设置一个别名。 `$ git config --global alias.co checkout` 

~~~sh
[查看分支] $ git config --global alias.br branch
[进行提交] $ git config --global alias.ci commit
[查看状态] $ git config --global alias.st status
[查看暂存] $ git config --global alias.lifs "ls-files -s"
[分叉历史] $ git config --global alias.brlog "log --oneline --decorate --graph --all"
~~~

## 配置代理（解决 403 错误）

~~~sh
# 配置 http 与 https 的代理地址 (vpn port)
git config --global http.proxy "http://127.0.0.1:1080"
git config --global https.proxy "http://127.0.0.1:1080"
# 取消 http 与 https 的代理地址
git config --global --unset http.proxy
git config --global --unset https.proxy
~~~

## 配置 HOST（解决无法访问）

1. 访问 https://github.com.ipaddress.com/ ，查询 `github.com`、`github.global.ssl.fastly.net` 对应的 `IP Address`。

2. 直接在浏览器中输入`IP`地址访问 `Github`，网页正常响应。

3. 编辑 `C:\Windows\System32\drivers\etc` 下的 `host` 文件，将 `github` 的 `IP` 的地址保持在 `hosts` 文件中。

   ~~~sh
   [IP Address] github.com # [IP Address] 为 ipaddress 中的 IP Address
   ~~~
