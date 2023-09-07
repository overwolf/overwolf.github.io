"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7169],{35318:(e,t,s)=>{s.d(t,{Zo:()=>l,kt:()=>f});var n=s(27378);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(s),d=i,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return s?n.createElement(f,r(r({ref:t},l),{},{components:s})):n.createElement(f,r({ref:t},l))}));function f(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=s.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<a;p++)r[p]=s[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},52514:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=s(25773),i=(s(27378),s(35318));const a={id:"subscriptions-flow",image:"/img/embed/getting-started.jpg",title:"Subscriptions user flow",sidebar_label:"Subscriptions user flow",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},r=void 0,o={unversionedId:"start/monetize-with-subs/subscriptions-flow",id:"start/monetize-with-subs/subscriptions-flow",title:"Subscriptions user flow",description:"Subscribing from the app's page",source:"@site/pages/docs/start/monetize-with-subs/subscriptions-flow.mdx",sourceDirName:"start/monetize-with-subs",slug:"/start/monetize-with-subs/subscriptions-flow",permalink:"/start/monetize-with-subs/subscriptions-flow",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-subs/subscriptions-flow.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"subscriptions-flow",image:"/img/embed/getting-started.jpg",title:"Subscriptions user flow",sidebar_label:"Subscriptions user flow",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"start",previous:{title:"Advertising Policy",permalink:"/start/monetize-your-app/advertising/policy"},next:{title:"Integrate subscriptions",permalink:"/start/monetize-with-subs/subscriptions-integration"}},c={},p=[{value:"Subscribing from the app&#39;s page",id:"subscribing-from-the-apps-page",level:2},{value:"Subscribing using the in-app button",id:"subscribing-using-the-in-app-button",level:2},{value:"Features screen and Checkout flow",id:"features-screen-and-checkout-flow",level:2},{value:"Manage active subscriptions",id:"manage-active-subscriptions",level:2},{value:"Uninstall / Cancel subscriptions",id:"uninstall--cancel-subscriptions",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=l("ImageBoxModal"),b=l("ImageSlider"),d={toc:p};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"subscribing-from-the-apps-page"},"Subscribing from the app's page"),(0,i.kt)("p",null,'The easiest way for a user to subscribe is going to that app\u2019s page in the Appstore and clicking the "Subscribe" button.'),(0,i.kt)(u,{mdxType:"ImageBoxModal"},(0,i.kt)("img",{src:s(9718).Z,alt:"One App page - Unsubscribed"})),(0,i.kt)("h2",{id:"subscribing-using-the-in-app-button"},"Subscribing using the in-app button"),(0,i.kt)("p",null,"Developers can choose to implement an in-app subscribe button leading directly to the subscription flow."),(0,i.kt)(u,{mdxType:"ImageBoxModal"},(0,i.kt)("img",{src:s(30881).Z,alt:"outplayed"})),(0,i.kt)("h2",{id:"features-screen-and-checkout-flow"},"Features screen and Checkout flow"),(0,i.kt)("p",null,'After clicking "Subscribe", the user reaches a detailed plan page that breaks down all plan features.\nCurrently, each app can only have one plan, but in the future multiple plans will be possible, each with different own feature sets.'),(0,i.kt)(b,{mdxType:"ImageSlider"},(0,i.kt)("img",{src:s(51093).Z,alt:"Subscription features page"}),(0,i.kt)("img",{src:s(69716).Z,alt:"Checkout flow"}),(0,i.kt)("img",{src:s(98139).Z,alt:"On-screen purchase confirmation"}),(0,i.kt)("img",{src:s(61019).Z,alt:"One App page - Subscribed"}),(0,i.kt)("img",{src:s(83439).Z,alt:"Email purchase confirmation"})),(0,i.kt)("h2",{id:"manage-active-subscriptions"},"Manage active subscriptions"),(0,i.kt)("p",null,"Subbed apps appear in a new settings page where users can easily monitor or cancel their subscriptions as they please. Cancellation takes place at the end of the current subscription period."),(0,i.kt)(u,{mdxType:"ImageBoxModal"},(0,i.kt)("img",{src:s(33414).Z,alt:"settings-active-subs"})),(0,i.kt)("h2",{id:"uninstall--cancel-subscriptions"},"Uninstall / Cancel subscriptions"),(0,i.kt)("p",null,"When a user begins to uninstall Overwolf, they will get a notification warning them about active subscriptions that they might want to cancel for that app."),(0,i.kt)(b,{miniSlides:!0,mdxType:"ImageSlider"},(0,i.kt)("img",{src:s(10922).Z,alt:"uninstall-subs-notification"}),(0,i.kt)("img",{src:s(10875).Z,alt:"uninstall-subs-notification-popup"}),(0,i.kt)("img",{src:s(64747).Z,alt:"cancellation-mail"})))}f.isMDXComponent=!0},64747:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cancellation-mail-7b0bbb044df670687baf63a3181ddc0a.jpg"},51093:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/features-2733af2240501e0443e217fde524e4bd.jpg"},61019:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/one-app-subscribed-489f6bdc62e8046a95667365acf6ff72.jpg"},9718:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/one-app-99eff310e78b1df3511bdcb4419b4446.jpg"},30881:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/outplayed-3a7d6619599e1b930dd9cbd3de75e549.jpg"},69716:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/payments-d71bd083cec239281c1ad8f21f20ffa9.jpg"},98139:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/receipt-2fb11396074d7aa64448dd2144f069ee.jpg"},33414:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/settings-active-subs-9a49714c889d1a731eaea15a34d4ece6.jpg"},83439:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/subscription-mail-27b834efc8bef12a66e373f04022b2b3.jpg"},10875:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/uninstall-subs-notification-popup-70df899a0a1f79b60470dd6cc9ea53db.jpg"},10922:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/uninstall-subs-notification-7c2a3314405e4ced929b466600d2e7a2.jpg"}}]);