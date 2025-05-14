---
title: HTML 超文本标记语言
categories:
  - Notes
  - Client
  - HTML
tags:
  - HTML
date: 2018-05-18
---

[HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)），或功能与行为（如 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)）。

“超文本”（hypertext）是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。

HTML 使用“标记”（markup）来注明文本、图片和其他内容，以便于在 Web 浏览器中显示。HTML 标记包含一些特殊“元素”如 [`<head>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head)，
[`<title>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title)，
[`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body)，
[`<header>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)，
[`<footer>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer)，
[`<article>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)，
[`<section>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section)，
[`<p>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p)，
[`<div>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div)，
[`<span>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span)，
[`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)，
[`<aside>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside)，
[`<audio>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)，
[`<canvas>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)，
[`<datalist>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/datalist)，
[`<details>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details)，
[`<embed>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed)，
[`<nav>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav)，
[`<output>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/output)，
[`<progress>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress)，
[`<video>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
 等等等等。

<!-- more -->

## 文档元数据

元数据（Metadata）含有页面的相关信息，包括样式、脚本及数据，能帮助一些软件（例如 [搜索引擎](https://developer.mozilla.org/en-US/docs/Glossary/search_engine)、[浏览器](https://developer.mozilla.org/en-US/docs/Glossary/Browser) 等等）更好地运用和渲染页面。对于样式和脚本的元数据，可以直接在网页里定义，也可以链接到包含相关信息的外部文件。

| 元素     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| `<base>` | HTML `<base>` 元素 指定用于一个文档的根元素。一份中只能有一个 `<base>` 元素。 |
| `head`   | HTML head 元素 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。 |
| `link`   | HTML外部资源链接元素 (`<link>`) 规定了当前文档与外部资源的关系。该元素最常用于链接[样式表](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS)，此外也可以被用来创建站点图标(比如PC端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。 |
| `meta`   | HTML `<meta> `元素表示那些不能由其它HTML元相关元素 (`<base>`, `<link>`, `<script>`,`<style>` 或 `<title>`) 之一表示的任何元数据信息. |
| `style`  | HTML的`<style>`元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)的格式。 |
| `title`  | HTML `<title>` 元素 定义文档的标题，显示在浏览器的标题栏或标签页上。它只可以包含文本，若是包含有标签，则包含的任何标签都不会被解释。 |

## 分区根元素

| 元素   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| `body` | HTML `body` 元素表示文档的内容。[`document.body`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/body) 属性提供了可以轻松访问文档的 body 元素的脚本。 |

## 块级内容元素

| 元素     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| `<div>`  | 通用型的流内容容器。                                         |
| `<hr>`   | 它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。 |
| `<ul>`   | 表示一个内可含多个元素的无序列表或项目符号列表。             |
| `<li>`   | 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表(`<ol>`)，一个无序列表(`<ul>`)，或者一个菜单 (`<menu>`) |
| `<main>` | HTML `<main> `元素呈现了文档的 `<body>` 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。 |
| `<p>`    | 表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。 |
| `<pre>`  | HTML `<pre>` 元素表示预定义格式文本。                      |

## 行内内容元素

使用 HTML 内联文本语义（Inline text semantics）定义一个单词、一行内容，或任意文字的语义、结构或样式。

| 元素       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| `<a>`      | 创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。 |
| `<span>`   | 短语内容的通用行内容器，并没有任何特殊语义。                 |
| `<b>`      | 用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是粗体（Boldface）元素，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 `<b>`元素用于显示粗体文字；替代方案是使用 CSS [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) 属性来创建粗体文字。 |
| `<i>`      | 表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。 |
| `<em>`     | 标记出需要用户着重阅读的内容， `<em>`元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。 |
| `<br>`     | 生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。 |
| `<q>`      | *HTML引用标签* (`<q>`)表示一个封闭的并且是短的行内引用的文本. 这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 `<blockquote>`(块级引用标签)替代. |
| `<s>`      | HTML `<s>` 元素 使用删除线来渲染文本。使用`<s>`元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 `<s>` ；为此，提倡使用`<del>`和`<ins>`元素。 |
| `<time>`   | 用来表示24小时制时间或者[公历日期](http://en.wikipedia.org/wiki/Gregorian_calendar)，若表示日期则也可包含时间和时区。 |
| `<small>`  | HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。 |
| `<strong>` | Strong 元素 (`<strong>`)表示文本十分重要，一般用粗体显示。   |
| `<var>`    | 表示变量的名称，或者由用户提供的值。                         |

## 图片&多媒体元素

| 元素      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| `<audio>` | HTML `<audio>` 元素用于在文档中表示音频内容。 `<audio>` 元素可以包含多个音频资源， 这些音频资源可以使用 `src` 属性或者`<source>`元素来进行描述； |
| `<video>` | 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。 |
| `<track>` | 当作媒体元素—`<audio>` 和 `<video>` 的子元素来使用。它允许指定时序文本字幕（或者基于时间的数据），例如自动处理字幕。字幕格式有 WebVTT 格式（.vtt格式文件）— Web 视频文本字幕格式，以及指时序文本标记语言（TTML）格式。 |
| `<img>`   | 将一份图像嵌入文档。                                         |

## 脚本标签元素

为了创建动态内容和 Web 应用程序，HTML 支持使用脚本语言，最突出的就是 JavaScript。某些元素用于支持此功能。

| 元素       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| `<canvas>` | 用来通过脚本（通常是JavaScript）绘制图形。比如,它可以被用来绘制图形,制作图片集合,甚至用来实现动画效果。 |
| `<script>` | HTML `<script>` 元素用于嵌入或引用可执行脚本。           |

## 表格内容元素

这里的元素用于创建和处理表格数据。

| 元素         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| `<colgroup>` | HTML 中的 表格列组（*Column Group* `<colgroup>`） 标签用来定义表中的一组列表。 |
| `<caption>`  | HTML `<caption>` 元素 (or *HTML 表格标题元素*) 展示一个表格的标题， 它常常作为`<table>`的第一个子元素出现。 |
| `<table>`    | 表示表格数据，即通过二维数据表表示的信息。                   |
| `<col>`      | 定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于`<table>`元素内。 |
| `<tr>`       | 定义表格中的行，它通常位于`<table>`元素内。                  |
| `<td>`       | 定义了一个包含数据的表格单元格，它通常位于`<tr>`元素内。     |

## 表单内容元素

HTML 提供了许多可一起使用的元素，这些元素能用来创建一个用户可以填写并提交到网站或应用程序的表单。详情请参阅 [HTML 表单指南](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms)。

| 元素          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `<form>`      | 表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。 |
| `<button>`    | 表示一个可点击的按钮，可以用在[表单](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)或文档其它需要使用简单标准按钮的地方。 |
| `<input>`     | 用于为基于Web的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和[user agent](https://developer.mozilla.org/en-US/docs/Glossary/user_agent)。 |
| `<textarea> ` | 表示`一个`多行纯文本编辑控件。                               |
| `<datalist>`  | 包含了一组`<option>`元素，这些元素表示其它表单控件可选值.    |
| `<select>`    | 表示一个控件，提供一个选项菜单：                             |
| `<option>`    | 用于定义在`<select>`, `<optgroup>`或`<datalist>`元素中包含的项。 |
| `<label>`     | 表示用户界面中某个元素的说明。                               |

## Web 组件标签

| 元素         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| `<element>`  | `<element>`元素被定义在最新的 HTML DOM 元素中。              |
| `<slot> `    | 作为 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 技术套件的一部分。 |
| `<template>` | 该元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以(原文为 may be)在运行时使用JavaScript实例化。 |

## script 延迟脚本

~~~html
<!-- 页面解析后执行 -->
<script defer="defer">console.log('defer-1')</script>
<script defer="defer">console.log('defer-1')</script>

<!-- 页面解析后执行(同步运行) -->
<script async="async">console.log('defer-1')</script>
<script async="async">console.log('defer-1')</script>
~~~
