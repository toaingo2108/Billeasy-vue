import{_ as S}from"./check-84b3209f.js";import{_ as ee}from"./dot_menu-fd59d6eb.js";import{_ as te}from"./bill-d70d73c5.js";import{p as oe,ax as de,ay as ae,az as se,i as le,x as ne,aA as ie,aB as re,c as ce,G as pe,aC as ue,aD as Q,aE as W,H as e,I as Y,L as M,O as m,Z as q,Q as o,ad as n,ae as t,af as s,ah as H,ag as h,A as $,ai as fe,M as _e,q as me,aq as he,P as w,J as P,U as E,X as xe,S as V,_ as j,ar as p,ac as T,au as ge,as as ve,Y as we,a0 as G,ao as be,ap as ye}from"./index-c6a3952a.js";import{s as ke,a as Ve}from"./subscription_unselected-0742b11e.js";import{T as Ce,n as Te,a as Pe,t as Ee,b as De}from"./TodoCategoryList-46080dc2.js";import{S as J}from"./SearchField-6e0d249e.js";import{A as Ue}from"./AppDataTable-4f1fee40.js";import{A as Se}from"./AppDataTableBottomPagination-e3bd6fa0.js";import{V as L,a as u,c as z,b as v}from"./VCard-6c311142.js";import{V as O}from"./VTextarea-fd9c90c2.js";import{V as Be}from"./VDialog-0984fdbd.js";import{C as Ie}from"./CustomerTodoDetailsMenu-592ba14f.js";import{a as Fe,V as Ae,c as Ne,b as Re}from"./VWindowItem-4cc6a48b.js";import{a as D,V as l}from"./VRow-ed31dde4.js";import{_ as je}from"./_plugin-vue_export-helper-c27b6911.js";import"./profile-aa5b3f1b.js";import"./right-686b2120.js";import"./status_done-f7588bcd.js";import"./AppCheckbox.vue_vue_type_script_setup_true_lang-fff9dc6e.js";const $e=oe({...de(),...ae(se(),["inline"])},"VCheckbox"),Le=le()({name:"VCheckbox",inheritAttrs:!1,props:$e(),emits:{"update:modelValue":r=>!0,"update:focused":r=>!0},setup(r,f){let{attrs:x,slots:b}=f;const g=ne(r,"modelValue"),{isFocused:_,focus:C,blur:B}=ie(r),I=re(),F=ce(()=>r.id||`checkbox-${I}`);return pe(()=>{const[A,U]=ue(x),[N,Z]=Q.filterProps(r),[y,X]=W.filterProps(r);return e(Q,Y({class:["v-checkbox",r.class]},A,N,{modelValue:g.value,"onUpdate:modelValue":c=>g.value=c,id:F.value,focused:_.value,style:r.style}),{...b,default:c=>{let{id:k,messagesId:a,isDisabled:R,isReadonly:i}=c;return e(W,Y(y,{id:k.value,"aria-describedby":a.value,disabled:R.value,readonly:i.value},U,{modelValue:g.value,"onUpdate:modelValue":K=>g.value=K,onFocus:C,onBlur:B}),b)}})}),{}}}),Me={style:{width:"336px"}},qe=t("span",{class:"font-13 app-medium-font dark-font"},"Header *",-1),He={style:{width:"336px"}},ze=t("span",{class:"font-13 app-medium-font dark-font"},"Note *",-1),Oe=M({__name:"SubscriptionAddNoteDialog",props:{dialog:Boolean},setup(r,{emit:f}){const x=r,b=()=>{f("update:dialog",!1)};return(g,_)=>(m(),q(Be,{modelValue:x.dialog,"onUpdate:modelValue":_[0]||(_[0]=C=>x.dialog=C),width:"400",persistent:""},{default:o(()=>[e(v,{class:"rounded-xl",color:"#F2F2F7"},{default:o(()=>[e(L,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:o(()=>[n(" New Subscriptions Note ")]),_:1}),e(u,{class:"d-flex flex-row mx-3 pb-1"},{default:o(()=>[t("div",Me,[qe,e(s,{placeholder:"Enter header",variant:"outlined",rounded:"lg","hide-details":""})])]),_:1}),e(u,{class:"d-flex flex-row mx-3 pb-1"},{default:o(()=>[t("div",He,[ze,e(O,{"bg-color":"white",placeholder:"Enter note...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3"})])]),_:1}),e(H,{class:"mt-8"}),e(z,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:o(()=>[e(h,{color:"#0D0D1E",onClick:b,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:o(()=>[n("Cancel")]),_:1}),e(h,{color:"white",onClick:b,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:o(()=>[n("Save")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Xe={style:{width:"336px"}},Qe=t("span",{class:"font-13 app-medium-font dark-font"},"Header *",-1),We={style:{width:"336px"}},Ye=t("span",{class:"font-13 app-medium-font dark-font"},"Note *",-1),Ge=M({__name:"SubscriptionNoteItemMenu",props:{onRegisterPayment:{type:Function,default:()=>{}},onSendInvoice:{type:Function,default:()=>{}},onCreditInvoice:{type:Function,default:()=>{}},onDuplicate:{type:Function,default:()=>{}},onPreviewPDF:{type:Function,default:()=>{}}},setup(r){const f=$(),x=function(){f.value=!1};return(b,g)=>(m(),q(fe,{activator:"parent","close-on-content-click":!1,modelValue:f.value,"onUpdate:modelValue":g[0]||(g[0]=_=>f.value=_)},{default:o(()=>[e(v,{class:"rounded-xl",color:"#F2F2F7"},{default:o(()=>[e(u,{class:"d-flex flex-row mx-3 pb-1 mt-2"},{default:o(()=>[t("div",Xe,[Qe,e(s,{placeholder:"Enter header",variant:"outlined",rounded:"lg","hide-details":""})])]),_:1}),e(u,{class:"d-flex flex-row mx-3 pb-1"},{default:o(()=>[t("div",We,[Ye,e(O,{"bg-color":"white",placeholder:"Enter note...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3"})])]),_:1}),e(H,{class:"mt-8"}),e(z,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:o(()=>[e(h,{color:"#0D0D1E",onClick:x,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:o(()=>[n("Cancel")]),_:1}),e(h,{color:"white",onClick:x,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:o(()=>[n("Update")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),d=r=>(be("data-v-0525e047"),r=r(),ye(),r),Je={class:"w-100 h-100 pa-8 d-flex flex-column"},Ze={class:"d-flex flex-row mb-5 align-center w-100"},Ke=d(()=>t("div",{class:"app-semibold-font font-20 blue-600"},"Subscriptions",-1)),et={class:"me-2"},tt={key:0},ot={class:"d-flex flex-row flex-wrap w-100"},dt={class:"six-row"},at=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Customer",-1)),st={class:"six-row"},lt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Subscription template",-1)),nt={class:"six-row"},it=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Invoice Template",-1)),rt={class:"six-row"},ct=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Reminder flow",-1)),pt={class:"six-row"},ut=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Sub. Number",-1)),ft={class:"six-row"},_t=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Category",-1)),mt={class:"d-flex flex-row mt-4 flex-wrap"},ht={class:"five-row"},xt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Buyer's Order Number",-1)),gt={class:"five-row"},vt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Reference 1",-1)),wt={class:"five-row"},bt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Reference 2",-1)),yt={class:"five-row"},kt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Your Reference",-1)),Vt={class:"five-row"},Ct=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Our Reference",-1)),Tt={class:"d-flex flex-row mt-4 flex-wrap"},Pt={class:"five-row"},Et=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Extra Field",-1)),Dt={class:"five-row"},Ut=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Extra Field",-1)),St={class:"five-row"},Bt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Extra Field",-1)),It={class:"five-row"},Ft=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Extra Field",-1)),At={class:"five-row"},Nt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Extra Field",-1)),Rt={class:"h-100 pt-4"},jt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Start Date",-1)),$t=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"End Date",-1)),Lt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Billing Cycles",-1)),Mt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Period Interval",-1)),qt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Period Start",-1)),Ht=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Period End",-1)),zt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Payment Terms",-1)),Ot=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Currency",-1)),Xt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Price List",-1)),Qt=d(()=>t("span",{class:"font-14 app-regular-font dark-font"}," Prices Incl. VAT ",-1)),Wt={class:"pt-4"},Yt=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Invoice Text",-1)),Gt={class:"d-flex flex-row"},Jt=d(()=>t("span",{class:"font-14 dark-font app-medium-font ms-2"},"Create invoices",-1)),Zt={class:"d-flex flex-row"},Kt=d(()=>t("span",{class:"font-14 dark-font app-medium-font ms-2"},"Send invoices",-1)),eo={class:"d-flex flex-row"},to=d(()=>t("span",{class:"font-14 dark-font app-medium-font ms-2"},"Update prices",-1)),oo={class:"d-flex flex-row"},ao=d(()=>t("span",{class:"font-14 dark-font app-medium-font ms-2"},"Update according to template",-1)),so={class:"pt-4"},lo=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Payment Methods",-1)),no={class:"pe-0 white-bottom"},io={class:"ps-0 white-bottom"},ro={class:"ps-0 white-bottom"},co={class:"ps-0 white-bottom"},po={class:"ps-0 white-bottom"},uo={class:"ps-0 white-bottom"},fo={class:"ps-0 white-bottom"},_o={class:"ps-0 white-bottom"},mo={class:"ps-0 white-bottom"},ho={class:"ps-0 white-bottom"},xo={class:"px-0 white-bottom"},go={class:"pe-0"},vo={colspan:"10",class:"ps-0"},wo=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Discount type",-1)),bo=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"Discount",-1)),yo=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"PDF template, invoice",-1)),ko=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"PDF-template, reminder",-1)),Vo=d(()=>t("span",{class:"font-13 app-medium-font dark-font"},"PDF-template, inkasso",-1)),Co={class:"me-3"},To=d(()=>t("span",{class:"font-14 dark-font app-medium-font"},"Total fees",-1)),Po=d(()=>t("span",{class:"font-13 shade-font app-regular-font"},"2180,00",-1)),Eo=d(()=>t("span",{class:"font-14 dark-font app-medium-font"},"Total discounts",-1)),Do=d(()=>t("span",{class:"font-13 shade-font app-regular-font"},"2000,00",-1)),Uo=d(()=>t("span",{class:"font-14 dark-font app-medium-font"},"Total VAT",-1)),So=d(()=>t("span",{class:"font-13 shade-font app-regular-font"},"180,00",-1)),Bo=d(()=>t("span",{class:"font-14 dark-font app-medium-font"},"Total incl. VAT",-1)),Io=d(()=>t("span",{class:"font-13 shade-font app-regular-font"},"180,00",-1)),Fo=d(()=>t("span",{class:"font-14 dark-font app-medium-font"},"Total excl. VAT",-1)),Ao=d(()=>t("span",{class:"font-13 shade-font app-regular-font"},"180,00",-1)),No={class:"d-flex flex-row mt-5 justify-end"},Ro={key:1},jo={class:"d-flex justify-between"},$o={class:"d-flex mt-6"},Lo={style:{width:"288px"}},Mo={class:"d-flex align-center"},qo={class:"mt-10"},Ho={style:{height:"96px",bottom:"0",width:"calc(100% - 300px)"},class:"bg-gray position-fixed d-flex flex-row align-center justify-end"},zo={key:2},Oo={class:"d-flex justify-between"},Xo={class:"d-flex mt-6"},Qo={style:{width:"288px"}},Wo={class:"d-flex align-center"},Yo={class:"mt-10"},Go=M({__name:"SubscriptionDetails",setup(r){const f=$(0),x=$(!1),b=_e(),{mdAndUp:g}=me(),_=function(){b.push({name:"subscriptions"})},C=[{title:"Subscription",selected_icon:ke,unselected_icon:Ve},{title:"Notes",selected_icon:Te,unselected_icon:Pe},{title:"To-do's",selected_icon:Ee,unselected_icon:De}],B=[{title:"Header",key:"header",style:"bold"},{title:"Updated At",key:"updated_at",style:"bold"},{title:"Created At",key:"created_at"},{title:"Created By",key:"created_by"},{title:"Updated By",key:"updated_by"},{title:"",key:"action"}],I=[{header:1001,update_at:"Blue t-shirt, XS",created_at:"1231231234",updated_at:"2023-08-01, 12:32",created_by:"Stockholm",updated_by:"2023-07-01"},{header:1001,update_at:"Blue t-shirt, XS",created_at:"1231231234",updated_at:"2023-08-01, 12:32",created_by:"Stockholm",updated_by:"2023-07-01"},{header:1001,update_at:"Blue t-shirt, XS",created_at:"1231231234",updated_at:"2023-08-01, 12:32",created_by:"Stockholm",updated_by:"2023-07-01"}],F=["","Product","Description","Qt.","Unit","Price","VAT Rate","Disc.","Disc. Type","Total",""],A=[{product:"Enter Text",description:"New Customers",quantity:2,unit:"Pcs",price:2,rate:"25%",disc:2,disc_type:"%",total:2},{product:"Enter Text",description:"New Customers",quantity:2,unit:"Pcs",price:2,rate:"25%",disc:2,disc_type:"%",total:2}],U=function(){x.value=!0},N=["Swish","Other method"];return(Z,y)=>{const X=he("subscription-products-row-menu");return m(),w("div",Je,[t("div",Ze,[t("div",null,[e(h,{variant:"outlined","prepend-icon":"mdi-chevron-left",onClick:_,rounded:"lg",color:"#0D0D1E",style:{"border-color":"#d1d1e2","text-decoration":"none","margin-right":"24px"}},{default:o(()=>[n("Back")]),_:1})]),Ke]),t("div",null,[e(Ae,{modelValue:f.value,"onUpdate:modelValue":y[0]||(y[0]=c=>f.value=c),color:"#20C39D"},{default:o(()=>[(m(),w(P,null,E(C,(c,k)=>e(Fe,{value:k,class:xe(["text-none font-14 app-medium-font",f.value==k?"teal-font":"blue-600"])},{default:o(()=>[t("div",et,[e(V,{width:"18",height:"18",src:k==f.value?c.selected_icon:c.unselected_icon},null,8,["src"])]),n(" "+j(c.title),1)]),_:2},1032,["value","class"])),64))]),_:1},8,["modelValue"]),e(Re,{modelValue:f.value,"onUpdate:modelValue":y[1]||(y[1]=c=>f.value=c)},{default:o(()=>[(m(),w(P,null,E(C,(c,k)=>e(Ne,{key:k,value:k},{default:o(()=>[c.title=="Subscription"?(m(),w("div",tt,[e(v,{color:"white",class:"px-8 pt-4 pb-8 rounded-xl mt-6"},{default:o(()=>[t("div",ot,[t("div",dt,[at,e(p,{placeholder:"Customer",variant:"outlined",rounded:"lg","hide-details":"",items:["Customer","Customer 2"]})]),t("div",st,[lt,e(p,{placeholder:"Subscription template",variant:"outlined",rounded:"lg","hide-details":"",items:["Standard","Template 2"]})]),t("div",nt,[it,e(p,{placeholder:"Invoice Template",variant:"outlined",rounded:"lg","hide-details":"",items:["Standard","Invoice Template 2"]})]),t("div",rt,[ct,e(p,{placeholder:"Remind",variant:"outlined",rounded:"lg","hide-details":"",items:["Remind","Remind 2"]})]),t("div",pt,[ut,e(s,{placeholder:"Enter text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",ft,[_t,e(p,{placeholder:"Category",variant:"outlined",rounded:"lg","hide-details":"",items:["Category","Category 2"]})])]),t("div",mt,[t("div",ht,[xt,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",gt,[vt,e(s,{placeholder:"Enter text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",wt,[bt,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",yt,[kt,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",Vt,[Ct,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})])]),t("div",Tt,[t("div",Pt,[Et,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",Dt,[Ut,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",St,[Bt,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",It,[Ft,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})]),t("div",At,[Nt,e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":""})])])]),_:1}),e(D,null,{default:o(()=>[e(l,{cols:"12",md:"6",class:"h-100"},{default:o(()=>[t("div",Rt,[e(v,{class:"rounded-xl pa-6",height:"100%"},{default:o(()=>[e(D,null,{default:o(()=>[e(l,{cols:"12",md:"6"},{default:o(()=>[jt,e(s,{placeholder:"Start Date",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"6",style:{opacity:"50%"}},{default:o(()=>[$t,e(s,{placeholder:"End Date",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[Lt,e(s,{placeholder:"Billing Cycles",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[Mt,e(s,{placeholder:"Period Interval",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[qt,e(s,{placeholder:"Period Start",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"4",style:{opacity:"50%"}},{default:o(()=>[Ht,e(s,{placeholder:"Period End",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[zt,e(p,{placeholder:"Payment Terms",variant:"outlined",rounded:"lg","hide-details":"",items:["30","40","50"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[Ot,e(p,{placeholder:"Currency",variant:"outlined",rounded:"lg","hide-details":"",items:["EUR","USD"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[Xt,e(p,{placeholder:"Price List",variant:"outlined",rounded:"lg","hide-details":"",items:["A","B","C"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[e(Le,{color:"#20c39d",value:"#20c39d","hide-details":"",class:"mt-4"},{label:o(()=>[Qt]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(l,{cols:"12",md:"6",class:"h-100"},{default:o(()=>[t("div",Wt,[e(D,null,{default:o(()=>[e(l,{cols:"12",md:"6"},{default:o(()=>[e(v,{class:"rounded-xl pa-2",height:"100%"},{default:o(()=>[e(u,{class:"d-flex flex-column"},{default:o(()=>[Yt,e(O,{"bg-color":"white",placeholder:"Enter text...",variant:"outlined",rounded:"lg","hide-details":"",rows:"6",class:"flex-grow mt-2"})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(v,{class:"rounded-xl pa-6",height:"100%"},{default:o(()=>[e(L,{class:"font-20 app-semibold-font dark-font"},{default:o(()=>[n(" Auto-tasks ")]),_:1}),e(u,{class:"mt-2 d-flex flex-row justify-between"},{default:o(()=>[t("div",Gt,[e(V,{width:"18",height:"18",src:S}),Jt]),e(T,{color:"#8B8BA9"},{default:o(()=>[n("mdi-help-circle-outline")]),_:1})]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[t("div",Zt,[e(V,{width:"18",height:"18",src:S}),Kt]),e(T,{color:"#8B8BA9"},{default:o(()=>[n("mdi-help-circle-outline")]),_:1})]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[t("div",eo,[e(V,{width:"18",height:"18",src:S}),to]),e(T,{color:"#8B8BA9"},{default:o(()=>[n("mdi-help-circle-outline")]),_:1})]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between pb-0"},{default:o(()=>[t("div",oo,[e(V,{width:"18",height:"18",src:S}),ao]),e(T,{color:"#8B8BA9"},{default:o(()=>[n("mdi-help-circle-outline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t("div",so,[e(v,{class:"rounded-xl pa-2 mt-0",height:"100%"},{default:o(()=>[e(u,null,{default:o(()=>[lo,e(p,{placeholder:"Enter method...",variant:"outlined",rounded:"lg","hide-details":"",items:["Swish","Bankgiro"]}),t("div",null,[(m(),w(P,null,E(N,a=>e(ge,{key:a,closable:"",class:"mt-2 me-2"},{default:o(()=>[n(j(a),1)]),_:2},1024)),64))])]),_:1})]),_:1})])]),_:1})]),_:1}),e(v,{rounded:"xl",class:"mt-4"},{default:o(()=>[e(u,{class:"mt-5 d-flex flex-row justify-between"},{default:o(()=>[e(ve,{style:{width:"100%"}},{default:o(()=>[t("thead",null,[t("tr",null,[(m(),w(P,null,E(F,a=>t("th",{class:"text-left font-14 app-semibold-font dark-font",key:a},j(a),1)),64))])]),t("tbody",null,[(m(),w(P,null,E(A,(a,R)=>t("tr",{key:R,style:{height:"36px"}},[t("td",no,[e(T,null,{default:o(()=>[n("mdi-unfold-more-horizontal")]),_:1})]),t("td",io,[e(p,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.product,"onUpdate:modelValue":i=>a.product=i,items:["Enter Text","Enter Text 2"]},null,8,["modelValue","onUpdate:modelValue"])]),t("td",ro,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.description,"onUpdate:modelValue":i=>a.description=i},null,8,["modelValue","onUpdate:modelValue"])]),t("td",co,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.quantity,"onUpdate:modelValue":i=>a.quantity=i},null,8,["modelValue","onUpdate:modelValue"])]),t("td",po,[e(p,{placeholder:"Unit",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.unit,"onUpdate:modelValue":i=>a.unit=i,items:["Pcs","Pcs2"]},null,8,["modelValue","onUpdate:modelValue"])]),t("td",uo,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.price,"onUpdate:modelValue":i=>a.price=i},null,8,["modelValue","onUpdate:modelValue"])]),t("td",fo,[e(p,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.rate,"onUpdate:modelValue":i=>a.rate=i,items:["25%","50%","100%"]},null,8,["modelValue","onUpdate:modelValue"])]),t("td",_o,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.disc,"onUpdate:modelValue":i=>a.disc=i},null,8,["modelValue","onUpdate:modelValue"])]),t("td",mo,[e(p,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.disc_type,"onUpdate:modelValue":i=>a.disc_type=i,items:["%","%%"]},null,8,["modelValue","onUpdate:modelValue"])]),t("td",ho,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",modelValue:a.total,"onUpdate:modelValue":i=>a.total=i},null,8,["modelValue","onUpdate:modelValue"])]),t("td",xo,[e(h,{size:"x-small",flat:"",class:"me-5",style:{width:"24px",height:"24px","min-height":"24px","min-width":"24px","max-height":"24px",padding:"0"}},{default:o(()=>[e(V,{src:ee,width:"24",height:"24"}),e(X)]),_:1})])])),64)),t("tr",null,[t("td",go,[e(T,null,{default:o(()=>[n("mdi-unfold-more-horizontal")]),_:1})]),t("td",vo,[e(s,{placeholder:"Enter Text",variant:"outlined",rounded:"lg","hide-details":"",value:"New Customers"})])])])]),_:2},1024)]),_:2},1024),e(u,null,{default:o(()=>[e(H)]),_:1}),e(z,{class:"mx-4 mb-4"},{default:o(()=>[e(h,{color:"white",onClick:_,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d !important",color:"white !important","padding-left":"20px","padding-right":"20px","padding-top":"5px","padding-bottom":"5px"},class:"text-none"},{default:o(()=>[n("New Invoice Row")]),_:1}),e(h,{onClick:_,"prepend-icon":"mdi-check",rounded:"lg",style:{color:"#0d0d1e !important","padding-left":"20px","padding-right":"20px","padding-top":"5px","padding-bottom":"5px","border-color":"#20c39d"},class:"text-none ms-2",variant:"outlined"},{default:o(()=>[n("New Text Row")]),_:1})]),_:1})]),_:2},1024),e(D,{class:"mt-2"},{default:o(()=>[e(l,{cols:"12",md:"7"},{default:o(()=>[e(v,{class:"rounded-xl pa-6",height:"100%"},{default:o(()=>[e(D,null,{default:o(()=>[e(l,{cols:"12",md:"4"},{default:o(()=>[wo,e(p,{placeholder:"Percent",variant:"outlined",rounded:"lg","hide-details":"",items:["Percent","Percent 2"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[bo,e(s,{placeholder:"Discount",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),we(g)?(m(),q(l,{key:0,cols:"12",md:"4"})):G("",!0),e(l,{cols:"12",md:"4"},{default:o(()=>[yo,e(p,{placeholder:"PDF-template, invoice",variant:"outlined",rounded:"lg","hide-details":"",items:["Percent","Percent 2"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[ko,e(p,{placeholder:"Percent",variant:"outlined",rounded:"lg","hide-details":"",items:["Percent","Percent 2"]})]),_:1}),e(l,{cols:"12",md:"4"},{default:o(()=>[Vo,e(p,{placeholder:"Percent",variant:"outlined",rounded:"lg","hide-details":"",items:["Percent","Percent 2"]})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12",md:"5"},{default:o(()=>[e(v,{class:"rounded-xl pa-6",height:"100%"},{default:o(()=>[e(L,{class:"d-flex flex-row align-center font-20 app-semibold-font dark-font"},{default:o(()=>[t("div",Co,[e(V,{width:"28",height:"28",src:te})]),n(" Total ")]),_:1}),e(u,{class:"mt-2 d-flex flex-row justify-between"},{default:o(()=>[To,Po]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[Eo,Do]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[Uo,So]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[Bo,Io]),_:1}),e(u,{class:"pt-0 d-flex flex-row justify-between"},{default:o(()=>[Fo,Ao]),_:1})]),_:1})]),_:1})]),_:1}),t("div",No,[e(h,{color:"#20c39d",onClick:_,rounded:"lg",style:{"border-color":"#20c39d !important","padding-left":"20px","padding-right":"20px","padding-top":"10px","padding-bottom":"10px",color:"#0d0d1e"},class:"text-none",flat:"",variant:"outlined"},{default:o(()=>[n("Cancel")]),_:1}),e(h,{color:"white",onClick:_,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d !important",color:"white !important","padding-left":"20px","padding-right":"20px","padding-top":"5px","padding-bottom":"5px"},class:"text-none ms-2 font-14 app-medium-font",flat:""},{default:o(()=>[n("Update")]),_:1})])])):c.title=="Notes"?(m(),w("div",Ro,[t("div",jo,[t("div",$o,[t("div",Lo,[e(J)])]),t("div",Mo,[e(h,{color:"#20C39D","prepend-icon":"mdi-plus",rounded:"lg",elevation:"4",class:"text-none white-font app-medium-font font-14",onClick:U},{default:o(()=>[n(" New Note ")]),_:1})])]),t("div",qo,[e(Ue,{headers:B,items:I,"items-per-page":"15",style:{"margin-bottom":"80px"},checkable:!1},{action:o(()=>[e(Ge)]),_:1}),t("div",Ho,[e(Se,{length:15,class:"me-10"})])])])):c.title=="To-do's"?(m(),w("div",zo,[t("div",Oo,[t("div",Xo,[t("div",Qo,[e(J)])]),t("div",Wo,[e(h,{color:"#20C39D","prepend-icon":"mdi-plus",rounded:"lg",elevation:"4",class:"text-none white-font app-medium-font font-14",onClick:U},{default:o(()=>[n(" New To-do ")]),_:1})])]),t("div",Yo,[e(Ce,null,{action:o(()=>[e(Ie)]),_:1})])])):G("",!0)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),e(Oe,{dialog:x.value,"onUpdate:dialog":y[2]||(y[2]=c=>x.value=c)},null,8,["dialog"])])}}});const xd=je(Go,[["__scopeId","data-v-0525e047"]]);export{xd as default};
