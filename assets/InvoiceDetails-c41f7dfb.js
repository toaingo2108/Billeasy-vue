import{L as V,O as c,Z as S,Q as t,H as e,ad as a,ae as o,af as $,ah as B,ag as r,A as x,ai as G,M as K,P as v,J as I,U as C,X as Y,S as y,_ as U,V as ee,W as te,$ as oe,a0 as ne,ao as ae,ap as se}from"./index-c6a3952a.js";import{i as le,a as F}from"./invoice_unselected-9e7ef1cc.js";import{T as de,_ as ie,n as ce,a as re,t as pe,b as ue}from"./TodoCategoryList-46080dc2.js";import{_ as fe,r as _e,c as me,p as ve}from"./ScheduleSendOutDialog.vue_vue_type_script_setup_true_lang-263053f1.js";import{d as ge}from"./duplicate-be8438bb.js";import{S as T}from"./SearchField-6e0d249e.js";import{A as xe}from"./AppDataTable-4f1fee40.js";import{V as D,a as p,c as j,b}from"./VCard-6c311142.js";import{V as A}from"./VTextarea-fd9c90c2.js";import{V as he}from"./VDialog-0984fdbd.js";import{A as ye}from"./AppDataTableBottomPagination-e3bd6fa0.js";import{C as be}from"./CustomerTodoDetailsMenu-592ba14f.js";import{_ as we}from"./InvoiceInformationDialog.vue_vue_type_script_setup_true_lang-79bf26a4.js";import{a as ke,V as Ie,c as Ce,b as Ve}from"./VWindowItem-4cc6a48b.js";import{a as De,V as P}from"./VRow-ed31dde4.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";import"./dot_menu-fd59d6eb.js";import"./profile-aa5b3f1b.js";import"./right-686b2120.js";import"./AppCheckbox.vue_vue_type_script_setup_true_lang-fff9dc6e.js";import"./status_done-f7588bcd.js";import"./upload_done-d5d1ec19.js";import"./VTimelineItem-50b45807.js";const Ue="/assets/image-invoice-064bda27.png",Fe="/assets/history-932e9d6f.svg",Te="/assets/preview_pdf-774014b6.svg",Pe={style:{width:"336px"}},Se=o("span",{class:"font-13 app-medium-font dark-font"},"Header *",-1),$e={style:{width:"336px"}},Be=o("span",{class:"font-13 app-medium-font dark-font"},"Note *",-1),je=V({__name:"InvoiceAddNoteDialog",props:{dialog:Boolean},setup(u,{emit:s}){const i=u,f=()=>{s("update:dialog",!1)};return(_,m)=>(c(),S(he,{modelValue:i.dialog,"onUpdate:modelValue":m[0]||(m[0]=w=>i.dialog=w),width:"400",persistent:""},{default:t(()=>[e(b,{class:"rounded-xl",color:"#F2F2F7"},{default:t(()=>[e(D,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:t(()=>[a(" New Invoice Note ")]),_:1}),e(p,{class:"d-flex flex-row mx-3 pb-1"},{default:t(()=>[o("div",Pe,[Se,e($,{placeholder:"Enter header",variant:"outlined",rounded:"lg","hide-details":""})])]),_:1}),e(p,{class:"d-flex flex-row mx-3 pb-1"},{default:t(()=>[o("div",$e,[Be,e(A,{"bg-color":"white",placeholder:"Enter note...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3"})])]),_:1}),e(B,{class:"mt-8"}),e(j,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:t(()=>[e(r,{color:"#0D0D1E",onClick:f,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:t(()=>[a("Cancel")]),_:1}),e(r,{color:"white",onClick:f,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:t(()=>[a("Update")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Ae={style:{width:"336px"}},Ee=o("span",{class:"font-13 app-medium-font dark-font"},"Header *",-1),Je={style:{width:"336px"}},Me=o("span",{class:"font-13 app-medium-font dark-font"},"Note *",-1),He=V({__name:"InvoiceNoteItemMenu",props:{onRegisterPayment:{type:Function,default:()=>{}},onSendInvoice:{type:Function,default:()=>{}},onCreditInvoice:{type:Function,default:()=>{}},onDuplicate:{type:Function,default:()=>{}},onPreviewPDF:{type:Function,default:()=>{}}},setup(u){const s=x(),i=function(){s.value=!1};return(f,_)=>(c(),S(G,{activator:"parent","close-on-content-click":!1,modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=m=>s.value=m)},{default:t(()=>[e(b,{class:"rounded-xl",color:"#F2F2F7"},{default:t(()=>[e(D,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:t(()=>[a(" New Invoice Note ")]),_:1}),e(p,{class:"d-flex flex-row mx-3 pb-1"},{default:t(()=>[o("div",Ae,[Ee,e($,{placeholder:"Enter header",variant:"outlined",rounded:"lg","hide-details":""})])]),_:1}),e(p,{class:"d-flex flex-row mx-3 pb-1"},{default:t(()=>[o("div",Je,[Me,e(A,{"bg-color":"white",placeholder:"Enter note...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3"})])]),_:1}),e(B,{class:"mt-8"}),e(j,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:t(()=>[e(r,{color:"#0D0D1E",onClick:i,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:t(()=>[a("Cancel")]),_:1}),e(r,{color:"white",onClick:i,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:t(()=>[a("Update")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),d=u=>(ae("data-v-271afbf5"),u=u(),se(),u),Le={class:"w-100 h-100 pa-8 d-flex flex-column"},Re={class:"d-flex flex-row mb-5 align-center w-100"},We=d(()=>o("div",{class:"app-semibold-font font-20 blue-600"},"Invoice",-1)),ze=d(()=>o("div",{class:"app-semibold-font font-20 dark-font"},"#12312352",-1)),Oe={class:"me-2"},Qe={key:0},Xe={class:"d-flex flex-row align-center font-20 app-semibold-font dark-font"},Ze={class:"me-2"},qe=d(()=>o("span",{class:"font-14 dark-font app-medium-font"},"Payment",-1)),Ge=d(()=>o("span",{class:"font-13 shade-font app-regular-font"},"2023-06-01, 12.30",-1)),Ke=d(()=>o("span",{class:"font-14 dark-font app-medium-font"},"Sent",-1)),Ye=d(()=>o("span",{class:"font-13 shade-font app-regular-font"},"2023-06-01, 12.30",-1)),et=d(()=>o("span",{class:"font-14 dark-font app-medium-font"},"Updated",-1)),tt=d(()=>o("span",{class:"font-13 shade-font app-regular-font"}," 2023-06-01, 12.30 ",-1)),ot=d(()=>o("span",{class:"font-14 dark-font app-medium-font"},"Created",-1)),nt=d(()=>o("span",{class:"font-13 shade-font app-regular-font"}," 2023-06-01, 12.30 ",-1)),at={key:1},st={class:"d-flex justify-between"},lt={class:"d-flex mt-6"},dt={style:{width:"288px"}},it={class:"d-flex align-center"},ct={class:"mt-10"},rt={style:{height:"96px",bottom:"0",width:"calc(100% - 300px)"},class:"bg-gray position-fixed d-flex flex-row align-center justify-end"},pt={key:2},ut={class:"d-flex justify-between"},ft={class:"d-flex mt-6"},_t={style:{width:"288px"}},mt={class:"d-flex align-center"},vt={class:"mt-10"},gt=V({__name:"InvoiceDetails",setup(u){const s=x(0),i=x(!1),f=x(!1),_=x(!1),m=K(),w=function(){m.back()},N=[{title:"Invoices",selected_icon:le,unselected_icon:F},{title:"Notes",selected_icon:ce,unselected_icon:re},{title:"To-do's",selected_icon:pe,unselected_icon:ue}],E=function(){console.log("register payment")},J=function(){},M=function(){},H=function(){},L=function(){},k=x(!1),R=[{text:"Register Payment",icon:_e,onClick:E},{text:"Send Invoice",icon:F,onClick:function(){k.value=!0}},{text:"Credit Invoice",icon:me,onClick:J},{text:"Duplicate",icon:ge,onClick:M},{text:"Preview PDF",icon:ve,onClick:H},{text:"Cancel invoice",icon:Te,onClick:L}],W=[{title:"Header",key:"header",style:"bold"},{title:"Updated At",key:"updated_at",style:"bold"},{title:"Created At",key:"created_at"},{title:"Created By",key:"created_by"},{title:"Updated By",key:"updated_by"},{title:"",key:"action"}],z=[{header:"Invoice note",update:"2023-08-01, 17:11",created_at:"2023-08-01, 12:32",updated_at:"2023-08-01, 12:32",created_by:"John Doe",updated_by:"John Doe"},{header:"Invoice note",update:"2023-08-01, 17:11",created_at:"2023-08-01, 12:32",updated_at:"2023-08-01, 12:32",created_by:"John Doe",updated_by:"John Doe"},{header:"Invoice note",update:"2023-08-01, 17:11",created_at:"2023-08-01, 12:32",updated_at:"2023-08-01, 12:32",created_by:"John Doe",updated_by:"John Doe"}],O=function(){i.value=!0},Q=function(){f.value=!0},X=()=>{m.push({name:"edit-invoice"})},Z=()=>{_.value=!0};return(ht,l)=>(c(),v("div",Le,[o("div",Re,[o("div",null,[e(r,{variant:"outlined","prepend-icon":"mdi-chevron-left",onClick:w,rounded:"lg",color:"#0D0D1E",style:{"border-color":"#d1d1e2","text-decoration":"none","margin-right":"24px"}},{default:t(()=>[a("Back")]),_:1})]),We,ze]),o("div",null,[e(Ie,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n),color:"#20C39D"},{default:t(()=>[(c(),v(I,null,C(N,(n,g)=>e(ke,{value:g,class:Y(["text-none font-14 app-medium-font",s.value==g?"teal-font":"blue-600"])},{default:t(()=>[o("div",Oe,[e(y,{width:"18",height:"18",src:s.value==g?n.selected_icon:n.unselected_icon},null,8,["src"])]),a(" "+U(n.title),1)]),_:2},1032,["value","class"])),64))]),_:1},8,["modelValue"]),e(Ve,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value=n)},{default:t(()=>[(c(),v(I,null,C(N,(n,g)=>e(Ce,{key:g,value:g},{default:t(()=>[n.title=="Invoices"?(c(),v("div",Qe,[e(De,{class:"mt-3"},{default:t(()=>[e(P,{cols:"12",md:"7"},{default:t(()=>[e(y,{src:Ue})]),_:1}),e(P,{cols:"12",md:"5"},{default:t(()=>[e(r,{"prepend-icon":"mdi-sync",color:"white",style:{"background-color":"#20c39d !important",color:"white !important",height:"40px","max-height":"40px","font-family":"'Poppins-Medium' !important"},class:"text-none",rounded:"lg",block:"",onClick:X},{default:t(()=>[a("Update Invoice ")]),_:1}),e(b,{class:"rounded-xl pa-3 mt-6",elevation:"0"},{default:t(()=>[e(ee,null,{default:t(()=>[(c(),v(I,null,C(R,(h,q)=>e(te,{key:q,value:h,color:"primary",rounded:"lg",onClick:h.onClick},{prepend:t(()=>[e(y,{src:h.icon,width:"20",height:"20",class:"me-3"},null,8,["src"])]),default:t(()=>[e(oe,{textContent:U(h.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1}),e(b,{class:"rounded-xl pa-3 mt-3",elevation:"0"},{default:t(()=>[e(D,{class:"d-flex flex-row justify-between"},{default:t(()=>[o("div",Xe,[o("div",Ze,[e(y,{width:"28",height:"28",src:Fe})]),a(" History ")]),e(r,{variant:"text",style:{"font-size":"14px","font-family":"'Poppins-Medium' !important"},color:"#20C39D",class:"text-none",onClick:Z},{default:t(()=>[a("See all")]),_:1})]),_:1}),e(p,{class:"mt-5 d-flex flex-row justify-between"},{default:t(()=>[qe,Ge]),_:1}),e(p,{class:"pt-1 d-flex flex-row justify-between"},{default:t(()=>[Ke,Ye]),_:1}),e(p,{class:"pt-1 d-flex flex-row justify-between"},{default:t(()=>[et,tt]),_:1}),e(p,{class:"pt-1 d-flex flex-row justify-between"},{default:t(()=>[ot,nt]),_:1})]),_:1})]),_:1})]),_:1})])):n.title=="Notes"?(c(),v("div",at,[o("div",st,[o("div",lt,[o("div",dt,[e(T)])]),o("div",it,[e(r,{color:"#20C39D","prepend-icon":"mdi-plus",rounded:"lg",elevation:"4",class:"text-none white-font app-medium-font font-14",onClick:O},{default:t(()=>[a(" New Note ")]),_:1})])]),o("div",ct,[e(xe,{headers:W,items:z,"items-per-page":"15",style:{"margin-bottom":"80px"},checkable:!1},{action:t(()=>[e(He)]),_:1}),o("div",rt,[e(ye,{length:15,class:"me-10"})])])])):n.title=="To-do's"?(c(),v("div",pt,[o("div",ut,[o("div",ft,[o("div",_t,[e(T)])]),o("div",mt,[e(r,{color:"#20C39D","prepend-icon":"mdi-plus",rounded:"lg",elevation:"4",class:"text-none white-font app-medium-font font-14",onClick:Q},{default:t(()=>[a(" New To-do ")]),_:1})])]),o("div",vt,[e(de,null,{action:t(()=>[e(be)]),_:1})])])):ne("",!0)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),e(je,{dialog:i.value,"onUpdate:dialog":l[2]||(l[2]=n=>i.value=n)},null,8,["dialog"]),e(ie,{dialog:f.value,"onUpdate:dialog":l[3]||(l[3]=n=>f.value=n)},null,8,["dialog"]),e(we,{dialog:_.value,"onUpdate:dialog":l[4]||(l[4]=n=>_.value=n)},null,8,["dialog"]),e(fe,{dialog:k.value,"onUpdate:dialog":l[5]||(l[5]=n=>k.value=n)},null,8,["dialog"])]))}});const Rt=Ne(gt,[["__scopeId","data-v-271afbf5"]]);export{Rt as default};
