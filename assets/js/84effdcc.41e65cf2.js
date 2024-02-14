"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9636],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,d=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},18439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const o={id:199,image:"/img/embed/changelogs.jpg",title:"Version 0.199",sidebar_label:"0.199",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/june/199",id:"api/changelogs/overwolf-platform/2022/june/199",title:"Version 0.199",description:"Docs",source:"@site/../pages/api/changelogs/overwolf-platform/2022/june/199.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/june",slug:"/api/changelogs/overwolf-platform/2022/june/199",permalink:"/api/changelogs/overwolf-platform/2022/june/199",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/changelogs/overwolf-platform/2022/june/199.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"199",image:"/img/embed/changelogs.jpg",title:"Version 0.199",sidebar_label:"0.199",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.201",permalink:"/api/changelogs/overwolf-platform/2022/july/201"},next:{title:"0.198",permalink:"/api/changelogs/overwolf-platform/2022/may/198"}},p={},s=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the documentation to reflect the new API changes listed below."),(0,n.kt)("li",{parentName:"ul"},"Added documentation of the ",(0,n.kt)("a",{parentName:"li",href:"/api/games#gameinfotype-enum"},"overwolf.games.GameInfoType")," Enum.")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updated API: ",(0,n.kt)("a",{parentName:"p",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming"))," ","[EXPERIMENTAL]",":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ABSTRACT - It is now possible to choose to capture audio from a game and other specific audio processes, rather than only the entire desktop's audio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.getCapabilities"))," - New method for obtaining all streaming capabilities in one place, for both video and audio.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns a callback with ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamingCapabilities")),"."),(0,n.kt)("li",{parentName:"ul"},"Of particular note is the new ",(0,n.kt)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," flag, that lets us know if ",(0,n.kt)("inlineCode",{parentName:"li"},"filtered_capture")," can be enabled."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamAudioOptions.game"))," has been changed to ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.GameAudioDevice")),". The new field ",(0,n.kt)("inlineCode",{parentName:"li"},"filtered_capture")," has been added, and can be used if ",(0,n.kt)("inlineCode",{parentName:"li"},"audioProcessCaptureSupported")," returned true (this depends on the machine running the app, so make sure to always check it!)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New API: ",(0,n.kt)("a",{parentName:"p",href:"/api/games/tracked#getrunninggameinfocallback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.tracked.getRunningGameInfo"))," - New method for obtaining game info from tracked games, similar to ",(0,n.kt)("a",{parentName:"p",href:"/api/games"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo")),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This method will only work if ",(0,n.kt)("inlineCode",{parentName:"li"},"tracked")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"track_all_games")," are both set to true in the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#launch_event_settings-array"},"app manifest"),", but it will work on ",(0,n.kt)("strong",{parentName:"li"},"all")," games, regardless of whether they're supported or not."),(0,n.kt)("li",{parentName:"ul"},"Keep in mind that an unsupported game that was tracked still won't necessarily work as intended, so be sure to test that it works for your specific use case!")))),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Several improvements to Overwolf dll stability.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.games.getRunningGameInfo"))," will no longer return a monitor handle of 0 in certain edge cases.")))}u.isMDXComponent=!0}}]);