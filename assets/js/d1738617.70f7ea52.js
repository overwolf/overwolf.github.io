"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9583],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||n;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(25773),a=(r(27378),r(35318));const n={id:178,image:"/img/embed/changelogs.jpg",title:"Version 0.178",sidebar_label:"0.178",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/august/178",id:"api/changelogs/overwolf-platform/2021/august/178",title:"Version 0.178",description:"* Note that iterations 178 to 179 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/august/178.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/august",slug:"/api/changelogs/overwolf-platform/2021/august/178",permalink:"/api/changelogs/overwolf-platform/2021/august/178",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/august/178.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"178",image:"/img/embed/changelogs.jpg",title:"Version 0.178",sidebar_label:"0.178",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.180",permalink:"/api/changelogs/overwolf-platform/2021/september/180"},next:{title:"0.176",permalink:"/api/changelogs/overwolf-platform/2021/august/176"}},s={},p=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that iterations 178 to 179 were combined into a single iteration. ")),(0,a.kt)("h3",{id:"docs"},"Docs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None.")),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/windows#setzoomwinzoomfactorowid-windowid"},"overwolf.window.setZoom()")," can now be applied to a specific window and not to all of the app windows.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installer:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Auto-Launch - Up until now if Overwolf was already installed, downloading and installing an app from the "Appstore on web" will install the app, but it wouldn\u2019t auto-launch the app after it was installed. Now it does.'),(0,a.kt)("li",{parentName:"ul"},"Error Messages - We have improved our installer error messages. They will always include links to our Discord or to our Help Center."))),(0,a.kt)("li",{parentName:"ul"},"Analytics - A bunch of new analytics were created in this iteration.")),(0,a.kt)("h3",{id:"dev-console"},"Dev Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with increased text scaling in Windows.")))}c.isMDXComponent=!0}}]);