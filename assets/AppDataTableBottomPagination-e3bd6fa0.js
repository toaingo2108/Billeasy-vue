import{r as q}from"./right-686b2120.js";import{A as G,b8 as O,p as W,a1 as P,m as H,d as Q,aS as U,e as X,f as Z,b9 as J,g as Y,h as ee,aV as ae,i as te,x as ie,a4 as le,u as ne,j as se,q as re,s as oe,F as B,ba as ue,c as h,bb as k,t as f,G as ve,H as n,ag as b,I as x,bc as S,K as C,L as ce,O as de,Z as ge,Q as V,ae as R,S as $}from"./index-c6a3952a.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";const be="/assets/left-3665936b.svg";function he(){const e=G([]);O(()=>e.value=[]);function m(s,_){e.value[_]=s}return{refs:e,updateRef:m}}const me=W({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:P,default:"$first"},prevIcon:{type:P,default:"$prev"},nextIcon:{type:P,default:"$next"},lastIcon:{type:P,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...H(),...Q(),...U(),...X(),...Z(),...J(),...Y({tag:"nav"}),...ee(),...ae({variant:"text"})},"VPagination"),pe=te()({name:"VPagination",props:me(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,m){let{slots:s,emit:_}=m;const i=ie(e,"modelValue"),{t:v,n:D}=le(),{isRtl:L}=ne(),{themeClasses:F}=se(e),{width:N}=re(),w=oe(-1);B(void 0,{scoped:!0});const{resizeRef:M}=ue(a=>{if(!a.length)return;const{target:t,contentRect:l}=a[0],u=t.querySelector(".v-pagination__list > *");if(!u)return;const c=l.width,y=u.offsetWidth+parseFloat(getComputedStyle(u).marginRight)*2;w.value=I(c,y)}),r=h(()=>parseInt(e.length,10)),o=h(()=>parseInt(e.start,10)),d=h(()=>e.totalVisible?parseInt(e.totalVisible,10):w.value>=0?w.value:I(N.value,58));function I(a,t){const l=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*l)/t).toFixed(2)))}const T=h(()=>{if(r.value<=0||isNaN(r.value)||r.value>Number.MAX_SAFE_INTEGER)return[];if(d.value<=1)return[i.value];if(r.value<=d.value)return k(r.value,o.value);const a=d.value%2===0,t=a?d.value/2:Math.floor(d.value/2),l=a?t:t+1,u=r.value-t;if(l-i.value>=0)return[...k(Math.max(1,d.value-1),o.value),e.ellipsis,r.value];if(i.value-u>=(a?1:0)){const c=d.value-1,y=r.value-c+o.value;return[o.value,e.ellipsis,...k(c,y)]}else{const c=Math.max(1,d.value-3),y=c===1?i.value:i.value-Math.ceil(c/2)+o.value;return[o.value,e.ellipsis,...k(c,y),e.ellipsis,r.value]}});function p(a,t,l){a.preventDefault(),i.value=t,l&&_(l,t)}const{refs:z,updateRef:E}=he();B({VPaginationBtn:{color:f(e,"color"),border:f(e,"border"),density:f(e,"density"),size:f(e,"size"),variant:f(e,"variant"),rounded:f(e,"rounded"),elevation:f(e,"elevation")}});const j=h(()=>T.value.map((a,t)=>{const l=u=>E(u,t);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const u=a===i.value;return{isActive:u,key:a,page:D(a),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:u?e.activeColor:e.color,ariaCurrent:u,ariaLabel:v(u?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:c=>p(c,a)}}}})),g=h(()=>{const a=!!e.disabled||i.value<=o.value,t=!!e.disabled||i.value>=o.value+r.value-1;return{first:e.showFirstLastPage?{icon:L.value?e.lastIcon:e.firstIcon,onClick:l=>p(l,o.value,"first"),disabled:a,ariaLabel:v(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:L.value?e.nextIcon:e.prevIcon,onClick:l=>p(l,i.value-1,"prev"),disabled:a,ariaLabel:v(e.previousAriaLabel),ariaDisabled:a},next:{icon:L.value?e.prevIcon:e.nextIcon,onClick:l=>p(l,i.value+1,"next"),disabled:t,ariaLabel:v(e.nextAriaLabel),ariaDisabled:t},last:e.showFirstLastPage?{icon:L.value?e.firstIcon:e.lastIcon,onClick:l=>p(l,o.value+r.value-1,"last"),disabled:t,ariaLabel:v(e.lastAriaLabel),ariaDisabled:t}:void 0}});function A(){var t;const a=i.value-o.value;(t=z.value[a])==null||t.$el.focus()}function K(a){a.key===S.left&&!e.disabled&&i.value>+e.start?(i.value=i.value-1,C(A)):a.key===S.right&&!e.disabled&&i.value<o.value+r.value-1&&(i.value=i.value+1,C(A))}return ve(()=>n(e.tag,{ref:M,class:["v-pagination",F.value,e.class],style:e.style,role:"navigation","aria-label":v(e.ariaLabel),onKeydown:K,"data-test":"v-pagination-root"},{default:()=>[n("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&n("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[s.first?s.first(g.value.first):n(b,x({_as:"VPaginationBtn"},g.value.first),null)]),n("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[s.prev?s.prev(g.value.prev):n(b,x({_as:"VPaginationBtn"},g.value.prev),null)]),j.value.map((a,t)=>n("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[s.item?s.item(a):n(b,x({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),n("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[s.next?s.next(g.value.next):n(b,x({_as:"VPaginationBtn"},g.value.next),null)]),e.showFirstLastPage&&n("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[s.last?s.last(g.value.last):n(b,x({_as:"VPaginationBtn"},g.value.last),null)])])]})),{}}}),ye={class:"d-flex flex-row align-center justify-center",style:{width:"40px",height:"48px"}},xe={class:"d-flex flex-row align-center justify-center",style:{width:"40px",height:"48px"}},_e=ce({__name:"AppDataTableBottomPagination",props:{length:{type:Number,default:0}},setup(e){const m=e;return(s,_)=>(de(),ge(pe,{length:m.length,"total-visible":"5","active-color":"white",color:"#B2B2CB",rounded:"lg"},{prev:V(({onClick:i,disabled:v})=>[R("div",ye,[n(b,{flat:"",rounded:"lg",style:{width:"24px",height:"24px","max-width":"24px","min-width":"24px",padding:"0",margin:"0"},disabled:v},{default:V(()=>[n($,{width:"24",height:"24",src:be,onClick:i},null,8,["onClick"])]),_:2},1032,["disabled"])])]),next:V(({onClick:i,disabled:v})=>[R("div",xe,[n(b,{flat:"",rounded:"lg",style:{width:"24px",height:"24px","max-width":"24px","min-width":"24px",padding:"0",margin:"0"},disabled:v},{default:V(()=>[n($,{width:"24",height:"24",src:q,onClick:i},null,8,["onClick"])]),_:2},1032,["disabled"])])]),_:1},8,["length"]))}});const Ve=fe(_e,[["__scopeId","data-v-7f702ca0"]]);export{Ve as A};
