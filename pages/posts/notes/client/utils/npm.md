---
title: NPM 软件包管理工具
categories:
  - Notes
  - Client
  - utils
tags:
  - npm
---

`CommonJS`包规范是理论，`NPM (Node Package Manager)` 是其中一种实践。对于`Node`而言，`NPM`帮助其完成了第三方模块的发布、安装和依赖等。借助`NPM`，`Node`与第三方模块之间形成了很好的一个生态系统。

<!-- more -->

~~~markdown
## 查看版本
	• npm –v
## 帮助说明
	• npm
## 查看所有模块的版本
	• npm version
## 搜索模块包
	• npm search 包名
## 下载当前项目所依赖的包
	• npm install
## 在当前目录安装包
	• npm install 包名
## 全局模式安装包（全局安装的包一般都是一些工具）
	• npm install 包名 –g
## 安装包并指定版本
	• npm install 包名@1	|-这里会下1.几版本的最新版本，也可以指定详细版本1.2.4....-| 
## 安装包并添加到生产依赖中(dependencies)
	• npm install 包名 –save 简写：-S
## 安装包并添加到开发依赖中(devDependencies)
	• npm install 包名 –save-dev 简写：-D
## 删除一个模块
	• npm remove 包名
## 从本地安装
	• npm install 文件路径
## 从镜像源安装
	• npm install 包名 –registry=地址
## 设置镜像源
	• npm config set registry 地址
## 初始化项目
	• npm init
## 用户登录 (本机第一次发布包)
	• npm adduser
## 用户登录 (非第一次发布项目)
	• npm login
## 上传该项目
	• npm publish
## 上传该项目 (私有包发布)
	• npm publish --access public
~~~

## 引用机制

通过`npm`下载的包，直接通过包名引入即可。`node`在使用模块名称来引入模块时，它会先在当前目录的node_modules中寻找是否含有该模块。如果有则直接使用，如果没有则去上一级目录的`node_modules`中寻找，如果有则直接使用，如果没有则再去上一级目录寻找，直到找到磁盘的根目录，如果依然没有，则报错。

## 目录配置

1. 配置本地仓库地址
在指定目录创建 `node_global` 和 `node_cache`

2. 运行配置指令
~~~sh
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
~~~

3. 添加环境变量(NODE_PATH)

- `D:\nodejs\node_global\node_modules`
- `D:\nodejs\node_global`

## 基本配置

检测信息
- `npm list -global`

配置镜像
- `npm config set registry [url]`

## 镜像配置

使用 nrm 能更加方便的配置镜像，nrm 使用简单，易于配置。

```sh
npm i nrm -g   # 安装
nrm use taobao # 使用 taobao 源
nrm use yarn   # 使用 yarn   源
nrm use npm    # 使用 npm    源(默认)

nrm ls # 列出可使用源
```

## package.json

Node 项目在项目根目录中名为 package.json 的文件中跟踪依赖关系和元数据。这是你项目的核心。它包含名称、描述和版本之类的信息，以及运行、开发以及有选择地将项目发布到 NPM 所需的信息。

- scripts:     小型脚本列表
- name:        软件包名称
- version:     软件包版本
- description: 软件包描述
- homepage:    软件包首页
- main:        软件包程序入口
- keywords:    软件包关键字(检索关键字)
- dependencies:    生产依赖(packages)
- devDependencies: 开发依赖(packages)
- repository:      仓库描述(git)

## 引用 NPM Package

~~~js
// ES6语法:import xxx from '包名'
import xxx from 'math'
// node.js语法：require('包名')
var math = require('math')
console.log(math.add(123, 456))
~~~

## 命令行工具

npm 与 node 搭配还具有解析 package 的脚本参数，一般可以用于制作命令行工具。

1. 初始化项目
```sh
npm init
```

2. 修改包字段
```json
{
  "bin": { // 修改 package.json 中bin字段
    "open-dev": "./index.js"
  }
}
```

3. 新建程序 `index.js`

```js
#!/usr/bin/env node
// 第一行意思是让系统自己去找node的执行程序，该行是必不可少的。
console.log('我被执行了')

// process.argv 可用来获取命令行参数
console.log(process.argv) // ['...', '...', ....]
```

4. 执行 link 并运行

```sh
# 执行 npm link
npm link
# 运行脚手架工具
open-dev
```

### 使用 commander.js 简化操作

完整的 [node.js](http://nodejs.org/) 命令行解决方案，可以用于开发脚手架工具的使用。

~~~js
#!/usr/bin/env node
const program = require('commander')
// 配置命令
program.option('-d, --debug', '开启调试模式')
// 读取命令行参数
program.parse(process.argv)
// 判断命令行参数
if (program.debug)
  console.log('已开启调试模式....')

// 命令行运行 `open-dev -d`
~~~

指令携带参数

~~~js
#!/usr/bin/env node
// 配置命令, 携带值 <type>
program.option('-r, --run <type>', '开启微信开发者工具')
// 读取命令行参数
program.parse(process.argv)
// 判断命令行参数
if (program.run) {
  // 读取传入值
  const type = program.opts().run
  console.log(type)
}
~~~
