import{d as te,aG as fe,h as L,aH as Ie,E as Le,g,x as ce,O as me,j as ve,o as f,b as Q,H as d,w as C,k as h,n as m,l as a,N as ue,a2 as xe,e as E,c as k,F as P,J as ze,D as pe,ad as Ce,ae as Ee,r as U,T as Se,aB as Ne,ac as Oe,t as ge,L as Te,a8 as Re,aF as $e}from"./framework.bdb1750b.js";import{d as Ae,m as we,u as M,E as B}from"./base.fee3803e.js";import{i as V,c as Be,e as ye,f as de,l as ee,aq as Ve,ar as Me,p as be,u as he,V as De,E as O,A as Fe,D as He,F as Ye,as as Pe,at as Xe,au as je,av as We,_ as ke,ap as Ke,w as _e,T as Ze,aw as qe}from"./index.7c10520f.js";import{u as Ge,g as Je}from"./index.76badf1a.js";const Ue=(o,u)=>{if(!V||!o||!u)return!1;const l=o.getBoundingClientRect();let n;return u instanceof Element?n=u.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right};var Qe="Expected a function";function ie(o,u,l){var n=!0,v=!0;if(typeof o!="function")throw new TypeError(Qe);return Be(l)&&(n="leading"in l?!!l.leading:n,v="trailing"in l?!!l.trailing:v),Ae(o,u,{leading:n,maxWait:u,trailing:v})}const et=ye({urlList:{type:de(Array),default:()=>we([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),tt={close:()=>!0,switch:o=>ee(o),rotate:o=>ee(o)},at=["src"],nt=te({name:"ElImageViewer"}),st=te({...nt,props:et,emits:tt,setup(o,{expose:u,emit:l}){const n=o,v={CONTAIN:{name:"contain",icon:fe(Ve)},ORIGINAL:{name:"original",icon:fe(Me)}},{t:b}=be(),i=he("image-viewer"),{nextZIndex:ae}=De(),T=L(),N=L([]),S=Ie(),x=L(!0),w=L(n.initialIndex),y=Le(v.CONTAIN),c=L({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=g(()=>{const{urlList:t}=n;return t.length<=1}),$=g(()=>w.value===0),X=g(()=>w.value===n.urlList.length-1),ne=g(()=>n.urlList[w.value]),se=g(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!n.infinite&&$.value)]),F=g(()=>[i.e("btn"),i.e("next"),i.is("disabled",!n.infinite&&X.value)]),le=g(()=>{const{scale:t,deg:s,offsetX:r,offsetY:_,enableTransition:z}=c.value;let p=r/t,I=_/t;switch(s%360){case 90:case-270:[p,I]=[I,-p];break;case 180:case-180:[p,I]=[-p,-I];break;case 270:case-90:[p,I]=[-I,p];break}const A={transform:`scale(${t}) rotate(${s}deg) translate(${p}px, ${I}px)`,transition:z?"transform .3s":""};return y.value.name===v.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),j=g(()=>ee(n.zIndex)?n.zIndex:ae());function R(){re(),l("close")}function oe(){const t=ie(r=>{switch(r.code){case B.esc:n.closeOnPressEscape&&R();break;case B.space:q();break;case B.left:G();break;case B.up:e("zoomIn");break;case B.right:J();break;case B.down:e("zoomOut");break}}),s=ie(r=>{const _=r.deltaY||r.deltaX;e(_<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});S.run(()=>{M(document,"keydown",t),M(document,"wheel",s)})}function re(){S.stop()}function W(){x.value=!1}function K(t){x.value=!1,t.target.alt=b("el.image.error")}function Z(t){if(x.value||t.button!==0||!T.value)return;c.value.enableTransition=!1;const{offsetX:s,offsetY:r}=c.value,_=t.pageX,z=t.pageY,p=ie(A=>{c.value={...c.value,offsetX:s+A.pageX-_,offsetY:r+A.pageY-z}}),I=M(document,"mousemove",p);M(document,"mouseup",()=>{I()}),t.preventDefault()}function H(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function q(){if(x.value)return;const t=Ke(v),s=Object.values(v),r=y.value.name,z=(s.findIndex(p=>p.name===r)+1)%t.length;y.value=v[t[z]],H()}function Y(t){const s=n.urlList.length;w.value=(t+s)%s}function G(){$.value&&!n.infinite||Y(w.value-1)}function J(){X.value&&!n.infinite||Y(w.value+1)}function e(t,s={}){if(x.value)return;const{minScale:r,maxScale:_}=n,{zoomRate:z,rotateDeg:p,enableTransition:I}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(t){case"zoomOut":c.value.scale>r&&(c.value.scale=Number.parseFloat((c.value.scale/z).toFixed(3)));break;case"zoomIn":c.value.scale<_&&(c.value.scale=Number.parseFloat((c.value.scale*z).toFixed(3)));break;case"clockwise":c.value.deg+=p,l("rotate",c.value.deg);break;case"anticlockwise":c.value.deg-=p,l("rotate",c.value.deg);break}c.value.enableTransition=I}return ce(ne,()=>{me(()=>{const t=N.value[0];t!=null&&t.complete||(x.value=!0)})}),ce(w,t=>{H(),l("switch",t)}),ve(()=>{var t,s;oe(),(s=(t=T.value)==null?void 0:t.focus)==null||s.call(t)}),u({setActiveItem:Y}),(t,s)=>(f(),Q(Ne,{to:"body",disabled:!t.teleported},[d(Se,{name:"viewer-fade",appear:""},{default:C(()=>[h("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:m(a(i).e("wrapper")),style:ue({zIndex:a(j)})},[h("div",{class:m(a(i).e("mask")),onClick:s[0]||(s[0]=xe(r=>t.hideOnClickModal&&R(),["self"]))},null,2),E(" CLOSE "),h("span",{class:m([a(i).e("btn"),a(i).e("close")]),onClick:R},[d(a(O),null,{default:C(()=>[d(a(Fe))]),_:1})],2),E(" ARROW "),a(D)?E("v-if",!0):(f(),k(P,{key:0},[h("span",{class:m(a(se)),onClick:G},[d(a(O),null,{default:C(()=>[d(a(He))]),_:1})],2),h("span",{class:m(a(F)),onClick:J},[d(a(O),null,{default:C(()=>[d(a(Ye))]),_:1})],2)],64)),E(" ACTIONS "),h("div",{class:m([a(i).e("btn"),a(i).e("actions")])},[h("div",{class:m(a(i).e("actions__inner"))},[d(a(O),{onClick:s[1]||(s[1]=r=>e("zoomOut"))},{default:C(()=>[d(a(Pe))]),_:1}),d(a(O),{onClick:s[2]||(s[2]=r=>e("zoomIn"))},{default:C(()=>[d(a(Xe))]),_:1}),h("i",{class:m(a(i).e("actions__divider"))},null,2),d(a(O),{onClick:q},{default:C(()=>[(f(),Q(ze(a(y).icon)))]),_:1}),h("i",{class:m(a(i).e("actions__divider"))},null,2),d(a(O),{onClick:s[3]||(s[3]=r=>e("anticlockwise"))},{default:C(()=>[d(a(je))]),_:1}),d(a(O),{onClick:s[4]||(s[4]=r=>e("clockwise"))},{default:C(()=>[d(a(We))]),_:1})],2)],2),E(" CANVAS "),h("div",{class:m(a(i).e("canvas"))},[(f(!0),k(P,null,pe(t.urlList,(r,_)=>Ce((f(),k("img",{ref_for:!0,ref:z=>N.value[_]=z,key:r,src:r,style:ue(a(le)),class:m(a(i).e("img")),onLoad:W,onError:K,onMousedown:Z},null,46,at)),[[Ee,_===w.value]])),128))],2),U(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var lt=ke(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ot=_e(lt),rt=ye({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:de([String,Object])},previewSrcList:{type:de(Array),default:()=>we([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),it={load:o=>o instanceof Event,error:o=>o instanceof Event,switch:o=>ee(o),close:()=>!0,show:()=>!0},ct=["src","loading"],ut={key:0},dt=te({name:"ElImage",inheritAttrs:!1}),ft=te({...dt,props:rt,emits:it,setup(o,{emit:u}){const l=o;let n="";const{t:v}=be(),b=he("image"),i=Oe(),ae=Ge(),T=L(),N=L(!1),S=L(!0),x=L(!1),w=L(),y=L(),c=V&&"loading"in HTMLImageElement.prototype;let D,$;const X=g(()=>[b.e("inner"),F.value&&b.e("preview"),S.value&&b.is("loading")]),ne=g(()=>i.style),se=g(()=>{const{fit:e}=l;return V&&e?{objectFit:e}:{}}),F=g(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),le=g(()=>{const{previewSrcList:e,initialIndex:t}=l;let s=t;return t>e.length-1&&(s=0),s}),j=g(()=>l.loading==="eager"?!1:!c&&l.loading==="lazy"||l.lazy),R=()=>{V&&(S.value=!0,N.value=!1,T.value=l.src)};function oe(e){S.value=!1,N.value=!1,u("load",e)}function re(e){S.value=!1,N.value=!0,u("error",e)}function W(){Ue(w.value,y.value)&&(R(),H())}const K=qe(W,200,!0);async function Z(){var e;if(!V)return;await me();const{scrollContainer:t}=l;Ze(t)?y.value=t:Re(t)&&t!==""?y.value=(e=document.querySelector(t))!=null?e:void 0:w.value&&(y.value=Je(w.value)),y.value&&(D=M(y,"scroll",K),setTimeout(()=>W(),100))}function H(){!V||!y.value||!K||(D==null||D(),y.value=void 0)}function q(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function Y(){F.value&&($=M("wheel",q,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",x.value=!0,u("show"))}function G(){$==null||$(),document.body.style.overflow=n,x.value=!1,u("close")}function J(e){u("switch",e)}return ce(()=>l.src,()=>{j.value?(S.value=!0,N.value=!1,H(),Z()):R()}),ve(()=>{j.value?Z():R()}),(e,t)=>(f(),k("div",{ref_key:"container",ref:w,class:m([a(b).b(),e.$attrs.class]),style:ue(a(ne))},[N.value?U(e.$slots,"error",{key:0},()=>[h("div",{class:m(a(b).e("error"))},ge(a(v)("el.image.error")),3)]):(f(),k(P,{key:1},[T.value!==void 0?(f(),k("img",Te({key:0},a(ae),{src:T.value,loading:e.loading,style:a(se),class:a(X),onClick:Y,onLoad:oe,onError:re}),null,16,ct)):E("v-if",!0),S.value?(f(),k("div",{key:1,class:m(a(b).e("wrapper"))},[U(e.$slots,"placeholder",{},()=>[h("div",{class:m(a(b).e("placeholder"))},null,2)])],2)):E("v-if",!0)],64)),a(F)?(f(),k(P,{key:2},[x.value?(f(),Q(a(ot),{key:0,"z-index":e.zIndex,"initial-index":a(le),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:J},{default:C(()=>[e.$slots.viewer?(f(),k("div",ut,[U(e.$slots,"viewer")])):E("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):E("v-if",!0)],64)):E("v-if",!0)],6))}});var mt=ke(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const vt=_e(mt),bt={__name:"BackMap",setup(o){const u=$e(),l=()=>{u.go("/blog/docs/map")};return(n,v)=>(f(),k("div",{class:"absolute top--30px left--100px cursor-pointer",onClick:l},ge("<-")+" Back Map "))}};const ht={__name:"ImgPreview",props:{imgList:{type:Array,default:()=>[]}},setup(o){return(u,l)=>{const n=vt;return f(),k("div",null,[(f(!0),k(P,null,pe(o.imgList,(v,b)=>(f(),Q(n,{key:b,class:"w-100% border-rd-8px",style:{border:"1px solid #eeeeee"},src:v,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,lazy:"","hide-on-click-modal":"","initial-index":b,"preview-src-list":o.imgList,fit:"cover"},null,8,["src","initial-index","preview-src-list"]))),128))])}}};export{bt as _,ht as a};
