---
title: Git 远程仓库(remote)
date: 2019-10-08 16:00:00
categories:
  - Notes
  - Git
tags: 
  - Git
---

在实际工作中，往往使用一台服务器充当版本库的载体，这台服务器 24 小时开机，其他用户从服务器的版本库克隆一份到自己的电脑上，并且将各自的提交推送到服务器仓库中，也从仓库中拉去别人的提交。但自己搭建Git的服务器也不是很方便，也没有必要。我们往往使用一些第三方机构提供的 Git 仓库托管服务，例如 Github、Gitee，（相当于使用别人的 Git 服务器）

<!-- more -->

## HTTPS

https方式clone一个repo或者pull和push到远端只需要根据提示提供自己的username和password即可。这种方式比价的简便和便于理解，使用自己在平台的账号和密码进行授权并进行repo相关操作。

### 1. 配置本地仓库

`git init.......`

**配置仓库用户信息**

**用户名称**：` git config user.name "[name]"` 
**用户邮箱**：` git config user.email [email]`
**检查已有的配置信息**：`git config --list`
**删除配置信息**： `git config --unset user.email`

`git add ./......git commit......`

### 2. 配置远程仓库别名

`git remote add <shortname> <url>`

**显示远程仓库使用的 Git 别名与其对应的 URL**
`git remote –v`
**查看更多信息**
`git remote show [remote-name]`
**重命名**
`git remote rename pb paul`

### 3. 推送本地项目到远程仓库

`git push [远程仓库别名] [分支名]`



## SSH远程提交

**1. 粘贴以下文本，替换为您的GitHub电子邮件地址。**

`$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

使用提供的电子邮件作为标签，这将创建一个新的ssh密钥。

`> Generating public/private rsa key pair.`

**2. 当提示您“输入要在其中保存密钥的文件”时，请按Enter。这接受默认文件位置。**

`> Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]`

**3. 在提示符下，键入一个安全密码。有关更多信息，请参阅[“使用SSH密钥密码短语”](https://help.github.com/en/articles/working-with-ssh-key-passphrases)。**

`> Enter passphrase (empty for no passphrase): [Type a passphrase]`
`> Enter same passphrase again: [Type passphrase again]`

**4. 打开`C:/Users/Administrator/.ssh/id_rsa.pub`，将其添加到GitHub的SSH密匙中**

![add-ssh](https://pic.imgdb.cn/item/62fb4d8d16f2c2beb1ed39e2.jpg)

**Git绑定连接**：`$ ssh -T git@github.com`

~~~
// 无法确定主机真实性，密匙为......，是否继续连接
The authenticity of host 'github.com (13.229.188.59)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
~~~

**输入安全密码**

~~~
Warning: Permanently added 'github.com,13.229.188.59' (RSA) to the list of known hosts.
Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':[Type a passphrase]
~~~

### 1. 配置本地仓库

`git init.......`

**配置仓库用户信息**

**用户名称**：` git config user.name "[name]"` 
**用户邮箱**：` git config user.email [email]`
**检查已有的配置信息**：`git config --list`
**删除配置信息**： `git config --unset user.email`

`git add ./......git commit......`



### 2. 配置远程仓库别名

`git remote add <shortname> <url>`
![ssh-url](https://pic.imgdb.cn/item/62fb4d9816f2c2beb1ed475c.jpg)

**显示远程仓库使用的 Git 别名与其对应的 URL**
`git remote –v`
**查看更多信息**
`git remote show [remote-name]`
**重命名**
`git remote rename pb paul`


### 3. 推送本地项目到远程仓库

`git push [远程仓库别名] [分支名]`


## HTTPS&SHH

**如果我想要给别人的仓库提交代码**

- 我需要把我本机的SSH配置到别人账户下，然后采用SSH方式提交代码
- 把我的账号添加到那个仓库的Collaborators，直接使用https方式提交	

**总结**

- 使用https方式提交的不需要添加SSH，但是使用SSH方式提交的必须要添加本机的SSH
- A账户想要给A账户下的仓库提交代码，直接使用https方式就行
- A账户想要给B账户下的仓库提交代码
  - **添加Collaborators使用https方式** or **添加SSH，使用SSH方式提交**



## 克隆远程仓库到本地

`git clone [远程仓库url]（克隆时不需要 git init）`

![git-add-url](https://pic.imgdb.cn/item/62fb4dac16f2c2beb1ed6036.jpg)

**默认克隆时为远程仓库起的别名为 origin。**
`$ git remote > [origin]`

远程仓库名字 “origin” 与分支名字 “master” 一样，在 Git 中并没有任何特别 的含义一样。 同时 “master” 是当你运行 git init 时默认的起始分支名字，原因仅仅 是它的广泛使用，“origin” 是当你运行 git clone 时默认的远程仓库名字。 如果你运 行 git clone -o booyah，那么你默认的远程仓库别名为 booyah



## 给予提交的权限

如果你想与他人合作，并想给他们提交的权限，你需要把他们添加为 “Collaborators”。 如果 Ben，Jeff，Louise 都在 GitHub 上注册了， 你想给他们推送的权限，你可以将他们添加到你的项目。 这样做会给 他们 “推送” 权限，就是说他们对项目有读写的权限 点击边栏底部的 “Settings” 链接

~~~
GitHub项目 >
 设置(options) > 
	管理访问(Manage access) >
	 邀请合作者(Invite a collaborator) >
		 指定GitHub用户名(或邮箱)
			指定用户接收权限 	或	邀请码链接
				指定用户就可以提交了
~~~



## 拉取远程仓库更新

`git fetch [remote-name]`

访问远程仓库，从中拉取所有你还没有的数据。 执行完后，远程分支就会出现新的内容！！
****它并不会自动合并或修改你当前的工作**。当准备好时你必须手动将其合并入你的工作。**
**合并**：`git merge 远程分支`

`git fetch [remote-name]`

**直接拉取分支数据到当前分支**(需要绑定远程分支)`git branch -u origin/serverfix （--set-upstream-to）`

`git pull`



## 推送其他分支

想要公开分享一个分支时，需要将其推送到有写入权限的远程仓 库上。 本地的分支并不会自动与远程仓库同步 - 你必须显式地推送想要 分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而 将需要和别人协作的内容推送到公开分支。

**推送本地的 serverfix 分支，将其作 为远程仓库的 serverfix 分支**

`git push origin serverfix`

下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程跟踪分支 origin/serverfix ， 指向服务器的 serverfix 分支的引用。

[^注意]:当抓取到新的远 程跟踪分支时，本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 serverfix 分支 - 只有一 个不可以修改的 origin/serverfix 指针。

**更换远程仓库分支名**

`git push origin serverfix:awesomebranch`



## 跟踪远程分支

### 本地跟踪分支

从一个远程跟踪分支（origin/master）检出一个本地分支会 自动创建一个叫做 “跟踪分支（有时候也叫做 ” “上游分支” ：master）。 **只有主分支 并且 克隆时才会自动建跟踪分支.**

跟踪分支是与远程分支有直接关系的本地分支。 如果在一个跟踪分支上 输入 git pull，Git 能自动地识别去哪个服务器上抓取、合并到哪个 分支。

### 本地分支跟踪远程分支

**在新建分支时，可以指定想要跟踪的远程分支**
`git checkout -b 本地分支名 远程跟踪分支名`

**如果已经拉取数据(`git fatch origin`)，可以直接指定远程分支名创建本地分支名，并跟踪远程分支。**
`git checkout --track 远程跟踪分支名`

**将当前分支跟踪一个刚刚拉取下来的远程分支**
`git branch -u origin/serverfix （--set-upstream-to）`

**查看分支是否有跟踪远程分支绑定**
`git branch -vv`



## 删除远程分支

**删除远程分支**：`git push origin --delete serverfix`

**列出仍在远程跟踪但是远程已被删除的无用分支**：`git remote prune origin --dry-run` 

**清除上面命令列出来的远程跟踪**：`git remote prune origin`



## 派生

如果你想要参与某个项目，但是并没有推送权限，这时可以对这个项 目进行“派生”（Fork）。 派生的意思是指，GitHub 将在你的空间中创 建一个完全属于你的项目副本，且你对其具有推送权限。通过这种方式， 项目的管理者不再需要忙着把用户添加到贡献者列表并给予他们推送权 限。 人们可以派生这个项目，将修改推送到派生出的项目副本中，并通 过创建合并请求（Pull Request）来让他们的改动进入源版本库。

### 基本流程

1. 从 master 分支中创建一个新分支 （自己 fork 的项目）
2. 创建分支并提交一些修改来改进项目 （自己 fork 的项目）
3. 将这个分支推送到 GitHub 上 （自己 fork 的项目）
4. 创建一个合并请求
5. 讨论，根据实际情况继续修改
6. 项目的拥有者合并或关闭你的合并请求

~~~
git remote add <shortname 源仓库> <url 源仓库>
git fetch 远程仓库名字 
git merge 对应的远程跟踪分支
~~~

> 每次在发起新的 Pull Request 时 要去拉取最新的源仓库的代码 而不是自己 fork 的那个仓库。
