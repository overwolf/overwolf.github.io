"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[9157],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,f=c["".concat(p,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const o={id:"team-speak-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf TeamSpeak plugin",sidebar_label:"TeamSpeak plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"topics/using-plugins/team-speak-plugin",id:"topics/using-plugins/team-speak-plugin",title:"The Overwolf TeamSpeak plugin",description:"The Overwolf TeamSpeak Plugin allows your app to perform TeamSpeak server, channel and client related operations. You can read the full list of functions and events available in the TeamSpeak Plugin in its GitHub repository .",source:"@site/../pages/topics/using-plugins/team-speak-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/team-speak-plugin",permalink:"/topics/using-plugins/team-speak-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/topics/using-plugins/team-speak-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"team-speak-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf TeamSpeak plugin",sidebar_label:"TeamSpeak plugin",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Simple I/O plugin",permalink:"/topics/using-plugins/simple-io-plugin"},next:{title:"Write your own plugin",permalink:"/topics/using-plugins/writing-your-own-plugin"}},p={},s=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Unblock DLL&#39;s",id:"unblock-dlls",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Overwolf ",(0,r.kt)("strong",{parentName:"p"},"TeamSpeak Plugin")," allows your app to perform TeamSpeak server, channel and client related operations. You can read the full list of functions and events available in the TeamSpeak Plugin in its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overwolf/teamspeak-overwolf"},"GitHub repository")," ."),(0,r.kt)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,r.kt)("p",null,"TeamSpeak is a way for gamers to communicate using text and voice as they play. With this plugin you can, among other things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize a TeamSpeak server connection."),(0,r.kt)("li",{parentName:"ul"},"Connect to a Server and navigate channels."),(0,r.kt)("li",{parentName:"ul"},"Create new channels."),(0,r.kt)("li",{parentName:"ul"},"Mute client.")),(0,r.kt)("h2",{id:"downloads"},"Downloads"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can download the plugin from our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/teamspeak-overwolf"},"GitHub repository"),"."),(0,r.kt)("li",{parentName:"ul"},"A sample Overwolf app using the TeamSpeak plugin can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/overwolf/teamspeak-overwolf/tree/master/sampleApp"},"here"),".")),(0,r.kt)("h2",{id:"unblock-dlls"},"Unblock DLL's"),(0,r.kt)("p",null,'When you download DLL files from a browser, Windows automatically marks it as unsafe. Please check the "Unblock" box in the DLL\u2019s file properties to remedy this:'),(0,r.kt)("p",null,"!",(0,r.kt)("img",{alt:"Unblock dll",src:n(85668).Z,width:"215",height:"300"})))}c.isMDXComponent=!0},85668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unblock_dll-5a6ae65815c89f3a12632f324495d605.jpg"}}]);