import{_ as D}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as d,e as A,w as h,f as g,a as y,p as F,g as i,h as s,i as E,r as t}from"./app-C5E7XBok.js";const f={__name:"socket.io",setup(o,{expose:r}){const a=JSON.parse('{"title":"socked.io 实时应用开发","description":"","frontmatter":{"title":"socked.io 实时应用开发","date":"2022-07-01","categories":["Notes","Client","Other"],"tags":["Flutter"]},"headers":[{"level":2,"title":"登录登出","slug":"登录登出","link":"#登录登出","children":[]},{"level":2,"title":"心跳检测","slug":"心跳检测","link":"#心跳检测","children":[]}],"relativePath":"pages/posts/notes/client/other/socket.io.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/client/other/socket.io.md","lastUpdated":1725453888000}'),n=y(),e=a.frontmatter||{};return n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},a.frontmatter||{}),F("pageData",a),F("valaxy:frontmatter",e),globalThis.$frontmatter=e,r({frontmatter:{title:"socked.io 实时应用开发",date:"2022-07-01",categories:["Notes","Client","Other"],tags:["Flutter"]}}),(l,k)=>{const p=D;return d(),A(p,{frontmatter:g(e)},{"main-content-md":h(()=>[k[0]||(k[0]=i("p",null,[s("由于写原生的 WebSocket 在处理低版本浏览器的兼容性上的困难，所以一般在写实时交互的这种项目时一般会利用到 "),i("code",null,"socket.io"),s("。"),i("code",null,"socket.io"),s(" 并不仅仅是 "),i("code",null,"WebSocket"),s("，还包含着 AJAX long polling，AJAX multipart streaming，JSONP Polling 等。"),i("code",null,"socket.io"),s(" 可以看做是基于 "),i("code",null,"engine.io"),s(" 的二次开发。通过 "),i("code",null,"emit"),s(" 和 "),i("code",null,"on"),s(" 可以轻松地实现服务器与客户端之间的双向通信，"),i("code",null,"emit"),s("来发布事件，"),i("code",null,"on"),s("来订阅事件。")],-1)),E(" more "),k[1]||(k[1]=i("h2",{id:"登录登出",tabindex:"-1"},[s("登录登出 "),i("a",{class:"header-anchor",href:"#登录登出","aria-label":'Permalink to "登录登出"'},"​")],-1)),k[2]||(k[2]=i("p",null,[s("先从"),i("code",null,"app.js"),s("开始：")],-1)),k[3]||(k[3]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," users "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," app "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," express"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," server "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," require"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"http"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"createServer"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(app)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," io "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," require"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"socket.io"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"listen"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(server)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 将socket.io绑定到服务器上，使得任何连接到服务器的客户端都具有实时通信的功能")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 服务器来监听客户端")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"io"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"on"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"connection"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // socket是返回的连接对象,两端的交互就是通过这个对象")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")])])]),i("button",{class:"collapse"})],-1)),k[4]||(k[4]=i("p",null,[s("需要创建一个对象（"),i("code",null,"users"),s("）来存储在线用户，键值为用户昵称，为用户登录来订阅个事件：")],-1)),k[5]||(k[5]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"on"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"login"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},")"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  if"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"||"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ==="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"system"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},") "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"repeat"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  else"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," nickname")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"] "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"      name"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"      socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"      lastSpeakTime"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," nowSecond"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"loginSuccess"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"    UsersChange"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," true"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"on"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"disconnect"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  if"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," &&"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"]) "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"    delete"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"    UsersChange"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," false"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"function"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," UsersChange"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," flag"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  io"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"sockets"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"system"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"    size"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Object"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"keys"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"length"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    flag")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"function"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," nowSecond"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"()"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  return"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Math"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"floor"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"new"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," Date"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"() "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"/"),i("span",{style:{"--shiki-dark":"#F78C6C","--shiki-light":"#F76D47"}}," 1000"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1)),k[6]||(k[6]=i("p",null,[s("用户登录时需要验证其昵称是否含有，假若函数，则触发在客户端的 "),i("code",null,"js"),s(" 代码中注册的 "),i("code",null,"repeat"),s(" 事件，反之触 发"),i("code",null,"loginSuccess"),s(" 事件并且登录成功后需要向所有的客户端来广播，所以利用了 "),i("code",null,"io.sockets.emit"),s("。"),i("code",null,"repeat"),s("，"),i("code",null,"loginSuccess"),s("，"),i("code",null,"system"),s("，在 "),i("code",null,"src/js/index.js"),s(" 中进行注册，主要用于页面的显示，也就是一些 dom 操作，所以在这里没有什么好讲的。用户退出，直接调用默认事件 "),i("code",null,"disconnect"),s(" 就好，并将该用户从用户对象中移除。")],-1)),k[7]||(k[7]=i("h2",{id:"心跳检测",tabindex:"-1"},[s("心跳检测 "),i("a",{class:"header-anchor",href:"#心跳检测","aria-label":'Permalink to "心跳检测"'},"​")],-1)),k[8]||(k[8]=i("p",null,[s("在用户的状态上的坑还是不少的，因为"),i("code",null,"WebSocket"),s("中间过程比较复杂，经常会出现一些异常的情况，所以需要进行"),i("strong",null,"心跳检测"),s('，我采用的方式是服务端定时遍历用户列表，假若用户最后的发言时间与现在相比超过了5分钟，就将其视为掉线，从而避免了"用户undefined退出群聊"的这种情况。')],-1)),k[9]||(k[9]=i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"function"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," pong"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"()"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"  const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," now"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," nowSecond"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  for"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," ("),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," k"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," in"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},") "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"    if"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," ("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"k"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"]"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"lastSpeakTime"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," +"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," MAX_LEAVE_TIME"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," <"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," now"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},") "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"      const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"k"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"]"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"      users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"["),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"k"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"]"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"disconnect"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"      socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"nouser"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"由于长时间未说话，您已经掉线，请重新刷新页面"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"      socket"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," null")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 心跳检测")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"setInterval"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(pong"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," PONG_TIME)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"function"),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," UsersChange"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," flag"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  io"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"sockets"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"emit"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"system"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    nickname"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"    size"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," Object"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"keys"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"("),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"users"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"length"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"    flag")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  }"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}")])])]),i("button",{class:"collapse"})],-1))]),"main-header":h(()=>[t(l.$slots,"main-header")]),"main-header-after":h(()=>[t(l.$slots,"main-header-after")]),"main-nav":h(()=>[t(l.$slots,"main-nav")]),"main-content":h(()=>[t(l.$slots,"main-content")]),"main-content-after":h(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":h(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":h(()=>[t(l.$slots,"main-nav-after")]),comment:h(()=>[t(l.$slots,"comment")]),footer:h(()=>[t(l.$slots,"footer")]),aside:h(()=>[t(l.$slots,"aside")]),"aside-custom":h(()=>[t(l.$slots,"aside-custom")]),default:h(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{f as default};
