"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7980],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},40036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:153,image:"/img/embed/changelogs.jpg",title:"Version 0.153",sidebar_label:"0.153",sidebar_position:153,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2020/august/153",id:"api/changelogs/overwolf-platform/2020/august/153",title:"Version 0.153",description:"Note that iterations 150 to 153 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/8-august/153.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/8-august",slug:"/api/changelogs/overwolf-platform/2020/august/153",permalink:"/api/changelogs/overwolf-platform/2020/august/153",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/8-august/153.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:153,frontMatter:{id:"153",image:"/img/embed/changelogs.jpg",title:"Version 0.153",sidebar_label:"0.153",sidebar_position:153,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.149",permalink:"/api/changelogs/overwolf-platform/2020/july/149"},next:{title:"0.155",permalink:"/api/changelogs/overwolf-platform/2020/september/155"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Note that iterations 150 to 153 were combined into a single iteration.  "),(0,r.mdx)("h3",{id:"api"},"API"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/utils#openurlindefaultbrowserurlopenurloptions"},"overwolf.utils.openUrlInDefaultBrowser()"),' - Now allows extra behaviour. Right now "skip_in_game_notification" is the only option. When set to true, the alert notifying in-game users that their browser is about to open will not display. '),(0,r.mdx)("li",{parentName:"ul"},"Add to ",(0,r.mdx)("a",{parentName:"li",href:"/api/utils#estorepage-enum"},"overwolf.utils.enums.eStorePage")," - Now you can Open the requested app\u2019s reviews/feedabck page in the Overwolf Appstore."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()")," now returns also the monitor id.",(0,r.mdx)("br",{parentName:"li"}),"Now you quickly determine which monitor the window is displayed."),(0,r.mdx)("li",{parentName:"ul"},"New manifest flag - ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#process_name-notes"},"process_name"),".",(0,r.mdx)("br",{parentName:"li"}),"using one simple flag in the manifest, app developers can now differentiate their own apps from the rest of the OverwolfBrwoser.exe process rubble in the Task Manager.",(0,r.mdx)("br",{parentName:"li"}),'By adding your custom "process_name" to an app manifest, all the processes related to the app ads are now running with the name given them by this flag.'),(0,r.mdx)("li",{parentName:"ul"},"Added extra info to the overwolf.settings.hotkeys.onChanged API, so it\u2019s consistent with the overwolf.settings.hotkeys.get function."),(0,r.mdx)("li",{parentName:"ul"},'The "file" param is now optional when calling overwolf.social.discord.share(). Instead, you can use the "message" param to include a URL of a file that you want to share.')),(0,r.mdx)("h3",{id:"platform"},"Platform"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/topics/best-practices/enable-dev-tools#supported-features"},"Disabled Dev Tools as a default"),".",(0,r.mdx)("br",{parentName:"li"}),"From now on, when clicking Ctrl+Shift+I on a window will NOT open the developer tools. (Even if the ",(0,r.mdx)("a",{parentName:"li",href:"/api/manifest#disable_dt"},"disable_dt")," manifest flag is set to false). The only way to enable it back is by changing a registry key.  "),(0,r.mdx)("li",{parentName:"ul"},"Allow pin to the taskbar (and launch the app + app icon):",(0,r.mdx)("br",{parentName:"li"}),"Now you can pin an open app to the taskbar, and the app icon will not change to the Overwolf icon, and the pinned app can be launched from the taskbar. (even if OW is closed)"),(0,r.mdx)("li",{parentName:"ul"},"Non-logged in app installations - We have reverted the need to be logged into Overwolf in order download and install apps.")),(0,r.mdx)("h3",{id:"game-events"},"Game events"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/events/minecraft"},"Minecraft"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New supported game"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/events/league-of-legends"},"LOL"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New updates under:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"match_info"))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/events/magic-the-gathering-arena"},"MTGA"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New updates under:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"game_info"))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/launchers/events/league-of-legends"},"LoL Launcher"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New updates under:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"clash")))))))}d.isMDXComponent=!0}}]);