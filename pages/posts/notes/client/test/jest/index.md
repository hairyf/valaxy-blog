---
title: Jest 自动化部署测试配置
date: 2021-06-12 14:00:00
categories:
  - Notes
  - Client
  - Test
tags:
  - Test
---

随着前端的发展，项目变的越来越复杂，这时候就引入前端工程化的概念，有人认为前端工程化就是高质量的代码设计，高质量的代码实践，就是前端工程化。其实工程化还有一个很重要的环节，就是自动化代码测试。

随着前端的发展，前端设计的领域已经越来越多，也越来越复杂。这就对我们前端工程化能力，提出了更高的要求。 好的前端工程化一般包括三个大的方面：

- 前端自动化测试（前提条件）
- 高质量的代码设计
- 高质量的代码实现

虽然一些公司，到现在还是没有前端自动化测试，甚至 BOSS 会说前端自动化测试会拉低工作效率，认为用处不大。这是完全错误的想法，你可以看到 Github 上任何大型的前端项目都有自动化测试代码。

- Ant Design : React UI 组件库
- Vue.js : 国内最流行的构建用户界面的渐进式 JavaScript 框架。
- React.js : 世界最流行的 JavaScript MVC 框架。

<!-- more -->

## Jest 基本特点

- 基础很好：就是性能好、功能多、简单易用。
- 速度快： 单独模块测试功能，比如说有两个模块 A 和 B，以前都测试过了，这时候你只改动 A 模块，在次测试，模块 B 不会再跑一次，而是直接测试 A 模块。
- API 简单 ：非常简单，数量也少。
- 隔离性好：Jest 里会有很多的测试文件等待我们使用，Jest 的执行环境都是隔离，这样就避免不同的测试文件执行的时候互相影响而造成出错。
- IDE整合：Jest 直接可以和很多编辑器（VSCode）进行融合，让测试变的更加简单。
- 多项目并行：比如我们写了 Node.js 的后台项目，用 React 写了一个前台项目，Jest 是支持他们并行运行，让我们的效率更加提高了。
- 快出覆盖率：（测试代码覆盖率） 对于一个项目的测试都要出覆盖率的，Jest就可以快速出这样的覆盖率统计结果。

### 集成测试区别

- **单元测试**：英文是(unit testing) 单,是指对软件中的最小可测试单元进行检查和验证。前端所说的单元测试就是对一个模块进行测试。
- **集成测试**：也叫组装测试或者联合测试。在单元测试的基础上，将所有模块按照涉及要求组装成为子系统或系统，进行集成测试。

随着前端的发展，现在无论我们些React还是写Vue，其实代码已经全部都模块化了，所以使用Jest测试不需要额外加入任何的操作了。

## Jest 基本使用

```sh
# 安装 JEST
npm install jest@24.8.0 -D
# 初始化
jest --init
```

```makefile
The following questions will help Jest to create a suitable configuration for your project
## 以下问题将帮助Jest为您的项目创建合适的配置
? Would you like to use Jest when running "test" script in "package.json"? » (Y/n)
## 运行测试脚本是否使用package.json中?

#↓↓↓↓↓↓↓↓↓#

? Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit.
## 选择测试环境
>   node
    jsdom (browser-like)

#↓↓↓↓↓↓↓↓↓#

? Do you want Jest to add coverage reports? » (y/N)
## 您是否希望Jest添加覆盖率报告(y)

#↓↓↓↓↓↓↓↓↓#

? Which provider should be used to instrument code for coverage? » - Use arrow-keys. Return to submit.
## 使用哪个提供程序检测覆盖率代码
>   v8
    babel

#↓↓↓↓↓↓↓↓↓#

? Automatically clear mock calls and instances between every test? » (y/N)
## 是否自动清除每个测试之间的模拟调用和实例？(y)

## 自动化测试
jest --watchAll
## 测试覆盖率
jest --coverage
```

### 配置测试（jest.config）

~~~js
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true, // 是否清除测试模拟调用和实例
  coverageDirectory: 'coverage', // 生成覆盖率目录文件名称
  testEnvironment: 'node', // 默认值jsdom,
}
~~~

## 支持 ES6 Modules

1. 安装 babel

```sh
npm i @babel/core@7.4.5 @babel/preset-env@7.4.5 --dev
```

2. 配置 `.babelrc`

~~~json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
~~~
