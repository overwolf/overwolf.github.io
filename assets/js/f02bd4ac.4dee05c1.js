"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8953],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=l,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(25773),l=(r(27378),r(35318));const o={id:"understanding-overwolf-logs",image:"/img/embed/api-best-practices.jpg",title:"Understanding Overwolf Logs",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},a=void 0,i={unversionedId:"topics/understanding-overwolf-logs/understanding-overwolf-logs",id:"topics/understanding-overwolf-logs/understanding-overwolf-logs",title:"Understanding Overwolf Logs",description:"Logs are a recording of all the processes and changes made while Overwolf is running. These include details such as the users computer specs, which game and app are being played and recording details. You can use these logs to get insights about what exactly was happening on Overwolf while it was active. Moreover, you can use this information in order to troubleshoot and resolve various issues.",source:"@site/pages/docs/topics/understanding-overwolf-logs/understanding-overwolf-logs.mdx",sourceDirName:"topics/understanding-overwolf-logs",slug:"/topics/understanding-overwolf-logs/",permalink:"/topics/understanding-overwolf-logs/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/understanding-overwolf-logs/understanding-overwolf-logs.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"understanding-overwolf-logs",image:"/img/embed/api-best-practices.jpg",title:"Understanding Overwolf Logs",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Promoting your app",permalink:"/topics/request-a-service/promoting-your-app"},next:{title:"Trace",permalink:"/topics/understanding-overwolf-logs/trace"}},s={},u=[{value:"Trace logs",id:"trace-logs",level:2},{value:"OBS",id:"obs",level:2},{value:"Overlay game HTML",id:"overlay-game-html",level:2},{value:"OverwolfPerf",id:"overwolfperf",level:2},{value:"DxDiag",id:"dxdiag",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Logs are a recording of all the processes and changes made while Overwolf is running. These include details such as the users computer specs, which game and app are being played and recording details. You can use these logs to get insights about what exactly was happening on Overwolf while it was active. Moreover, you can use this information in order to troubleshoot and resolve various issues."),(0,l.kt)("h2",{id:"trace-logs"},"Trace logs"),(0,l.kt)("p",null,"The Trace logs will help you keep trace of all the actions taken by Overwolf.  "),(0,l.kt)("p",null,"In the trace logs you will find the following information: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The installed Overwolf version "),(0,l.kt)("li",{parentName:"ul"},"OS information"),(0,l.kt)("li",{parentName:"ul"},"Overwolf user information (If the user is logged in) "),(0,l.kt)("li",{parentName:"ul"},"Gamelist version"),(0,l.kt)("li",{parentName:"ul"},"If Hardware Accelerated GPU Scheduling is enabled"),(0,l.kt)("li",{parentName:"ul"},"If the overlay is enabled"),(0,l.kt)("li",{parentName:"ul"},"If Overwolf helpers launched correctly"),(0,l.kt)("li",{parentName:"ul"},"The game score"),(0,l.kt)("li",{parentName:"ul"},"Which extensions are running"),(0,l.kt)("li",{parentName:"ul"},"Which Overwolf processes are running & when Overwolf processes have closed"),(0,l.kt)("li",{parentName:"ul"},"Other processes currently running on the computer")),(0,l.kt)("p",null,"You can use this log file to investigate the following issues: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Issues opening an app"),(0,l.kt)("li",{parentName:"ul"},"Issues with the overlay"),(0,l.kt)("li",{parentName:"ul"},"Indication of active app windows"),(0,l.kt)("li",{parentName:"ul"},"Subscription (If user is logged in)"),(0,l.kt)("li",{parentName:"ul"},"If there is a third party app that may interfere with the overlay")),(0,l.kt)("p",null,"Read more about the Trace logs ",(0,l.kt)("a",{parentName:"p",href:"understanding-overwolf-logs/trace"},"here"),"."),(0,l.kt)("h2",{id:"obs"},"OBS"),(0,l.kt)("p",null,"OBS is the engine that Overwolf client use to record games. "),(0,l.kt)("p",null,"In the OBS logs you will find:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The system information"),(0,l.kt)("li",{parentName:"ul"},"Driver versions"),(0,l.kt)("li",{parentName:"ul"},"Display & Sound devices that are in use"),(0,l.kt)("li",{parentName:"ul"},"Capture configurations (Resolution, FPS, bitrate, encoder) "),(0,l.kt)("li",{parentName:"ul"},"Information regarding the recordings captured")),(0,l.kt)("p",null,"You can use this log file to investigate the following issues: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Game not recording"),(0,l.kt)("li",{parentName:"ul"},"Laggy recordings"),(0,l.kt)("li",{parentName:"ul"},"Sound issues while recording")),(0,l.kt)("p",null,"Read more about the OBS log ",(0,l.kt)("a",{parentName:"p",href:"understanding-overwolf-logs/obs"},"here"),"."),(0,l.kt)("h2",{id:"overlay-game-html"},"Overlay game HTML"),(0,l.kt)("p",null,"These logs will appear as an HTML file with the game title (For example ",(0,l.kt)("inlineCode",{parentName:"p"},"League of Legends_07-03-21_05-17-06.Game.html"),"), Overwolf Helper and Overwolf Help 64. "),(0,l.kt)("p",null,"In the Overlay game HTML you will find:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Which processes were injected"),(0,l.kt)("li",{parentName:"ul"},"Which dlls were injected into the game (Including Overwolf)"),(0,l.kt)("li",{parentName:"ul"},"Resolutions and windows mode"),(0,l.kt)("li",{parentName:"ul"},"Rendered API"),(0,l.kt)("li",{parentName:"ul"},"Hooking system"),(0,l.kt)("li",{parentName:"ul"},"If the render was successful"),(0,l.kt)("li",{parentName:"ul"},"If the hotkeys were sent and received by Overwolf "),(0,l.kt)("li",{parentName:"ul"},"If the game ended properly or crashes")),(0,l.kt)("p",null,"Read more about the Overlay game HTML ",(0,l.kt)("a",{parentName:"p",href:"understanding-overwolf-logs/overlay-game-html"},"here"),"."),(0,l.kt)("h2",{id:"overwolfperf"},"OverwolfPerf"),(0,l.kt)("p",null,"In this file you can view the performance details of Overwolf and the Overwolf apps in the last run."),(0,l.kt)("p",null,"You can use this log file to investigate the following issues:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"High resource usage of CPU and RAM per Overwolf process"),(0,l.kt)("li",{parentName:"ul"},"Lags & freezes ")),(0,l.kt)("p",null,"Read more about the OverwolfPerf log ",(0,l.kt)("a",{parentName:"p",href:"understanding-overwolf-logs/overwolfperf"},"here"),"."),(0,l.kt)("h2",{id:"dxdiag"},"DxDiag"),(0,l.kt)("p",null,"This file contains system information such as OS version & Build, information on your users Processor and Display & Sound devices."),(0,l.kt)("p",null,"You can use this log file to investigate the following issues:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Issues in app display"),(0,l.kt)("li",{parentName:"ul"},"Issues with recordings"),(0,l.kt)("li",{parentName:"ul"},"Issues with sound")),(0,l.kt)("p",null,"Read more about the DxDiag log ",(0,l.kt)("a",{parentName:"p",href:"understanding-overwolf-logs/dxdiag"},"here"),"."))}d.isMDXComponent=!0}}]);