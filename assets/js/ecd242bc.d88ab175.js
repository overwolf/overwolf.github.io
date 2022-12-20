"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6895],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),c=function(e){return function(t){var r=p(t.components);return o.createElement(e,a({},t,{components:r}))}},p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,u=c["".concat(l,".").concat(m)]||c[m]||b[m]||a;return r?o.createElement(u,i(i({ref:t},d),{},{components:r})):o.createElement(u,i({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={id:"enable-dev-tools",image:"/img/embed/api-best-practices.jpg",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"topics/best-practices/enable-dev-tools",id:"topics/best-practices/enable-dev-tools",title:"Enable Developer Tools",description:"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default.",source:"@site/pages/docs/topics/best-practices/enable-dev-tools.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/enable-dev-tools",permalink:"/topics/best-practices/enable-dev-tools",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/enable-dev-tools.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"enable-dev-tools",image:"/img/embed/api-best-practices.jpg",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Electron Migration",permalink:"/topics/best-practices/electron-migration"},next:{title:"Exclusive Mode Overlay",permalink:"/topics/best-practices/exclusive-mode"}},s={},d=[{value:"How to enable dev tools",id:"how-to-enable-dev-tools",level:2},{value:"Command line",id:"command-line",level:3},{value:"Windows registry",id:"windows-registry",level:3},{value:"Download registry key",id:"download-registry-key",level:4},{value:"Restart your machine",id:"restart-your-machine",level:4}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default. "),(0,n.mdx)("p",null,"You can toggle this feature on or off in two ways: through the command line, or the windows registry."),(0,n.mdx)("admonition",{type:"tip"},(0,n.mdx)("p",{parentName:"admonition"},"The recommended and easiest way to enable Chrome Developer Tools is to ",(0,n.mdx)("a",{parentName:"p",href:"#windows-registry"},"add a registry key"),".")),(0,n.mdx)("h2",{id:"how-to-enable-dev-tools"},"How to enable dev tools"),(0,n.mdx)("p",null,"There are two ways to toggle a feature (ordered by precedence): command line, or registry."),(0,n.mdx)("h3",{id:"command-line"},"Command line"),(0,n.mdx)("p",null,"To ",(0,n.mdx)("strong",{parentName:"p"},"enable")," the feature through the command line: ",(0,n.mdx)("em",{parentName:"p"},(0,n.mdx)("inlineCode",{parentName:"em"},'overwolf.exe --ow-enable-features="%feature1%,%feature2%')),"."),(0,n.mdx)("p",null,"To ",(0,n.mdx)("strong",{parentName:"p"},"disable"),": ",(0,n.mdx)("em",{parentName:"p"},(0,n.mdx)("inlineCode",{parentName:"em"},'overwolf.exe --ow-disable-features="%feature1%,%feature2%')),"."),(0,n.mdx)("p",null,"Example:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-powershell"},"overwolf.exe --ow-enable-features=enable-dev-tools\n")),(0,n.mdx)("h3",{id:"windows-registry"},"Windows registry"),(0,n.mdx)("p",null,"As mentioned earlier, the easiest way to toggle the feature is by adding a registry key."),(0,n.mdx)("p",null,"This method is also not affected by a client update - once you enable a feature through the registry (for example - enabled the dev tools) - it's enabled, even if there was a client update."),(0,n.mdx)("p",null,"Uninstalling the OW client, removes the registry key."),(0,n.mdx)("p",null,"Note that the command line got higher precedence than the registry, so if it explicitly disabled this feature, the registry change will be ignored."),(0,n.mdx)("p",null,"To enable a feature through the registry, you should add it under the ","[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]","\nnode."),(0,n.mdx)("p",null," For example, enable the dev tools feature:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-powershell"},'[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]\n"enable-features"="enable-dev-tools"\n')),(0,n.mdx)("h4",{id:"download-registry-key"},"Download registry key"),(0,n.mdx)("p",null," To enable the developer tools on your OW client, you can save ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/community-gists/blob/master/enable-dev-tools.reg"},"this file")," to your machine (make sure to save it with the *.reg extension), and run it."),(0,n.mdx)("h4",{id:"restart-your-machine"},"Restart your machine"),(0,n.mdx)("p",null,"After adding the registry key, if the dev tools still do not work, a restart of your machine may be required."))}p.isMDXComponent=!0}}]);