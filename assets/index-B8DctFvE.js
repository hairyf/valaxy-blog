import{ab as _e,ac as j,ad as he,R as Ie,S as ie,T as xe,U as re,d as ve,ae as oe,af as we,ag as ye,V as Te,W as Ce,ah as Ee,H as M,ai as Ne,aj as Oe,k as L,Z as le,a1 as ze,B as Le,b as F,e as ce,w as I,j as f,ak as Re,g as x,L as g,f as n,y as ue,al as Se,i as W,am as O,an as Me,c as q,F as fe,ao as Ae,ap as $e,aq as Be,ar as Ve,as as Xe,at as Fe,au as We,l as Ye,av as De,aw as Pe,r as He,ax as je,a0 as Ue,a5 as H,ay as A,a6 as Ze}from"./app-C5E7XBok.js";var Ke=/\s/;function qe(e){for(var i=e.length;i--&&Ke.test(e.charAt(i)););return i}var Ge=/^\s+/;function Je(e){return e&&e.slice(0,qe(e)+1).replace(Ge,"")}var de=NaN,Qe=/^[-+]0x[0-9a-f]+$/i,ea=/^0b[01]+$/i,aa=/^0o[0-7]+$/i,na=parseInt;function me(e){if(typeof e=="number")return e;if(_e(e))return de;if(j(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=j(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Je(e);var l=ea.test(e);return l||aa.test(e)?na(e.slice(2),l?2:8):Qe.test(e)?de:+e}var G=function(){return he.Date.now()},ta="Expected a function",sa=Math.max,ia=Math.min;function ra(e,i,l){var d,s,p,C,t,w,y=0,$=!1,E=!1,b=!0;if(typeof e!="function")throw new TypeError(ta);i=me(i)||0,j(l)&&($=!!l.leading,E="maxWait"in l,p=E?sa(me(l.maxWait)||0,i):p,b="trailing"in l?!!l.trailing:b);function m(r){var k=d,T=s;return d=s=void 0,y=r,C=e.apply(T,k),C}function R(r){return y=r,t=setTimeout(S,i),$?m(r):C}function c(r){var k=r-w,T=r-y,P=i-k;return E?ia(P,p-T):P}function Y(r){var k=r-w,T=r-y;return w===void 0||k>=i||k<0||E&&T>=p}function S(){var r=G();if(Y(r))return B(r);t=setTimeout(S,c(r))}function B(r){return t=void 0,b&&d?m(r):(d=s=void 0,C)}function D(){t!==void 0&&clearTimeout(t),y=0,d=w=s=t=void 0}function U(){return t===void 0?C:B(G())}function V(){var r=G(),k=Y(r);if(d=arguments,s=this,w=r,k){if(t===void 0)return R(w);if(E)return clearTimeout(t),t=setTimeout(S,i),m(w)}return t===void 0&&(t=setTimeout(S,i)),C}return V.cancel=D,V.flush=U,V}var oa="Expected a function";function J(e,i,l){var d=!0,s=!0;if(typeof e!="function")throw new TypeError(oa);return j(l)&&(d="leading"in l?!!l.leading:d,s="trailing"in l?!!l.trailing:s),ra(e,i,{leading:d,maxWait:i,trailing:s})}const la=e=>Object.keys(e),ca=Ie({urlList:{type:ie(Array),default:()=>xe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:ie(String)}}),ua={close:()=>!0,switch:e=>re(e),rotate:e=>re(e)},fa=ve({name:"ElImageViewer"}),da=ve({...fa,props:ca,emits:ua,setup(e,{expose:i,emit:l}){var d;const s=e,p={CONTAIN:{name:"contain",icon:oe(we)},ORIGINAL:{name:"original",icon:oe(ye)}},{t:C}=Te(),t=Ce("image-viewer"),{nextZIndex:w}=Ee(),y=M(),$=M([]),E=Ne(),b=M(!0),m=M(s.initialIndex),R=Oe(p.CONTAIN),c=M({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=M((d=s.zIndex)!=null?d:w()),S=L(()=>{const{urlList:a}=s;return a.length<=1}),B=L(()=>m.value===0),D=L(()=>m.value===s.urlList.length-1),U=L(()=>s.urlList[m.value]),V=L(()=>[t.e("btn"),t.e("prev"),t.is("disabled",!s.infinite&&B.value)]),r=L(()=>[t.e("btn"),t.e("next"),t.is("disabled",!s.infinite&&D.value)]),k=L(()=>{const{scale:a,deg:u,offsetX:o,offsetY:v,enableTransition:_}=c.value;let h=o/a,N=v/a;const X=u*Math.PI/180,te=Math.cos(X),se=Math.sin(X);h=h*te+N*se,N=N*te-o/a*se;const K={transform:`scale(${a}) rotate(${u}deg) translate(${h}px, ${N}px)`,transition:_?"transform .3s":""};return R.value.name===p.CONTAIN.name&&(K.maxWidth=K.maxHeight="100%"),K});function T(){ge(),l("close")}function P(){const a=J(o=>{switch(o.code){case A.esc:s.closeOnPressEscape&&T();break;case A.space:ee();break;case A.left:ae();break;case A.up:z("zoomIn");break;case A.right:ne();break;case A.down:z("zoomOut");break}}),u=J(o=>{const v=o.deltaY||o.deltaX;z(v<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});E.run(()=>{H(document,"keydown",a),H(document,"wheel",u)})}function ge(){E.stop()}function pe(){b.value=!1}function be(a){b.value=!1,a.target.alt=C("el.image.error")}function ke(a){if(b.value||a.button!==0||!y.value)return;c.value.enableTransition=!1;const{offsetX:u,offsetY:o}=c.value,v=a.pageX,_=a.pageY,h=J(X=>{c.value={...c.value,offsetX:u+X.pageX-v,offsetY:o+X.pageY-_}}),N=H(document,"mousemove",h);H(document,"mouseup",()=>{N()}),a.preventDefault()}function Q(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(b.value)return;const a=la(p),u=Object.values(p),o=R.value.name,_=(u.findIndex(h=>h.name===o)+1)%a.length;R.value=p[a[_]],Q()}function Z(a){const u=s.urlList.length;m.value=(a+u)%u}function ae(){B.value&&!s.infinite||Z(m.value-1)}function ne(){D.value&&!s.infinite||Z(m.value+1)}function z(a,u={}){if(b.value)return;const{minScale:o,maxScale:v}=s,{zoomRate:_,rotateDeg:h,enableTransition:N}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...u};switch(a){case"zoomOut":c.value.scale>o&&(c.value.scale=Number.parseFloat((c.value.scale/_).toFixed(3)));break;case"zoomIn":c.value.scale<v&&(c.value.scale=Number.parseFloat((c.value.scale*_).toFixed(3)));break;case"clockwise":c.value.deg+=h,l("rotate",c.value.deg);break;case"anticlockwise":c.value.deg-=h,l("rotate",c.value.deg);break}c.value.enableTransition=N}return le(U,()=>{ze(()=>{const a=$.value[0];a!=null&&a.complete||(b.value=!0)})}),le(m,a=>{Q(),l("switch",a)}),Le(()=>{var a,u;P(),(u=(a=y.value)==null?void 0:a.focus)==null||u.call(a)}),i({setActiveItem:Z}),(a,u)=>(F(),ce(n(je),{to:"body",disabled:!a.teleported},{default:I(()=>[f(Re,{name:"viewer-fade",appear:""},{default:I(()=>[x("div",{ref_key:"wrapper",ref:y,tabindex:-1,class:g(n(t).e("wrapper")),style:ue({zIndex:Y.value})},[x("div",{class:g(n(t).e("mask")),onClick:Se(o=>a.hideOnClickModal&&T(),["self"])},null,10,["onClick"]),W(" CLOSE "),x("span",{class:g([n(t).e("btn"),n(t).e("close")]),onClick:T},[f(n(O),null,{default:I(()=>[f(n(Me))]),_:1})],2),W(" ARROW "),n(S)?W("v-if",!0):(F(),q(fe,{key:0},[x("span",{class:g(n(V)),onClick:ae},[f(n(O),null,{default:I(()=>[f(n(Ae))]),_:1})],2),x("span",{class:g(n(r)),onClick:ne},[f(n(O),null,{default:I(()=>[f(n($e))]),_:1})],2)],64)),W(" ACTIONS "),x("div",{class:g([n(t).e("btn"),n(t).e("actions")])},[x("div",{class:g(n(t).e("actions__inner"))},[f(n(O),{onClick:o=>z("zoomOut")},{default:I(()=>[f(n(Be))]),_:1},8,["onClick"]),f(n(O),{onClick:o=>z("zoomIn")},{default:I(()=>[f(n(Ve))]),_:1},8,["onClick"]),x("i",{class:g(n(t).e("actions__divider"))},null,2),f(n(O),{onClick:ee},{default:I(()=>[(F(),ce(Xe(n(R).icon)))]),_:1}),x("i",{class:g(n(t).e("actions__divider"))},null,2),f(n(O),{onClick:o=>z("anticlockwise")},{default:I(()=>[f(n(Fe))]),_:1},8,["onClick"]),f(n(O),{onClick:o=>z("clockwise")},{default:I(()=>[f(n(We))]),_:1},8,["onClick"])],2)],2),W(" CANVAS "),x("div",{class:g(n(t).e("canvas"))},[(F(!0),q(fe,null,Ye(a.urlList,(o,v)=>De((F(),q("img",{ref_for:!0,ref:_=>$.value[v]=_,key:o,src:o,style:ue(n(k)),class:g(n(t).e("img")),crossorigin:a.crossorigin,onLoad:pe,onError:be,onMousedown:ke},null,46,["src","crossorigin"])),[[Pe,v===m.value]])),128))],2),He(a.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var ma=Ue(da,[["__file","image-viewer.vue"]]);const ga=Ze(ma);export{ga as E,ca as i};
