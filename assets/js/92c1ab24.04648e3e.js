"use strict";(self.webpackChunkengine=self.webpackChunkengine||[]).push([[4379],{35318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const l={id:"webserver",image:"/img/embed/api-docs.jpg",title:"overwolf.web.webserver API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/web/webserver",id:"api/web/webserver",title:"overwolf.web.webserver API",description:"web.webserver is an instance an Overwolf webserver. These can be created using the overwolf.web.createServer() method.",source:"@site/../pages/api/web/webserver.mdx",sourceDirName:"api/web",slug:"/api/web/webserver",permalink:"/api/web/webserver",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/pages/../pages/api/web/webserver.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1704128143,formattedLastUpdatedAt:"Jan 1, 2024",frontMatter:{id:"webserver",image:"/img/embed/api-docs.jpg",title:"overwolf.web.webserver API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.web API",permalink:"/api/web/"},next:{title:"overwolf.web.websocket API",permalink:"/api/web/websocket"}},s={},c=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"listen(callback)",id:"listencallback",level:2},{value:"Version added: 0.93",id:"version-added-093",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"close()",id:"close",level:2},{value:"Version added: 0.93",id:"version-added-093-1",level:4},{value:"onRequest",id:"onrequest",level:2},{value:"Version added: 0.93",id:"version-added-093-2",level:4},{value:"RequestEvent Object",id:"requestevent-object",level:2},{value:"Version added: 0.93",id:"version-added-093-3",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"web.webserver")," is an instance an Overwolf webserver. These can be created using the ",(0,a.kt)("a",{parentName:"p",href:"/api/web#createserverport-callback"},(0,a.kt)("inlineCode",{parentName:"a"},"overwolf.web.createServer()"))," method.")),(0,a.kt)("p",null,"The OW webserver is CORS enabled and sends the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"},"Access-Control-Allow-Origin")," headers to clients.  "),(0,a.kt)("p",null,"Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.  "),(0,a.kt)("p",null,"It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app."),(0,a.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#listencallback"},"overwolf.web.webserver.listen()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#close"},"overwolf.web.webserver.close()"))),(0,a.kt)("h2",{id:"events-reference"},"Events Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#onrequest"},"overwolf.web.webserver.onRequest"))),(0,a.kt)("h2",{id:"types-reference"},"Types Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#requestevent-object"},"overwolf.web.websocket.RequestEvent")," Object")),(0,a.kt)("h2",{id:"listencallback"},"listen(callback)"),(0,a.kt)("h4",{id:"version-added-093"},"Version added: 0.93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Listens for requests on the given port. ")),(0,a.kt)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,a.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,a.kt)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,a.kt)("p",null,"A callback function which will be called with the status of the request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "url": "http://localhost:7707/"\n}\n')),(0,a.kt)("h2",{id:"close"},"close()"),(0,a.kt)("h4",{id:"version-added-093-1"},"Version added: 0.93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Closes the web server. It can be re-opened again. ")),(0,a.kt)("h2",{id:"onrequest"},"onRequest"),(0,a.kt)("h4",{id:"version-added-093-2"},"Version added: 0.93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Fired when the web server receives an incoming request, with the following structure: ",(0,a.kt)("a",{parentName:"p",href:"#requestevent-object"},"RequestEvent")," Object.")),(0,a.kt)("h2",{id:"requestevent-object"},"RequestEvent Object"),(0,a.kt)("h4",{id:"version-added-093-3"},"Version added: 0.93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Container for the Requestevent object.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"contentType"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);