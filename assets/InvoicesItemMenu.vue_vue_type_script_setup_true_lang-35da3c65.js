import{r as s,c as l,p as u}from"./ScheduleSendOutDialog.vue_vue_type_script_setup_true_lang-263053f1.js";import{i as p}from"./RegisterPaymentDialog.vue_vue_type_script_setup_true_lang-0d560941.js";import{d}from"./duplicate-be8438bb.js";import{L as m,O as i,Z as I,Q as t,H as n,V as f,P as v,U as C,W as k,S as x,$ as y,_ as P,J as _,ai as F}from"./index-c6a3952a.js";import{b as g}from"./VCard-6c311142.js";const R=m({__name:"InvoicesItemMenu",props:{onRegisterPayment:{type:Function,default:()=>{}},onSendInvoice:{type:Function,default:()=>{}},onCreditInvoice:{type:Function,default:()=>{}},onDuplicate:{type:Function,default:()=>{}},onPreviewPDF:{type:Function,default:()=>{}}},setup(c){const e=c,a=[{text:"Register Payment",icon:s,onClick:e.onRegisterPayment},{text:"Send Invoice",icon:p,onClick:e.onSendInvoice},{text:"Credit Invoice",icon:l,onClick:e.onCreditInvoice},{text:"Duplicate",icon:d,onClick:e.onDuplicate},{text:"Preview PDF",icon:u,onClick:e.onPreviewPDF}];return(D,V)=>(i(),I(F,{activator:"parent"},{default:t(()=>[n(g,{width:"240",class:"rounded-xl pa-3"},{default:t(()=>[n(f,null,{default:t(()=>[(i(),v(_,null,C(a,(o,r)=>n(k,{key:r,value:o,color:"primary",rounded:"lg",onClick:o.onClick},{prepend:t(()=>[n(x,{src:o.icon,width:"20",height:"20",class:"me-3"},null,8,["src"])]),default:t(()=>[n(y,{textContent:P(o.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1})]),_:1}))}});export{R as _};
