"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4915],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){return function(t){var a=d(t.components);return r.createElement(e,i({},t,{components:a}))}},d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},24999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:165,image:"/img/embed/changelogs.jpg",title:"Version 0.165",sidebar_label:"0.165",sidebar_position:165,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/february/165",id:"api/changelogs/overwolf-platform/2021/february/165",title:"Version 0.165",description:"Note that iterations 163 to 165 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/2-february/165.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/2-february",slug:"/api/changelogs/overwolf-platform/2021/february/165",permalink:"/api/changelogs/overwolf-platform/2021/february/165",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/2-february/165.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:165,frontMatter:{id:"165",image:"/img/embed/changelogs.jpg",title:"Version 0.165",sidebar_label:"0.165",sidebar_position:165,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.162",permalink:"/api/changelogs/overwolf-platform/2021/january/162"},next:{title:"0.166",permalink:"/api/changelogs/overwolf-platform/2021/march/166"}},s={},p=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Docs",id:"docs",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Game events",id:"game-events",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Note that iterations 163 to 165 were combined into a single iteration.  "),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/media/videos#addwatermarksourcevideourl-watermarkurl-watermarkparams-callback"},"overwolf.media.videos.addWatermark()")," watermark file now supports absolute/local path to a file in the extension directory.  "),(0,n.mdx)("li",{parentName:"ul"},"Max recording resolution is now capped at 4K - OBS has issues capturing resolutions higher than that so we are temporarily limiting it until we can find a more permanent fix.")),(0,n.mdx)("h3",{id:"platform"},"Platform"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Increase max log file item to upload from 1 Mb to 3Mb (When using ",(0,n.mdx)("a",{parentName:"li",href:"/api/utils#uploadclientlogscallback"},"uploadClientLogs()"),")."),(0,n.mdx)("li",{parentName:"ul"},"Increase *.HTML dump limit log size to 5 Mb."),(0,n.mdx)("li",{parentName:"ul"},'Change Extension crash notification Text to: "%APP_NAME% has crashed".'),(0,n.mdx)("li",{parentName:"ul"},"Browser inGame dragging: stop the drag when alt+tab from game. Make sure we stop the dragging when OnDragEnd is triggered."),(0,n.mdx)("li",{parentName:"ul"},"New Overlay process: internal changes and enhancements. no further details will be released. Just mentioned here as it includes many internal changes."),(0,n.mdx)("li",{parentName:"ul"},"App Updates - Some major refactoring to how we update our apps mostly in regards to smarter phasing.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"When updating apps, it allows Overwolf to only download the part of the app that has changed, Overwolf then updates the app with these changes, saving a lot of time and bandwidth."),(0,n.mdx)("li",{parentName:"ul"},"Diff didn\u2019t work for apps that were being phased up until this iteration. But now it works."),(0,n.mdx)("li",{parentName:"ul"},"Downloading Phased Apps From The Store - Users will get the latest app version if they are part of that app\u2019s phasing when downloading it from the Appstore. Instead of getting the previous app version first, and\nonly then updating to the new version (which was the case until now)."))),(0,n.mdx)("li",{parentName:"ul"},"Windows Insider is no longer supported."),(0,n.mdx)("li",{parentName:"ul"},"Updated all the license text files Overwolf uses.")),(0,n.mdx)("h3",{id:"docs"},"Docs"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/topics/integrations/login-with-overwolf"},"SSO guide"),' - how to implement "login with Overwolf" button on your website.')),(0,n.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed: If a hotkey is defined in the manifest with no default key binding, ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#getcallback"},"hotkeys.get()"),"/attempting to set the hotkey would result in an error."),(0,n.mdx)("li",{parentName:"ul"},"The setting exit_overwolf_on_exit (can be set through ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings#setextensionsettingsextensionsettings-callback"},"overwolf.settings.setExtensionSettings()"),') no longer closes Overwolf when an app that was using that setting has crashed, however, it will still close Overwolf if the user has dismissed the crash notification or didn\'t click on the "Relaunch" button in that same notification.'),(0,n.mdx)("li",{parentName:"ul"},"Fixed an issue with the hotkeys API for apps that have their hotkeys defined in the manifest.json, but have no default binding.")),(0,n.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Soon.")),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/rainbow-six-siege"},"Rainbow Six: Siege"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New feature & updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"defuser"),(0,n.mdx)("li",{parentName:"ul"},"match_id"),(0,n.mdx)("li",{parentName:"ul"},"map_id"),(0,n.mdx)("li",{parentName:"ul"},"round_outcome_type"))),(0,n.mdx)("li",{parentName:"ul"},"'name' update is currently unavailable."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/apex-legends"},"Apex Legends"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New addition to update:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"roster")))))))}d.isMDXComponent=!0}}]);