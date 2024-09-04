import{_ as d}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-_PHymMwZ.js";import{b as p,e as g,w as k,f as y,a as A,p as F,g as i,h as s,i as E,r as l}from"./app-C5E7XBok.js";const o="/assets/image-20220324194519246-DzqIVpNH.png",B="/assets/image-20220324194644589-BEGbLkj5.png",c="/assets/image-20220324195039337-DWTAfBoD.png",m="/assets/image-20220324201238240-C00a8T2I.png",f="/assets/image-20220324201757388-CwnC6ZJG.png",u="/assets/image-20220324202019065-Ca4vAcOG.png",C="/assets/image-20220324202832241-CEM25ssk.png",w={__name:"diff-virtual-dom",setup(b,{expose:D}){const a=JSON.parse('{"title":"Vue 源码之 Virtual DOM|diff","description":"","frontmatter":{"title":"Vue 源码之 Virtual DOM|diff","categories":["Notes","Client","vueCore"],"tags":["vue","core"],"date":"2021-07-26"},"headers":[{"level":2,"title":"Diff 算法是什么？","slug":"diff-算法是什么","link":"#diff-算法是什么","children":[]},{"level":2,"title":"虚拟 DOM 又是什么？","slug":"虚拟-dom-又是什么","link":"#虚拟-dom-又是什么","children":[]},{"level":2,"title":"snabbdom 虚拟 DOM 库","slug":"snabbdom-虚拟-dom-库","link":"#snabbdom-虚拟-dom-库","children":[]}],"relativePath":"pages/posts/notes/client/vue-core/diff-virtual-dom.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/notes/client/vue-core/diff-virtual-dom.md","lastUpdated":1725453888000}'),e=A(),n=a.frontmatter||{};return e.meta.frontmatter=Object.assign(e.meta.frontmatter||{},a.frontmatter||{}),F("pageData",a),F("valaxy:frontmatter",n),globalThis.$frontmatter=n,D({frontmatter:{title:"Vue 源码之 Virtual DOM|diff",categories:["Notes","Client","vueCore"],tags:["vue","core"],date:"2021-07-26"}}),(t,h)=>{const r=d;return p(),g(r,{frontmatter:y(n)},{"main-content-md":k(()=>[h[0]||(h[0]=i("h2",{id:"diff-算法是什么",tabindex:"-1"},[s("Diff 算法是什么？ "),i("a",{class:"header-anchor",href:"#diff-算法是什么","aria-label":'Permalink to "Diff 算法是什么？"'},"​")],-1)),h[1]||(h[1]=i("p",null,"例如一次挪动家具，在我们 Vue 当中，一次渲染则代表一次挪动家具",-1)),h[2]||(h[2]=i("figure",null,[i("img",{src:o,alt:"image-20220324194519246",loading:"lazy",decoding:"async"})],-1)),h[3]||(h[3]=i("p",null,"在程序中，对一个数据的更改如果不通过 diff，就例如将整个家拆掉在重新建，这样效率太低，代价太昂贵。",-1)),h[4]||(h[4]=i("figure",null,[i("img",{src:B,alt:"image-20220324194644589",loading:"lazy",decoding:"async"})],-1)),h[5]||(h[5]=i("p",null,"diff 算法就是程序中进行精细化对比，实现最小量的更新。",-1)),E(" more "),h[6]||(h[6]=i("h2",{id:"虚拟-dom-又是什么",tabindex:"-1"},[s("虚拟 DOM 又是什么？ "),i("a",{class:"header-anchor",href:"#虚拟-dom-又是什么","aria-label":'Permalink to "虚拟 DOM 又是什么？"'},"​")],-1)),h[7]||(h[7]=i("p",null,"虚拟节点就是对整个标签内容的描述，以数据化的结构展示，更利于方便操作。",-1)),h[8]||(h[8]=i("figure",null,[i("img",{src:c,alt:"image-20220324195039337",loading:"lazy",decoding:"async"})],-1)),h[9]||(h[9]=i("p",null,"而 diff 更新，就相当于一个新的虚拟 dom 和老的虚拟 dom 进行 diff （精细化比较），算出应该如何最小量更新，最后反映到真实的 dom 当中。",-1)),h[10]||(h[10]=i("figure",null,[i("img",{src:m,alt:"image-20220324201238240",loading:"lazy",decoding:"async"})],-1)),h[11]||(h[11]=i("h2",{id:"snabbdom-虚拟-dom-库",tabindex:"-1"},[s("snabbdom 虚拟 DOM 库 "),i("a",{class:"header-anchor",href:"#snabbdom-虚拟-dom-库","aria-label":'Permalink to "snabbdom 虚拟 DOM 库"'},"​")],-1)),h[12]||(h[12]=i("p",null,[i("a",{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noreferrer"},"snabbdom"),s(" (瑞典语，“速度”)是著名的虚拟DOM库，是diff算法的鼻祖，Vue源码借鉴了"),i("code",null,"snabbdom"),s("。")],-1)),h[13]||(h[13]=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," classModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," eventListenersModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," h"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," init"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," propsModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," styleModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"snabbdom"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," patch "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," init"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"([")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // Init patch function with chosen modules")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  classModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // makes it easy to toggle classes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  propsModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // for setting properties on DOM elements")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  styleModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // handles styling on elements with support for animations")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  eventListenersModule "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// attaches event listeners")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"])")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," function_ "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," ()"),i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}}," =>"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," container "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," document"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"querySelector"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"#container"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"div#container.two.classes"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," on"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," click"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," function_ "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"span"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," style"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," fontWeight"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"bold"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"This is bold"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}}," and this is just normal text"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"a"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," props"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," href"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/foo"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"I"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"\\'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"ll take you places!"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// Patch into empty DOM element – this modifies the DOM as a side effect")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"patch"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(container"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!,"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," newVnode "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"div#container.two.classes"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," on"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," click"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," function_ "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"}"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"span"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," style"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," fontWeight"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"normal"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," fontStyle"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"italic"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"This is now italic type"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}}," and this is still just normal text"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"a"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," props"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," href"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"/bar"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"I"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"\\'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"ll take you places!"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// Second `patch` invocation")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"patch"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(vnode"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," newVnode) "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// Snabbdom efficiently updates the old view to the new state")])])]),i("button",{class:"collapse"})],-1)),h[14]||(h[14]=i("p",null,"h 函数用于产生虚拟节点（vnode）",-1)),h[15]||(h[15]=i("figure",null,[i("img",{src:f,alt:"image-20220324201757388",loading:"lazy",decoding:"async"})],-1)),h[16]||(h[16]=i("p",null,"虚拟节点的属性",-1)),h[17]||(h[17]=i("figure",null,[i("img",{src:u,alt:"image-20220324202019065",loading:"lazy",decoding:"async"})],-1)),h[18]||(h[18]=i("p",null,"h 函数可以嵌套使用，从而得到虚拟 DOM 树",-1)),h[19]||(h[19]=i("figure",null,[i("img",{src:C,alt:"image-20220324202832241",loading:"lazy",decoding:"async"})],-1)),h[20]||(h[20]=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes material-theme-darker material-theme-lighter vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"import"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," classModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," eventListenersModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," h"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," init"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," propsModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," styleModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," from"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"snabbdom"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 创建出 patch 函数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," patch "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," init"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"([")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  // Init patch function with chosen modules")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  classModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // makes it easy to toggle classes")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  propsModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // for setting properties on DOM elements")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  styleModule"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," // handles styling on elements with support for animations")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"  eventListenersModule "),i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// attaches event listeners")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"])")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 创建虚拟节点")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode1 "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"a"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}},"    props"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," href"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"https://www.baidu.com"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," target"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"_blank"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"  '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"百度一下"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode2 "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"div"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," class"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," {"),i("span",{style:{"--shiki-dark":"#F07178","--shiki-light":"#E53935"}}," box"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},":"),i("span",{style:{"--shiki-dark":"#FF9CAC","--shiki-light":"#FF5370"}}," true"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," }"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," },"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"我是一个盒子"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode3 "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"ul"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"li"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"苹果"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"li"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"西瓜"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"li"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," ["),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"div"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," ["),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"p"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"哈哈"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}}," h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"p"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"嘻嘻"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")])])"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"  h"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"li"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},","),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}}," '"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"火龙果"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"])")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#545454","--shiki-light":"#90A4AE","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"// 挂在虚拟节点到真实的 DOM 当中")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C792EA","--shiki-light":"#9C3EDA"}},"const"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," container "),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"="),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," document"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"."),i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"querySelector"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"("),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#C3E88D","--shiki-light":"#91B859"}},"#container"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"'"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#82AAFF","--shiki-light":"#6182B8"}},"patch"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}},"(container"),i("span",{style:{"--shiki-dark":"#89DDFF","--shiki-light":"#39ADB5"}},"!,"),i("span",{style:{"--shiki-dark":"#EEFFFF","--shiki-light":"#90A4AE"}}," vnode3)")])])]),i("button",{class:"collapse"})],-1))]),"main-header":k(()=>[l(t.$slots,"main-header")]),"main-header-after":k(()=>[l(t.$slots,"main-header-after")]),"main-nav":k(()=>[l(t.$slots,"main-nav")]),"main-content":k(()=>[l(t.$slots,"main-content")]),"main-content-after":k(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":k(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":k(()=>[l(t.$slots,"main-nav-after")]),comment:k(()=>[l(t.$slots,"comment")]),footer:k(()=>[l(t.$slots,"footer")]),aside:k(()=>[l(t.$slots,"aside")]),"aside-custom":k(()=>[l(t.$slots,"aside-custom")]),default:k(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default};
