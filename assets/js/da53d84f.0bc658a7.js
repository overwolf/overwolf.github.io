"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6435],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,b=p["".concat(d,".").concat(u)]||p[u]||k[u]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const l={id:"websocket",image:"/img/embed/api-docs.jpg",title:"overwolf.web.websocket API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,i={unversionedId:"api/web/websocket",id:"api/web/websocket",title:"overwolf.web.websocket API",description:"web.websocket is an instance an Overwolf websocket. These can be created using the overwolf.web.createWebSocket() method.",source:"@site/pages/docs/api/web/websocket.mdx",sourceDirName:"api/web",slug:"/api/web/websocket",permalink:"/api/web/websocket",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/web/websocket.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1671959278,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{id:"websocket",image:"/img/embed/api-docs.jpg",title:"overwolf.web.websocket API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.web.webserver API",permalink:"/api/web/webserver"},next:{title:"overwolf.windows API",permalink:"/api/windows/"}},d={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"connect(callback)",id:"connectcallback",level:2},{value:"Version added: 0.129",id:"version-added-0129",level:4},{value:"send(message, callback)",id:"sendmessage-callback",level:2},{value:"Version added: 0.129",id:"version-added-0129-1",level:4},{value:"close()",id:"close",level:2},{value:"Version added: 0.129",id:"version-added-0129-2",level:4},{value:"onMessage()",id:"onmessage",level:2},{value:"Version added: 0.129",id:"version-added-0129-3",level:4},{value:"onError()",id:"onerror",level:2},{value:"Version added: 0.129",id:"version-added-0129-4",level:4},{value:"onOpen()",id:"onopen",level:2},{value:"Version added: 0.129",id:"version-added-0129-5",level:4},{value:"onClosed()",id:"onclosed",level:2},{value:"Version added: 0.129",id:"version-added-0129-6",level:4},{value:"MessageEvent Object",id:"messageevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-7",level:4},{value:"ErrorEvent Object",id:"errorevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-8",level:4},{value:"onClosedEvent Object",id:"onclosedevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-9",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"web.websocket")," is an instance an Overwolf websocket. These can be created using the ",(0,r.kt)("a",{parentName:"p",href:"/api/web#createwebsocketconnectionparams-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.web.createWebSocket()"))," method.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that it is best to use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API"},"native js WebSockets")," when you can.",(0,r.kt)("br",{parentName:"p"}),"\n","Our web sockets by-pass cert checks for localhost WSS servers like LCU (league of legends).")),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connectcallback"},"overwolf.web.websocket.connect()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sendmessage-callback"},"overwolf.web.websocket.send()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#close"},"overwolf.web.websocket.close()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onmessage"},"overwolf.web.websocket.onMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onerror"},"overwolf.web.websocket.onError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onopen"},"overwolf.web.websocket.onOpen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onclosed"},"overwolf.web.websocket.onClosed"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#errorevent-object"},"overwolf.web.websocket.ErrorEvent")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onclosedevent-object"},"overwolf.web.websocket.onClosedEvent")," Object")),(0,r.kt)("h2",{id:"connectcallback"},"connect(callback)"),(0,r.kt)("h4",{id:"version-added-0129"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Listens for requests on the given port.")),(0,r.kt)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"called with the status of the connection")))),(0,r.kt)("h2",{id:"sendmessage-callback"},"send(message, callback)"),(0,r.kt)("h4",{id:"version-added-0129-1"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"send message.")),(0,r.kt)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message to send")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("h2",{id:"close"},"close()"),(0,r.kt)("h4",{id:"version-added-0129-2"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Closes the websocket. It can be re-opened again.")),(0,r.kt)("h2",{id:"onmessage"},"onMessage()"),(0,r.kt)("h4",{id:"version-added-0129-3"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when the websocket receives an incoming message, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#messageevent-object"},"MessageEvent")," Object.")),(0,r.kt)("h2",{id:"onerror"},"onError()"),(0,r.kt)("h4",{id:"version-added-0129-4"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired on error, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#errorevent-object"},"ErrorEvent")," Object.")),(0,r.kt)("h2",{id:"onopen"},"onOpen()"),(0,r.kt)("h4",{id:"version-added-0129-5"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired on websocket connection Opened.")),(0,r.kt)("h2",{id:"onclosed"},"onClosed()"),(0,r.kt)("h4",{id:"version-added-0129-6"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when connection closed, with the following structure: ",(0,r.kt)("a",{parentName:"p",href:"#onclosedevent-object"},"onClosedEvent")," Object.")),(0,r.kt)("h2",{id:"messageevent-object"},"MessageEvent Object"),(0,r.kt)("h4",{id:"version-added-0129-7"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the message event object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../web#messagetype-enum"},"overwolf.web.enums.MessageType")," enum"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"errorevent-object"},"ErrorEvent Object"),(0,r.kt)("h4",{id:"version-added-0129-8"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the error event object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exception"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"onclosedevent-object"},"onClosedEvent Object"),(0,r.kt)("h4",{id:"version-added-0129-9"},"Version added: 0.129"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for the onClose event object.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);