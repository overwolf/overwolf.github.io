"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9514,3893],{53893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(27378),r=n(99213),o=n(1123),l=n(13197);function c(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},62424:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378);const r=()=>{const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>{const e=document.querySelector("html"),n=()=>{switch(e?.dataset.theme){case"light":t("light");break;case"dark":t("dark")}};n(),e?.addEventListener("click",(()=>{setTimeout((()=>{n()}),0)}),!1)}),[]),e}},48074:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(27378),r=n(38944),o=n(1123),l=n(75484),c=n(13149),i=n(45161),s=n(25611),m=n(52095),d=n(13197),u=n(99213),p=n(83457),h=n(24993);const b="backToTopButton_iEvu",E="backToTopButtonShow_DO8w";function g(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:l,cancelScroll:c}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(o.current?o.current=!1:a>=l?(c(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,h.S)((e=>{e.location.hash&&(o.current=!0,r(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,b,e&&E),type:"button",onClick:t})}var f=n(3620),w=n(25773);function v(e){const{rowStart:t,rowEnd:n,rowFlex:a=!1,columnStart:r,columnEnd:o,columnFlex:l=!1}=e,c=Z(t,n,a),i=Z(r,o,l);return{gridRowStart:c.start,gridRowEnd:c.end,gridColumnStart:i.start,gridColumnEnd:i.end}}function Z(e,t,n){return{start:e,end:n?-1:(t??e)+1}}var k=n(81884),C=n(91798),y=n(6125);function x(e){return a.createElement("div",null)}const N=function(e){const{rowNumber:t,isMobile:n,label:o,href:l,tags:c,isActiveItem:i,isCurrentPage:s,collapsed:m,isTagCategory:d=!1,isExternalLink:u=!1,hasIndent:p=!0,onClickFallback:h}=e,b=!l&&!!h,E=!b&&!!l;return a.createElement("li",{className:(0,r.Z)({[C.Z.sidebar.container.items.common.selectable]:l||b,[C.Z.sidebar.container.items.common.current]:s,[C.Z.sidebar.container.items.common.hidden]:m,[C.Z.sidebar.container.items.common.active]:i},C.Z.sidebar.container.items.link.index,{[C.Z.sidebar.container.items.link.link]:l,[C.Z.sidebar.container.items.link.label]:!l},{[C.Z.sidebar.container.items.category.tagCategory]:d}),style:v({rowStart:t,columnStart:p?2:1,columnFlex:!n,columnEnd:2})},a.createElement(k.Z,{href:l,className:(0,r.Z)({[C.Z.common.navigateWithKeyboard]:E,[C.Z.sidebar.container.items.link.fallback]:b}),onClick:b?h:void 0},o,a.createElement(x,c),u&&a.createElement(y.Z,null)))};var S=n(8862),T=n(45626);const I=a.createContext(!1);function F(e){const{collapsed:t,children:n}=e;return a.createElement(I.Provider,{value:t},n)}var M=n(85985);function P(e,t,n){return{isMobile:(0,a.useContext)(M.E),collapsed:(0,a.useContext)(I),isActiveItem:(0,i._F)(e,n),isCurrentPage:(0,S.Mg)(t,n),isExternalLink:!(!t||(0,T.Z)(t))}}const L=function(e){const{rowNumber:t,item:n,path:r}=e,{href:o,label:l,customProps:c}=n,{tags:i}=c,{collapsed:s,isActiveItem:m,isCurrentPage:d,isMobile:u,isExternalLink:p}=P(n,o,r);return a.createElement(N,{collapsed:s,href:o,isActiveItem:m,isCurrentPage:d,label:l,isMobile:u,rowNumber:t,tags:i,isExternalLink:p})};var _;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}const A=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,_||(_=a.createElement("path",{d:"m15 12-5-4v8l5-4Z"})))};var W;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$.apply(this,arguments)}const H=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",$({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,W||(W=a.createElement("path",{d:"m12 15 4-5H8l4 5Z"})))};var R=n(20624);const j=function(e){const{rowNumber:t}=e;return a.createElement("li",{tabIndex:-1,className:(0,r.Z)(C.Z.sidebar.container.items.category.spacer),style:v({columnStart:1,columnFlex:!0,rowStart:t,rowEnd:t})})};var B=n(76457);const K=a.createContext("/");function z(e){const{path:t,children:n}=e;return a.createElement(K.Provider,{value:t},n)}const q=function(e){const{docs:{sidebar:{autoCollapseCategories:t}}}=(0,R.L)(),{rowNumber:n,item:o,path:l,setActiveCategory:c}=e,{label:s,customProps:m,collapsed:d,href:u,collapsible:p,items:h}=o,{tags:b}=m,E=o.customProps.tag_category,g=!E&&p,f=function(e){return(0,a.useMemo)((()=>e.href??(0,i.Wl)(e)??"#"),[e])}(o),Z=function(e,t,n){const r=(0,B.Z)();return(0,a.useMemo)((()=>{if(e.href||!r&&t)return n}),[e,r,n,t])}(o,g,f),k=(0,a.useMemo)((()=>({...o,href:Z})),[o,Z]),{collapsed:y,isActiveItem:x,isCurrentPage:S,isMobile:T,isExternalLink:I}=P(k,u,l),[F,M]=(0,a.useState)(!x&&!S&&d),L=(0,a.useContext)(K),_=(0,a.useMemo)((()=>!g||!F&&(S||t&&(x||(0,i._F)(k,L)))),[L,F,S,x,t,g,k]),O=(0,a.useCallback)((e=>{e&&c(f),M(!e)}),[f,c]),W=()=>O(!_);return(0,a.useEffect)((()=>{x&&O(!0)}),[x,O]),a.createElement(a.Fragment,null,g&&a.createElement("li",{style:v({rowStart:n,columnStart:T?3:1}),title:`${_?"Collapse":"Expand"} ${s}`,className:(0,r.Z)(C.Z.common.navigateWithKeyboard,C.Z.sidebar.container.items.common.selectable,{[C.Z.sidebar.container.items.common.current]:S,[C.Z.sidebar.container.items.common.hidden]:y},C.Z.sidebar.container.items.category.collapseCell)},a.createElement("button",{onClick:W},_?a.createElement(H,null):a.createElement(A,null))),a.createElement(N,{href:Z,collapsed:y,isActiveItem:x,isCurrentPage:S,isMobile:T,label:s,rowNumber:n,tags:b,hasIndent:!E,isExternalLink:I,isTagCategory:E,onClickFallback:g?W:void 0}),h&&a.createElement("li",{style:v({rowStart:n+1,columnStart:E?1:2,columnFlex:!0}),className:C.Z.sidebar.container.wrapper},a.createElement(X,(0,w.Z)({},e,{collapsed:!_,sidebar:h,showCaret:!E}))),E&&a.createElement(j,{rowNumber:n+2}))};const D=function(e){const{rowNumber:t,item:n}=e;return a.createElement("li",{className:(0,r.Z)(C.Z.sidebar.container.items.html.index),style:v({rowStart:t,columnStart:2,columnFlex:!0})},a.createElement("div",{dangerouslySetInnerHTML:{__html:n.value}}))};function U(e){const{sidebar:t}=e;return a.createElement(a.Fragment,null,t.map(((t,n)=>{const r=1+3*n;switch(t.type){case"link":return a.createElement(L,(0,w.Z)({},e,{key:`${r} Link Item ${t.label}`,rowNumber:r,item:t}));case"category":return a.createElement(q,(0,w.Z)({},e,{key:`${r} Category Item ${t.label}`,item:t,rowNumber:r}));case"html":return a.createElement(D,(0,w.Z)({},e,{key:`${r} HTML Item ${t.value.slice(0,10)}`,item:t,rowNumber:r}));default:throw new Error(`Unknown sidebar type ${t.type}!`)}})))}const V=a.memo(U);var Y=n(80376);const G=function(e){return a.createElement(Y.z,(0,w.Z)({className:C.Z.common.collapsible},e))};var J=n(62424);function Q(e){const{showCaret:t=!1,collapsed:n=!1}=e,o=(0,a.useContext)(I),[l,c]=(0,a.useState)(o),i=(0,J.Z)();return a.createElement(G,{className:(0,r.Z)(C.Z.sidebar.container.index,{[C.Z.sidebar.container.items.category.showCaret]:t,[C.Z.sidebar.container.collapsed]:o||n&&l,[C.Z.common.lightTheme]:"light"===i}),as:"ul",lazy:!0,collapsed:n,onCollapseTransitionEnd:e=>{c(e)}},a.createElement(F,{collapsed:l},a.createElement(V,e)))}const X=a.memo(Q);var ee=n(63471),te=n(52335);function ne(e){return a.createElement(ae,e)}function ae(e){return(0,a.useContext)(M.E)?a.createElement(ee.Zo,{component:re,props:{...e}}):a.createElement(re,e)}function re(e){const{path:t}=e,[n,o]=(0,a.useState)("/"),l=(0,a.useContext)(M.E),c=(0,te.e)(),i=(0,a.useRef)(c.shown);return(0,a.useEffect)((()=>{l&&(c.shown&&i.current===c.shown&&c.toggle(),i.current=c.shown)}),[t,c,l]),a.createElement("aside",null,a.createElement("nav",{className:(0,r.Z)(C.Z.sidebar.index,{[C.Z.common.mobileOnly]:l,[C.Z.common.desktopOnly]:!l})},a.createElement(z,{path:n},a.createElement(X,(0,w.Z)({},e,{setActiveCategory:o})))))}function oe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,f.TH)(),[l,c]=(0,a.useState)(!1);(0,a.useCallback)((()=>{l&&c(!1),r((e=>!e))}),[r,l]);return a.createElement(ne,{sidebar:t,path:o})}const le={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function ce(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,m.V)();return a.createElement("main",{className:(0,r.Z)(le.docMainContainer,(t||!o)&&le.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",le.docItemWrapper,t&&le.docItemWrapperEnhanced)},n))}const ie="docPage_KLoz",se="docsWrapper_ct1J";function me(e){let{children:t}=e;const n=(0,m.V)(),[r,o]=(0,a.useState)(!1);return a.createElement(d.Z,{wrapperClassName:se},a.createElement(g,null),a.createElement("div",{className:ie},n&&a.createElement(oe,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(ce,{hiddenSidebarContainer:r},t)))}var de=n(53893),ue=n(60505);function pe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ue.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function he(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(de.default,null);const{docElement:c,sidebarName:d,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(pe,e),a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(m.b,{name:d,items:u},a.createElement(me,null,c)))))}},91798:(e,t,n)=>{n.d(t,{Z:()=>a});const a={common:{collapsible:"ow-theme-collapsible",desktopOnly:"desktop-only",mobileOnly:"mobile-only",navigateWithKeyboard:"navigation-with-keyboard",lightTheme:"light",active:"active",inactive:"inactive",buttonSecondary:"btn-secondary"},sidebar:{index:"ow-theme-sidebar",hidden:"hidden",container:{wrapper:"sidebar-wrapper",index:"sidebar-container",collapsed:"collapsed",items:{common:{current:"current",hidden:"hidden",selectable:"selectable",active:"active"},category:{spacer:"spacer",collapseCell:"collapse-cell",showCaret:"show-caret",tagCategory:"tag-category"},link:{index:"label-cell",fallback:"fallback",link:"link",label:"label"},html:{index:"html-item"}}}},comparisonTable:{index:"comparison-table",headers:{index:"comparison-table-headers",comparisonTitle:"comparison-title",item:"comparison-header-item",categories:{index:"comparison-categories",category:"comparison-category"}},rows:{index:"comparison-rows",row:{index:"comparison-row",title:{index:"comparison-group-title"},values:{index:"comparison-values",title:"comparison-title",text:"comparison-text",green:"green",red:"red",toolTipContainer:"tt-container"}}},cell:{index:"comparison-cell"}}}}}]);