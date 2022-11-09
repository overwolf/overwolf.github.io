"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1934],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),u=function(e){return function(n){var t=c(n.components);return o.createElement(e,r({},n,{components:t}))}},c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(g,a(a({ref:n},s),{},{components:t})):o.createElement(g,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const r={id:"how-to-use-plugins-in-your-app",image:"/img/embed/api-best-practices.jpg",title:"Implementing Plug-ins",sidebar_label:"Plug-in Implementation",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,a={unversionedId:"topics/using-plugins/how-to-use-plugins-in-your-app",id:"topics/using-plugins/how-to-use-plugins-in-your-app",title:"Implementing Plug-ins",description:"When you finish developing your plugin, you should sign it to avoid security and deployment issues. Here you can find more on how to sign your code.",source:"@site/pages/docs/topics/using-plugins/how-to-use-plugins-in-your-app.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/how-to-use-plugins-in-your-app",permalink:"/topics/using-plugins/how-to-use-plugins-in-your-app",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-plugins/how-to-use-plugins-in-your-app.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"how-to-use-plugins-in-your-app",image:"/img/embed/api-best-practices.jpg",title:"Implementing Plug-ins",sidebar_label:"Plug-in Implementation",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Downloader plugin",permalink:"/topics/using-plugins/downloader-plugin"},next:{title:"Plugins overview",permalink:"/topics/using-plugins/plugins-overview"}},p={},s=[],u={toc:s};function c(e){let{components:n,...r}=e;return(0,i.mdx)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"important"},(0,i.mdx)("p",{parentName:"admonition"},"When you finish developing your plugin, you should sign it to avoid security and deployment issues. ",(0,i.mdx)("a",{parentName:"p",href:"https://makolyte.com/dotnet-how-to-sign-your-code-with-a-code-signing-certificate/"},"Here")," you can find more on how to sign your code.")),(0,i.mdx)("p",null,"To implement an existing plugin for use in your app, follow these steps:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Place the plugin\u2019s DLL file or files in your app\u2019s directory as well as inside your OPK when you create it.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Make sure the DLL is \"Unblocked\". Windows automatically marks downloaded DLLs as unsafe and you will have to go into file properties and check the 'Unblock' option there."))),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"alt-text",src:t(60504).Z,width:"215",height:"300"})),(0,i.mdx)("ol",{start:3},(0,i.mdx)("li",{parentName:"ol"},"Declare the plugin in your manifest.json under the ",(0,i.mdx)("inlineCode",{parentName:"li"},"data.extra-objects")," property. For example:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"data": {\n"extra-objects": {\n  "simple-io-plugin": {\n    "file": "files/plugins/simple-io-plugin.dll",\n    "class": "overwolf.plugins.simpleio.SimpleIOPlugin"\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"This tells Overwolf that your app contains a plugin named: ",(0,i.mdx)("inlineCode",{parentName:"p"},"simple-io-plugin")," which can be found inside the file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"files/plugins/simple-io-plugin.dll")," with the .NET class name ",(0,i.mdx)("inlineCode",{parentName:"p"},"overwolf.plugins.simpleio.SimpleIOPlugin.")),(0,i.mdx)("ol",{start:4},(0,i.mdx)("li",{parentName:"ol"},"Create an instance of this plug-in in your app's Javascript code:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"var _plugin = null;\noverwolf.extensions.current.getExtraObject(\u201csimple-io-plugin\u201d, (result) => {\n  if (result.status === \u201csuccess\u201d) {\n    _plugin = result.object;\n  }\n})\n")),(0,i.mdx)("p",null,"Now you can call on the plugin\u2019s functions, events or properties directly."),(0,i.mdx)("p",null,"Take a look at our ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/blob/master/sample_apps/process_manager"},"Process Manager plugin")," on GitHub, for an example of using plugins. You can find there a generic helper class for initializing the plugin, so the initializing will look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var plugin = new OverwolfPlugin("process-manager-plugin", true);\n')),(0,i.mdx)("p",null,"Feel free to use or modify it in your own app as needed."))}c.isMDXComponent=!0},60504:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/unblock_dll-5a6ae65815c89f3a12632f324495d605.jpg"}}]);