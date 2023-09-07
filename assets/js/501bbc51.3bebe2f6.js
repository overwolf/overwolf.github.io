"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2337],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var l=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),s=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,c=p["".concat(d,".").concat(u)]||p[u]||k[u]||n;return a?l.createElement(c,i(i({ref:t},m),{},{components:a})):l.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=a(25773),r=(a(27378),a(35318));const n={id:"videos",image:"/img/embed/api-docs.jpg",title:"overwolf.media.videos API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,o={unversionedId:"api/media/videos",id:"api/media/videos",title:"overwolf.media.videos API",description:"Use this API to create video composition, delete video files, and get details of video files that were created by the app.",source:"@site/pages/docs/api/media/videos.mdx",sourceDirName:"api/media",slug:"/api/media/videos",permalink:"/api/media/videos",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/media/videos.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"videos",image:"/img/embed/api-docs.jpg",title:"overwolf.media.videos API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Highlights supported games",permalink:"/api/media/replays/auto-highlights"},next:{title:"overwolf.notifications API",permalink:"/api/notifications/"}},d={},s=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"createVideoComposition(sourceVideoUrl, segments, callback)",id:"createvideocompositionsourcevideourl-segments-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"<code>segments</code> notes",id:"segments-notes",level:4},{value:"createVideoCompositionFiles(files, outputFile, callback)",id:"createvideocompositionfilesfiles-outputfile-callback",level:2},{value:"Version added: 0.112",id:"version-added-0112",level:4},{value:"getVideos(callback)",id:"getvideoscallback",level:2},{value:"Version added: 0.89",id:"version-added-089",level:4},{value:"getVideosSize(callback)",id:"getvideossizecallback",level:2},{value:"Version added: 0.91",id:"version-added-091",level:4},{value:"deleteOldVideos(keepNewestXGbs, callback)",id:"deleteoldvideoskeepnewestxgbs-callback",level:2},{value:"Version added: 0.89",id:"version-added-089-1",level:4},{value:"deleteVideo(videoUrl, callback)",id:"deletevideovideourl-callback",level:2},{value:"Version added: 0.89",id:"version-added-089-2",level:4},{value:"addWatermark(sourceVideoUrl, watermarkUrl, watermarkParams, callback)",id:"addwatermarksourcevideourl-watermarkurl-watermarkparams-callback",level:2},{value:"Version added: 0.157",id:"version-added-0157",level:4},{value:"Usage example",id:"usage-example",level:4},{value:"WatermarkParams Object",id:"watermarkparams-object",level:2},{value:"Version added: 0.157",id:"version-added-0157-1",level:4},{value:"WatermarkLocation enum",id:"watermarklocation-enum",level:2},{value:"Version added: 0.157",id:"version-added-0157-2",level:4},{value:"VideoCompositionSegment Object",id:"videocompositionsegment-object",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"GetVideosResult Object",id:"getvideosresult-object",level:2},{value:"Version added: 0.89",id:"version-added-089-3",level:4},{value:"GetVideosSizeResult Object",id:"getvideossizeresult-object",level:2},{value:"Version added: 0.91",id:"version-added-091-1",level:4}],m={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to create video composition, delete video files, and get details of video files that were created by the app."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Please read all the info about video capture usage and options on our ",(0,r.kt)("a",{parentName:"p",href:"/topics/best-practices/video-capture"},"video capture best practices")," guide.")),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createvideocompositionsourcevideourl-segments-callback"},"overwolf.media.videos.createVideoComposition()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#createvideocompositionfilesfiles-outputfile-callback"},"overwolf.media.videos.createVideoCompositionFiles()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getvideoscallback"},"overwolf.media.videos.getVideos()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getvideossizecallback"},"overwolf.media.videos.getVideosSize()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deleteoldvideoskeepnewestxgbs-callback"},"overwolf.media.videos.deleteOldVideos()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deletevideovideourl-callback"},"overwolf.media.videos.deleteVideo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addwatermarksourcevideourl-watermarkurl-watermarkparams-callback"},"overwolf.media.videos.addWatermark ()"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#videocompositionsegment-object"},"VideoCompositionSegment")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#watermarkparams-object"},"WatermarkParams")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#watermarklocation-enum"},"WatermarkLocation")," Enum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getvideosresult-object"},"overwolf.media.GetVideosResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getvideossizeresult-object"},"overwolf.media.GetVideosSizeResult")," Object")),(0,r.kt)("h2",{id:"createvideocompositionsourcevideourl-segments-callback"},"createVideoComposition(sourceVideoUrl, segments, callback)"),(0,r.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creates a compilation video out of a source video and a list of segments. Listen to the event to determine when the compilation video is ready.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceVideoUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the source video in an ",(0,r.kt)("inlineCode",{parentName:"td"},"overwolf://media")," form")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"segments"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#videocompositionsegment-object"},"VideoCompositionSegment[]")),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON containing a list of segments. See ",(0,r.kt)("a",{parentName:"td",href:"#segments-notes"},"notes below"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the target video")))),(0,r.kt)("h4",{id:"segments-notes"},(0,r.kt)("inlineCode",{parentName:"h4"},"segments")," notes"),(0,r.kt)("p",null,"The JSON containing a list of segments, each segment has a start time and an end time in milliseconds. The segments must be sorted in acsending order. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "segments": [\n        { "startTime": 2000, "endTime": 4000 },\n        { "startTime": 8000, "endTime": 10000 },\n        { "startTime": 14000, "endTime": 18000 }\n    ]\n}\n')),(0,r.kt)("h2",{id:"createvideocompositionfilesfiles-outputfile-callback"},"createVideoCompositionFiles(files, outputFile, callback)"),(0,r.kt)("h4",{id:"version-added-0112"},"Version added: 0.112"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Creates a compilation video out of a list of video files.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of video files (the url of each video is  in the form of ",(0,r.kt)("inlineCode",{parentName:"td"},"overwolf://media or file://"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputFile"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the output video file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the output video")))),(0,r.kt)("h2",{id:"getvideoscallback"},"getVideos(callback)"),(0,r.kt)("h4",{id:"version-added-089"},"Version added: 0.89"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Gets a list of all of the videos created by this app.")),(0,r.kt)("p",null,"Note that getVideos() returns only the files located in the current OW video folder, without files from different/past locations, if they exist. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getvideosresult-object"},"(Result: GetVideosResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the status of the request")))),(0,r.kt)("h2",{id:"getvideossizecallback"},"getVideosSize(callback)"),(0,r.kt)("h4",{id:"version-added-091"},"Version added: 0.91"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the total size of the video files created by this app in gigabytes.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getvideossizeresult-object"},"(Result: GetVideosSizeResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the status of the request  and the videos size")))),(0,r.kt)("h2",{id:"deleteoldvideoskeepnewestxgbs-callback"},"deleteOldVideos(keepNewestXGbs, callback)"),(0,r.kt)("h4",{id:"version-added-089-1"},"Version added: 0.89"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deletes all videos created by this app with an option to keep the newest X GBs (use with care).")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepNewestXGbs"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Keep the newest X GBs of videos. Pass 0 to delete all videos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To delete old gifs you can use ",(0,r.kt)("a",{parentName:"p",href:"../media#deleteoldgifskeepnewestxgbs-callback"},"overwolf.media.videos.deleteOldGifs()"),", and to delete old screenshots you can use ",(0,r.kt)("a",{parentName:"p",href:"../extensions/io#deletespace-path-callback"},"overwolf.extensions.io.delete()"),".")),(0,r.kt)("h2",{id:"deletevideovideourl-callback"},"deleteVideo(videoUrl, callback)"),(0,r.kt)("h4",{id:"version-added-089-2"},"Version added: 0.89"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deletes a specific video created by this app.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The Overwolf URL of the video to delete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.kt)("p",null,"NOTE: If you are trying to delete a video which was already loaded into a video DOM element, deletion will fail since the file is locked by the Overwolf process. To avoid this error, set the video element's source to an empty string before trying to delete. See example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const url = "overwolf://media/videos/video.mp4"; // Sample URL\nconst videoElement = document.querySelector("#my-video");\nif (!videoElement.paused) { // Optional, pause the video before deleting\n  videoElement.pause();\n}\nvideoElement.src = ""; // Set the video element source to an empty string\noverwolf.media.videos.deleteVideo(url);\n')),(0,r.kt)("h2",{id:"addwatermarksourcevideourl-watermarkurl-watermarkparams-callback"},"addWatermark(sourceVideoUrl, watermarkUrl, watermarkParams, callback)"),(0,r.kt)("h4",{id:"version-added-0157"},"Version added: 0.157"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Adds a video/image watermark to a video.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceVideoUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the source video in an overwolf://media form.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watermarkUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The url of the watermark video/image. Supports absolute/local path to a file in the extension directory (or an overwolf://media form).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watermarkParams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#watermarkparams-object"},"WatermarkParams")," object"),(0,r.kt)("td",{parentName:"tr",align:null},"use this object to mark the watermark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../media#fileresult-object"},"(Result: FileResult)")," => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Called with the status of the request and the url to the output video")))),(0,r.kt)("h4",{id:"usage-example"},"Usage example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sourceVideoUrl = 'overwolf://media/videos/Settings/test.mp4'; // 'overwolf://media' scheme\nconst watermarkUrl = 'giphy.gif'; // relative path to a file in the extension directory\nconst params = {\n    location: overwolf.media.videos.enums.WatermarkLocation.BottomLeft,\n        scaleHeight: 300\n};\n\noverwolf.media.videos.addWatermark(sourceVideoUrl ,watermarkUrl, params ,console.log);\n")),(0,r.kt)("h2",{id:"watermarkparams-object"},"WatermarkParams Object"),(0,r.kt)("h4",{id:"version-added-0157-1"},"Version added: 0.157"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A helper structure to describe watermark parameters.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Segment start time (in milliseconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Segment end time (in milliseconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#watermarklocation-enum"},"WatermarkLocation")," enum"),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the watermark (in pixles)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"scale height in pixels")))),(0,r.kt)("h2",{id:"watermarklocation-enum"},"WatermarkLocation enum"),(0,r.kt)("h4",{id:"version-added-0157-2"},"Version added: 0.157"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Watermark location to use.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topLeft"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topCenter"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topRight"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"midLeft"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"center"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"midRight"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomLeft"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomCenter"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomRight"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"videocompositionsegment-object"},"VideoCompositionSegment Object"),(0,r.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A helper structure to describe video segments.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Segment start time (in milliseconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Segment end time (in milliseconds)")))),(0,r.kt)("h2",{id:"getvideosresult-object"},"GetVideosResult Object"),(0,r.kt)("h4",{id:"version-added-089-3"},"Version added: 0.89"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for get videos result.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"videos"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"getvideossizeresult-object"},"GetVideosSizeResult Object"),(0,r.kt)("h4",{id:"version-added-091-1"},"Version added: 0.91"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container for get videos size result.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSizeGbs"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);