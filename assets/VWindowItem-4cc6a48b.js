import{p as O,ay as Se,be as xe,i as A,a5 as Te,c as y,s as I,A as W,G as X,ag as F,H as m,I as q,bf as Ce,bg as ke,a1 as ee,d as K,g as N,aF as we,u as ie,q as Ve,aG as ue,ba as te,bh as ze,w as ce,bi as ne,ac as oe,bj as Ie,al as Be,aS as Pe,x as Ee,aX as Re,l as _e,t as _,F as $e,bk as He,a as U,bl as re,h as Me,j as Oe,a4 as Ae,aO as Xe,aa as ve,aL as Ye,aM as We,aH as Fe,aI as Ge,aN as Le,y as je,aJ as De,K as qe,ab as Ue,a9 as Ke}from"./index-c6a3952a.js";const de=Symbol.for("vuetify:v-tabs"),Ne=O({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Se(xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Je=A()({name:"VTab",props:Ne(),setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:r,textColorStyles:s}=Te(e,"sliderColor"),a=y(()=>e.direction==="horizontal"),l=I(!1),u=W(),c=W();function d(x){var h,g;let{value:S}=x;if(l.value=S,S){const B=(g=(h=u.value)==null?void 0:h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),E=c.value;if(!B||!E)return;const P=getComputedStyle(B).color,k=B.getBoundingClientRect(),w=E.getBoundingClientRect(),f=a.value?"x":"y",b=a.value?"X":"Y",T=a.value?"right":"bottom",V=a.value?"width":"height",$=k[f],G=w[f],R=$>G?k[T]-w[T]:k[f]-w[f],L=Math.sign(R)>0?a.value?"right":"bottom":Math.sign(R)<0?a.value?"left":"top":"center",C=(Math.abs(R)+(Math.sign(R)<0?k[V]:w[V]))/Math.max(k[V],w[V])||0,M=k[V]/w[V]||0,Y=1.5;Ce(E,{backgroundColor:[P,"currentcolor"],transform:[`translate${b}(${R}px) scale${b}(${M})`,`translate${b}(${R/Y}px) scale${b}(${(C-1)/Y+1})`,"none"],transformOrigin:Array(3).fill(L)},{duration:225,easing:ke})}}return X(()=>{const[x]=F.filterProps(e);return m(F,q({symbol:de,ref:u,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1},x,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{default:()=>{var S;return[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]}})}),{}}});function ae(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function le(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,currentScrollOffset:s,isHorizontal:a}=e;const l=a?o.clientWidth:o.clientHeight,u=a?o.offsetLeft:o.offsetTop,c=r&&a?n-u-l:u,d=t+s,x=l+c,S=l*.4;return c<=s?s=Math.max(c-S,0):d<=x&&(s=Math.min(s-(d-x-S),n-t)),s}function Qe(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:r,isHorizontal:s}=e;const a=s?o.clientWidth:o.clientHeight,l=s?o.offsetLeft:o.offsetTop,u=r&&s?n-l-a/2-t/2:l+a/2-t/2;return Math.min(n-t,Math.max(0,u))}const Ze=Symbol.for("vuetify:v-slide-group"),fe=O({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:ee,default:"$next"},prevIcon:{type:ee,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...K(),...N(),...we({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),se=A()({name:"VSlideGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=ie(),{mobile:r}=Ve(),s=ue(e,e.symbol),a=I(!1),l=I(0),u=I(0),c=I(0),d=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:S}=te(),{resizeRef:h,contentRect:g}=te(),B=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[0]):-1),E=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[s.selected.value.length-1]):-1);if(ze){let i=-1;ce(()=>[s.selected.value,S.value,g.value,d.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const v=d.value?"width":"height";u.value=S.value[v],c.value=g.value[v],a.value=u.value+1<c.value}if(B.value>=0&&h.value){const v=h.value.children[E.value];B.value===0||!a.value?l.value=0:e.centerActive?l.value=Qe({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,isHorizontal:d.value}):a.value&&(l.value=le({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value}))}})})}const P=I(!1);let k=0,w=0;function f(i){const v=d.value?"clientX":"clientY";w=(n.value&&d.value?-1:1)*l.value,k=i.touches[0][v],P.value=!0}function b(i){if(!a.value)return;const v=d.value?"clientX":"clientY",z=n.value&&d.value?-1:1;l.value=z*(w+k-i.touches[0][v])}function T(i){const v=c.value-u.value;l.value<0||!a.value?l.value=0:l.value>=v&&(l.value=v),P.value=!1}function V(){x.value&&(x.value[d.value?"scrollLeft":"scrollTop"]=0)}const $=I(!1);function G(i){if($.value=!0,!(!a.value||!h.value)){for(const v of i.composedPath())for(const z of h.value.children)if(z===v){l.value=le({selectedElement:z,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value});return}}}function R(i){$.value=!1}function L(i){var v;!$.value&&!(i.relatedTarget&&((v=h.value)!=null&&v.contains(i.relatedTarget)))&&C()}function J(i){h.value&&(d.value?i.key==="ArrowRight"?C(n.value?"prev":"next"):i.key==="ArrowLeft"&&C(n.value?"next":"prev"):i.key==="ArrowDown"?C("next"):i.key==="ArrowUp"&&C("prev"),i.key==="Home"?C("first"):i.key==="End"&&C("last"))}function C(i){var v,z,Q,Z,p;if(h.value)if(!i)(v=Ie(h.value)[0])==null||v.focus();else if(i==="next"){const H=(z=h.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;H?H.focus():C("first")}else if(i==="prev"){const H=(Q=h.value.querySelector(":focus"))==null?void 0:Q.previousElementSibling;H?H.focus():C("last")}else i==="first"?(Z=h.value.firstElementChild)==null||Z.focus():i==="last"&&((p=h.value.lastElementChild)==null||p.focus())}function M(i){const v=l.value+(i==="prev"?-1:1)*u.value;l.value=Be(v,0,c.value-u.value)}const Y=y(()=>{let i=l.value>c.value-u.value?-(c.value-u.value)+ae(c.value-u.value-l.value):-l.value;l.value<=0&&(i=ae(-l.value));const v=n.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${v*i}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),j=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),D=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return r.value||a.value||Math.abs(l.value)>0;default:return!r.value&&(a.value||Math.abs(l.value)>0)}}),be=y(()=>Math.abs(l.value)>0),ye=y(()=>c.value>Math.abs(l.value)+u.value);return X(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":D.value,"v-slide-group--is-overflowing":a.value},e.class],style:e.style,tabindex:$.value||s.selected.value.length?-1:0,onFocus:L},{default:()=>{var i,v,z;return[D.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!be.value}],onClick:()=>M("prev")},[((i=t.prev)==null?void 0:i.call(t,j.value))??m(ne,null,{default:()=>[m(oe,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:V},[m("div",{ref:h,class:"v-slide-group__content",style:Y.value,onTouchstartPassive:f,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:G,onFocusout:R,onKeydown:J},[(v=t.default)==null?void 0:v.call(t,j.value)])]),D.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ye.value}],onClick:()=>M("next")},[((z=t.next)==null?void 0:z.call(t,j.value))??m(ne,null,{default:()=>[m(oe,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:M,scrollOffset:l,focus:C}}});function pe(e){return e?e.map(o=>He(o)?o:{text:o,value:o}):[]}const et=O({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...fe({mandatory:"force"}),...Pe(),...N()},"VTabs"),dt=A()({name:"VTabs",props:et(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ee(e,"modelValue"),r=y(()=>pe(e.items)),{densityClasses:s}=Re(e),{backgroundColorClasses:a,backgroundColorStyles:l}=_e(_(e,"bgColor"));return $e({VTab:{color:_(e,"color"),direction:_(e,"direction"),stacked:_(e,"stacked"),fixed:_(e,"fixedTabs"),sliderColor:_(e,"sliderColor"),hideSlider:_(e,"hideSlider")}}),X(()=>{const[u]=se.filterProps(e);return m(se,q(u,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,a.value,e.class],style:[{"--v-tabs-height":U(e.height)},l.value,e.style],role:"tablist",symbol:de}),{default:()=>[t.default?t.default():r.value.map(c=>m(Je,q(c,{key:c.text}),null))]})}),{}}});const tt=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:r}=e,s=.5,a=16;e.offsetX=t-o,e.offsetY=r-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<n-a&&e.up(e),e.down&&r>n+a&&e.down(e))};function nt(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ot(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),tt(o)}function at(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function lt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>nt(t,o),touchend:t=>ot(t,o),touchmove:t=>at(t,o)}}function st(e,o){var l;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,r=(t==null?void 0:t.options)??{passive:!0},s=(l=o.instance)==null?void 0:l.$.uid;if(!n||!s)return;const a=lt(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[s]=a,re(a).forEach(u=>{n.addEventListener(u,a[u],r)})}function it(e,o){var s,a;const t=(s=o.value)!=null&&s.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const r=t._touchHandlers[n];re(r).forEach(l=>{t.removeEventListener(l,r[l])}),delete t._touchHandlers[n]}const he={mounted:st,unmounted:it},ut=he,me=Symbol.for("vuetify:v-window"),ge=Symbol.for("vuetify:v-window-group"),ct=O({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...K(),...N(),...Me()},"VWindow"),ft=A()({name:"VWindow",directives:{Touch:he},props:ct(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Oe(e),{isRtl:r}=ie(),{t:s}=Ae(),a=ue(e,ge),l=W(),u=y(()=>r.value?!e.reverse:e.reverse),c=I(!1),d=y(()=>{const f=e.direction==="vertical"?"y":"x",T=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${T}-transition`}),x=I(0),S=W(void 0),h=y(()=>a.items.value.findIndex(f=>a.selected.value.includes(f.id)));ce(h,(f,b)=>{const T=a.items.value.length,V=T-1;T<=2?c.value=f<b:f===V&&b===0?c.value=!0:f===0&&b===V?c.value=!1:c.value=f<b}),Xe(me,{transition:d,isReversed:c,transitionCount:x,transitionHeight:S,rootRef:l});const g=y(()=>e.continuous||h.value!==0),B=y(()=>e.continuous||h.value!==a.items.value.length-1);function E(){g.value&&a.prev()}function P(){B.value&&a.next()}const k=y(()=>{const f=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:a.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?t.prev?t.prev({props:b}):m(F,b,null):m("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:a.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(B.value?t.next?t.next({props:T}):m(F,T,null):m("div",null,null)),f}),w=y(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?E():P()},right:()=>{u.value?P():E()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>ve(m(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var f,b;return[m("div",{class:"v-window__container",style:{height:S.value}},[(f=t.default)==null?void 0:f.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=t.additional)==null?void 0:b.call(t,{group:a})]}}),[[Ye("touch"),w.value]])),{group:a}}}),rt=O({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...K(),...We(),...Fe()},"VWindowItem"),ht=A()({name:"VWindowItem",directives:{Touch:ut},props:rt(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=Ge(me),r=Le(e,ge),{isBooted:s}=je();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=I(!1),l=y(()=>s.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var g;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=U((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function d(){u()}function x(g){a.value&&qe(()=>{!l.value||!a.value||!n||(n.transitionHeight.value=U(g.clientHeight))})}const S=y(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:x}:!1}),{hasContent:h}=De(e,r.isSelected);return X(()=>m(Ke,{transition:S.value,disabled:!s.value},{default:()=>{var g;return[ve(m("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[h.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ue,r.isSelected.value]])]}})),{groupItem:r}}});export{dt as V,Je as a,ft as b,ht as c};
