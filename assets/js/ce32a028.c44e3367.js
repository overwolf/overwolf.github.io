"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9744],{35318:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(27378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(i),b=r,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return i?n.createElement(m,s(s({ref:t},c),{},{components:i})):n.createElement(m,s({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},37841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=i(25773),r=(i(27378),i(35318));const a={id:"subscribers",image:"/img/embed/dev-tools.jpg",title:"Subscribers",sidebar_position:100,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,o={unversionedId:"tools/developers-console/all-applications/subscriptions/subscribers",id:"tools/developers-console/all-applications/subscriptions/subscribers",title:"Subscribers",description:"The Subscribers Tab",source:"@site/pages/docs/tools/developers-console/all-applications/subscriptions/subscribers.mdx",sourceDirName:"tools/developers-console/all-applications/subscriptions",slug:"/tools/developers-console/all-applications/subscriptions/subscribers",permalink:"/tools/developers-console/all-applications/subscriptions/subscribers",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/tools/developers-console/all-applications/subscriptions/subscribers.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1676188360,formattedLastUpdatedAt:"Feb 12, 2023",sidebarPosition:100,frontMatter:{id:"subscribers",image:"/img/embed/dev-tools.jpg",title:"Subscribers",sidebar_position:100,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"tools",previous:{title:"Subscription Plans",permalink:"/tools/developers-console/all-applications/subscriptions/subscription-plans"},next:{title:"User Feedback",permalink:"/tools/developers-console/all-applications/user-feedback/"}},l={},p=[{value:"Interacting with subscriptions",id:"interacting-with-subscriptions",level:2},{value:"Adding a new subscriber",id:"adding-a-new-subscriber",level:3},{value:"Editing active subscriptions",id:"editing-active-subscriptions",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Subscribers Tab",src:i(49322).Z,width:"1347",height:"636"}),"\nThis section of the console gives you a detailed overview of your app's subscribers, allowing you to sort them by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscription ",(0,r.kt)("inlineCode",{parentName:"li"},"Username")," - The user's Overwolf username."),(0,r.kt)("li",{parentName:"ul"},"Subscription ",(0,r.kt)("inlineCode",{parentName:"li"},"Plan")," name - The name of the subscription plan."),(0,r.kt)("li",{parentName:"ul"},"Current subscription ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," - The current state of the subscription.")),(0,r.kt)("p",null,"Every subscription entry itself contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The users' ",(0,r.kt)("inlineCode",{parentName:"li"},"User name"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Plan"),"'s name."),(0,r.kt)("li",{parentName:"ul"},"The subscription's ",(0,r.kt)("inlineCode",{parentName:"li"},"State"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Expiration date")," of the subscription."),(0,r.kt)("li",{parentName:"ul"},"A button to edit the subscription.")),(0,r.kt)("p",null,"The active subscriptions are split into pages, using ",(0,r.kt)("a",{parentName:"p",href:"/tools/developers-console#the-footer-toolbar"},"The Paging Footer"),"."),(0,r.kt)("h2",{id:"interacting-with-subscriptions"},"Interacting with subscriptions"),(0,r.kt)("h3",{id:"adding-a-new-subscriber"},"Adding a new subscriber"),(0,r.kt)("p",null,"You can add a new subscriber for your app manually, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add subscriber")," button in the top right. There, you can choose their username, as well as the plan to add them to."),(0,r.kt)("admonition",{title:"Manual Subscriptions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is important to remember that when you add a user manually, the user will not be:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Charged for renewing the subscription automatically once done."),(0,r.kt)("li",{parentName:"ul"},"Counted for subscription statistics under ",(0,r.kt)("a",{parentName:"li",href:"./statistics"},"Statistics"),"."))),(0,r.kt)("h3",{id:"editing-active-subscriptions"},"Editing active subscriptions"),(0,r.kt)("admonition",{title:"Handle With Care",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"While you physically can edit the subscriptions of your users, make sure to do so responsibly, and to communicate it with your DevRel."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Any changes made to a user's subscription will directly affect their billing!"))),(0,r.kt)("p",null,"You can edit a subscription manually by clicking its edit button (in its specific row). That way, you can change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The subscription's current state:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Active: The subscription is currently enabled."),(0,r.kt)("li",{parentName:"ul"},"Cancelled: The subscription was either cancelled by the user or expired."),(0,r.kt)("li",{parentName:"ul"},"Revoked: The subscription was cancelled by the dev."),(0,r.kt)("li",{parentName:"ul"},"Invalid: The Subscription was cancelled due to a transaction error (failed to recharge)."))),(0,r.kt)("li",{parentName:"ul"},"The subscription's expiration date.\n",(0,r.kt)("img",{alt:"Edit Subscription Details",src:i(52323).Z,width:"603",height:"447"}))),(0,r.kt)("p",null,"You can also view the entire action history of that specific subscription, and even filter it by dates."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Subscription Details History",src:i(80361).Z,width:"1047",height:"493"}),"\nInside of each log entry, you can also see some additional information, if there is any."),(0,r.kt)("p",null,"Specifically, inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"Payment")," entries, you can see the exact price paid, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction ID")," for the specific payment."),(0,r.kt)("admonition",{title:"Refunding A Subscription",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is possible to refund and cancel a subscription's latest payment, by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"refund & cancel")," in its latest ",(0,r.kt)("inlineCode",{parentName:"p"},"Payment")," entry's additional information."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This is an irreversible action!"))))}u.isMDXComponent=!0},80361:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/activity-log-d0a33124d287b2c3b7c035ed71570ce4.jpg"},49322:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/index-f3515feae855ef0bf220685abd390986.jpg"},52323:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/plan-details-65b2f7332b6b207dcfabd9955f336211.jpg"}}]);