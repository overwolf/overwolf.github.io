"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2544],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),f=n,g=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},75272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const l={id:149,image:"/img/embed/changelogs.jpg",title:"Version 0.149",sidebar_label:"0.149",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/changelogs/overwolf-platform/2020/july/149",id:"api/changelogs/overwolf-platform/2020/july/149",title:"Version 0.149",description:"API and Platform",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/july/149.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/july",slug:"/api/changelogs/overwolf-platform/2020/july/149",permalink:"/api/changelogs/overwolf-platform/2020/july/149",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/july/149.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"149",image:"/img/embed/changelogs.jpg",title:"Version 0.149",sidebar_label:"0.149",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.153",permalink:"/api/changelogs/overwolf-platform/2020/august/153"},next:{title:"0.148",permalink:"/api/changelogs/overwolf-platform/2020/june/148"}},p={},s=[{value:"API and Platform",id:"api-and-platform",level:3},{value:"Game events",id:"game-events",level:3},{value:"Docs",id:"docs",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"api-and-platform"},"API and Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/windows#changesizechangesizeparams-callback"},"overwolf.windows.changeSize()"),".",(0,n.kt)("br",{parentName:"li"}),'Accept now a new boolean param whether to automatically account for DPI scale when resizing ("auto_dpi_resize").'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/manifest#enable-app-auto-launch-with-overwolf"},'"LaunchWithOverwolf"')," - new manifest flag, enable launching app together with the OW client."),(0,n.kt)("li",{parentName:"ul"},"New API to support enabling/disabling auto-launch with the Overwolf client:",(0,n.kt)("br",{parentName:"li"}),"(Apps launched this way will have ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions#the-origin-string"},"origin"),' "overwolfstartlaunchevent") ',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"overwolf.settings.setExtensionSettings(extensionSettings, callback)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/settings#getextensionsettingscallback"},"overwolf.settings.getExtensionSettings"),".")))),(0,n.kt)("h3",{id:"game-events"},"Game events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/magic-the-gathering-arena"},"MTGA"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"),(0,n.kt)("li",{parentName:"ul"},"game_info"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/valorant"},"VALORANT"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_info"),(0,n.kt)("li",{parentName:"ul"},"kill"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/overwatch"},"OVERWATCH"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays/auto-highlights"},"Auto-highlights")," support"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege"},"RAINBOW SIX"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New updates and events under:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"roster")))))),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We are now supporting bigger ",(0,n.kt)("a",{parentName:"li",href:"/start/submit-your-app#prepare-your-store-assets"},"screenshots")," for your OW app store page: 1200x750 pixels, instead of the old 656X410.")))}m.isMDXComponent=!0}}]);