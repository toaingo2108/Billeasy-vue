import{p as m,a$ as S,i as V,G as f,H as a,I as n,b1 as b,ax as k,ay as x,b5 as A,a1 as c,aB as O,c as h,x as U,aC as D,aD as p,J as F,b6 as N,b7 as _}from"./index-c6a3952a.js";const B=m({...S({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),T=V()({name:"VRadio",props:B(),setup(e,l){let{slots:s}=l;return f(()=>a(b,n(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const H=m({height:{type:[Number,String],default:"auto"},...k(),...x(A(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),j=V()({name:"VRadioGroup",inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:s,slots:t}=l;const y=O(),i=h(()=>e.id||`radio-group-${y}`),o=U(e,"modelValue");return f(()=>{const[v,I]=D(s),[R,J]=p.filterProps(e),[g,L]=b.filterProps(e),r=t.label?t.label({label:e.label,props:{for:i.value}}):e.label;return a(p,n({class:["v-radio-group",e.class],style:e.style},v,R,{modelValue:o.value,"onUpdate:modelValue":u=>o.value=u,id:i.value}),{...t,default:u=>{let{id:d,messagesId:P,isDisabled:G,isReadonly:$}=u;return a(F,null,[r&&a(N,{id:d.value},{default:()=>[r]}),a(_,n(g,{id:d.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:G.value,readonly:$.value,"aria-labelledby":r?d.value:void 0,multiple:!1},I,{modelValue:o.value,"onUpdate:modelValue":C=>o.value=C}),t)])}})}),{}}});export{T as V,j as a};
