"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6402],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(25773),n=(a(27378),a(35318));const i={id:"first-time-user-experience",image:"/img/embed/api-best-practices.jpg",title:"First time user experience",sidebar_label:"First time user experience",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,o={unversionedId:"topics/best-practices/first-time-user-experience",id:"topics/best-practices/first-time-user-experience",title:"First time user experience",description:"Overview",source:"@site/pages/docs/topics/best-practices/first-time-user-experience.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/first-time-user-experience",permalink:"/topics/best-practices/first-time-user-experience",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/first-time-user-experience.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"first-time-user-experience",image:"/img/embed/api-best-practices.jpg",title:"First time user experience",sidebar_label:"First time user experience",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Exclusive Mode Overlay",permalink:"/topics/best-practices/exclusive-mode"},next:{title:"Per-game settings",permalink:"/topics/best-practices/games-settings"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Home Screen",id:"home-screen",level:3},{value:"Desktop Usage",id:"desktop-usage",level:3},{value:"Tutorial",id:"tutorial",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("ImageBoxModal"),d=c("ImageSlider"),m={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Overwolf SDK enables you to create app windows both in-game and out of it, so you can craft an ongoing experience that provides value, increases retention and improves user experience. Your user's journey begins not when he starts playing, but right after he installs and first opens your app - this first encounter with your product should behave differently and introduce your app to the user in an engaging way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What makes for a great FTUE?")),(0,n.kt)("p",null,"FTUE or First Time User Experience is defined as what happens during the first activation or meeting of the user with your app. This special flow may last just a few seconds like in many mobile apps or landing pages, or can take hours or even days until completed like with more complex technical and business products. In our case, we usually refer to FTUE as the first launch and first session of a user with your app. Note that these two can be separated in time and context."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,"In this example we\u2019ll show you the ",(0,n.kt)("a",{parentName:"p",href:"https://www.overwolf.com/app/Colorfulstan-Legendary_Builds"},"Legendary Builds app"),", an app providing build recommendations for League of Legends players. There are two ways the users' first engagement with the app can go:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Out of game")," (on desktop) \u2013 The user opens the app by clicking in the Overwolf dock or the desktop icon after it was installed.")),(0,n.kt)(u,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(24995).Z,alt:"Legendary Builds"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"In-game")," \u2013 The app launches automatically when a LoL match starts.")),(0,n.kt)(d,{miniSlides:!0,mdxType:"ImageSlider"},(0,n.kt)("img",{src:a(23493).Z,alt:"Legendary Builds"}),(0,n.kt)("img",{src:a(26675).Z,alt:"Legendary Builds"})),(0,n.kt)("p",null,"The app's UX and design should cover all possibilities for first encounters \u2013 in game, on desktop, and any other contact points that need to be prepared for first time users. Each scenario can and should be designed to provide the best first impression and communicate with users in the way you want them to."),(0,n.kt)("h3",{id:"home-screen"},"Home Screen"),(0,n.kt)("p",null,"App creators should invest time and effort in designing the app\u2019s home or main screen.\nThe Home screen is what the user will see almost every time he opens the app, especially on desktop (after completing the FTUE)."),(0,n.kt)("p",null,"Example for a home screen in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.overwolf.com/app/LoLwiz"},"LoLwiz")," app:"),(0,n.kt)(u,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(2173).Z,alt:"Lolwiz"})),(0,n.kt)("h3",{id:"desktop-usage"},"Desktop Usage"),(0,n.kt)("p",null,"When starting to use the app while not in-game, in desktop mode, the user has more time and patience to investigate your app, so you should cover everything they might need or want to know before the game starts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App status \u2013 Is it working? Any known issues? Down for maintenance? User should know."),(0,n.kt)("li",{parentName:"ul"},"User stats, profile or recent match recap."),(0,n.kt)("li",{parentName:"ul"},"Last match results or match history."),(0,n.kt)("li",{parentName:"ul"},"\u201cBeta\u201d version label if required."),(0,n.kt)("li",{parentName:"ul"},"Any functional requirements of the app to properly operate, such as mandatory registration or settings that must be manually chosen."),(0,n.kt)("li",{parentName:"ul"},"A tutorial onboarding users to your app and teaching the basics."),(0,n.kt)("li",{parentName:"ul"},"Links to relevant information such as video tutorial, FAQs or documentation."),(0,n.kt)("li",{parentName:"ul"},"Link to your app's settings screen."),(0,n.kt)("li",{parentName:"ul"},"Show the app's current version number, this can be inside a settings tab."),(0,n.kt)("li",{parentName:"ul"},"Log-in interface if required.")),(0,n.kt)("p",null,"Please keep in mind that each app is different and should figure out the best way to provide user value on desktop."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples:")),(0,n.kt)("p",null,"Some apps can offer value even while the game is not running yet. Legendary Builds is an example for an app that lets players check pro player builds before launching the game. Since they can prepare in advance and enter the game ready to fight, there's value here even while in desktop mode."),(0,n.kt)(u,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(24995).Z,alt:"Legendary Builds"})),(0,n.kt)("p",null,"Another example is ",(0,n.kt)("a",{parentName:"p",href:"https://www.overwolf.com/app/overwolf-killer_voices"},"Killer Voices"),", an app that allows the user to select different voice and announcer packs for different games. This app has features that are MEANT for desktop usage rather than in-game, since selecting your favorite voice pack should happen before ever starting the game."),(0,n.kt)(u,{mdxType:"ImageBoxModal"},(0,n.kt)("img",{src:a(48917).Z,alt:"Killer Voices"})),(0,n.kt)("h3",{id:"tutorial"},"Tutorial"),(0,n.kt)("p",null,"Users can use instructions and an easy onboarding experience, and a good tutorial can go a long way towards that goal. A good tutorial will teach all app basics and showcase how to get value, while requiring as little of the user's time and attention as possible. A great tutorial will not even be noticed, embedded in the flow of usage seamlessly."),(0,n.kt)("p",null,"Tips to keep in mind while crafting your app's tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Never interfere with the game itself. When the game starts \u2013 respect it!"),(0,n.kt)("li",{parentName:"ul"},"Focus on pointing out the main source of value as fast as you can, leave the rest for later."),(0,n.kt)("li",{parentName:"ul"},"Texts, images and arrows are OK, but not more than that. If you want to do better, try to let the user PERFORM the actions instead of telling or showing them."),(0,n.kt)("li",{parentName:"ul"},"Keep your tutorial as short as possible."),(0,n.kt)("li",{parentName:"ul"},"Most apps do at least one thing really well. If you can\u2019t point it out and explain it in a single sentence, you either lack focus or your tutorial needs more work and thought.")))}h.isMDXComponent=!0},23493:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/builds-are-ready-2b2bc310cb14caed08e29ad0a6f65044.png"},24995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/champ-select-404b17ca85786c3f52fbea339fb27e36.png"},48917:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/killer-voices123-672fcdd60df0fcd0a8fc3fbba776c171.png"},26675:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lbingame113-10725906fdea0b9b9eea18e8c957cae3.png"},2173:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lolwiz-home-27ca5c4cbfb847aab667369ba79f6203.jpg"}}]);