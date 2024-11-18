import{d as A,c as G,o as g,a as b,t as y,b as _,e as H,n as J}from"./vue.esm-bundler-p8aU2Kag.js";const Q=["disabled"],R={key:0,class:"button__icon button__icon--leading","aria-hidden":"true"},X={class:"button__label"},Y={key:1,class:"button__icon button__icon--trailing","aria-hidden":"true"},U=A({__name:"Button",props:{label:{},size:{default:"medium"},variant:{default:"primary"},leadingIcon:{},trailingIcon:{},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:u}){const a=e,m=u,p=G(()=>["button",`button--${a.size}`,`button--${a.variant}`,{"button--disabled":a.disabled}]);return(n,f)=>(g(),b("button",{class:J(p.value),disabled:n.disabled,onClick:f[0]||(f[0]=j=>m("click",j))},[n.leadingIcon?(g(),b("span",R,y(n.leadingIcon),1)):_("",!0),H("span",X,y(n.label),1),n.trailingIcon?(g(),b("span",Y,y(n.trailingIcon),1)):_("",!0)],10,Q))}}),Z=(e,u)=>{const a=e.__vccOpts||e;for(const[m,p]of u)a[m]=p;return a},ee=Z(U,[["__scopeId","data-v-0094078a"]]);U.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:'"medium"'}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"tertiary"'}]},defaultValue:{func:!1,value:'"primary"'}},{name:"leadingIcon",required:!1,type:{name:"string"}},{name:"trailingIcon",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/Users/albrecht/Documents/KNIME/git/knui_storybookv1/src/components/Button.vue"]};const ne={title:"Components/Button",component:ee,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},variant:{control:{type:"select"},options:["primary","secondary","tertiary"]},leadingIcon:{control:"text"},trailingIcon:{control:"text"},disabled:{control:"boolean"}},args:{onClick:e=>console.warn("Button clicked",e)}},t={args:{label:"Button text",variant:"primary"}},r={args:{label:"Secondary Button",variant:"secondary"}},s={args:{label:"Tertiary Button",variant:"tertiary"}},o={args:{label:"Small Button",size:"small"}},l={args:{label:"Large Button",size:"large"}},i={args:{label:"Button with Leading Icon",leadingIcon:"→"}},c={args:{label:"Button with Trailing Icon",trailingIcon:"←"}},d={args:{label:"Disabled Button",disabled:!0}};var B,I,v;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Button text",
    variant: "primary"
  }
}`,...(v=(I=t.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,h,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Secondary Button",
    variant: "secondary"
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var z,T,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Tertiary Button",
    variant: "tertiary"
  }
}`,...(L=(T=s.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var q,C,D;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Small Button",
    size: "small"
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var w,N,V;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Large Button",
    size: "large"
  }
}`,...(V=(N=l.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var x,E,W;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Button with Leading Icon",
    leadingIcon: "→"
  }
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var M,O,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Button with Trailing Icon",
    trailingIcon: "←"
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,F,K;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    disabled: true
  }
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const te=["Primary","Secondary","Tertiary","Small","Large","WithLeadingIcon","WithTrailingIcon","Disabled"];export{d as Disabled,l as Large,t as Primary,r as Secondary,o as Small,s as Tertiary,i as WithLeadingIcon,c as WithTrailingIcon,te as __namedExportsOrder,ne as default};
