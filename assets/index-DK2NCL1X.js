import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as f,e as y,w as n,f as p,a as P,p as m,g as t,h as l,i as b,r as o}from"./app-C5E7XBok.js";const C={__name:"index",setup(k,{expose:h}){const r=JSON.parse('{"title":"Python 编程语言基础","description":"","frontmatter":{"title":"Python 编程语言基础","date":"2023-04-23","categories":["Notes","Server","Python"],"tags":["Python"]},"headers":[{"level":2,"title":"主要优点","slug":"主要优点","link":"#主要优点","children":[]},{"level":2,"title":"主要缺点","slug":"主要缺点","link":"#主要缺点","children":[]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]}],"relativePath":"pages/posts/notes/server/python/index.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/server/python/index.md","lastUpdated":1725453888000}'),i=P(),s=r.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},r.frontmatter||{}),m("pageData",r),m("valaxy:frontmatter",s),globalThis.$frontmatter=s,h({frontmatter:{title:"Python 编程语言基础",date:"2023-04-23",categories:["Notes","Server","Python"],tags:["Python"]}}),(a,e)=>{const d=u;return f(),y(d,{frontmatter:p(s)},{"main-content-md":n(()=>[e[0]||(e[0]=t("p",null,[l("Python 由荷兰数学和计算机科学研究学会的"),t("a",{href:"https://baike.baidu.com/item/%E5%90%89%E5%A4%9A%C2%B7%E8%8C%83%E7%BD%97%E8%8B%8F%E5%A7%86/328361?fromModule=lemma_inlink",target:"_blank",rel:"noreferrer"},"吉多·范罗苏姆"),l("于 1990 年代初设计，作为一门叫做 "),t("a",{href:"https://baike.baidu.com/item/ABC%E8%AF%AD%E8%A8%80/334996?fromModule=lemma_inlink",target:"_blank",rel:"noreferrer"},"ABC 语言"),l("的替代品。 Python 提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及"),t("a",{href:"https://baike.baidu.com/item/%E8%A7%A3%E9%87%8A%E5%9E%8B%E8%AF%AD%E8%A8%80/8888952?fromModule=lemma_inlink",target:"_blank",rel:"noreferrer"},"解释型语言"),l("的本质，使它成为多数平台上写脚本和快速开发应用的编程语言， 随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。")],-1)),e[1]||(e[1]=t("p",null,"Python 解释器易于扩展，可以使用C语言或C++（或者其他可以通过C调用的语言）扩展新的功能和数据类型。Python 也可用于可定制化软件中的扩展程序语言。Python 丰富的标准库，提供了适用于各个主要系统平台的源码或机器码。",-1)),b(" more "),e[2]||(e[2]=t("h2",{id:"主要优点",tabindex:"-1"},[l("主要优点 "),t("a",{class:"header-anchor",href:"#主要优点","aria-label":'Permalink to "主要优点"'},"​")],-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"简单，Python 是一种代表简单主义思想的语言。阅读一个良好的 Python 程序就感觉像是在读英语一样。它使你能够专注于解决问题而不是去搞明白语言本身。"),t("li",null,"易学，Python 极其容易上手，因为 Python 有极其简单的说明文档。"),t("li",null,"易读、易维护，风格清晰划一、强制缩进、用途广泛、速度较快。"),t("li",null,"免费、开源，Python 是 FLOSS（自由/开放源码软件）之一。使用者可以自由地发布这个软件的拷贝、阅读它的源代码、对它做改动、把它的一部分用于新的自由软件中。FLOSS 是基于一个团体分享知识的概念。"),t("li",null,"可嵌入性，可以把Python嵌入多种程序，从而向程序用户提供脚本功能。"),t("li",null,"丰富的库，Python 标准库确实很庞大。它可以帮助处理各种工作，包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV文件、密码系统、GUI（图形用户界面）、Tk和其他与系统有关的操作。这被称作Python的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如wxPython、Twisted和Python图像库等等。"),t("li",null,"做科学计算优点多，说起科学计算，首先会被提到的可能是 MATLAB。除了 MATLAB 的一些专业性很强的工具箱还无法被替代之外，MATLAB 的大部分常用功能都可以在 Python 世界中找到相应的扩展库。")],-1)),e[4]||(e[4]=t("h2",{id:"主要缺点",tabindex:"-1"},[l("主要缺点 "),t("a",{class:"header-anchor",href:"#主要缺点","aria-label":'Permalink to "主要缺点"'},"​")],-1)),e[5]||(e[5]=t("ul",null,[t("li",null,[l("单行语句和命令行输出问题,很多时候不能将程序连写成一行，如 "),t("code",null,"import sys；for i in sys.path：print i"),l(" 而 perl 和 awk 就无此限制，可以较为方便的在 shell 下完成简单程序，不需要如 Python 一样，必须将程序写入一个 .py 文件。")]),t("li",null,"给初学者带来困惑，独特的语法，这也许不应该被称为局限，但是它用缩进来区分语句关系的方式还是给很多初学者带来了困惑。即便是很有经验的 Python 程序员，也可能陷入陷阱当中。"),t("li",null,"运行速度慢：这里是指与 C 和 C++ 相比。Python 开发人员尽量避开不成熟或者不重要的优化。一些针对非重要部位的加快运行速度的补丁通常不会被合并到 Python 内。所以很多人认为 Python 很慢。不过，根据二八定律，大多数程序对速度要求不高。在某些对运行速度要求很高的情况，Python设计师倾向于使用JIT技术，或者用使用 C/C++ 语言改写这部分程序。可用的 JIT 技术是 PyPy。")],-1)),e[6]||(e[6]=t("h2",{id:"环境配置",tabindex:"-1"},[l("环境配置 "),t("a",{class:"header-anchor",href:"#环境配置","aria-label":'Permalink to "环境配置"'},"​")],-1)),e[7]||(e[7]=t("blockquote",null,[t("p",null,[t("a",{href:"https://zhuanlan.zhihu.com/p/569019068",target:"_blank",rel:"noreferrer"},"https://zhuanlan.zhihu.com/p/569019068")])],-1)),e[8]||(e[8]=t("blockquote",null,[t("p",null,"TODO")],-1))]),"main-header":n(()=>[o(a.$slots,"main-header")]),"main-header-after":n(()=>[o(a.$slots,"main-header-after")]),"main-nav":n(()=>[o(a.$slots,"main-nav")]),"main-content":n(()=>[o(a.$slots,"main-content")]),"main-content-after":n(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(a.$slots,"main-nav-after")]),comment:n(()=>[o(a.$slots,"comment")]),footer:n(()=>[o(a.$slots,"footer")]),aside:n(()=>[o(a.$slots,"aside")]),"aside-custom":n(()=>[o(a.$slots,"aside-custom")]),default:n(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{C as default};
