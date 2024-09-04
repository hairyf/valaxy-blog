import{_ as d}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as y,e as F,w as t,f as c,a as g,p as r,g as i,i as A,h as s,r as e}from"./app-C5E7XBok.js";const B={__name:"namespace",setup(D,{expose:p}){const n=JSON.parse('{"title":"TypeScript 命名空间(Namespace)","description":"","frontmatter":{"title":"TypeScript 命名空间(Namespace)","date":"2020-08-04 16:00:00","categories":["Notes","Client","TypeScript"],"tags":["TypeScript"]},"headers":[{"level":2,"title":"定义私有命名空间","slug":"定义私有命名空间","link":"#定义私有命名空间","children":[]},{"level":2,"title":"引入外部文件命名空间","slug":"引入外部文件命名空间","link":"#引入外部文件命名空间","children":[]}],"relativePath":"pages/posts/notes/client/typescript/namespace.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/client/typescript/namespace.md","lastUpdated":1725453888000}'),k=g(),h=n.frontmatter||{};return k.meta.frontmatter=Object.assign(k.meta.frontmatter||{},n.frontmatter||{}),r("pageData",n),r("valaxy:frontmatter",h),globalThis.$frontmatter=h,p({frontmatter:{title:"TypeScript 命名空间(Namespace)",date:"2020-08-04 16:00:00",categories:["Notes","Client","TypeScript"],tags:["TypeScript"]}}),(a,l)=>{const o=d;return y(),F(o,{frontmatter:c(h)},{"main-content-md":t(()=>[l[0]||(l[0]=i("p",null,"在代码量较大的情况下，为了避免各种变量命名产生冲突，可将相似功能的函数、类、接口等放置到命名空间内。",-1)),l[1]||(l[1]=i("p",null,"同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包括起来，支队外暴露需要在外部访问的对象。命名空间内对象或者属性需要通过export暴露出去，才能在外部访问。",-1)),A(" more "),l[2]||(l[2]=i("h2",{id:"定义私有命名空间",tabindex:"-1"},[s("定义私有命名空间 "),i("a",{class:"header-anchor",href:"#定义私有命名空间","aria-label":'Permalink to "定义私有命名空间"'},"​")],-1)),l[3]||(l[3]=i("div",{class:"language-typescript vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"namespace"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," A"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"    export"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Animal"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 70")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 两个命名空间不会产生冲突")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"namespace"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," B"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"    export"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Animal"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 60")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(A"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"Animal) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 70")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(B"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"Animal) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 60")])])]),i("button",{class:"collapse"})],-1)),l[4]||(l[4]=i("h2",{id:"引入外部文件命名空间",tabindex:"-1"},[s("引入外部文件命名空间 "),i("a",{class:"header-anchor",href:"#引入外部文件命名空间","aria-label":'Permalink to "引入外部文件命名空间"'},"​")],-1)),l[5]||(l[5]=i("div",{class:"language-typescript vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"typescript"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 旧版引入命名空间")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"/// "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"<"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"reference"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," path"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},'"'),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"./javascript-utils.ts"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},'"'),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"/>")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 新版引入命名空间")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"export"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," namespace"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," A"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"    export"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Animal"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 70")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// -----------↓-----------    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"A"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," from './modules'")])])]),i("button",{class:"collapse"})],-1))]),"main-header":t(()=>[e(a.$slots,"main-header")]),"main-header-after":t(()=>[e(a.$slots,"main-header-after")]),"main-nav":t(()=>[e(a.$slots,"main-nav")]),"main-content":t(()=>[e(a.$slots,"main-content")]),"main-content-after":t(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[e(a.$slots,"main-nav-after")]),comment:t(()=>[e(a.$slots,"comment")]),footer:t(()=>[e(a.$slots,"footer")]),aside:t(()=>[e(a.$slots,"aside")]),"aside-custom":t(()=>[e(a.$slots,"aside-custom")]),default:t(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{B as default};
