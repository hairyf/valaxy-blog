import{d as v,a as B,b as i,c as g,g as s,h as y,f as t,M as N,p as V,r as Y,b1 as I,k as W,u as D,C as E,x as G,e as m,w as r,j as o,t as _,az as M,F as R,l as L,i as w,aW as P,aX as S,b2 as z,aY as O,aZ as U,a_ as X}from"./app-C5E7XBok.js";import{a as f,r as Z,_ as q}from"./HairyImageViewer.vue_vue_type_script_setup_true_lang-yGvAFMsM.js";import{E as A}from"./index-BQh2XW6P.js";import"./index-B8DctFvE.js";import"./use-form-common-props-DJQcRjT_.js";const J={class:"mb-15"},K={class:"flex items-center justify-end mt-2"},Q=["data-path"],aa=v({__name:"HairyPostFooter",setup(p){const e=B();return(u,a)=>(i(),g("div",J,[a[3]||(a[3]=s("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),s("div",K,[a[0]||(a[0]=s("div",{class:"i-ri-eye-fill mr-2"},null,-1)),a[1]||(a[1]=y(" 阅读次数 ")),s("span",{class:"waline-pageview-count mx-2","data-path":t(e).path},null,8,Q),a[2]||(a[2]=y(" 次 "))])]))}}),ea=v({__name:"HairyImageGlobal",props:{row:{default:"auto"},col:{default:"auto"},gap:{default:10},justify:{default:"space-evenly"},align:{default:"initial"}},setup(p){const e=p;N(()=>({width:f(e.row),height:f(e.col),gap:f(e.gap),justify:e.justify,align:e.align}));function u(a){Z(q,{urlList:[a],initialIndex:0})}return V("HairyImageGroup:preview",u),(a,n)=>Y(a.$slots,"default")}}),ta={class:"flex gap-2"},sa={key:0,class:"tags flex-center gap-2 mt-2"},_a=v({__name:"post",props:{header:{}},setup(p){const e=I(),u=W(()=>e.value.addons["valaxy-addon-waline"]),a=D(),n=E();function $(d){a.push(`/tags/${d}`)}return(d,na)=>{const b=P,k=S,C=G("router-view"),H=ea,h=aa,x=z,j=O,F=U,T=X;return i(),m(T,null,{default:r(()=>[o(b),o(k,{title:t(n).title},{description:r(()=>{var l;return[s("div",ta,[s("span",null,"发表于 "+_(t(M)(t(n).date).format("YYYY-MM-DD")),1),s("span",null,"本文字数 "+_(t(n).wordCount)+" 字",1),s("span",null,"阅读时长 "+_(t(n).readingTime)+" 分钟",1)]),(l=t(n).tags)!=null&&l.length?(i(),g("div",sa,[(i(!0),g(R,null,L(t(n).tags,c=>(i(),m(t(A),{key:c,class:"dark:bg-dark-50 cursor-pointer",onClick:oa=>$(c)},{default:r(()=>[y(_(c?d.$t(c,{},{missingWarn:!1}):""),1)]),_:2},1032,["onClick"]))),128))])):w("v-if",!0)]}),_:1},8,["title"]),o(j,null,{default:r(()=>{var l;return[o(H,null,{default:r(()=>[o(C)]),_:1}),(l=u.value.options)!=null&&l.pageview?(i(),m(h,{key:0})):w("v-if",!0)]}),slide:r(()=>[o(x)]),_:1}),o(F)]),_:1})}}});export{_a as default};
