import{q as M,k as f,aG as D,aH as V,d as b,x as E,b as t,c as u,e as _,w as k,g as e,i as y,F as x,l as w,h as H,t as v,L as h,aI as S,aF as L,j as P,ak as R,u as A,f as $,az as N,aA as z,_ as Y,n as F,aJ as W,aK as G,aL as O,aM as U,H as q}from"./app-C5E7XBok.js";import{E as j}from"./index-BQh2XW6P.js";const J=D(V);function C(){const m=M(),r=J("--hairy-theme:post-layout",null);return f({get:()=>{var n;return r.value||((n=m.value.layout)==null?void 0:n.post)||"image"},set:n=>r.value=n})}const K={class:"pagination"},Q=b({__name:"ValaxyPagination",props:{curPage:{},total:{},pageSize:{}},emits:["pageChange"],setup(m,{emit:r}){const i=m,n=r,c=f(()=>Math.ceil(i.total/i.pageSize)),l=f(()=>i.curPage===1||i.curPage===c.value?3:2);function a(o){return o===1||o===c.value?!0:o>i.curPage-l.value&&o<i.curPage+l.value}function p(o){return n("pageChange",o),o===1?"/":`/page/${o}`}return(o,s)=>{const d=E("RouterLink");return t(),u("nav",K,[o.curPage!==1?(t(),_(d,{key:0,class:"page-number",to:p(o.curPage-1),"aria-label":"prev"},{default:k(()=>s[0]||(s[0]=[e("div",{"i-ri-arrow-left-s-line":""},null,-1)])),_:1},8,["to"])):y("v-if",!0),(t(!0),u(x,null,w(c.value,g=>(t(),u(x,null,[a(g)?(t(),_(d,{key:g,class:h(["page-number",o.curPage===g&&"active"]),to:p(g)},{default:k(()=>[H(v(g),1)]),_:2},1032,["class","to"])):g===o.curPage-l.value?(t(),u("span",{key:`prev-space-${g}`,class:"space",disabled:""}," ... ")):g===o.curPage+l.value?(t(),u("span",{key:`next-space-${g}`,class:"space",disabled:""}," ... ")):y("v-if",!0)],64))),256)),o.curPage!==c.value?(t(),_(d,{key:1,class:"page-number",to:p(o.curPage+1),"aria-label":"next"},{default:k(()=>s[1]||(s[1]=[e("div",{"i-ri-arrow-right-s-line":""},null,-1)])),_:1},8,["to"])):y("v-if",!0)])}}}),X={class:"py-12"},Z={class:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},ee={class:"space-y-5 xl:col-span-4"},se={class:"space-y-6"},te={class:"text-2xl leading-8 font-bold tracking-tight"},ae=["href"],oe=["innerHTML"],ne={class:"text-base leading-6 font-medium"},le=["href"],re=b({__name:"HairyArticleText",props:{post:{}},setup(m){const r=m,i=C(),n=f(()=>i.value==="text"?S(r.post.excerpt):r.post.excerpt);return(c,l)=>(t(),u("li",X,[e("article",Z,[e("div",ee,[e("div",se,[e("h2",te,[e("a",{class:"st-text",href:c.post.path},v(c.post.title),9,ae)]),n.value?(t(),u("div",{key:0,class:"prose max-w-none text-gray-500",innerHTML:n.value},null,8,oe)):y("v-if",!0)]),e("div",ne,[e("a",{class:"link","aria-label":"read more",href:c.post.path},l[0]||(l[0]=[e("span",{class:"hidden md:block"},"Read more",-1),e("span",null," →",-1)]),8,le)])])])]))}}),ie={class:"divide-y divide-gray-200 dark:divide-gray-700"},ue=b({__name:"HairyPostTextsList",props:{type:{},posts:{}},setup(m){const r=m,i=L(),n=f(()=>r.posts||i.value);return(c,l)=>{const a=re;return t(),u("ul",ie,[(t(!0),u(x,null,w(n.value,(p,o)=>(t(),_(R,{key:o,name:"fade"},{default:k(()=>[P(a,{post:p},null,8,["post"])]),_:2},1024))),128))])}}}),ce={class:"flex justify-between items-center"},pe={class:"flex justify-end gap-2 text-size-sm lt-sm:text-size-xs"},de={class:"lt-sm:hidden"},me=["src"],ge={class:"flex-1 lt-md:flex-[1.2] flex flex-col justify-between py-2 dark:py-0"},fe={class:"flex-1 text-size-sm"},ve={class:"line-clamp-text line-clamp-5 lt-sm:line-clamp-3"},ye={class:"flex justify-between items-center"},_e={class:"text-base leading-6 font-medium"},he={key:0},ke={key:1},xe=b({__name:"HairyArticleImage",props:{post:{},reverse:{type:Boolean}},setup(m){const r=m,i=A(),n=C(),c=f(()=>n.value.includes("slice")),l=f(()=>{var s;return(s=r.post.image)==null?void 0:s.toString()}),a=f(()=>S(r.post.excerpt));function p(){r.post.path&&i.push(r.post.path)}function o(s=[]){i.push({path:`/categories/${z(s).join("/")}`})}return(s,d)=>{var g;return t(),u("li",{class:h(["HairyArticleImage mb-10 py-2 lt-sm:mb-5 lt-md:mb-6",[c.value&&"slice",s.reverse&&"reverse"]])},[e("article",null,[e("div",ce,[e("a",{class:h(["text-size-2xl lt-sm:max-w-200px font-bold truncate cursor-pointer lt-sm:text-size-lg",[s.reverse?"order-last":"order-first"]]),onClick:p},v(s.post.title),3),e("div",pe,[e("span",null,v($(N)(s.post.date).format("YYYY-MM-DD")),1),e("span",null,v(s.post.wordCount)+"字",1),e("span",de,v(s.post.readingTime)+"分钟",1)])]),e("div",{class:h(["h-200px lt-sm:h-120px flex bg-light-2 dark:bg-transparent rounded-5",[s.reverse?"pl-4":"pr-4"]])},[e("div",{class:h(["flex-1 post-image-content",[s.reverse?"order-last":"order-first"]])},[e("img",{class:"post-image rounded-1 w-full h-full object-cover cursor-pointer",src:l.value,onClick:p},null,8,me)],2),e("div",ge,[e("div",fe,[e("div",ve,v(a.value),1)]),e("div",ye,[e("a",{class:h(["cursor-pointer truncate lt-sm:max-w-120px",[s.reverse&&"order-1"]])},[(g=s.post.categories)!=null&&g.length?(t(),u("span",{key:0,onClick:d[0]||(d[0]=T=>o(s.post.categories))},v(s.$t($(z)(s.post.categories).at(-1)||"",{},{missingWarn:!1})),1)):y("v-if",!0)],2),e("div",_e,[e("a",{class:"link flex gap-2 cursor-pointer","aria-label":"read more",onClick:p},[s.reverse?(t(),u("span",he,"←")):y("v-if",!0),d[1]||(d[1]=e("span",{class:"hidden md:block"},"Read more",-1)),s.reverse?y("v-if",!0):(t(),u("span",ke,"→"))])])])])],2)])],2)}}}),be=Y(xe,[["__scopeId","data-v-7827aad1"]]),$e={class:"divide-y divide-gray-200 dark:divide-gray-700"},Pe=b({__name:"HairyPostImageList",props:{type:{},posts:{}},setup(m){const r=m,i=C(),n=f(()=>i.value.includes("reverse")),c=L(),l=f(()=>r.posts||c.value);return(a,p)=>{const o=be;return t(),u("ul",$e,[(t(!0),u(x,null,w(l.value,(s,d)=>(t(),_(R,{key:d,name:"fade"},{default:k(()=>[P(o,{post:s,reverse:n.value&&d%2!==0},null,8,["post","reverse"])]),_:2},1024))),128))])}}}),we={class:"border-b border-[var(--hy-c-divider)] flex-wrap items-center flex justify-between mb-4 gap-2"},Ce={class:"flex-1 flex items-center justify-end gap-2 flex-wrap"},He={class:"lt-md:hidden"},ze={class:"tags flex-center gap-2"},Le={class:"lt-md:hidden flex items-center gap-2"},Te=b({__name:"HairyUpdatedPost",props:{type:{},posts:{}},setup(m){const r=m,i=A(),n=f(()=>{const l=[...r.posts].map(a=>({...a,date:a.date instanceof Date?a.date.valueOf():new Date(a.date||Date.now()).valueOf()}));return l.sort((a,p)=>p.date-a.date),l[0]});function c(l=[]){i.push({path:`/categories/${z(l).join("/")}`})}return(l,a)=>{var o;const p=F;return t(),u("div",we,[a[5]||(a[5]=e("div",{class:"flex-shrink-0 w-100px"}," 最近更新： ",-1)),e("div",Ce,[P(p,{class:"truncate lt-sm:max-w-220px",href:n.value.path},{default:k(()=>[H(v(n.value.title),1)]),_:1},8,["href"]),(o=n.value.tags)!=null&&o.length?(t(),u(x,{key:0},[a[2]||(a[2]=e("div",{class:"lt-md:hidden"}," | ",-1)),e("div",He,[e("div",ze,[a[1]||(a[1]=e("div",{class:"i-material-symbols-bookmarks"},null,-1)),(t(!0),u(x,null,w(n.value.tags,s=>(t(),_($(j),{key:s,size:"small",class:"dark:bg-dark-50 cursor-pointer border-none!",onClick:d=>l.$router.push(`/tags/${s}`)},{default:k(()=>[H(v(s?l.$t(s,{},{missingWarn:!1}):""),1)]),_:2},1032,["onClick"]))),128))])])],64)):y("v-if",!0),n.value.categories?(t(),u(x,{key:1},[a[4]||(a[4]=e("div",{class:"lt-md:hidden"}," | ",-1)),e("div",Le,[a[3]||(a[3]=e("div",{class:"i-material-symbols-folder-open-rounded text-14px"},null,-1)),P($(j),{size:"small",class:"dark:bg-dark-50 cursor-pointer border-none!",onClick:a[0]||(a[0]=s=>c(n.value.categories))},{default:k(()=>[H(v($(z)(n.value.categories).map(s=>l.$t(s,{},{missingWarn:!1})).join("/")),1)]),_:1})])],64)):y("v-if",!0)])])}}}),je=["onClick"],Se=b({__name:"HairyPostToggleLayout",setup(m){const r=C(),i=[{layout:"image:slice:reverse",icon:"i-fluent-text-align-distributed-24-filled"},{layout:"image:slice",icon:"i-fluent-text-align-left-16-filled"},{layout:"image",icon:"i-fluent-text-align-justify-20-filled"},{layout:"markdown",icon:"i-fluent-markdown-20-filled"},{layout:"text",icon:"i-fluent-code-text-16-filled"}],n=W(),{headerRef:c}=G(n),{height:l}=O(c),a=U(typeof document<"u"?document:void 0),p=f(()=>a.y.value>l.value);return(o,s)=>(t(),u("div",{class:h(["inline-flex gap-2 sticky top-15 inset-0 rounded-2 transition-colors duration-200",[p.value&&"bg-white bg-opacity-85 dark:bg-black dark:bg-opacity-80 z-100"]])},[(t(),u(x,null,w(i,d=>e("div",{key:d.layout,class:h(["p-2 rounded-full cursor-pointer",[$(r)===d.layout&&"text-primary"]]),onClick:g=>r.value=d.layout},[e("div",{class:h(["text-size-xl",d.icon])},null,2)],10,je)),64))],2))}}),Re={class:"mt-8"},Ie=b({__name:"HairyPosts",props:{type:{},posts:{},curPage:{default:1},pagination:{type:Boolean,default:!1},updated:{type:Boolean}},setup(m){const r=m,i=C(),n=q(7),c=L({type:r.type||""}),l=f(()=>r.posts||c.value),a=f(()=>l.value.slice((r.curPage-1)*n.value,r.curPage*n.value)),p=f(()=>r.pagination?a.value:l.value);return(o,s)=>{const d=Se,g=Te,T=Pe,B=ue,I=Q;return t(),u("div",Re,[P(d),o.updated?(t(),_(g,{key:0,posts:l.value},null,8,["posts"])):y("v-if",!0),$(i).includes("image")?(t(),_(T,{key:1,posts:p.value},null,8,["posts"])):(t(),_(B,{key:2,posts:p.value},null,8,["posts"])),o.pagination?(t(),_(I,{key:3,class:"mb-6","cur-page":o.curPage,"page-size":n.value,total:l.value.length},null,8,["cur-page","page-size","total"])):y("v-if",!0)])}}});export{Ie as _};
