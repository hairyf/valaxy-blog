---
title: HTML5 超文本语言规范
categories:
  - Notes
  - Client
  - HTML
tags:
  - HTML
date: 2018-05-19
---

HTML5是构建Web内容的一种语言描述方式。HTML5是互联网的下一代标准，是构建以及呈现互联网内容的一种语言方式．被认为是互联网的核心技术之一。HTML产生于1990年，1997年HTML4成为互联网标准，并广泛应用于互联网应用的开发。

HTML5是Web中核心语言HTML的规范，用户使用任何手段进行网页浏览时看到的内容原本都是HTML格式的，在浏览器中通过一些技术处理将其转换成为了可识别的信息。HTML5在从前HTML4.01的基础上进行了一定的改进，虽然技术人员在开发过程中可能不会将这些新技术投入应用，但是对于该种技术的新特性，网站开发技术人员是必须要有所了解的。

<!-- more -->

## 新增标签

### 状态标签

~~~html
<meter value="30" min="20" max="80">度量衡</meter>
<progress value="50" max="100">任务的进度条</progress>
~~~

<meter value="60" min="20" max="80"></meter><br />
<progress value="50" max="100"></progress><br  />

### 列表标签

~~~html
<input type="text" placeholder="你最喜欢的女明星是？" list="zby"/>
<datalist id="zby">
		<option value="1">10岁的周冬雨</option>
		<option value="2">20岁的周冬雨</option>
		<option value="3">30岁的周冬雨</option>
		<option value="4">40岁的周冬雨</option>
</datalist>
~~~

<input type="text" placeholder="你最喜欢的女明星是？" list="zby"/>
<datalist id="zby">
		<option value="1">10岁的周冬雨</option>
		<option value="2">20岁的周冬雨</option>
		<option value="3">30岁的周冬雨</option>
		<option value="4">40岁的周冬雨</option>
</datalist>

### 拼音标注

~~~html
<ruby>
蕊<rt>rui</rt>
</ruby>
~~~

<ruby>蕊<rt>rui</rt></ruby>

### 字体标记

~~~html
<mark>安安</mark>
~~~

<mark>安安</mark>
