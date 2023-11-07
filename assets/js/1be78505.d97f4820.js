"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,3893],{53893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(27378),r=n(99213),o=n(1123),l=n(93317);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},55961:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=()=>{const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>{const e=document.querySelector("html"),n=()=>{switch(e?.dataset.theme){case"light":t("light");break;case"dark":t("dark")}};n(),e?.addEventListener("click",(()=>{setTimeout((()=>{n()}),0)}),!1)}),[]),e}},4208:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(27378),r=n(38944),o=n(1123),l=n(75484),c=n(13149),i=n(45161),s=n(25611),m=n(52095),d=n(93317),u=n(99213),b=n(83457),h=n(24993);const p="backToTopButton_iEvu",E="backToTopButtonShow_DO8w";function g(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:l,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(o.current?o.current=!1:a>=l?(c(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,h.S)((e=>{e.location.hash&&(o.current=!0,r(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,p,e&&E),type:"button",onClick:t})}var f=n(3620),w=n(25773),v=n(58357);function k(e){const{rowStart:t,rowEnd:n,rowFlex:a=!1,columnStart:r,columnEnd:o,columnFlex:l=!1}=e,c=C(t,n,a),i=C(r,o,l);return{gridRowStart:c.start,gridRowEnd:c.end,gridColumnStart:i.start,gridColumnEnd:i.end}}function C(e,t,n){return{start:e,end:n?-1:(t??e)+1}}var y=n(81884);const N={common:{collapsible:"ow-theme-collapsible",desktopOnly:"desktop-only",mobileOnly:"mobile-only",navigateWithKeyboard:"navigation-with-keyboard",lightTheme:"light"},sidebar:{index:"ow-theme-sidebar",hidden:"hidden",container:{wrapper:"sidebar-wrapper",index:"sidebar-container",collapsed:"collapsed",items:{common:{current:"current",hidden:"hidden",selectable:"selectable",active:"active"},category:{spacer:"spacer",collapseCell:"collapse-cell",showCaret:"show-caret",tagCategory:"tag-category"},link:{index:"label-cell",fallback:"fallback",link:"link",label:"label"},html:{index:"html-item"}}}}};var x=n(6125);function S(e){return a.createElement("div",null)}const Z=function(e){const{rowNumber:t,isMobile:n,label:o,href:l,tags:c,isActiveItem:i,isCurrentPage:s,collapsed:m,isTagCategory:d=!1,isExternalLink:u=!1,hasIndent:b=!0,onClickFallback:h}=e,p=!l&&!!h,E=!p&&!!l;return a.createElement("li",{className:(0,r.Z)({[N.sidebar.container.items.common.selectable]:l||p,[N.sidebar.container.items.common.current]:s,[N.sidebar.container.items.common.hidden]:m,[N.sidebar.container.items.common.active]:i},N.sidebar.container.items.link.index,{[N.sidebar.container.items.link.link]:l,[N.sidebar.container.items.link.label]:!l},{[N.sidebar.container.items.category.tagCategory]:d}),style:k({rowStart:t,columnStart:b?2:1,columnFlex:!n,columnEnd:2})},a.createElement(y.Z,{href:l,className:(0,r.Z)({[N.common.navigateWithKeyboard]:E,[N.sidebar.container.items.link.fallback]:p}),onClick:p?h:void 0},o,a.createElement(S,c),u&&a.createElement(x.Z,null)))};var I=n(8862),T=n(45626);const F=a.createContext(!1);function M(e){const{mobile:t,children:n}=e;return a.createElement(F.Provider,{value:t},n)}const P=a.createContext(!1);function L(e){const{collapsed:t,children:n}=e;return a.createElement(P.Provider,{value:t},n)}function _(e,t,n){return{isMobile:(0,a.useContext)(F),collapsed:(0,a.useContext)(P),isActiveItem:(0,i._F)(e,n),isCurrentPage:(0,I.Mg)(t,n),isExternalLink:!(!t||(0,T.Z)(t))}}const O=function(e){const{rowNumber:t,item:n,path:r}=e,{href:o,label:l,customProps:c}=n,{tags:i}=c,{collapsed:s,isActiveItem:m,isCurrentPage:d,isMobile:u,isExternalLink:b}=_(n,o,r);return a.createElement(Z,{collapsed:s,href:o,isActiveItem:m,isCurrentPage:d,label:l,isMobile:u,rowNumber:t,tags:i,isExternalLink:b})};var A;function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}const $=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,A||(A=a.createElement("path",{d:"m15 12-5-4v8l5-4Z"})))};var H;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}const j=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",R({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,H||(H=a.createElement("path",{d:"m12 15 4-5H8l4 5Z"})))};var B=n(20624);const K=function(e){const{rowNumber:t}=e;return a.createElement("li",{tabIndex:-1,className:(0,r.Z)(N.sidebar.container.items.category.spacer),style:k({columnStart:1,columnFlex:!0,rowStart:t,rowEnd:t})})};var z=n(76457);const q=a.createContext("/");function D(e){const{path:t,children:n}=e;return a.createElement(q.Provider,{value:t},n)}const U=function(e){const{docs:{sidebar:{autoCollapseCategories:t}}}=(0,B.L)(),{rowNumber:n,item:o,path:l,setActiveCategory:c}=e,{label:s,customProps:m,collapsed:d,href:u,collapsible:b,items:h}=o,{tags:p}=m,E=o.customProps.tag_category,g=!E&&b,f=function(e){return(0,a.useMemo)((()=>e.href??(0,i.Wl)(e)??"#"),[e])}(o),v=function(e,t,n){const r=(0,z.Z)();return(0,a.useMemo)((()=>{if(e.href||!r&&t)return n}),[e,r,n,t])}(o,g,f),C=(0,a.useMemo)((()=>({...o,href:v})),[o,v]),{collapsed:y,isActiveItem:x,isCurrentPage:S,isMobile:I,isExternalLink:T}=_(C,u,l),[F,M]=(0,a.useState)(!x&&!S&&d),P=(0,a.useContext)(q),L=(0,a.useMemo)((()=>!g||!F&&(S||t&&(x||(0,i._F)(C,P)))),[P,F,S,x,t,g,C]),O=(0,a.useCallback)((e=>{e&&c(f),M(!e)}),[f,c]),A=()=>O(!L);return(0,a.useEffect)((()=>{x&&O(!0)}),[x,O]),a.createElement(a.Fragment,null,g&&a.createElement("li",{style:k({rowStart:n,columnStart:I?3:1}),title:`${L?"Collapse":"Expand"} ${s}`,className:(0,r.Z)(N.common.navigateWithKeyboard,N.sidebar.container.items.common.selectable,{[N.sidebar.container.items.common.current]:S,[N.sidebar.container.items.common.hidden]:y},N.sidebar.container.items.category.collapseCell)},a.createElement("button",{onClick:A},L?a.createElement(j,null):a.createElement($,null))),a.createElement(Z,{href:v,collapsed:y,isActiveItem:x,isCurrentPage:S,isMobile:I,label:s,rowNumber:n,tags:p,hasIndent:!E,isExternalLink:T,isTagCategory:E,onClickFallback:g?A:void 0}),h&&a.createElement("li",{style:k({rowStart:n+1,columnStart:E?1:2,columnFlex:!0}),className:N.sidebar.container.wrapper},a.createElement(te,(0,w.Z)({},e,{collapsed:!L,sidebar:h,showCaret:!E}))),E&&a.createElement(K,{rowNumber:n+2}))};const V=function(e){const{rowNumber:t,item:n}=e;return a.createElement("li",{className:(0,r.Z)(N.sidebar.container.items.html.index),style:k({rowStart:t,columnStart:2,columnFlex:!0})},a.createElement("div",{dangerouslySetInnerHTML:{__html:n.value}}))};function Y(e){const{sidebar:t}=e;return a.createElement(a.Fragment,null,t.map(((t,n)=>{const r=1+3*n;switch(t.type){case"link":return a.createElement(O,(0,w.Z)({},e,{key:`${r} Link Item ${t.label}`,rowNumber:r,item:t}));case"category":return a.createElement(U,(0,w.Z)({},e,{key:`${r} Category Item ${t.label}`,item:t,rowNumber:r}));case"html":return a.createElement(V,(0,w.Z)({},e,{key:`${r} HTML Item ${t.value.slice(0,10)}`,item:t,rowNumber:r}));default:throw new Error(`Unknown sidebar type ${t.type}!`)}})))}const G=a.memo(Y);var J=n(80376);const Q=function(e){return a.createElement(J.z,(0,w.Z)({className:N.common.collapsible},e))};var X=n(55961);function ee(e){const{showCaret:t=!1,collapsed:n=!1}=e,o=(0,a.useContext)(P),[l,c]=(0,a.useState)(o),i=(0,X.Z)();return a.createElement(Q,{className:(0,r.Z)(N.sidebar.container.index,{[N.sidebar.container.items.category.showCaret]:t,[N.sidebar.container.collapsed]:o||n&&l,[N.common.lightTheme]:"light"===i}),as:"ul",lazy:!0,collapsed:n,onCollapseTransitionEnd:e=>{c(e)}},a.createElement(L,{collapsed:l},a.createElement(G,e)))}const te=a.memo(ee);var ne=n(63471),ae=n(52335);function re(e){return"mobile"===(0,v.i)()?a.createElement(le,{componentProps:e,component:oe}):a.createElement(oe,(0,w.Z)({},e,{mobile:!1}))}function oe(e){const{path:t,mobile:n}=e,[o,l]=(0,a.useState)("/"),c=(0,ae.e)(),i=(0,a.useRef)(c.shown);return(0,a.useEffect)((()=>{n&&(c.shown&&i.current===c.shown&&c.toggle(),i.current=c.shown)}),[t,c,n]),a.createElement("aside",null,a.createElement(M,{mobile:n},a.createElement("nav",{className:(0,r.Z)(N.sidebar.index,{[N.common.mobileOnly]:n,[N.common.desktopOnly]:!n})},a.createElement(D,{path:o},a.createElement(te,(0,w.Z)({},e,{setActiveCategory:l}))))))}function le(e){return a.createElement(ne.Zo,{component:e.component,props:{...e.componentProps,mobile:!0}})}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,f.TH)(),[l,c]=(0,a.useState)(!1);(0,a.useCallback)((()=>{l&&c(!1),r((e=>!e))}),[r,l]);return a.createElement(re,{sidebar:t,path:o})}const ie={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,m.V)();return a.createElement("main",{className:(0,r.Z)(ie.docMainContainer,(t||!o)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const me="docPage_KLoz",de="docsWrapper_ct1J";function ue(e){let{children:t}=e;const n=(0,m.V)(),[r,o]=(0,a.useState)(!1);return a.createElement(d.Z,{wrapperClassName:de},a.createElement(g,null),a.createElement("div",{className:me},n&&a.createElement(ce,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(se,{hiddenSidebarContainer:r},t)))}var be=n(53893),he=n(60505);function pe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(he.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ee(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(be.default,null);const{docElement:c,sidebarName:d,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(pe,e),a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(m.b,{name:d,items:u},a.createElement(ue,null,c)))))}}}]);