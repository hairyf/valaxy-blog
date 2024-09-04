import{_ as D}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as d,e as g,w as l,f as y,a as A,p as r,g as i,i as o,h as s,r as h}from"./app-C5E7XBok.js";const u={__name:"index",setup(B,{expose:p}){const k=JSON.parse('{"title":"GraphQL 数据库查询语言","description":"","frontmatter":{"title":"GraphQL 数据库查询语言","date":"2021-08-28","categories":["Notes","Server","GraphQL"],"tags":["GraphQL"]},"headers":[{"level":2,"title":"标量类型（Scalar Types）","slug":"标量类型-scalar-types","link":"#标量类型-scalar-types","children":[]},{"level":2,"title":"web 开发框架（express-graphql）","slug":"web-开发框架-express-graphql","link":"#web-开发框架-express-graphql","children":[]},{"level":2,"title":"定义服务端 schema 与类型","slug":"定义服务端-schema-与类型","link":"#定义服务端-schema-与类型","children":[{"level":3,"title":"Query language","slug":"query-language","link":"#query-language","children":[]},{"level":3,"title":"Mutation language","slug":"mutation-language","link":"#mutation-language","children":[]}]},{"level":2,"title":"定义客户端查询与更改","slug":"定义客户端查询与更改","link":"#定义客户端查询与更改","children":[{"level":3,"title":"简单数据查询","slug":"简单数据查询","link":"#简单数据查询","children":[]},{"level":3,"title":"查询数据参数","slug":"查询数据参数","link":"#查询数据参数","children":[]},{"level":3,"title":"标识符传参","slug":"标识符传参","link":"#标识符传参","children":[]},{"level":3,"title":"增删改查","slug":"增删改查","link":"#增删改查","children":[]}]}],"relativePath":"pages/posts/notes/server/graphql/index.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/server/graphql/index.md","lastUpdated":1725453888000}'),n=A(),e=k.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},k.frontmatter||{}),r("pageData",k),r("valaxy:frontmatter",e),globalThis.$frontmatter=e,p({frontmatter:{title:"GraphQL 数据库查询语言",date:"2021-08-28",categories:["Notes","Server","GraphQL"],tags:["GraphQL"]}}),(t,a)=>{const F=D;return d(),g(F,{frontmatter:y(e)},{"main-content-md":l(()=>[a[0]||(a[0]=i("p",null,"GraphQL 是一种针对 Graph（图状数据）进行查询特别有优势的 Query Language（查询语言），所以叫做 GraphQL。它跟 SQL 的关系是共用 QL 后缀，就好像「汉语」和「英语」共用后缀一样，但他们本质上是不同的语言。GraphQL 跟用作存储的 NoSQL 没有必然联系，虽然 GraphQL 背后的实际存储可以选择 NoSQL 类型的数据库，但也可以用 SQL 类型的数据库，或者任意其它存储方式（例如文本文件、存内存里等等）。",-1)),o(" more "),a[1]||(a[1]=i("h2",{id:"标量类型-scalar-types",tabindex:"-1"},[s("标量类型（Scalar Types） "),i("a",{class:"header-anchor",href:"#标量类型-scalar-types","aria-label":'Permalink to "标量类型（Scalar Types）"'},"​")],-1)),a[2]||(a[2]=i("p",null,"一个对象类型有自己的名字和字段，而某些时候，这些字段必然会解析到具体数据。这就是标量类型的来源：它们表示对应 GraphQL 查询的叶子节点。",-1)),a[3]||(a[3]=i("p",null,"GraphQL 自带一组默认标量类型：",-1)),a[4]||(a[4]=i("ul",null,[i("li",null,"Int：有符号 32 位整数。"),i("li",null,"Float：有符号双精度浮点值。"),i("li",null,"String：UTF‐8 字符序列。"),i("li",null,"Boolean：true 或者 false。"),i("li",null,"ID：ID 标量类型表示一个唯一标识符，通常用以重新获取对象或者作为缓存中的键。ID 类型使用和 String 一样的方式序列化；然而将其定义为 ID 意味着并不需要人类可读型。 大部分的 GraphQL 服务实现中，都有自定义标量类型的方式。例如，我们可以定义一个 Date 类型：")],-1)),a[5]||(a[5]=i("div",{class:"language-graphql vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"graphql"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"scalar"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Date")])])]),i("button",{class:"collapse"})],-1)),a[6]||(a[6]=i("p",null,"然后就取决于我们的实现中如何定义将其序列化、反序列化和验证。例如，你可以指定 Date 类型应该总是被序列化成整型时间戳，而客户端应该知道去要求任何 date 字段都是这个格式。",-1)),a[7]||(a[7]=i("h2",{id:"web-开发框架-express-graphql",tabindex:"-1"},[s("web 开发框架（express-graphql） "),i("a",{class:"header-anchor",href:"#web-开发框架-express-graphql","aria-label":'Permalink to "web 开发框架（express-graphql）"'},"​")],-1)),a[8]||(a[8]=i("p",null,"graphql 可以和流行的 nodejs 开发框架结合使用，当然也不局限于 express 的实现，例如 koa，nest 等。",-1)),a[9]||(a[9]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," buildSchema"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"graphql"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," graphqlHTTP"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"express-graphql"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," express "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"express"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," cors "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"cors"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," app "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," express"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"cors"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"())")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 1. 使用 GraphQL schema 语法构建一个 schema")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," schema "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," buildSchema"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"  type Query {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    foo: String")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    count: Int")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"`"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 2. 定义 schema 的 resolver")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," root "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  foo"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"bar"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  count"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 123")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 3. 挂载 GraphQL 中间件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/graphql"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," graphqlHTTP"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," schema"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," rootValue"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," root"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," graphiql"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," true"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"))")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 4. 启动服务器")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"listen"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"3203"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"Now browse to localhost:3203/graphql"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"))")])])]),i("button",{class:"collapse"})],-1)),a[10]||(a[10]=i("h2",{id:"定义服务端-schema-与类型",tabindex:"-1"},[s("定义服务端 schema 与类型 "),i("a",{class:"header-anchor",href:"#定义服务端-schema-与类型","aria-label":'Permalink to "定义服务端 schema 与类型"'},"​")],-1)),a[11]||(a[11]=i("p",null,"客户端的 schema 用于定义查询类型的映射，需要相应的实现。",-1)),a[12]||(a[12]=i("p",null,[s("这里只做一个基本的语法，更多语法与功能可参考官方文档的 "),i("a",{href:"https://graphql.cn/learn/schema/",target:"_blank",rel:"noreferrer"},"Schema 和类型"),s("。")],-1)),a[13]||(a[13]=i("h3",{id:"query-language",tabindex:"-1"},[s("Query language "),i("a",{class:"header-anchor",href:"#query-language","aria-label":'Permalink to "Query language"'},"​")],-1)),a[14]||(a[14]=i("div",{class:"language-graphql vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"graphql"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"type"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Article"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," ID"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  title"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  body"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  tags"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," ["),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"# 查询的入口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"type"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Query"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  # [type] 代表这个的数组")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  # [type!] 代表数组元素不能为空(null)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  articles"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," ["),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"Article"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  # 传入参数, 以及传入多个参数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},'  # 查询语句为 article(id: "1", ...) { title }')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  article("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," ID"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!,"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," title"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Article")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[15]||(a[15]=i("h3",{id:"mutation-language",tabindex:"-1"},[s("Mutation language "),i("a",{class:"header-anchor",href:"#mutation-language","aria-label":'Permalink to "Mutation language"'},"​")],-1)),a[16]||(a[16]=i("div",{class:"language-graphql vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"graphql"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"# 参数对象必须使用 Input 定义")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"input"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," CreateArticleInput"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  title"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  body"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"input"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," UpdateArticleInput"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  title"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  body"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," String"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"type"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," DeletionStatus"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  success"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Boolean"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"# 添加|修改|删除的入口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"type"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Mutation"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  createArticle("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"article"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," CreateArticleInput"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Article")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  updateArticle("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," ID"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!,"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," article"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," UpdateArticleInput"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," Article")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  deleteArticle("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," ID"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," DeletionStatus")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[17]||(a[17]=i("h2",{id:"定义客户端查询与更改",tabindex:"-1"},[s("定义客户端查询与更改 "),i("a",{class:"header-anchor",href:"#定义客户端查询与更改","aria-label":'Permalink to "定义客户端查询与更改"'},"​")],-1)),a[18]||(a[18]=i("p",null,"服务端定义 schema 用于增删改查的实现，调用后端对应的实现，这里需要注意的是，客户端中 GraphQL 请求方法必须是 POST。",-1)),a[19]||(a[19]=i("p",null,[s("这里只做一个基本的语法，更多语法与功能可参考官方文档的 "),i("a",{href:"https://graphql.cn/learn/queries/",target:"_blank",rel:"noreferrer"},"查询和变更"),s("。")],-1)),a[20]||(a[20]=i("h3",{id:"简单数据查询",tabindex:"-1"},[s("简单数据查询 "),i("a",{class:"header-anchor",href:"#简单数据查询","aria-label":'Permalink to "简单数据查询"'},"​")],-1)),a[21]||(a[21]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 查询数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  query"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"	{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        foo")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        count")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"	}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[22]||(a[22]=i("h3",{id:"查询数据参数",tabindex:"-1"},[s("查询数据参数 "),i("a",{class:"header-anchor",href:"#查询数据参数","aria-label":'Permalink to "查询数据参数"'},"​")],-1)),a[23]||(a[23]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 查询传参, 与定义别名")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  query"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    query getArticles {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      article(id: "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"${"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}},"1"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        id")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        title")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[24]||(a[24]=i("h3",{id:"标识符传参",tabindex:"-1"},[s("标识符传参 "),i("a",{class:"header-anchor",href:"#标识符传参","aria-label":'Permalink to "标识符传参"'},"​")],-1)),a[25]||(a[25]=i("div",{class:"language-javascript vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"javascript"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 查询传参(标识符传参)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  query"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    query getArticles($id: ID!) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      article(id: $id) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        id")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        title")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  `"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  variables"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 1"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),a[26]||(a[26]=i("h3",{id:"增删改查",tabindex:"-1"},[s("增删改查 "),i("a",{class:"header-anchor",href:"#增删改查","aria-label":'Permalink to "增删改查"'},"​")],-1)),a[27]||(a[27]=i("div",{class:"language-javascript vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"javascript"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 创建传参")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  query"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," `")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    mutation updateArticle($id: ID!, $article: UpdateArticleInput) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      article(id:$id, article: $article) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        id")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"        title")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"      }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  `"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"  variables"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"    id"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 1"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}},"    article"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," title"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"aaa"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#FFCB6B","--shiki-light":"#E2931D"}}," body"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"bbb"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 修改传参, 与创建时传参一致的语法")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// post data: 删除传参, 与创建时传参一致的语法")])])]),i("button",{class:"collapse"})],-1))]),"main-header":l(()=>[h(t.$slots,"main-header")]),"main-header-after":l(()=>[h(t.$slots,"main-header-after")]),"main-nav":l(()=>[h(t.$slots,"main-nav")]),"main-content":l(()=>[h(t.$slots,"main-content")]),"main-content-after":l(()=>[h(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[h(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[h(t.$slots,"main-nav-after")]),comment:l(()=>[h(t.$slots,"comment")]),footer:l(()=>[h(t.$slots,"footer")]),aside:l(()=>[h(t.$slots,"aside")]),"aside-custom":l(()=>[h(t.$slots,"aside-custom")]),default:l(()=>[h(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{u as default};
