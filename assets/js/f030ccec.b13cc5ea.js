"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9338],{35318:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=o,g=c["".concat(p,".").concat(u)]||c[u]||f[u]||a;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const a={id:133,image:"/img/embed/changelogs.jpg",title:"Version 0.133",sidebar_label:"0.133",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2019/july/133",id:"api/changelogs/overwolf-platform/2019/july/133",title:"Version 0.133",description:"* minimum-gep-version - New manifest flag. Allow extensions to set a minimum GEP version in manifest, this works similarly to minimum-version.",source:"@site/../pages/api/changelogs/overwolf-platform/2019/july/133.mdx",sourceDirName:"api/changelogs/overwolf-platform/2019/july",slug:"/api/changelogs/overwolf-platform/2019/july/133",permalink:"/api/changelogs/overwolf-platform/2019/july/133",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2019/july/133.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"133",image:"/img/embed/changelogs.jpg",title:"Version 0.133",sidebar_label:"0.133",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.134",permalink:"/api/changelogs/overwolf-platform/2019/august/134"},next:{title:"0.132",permalink:"/api/changelogs/overwolf-platform/2019/july/132"}},p={},s=[],m={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/manifest#meta-minimum-gep"},"minimum-gep-version")," - New manifest flag. Allow extensions to set a minimum GEP version in manifest, this works similarly to minimum-version.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/extensions#updateextensioncallback"},"overwolf.extensions.updateExtension()")," - new method. Tries to download an update for the calling extension.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/extensions#onextensionupdatestatechanged"},"overwolf.extensions.onExtensionUpdateStateChanged")," - new event. Notify when the app was updated."))))}c.isMDXComponent=!0}}]);