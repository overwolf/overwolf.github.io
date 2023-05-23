"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4339],{35318:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>s,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),s=r,u=d["".concat(p,".").concat(s)]||d[s]||f[s]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19228:(e,n,t)=>{t.d(n,{ZP:()=>p});var a=t(25773),r=(t(27378),t(35318));const o={toc:[{value:"Fetching your app ID",id:"fetching-your-app-id",level:4}]};function p(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Every Overwolf application (ow-electron or Overwolf platform), has a unique app id. This unique id is automatically generated, and is based on the app's name,\nand the app's author's name."),(0,r.mdx)("p",null,"In ",(0,r.mdx)("inlineCode",{parentName:"p"},"ow-electron"),", these fields correspond to the following fields in the package.json file:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"App name - The ",(0,r.mdx)("inlineCode",{parentName:"li"},"productName")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"name")," properties"),(0,r.mdx)("li",{parentName:"ul"},"App author - The ",(0,r.mdx)("inlineCode",{parentName:"li"},"name")," field under the ",(0,r.mdx)("inlineCode",{parentName:"li"},"author")," field.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="Partial package.json with the relevant fields"',title:'"Partial',"package.json":!0,with:!0,the:!0,relevant:!0,'fields"':!0},'{\n  ...\n  "name": "ow-electron-sample-app",\n  ...\n  "author": {\n    "name": "Overwolf"\n  },\n  ...\n  "build": {\n    ...\n    "productName": "ow-electron-sample-app",\n    ...\n  },\n  ...\n}\n')),(0,r.mdx)("h4",{id:"fetching-your-app-id"},"Fetching your app ID"),(0,r.mdx)("p",null,"Once your app has loaded, you can fetch the app ID through the API as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import app from 'electron';\n...\napp.whenReady().then(() => {\n  const appID = process.env.OVERWOLF_APP_UID;\n});\n")),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Note that this environment variable will only exist once the app is ready.")))}p.isMDXComponent=!0},57766:(e,n,t)=>{t.d(n,{ZP:()=>p});var a=t(25773),r=(t(27378),t(35318));const o={toc:[]};function p(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="start and build command variants for @overwolf/ow-electron"',title:'"start',and:!0,build:!0,command:!0,variants:!0,for:!0,'@overwolf/ow-electron"':!0},'{\n  ...\n  "scripts": {\n    ...\n    "start:ow-electron": "ow-electron .",\n    "build:ow-electron": "ow-electron-builder --publish=never"\n  },\n  ...\n}\n')))}p.isMDXComponent=!0},88439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=t(25773),r=(t(27378),t(35318)),o=t(57766),p=t(19228);const i={id:"package",image:"/img/embed/api-docs.jpg",title:"package.json",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!1}},l=void 0,c={unversionedId:"api/electron/package/package",id:"api/electron/package/package",title:"package.json",description:"This page is only intended to serve as a quick reference to the package.json changes required to use @overwolf/ow-electron.",source:"@site/pages/docs/api/electron/package/package.mdx",sourceDirName:"api/electron/package",slug:"/api/electron/package/",permalink:"/api/electron/package/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/electron/package/package.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1668072666,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"package",image:"/img/embed/api-docs.jpg",title:"package.json",sidebar_custom_props:{overwolf_platform:!1,electron_platform:!1}},sidebar:"api",previous:{title:"Consent Management Platform",permalink:"/api/electron/consent-management-platform/"},next:{title:"Overview",permalink:"/api/"}},d={},m=[{value:"Start and Build",id:"start-and-build",level:2},{value:"Author.name and App name",id:"authorname-and-app-name",level:2}],s={toc:m};function u(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{title:"About The CMP",type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"This page is only intended to serve as a quick reference to the package.json changes required to use ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@overwolf/ow-electron"},"@overwolf/ow-electron"),".\nFor more information about the the package itself, click ",(0,r.mdx)("a",{parentName:"p",href:"/tools/ow-electron"},"here"),".")),(0,r.mdx)("p",null,"Included is a list of important package.json changes that should be included when working with the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@overwolf/ow-electron"},"@overwolf/ow-electron")," package."),(0,r.mdx)("h2",{id:"start-and-build"},"Start and Build"),(0,r.mdx)("p",null,"Creating new npm ",(0,r.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"build")," commands, for testing and building your app:"),(0,r.mdx)(o.ZP,{mdxType:"StartAndBuild"}),(0,r.mdx)("h2",{id:"authorname-and-app-name"},"Author.name and App name"),(0,r.mdx)(p.ZP,{mdxType:"AppAndAuthorName"}))}u.isMDXComponent=!0}}]);