"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{50414:(e,t,a)=>{a.d(t,{Z:()=>w});var o=a(25773),r=a(27378),l=a(62786),n=a(38944),i=a(70030),s=a(85056);const c=r.createContext({});function m(e){const{children:t,active:a}=e;return r.createElement(c.Provider,{value:a},t)}const p=e=>{const{setActive:t,itemName:a,imgSrc:o}=e,m=(0,r.useContext)(c),p=(0,l.Z)();return r.createElement("h2",{className:(0,n.Z)(i.Z.comparisonTable.headers.item,i.Z.comparisonTable.headers.header.index,{[i.Z.common.active]:p&&m===a,[i.Z.common.inactive]:p&&m!==a}),onClick:()=>t(a),role:p?"button":"heading","aria-label":`show/hide ${a} parameters`},r.createElement(s.Z,{imgSrc:o,alt:`${a} logo`}))},u=e=>{const t=e.target;if(!t.hasAttribute("data-tooltip"))return;if(t.parentElement?.classList.contains("is-open"))return;const a=e.target;let o=a.getAttribute("tooltip-position");const r=a.getAttribute("tooltip-size"),l=document.createElement("div");l.className=`tool-tip ${o} ${r}`,l.innerHTML=a.getAttribute("data-tooltip"),document.body.appendChild(l);let n,i,s=a.getBoundingClientRect();const c=l.getBoundingClientRect();let m=0,p=0;const u=window?window.innerWidth-14:0,d=window?window.innerHeight-14:0;switch(o){case"right":n=s.right,i=(Number(s.top)+Number(s.bottom))/2-l.offsetHeight/2,Number(s.right)+l.offsetWidth>document.documentElement.clientWidth&&(n=document.documentElement.clientWidth-l.offsetWidth);break;case"left":n=s.left-l.offsetWidth-16,i=(Number(s.top)+Number(s.bottom))/2-l.offsetHeight/2;break;case"bottom":n=Number(s.left)+(s.width-l.offsetWidth)/2,i=Number(s.bottom)+2;break;case"top":n=Number(s.left)+(s.width-l.offsetWidth)/2,i=Number(s.top)-l.offsetHeight}const v=u-n;v<c.width&&(m=c.width-v,n-=m);const g=d-i;"bottom"==o&&g<c.height&&(o="top",i=Number(s.top)-l.offsetHeight),("left"==o||"right"==o)&&g<c.height&&(p=c.height-g,i-=p),n=n<0?Number(s.left):n,i=i<0?Number(s.bottom):i,l.className=`tool-tip ${o} ${r}`,l.style.left=`${n}px`,l.style.top=`${i+pageYOffset}px`,l.style.setProperty("--pointer-offset-x",m-8+"px"),l.style.setProperty("--pointer-offset-y",p-8+"px")},d=()=>{if(document.querySelector(".tool-tip")){document.querySelectorAll(".tool-tip").forEach((e=>{e.remove()}))}},v=e=>{const{text:t,position:a="top",size:o=""}=e,n="tool-tip-info-icon",i=(0,l.Z)(),s=()=>{d()},c=e=>{e.target.className!==n&&d()};return(0,r.useEffect)((()=>{window&&window.addEventListener("scroll",s),document.addEventListener("mousedown",c)}),[]),r.createElement(r.Fragment,null,i&&r.createElement("button",{className:"tool-tip-info-icon","data-tooltip":t,"tooltip-position":a,"tooltip-size":o,onClick:u},r.createElement("svg",{className:"tool-tip-icon"},r.createElement("use",{href:"/img/sprite.svg#info"}))),!i&&r.createElement("button",{className:n,"data-tooltip":t,"tooltip-position":a,"tooltip-size":o,onMouseOver:u,onMouseOut:d,onFocus:u,onBlur:d},r.createElement("svg",{className:"tool-tip-icon"},r.createElement("use",{href:"/img/sprite.svg#info"}))))},g=r.createContext({});function h(e){const{children:t,names:a}=e;return r.createElement(g.Provider,{value:a},t)}const b=e=>{const{title:t,tooltipData:a,values:o}=e,s=(0,r.useContext)(g),m=(0,l.Z)(),p=(0,r.useContext)(c);return r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.row.values.index)},r.createElement("h4",{className:(0,n.Z)(i.Z.comparisonTable.row.values.title)},t,a&&r.createElement(v,a)),Object.keys(o).map((e=>{const a=o[e];return r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.row.values.text,{[i.Z.common.inactive]:m&&p!==e,[i.Z.comparisonTable.row.values.green]:"green"===a.colorOverride,[i.Z.comparisonTable.row.values.red]:"red"===a.colorOverride}),key:e,title:`${s[e]} ${t}`},a.text,a.tooltipData&&r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.row.values.toolTipContainer)},r.createElement(v,a.tooltipData)))})))},f=e=>{const{title:t,tooltipData:a}=e;return r.createElement("h3",{className:(0,n.Z)(i.Z.comparisonTable.row.title.index)},t,a&&r.createElement(v,a))},E=e=>{const{type:t}=e;return r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.row.index)},"value"===t?r.createElement(b,e):r.createElement(f,e))},w=e=>{const{comparisonText:t,tableScheme:a,openByDefault:s=!1,large:c=!1}=e,[u,d]=(0,r.useState)(a.defaultItem),[v,g]=(0,r.useState)(s),b=(0,r.useRef)(null),f=(0,l.Z)(),w=()=>{g((e=>!e));let e=-180;if(f&&(e=-160),b&&window){const t=b.current.getBoundingClientRect().top+window?.scrollY+e;window?.scrollTo({top:t,behavior:"smooth"})}};return r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.index)},r.createElement(h,{names:a.displayNames},r.createElement(m,{active:u},r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.button.index,i.Z.comparisonTable.button.open,{[i.Z.common.inactive]:v,[i.Z.comparisonTable.button.large]:c})},r.createElement("button",{className:(0,n.Z)(i.Z.comparisonTable.button.button,i.Z.common.buttonSecondary),onClick:w},"Open features comparison")),r.createElement("section",{className:(0,n.Z)(i.Z.comparisonTable.section)},r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.transition,{[i.Z.common.active]:v,[i.Z.common.inactive]:!v}),ref:b},r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.content)},r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.headers.index)},r.createElement("h2",{className:(0,n.Z)(i.Z.comparisonTable.headers.item,i.Z.comparisonTable.headers.title)},t),Object.keys(a.items).map((e=>{const t=a.items[e];return r.createElement(p,(0,o.Z)({},t,{key:t.itemName,setActive:d}))}))),a.rows.map((e=>r.createElement(E,(0,o.Z)({key:e.title},e)))))),r.createElement("div",{className:(0,n.Z)(i.Z.comparisonTable.button.index,i.Z.comparisonTable.button.close,{[i.Z.common.inactive]:!v})},r.createElement("button",{className:(0,n.Z)(i.Z.comparisonTable.button.button,i.Z.common.buttonSecondary),onClick:w},"Close features comparison"))))))}},62786:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(58357);const r=()=>"mobile"===(0,o.i)()},85056:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(27378),r=a(14034),l=a(62786);const n=e=>{const{imgSrc:t,alt:a}=e,n=(0,l.Z)(),i=t.replace("${platform}",n?"mobile":"desktop");return o.createElement(r.Z,{alt:a,sources:{dark:i?.replace("${theme}","dark"),light:i?.replace("${theme}","light")}})}},9318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(27378),r=a(93317);const l=e=>{const{}=e;return o.createElement("section",{className:"hero-section"},o.createElement("h1",null,"Create apps for PC gamers"),o.createElement("p",null,"Overlay, real-time game data, auto patching, Anti-Cheat & ToS compliance, and so much more"))},n=e=>{const{}=e,[t,a]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),n=()=>{a((e=>!e))},i=()=>{l((e=>!e))};return o.createElement("section",{className:"services-section"},o.createElement("ul",{className:"services-inner"},o.createElement("li",{className:"service-item "+(t?"btn-hover":"")},o.createElement("div",{className:"assets"},o.createElement("img",{src:"/img/home-2023/platform-app-bg.webp",alt:"Overwolf Platform App",className:"platform-app-bg bg",width:512,height:280}),o.createElement("img",{src:"/img/home-2023/platform-app.webp",alt:"Overwolf Platform App",className:"platform-app symbol"})),o.createElement("div",{className:"info"},o.createElement("h2",null,"Overwolf Platform"),o.createElement("p",null,"Create powerful desktop apps and game overlays, built with 100% pure JavaScript."),o.createElement("a",{href:"/start/getting-started",className:"btn-primary",onMouseEnter:n,onMouseLeave:n},"Explore"),o.createElement("ul",{className:"app-info-list"},o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#monetization"})),"Monetization (Ads, Subscriptions)"),o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#in-game-overlay"})),"In-game overlay"),o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#real-time-game-events"})),"Real time Game Data for > 40 Games")))),o.createElement("li",{className:"service-item "+(r?"btn-hover":"")},o.createElement("div",{className:"assets"},o.createElement("img",{src:"/img/home-2023/electron-app-bg.webp",alt:"Overwolf Electron App",className:"electron-app-bg bg",width:512,height:280}),o.createElement("img",{src:"/img/home-2023/electron-app.webp",alt:"Overwolf Electron App",className:"electron-app symbol"})),o.createElement("div",{className:"info"},o.createElement("h2",null,"Overwolf Electron"),o.createElement("p",null,"Leverage an empowered"," ",o.createElement("a",{target:"_blank",href:"https://www.electronjs.org/",rel:"noreferrer"},"Electron.js")," ","framework, to make your existing apps even better!"),o.createElement("a",{href:"/tools/ow-electron",className:"btn-primary",onMouseEnter:i,onMouseLeave:i},"Explore"),o.createElement("ul",{className:"app-info-list"},o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#monetization"})),"Monetization (Ads, Subscriptions)"),o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#in-game-overlay"})),"In-game overlay"),o.createElement("li",null,o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#real-time-game-events"})),"Real time Game Data for > 40 Games"))))))},i=e=>{const{}=e;return(0,o.useEffect)((()=>{(()=>{let e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),setTimeout((()=>{let e=e=>({container:document.getElementById(e),path:`/img/home-2023/json/${e}.json`,renderer:"svg",loop:!1,autoplay:!1,name:e});const t=bodymovin.loadAnimation(e("prepare")),a=bodymovin.loadAnimation(e("build")),o=bodymovin.loadAnimation(e("release")),r=bodymovin.loadAnimation(e("growth"));document.querySelectorAll(".documentation-list li a").forEach((e=>{e.addEventListener("mouseenter",(l=>{switch(e.querySelector("div").id){case"prepare":t.setDirection(1),t.play();break;case"build":a.setDirection(1),a.play();break;case"release":o.setDirection(1),o.play();break;case"growth":r.setDirection(1),r.play()}})),e.addEventListener("mouseleave",(l=>{switch(e.querySelector("div").id){case"prepare":t.setDirection(-1),t.stop();break;case"build":a.setDirection(-1),a.stop();break;case"release":o.setDirection(-1),o.stop();break;case"growth":r.setDirection(-1),r.stop()}}))}))}),500)})()}),[]),o.createElement("section",{className:"documentation-section"},o.createElement("h3",null,"Documentation"),o.createElement("p",null,"Everything you may need in your quest to build great apps"),o.createElement("ul",{className:"documentation-list"},o.createElement("li",null,o.createElement("a",{href:"/start/getting-started"},o.createElement("h4",null,"Prepare"),o.createElement("p",null,"App creation is a journey. And every journey starts with a plan."),o.createElement("div",{className:"anim-icon",id:"prepare"}),o.createElement("img",{src:"/img/home-2023/server.svg",loading:"lazy",alt:"Prepare"}))),o.createElement("li",null,o.createElement("a",{href:"/start/getting-started/app-creation-process#build"},o.createElement("h4",null,"Build"),o.createElement("p",null,"With a plan in hand, you are now ready to start building your app."),o.createElement("div",{className:"anim-icon",id:"build"}),o.createElement("img",{src:"/img/home-2023/anvil.svg",loading:"lazy",alt:"Build"}))),o.createElement("li",null,o.createElement("a",{href:"/start/getting-started/app-creation-process#release"},o.createElement("h4",null,"Release"),o.createElement("p",null,"Your app is ready, and so are you. Now, it is time to share it with the world!"),o.createElement("div",{className:"anim-icon",id:"release"}),o.createElement("img",{src:"/img/home-2023/flag.svg",loading:"lazy",alt:"Release"}))),o.createElement("li",null,o.createElement("a",{href:"/start/getting-started/app-creation-process#grow"},o.createElement("h4",null,"Grow"),o.createElement("p",null,"Your app is released, but the journey has only just begun!"),o.createElement("div",{className:"anim-icon",id:"growth"}),o.createElement("img",{src:"/img/home-2023/trophy.svg",loading:"lazy",alt:"Growth"})))))},s=e=>{const{}=e,t=(0,o.useRef)(null),a=(0,o.useRef)(null);(0,o.useEffect)((()=>{t.current.pause(),a.current.pause()}),[]);return o.createElement("section",{className:"community-section"},o.createElement("div",{className:"discord-community",onMouseEnter:()=>{t.current.play()}},o.createElement("div",{className:"info"},o.createElement("svg",null,o.createElement("use",{href:"/img/sprite.svg#discord-big"})),o.createElement("h4",null,"Join our community"),o.createElement("p",null,"Join our Discord community where you can interact with Overwolf staff and other Overwolf app developers in real-time."),o.createElement("a",{href:"https://discord.com/invite/overwolf-developers",target:"_blank",className:"btn-secondary"},"Join")),o.createElement("div",{className:"assets"},o.createElement("video",{className:"sign-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:t},o.createElement("source",{src:"/img/home-2023/video/sign.webm",type:"video/webm"})))),o.createElement("div",{className:"game-developer",onMouseEnter:()=>{a.current.play()}},o.createElement("div",{className:"info"},o.createElement("h4",null,"Game developer?"),o.createElement("p",null,"Community is power and a driver for retention. Give your community tools to create valuable in-game content for your game with the Overwolf Game Events SDK."),o.createElement("a",{href:"/topics/integrations/events-sdk-for-game-developers",className:"btn-secondary"},"Learn more")),o.createElement("div",{className:"assets"},o.createElement("video",{className:"compass-video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:a},o.createElement("source",{src:"/img/home-2023/video/compass.webm",type:"video/webm"})))))};var c=a(34979);const m=e=>o.createElement(r.Z,{title:"Easily create apps for PC games on the Overwolf framework",description:"Easily create apps for PC games on the Overwolf framework"},o.createElement("main",{id:"content",className:"main-content"},o.createElement(l,null),o.createElement(n,null),o.createElement(c.Z,{large:!0}),o.createElement(i,null),o.createElement(s,null)))},34979:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(25773),r=a(27378),l=a(50414);const n=e=>r.createElement(l.Z,(0,o.Z)({comparisonText:"Feature Comparison"},e,{tableScheme:{defaultItem:"ow-platform",displayNames:{"ow-platform":"Overwolf Platform","ow-electron":"Electron Platform"},items:{"ow-platform":{itemName:"ow-platform",imgSrc:"/img/presets/comparison-table/framework-comparison-table/ow-platform-logo-${platform}.svg"},"ow-electron":{itemName:"ow-electron",imgSrc:"/img/presets/comparison-table/framework-comparison-table/ow-electron-logo-${platform}.svg"}},rows:[{type:"title",title:"Performance",tooltipData:{text:"All performance benchmarks were measured using an `AMD Ryzen 5 5600X 6-Core Processor`, and include the total overhead for running a simple App displaying a simple window."}},{type:"value",title:"CPU Impact (Idle)",values:{"ow-platform":{text:"0.2%"},"ow-electron":{text:"0.1%"}}},{type:"value",title:"CPU Impact (Avg Window Interaction)",values:{"ow-platform":{text:"3%"},"ow-electron":{text:"0.5%"}}},{type:"value",title:"RAM Consumption (Peak)",values:{"ow-platform":{text:"420 MB"},"ow-electron":{text:"380 MB"}}},{type:"value",title:"Total Running Processes",values:{"ow-platform":{text:"9"},"ow-electron":{text:"7"}}},{type:"title",title:"Growth and Support"},{type:"value",title:"Analytics",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Marketing Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Funding Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Product Design and Development",tooltipData:{text:"Branding, UI/UX, Development, Commercial design."},values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Developer Support",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Appstore Presence + Discoverability",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Own Branding",values:{"ow-platform":{text:"Yes",colorOverride:"green",tooltipData:{text:"OW-Native offers mixed branding (Overwolf + app) during installation, while OW-Electron offers 100% app branding."}},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"title",title:"Tech"},{type:"value",title:"Overlay SDK (1500+ Games)",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Realtime Game Events API",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Ad Fraud Protection",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Dev Console",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Yes",colorOverride:"green"}}},{type:"value",title:"Installer",values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"Optional"}}},{type:"value",title:"Coupled with Overwolf Client",tooltipData:{text:"OW-Native requires Overwolf client installation to run the app, while OW-Electron doesn't require the client at all - the flow is entirely up to the app."},values:{"ow-platform":{text:"Yes",colorOverride:"green"},"ow-electron":{text:"No"}}},{type:"title",title:"Terms and Conditions"},{type:"value",title:"Ads Revshare",values:{"ow-platform":{text:"70/30"},"ow-electron":{text:"70/30"}}},{type:"value",title:"Subscriptions Revshare",values:{"ow-platform":{text:"85/15"},"ow-electron":{text:"85/15"}}}]}}))},70030:(e,t,a)=>{a.d(t,{Z:()=>o});const o={common:{collapsible:"ow-theme-collapsible",desktopOnly:"desktop-only",mobileOnly:"mobile-only",navigateWithKeyboard:"navigation-with-keyboard",lightTheme:"light",active:"active",inactive:"inactive",buttonSecondary:"btn-secondary"},sidebar:{index:"ow-theme-sidebar",hidden:"hidden",container:{wrapper:"sidebar-wrapper",index:"sidebar-container",collapsed:"collapsed",items:{common:{current:"current",hidden:"hidden",selectable:"selectable",active:"active"},category:{spacer:"spacer",collapseCell:"collapse-cell",showCaret:"show-caret",tagCategory:"tag-category"},link:{index:"label-cell",fallback:"fallback",link:"link",label:"label"},html:{index:"html-item"}}}},comparisonTable:{index:"comparison-table",button:{index:"comparison-table-button-container",button:"comparison-table-button",open:"open-button",large:"large",close:"close-button"},section:"comparison-table-section",transition:"comparison-table-transition",content:"comparison-table-content",headers:{index:"comparison-table-headers",item:"header-item",title:"title",header:{index:"comparison-header"}},row:{index:"comparison-row",title:{index:"comparison-group-title"},values:{index:"comparison-values",title:"comparison-title",text:"comparison-text",green:"green",red:"red",toolTipContainer:"tt-container"}},cell:{index:"comparison-cell"}}}}}]);