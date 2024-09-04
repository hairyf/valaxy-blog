import{_ as p}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as o,e as g,w as t,f as A,a as f,p as r,g as i,i as E,h as s,r as e}from"./app-C5E7XBok.js";const c={__name:"buffer",setup(y,{expose:F}){const h=JSON.parse('{"title":"NodeJS 缓冲区（Buffer）","description":"","frontmatter":{"title":"NodeJS 缓冲区（Buffer）","date":"2020-05-03 14:30:00","categories":["Notes","Server","NodeJS"],"tags":["NodeJS"]},"headers":[{"level":2,"title":"基本特点","slug":"基本特点","link":"#基本特点","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"实际运用","slug":"实际运用","link":"#实际运用","children":[]}],"relativePath":"pages/posts/notes/server/nodejs/buffer.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/server/nodejs/buffer.md","lastUpdated":1725453888000}'),n=f(),k=h.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},h.frontmatter||{}),r("pageData",h),r("valaxy:frontmatter",k),globalThis.$frontmatter=k,F({frontmatter:{title:"NodeJS 缓冲区（Buffer）",date:"2020-05-03 14:30:00",categories:["Notes","Server","NodeJS"],tags:["NodeJS"]}}),(a,l)=>{const d=p;return o(),g(d,{frontmatter:A(k)},{"main-content-md":t(()=>[l[0]||(l[0]=i("p",null,"JS 数组性能比其他语言的数组差，但 Buffer 中的内存不是通过 JavaScript 分配的，而是在底层通过 C++ 申请的，也就是我们可以直接通过 Buffer 来创建内存中的空间。",-1)),E(" more "),l[1]||(l[1]=i("h2",{id:"基本特点",tabindex:"-1"},[s("基本特点 "),i("a",{class:"header-anchor",href:"#基本特点","aria-label":'Permalink to "基本特点"'},"​")],-1)),l[2]||(l[2]=i("p",null,"从结构上看 Buffer 非常像一个数组，它的元素为 16 进制的两位数。一个元素就表示内存中的一个字节。",-1)),l[3]||(l[3]=i("ul",null,[i("li",null,"Buffer 的结构和数组很像，操作的方法也和数组类似"),i("li",null,"数组中不能存储二进制的文件，而 Buffer 就是专门用来存储二进制数据"),i("li",null,"Buffer 不需要引入模块，直接使用即可"),i("li",null,"Buffer 中的一个元素，占用内存的一个字节"),i("li",null,"Buffer 的大小一旦确定，则不能修改，Buffer 实际上是对底层内存的直接操作")],-1)),l[4]||(l[4]=i("p",null,[s("在 Buffer 中存储的都是二进制数据，但是在显示时都是以 16 进制的形式显示，Buffer 中每一个元素的范围是 "),i("code",null,"00 - ff"),s("、"),i("code",null,"0 - 255"),s("、"),i("code",null,"00000000 - 11111111")],-1)),l[5]||(l[5]=i("div",{class:"language-javascript vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"javascript"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 计算机 一个 0 或一个 1 我们称为1位（bit）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"8bit     "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," 1byte（字节）")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"1024byte "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," 1kb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"1024kb "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," 1mb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"1024mb "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," 1gb")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"1024gb "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," 1tb")])])]),i("button",{class:"collapse"})],-1)),l[6]||(l[6]=i("h2",{id:"使用方法",tabindex:"-1"},[s("使用方法 "),i("a",{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},"​")],-1)),l[7]||(l[7]=i("ul",null,[i("li",null,[i("code",null,"Buffer.from(str)"),s("：将一个字符串转换为 Buffer")]),i("li",null,[i("code",null,"Buffer.alloc(size)"),s("：创建一个指定大小的 Buffer")]),i("li",null,[i("code",null,"Buffer.alloUnsafe(size)"),s("：创建一个指定大小的 Buffer，但是可能包含敏感数据")]),i("li",null,[i("code",null,"Buffer.toString() "),s("：将缓冲区中的数据转换为字符串")])],-1)),l[8]||(l[8]=i("h2",{id:"实际运用",tabindex:"-1"},[s("实际运用 "),i("a",{class:"header-anchor",href:"#实际运用","aria-label":'Permalink to "实际运用"'},"​")],-1)),l[9]||(l[9]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"var"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," str "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"Hello 尚硅谷"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 将一个字符串保存到buffer中")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"var"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," buf "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Buffer"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"from"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(str)")])])]),i("button",{class:"collapse"})],-1)),l[10]||(l[10]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 创建一个10个字节的buffer")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"var"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," buf2 "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Buffer"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"alloc"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"10"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 通过索引，来操作buf中的元素")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"0"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 88")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"1"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 255")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"2"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 0xAA")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"3"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 256"),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // 超过二进制8位就会舍掉前面多的")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"10"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 15"),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // 一旦确定长度,不可修改")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(buf2) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// <Buffer 58 ff aa 00 00 00 00 00 00 00>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 只要数字在控制台或页面中输出一定是10进制")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"2"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"]) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 170")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 转换为16进制的字符串")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(buf2["),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"2"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"]"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"toString"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"16"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// aa")])])]),i("button",{class:"collapse"})],-1))]),"main-header":t(()=>[e(a.$slots,"main-header")]),"main-header-after":t(()=>[e(a.$slots,"main-header-after")]),"main-nav":t(()=>[e(a.$slots,"main-nav")]),"main-content":t(()=>[e(a.$slots,"main-content")]),"main-content-after":t(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[e(a.$slots,"main-nav-after")]),comment:t(()=>[e(a.$slots,"comment")]),footer:t(()=>[e(a.$slots,"footer")]),aside:t(()=>[e(a.$slots,"aside")]),"aside-custom":t(()=>[e(a.$slots,"aside-custom")]),default:t(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{c as default};
