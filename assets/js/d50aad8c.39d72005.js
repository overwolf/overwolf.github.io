"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3369],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=m(a),k=l,c=u["".concat(i,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:l,o[1]=d;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},79833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(25773),l=(a(27378),a(35318));const r={id:"hearthstone",image:"/img/embed/games/hearthstone.jpg",title:"Hearthstone Game events",hide_title:!0,sidebar_label:"Hearthstone",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,d={unversionedId:"api/live-game-data/supported-games/hearthstone",id:"api/live-game-data/supported-games/hearthstone",title:"Hearthstone Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/live-game-data/supported-games/hearthstone.mdx",sourceDirName:"api/live-game-data/supported-games",slug:"/api/live-game-data/supported-games/hearthstone",permalink:"/api/live-game-data/supported-games/hearthstone",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/live-game-data/supported-games/hearthstone.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1696341477,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:0,frontMatter:{id:"hearthstone",image:"/img/embed/games/hearthstone.jpg",title:"Hearthstone Game events",hide_title:!0,sidebar_label:"Hearthstone",sidebar_position:0,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Halo Infinite",permalink:"/api/live-game-data/supported-games/halo-infinite"},next:{title:"Heroes of the Storm",permalink:"/api/live-game-data/supported-games/heroes-of-the-storm"}},i={},m=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>collection</code>",id:"collection",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>collection</em> note",id:"collection-note",level:4},{value:"<code>scene_state</code>",id:"scene_state",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>scene_state</em> note",id:"scene_state-note",level:4},{value:"<code>decks</code>",id:"decks",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>deck_id</em> note",id:"deck_id-note",level:4},{value:"<em>selected_deck</em> note",id:"selected_deck-note",level:4},{value:"<em>adventure deck</em> note",id:"adventure-deck-note",level:4},{value:"<em>adventure_loot_options</em> note",id:"adventure_loot_options-note",level:4},{value:"<code>match</code>",id:"match",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>localPlayer</em> note",id:"localplayer-note",level:4},{value:"<em>opponent</em> note",id:"opponent-note",level:4},{value:"<em>match_type</em> note",id:"match_type-note",level:4},{value:"<em>battlegrounds_rating</em> note",id:"battlegrounds_rating-note",level:4},{value:"<em>adventure_stats</em> note",id:"adventure_stats-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-5",level:3},{value:"<em>pseudo_match_id</em> note",id:"pseudo_match_id-note",level:4},{value:"<code>arena</code>",id:"arena",level:2},{value:"Info Updates",id:"info-updates-6",level:3},{value:"<em>arena_draft</em> note",id:"arena_draft-note",level:4}],p=(u="GameInfo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var u;const s={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:"API for Hearthstone, Hearthstone API, SDK for Hearthstone, Hearthstone SDK"})),(0,l.kt)(p,{gameId:9898,page:"docs",mdxType:"GameInfo"}),(0,l.kt)("p",null,"Please read the ",(0,l.kt)("a",{parentName:"p",href:"/api/live-game-data"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.kt)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-app"},"Hearthstone game events sample app"))),(0,l.kt)("h2",{id:"available-features"},"Available Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#scene_state"},"scene_state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#collection"},"collection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#decks"},"decks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match"},"match")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#match_info"},"match-info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#arena"},"arena"))),(0,l.kt)("h2",{id:"game-events-status"},"Game events status"),(0,l.kt)("p",null,"It is highly recommended to communicate errors and warnings to your app users. Check game event status ",(0,l.kt)("a",{parentName:"p",href:"/status/"},"here"),", or easily check game events status from your app ",(0,l.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.kt)("h2",{id:"gep_internal"},(0,l.kt)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.kt)("h3",{id:"info-updates"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.kt)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"gep_internal-note"},(0,l.kt)("em",{parentName:"h4"},"gep_internal")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.kt)("h2",{id:"collection"},(0,l.kt)("inlineCode",{parentName:"h2"},"collection")),(0,l.kt)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collection"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current card collection of the local player."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#collection-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"117.1")))),(0,l.kt)("h4",{id:"collection-note"},(0,l.kt)("em",{parentName:"h4"},"collection")," note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The \u201ccollection\u201d  data is available as soon as the player logs into Hearthstone."),(0,l.kt)("li",{parentName:"ul"},"The collection is updated whenever the user adds/removes a card.")),(0,l.kt)("p",null,'Example for cards "collection":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ CS2_065: "{"id" : "CS2_065", "count" : "1", "premiumCount" : "0" }",\n  CS1_113: "{"id" : "CS1_113", "count" : "2", "premiumCount" : "0" }",\n  NEW1_011: "{"id" : "NEW1_011", "count" : "2", "premiumCount" : "0" }",\n  EX1_131: "{"id" : "EX1_131", "count" : "1", "premiumCount" : "2" }",\n  CS2_121: "{"id" : "CS2_121", "count" : "2", "premiumCount" : "0" }",\n  \u2026\n}\n')),(0,l.kt)("p",null,'"Card" structure:'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{\n  "id" : "card_id" ,\n  "count" : "int" ,\n  "premiumCount" : "int"\n}  ')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201cid\u201d \u2013 The ",(0,l.kt)("a",{parentName:"li",href:"http://metastats.net/allcards/"},"card\u2019s id")),(0,l.kt)("li",{parentName:"ul"},"\u201ccount\u201d \u2013 The number of regular cards"),(0,l.kt)("li",{parentName:"ul"},"\u201cpremiumCount\u201d \u2013 The number of premium (golden) cards")),(0,l.kt)("h2",{id:"scene_state"},(0,l.kt)("inlineCode",{parentName:"h2"},"scene_state")),(0,l.kt)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scene_state"),(0,l.kt)("td",{parentName:"tr",align:null},"game_info"),(0,l.kt)("td",{parentName:"tr",align:null},"Current game scene."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#scene_state-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"117.1")))),(0,l.kt)("h4",{id:"scene_state-note"},(0,l.kt)("em",{parentName:"h4"},"scene_state")," note"),(0,l.kt)("p",null,"Can be one of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"scene_startup"),(0,l.kt)("li",{parentName:"ul"},"scene_login"),(0,l.kt)("li",{parentName:"ul"},"scene_hub"),(0,l.kt)("li",{parentName:"ul"},"scene_gameplay"),(0,l.kt)("li",{parentName:"ul"},"scene_collectionmanager"),(0,l.kt)("li",{parentName:"ul"},"scene_packs"),(0,l.kt)("li",{parentName:"ul"},"scene_tournament"),(0,l.kt)("li",{parentName:"ul"},"scene_friendly"),(0,l.kt)("li",{parentName:"ul"},"scene_fatal_error"),(0,l.kt)("li",{parentName:"ul"},"scene_draft"),(0,l.kt)("li",{parentName:"ul"},"scene_credits"),(0,l.kt)("li",{parentName:"ul"},"scene_reset"),(0,l.kt)("li",{parentName:"ul"},"scene_adventure"),(0,l.kt)("li",{parentName:"ul"},"scene_tavern_brawl")),(0,l.kt)("h2",{id:"decks"},(0,l.kt)("inlineCode",{parentName:"h2"},"decks")),(0,l.kt)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[deck_id]"),(0,l.kt)("td",{parentName:"tr",align:null},"decks"),(0,l.kt)("td",{parentName:"tr",align:null},"The \u201cdecks\u201d feature provides data about the currently \u201cvisible\u201d decks."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#deck_id-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"119.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selected_deck"),(0,l.kt)("td",{parentName:"tr",align:null},"selected_deck"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected deck."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#selected_deck-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"119.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Adventure Deck"),(0,l.kt)("td",{parentName:"tr",align:null},"decks"),(0,l.kt)("td",{parentName:"tr",align:null},"The currently played deck on adventure mode."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#Adventure-Deck-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adventure_loot_options"),(0,l.kt)("td",{parentName:"tr",align:null},"decks"),(0,l.kt)("td",{parentName:"tr",align:null},"The currently offered 3-option draft (between bosses)"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#adventure_loot_options-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"deck_id-note"},(0,l.kt)("em",{parentName:"h4"},"deck_id")," note"),(0,l.kt)("p",null,"The key is the deck's ",(0,l.kt)("inlineCode",{parentName:"p"},"deck_id"),' string. It is not the literal string "deck_id". See example below.'),(0,l.kt)("p",null,"Decks are \u201cvisible\u201d when the local player starts a new game, during the \u201cdeck selection\u201d screen, or when the local player enters the \u201cMy Collection\u201d menu. The following data is being provided for each deck:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deck name / id"),(0,l.kt)("li",{parentName:"ul"},"Deck cards (array of cards)"),(0,l.kt)("li",{parentName:"ul"},"Deck key")),(0,l.kt)("p",null,"\u201cCard\u201d structure:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{\n  "id" : "card_id",\n  "count" : "int",\n  "premiumCount" : "int"\n}  ')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201cid\u201d \u2013 The ",(0,l.kt)("a",{parentName:"li",href:"http://metastats.net/allcards/"},"card's id")),(0,l.kt)("li",{parentName:"ul"},"\u201ccount\u201d \u2013 The number of regular cards"),(0,l.kt)("li",{parentName:"ul"},"\u201cpremiumCount\u201d \u2013 The number of premium (golden) cards")),(0,l.kt)("p",null,"Example for a \u201cdeck_id\u201d info-update structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "info":{\n    "decks":{\n      "Mage":"{\n        \\"deck_id\\":\\"Mage\\",\n          \\"cards\\":[\n            {\\"id\\":\\"BOT_573\\",\\"count\\":1,\\"premiumCount\\":0},\n            {\\"id\\":\\"CS2_024\\",\\"count\\":2,\\"premiumCount\\":0},\n            {\\"id\\":\\"CS2_033\\",\\"count\\":1,\\"premiumCount\\":0},\n            ...\n            {\\"id\\":\\"UNG_845\\",\\"count\\":1,\\"premiumCount\\":0},\n            {\\"id\\":\\"UNG_941\\",\\"count\\":1,\\"premiumCount\\":0}\n          ],\n        \\"deck_key\\":\\"adventure_deck\\"\n      }"\n    }\n  },\n  "feature":"decks"\n}\n\n')),(0,l.kt)("b",null,"Arena Decks"),(0,l.kt)("p",null,"Arena Decks, unlike standard decks, will be updated each time the local player chooses a card during the Arena Draft phase."),(0,l.kt)("h4",{id:"selected_deck-note"},(0,l.kt)("em",{parentName:"h4"},"selected_deck")," note"),(0,l.kt)("p",null,"The following data is provided when the local player selects a deck:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201cdeck_id\u201d"),(0,l.kt)("li",{parentName:"ul"},"\u201cdeck_name\u201d"),(0,l.kt)("li",{parentName:"ul"},"\u201cclass_skin\u201d \u2013 Deck image name")),(0,l.kt)("p",null,"Example for a \u201cselected deck\u201d structure:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'{"feature":"decks","category":"selected_deck","key":"selected_deck","value":\n"{"deck_id":"706741699","deck_name":"Basic Shaman","class_skin":"Thrall" }')),(0,l.kt)("h4",{id:"adventure-deck-note"},(0,l.kt)("em",{parentName:"h4"},"adventure deck")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "info":{\n      "decks":{\n         "Adventure Deck":"{\n                            "deck_id":"Adventure Deck",\n                            "cards":[\n                                      {"id":"BOT_573","count":1,"premiumCount":0},\n                                      {"id":"CS2_024","count":2,"premiumCount":0},\n                                      {"id":"CS2_033","count":1,"premiumCount":0},\n                                      ...\n                                      {"id":"UNG_845","count":1,"premiumCount":0},\n                                      {"id":"UNG_941","count":1,"premiumCount":0}\n                                    ],\n                             "deck_key":"adventure_deck"\n                           }"\n           }\n   },\n   "feature":"decks"\n}\n')),(0,l.kt)("h4",{id:"adventure_loot_options-note"},(0,l.kt)("em",{parentName:"h4"},"adventure_loot_options")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "info":{\n      "decks":{\n               "adventure_loot_options":"[\n                                          {"deck_id":"option_a","cards":[\n                                                                         {"id":"EX1_279","count":1,"premiumCount":0},\n                                                                         {"id":"EX1_559","count":1,"premiumCount":0},\n                                                                         {"id":"GVG_001","count":1,"premiumCount":0}\n                                                                         ]\n                                           },\n                                          {"deck_id":"option_b","cards":[\n                                                                          {"id":"AT_090","count":1,"premiumCount":0},\n                                                                          {"id":"AT_099","count":1,"premiumCount":0},\n                                                                          {"id":"AT_119","count":1,"premiumCount":0}\n                                                                         ]\n                                           },\n                                          {"deck_id":"option_c","cards":[\n                                                                         {"id":"CS2_028","count":1,"premiumCount":0},\n                                                                         {"id":"EX1_295","count":1,"premiumCount":0},\n                                                                         {"id":"GIL_801","count":1,"premiumCount":0}\n                                                                         ]\n                                            }\n                                          ]"\n              }\n     },\n   "feature":"decks"\n}\n')),(0,l.kt)("h2",{id:"match"},(0,l.kt)("inlineCode",{parentName:"h2"},"match")),(0,l.kt)("h3",{id:"info-updates-4"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"localPlayer"),(0,l.kt)("td",{parentName:"tr",align:null},"playersInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#localPlayer-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"123.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"opponent"),(0,l.kt)("td",{parentName:"tr",align:null},"playersInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#opponent-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"123.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_type"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the current match."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_type-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"battlegrounds_rating"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The local player's BG rating."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#battlegrounds_rating-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"adventure_stats"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The stats of the current adventure run."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#adventure_stats-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"143.0")))),(0,l.kt)("h4",{id:"localplayer-note"},(0,l.kt)("em",{parentName:"h4"},"localPlayer")," note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"name"),'" \u2013 name of local player'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"standardRank"),'" \u2013 rank of the player in Constructed Standard mode (string)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"standardLegendRank"),'" \u2013 rank of the player in Constructed Standard mode, once he reached Legend (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"wildRank"),'" \u2013 rank of the player in Constructed Wild mode (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"wildLegendRank"),'"\u2013 rank of the player in Constructed Wild mode, once he reached Legend (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"cardBackId"),'" \u2013 ID of the card back used in the current game (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"cardId"),'" \u2013 ID of the card representing the hero (string)')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"playersInfo":{"localPlayer":"{"name":"Overwolf","standardRank":"Bronze 10","standardLegendRank":0,"wildRank":0,"wildLegendRank":0,"cardBackId":157,"cardId":"HERO_05"}"}`\n')),(0,l.kt)("h4",{id:"opponent-note"},(0,l.kt)("em",{parentName:"h4"},"opponent")," note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"name"),'" \u2013 name of the opponent'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"standardRank"),'" \u2013 The rank of the player in Constructed, in Standard mode (string)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"standardLegendRank"),'"\u2013 The rank of the player in Constructed, in Standard mode, once he reached Legend (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"wildRank"),'" \u2013 The rank of the player in Constructed, in Wild mode (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"wildLegendRank")," \u2013 The rank of the player in Constructed, in Wild mode, once he reached Legend (int)"),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"cardBackId"),'" \u2013 the ID of the card back used in the current game (int)'),(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("b",null,"cardId"),'" \u2013 the ID of the card representing the hero (string)')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"playersInfo":{"opponent":"{"name":"furhyax","standardRank":"Bronze 10","standardLegendRank":0,"wildRank":0,"wildLegendRank":0,"cardBackId":172,"cardId":"HERO_09a"}"}`\n')),(0,l.kt)("h4",{id:"match_type-note"},(0,l.kt)("em",{parentName:"h4"},"match_type")," note"),(0,l.kt)("b",null,"Important:"),' There\'s a new game mode called "Duels". We do NOT support this mode at this time. We will update accordingly in the near future.',(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you would like to know when the user is going to play the ",(0,l.kt)("inlineCode",{parentName:"p"},"battlegrounds")," mode, you can listen to the match_type info update, and check If the value is ",(0,l.kt)("inlineCode",{parentName:"p"},"GT_BATTLEGROUNDS"),".")),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"match_type":"GT_CASUAL"}},"feature":"match"}\n\n{"info":{"match_info":{"match_type":"GT_BATTLEGROUNDS"}},"feature":"match"}\n')),(0,l.kt)("h4",{id:"battlegrounds_rating-note"},(0,l.kt)("em",{parentName:"h4"},"battlegrounds_rating")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"battlegrounds_rating":"2153"}},"feature":"match_info"}\n')),(0,l.kt)("h4",{id:"adventure_stats-note"},(0,l.kt)("em",{parentName:"h4"},"adventure_stats")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "info":{\n      "match_info":{\n         "adventure_stats":"{"adventure_trl":{\n         "dungeon_crawl_all_classes_total_boss_wins":29,\n         "dungeon_crawl_all_classes_total_run_wins":1,\n         "dungeon_crawl_hunter_boss_wins":1,\n         "dungeon_crawl_hunter_run_wins":0,\n         "dungeon_crawl_paladin_boss_wins":0,\n         "dungeon_crawl_paladin_run_wins":0,\n         "dungeon_crawl_mage_boss_wins":7,\n         "dungeon_crawl_mage_run_wins":0,\n         "dungeon_crawl_warlock_boss_wins":6,\n         "dungeon_crawl_warlock_run_wins":0,\n         "dungeon_crawl_warrior_boss_wins":8,\n         "dungeon_crawl_warrior_run_wins":1,\n         "dungeon_crawl_shaman_boss_wins":6,\n         "dungeon_crawl_shaman_run_wins":0,\n         "dungeon_crawl_priest_boss_wins":1,\n         "dungeon_crawl_priest_run_wins":0,\n         "dungeon_crawl_rogue_boss_wins":0,\n         "dungeon_crawl_rogue_run_wins":0,\n         "dungeon_crawl_druid_boss_wins":0}}"\n      }\n   },\n   "feature":"match_info"\n}\n')),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Event Data"),(0,l.kt)("th",{parentName:"tr",align:null},"Fired When"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_start"),(0,l.kt)("td",{parentName:"tr",align:null},"Wild / Standard"),(0,l.kt)("td",{parentName:"tr",align:null},"match starts"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"123.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_end"),(0,l.kt)("td",{parentName:"tr",align:null},'"win"/"lose"/"tie"/Battlegrounds rank'),(0,l.kt)("td",{parentName:"tr",align:null},"match ends"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"123.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"match_outcome"),(0,l.kt)("td",{parentName:"tr",align:null},'"WON" / "LOST"'),(0,l.kt)("td",{parentName:"tr",align:null},"match concludes"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is not reliable on some rare scenarios, please use ",(0,l.kt)("inlineCode",{parentName:"td"},'"match_end"')," event data instead"),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"match_start-note"},(0,l.kt)("em",{parentName:"h4"},"match_start")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":"wild"}]}\n{"events":[{"name":"match_start","data":"standard"}]}\n')),(0,l.kt)("h4",{id:"match_end-note"},(0,l.kt)("em",{parentName:"h4"},"match_end")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"win"}]}\n{"events":[{"name":"match_end","data":"lose"}]}\n{"events":[{"name":"match_end","data":"tie"}]}\n{"events":[{"name":"match_end","data":"7"}]}\n')),(0,l.kt)("h4",{id:"match_outcome-note"},(0,l.kt)("em",{parentName:"h4"},"match_outcome")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_outcome","data":"WON"}]}\n{"events":[{"name":"match_outcome","data":"LOST"}]}\n')),(0,l.kt)("h2",{id:"match_info"},(0,l.kt)("inlineCode",{parentName:"h2"},"match_info")),(0,l.kt)("h3",{id:"info-updates-5"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pseudo_match_id"),(0,l.kt)("td",{parentName:"tr",align:null},"match_info"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the current match."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#pseudo_match_id-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"134.0")))),(0,l.kt)("h4",{id:"pseudo_match_id-note"},(0,l.kt)("em",{parentName:"h4"},"pseudo_match_id")," note"),(0,l.kt)("p",null,"This is an Overwolf generated code for internal use, not issued by the game or by Blizzard."),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"pseudo_match_id":"5a7e3729-993c-414d-8e3f-592faeef81e7"}},"feature":"match_info"}\n')),(0,l.kt)("h2",{id:"arena"},(0,l.kt)("inlineCode",{parentName:"h2"},"arena")),(0,l.kt)("h3",{id:"info-updates-6"},"Info Updates"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"),(0,l.kt)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arena_draft"),(0,l.kt)("td",{parentName:"tr",align:null},"arena"),(0,l.kt)("td",{parentName:"tr",align:null},"Three offered cards during arena draft."),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#arena_draft-note"},"notes")),(0,l.kt)("td",{parentName:"tr",align:null},"184.0")))),(0,l.kt)("h4",{id:"arena_draft-note"},(0,l.kt)("em",{parentName:"h4"},"arena_draft")," note"),(0,l.kt)("p",null,"Data Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"info":{"arena":{"arena_draft":"{"cards":["TRL_509","SW_067","SW_319"]}"}},"feature":"arena"}\n')))}k.isMDXComponent=!0}}]);