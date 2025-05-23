---
title: ECMAScript 标准化语言
date: 2019-08-05 16:00:00
categories:
  - Notes
  - Client
  - ECMAScript
tags:
  - ECMAScript
---

ECMAScript是一种由 Ecma 国际（前身为欧洲计算机制造商协会，European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，所以它可以理解为是JavaScript的一个标准,但实际上后两者是ECMA-262标准的实现和扩展。

<!-- more -->

## ECMAScript 和 JavaScript 的关系

1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。

该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。

## ES6 与 ECMAScript 2015 的关系

ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？

2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。

但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。

## ECMAScript 的历史

1996年11月，Netscape公司将Js提交给国际化标准组织ECMA，当初该语言能够成为国际化标准。 1997年，ECMAScript 1.0版本推出。（在这年，ECMA发布262号标准文件（ECMA-262）的第一版，规定浏览器脚本语言的标准，并将这种语言称为ECMAScript，也就是ES1.0版本。） 1998年6月，ES 2.0 版发布。 1999年12月，ES 3.0 版发布，并成为JS的通行标准，得到广泛支持。 2007年10月，ES 4.0 版草案发布。 2008年7月，由于各方分歧太大，ECMA决定终止ES 4.0的开发。转而将其中涉及现有功能改善的一小部分发布为ES 3.1 。但是回后不久将其改名为ES 5.0版； 2009年12月，ES 5.0 版正式发布。

2011年6月，ES 5.1 版发布，并成为ISO国际标准（ISO/IEC 16262：2011）。 2013年3月，ES 6 草案终结，并且不再添加新的功能。 2013年12月，ES 6 草案发布。 2015年6月，ES 6 正式版本发布。

从此后面每年6月都会发布一个正式版本，所以目前最新的版本是2021年6月发布的ES12。
