---
title: Git 统一代码风格(eslint)
date: 2020-11-01
categories:
  - Notes
  - git
tags: 
  - git
---

Git 中结合 Eslint。让代码在没有通过 Eslint 的情况下 禁止提交。 **pre-commit 、husky、eslintignore**
## 1.初始化仓库

`git init`

## 2.安装eslint

**创建项目**：`npm init`
**本地安装**：`npm i eslint --save-dev`
**设置启动命令(package.json)**

~~~json
{
  "scripts": { "lint": "eslint src", "lint:create": "eslint --init" }
}
~~~

[自定义命令名]`eslint src`[校验目录代码]   	[自定义命令名]:`eslint init`[生成配置文件]

## 3.运行 eslint 初始化

`npm run lint:create`

## 4.安装 husky

`npm install husky --save-dev`

## 5.配置 package.json

~~~json
{
  "husky": {
    "hooks": {
      // 提交前，执行npm run link 不然不能提交
      "pre-commit": "npm run link",
      "pre-push": "npm test"
    }
  }
}
~~~

## 6.忽略 module 文件

在Git根仓库创建.gitignore文件，写入

~~~
/node_modules
~~~

## 7.git 进行提交

`git commit -m "commit v1"`

这时候，提交时如果检测到js语法的错误，那么提交将会被阻止

## EditorConfig

在团队开发中，统一的代码格式是必要的。但是不同开发人员使用的编辑工具可能 不同，这样就造成代码的不统一。

目前为止，还是有很多人陷入在 tabs vs spaces 之类的争论中。不是每个人都在严 格要求自己的代码规范和风格，对于多人协作的项目这容易出现问题。毕竟每个人所用 的 IDE 和编辑器都可能不同。

EditorConfig 帮助开发人员定义和维护不同编辑器之间一致的编码风格。 EditorConfig 项目由定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使 编辑器能够读取文件格式并坚持已定义的样式。编辑器配置文件易于阅读，并且可以很 好地与版本控制系统一起工作。

你只需配置一个 .editorconfig 文件，在其中设置好要遵守的代码规范，放在项目 的根目录下，就能够在几乎所有的主流 IDE 和编辑器中复用了，可以将 .editorconfig 文件也提交到版本控制系统中，就不需要针对不同 IDE 和编辑器再单独进行设置了。

### 配置文件

EditorConfig 插件会自动在项目中寻找名为 .editorconfig 的配置文 件，每个文件的样式偏好会自动根据该文件所在文件夹的 .editorconfig 文 件向上寻找所有同名文件，直到某个配置的文件种包含了 root=true。最接 近该文件的配置文件中的设置优先最高
