import{_ as d}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as A,e as g,w as a,f as y,a as o,p as r,g as i,i as D,h as s,r as h}from"./app-C5E7XBok.js";const f={__name:"middleware",setup(E,{expose:F}){const k=JSON.parse('{"title":"Express 常用中间件","description":"","frontmatter":{"title":"Express 常用中间件","date":"2020-05-03 14:40:00","categories":["Notes","Server","Express"],"tags":["Express"]},"headers":[{"level":2,"title":"设置模板资源渲染","slug":"设置模板资源渲染","link":"#设置模板资源渲染","children":[]},{"level":2,"title":"router 中间件","slug":"router-中间件","link":"#router-中间件","children":[]},{"level":2,"title":"cookies 中间件","slug":"cookies-中间件","link":"#cookies-中间件","children":[]},{"level":2,"title":"static 中间件","slug":"static-中间件","link":"#static-中间件","children":[]},{"level":2,"title":"session 中间件","slug":"session-中间件","link":"#session-中间件","children":[]}],"relativePath":"pages/posts/notes/server/nodejs/express/middleware.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/server/nodejs/express/middleware.md","lastUpdated":1725453888000}'),n=o(),e=k.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},k.frontmatter||{}),r("pageData",k),r("valaxy:frontmatter",e),globalThis.$frontmatter=e,F({frontmatter:{title:"Express 常用中间件",date:"2020-05-03 14:40:00",categories:["Notes","Server","Express"],tags:["Express"]}}),(l,t)=>{const p=d;return A(),g(p,{frontmatter:y(e)},{"main-content-md":a(()=>[t[0]||(t[0]=i("p",null,"Express 是一个自身功能 极简,完全是由路由和中间件构成的一个web开发框架，从本质上来说，一个Express 应用就是在调用各种中间件，而 Express 具有很多第三方中间件可以使用。",-1)),D(" more "),t[1]||(t[1]=i("h2",{id:"设置模板资源渲染",tabindex:"-1"},[s("设置模板资源渲染 "),i("a",{class:"header-anchor",href:"#设置模板资源渲染","aria-label":'Permalink to "设置模板资源渲染"'},"​")],-1)),t[2]||(t[2]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 配置模板资源目录的绝对路径 与 模板引擎为ejs")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 通常配合res.render使用, 返回渲染页面")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"set"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"views"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," `${"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"__dirname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/views"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"`"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"set"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"view engine"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"ejs"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")])])]),i("button",{class:"collapse"})],-1)),t[3]||(t[3]=i("h2",{id:"router-中间件",tabindex:"-1"},[s("router 中间件 "),i("a",{class:"header-anchor",href:"#router-中间件","aria-label":'Permalink to "router 中间件"'},"​")],-1)),t[4]||(t[4]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 创建一个路由器, 该路由器有use/get/post...等方法")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// router通常用来构建模块化, 需要最后app.use(router)引入")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," router "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," express"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"Router"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(router)")])])]),i("button",{class:"collapse"})],-1)),t[5]||(t[5]=i("h2",{id:"cookies-中间件",tabindex:"-1"},[s("cookies 中间件 "),i("a",{class:"header-anchor",href:"#cookies-中间件","aria-label":'Permalink to "cookies 中间件"'},"​")],-1)),t[6]||(t[6]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," cookieParser "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," require"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"cookie-parser"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 添加cookie中间件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"cookieParser"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 中间件可设置为加密")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"cookieParser"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"secret"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"))")])])]),i("button",{class:"collapse"})],-1)),t[7]||(t[7]=i("h2",{id:"static-中间件",tabindex:"-1"},[s("static 中间件 "),i("a",{class:"header-anchor",href:"#static-中间件","aria-label":'Permalink to "static 中间件"'},"​")],-1)),t[8]||(t[8]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 添加静态资源访问路径, 后面可跟一个配置对象")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"static"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"public"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/a.mp3 --> public/a.mp3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/static/a.mp3 --> public/a.html")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/static/a.mp3 --> public/a.js")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 为`express.static`功能所服务的文件创建虚拟路径前缀(文件系统中实际上不存在该路径)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/static"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," express"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"static"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"public"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/static/a.mp3 --> public/a.mp3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/static/a.mp3 --> public/a.html")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// localhost:4000/static/a.mp3 --> public/a.js")])])]),i("button",{class:"collapse"})],-1)),t[9]||(t[9]=i("h2",{id:"session-中间件",tabindex:"-1"},[s("session 中间件 "),i("a",{class:"header-anchor",href:"#session-中间件","aria-label":'Permalink to "session 中间件"'},"​")],-1)),t[10]||(t[10]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," session "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," require"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"express-session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 添加session, 默认配置")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"session"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 添加session, 更改配置")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"app"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"use"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"session"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"  secret"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"asdasdasjop"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // 盐值(默认无)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"  cookie"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," maxAge"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 10000"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // cookie的配置对象")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"  resave"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," true"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // 是否保存到磁盘")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"  saveUninitialized"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," true"),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // 是否保存初始化session")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"router"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"get"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"req"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," res"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // 设置session")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  req"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"user_name"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"...."),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // 获取session")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  req"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"user_name")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // 重置session有效时间(cookies设置)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  req"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"cookie"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"maxAge"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 10000")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // 销毁session")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  req"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"session"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"destroy"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," console"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"log"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"销毁完毕"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  res"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"send"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"session路由"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")])])]),i("button",{class:"collapse"})],-1))]),"main-header":a(()=>[h(l.$slots,"main-header")]),"main-header-after":a(()=>[h(l.$slots,"main-header-after")]),"main-nav":a(()=>[h(l.$slots,"main-nav")]),"main-content":a(()=>[h(l.$slots,"main-content")]),"main-content-after":a(()=>[h(l.$slots,"main-content-after")]),"main-nav-before":a(()=>[h(l.$slots,"main-nav-before")]),"main-nav-after":a(()=>[h(l.$slots,"main-nav-after")]),comment:a(()=>[h(l.$slots,"comment")]),footer:a(()=>[h(l.$slots,"footer")]),aside:a(()=>[h(l.$slots,"aside")]),"aside-custom":a(()=>[h(l.$slots,"aside-custom")]),default:a(()=>[h(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{f as default};
