import{j as f}from"./index.BZtLbnUN.js";import{r as n}from"./index.CUiTgGaH.js";import{e as le,a as fe,b as y,f as D,u as O,g as pe,d as ve,c as M,P as me}from"./index.Cn5qaMNV.js";import{c as be,P as w,u as k,a as L}from"./index.DcrLtNVA.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=be("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);function he(e,t=[]){let o=[];function r(i,c){const l=n.createContext(c),d=o.length;o=[...o,c];function u(p){const{scope:v,children:m,...a}=p,b=v?.[e][d]||l,g=n.useMemo(()=>a,Object.values(a));return f.jsx(b.Provider,{value:g,children:m})}function R(p,v){const m=v?.[e][d]||l,a=n.useContext(m);if(a)return a;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,R]}const s=()=>{const i=o.map(c=>n.createContext(c));return function(l){const d=l?.[e]||i;return n.useMemo(()=>({[`__scope${e}`]:{...l,[e]:d}}),[l,d])}};return s.scopeName=e,[r,ge(s,...t)]}function ge(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const c=r.reduce((l,{useScope:d,scopeName:u})=>{const p=d(i)[`__scope${u}`];return{...l,...p}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return o.scopeName=t.scopeName,o}var P="rovingFocusGroup.onEntryFocus",xe={bubbles:!1,cancelable:!0},S="RovingFocusGroup",[A,K,Ie]=le(S),[ye,z]=he(S,[Ie]),[Ce,we]=ye(S),U=n.forwardRef((e,t)=>f.jsx(A.Provider,{scope:e.__scopeRovingFocusGroup,children:f.jsx(A.Slot,{scope:e.__scopeRovingFocusGroup,children:f.jsx(Se,{...e,ref:t})})}));U.displayName=S;var Se=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,orientation:r,loop:s=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:d,onEntryFocus:u,preventScrollOnEntryFocus:R=!1,...p}=e,v=n.useRef(null),m=k(t,v),a=D(i),[b=null,g]=O({prop:c,defaultProp:l,onChange:d}),[x,I]=n.useState(!1),E=pe(u),se=K(o),F=n.useRef(!1),[ce,T]=n.useState(0);return n.useEffect(()=>{const h=v.current;if(h)return h.addEventListener(P,E),()=>h.removeEventListener(P,E)},[E]),f.jsx(Ce,{scope:o,orientation:r,dir:a,loop:s,currentTabStopId:b,onItemFocus:n.useCallback(h=>g(h),[g]),onItemShiftTab:n.useCallback(()=>I(!0),[]),onFocusableItemAdd:n.useCallback(()=>T(h=>h+1),[]),onFocusableItemRemove:n.useCallback(()=>T(h=>h-1),[]),children:f.jsx(w.div,{tabIndex:x||ce===0?-1:0,"data-orientation":r,...p,ref:m,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{F.current=!0}),onFocus:y(e.onFocus,h=>{const ae=!F.current;if(h.target===h.currentTarget&&ae&&!x){const j=new CustomEvent(P,xe);if(h.currentTarget.dispatchEvent(j),!j.defaultPrevented){const _=se().filter(C=>C.focusable),ie=_.find(C=>C.active),ue=_.find(C=>C.id===b),de=[ie,ue,..._].filter(Boolean).map(C=>C.ref.current);V(de,R)}}F.current=!1}),onBlur:y(e.onBlur,()=>I(!1))})})}),B="RovingFocusGroupItem",$=n.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,focusable:r=!0,active:s=!1,tabStopId:i,...c}=e,l=fe(),d=i||l,u=we(B,o),R=u.currentTabStopId===d,p=K(o),{onFocusableItemAdd:v,onFocusableItemRemove:m}=u;return n.useEffect(()=>{if(r)return v(),()=>m()},[r,v,m]),f.jsx(A.ItemSlot,{scope:o,id:d,focusable:r,active:s,children:f.jsx(w.span,{tabIndex:R?0:-1,"data-orientation":u.orientation,...c,ref:t,onMouseDown:y(e.onMouseDown,a=>{r?u.onItemFocus(d):a.preventDefault()}),onFocus:y(e.onFocus,()=>u.onItemFocus(d)),onKeyDown:y(e.onKeyDown,a=>{if(a.key==="Tab"&&a.shiftKey){u.onItemShiftTab();return}if(a.target!==a.currentTarget)return;const b=_e(a,u.orientation,u.dir);if(b!==void 0){if(a.metaKey||a.ctrlKey||a.altKey||a.shiftKey)return;a.preventDefault();let x=p().filter(I=>I.focusable).map(I=>I.ref.current);if(b==="last")x.reverse();else if(b==="prev"||b==="next"){b==="prev"&&x.reverse();const I=x.indexOf(a.currentTarget);x=u.loop?Pe(x,I+1):x.slice(I+1)}setTimeout(()=>V(x))}})})})});$.displayName=B;var Ee={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Fe(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function _e(e,t,o){const r=Fe(e.key,o);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Ee[r]}function V(e,t=!1){const o=document.activeElement;for(const r of e)if(r===o||(r.focus({preventScroll:t}),document.activeElement!==o))return}function Pe(e,t){return e.map((o,r)=>e[(t+r)%e.length])}var Ae=U,ke=$;function Ne(e){const[t,o]=n.useState(void 0);return ve(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const i=s[0];let c,l;if("borderBoxSize"in i){const d=i.borderBoxSize,u=Array.isArray(d)?d[0]:d;c=u.inlineSize,l=u.blockSize}else c=e.offsetWidth,l=e.offsetHeight;o({width:c,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else o(void 0)},[e]),t}function Ge(e){const t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var N="Radio",[Te,q]=M(N),[je,De]=Te(N),H=n.forwardRef((e,t)=>{const{__scopeRadio:o,name:r,checked:s=!1,required:i,disabled:c,value:l="on",onCheck:d,form:u,...R}=e,[p,v]=n.useState(null),m=k(t,g=>v(g)),a=n.useRef(!1),b=p?u||!!p.closest("form"):!0;return f.jsxs(je,{scope:o,checked:s,disabled:c,children:[f.jsx(w.button,{type:"button",role:"radio","aria-checked":s,"data-state":X(s),"data-disabled":c?"":void 0,disabled:c,value:l,...R,ref:m,onClick:y(e.onClick,g=>{s||d?.(),b&&(a.current=g.isPropagationStopped(),a.current||g.stopPropagation())})}),b&&f.jsx(Oe,{control:p,bubbles:!a.current,name:r,value:l,checked:s,required:i,disabled:c,form:u,style:{transform:"translateX(-100%)"}})]})});H.displayName=N;var Y="RadioIndicator",W=n.forwardRef((e,t)=>{const{__scopeRadio:o,forceMount:r,...s}=e,i=De(Y,o);return f.jsx(me,{present:r||i.checked,children:f.jsx(w.span,{"data-state":X(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:t})})});W.displayName=Y;var Oe=e=>{const{control:t,checked:o,bubbles:r=!0,...s}=e,i=n.useRef(null),c=Ge(o),l=Ne(t);return n.useEffect(()=>{const d=i.current,u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==o&&p){const v=new Event("click",{bubbles:r});p.call(d,o),d.dispatchEvent(v)}},[c,o,r]),f.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...s,tabIndex:-1,ref:i,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function X(e){return e?"checked":"unchecked"}var Me=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],G="RadioGroup",[Le,Je]=M(G,[z,q]),J=z(),Q=q(),[Ke,ze]=Le(G),Z=n.forwardRef((e,t)=>{const{__scopeRadioGroup:o,name:r,defaultValue:s,value:i,required:c=!1,disabled:l=!1,orientation:d,dir:u,loop:R=!0,onValueChange:p,...v}=e,m=J(o),a=D(u),[b,g]=O({prop:i,defaultProp:s,onChange:p});return f.jsx(Ke,{scope:o,name:r,required:c,disabled:l,value:b,onValueChange:g,children:f.jsx(Ae,{asChild:!0,...m,orientation:d,dir:a,loop:R,children:f.jsx(w.div,{role:"radiogroup","aria-required":c,"aria-orientation":d,"data-disabled":l?"":void 0,dir:a,...v,ref:t})})})});Z.displayName=G;var ee="RadioGroupItem",oe=n.forwardRef((e,t)=>{const{__scopeRadioGroup:o,disabled:r,...s}=e,i=ze(ee,o),c=i.disabled||r,l=J(o),d=Q(o),u=n.useRef(null),R=k(t,u),p=i.value===s.value,v=n.useRef(!1);return n.useEffect(()=>{const m=b=>{Me.includes(b.key)&&(v.current=!0)},a=()=>v.current=!1;return document.addEventListener("keydown",m),document.addEventListener("keyup",a),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",a)}},[]),f.jsx(ke,{asChild:!0,...l,focusable:!c,active:p,children:f.jsx(H,{disabled:c,required:i.required,checked:p,...d,...s,name:i.name,ref:R,onCheck:()=>i.onValueChange(s.value),onKeyDown:y(m=>{m.key==="Enter"&&m.preventDefault()}),onFocus:y(s.onFocus,()=>{v.current&&u.current?.click()})})})});oe.displayName=ee;var Ue="RadioGroupIndicator",te=n.forwardRef((e,t)=>{const{__scopeRadioGroup:o,...r}=e,s=Q(o);return f.jsx(W,{...s,...r,ref:t})});te.displayName=Ue;var re=Z,ne=oe,Be=te;const $e=n.forwardRef(({className:e,...t},o)=>f.jsx(re,{className:L("grid gap-2",e),...t,ref:o}));$e.displayName=re.displayName;const Ve=n.forwardRef(({className:e,...t},o)=>f.jsx(ne,{ref:o,className:L("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:f.jsx(Be,{className:"flex items-center justify-center",children:f.jsx(Re,{className:"h-2.5 w-2.5 fill-current text-current"})})}));Ve.displayName=ne.displayName;export{$e as R,Ve as a};
