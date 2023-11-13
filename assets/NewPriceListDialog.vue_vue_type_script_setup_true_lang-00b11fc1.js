import{_ as m}from"./AppCheckbox.vue_vue_type_script_setup_true_lang-fff9dc6e.js";import{V as g,a as i,c as x,b as _}from"./VCard-6c311142.js";import{L as h,A as f,O as V,Z as b,Q as a,H as e,ad as d,ar as D,ah as w,ag as p,ae as t,af as C}from"./index-c6a3952a.js";import{V as y}from"./VDialog-0984fdbd.js";import{V as v}from"./VTextarea-fd9c90c2.js";const F=t("span",{class:"font-13 app-medium-font dark-font"},"Country Code *",-1),N=t("span",{class:"font-14 dark-font app-regular-font"},"Default currency",-1),O=h({__name:"NewCurrencyDialog",props:{dialog:Boolean},setup(c,{emit:u}){const n=c,s=f(!1),r=()=>{u("update:dialog",!1)};return(k,o)=>(V(),b(y,{modelValue:n.dialog,"onUpdate:modelValue":o[1]||(o[1]=l=>n.dialog=l),width:"400",persistent:""},{default:a(()=>[e(_,{class:"rounded-xl",color:"#F2F2F7"},{default:a(()=>[e(g,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:a(()=>[d(" New Currency ")]),_:1}),e(i,{class:"d-flex flex-column mx-3 pb-1"},{default:a(()=>[F,e(D,{"bg-color":"white",placeholder:"Method",variant:"outlined",rounded:"lg","hide-details":"",items:["25%","Method 2"]})]),_:1}),e(i,null,{default:a(()=>[e(m,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value=l),class:"me-3 ms-4"},null,8,["modelValue"]),N]),_:1}),e(w,{class:"mt-8"}),e(x,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:a(()=>[e(p,{color:"#0D0D1E",onClick:r,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:a(()=>[d("Cancel")]),_:1}),e(p,{color:"white",onClick:r,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:a(()=>[d("Save")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),$={style:{width:"336px"}},B=t("span",{class:"font-13 app-medium-font dark-font"},"Number of Days *",-1),E={style:{width:"336px"}},T=t("span",{class:"font-13 app-medium-font dark-font"},"Description",-1),U=t("span",{class:"font-14 dark-font app-regular-font"},"Default terms of payment",-1),Q=h({__name:"NewPaymentTermsDialog",props:{dialog:Boolean},setup(c,{emit:u}){const n=c,s=()=>{u("update:dialog",!1)};f(!1);const r=f(!1);return(k,o)=>(V(),b(y,{modelValue:n.dialog,"onUpdate:modelValue":o[1]||(o[1]=l=>n.dialog=l),width:"400",persistent:""},{default:a(()=>[e(_,{class:"rounded-xl",color:"#F2F2F7"},{default:a(()=>[e(g,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:a(()=>[d(" New Payment Terms ")]),_:1}),e(i,{class:"d-flex flex-row mx-3 pb-1"},{default:a(()=>[t("div",$,[B,e(C,{placeholder:"Enter Header",variant:"outlined",rounded:"lg","hide-details":""})])]),_:1}),e(i,{class:"d-flex flex-row mx-3 pb-1"},{default:a(()=>[t("div",E,[T,e(v,{placeholder:"Enter description...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3","bg-color":"white"})])]),_:1}),e(i,null,{default:a(()=>[e(m,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),class:"me-3 ms-4"},null,8,["modelValue"]),U]),_:1}),e(w,{class:"mt-8"}),e(x,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:a(()=>[e(p,{color:"#0D0D1E",onClick:s,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"5px","padding-bottom":"5px","border-color":"#d1d1e2"},class:"text-none"},{default:a(()=>[d("Cancel")]),_:1}),e(p,{color:"white",onClick:s,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"5px","padding-bottom":"5px"},class:"text-none"},{default:a(()=>[d("Save")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),P=t("span",{class:"font-13 app-medium-font dark-font"},"Code *",-1),L=t("span",{class:"font-13 app-medium-font dark-font"},"Description",-1),S=t("span",{class:"font-14 app-regular-font dark-font"}," Default price list ",-1),Z=h({__name:"NewPriceListDialog",props:{dialog:Boolean},setup(c,{emit:u}){const n=c,s=()=>{u("update:dialog",!1)},r=f(!1);return(k,o)=>(V(),b(y,{modelValue:n.dialog,"onUpdate:modelValue":o[1]||(o[1]=l=>n.dialog=l),width:"400",persistent:""},{default:a(()=>[e(_,{class:"rounded-xl",color:"#F2F2F7"},{default:a(()=>[e(g,{class:"app-semibold-font font-20 dark-font mt-6 mx-3"},{default:a(()=>[d(" New Price List ")]),_:1}),e(i,{class:"d-flex flex-column mx-3 pb-1"},{default:a(()=>[P,e(C,{placeholder:"Enter Header",variant:"outlined",rounded:"lg","hide-details":""})]),_:1}),e(i,{class:"d-flex flex-column mx-3 pb-1"},{default:a(()=>[L,e(v,{"bg-color":"white",placeholder:"Enter description...",variant:"outlined",rounded:"lg","hide-details":"",rows:"3"})]),_:1}),e(i,{class:"d-flex flex-row pb-1"},{default:a(()=>[e(m,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),class:"me-2 ms-3"},null,8,["modelValue"]),S]),_:1}),e(w,{class:"mt-8"}),e(x,{class:"py-7 px-8 d-flex flex-row justify-end bg-gray"},{default:a(()=>[e(p,{color:"#0D0D1E",onClick:s,variant:"outlined",rounded:"lg",style:{"padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px","border-color":"#d1d1e2"},class:"text-none"},{default:a(()=>[d("Cancel")]),_:1}),e(p,{color:"white",onClick:s,"prepend-icon":"mdi-check",rounded:"lg",style:{background:"#20c39d","padding-left":"20px","padding-right":"20px","padding-top":"7px","padding-bottom":"7px"},class:"text-none"},{default:a(()=>[d("Save")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{O as _,Q as a,Z as b};
