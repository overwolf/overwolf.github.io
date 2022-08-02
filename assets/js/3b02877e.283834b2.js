"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7986],{3905:function(e,n,i){i.r(n),i.d(n,{MDXContext:function(){return w},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a.apply(this,arguments)}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var w=t.createContext({}),l=function(e){return function(n){var i=p(n.components);return t.createElement(e,a({},n,{components:i}))}},p=function(e){var n=t.useContext(w),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},m=function(e){var n=p(e.components);return t.createElement(w.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,w=d(e,["components","mdxType","originalType","parentName"]),l=p(i),m=o,c=l["".concat(r,".").concat(m)]||l[m]||u[m]||a;return i?t.createElement(c,s(s({ref:n},w),{},{components:i})):t.createElement(c,s({ref:n},w))}));function h(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var w=2;w<a;w++)r[w]=i[w];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},61270:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return w},toc:function(){return p}});var t=i(87462),o=i(63366),a=(i(67294),i(3905)),r=["components"],s={id:"using-overwolf-windows",title:"Using Overwolf windows",sidebar_label:"Using Overwolf windows"},d=void 0,w={unversionedId:"topics/using-windows-api/using-overwolf-windows",id:"topics/using-windows-api/using-overwolf-windows",title:"Using Overwolf windows",description:"Every Overwolf app uses Overwolf windows, whether in-game or while on desktop. When you get to work on your own app, the first step is declaring your app\u2019s windows in it's manifest.json file. You will NOT be able to create an Overwolf window without declaring it in the manifest (window.open is not an Overwolf window).",source:"@site/pages/docs/topics/using-windows-api/using-overwolf-windows.mdx",sourceDirName:"topics/using-windows-api",slug:"/topics/using-windows-api/using-overwolf-windows",permalink:"/topics/using-windows-api/using-overwolf-windows",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-windows-api/using-overwolf-windows.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"using-overwolf-windows",title:"Using Overwolf windows",sidebar_label:"Using Overwolf windows",sidebar_position:0},sidebar:"topics",previous:{title:"Windows Communication",permalink:"/topics/using-windows-api/communicating-between-windows"},next:{title:"Resolution Size and Position",permalink:"/topics/using-windows-api/windows-resolution-size-position"}},l={},p=[{value:"Declaring windows in manifest.json",id:"declaring-windows-in-manifestjson",level:2},{value:"Essential window properties",id:"essential-window-properties",level:3},{value:"Accessing your declared windows",id:"accessing-your-declared-windows",level:2},{value:"Using window.name",id:"using-windowname",level:3},{value:"Using window.id",id:"using-windowid",level:3},{value:"How to create a new window",id:"how-to-create-a-new-window",level:2},{value:"Call obtainDeclaredWindow()",id:"call-obtaindeclaredwindow",level:3},{value:"Call restore()",id:"call-restore",level:3}],m={toc:p};function u(e){var n=e.components,i=(0,o.Z)(e,r);return(0,a.mdx)("wrapper",(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Every Overwolf app uses Overwolf windows, whether in-game or while on desktop. When you get to work on your own app, the first step is declaring your app\u2019s windows in it's ",(0,a.mdx)("a",{parentName:"p",href:"/api/manifest"},"manifest.json")," file. You will NOT be able to create an Overwolf window without declaring it in the manifest (window.open is not an Overwolf window).  "),(0,a.mdx)("p",null,"The idea here is to declare a ",(0,a.mdx)("strong",{parentName:"p"},"window class")," with it's properties and later you can create an ",(0,a.mdx)("strong",{parentName:"p"},"instance")," of that class.\nIt's not currently possible to create multiple instances of a window class - having many windows is discouraged because it might make your app more complicated than required or hurt user experience."),(0,a.mdx)("h2",{id:"declaring-windows-in-manifestjson"},"Declaring windows in manifest.json"),(0,a.mdx)("p",null,"Declare your window objects by giving the object a name under the data.windows section and adding ",(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#extension_window_data-object"},"properties")," that you want the window to inherit when created. Properties can include size, starting position, transparency and others."),(0,a.mdx)("p",null,"Here is an example window declaration:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},' "data": {\n        "start_window": "MainWindow",\n        "windows": {\n            "MainWindow": {\n                "file": "Files/index.html",\n                "transparent": true,\n                "resizable": true,\n                "size": {"width": 400, "height": 300},\n                "min_size": {"width": 200, "height": 200},\n                "max_size": {"width": 600, "height": 500}\n            }\n        }\n }\n')),(0,a.mdx)("h3",{id:"essential-window-properties"},"Essential window properties"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#start_window"},(0,a.mdx)("inlineCode",{parentName:"a"},"start_window"))," - Every app always has a default window, a main window which is the first to be shown when your app is launched. A Start Window MUST exist in order for the other windows to exist \u2013 if you close your main window (or if the user closes it) all other app windows will be closed as well, factually closing your app.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#window-file"},(0,a.mdx)("inlineCode",{parentName:"a"},"file"))," \u2013 This is the core HTML file which will be loaded into your window when it's opened. This can only be a local file. If you wish to host your app on a remote web-site, you\u2019ll have to build a local page that redirects to that website (If you do so, make sure that the ",(0,a.mdx)("strong",{parentName:"p"},"block_top_window_navigation")," property is set to ",(0,a.mdx)("strong",{parentName:"p"},"false"),").")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#window-transparent"},(0,a.mdx)("inlineCode",{parentName:"a"},"transparent")),' \u2013 When this property is set to true, your window will have no borders or background. Any part of your window that has a transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop behind it. If this property is set to false, your window will have the common Overwolf window borders and white background.')),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#windows-grab_keyboard_focus"},(0,a.mdx)("inlineCode",{parentName:"a"},"grab_keyboard_focus"))," \u2013 This property is set to false by default, but if set to true, this property means opening your window will automatically take the user's keyboard focus and any keystrokes will be made in the app window rather than the current game the user's seeing. Since some windows open surprisingly or automatically, for example based on a game event or a hotkey pressed, you want to keep this false in most cases and avoid 'stealing' user keyboard focus away. ",(0,a.mdx)("strong",{parentName:"p"},"grab_focus_on_desktop")," is the complementary property which describes out-of-game behavior, this is set to True by default because the user is not playing when launching the app in desktop mode.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#windows-size"},(0,a.mdx)("inlineCode",{parentName:"a"},"size"))," \u2013 Allows you to set the size of your app window when it is first opened. If your window is not resizable, this will be its permanent size. However, if your app is resizable \u2013 app size is saved by Overwolf when closed so that the next time it is opened, ",(0,a.mdx)("strong",{parentName:"p"},"it will open with the same size as it was closed with by the user"),", this will persist even if the app is uninstalled and reinstalled. More ",(0,a.mdx)("a",{parentName:"p",href:"windows-resolution-size-position#window-sizes"},"window size tips"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#windows-min_size"},(0,a.mdx)("inlineCode",{parentName:"a"},"min_size"))," and ",(0,a.mdx)("a",{parentName:"p",href:"/api/manifest#windows-max_size"},(0,a.mdx)("inlineCode",{parentName:"a"},"max_size"))," - These properties define the smallest and largest your app window can be in pixels."))),(0,a.mdx)("h2",{id:"accessing-your-declared-windows"},"Accessing your declared windows"),(0,a.mdx)("p",null,"There are two ways we identify windows: the ",(0,a.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," properties."),(0,a.mdx)("h3",{id:"using-windowname"},"Using window.name"),(0,a.mdx)("p",null,"When accessing a window by name, you need to use the name value exactly as it appears in your manifest.json window declaration."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"A window name is always a value declared by the developer of the app.")),(0,a.mdx)("h3",{id:"using-windowid"},"Using window.id"),(0,a.mdx)("p",null,"Accessing a window by id is possible when you already have an instance of your window declared \u2013 you can retrieve this id using one of two overwolf.windows functions: "),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/api/windows#getcurrentwindowcallback"},"overwolf.windows.getCurrentWindow()"))),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"A window id is set by the Overwolf API. This value is subject to change in future Overwolf versions \u2013 so you should avoid using hardcoded values.")),(0,a.mdx)("p",null,"Currently we do not support generating multiple instances of the same window class, most functions that use window id will accept window name just the same."),(0,a.mdx)("h2",{id:"how-to-create-a-new-window"},"How to create a new window"),(0,a.mdx)("h3",{id:"call-obtaindeclaredwindow"},"Call obtainDeclaredWindow()"),(0,a.mdx)("p",null,"First, you must call ",(0,a.mdx)("a",{parentName:"p",href:"/api/windows#obtaindeclaredwindowwindowname-callback"},"overwolf.windows.obtainDeclaredWindow()")," using the window\u2019s name as declared in your manifest.json. This will create a single instance of your window and return basic window information including id, name, width, height and other base properties."),(0,a.mdx)("h3",{id:"call-restore"},"Call restore()"),(0,a.mdx)("p",null,"Afterwards, you need to call ",(0,a.mdx)("a",{parentName:"p",href:"/api/windows#restorewindowid-callback"},"overwolf.windows.restore()")," using either the window's name or id retrieved from obtainDeclaredWindow."),(0,a.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Skipping obtainDeclaredWindow() and calling restore() with the window\u2019s name will ",(0,a.mdx)("strong",{parentName:"p"},"not work")," unless the window is already instantiated and minimized (in which case it will be restored)."))))}u.isMDXComponent=!0}}]);