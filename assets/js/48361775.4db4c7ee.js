"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3195],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){return function(t){var r=p(t.components);return a.createElement(e,l({},t,{components:r}))}},p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,g=m["".concat(o,".").concat(u)]||m[u]||s[u]||l;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={id:"logitech",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,i={unversionedId:"api/logitech/logitech",id:"api/logitech/logitech",title:"overwolf.logitech API",description:"An API for Logitech features.",source:"@site/pages/docs/api/logitech/logitech.mdx",sourceDirName:"api/logitech",slug:"/api/logitech/",permalink:"/api/logitech/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/logitech/logitech.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"logitech",image:"/img/embed/api-docs.jpg",title:"overwolf.logitech API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.io.paths API",permalink:"/api/io/paths"},next:{title:"overwolf.logitech.arx API",permalink:"/api/logitech/arx"}},d={},c=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getVersion(callback)",id:"getversioncallback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"getDevices(callback)",id:"getdevicescallback",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"LogitechData Object",id:"logitechdata-object",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"Logitech Device Object",id:"logitech-device-object",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"An API for Logitech features."),(0,n.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#getversioncallback"},"overwolf.logitech.getVersion()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#getdvicescallback"},"overwolf.logitech.getDevices()"))),(0,n.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#overwolflogitechlogitechdata-object"},"overwolf.logitech.overwolf.logitech.LogitechData")," Object"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#logitech-device-object"},"overwolf.logitech.Logitech Device")," Object")),(0,n.mdx)("h2",{id:"getversioncallback"},"getVersion(callback)"),(0,n.mdx)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Gets the current version of the Logitech Gaming Software.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"Called with the version of LGS currently installed")))),(0,n.mdx)("h2",{id:"getdevicescallback"},"getDevices(callback)"),(0,n.mdx)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Gets the currently installed Logitech devices.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"Called with the current device information")))),(0,n.mdx)("h2",{id:"logitechdata-object"},"LogitechData Object"),(0,n.mdx)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Container for Logitech data.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"minimal_lgs_version"),(0,n.mdx)("td",{parentName:"tr",align:null},"version Object (string wrapper)"),(0,n.mdx)("td",{parentName:"tr",align:null},"Minimal LGS version required for this app")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"arx"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"logitech/led#overwolflogitechledlogitecharxdata-object"},"LogitechArxData")," Object"),(0,n.mdx)("td",{parentName:"tr",align:null},"The Arx API data")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"led"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"logitech/led#overwolflogitechledlogitechleddata-object"},"LogitechLedData")," Object"),(0,n.mdx)("td",{parentName:"tr",align:null},"The LED API data")))),(0,n.mdx)("h2",{id:"logitech-device-object"},"Logitech Device Object"),(0,n.mdx)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Logitech device type.")),(0,n.mdx)("p",null,"No further info."))}p.isMDXComponent=!0}}]);