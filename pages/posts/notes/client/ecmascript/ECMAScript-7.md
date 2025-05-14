---
title: ECMAScript 7
date: 2019-08-07
categories:
  - Notes
  - Client
  - ECMAScript
tags:
  - ECMAScript
  - ES6
---

ECMAScript 7又以JavaScript 2016而被熟知，是正在快速开发的新一代JavaScript编程语言标准。尽管该标准需要等到明年才发布，但是诸多浏览器已经做好了准备。同往常一样，Chrome和Firefox率先做出改变，而今天召开的微软开发者网络会议上，负责HTML5和开源网页标准的主要项目经理 David Catuhe 也宣布Edge浏览器开始部署ECMAScript 7功能。

<!-- more -->

## includes

includes() 作用,是查找一个值在不在数组里,若是存在则返回true,不存在返回false.

```javascript
['a', 'b', 'c'].includes('a') // true
  ['a', 'b', 'c'].includes('d') // false
```

接收俩个参数：要搜索的值和搜索的开始索引

```javascript
['a', 'b', 'c', 'd'].includes('b') // true
  ['a', 'b', 'c', 'd'].includes('b', 1) // true
  ['a', 'b', 'c', 'd'].includes('b', 2) // false
```
