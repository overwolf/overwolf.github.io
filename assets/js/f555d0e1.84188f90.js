"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6136],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,u=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},43021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const i={id:208,image:"/img/embed/changelogs.jpg",title:"Version 0.208",sidebar_label:"0.208",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2022/september/208",id:"api/changelogs/overwolf-platform/2022/september/208",title:"Version 0.208",description:"* Note that iterations 205 to 208 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2022/september/208.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/september",slug:"/api/changelogs/overwolf-platform/2022/september/208",permalink:"/api/changelogs/overwolf-platform/2022/september/208",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2022/september/208.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1676814324,formattedLastUpdatedAt:"Feb 19, 2023",frontMatter:{id:"208",image:"/img/embed/changelogs.jpg",title:"Version 0.208",sidebar_label:"0.208",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.212",permalink:"/api/changelogs/overwolf-platform/2022/november/212"},next:{title:"0.204",permalink:"/api/changelogs/overwolf-platform/2022/august/204"}},p={},s=[{value:"Docs",id:"docs",level:3},{value:"Platform",id:"platform",level:3},{value:"API",id:"api",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Note that iterations 205 to 208 were combined into a single iteration.")),(0,n.kt)("h3",{id:"docs"},"Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added more page preview images"),(0,n.kt)("li",{parentName:"ul"},"New section on the website - ",(0,n.kt)("inlineCode",{parentName:"li"},"Tools"),", documenting the different tools provided by Overwolf (ow-electron, ow-cli, Developer's console, etc)."),(0,n.kt)("li",{parentName:"ul"},"Dev console docs have been updated to reflect the facelift, and can be found ",(0,n.kt)("a",{parentName:"li",href:"/tools/developers-console"},"here"),".")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#process_name"},(0,n.kt)("inlineCode",{parentName:"a"},"process_name"))," now defaults to the app's ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#meta-name"},(0,n.kt)("inlineCode",{parentName:"a"},"name")),"."),(0,n.kt)("li",{parentName:"ul"},"Enabled the CSS property ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"},(0,n.kt)("inlineCode",{parentName:"a"},"--aspect-ratio"))," as experimental."),(0,n.kt)("li",{parentName:"ul"},"Added the ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},(0,n.kt)("inlineCode",{parentName:"a"},"custom_modifier_key"))," property to ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#hotkeys-object"},(0,n.kt)("inlineCode",{parentName:"a"},"keybinds")),", allowing keybinds to utilize an extra, arbitrary, modifier key.")),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/settings/hotkeys#updatehotkey-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.settings.hotkeys.update()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows an app to update certain properties of keybinds during runtime. Specifically:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isPassThrough")," - Whether or not this keybind should allow passthrough."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"customModifierKeyCode")," - This keybind's (optional) arbitrary modifier key."))))),(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/os/tray#changeiconpath-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.os.tray.changeIcon()")),", ",(0,n.kt)("a",{parentName:"li",href:"/api/os/tray#restoreicon-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.os.tray.restoreIcon")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows an app to temporarily change its tray icon (repeatedly). Using ",(0,n.kt)("a",{parentName:"li",href:"/api/os/tray#restoreicon-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.os.tray.restoreIcon"))," will restore it back to its original ",(0,n.kt)("a",{parentName:"li",href:"/api/manifest#meta-tray_icon"},(0,n.kt)("inlineCode",{parentName:"a"},"tray_icon")),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Requires a tray item to already be created (",(0,n.kt)("a",{parentName:"strong",href:"/api/os/tray#setmenumenu-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.os.tray.setMenu()")),")!")))),(0,n.kt)("li",{parentName:"ul"},"New API - ",(0,n.kt)("a",{parentName:"li",href:"/api/io#watchfilefilepath-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.io.watchFile()")),", ",(0,n.kt)("a",{parentName:"li",href:"/api/io#stopwatchingfilefilepath-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.io.stopWatchingFile()")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allows an app to listen to ",(0,n.kt)("strong",{parentName:"li"},"changes")," occurring on a file, rather than just listening to additions/removals from its end."),(0,n.kt)("li",{parentName:"ul"},"The listener will stop if the file is renamed or deleted, or if ",(0,n.kt)("a",{parentName:"li",href:"/api/io#stopwatchingfilefilepath-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.io.stopWatchingFile()"))," is called."))),(0,n.kt)("li",{parentName:"ul"},"Updated API - Improved ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays"))," and ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming"))," error feedback:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#capturepastduration-futureduration-capturefinishedcallback-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.capture()"))," and ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.start()"))," will now return the new parameters ",(0,n.kt)("inlineCode",{parentName:"li"},"errorCode")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"errorDescription"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/streaming#streamResult-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.StreamResult"))," now returns the ",(0,n.kt)("inlineCode",{parentName:"li"},"streamId")," of the corresponding OBS stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#capturepastduration-futureduration-capturefinishedcallback-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.capture()"))," now returns ",(0,n.kt)("a",{parentName:"li",href:"/api/media/replays#replayresult-object"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.media.replays.StartReplayResult"))," to its callback, with more information about the capture."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#captureerrorcode-enum"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.enums.CaptureErrorCode")),", an enum of error codes returned when a capture fails. Of particular note is the ",(0,n.kt)("a",{parentName:"li",href:"/api/streaming#ransomwareprotection-note"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.streaming.enums.CaptureErrorCode.RansomwareProtection"))," code,\nwhich signals that Windows ransomware protection on folders is turned on and stopping Overwolf from writing to the capture folder. More information can be found ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/controlled-folders?view=o365-worldwide#windows-system-folders-are-protected-by-default"},"here"),".")))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue affecting app tray icons on the first install of the app."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where ",(0,n.kt)("a",{parentName:"li",href:"/api/utils#openfilepickerfilter-initialpath-callback"},(0,n.kt)("inlineCode",{parentName:"a"},"overwolf.utils.openFilePicker()"))," would throw an error when passed an  ",(0,n.kt)("inlineCode",{parentName:"li"},"initialPath"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where pressing a ",(0,n.kt)("inlineCode",{parentName:"li"},"press")," hotkey would interrupt an active ",(0,n.kt)("inlineCode",{parentName:"li"},"hold")," hotkey, resulting in ",(0,n.kt)("inlineCode",{parentName:"li"},'state: "up"')," never firing."),(0,n.kt)("li",{parentName:"ul"},"When an app is un-installed, its individual app channel setting will also get removed."),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where lifting a held hotkey was not properly detected if its modifier key was released first.")))}c.isMDXComponent=!0}}]);