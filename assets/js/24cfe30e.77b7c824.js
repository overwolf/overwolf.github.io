"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7169],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return d},mdx:function(){return m},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=i.createContext({}),p=function(e){return function(t){var n=l(t.components);return i.createElement(e,r({},t,{components:n}))}},l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=s,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var i=n(87462),s=n(63366),r=(n(67294),n(3905)),a=["components"],o={id:"subscriptions-flow",image:"/img/embed/getting-started.jpg",title:"Subscriptions user flow",sidebar_label:"Subscriptions user flow"},c=void 0,u={unversionedId:"start/monetize-with-subs/subscriptions-flow",id:"start/monetize-with-subs/subscriptions-flow",title:"Subscriptions user flow",description:"Subscribing from the app's page",source:"@site/pages/docs/start/monetize-with-subs/subscriptions-flow.mdx",sourceDirName:"start/monetize-with-subs",slug:"/start/monetize-with-subs/subscriptions-flow",permalink:"/start/monetize-with-subs/subscriptions-flow",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-subs/subscriptions-flow.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"subscriptions-flow",image:"/img/embed/getting-started.jpg",title:"Subscriptions user flow",sidebar_label:"Subscriptions user flow"},sidebar:"start",previous:{title:"Monetization overview",permalink:"/start/monetize-with-ads/monetization-overview"},next:{title:"Integrate subscriptions",permalink:"/start/monetize-with-subs/subscriptions-integration"}},p={},l=[{value:"Subscribing from the app&#39;s page",id:"subscribing-from-the-apps-page",level:2},{value:"Subscribing using the in-app button",id:"subscribing-using-the-in-app-button",level:2},{value:"Features screen and Checkout flow",id:"features-screen-and-checkout-flow",level:2},{value:"Manage active subscriptions",id:"manage-active-subscriptions",level:2},{value:"Uninstall / Cancel subscriptions",id:"uninstall--cancel-subscriptions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},b=d("ImageBoxModal"),f=d("ImageSlider"),m={toc:l};function g(e){var t=e.components,o=(0,s.Z)(e,a);return(0,r.mdx)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"subscribing-from-the-apps-page"},"Subscribing from the app's page"),(0,r.mdx)("p",null,'The easiest way for a user to subscribe is going to that app\u2019s page in the Appstore and clicking the "Subscribe" button.'),(0,r.mdx)(b,{mdxType:"ImageBoxModal"},(0,r.mdx)("img",{src:n(23225).Z,alt:"One App page - Unsubscribed"})),(0,r.mdx)("h2",{id:"subscribing-using-the-in-app-button"},"Subscribing using the in-app button"),(0,r.mdx)("p",null,"Developers can choose to implement an in-app subscribe button leading directly to the subscription flow."),(0,r.mdx)(b,{mdxType:"ImageBoxModal"},(0,r.mdx)("img",{src:n(29790).Z,alt:"outplayed"})),(0,r.mdx)("h2",{id:"features-screen-and-checkout-flow"},"Features screen and Checkout flow"),(0,r.mdx)("p",null,'After clicking "Subscribe", the user reaches a detailed plan page that breaks down all plan features.\nCurrently, each app can only have one plan, but in the future multiple plans will be possible, each with different own feature sets.'),(0,r.mdx)(f,{mdxType:"ImageSlider"},(0,r.mdx)("img",{src:n(95372).Z,alt:"Subscription features page"}),(0,r.mdx)("img",{src:n(27679).Z,alt:"Checkout flow"}),(0,r.mdx)("img",{src:n(79801).Z,alt:"On-screen purchase confirmation"}),(0,r.mdx)("img",{src:n(36610).Z,alt:"One App page - Subscribed"}),(0,r.mdx)("img",{src:n(75644).Z,alt:"Email purchase confirmation"})),(0,r.mdx)("h2",{id:"manage-active-subscriptions"},"Manage active subscriptions"),(0,r.mdx)("p",null,"Subbed apps appear in a new settings page where users can easily monitor or cancel their subscriptions as they please. Cancellation takes place at the end of the current subscription period."),(0,r.mdx)(b,{mdxType:"ImageBoxModal"},(0,r.mdx)("img",{src:n(20817).Z,alt:"settings-active-subs"})),(0,r.mdx)("h2",{id:"uninstall--cancel-subscriptions"},"Uninstall / Cancel subscriptions"),(0,r.mdx)("p",null,"When a user begins to uninstall Overwolf, they will get a notification warning them about active subscriptions that they might want to cancel for that app."),(0,r.mdx)(f,{miniSlides:!0,mdxType:"ImageSlider"},(0,r.mdx)("img",{src:n(50456).Z,alt:"uninstall-subs-notification"}),(0,r.mdx)("img",{src:n(71906).Z,alt:"uninstall-subs-notification-popup"}),(0,r.mdx)("img",{src:n(75046).Z,alt:"cancellation-mail"})))}g.isMDXComponent=!0},75046:function(e,t,n){t.Z=n.p+"assets/images/cancellation-mail-7b0bbb044df670687baf63a3181ddc0a.jpg"},95372:function(e,t,n){t.Z=n.p+"assets/images/features-2733af2240501e0443e217fde524e4bd.jpg"},36610:function(e,t,n){t.Z=n.p+"assets/images/one-app-subscribed-489f6bdc62e8046a95667365acf6ff72.jpg"},23225:function(e,t,n){t.Z=n.p+"assets/images/one-app-99eff310e78b1df3511bdcb4419b4446.jpg"},29790:function(e,t,n){t.Z=n.p+"assets/images/outplayed-3a7d6619599e1b930dd9cbd3de75e549.jpg"},27679:function(e,t,n){t.Z=n.p+"assets/images/payments-d71bd083cec239281c1ad8f21f20ffa9.jpg"},79801:function(e,t,n){t.Z=n.p+"assets/images/receipt-2fb11396074d7aa64448dd2144f069ee.jpg"},20817:function(e,t,n){t.Z=n.p+"assets/images/settings-active-subs-9a49714c889d1a731eaea15a34d4ece6.jpg"},75644:function(e,t,n){t.Z=n.p+"assets/images/subscription-mail-27b834efc8bef12a66e373f04022b2b3.jpg"},71906:function(e,t,n){t.Z=n.p+"assets/images/uninstall-subs-notification-popup-70df899a0a1f79b60470dd6cc9ea53db.jpg"},50456:function(e,t,n){t.Z=n.p+"assets/images/uninstall-subs-notification-7c2a3314405e4ced929b466600d2e7a2.jpg"}}]);