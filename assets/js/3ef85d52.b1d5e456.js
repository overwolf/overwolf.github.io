"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3888],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=l,h=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(25773),l=(a(27378),a(35318));const r={id:"halo-infinite",image:"/img/embed/games/halo-infinite.jpg",title:"Halo Infinite Game events",hide_title:!0,sidebar_label:"Halo Infinite",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},i=void 0,o={unversionedId:"api/live-game-data/supported-games/halo-infinite",id:"api/live-game-data/supported-games/halo-infinite",title:"Halo Infinite Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/live-game-data/supported-games/halo-infinite.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/halo-infinite",permalink:"/api/live-game-data/supported-games/halo-infinite",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/live-game-data/supported-games/halo-infinite.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1698152482,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:0,frontMatter:{id:"halo-infinite",image:"/img/embed/games/halo-infinite.jpg",title:"Halo Infinite Game events",hide_title:!0,sidebar_label:"Halo Infinite",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!0}}},sidebar:"api",previous:{title:"Genshin Impact",permalink:"/api/live-game-data/supported-games/genshin-impact"},next:{title:"Hearthstone",permalink:"/api/live-game-data/supported-games/hearthstone"}},p={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em>  note",id:"gep_internal--note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>local_player_stats</em>  note",id:"local_player_stats--note",level:4},{value:"<em>playlist</em>  note",id:"playlist--note",level:4},{value:"<em>game_type</em>  note",id:"game_type--note",level:4},{value:"<em>game_mode</em>  note",id:"game_mode--note",level:4},{value:"<em>match_outcome</em>  note",id:"match_outcome--note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em>  note",id:"match_start--note",level:4},{value:"<em>match_end</em>  note",id:"match_end--note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>kill</em>  note",id:"kill--note",level:4},{value:"<code>assist</code>",id:"assist",level:2},{value:"Events",id:"events-2",level:3},{value:"<em>assist</em>  note",id:"assist--note",level:4},{value:"<code>death</code>",id:"death",level:2},{value:"Events",id:"events-3",level:3},{value:"<em>death</em>  note",id:"death--note",level:4},{value:"<code>roster</code>",id:"roster",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<code>roster_XX</code> notes",id:"roster_xx-notes",level:4}],s=(u="GameInfo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var u;const d={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Halo Infinite, Halo Infinite API, SDK for Halo Infinite, Halo Infinite SDK"})),(0,l.kt)(s,{gameId:21854,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Halo Infinite game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kill"},"kill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#assist"},"assist")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#death"},"death")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#roster"},"roster"))),(0,l.kt)("h2",{id:"game-event-status"},"Game event status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to app users.\nCheck the current game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal--note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"game_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"game_info")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"scene-note"},(0,l.kt)("em",{parentName:"h4"},"scene")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"lobby"}},"feature":"game_info"}\n')),(0,l.kt)("p",null,"List of possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"intro"),(0,l.kt)("li",{parentName:"ul"},"lobby"),(0,l.kt)("li",{parentName:"ul"},"match_start_countdown"),(0,l.kt)("li",{parentName:"ul"},"loading"),(0,l.kt)("li",{parentName:"ul"},"ingame"),(0,l.kt)("li",{parentName:"ul"},"transfer_to_lobby")),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local_player_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"A variety of in-game stats for local player."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#local_player_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"playlist"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The playlist the player selected."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#playlist-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"191.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_type"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected game type, important only for non custm games"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_type-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"191.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"game_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected game mode"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"191.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_outcome"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The final march outcome victory / defeat"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"210.0")))),(0,l.kt)("h4",{id:"local_player_stats--note"},(0,l.kt)("em",{parentName:"h4"},"local_player_stats"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"info":{"match_info":{"local_player_stats":"{"Score":0,"RoundsWon":1,"RoundsTied":0,"PersonalScore":1350,"Kills":8,"Deaths":13,"Assists":8,"KDA":0,"Suicides":0,"Betrayals":0,"AverageLifeDuration":0,"BestKillingSpree":3,"Headshots":0,"ShotsFired":0,"ShotsHit":0,"AccuracyPercentage":0,"MeleeKills":3,"GrenadeKills":1,"PowerWeaponKills":0,"DamageDone":0,"DamageTaken":0}"}},"feature":"match_info"}\n')),(0,l.kt)("p",null,"Important note:\nSome of the stat parameters at the moment don't return any values (KDA, AccuracyPercentage, ShotsHit, DamageDone, DamageTaken, ShotsFired, AverageLifeDuration and more)."),(0,l.kt)("h4",{id:"playlist--note"},(0,l.kt)("em",{parentName:"h4"},"playlist"),"  note"),(0,l.kt)("p",null,"Possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"quick_play"),(0,l.kt)("li",{parentName:"ul"},"bot_bootcamp"),(0,l.kt)("li",{parentName:"ul"},"btb"),(0,l.kt)("li",{parentName:"ul"},"fiesta"),(0,l.kt)("li",{parentName:"ul"},"ffa_slayer"),(0,l.kt)("li",{parentName:"ul"},"tactical_slayer"),(0,l.kt)("li",{parentName:"ul"},"team_slayer"),(0,l.kt)("li",{parentName:"ul"},"team_doubles"),(0,l.kt)("li",{parentName:"ul"},"team_snipers"),(0,l.kt)("li",{parentName:"ul"},"rumble_pit"),(0,l.kt)("li",{parentName:"ul"},"land_grab"),(0,l.kt)("li",{parentName:"ul"},"ranked_arena_open"),(0,l.kt)("li",{parentName:"ul"},"ranked_arena_soloduo"),(0,l.kt)("li",{parentName:"ul"},"custom"),(0,l.kt)("li",{parentName:"ul"},"entrenched")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"playlist","value":"bot_bootcamp"}\n')),(0,l.kt)("p",null,"Important - This info-update change only if the user change playlist"),(0,l.kt)("h4",{id:"game_type--note"},(0,l.kt)("em",{parentName:"h4"},"game_type"),"  note"),(0,l.kt)("p",null,"Possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"arena"),(0,l.kt)("li",{parentName:"ul"},"btb"),(0,l.kt)("li",{parentName:"ul"},"academy"),(0,l.kt)("li",{parentName:"ul"},"campaign"),(0,l.kt)("li",{parentName:"ul"},"landgrab")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"game_type","value":"arena"}\n')),(0,l.kt)("p",null,"Important - This info-update change only if the user change game type"),(0,l.kt)("h4",{id:"game_mode--note"},(0,l.kt)("em",{parentName:"h4"},"game_mode"),"  note"),(0,l.kt)("p",null,"If the player uses a non-custom game use game_type to understand what type of game the player has selected.\nIn this case the possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"oddball"),(0,l.kt)("li",{parentName:"ul"},"ctf"),(0,l.kt)("li",{parentName:"ul"},"btb"),(0,l.kt)("li",{parentName:"ul"},"slayer"),(0,l.kt)("li",{parentName:"ul"},"ctf"),(0,l.kt)("li",{parentName:"ul"},"stockpile"),(0,l.kt)("li",{parentName:"ul"},"total_control"),(0,l.kt)("li",{parentName:"ul"},"strongholds")),(0,l.kt)("p",null,"If the player created a custom game you will get one of the values in the list, it that case you can ignore game_type\nIn this case the possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"arena:ctf"),(0,l.kt)("li",{parentName:"ul"},"arena:ffa "),(0,l.kt)("li",{parentName:"ul"},"arena:oddball"),(0,l.kt)("li",{parentName:"ul"},"arena:onectf"),(0,l.kt)("li",{parentName:"ul"},"arena:slayer"),(0,l.kt)("li",{parentName:"ul"},"arena:strongholds"),(0,l.kt)("li",{parentName:"ul"},"arena:landgrab"),(0,l.kt)("li",{parentName:"ul"},"btb:slayer"),(0,l.kt)("li",{parentName:"ul"},"btb:ctf"),(0,l.kt)("li",{parentName:"ul"},"btb:stockpile"),(0,l.kt)("li",{parentName:"ul"},"btb:total_control"),(0,l.kt)("li",{parentName:"ul"},"fiesta:slayer"),(0,l.kt)("li",{parentName:"ul"},"ranked:ctf"),(0,l.kt)("li",{parentName:"ul"},"ranked:oddball"),(0,l.kt)("li",{parentName:"ul"},"ranked:slayer"),(0,l.kt)("li",{parentName:"ul"},"ranked:strongholds")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"game_mode","value":"ctf"}\nOR\n{"feature":"match_info","category":"match_info","key":"game_mode","value":"btb:ctf"}\n')),(0,l.kt)("h4",{id:"match_outcome--note"},(0,l.kt)("em",{parentName:"h4"},"match_outcome"),"  note"),(0,l.kt)("p",null,"Match outcome at the end of the match"),(0,l.kt)("p",null,"Possible values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"victory"),(0,l.kt)("li",{parentName:"ul"},"defeat"),(0,l.kt)("li",{parentName:"ul"},"tie")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"match_outcome","value":"victory"}\n')),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"When loading into map."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"When disconnecting from map."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"match_start--note"},(0,l.kt)("em",{parentName:"h4"},"match_start"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":"null"}]}\n')),(0,l.kt)("h4",{id:"match_end--note"},(0,l.kt)("em",{parentName:"h4"},"match_end"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"null"}]}\n')),(0,l.kt)("h2",{id:"kill"},(0,l.kt)("inlineCode",{parentName:"h2"},"kill")),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kill"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Killing an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"kill--note"},(0,l.kt)("em",{parentName:"h4"},"kill"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":"1"}]}\n')),(0,l.kt)("h2",{id:"assist"},(0,l.kt)("inlineCode",{parentName:"h2"},"assist")),(0,l.kt)("h3",{id:"events-2"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assist"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Assist in killing an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#assist-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"assist--note"},(0,l.kt)("em",{parentName:"h4"},"assist"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"assist","data":"1"}]}\n')),(0,l.kt)("h2",{id:"death"},(0,l.kt)("inlineCode",{parentName:"h2"},"death")),(0,l.kt)("h3",{id:"events-3"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"death"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Dying to an opponent."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"death--note"},(0,l.kt)("em",{parentName:"h4"},"death"),"  note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":"1"}]}\n')),(0,l.kt)("h2",{id:"roster"},(0,l.kt)("inlineCode",{parentName:"h2"},"roster")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roster_XX"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"This feature provides the entire list of players."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#roster_xx-notes"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"190.0")))),(0,l.kt)("h4",{id:"roster_xx-notes"},(0,l.kt)("inlineCode",{parentName:"h4"},"roster_XX")," notes"),(0,l.kt)("p",null,"This feature provides the entire list of players."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"roster_0","value":{"name":"Cocotte7425","team":1,"local":false}}\n')),(0,l.kt)("p",null,"As you can see, this object includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"name")," \u2013 Player's name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"team")," \u2013 The team of the player."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"local")," - \u201ctrue\u201d when the player is the local player that play, \"false\u201d when it's another player in the game.")),(0,l.kt)("p",null,"When a player \u201cleaves\u201d the match, the roster will be updated with another player that is in the match.\nWhen the match end, the roster value is returned empty, example: "),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"roster_0","value":{}}\n')))}k.isMDXComponent=!0}}]);