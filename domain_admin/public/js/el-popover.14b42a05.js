import{d as N,af as T,I as _,e as v,X as B,h as x,u as I,g as V,c as h,W as z,f as $,ag as D,w as F}from"./index.95d3e9d7.js";import{t as R}from"./element-icon.a70fe67d.js";import{D as A,r as W,h as r,o as p,Q as i,R as s,a as c,P as l,u as t,W as q,S as L,M as C,aa as f,V as u,T as g,E as M,F as Q}from"./vendor-vue.03135ea1.js";const U=N({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:T,default:"primary"},cancelButtonType:{type:String,values:T,default:"text"},icon:{type:_,default:()=>R},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:v(Function)},onCancel:{type:v(Function)},teleported:B.teleported,persistent:B.persistent,width:{type:[String,Number],default:150}}),X={name:"ElPopconfirm"},j=A({...X,props:U,setup(P){const n=P,{t:m}=x(),a=I("popconfirm"),d=W(),y=()=>{var e,o;(o=(e=d.value)==null?void 0:e.onClose)==null||o.call(e)},k=r(()=>({width:D(n.width)})),S=e=>{var o;(o=n.onConfirm)==null||o.call(n,e),y()},b=e=>{var o;(o=n.onCancel)==null||o.call(n,e),y()},w=r(()=>n.confirmButtonText||m("el.popconfirm.confirmButtonText")),E=r(()=>n.cancelButtonText||m("el.popconfirm.cancelButtonText"));return(e,o)=>(p(),i(t(z),Q({ref_key:"tooltipRef",ref:d,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(a).namespace.value}-popover`,"popper-style":t(k),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[c("div",{class:l(t(a).b())},[c("div",{class:l(t(a).e("main"))},[!e.hideIcon&&e.icon?(p(),i(t(V),{key:0,class:l(t(a).e("icon")),style:q({color:e.iconColor})},{default:s(()=>[(p(),i(L(e.icon)))]),_:1},8,["class","style"])):C("v-if",!0),f(" "+u(e.title),1)],2),c("div",{class:l(t(a).e("action"))},[g(t(h),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:b},{default:s(()=>[f(u(t(E)),1)]),_:1},8,["type","text"]),g(t(h),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:S},{default:s(()=>[f(u(t(w)),1)]),_:1},8,["type","text"])],2)],2)]),default:s(()=>[e.$slots.reference?M(e.$slots,"reference",{key:0}):C("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var G=$(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const O=F(G);export{O as E};