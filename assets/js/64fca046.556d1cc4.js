"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3913],{35318:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(27378);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),g=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=g(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=g(t),d=s,u=c["".concat(i,".").concat(d)]||c[d]||p[d]||r;return t?n.createElement(u,l(l({ref:a},m),{},{components:t})):n.createElement(u,l({ref:a},m))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[c]="string"==typeof e?e:s,l[1]=o;for(var g=2;g<r;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65864:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(27378);const s=function(e){const{name:a,pathUrl:t}=e;return n.createElement("a",{href:`${t}`,className:"fancy-link"},n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)}},30809:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(27378),s=t(75404);function r(e){const{className:a,path:t,imgSrc:s,text:r,gameID:l}=e;return n.createElement("li",{className:a},n.createElement("a",{href:t},n.createElement("span",{className:"game-info"},n.createElement("img",{src:s})," ",r),n.createElement("span",{className:"game-id"},"Game ID: ",n.createElement("span",null,l))))}const l=function(e){const{gameListData:a,urlAsDocsPath:t}=e,l=function(e,a){return e.map((e=>{let t="game "+(0,s.F)(e.state);return n.createElement(r,{key:e.id,gameID:e.displayId||e.id,className:t,path:a?e.docs:e.path,imgSrc:e.iconUrl,text:e.name})}))}(a,t);return l.sort(((e,a)=>e.props.text<a.props.text?-1:1)),n.createElement("article",null,n.createElement("div",{className:"gep-games-list"},n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some game events may be unavailable"),n.createElement("li",{className:"bad"},"Game events are currently unavailable")),n.createElement("ul",{className:"list"},l)))};var o=t(88476);const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgBjVVNTBNBFH6zlNoEgohCMdKmCT1gQLrIhR+jlINwIRDxKmCiB+UgF6M3MB4M8WA46EUTwYsnDNyAgzQGCIQQigEhEWJDiVBKoJWfSKE7vjd2N8t2S/iSzc6+nXlv3ve+N8PgFMhyTfaxEuvgjN0C4C7g4CI7A4igzc+4MmCR+KDfPxlI5YOZO65wHfG0j8B5DZwFDHrTmfLCLFCa0VBcWtnBufQZh0XGf3mFbrCcs8Lh3l7SnhTO2i7ZCw63QmuTKQOUlFZ14XZe4dBm9HA+Px88DQ2Q43DC5soKxGMx4xQbA1afa3ewcCjoSwpAO084TwlHqSwyKKmrh/XFRbNMiPMazCSqZiJqQJwfK9IsB8g+LcC5jEzNS1VLK4y+e5tqaiRdUsqoJiKDi3bnG3xVaI4yM+GqtxYcsgwXnU5h29/ZhvhRTDwWq1VEycjJASfOyUL6toOr+gA2RQE5vLnWx4RiFOmX+sddfQOLWQjL42MQ3QhhsAzh7E9oQ/tHmB8eRqrqYKa/H/LcheDwyLhmHOuzrEVJl6wXLMcKa9SHJgcTn/q078P9PbGYKFkYGTrxT6UrODcnHpqjDxBTYk8kzqQmSMU5UuV93I4jDkOvu4UTPeibpJsKDPvIgs0kG50SSJbX7zTDRF+fyMIMRFtBqSdprQrsdpcEBuVsLi8jp24ovl0nVKJ3TnYKrCK6saF905vWnsgAQAQ4gYWRYai615rMNaL+6TNo7HoJZvA+ahdrjUjLszva9FlQEy2NjkKR1yuaSY/f+L0yMS4kq4IEQJ1NCiIJGxCRsAYBvSXLbhdK+IkLaFd6XsNo16uEaCGaqKNN68S5X2KM+fQ2lVMq4MyXfijHQtMuzZBlzxfzCLQR4zyFwYBkkaw9qqG8+S7ufExwrQahWlBWpHF9gQnUM0QPoTYhZ9qQlkCMD1r8fl+k+FqlDxir+bu7i04uCypUUE3mh4fEmJRFz+H+vlBMNBQSdtp5LvaDw1OGlK0n2IHepaXJgDjsiooqXGlWaRaH2XSg6fkkh2vf5wTXKmiOQ/aADWmhcRQzDfr/N2FibSQeU8oogDjstrbWInl4WaBy641KCCMFRE9gelqz0ZFd3dIG3z68F0rbDga1g1Bwr8SfL/2YEprV7oMwnt/23CtAVIEB26tBEeRgZwdy8HS9+eAhfDU0oca7onQtzk91q99Jd3Li4ukEk7vBXV0tJGk8kxKI4M7JeY/eaHrpU02kdKmTMWiDs4BzX/yI3yfOjb/YaesokMXKGlERTUgdiVzNKkANytHxwZ6tJxDwRVL5+AdS/cLHM611hQAAAABJRU5ErkJggg==",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB5VTLccIwEF0bcw4dRKkgMb8ZbpQAFUAqIB3YVJBQAaSChAqSnDjwcUpQOiBn//KWsRnHYyzZV96MRvJ6v29XIroK7Ha71WazEVQDlkphv99P4zieNJvNGJ+PVBGmSoGdJ8fpdrsdUkUYRULP81pRFI1wvEeAp8wvieV2u91XqhsAWbqGYcxwbJXYSd1ARs750LKsG9/3f0zTFBA5WA8l9hKVjvv9/vclhX896PV6n0EQ/ML5Mz7fFM4ZArofpFMB8x6GITsdkgZAowv9NQJ4qMK+VMU5AGZ91mg0jmiqTGUw5ApcKu9HihWonQ8GA1kYIAtUI5DdkjSryYATXIBqNxUU3gP0QYACySvvgKkpkKdo4Z8DNpapwCAF+CZjc5CZSEQSVNqgz8ndkXMSoMpOqVIGYCSU8WSNTkaootPpzA+Hw22iIrhfkHPl7+12+0u7giz40cPGT8cRVdzZtn1U2Sjfoixwc6fYeBx5pCc6NpUCMJD5GBtnrrqE9QKAFp6uF9Ic4coBTkamudDWpRrg5vK06OjWCsDAWK7pKvAH4L+rVOSAJHgAAAAASUVORK5CYII=";var m;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}const p=e=>{let{title:a,titleId:t,...s}=e;return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},s),a?n.createElement("title",{id:t},a):null,m||(m=n.createElement("circle",{cx:8,cy:8,r:7})))};const d=function(e){const{name:a,platformStatus:t,electronStatus:r}=e;return n.createElement("div",{className:"row"},n.createElement("div",{className:"text"},a),n.createElement("div",{className:`status ${(0,s.F)(t??0)}`},n.createElement(p,null)),n.createElement("div",{className:`status ${(0,s.F)(r??0)}`},n.createElement(p,null)))};function u(e){return n.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:e=>{!function(e){const a=e.target,t=document.querySelectorAll(".game-data .body"),n=a.value.toLowerCase();0===n.length?t.forEach((e=>e.removeAttribute("style"))):t.forEach((function(e){const a=e.querySelector(".text")?.textContent?.toLowerCase();a?.includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),n.createElement("button",{type:"submit",className:"search-submit",title:"Search"},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}const f=function(e){const{gameStatusData:a,gameId:t,endOfLife:s}=e,r=e=>{if(!a.features||0===a.features.length)return n.createElement(d,{name:"Coming soon"});const t=[];for(let s of a.features)for(let a of s.keys)a.type==e&&t.push(n.createElement(d,{name:a.name,platformStatus:a.state,electronStatus:a.state}));return t},l=r(0),m=r(1);return n.createElement("article",null,n.createElement("div",{className:"entry-content"},n.createElement("div",{className:"gep-game"},n.createElement(o.Z,{gameId:t,page:"status"}),!s&&n.createElement(n.Fragment,null,n.createElement(u,null),n.createElement("div",{className:"game-events-info"},n.createElement("div",{className:"game-data"},n.createElement("div",{className:"table"},n.createElement("div",{className:"row"},n.createElement("h4",{className:"title"},"Events"),n.createElement("img",{className:"icon",alt:"Overwolf Platform",src:g}),n.createElement("img",{className:"icon",alt:"Overwolf Electron",src:i})),l)),n.createElement("div",{className:"game-data"},n.createElement("div",{className:"table"},n.createElement("div",{className:"row"},n.createElement("h4",{className:"title"},"Info updates"),n.createElement("img",{className:"icon",alt:"Overwolf Platform",src:g}),n.createElement("img",{className:"icon",alt:"Overwolf Electron",src:i})),m)))))))};var h=t(58484),v=t(55759);const w=function(e){const{allGames:a,specificGame:t,gameId:s,docsPath:r,urlAsDocsPath:o=!1,onlyGames:i=!1,onlyLaunchers:g=!1,endOfLife:m}=e,[c,p]=(0,n.useState)(null),[d,u]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(a){async function e(){await fetch("https://game-events-status.overwolf.com/all_prod.json").then((e=>e.json())).then((e=>{const a=[];for(const t of e)h.z[t.game_id]&&(i&&h.z[t.game_id].games||g&&!h.z[t.game_id].launcher||(h.z[t.game_id].state=h.z[t.game_id].endOfLife?0:t.state,a.push(h.z[t.game_id])));p(a)}))}e()}if(t){async function n(){await fetch(`https://game-events-status.overwolf.com/${s}_prod.json`).then((e=>e.json())).then((e=>u(e)))}n()}}),[]),null!=c||null!=d?n.createElement(n.Fragment,null,a&&null!=c&&n.createElement(l,{gameListData:c,urlAsDocsPath:o}),t&&null!=d&&n.createElement(f,{gameStatusData:d,gameId:s,docsPath:r,endOfLife:m})):n.createElement(v.Z,null)}},75404:(e,a,t)=>{t.d(a,{B:()=>l,F:()=>s});const n={[-1]:"Deprecated",0:"unsupported",1:"good",2:"medium",3:"bad"},s=e=>n[e],r={[-1]:"Deprecated",0:"Coming soon",1:"Good to go",2:"Some events may be unavailable",3:"Events are currently unavailable"},l=e=>r[e]},58484:(e,a,t)=>{t.d(a,{z:()=>n});const n={765:{id:765,path:"/status/world-of-warcraft",name:"World of Warcraft",docs:"/api/live-game-data/supported-games/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png"},5426:{id:5426,launcher:10902,path:"/status/league-of-legends",name:"League of Legends",compliance:"/start/game-compliance/league-of-legends",docs:"/api/live-game-data/supported-games/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png"},5855:{id:5855,path:"/status/starcraft-2",name:"StarCraft II",docs:"/api/live-game-data/supported-games/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png"},6350:{id:6350,path:"/status/final-fantasy-xiv",name:"Final Fantasy XIV",docs:"/api/live-game-data/supported-games/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png"},6365:{id:6365,path:"/status/world-of-tanks",name:"World of Tanks",docs:"/api/live-game-data/supported-games/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png"},7212:{id:7212,path:"/status/path-of-exile",name:"Path of Exile",docs:"/api/live-game-data/supported-games/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png"},7314:{id:7314,path:"/status/dota-2",name:"Dota 2",compliance:"/start/game-compliance/dota-2",docs:"/api/live-game-data/supported-games/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png"},8032:{id:8032,path:"/status/minecraft",name:"Minecraft",docs:"/api/live-game-data/supported-games/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png"},8954:{id:8954,path:"/status/warframe",name:"Warframe",docs:"/api/live-game-data/supported-games/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png"},9898:{id:9898,path:"/status/hearthstone",name:"Hearthstone",docs:"/api/live-game-data/supported-games/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png"},10624:{id:10624,path:"/status/heroes-of-the-storm",name:"Heroes of the Storm",docs:"/api/live-game-data/supported-games/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png"},10746:{id:10746,path:"/status/world-of-warships",name:"World of Warships",docs:"/api/live-game-data/supported-games/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png"},10798:{id:10798,path:"/status/rocket-league",name:"Rocket League",docs:"/api/live-game-data/supported-games/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png"},10826:{id:10826,path:"/status/rainbow-six-siege",name:"Rainbow Six Siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/live-game-data/supported-games/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png"},10844:{id:10844,path:"/status/overwatch-2",name:"Overwatch 2",docs:"/api/live-game-data/supported-games/overwatch-2",iconUrl:"/img/games-logos/overwatch-2.png",iconLargeUrl:"/img/games-logos/large/overwatch-2.png"},10902:{id:10902,games:[5426,21570,215701,21556,215561],path:"/status/launchers/league-of-legends",name:"League of Legends Launcher",docs:"/api/live-game-data/supported-launchers/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",name:"PlayerUnknown's Battlegrounds",docs:"/api/live-game-data/supported-games/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png"},21216:{id:21216,path:"/status/fortnite",name:"Fortnite",docs:"/api/live-game-data/supported-games/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png"},21308:{id:21308,path:"/status/magic-the-gathering-arena",name:"Magic: The Gathering Arena",docs:"/api/live-game-data/supported-games/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png"},21404:{id:21404,path:"/status/splitgate-arena-warfare",name:"Splitgate: Arena Warfare",docs:"/api/live-game-data/supported-games/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png"},21556:{id:21556,displayId:5426,launcher:10902,subVariants:[215561],path:"/status/league-of-legends-arena",name:"League of Legends: Arena",docs:"/api/live-game-data/supported-games/league-of-legends-arena",iconUrl:"/img/games-logos/league-of-legends-arena.png",iconLargeUrl:"/img/games-logos/large/league-of-legends-arena.png"},21566:{id:21566,path:"/status/apex-legends",name:"Apex Legends",docs:"/api/live-game-data/supported-games/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png"},21570:{id:21570,displayId:5426,launcher:10902,subVariants:[215701],path:"/status/teamfight-tactics",name:"Teamfight Tactics",compliance:"/start/game-compliance/teamfight-tactics",docs:"/api/live-game-data/supported-games/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png"},21620:{id:21620,path:"/status/legends-of-runeterra",name:"Legends of Runeterra",docs:"/api/live-game-data/supported-games/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png"},21634:{id:21634,path:"/status/escape-from-tarkov",name:"Escape From Tarkov",docs:"/api/live-game-data/supported-games/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png"},21640:{id:21640,path:"/status/valorant",name:"Valorant",docs:"/api/live-game-data/supported-games/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png"},21656:{id:21656,path:"/status/genshin-impact",name:"Genshin Impact",docs:"/api/live-game-data/supported-games/genshin-impact",iconUrl:"/img/games-logos/genshin-impact.png",iconLargeUrl:"/img/games-logos/large/genshin-impact.png"},21668:{id:21668,path:"/status/valheim",name:"Valheim",docs:"/api/live-game-data/supported-games/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png"},21672:{id:21672,path:"/status/eternal-return",name:"Eternal Return",docs:"/api/live-game-data/supported-games/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png"},21816:{id:21816,path:"/status/new-world",name:"New World",compliance:"/start/game-compliance/new-world",docs:"/api/live-game-data/supported-games/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png"},21848:{id:21848,path:"/status/diablo-2-resurrected",name:"Diablo 2 Resurrected",docs:"/api/live-game-data/supported-games/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png"},21854:{id:21854,path:"/status/halo-infinite",name:"Halo Infinite",docs:"/api/live-game-data/supported-games/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png"},21864:{id:21864,path:"/status/lost-ark",name:"Lost Ark",docs:"/api/live-game-data/supported-games/lost-ark",iconUrl:"/img/games-logos/lost-ark.png",iconLargeUrl:"/img/games-logos/large/lost-ark.png"},21876:{id:21876,path:"/status/call-of-duty-vanguard",name:"Call of Duty: Vanguard",docs:"/api/live-game-data/supported-games/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png"},21960:{id:21960,path:"/status/axie-infinity-origin",name:"Axie Infinity Origin",docs:"/api/live-game-data/supported-games/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png"},22088:{id:22088,path:"/status/baldurs-gate-3",name:"Baldur's Gate 3",docs:"/api/live-game-data/supported-games/baldurs-gate-3",iconUrl:"/img/games-logos/baldurs-gate-3.png",iconLargeUrl:"/img/games-logos/large/baldurs-gate-3.png"},22312:{id:22312,path:"/status/leap",name:"LEAP",docs:"/api/live-game-data/supported-games/leap",iconUrl:"/img/games-logos/leap.png",iconLargeUrl:"/img/games-logos/large/leap.png"},22328:{id:22328,path:"/status/call-of-duty-modern-warfare-2",name:"Call of Duty: Modern Warfare 2",docs:"/api/live-game-data/supported-games/call-of-duty-modern-warfare-2",iconUrl:"/img/games-logos/call-of-duty-modern-warfare-2.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-modern-warfare-2.png"},22638:{id:22638,path:"/status/sons-of-the-forest",name:"Sons of the Forest",docs:"/api/live-game-data/supported-games/sons-of-the-forest",iconUrl:"/img/games-logos/sons-of-the-forest.png",iconLargeUrl:"/img/games-logos/large/sons-of-the-forest.png"},22700:{id:22700,path:"/status/diablo-4",name:"Diablo 4",docs:"/api/live-game-data/supported-games/diablo-4",iconUrl:"/img/games-logos/diablo-4.png",iconLargeUrl:"/img/games-logos/large/diablo-4.png"},22730:{id:22730,path:"/status/counter-strike-2",name:"Counter-Strike 2",docs:"/api/live-game-data/supported-games/counter-strike-2",iconUrl:"/img/games-logos/counter-strike-2.png",iconLargeUrl:"/img/games-logos/large/counter-strike-2.png"},23222:{id:23222,path:"/status/starfield",name:"Starfield",docs:"/api/live-game-data/supported-games/starfield",iconUrl:"/img/games-logos/starfield.png",iconLargeUrl:"/img/games-logos/large/starfield.png"},23424:{id:23424,path:"/status/call-of-duty-modern-warfare-3",name:"Call of Duty: Modern Warfare 3",docs:"/api/live-game-data/supported-games/call-of-duty-modern-warfare-3",iconUrl:"/img/games-logos/call-of-duty-modern-warfare-3.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-modern-warfare-3.png"},215561:{id:215561,displayId:22848,launcher:10902,mainVariant:21556,docs:"/api/live-game-data/supported-games/league-of-legends-arena",path:"/status/league-of-legends-public-beta-arena",name:"League of Legends PBE: Arena",variant:"PBE",iconUrl:"/img/games-logos/league-of-legends-public-beta-arena.png",iconLargeUrl:"/img/games-logos/large/league-of-legends-public-beta-arena.png"},215701:{id:215701,displayId:22848,launcher:10902,mainVariant:21570,docs:"/api/live-game-data/supported-games/teamfight-tactics",path:"/status/teamfight-tactics-public-beta",name:"Teamfight Tactics PBE",variant:"PBE",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png"},234241:{id:234241,displayId:23424,path:"/status/call-of-duty-warzone-2-0",name:"Call of Duty: Warzone 2.0",docs:"/api/live-game-data/supported-games/call-of-duty-warzone-2-0",iconUrl:"/img/games-logos/call-of-duty-warzone-2-0.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone-2-0.png"}}},88476:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378),s=t(58484),r=t(75404),l=t(65864);const o=function(e){const{metaData:a,type:t,disabledLinks:s,hasElectron:r}=e,{id:o,displayId:i,path:g,docs:m,compliance:c,variant:p}=a;t||p||console.error("No variant was defined for this game!",a);const d=p??t,u=r?`${t} (Electron)`:p?`${t} (${d})`:`${t} (Platform)`;return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("span",null,u," ID: "),i??o),i&&n.createElement("p",null,n.createElement("span",null,"Tracking ID: "),o),!s.docs&&m&&n.createElement(l.Z,{name:`${d} API docs`,pathUrl:m}),!s.status&&g&&n.createElement(l.Z,{name:`${d} events status`,pathUrl:g}),!s.compliance&&c&&n.createElement(l.Z,{name:`${d} compliance page`,pathUrl:c}))};const i=function(e){const{gamesListData:a}=e,[t,r]=(0,n.useState)(!1),[l,i]=(0,n.useState)(0),g=(0,n.useRef)(null),m=a.map((e=>{const a=s.z[e];return n.createElement("li",null,n.createElement("h3",null,n.createElement("img",{src:a.iconLargeUrl}),n.createElement("span",null,a.name)),n.createElement(o,{metaData:a,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))}));function c(){t?(i(0),r(!1)):(i(g.current.querySelector("ul").clientHeight),r(!0))}return n.createElement("div",{className:"expended-launcher-game-list "+(t?"is-open":"")},n.createElement("button",{className:"expend-btn",onClick:c},n.createElement("svg",{className:"games-icon"},n.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",n.createElement("svg",null,n.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),n.createElement("div",{className:"launcher-game-list-inner",ref:g,style:{height:l+"px"}},n.createElement("ul",{className:"launcher-game-list"},m),n.createElement("button",{className:"hide-button",onClick:c},"Hide List")))};const g=function(e){const{gameState:a,endOfLife:t}=e;return n.createElement("div",{className:"status-tooltip-trigger"},n.createElement("div",{className:"status-tooltip"},n.createElement("span",null,(0,r.B)(t?-1:a))))};var m=t(55759);function c(e,a){return void 0===a&&(a={docs:!1,status:!1,compliance:!1}),a[e]=!0,a}const p=function(e){const{gameId:a,page:t}=e,[l,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){await fetch(`https://game-events-status.overwolf.com/${a}_prod.json`).then((e=>e.json())).then((e=>p(e.state)))}()}),[]);const d=s.z[a],u=s.z[d.launcher],f=d?.games,h=s.z[d.mainVariant],v=d.subVariants;return null!==l?n.createElement("section",{className:"game-info-section"},n.createElement("div",{className:"game-info-item"},n.createElement("h1",{className:`game-info-title ${(0,r.F)(d.endOfLife?0:l)}`},n.createElement("img",{src:d.iconLargeUrl}),n.createElement("span",null,d.name),n.createElement(g,{gameState:l,endOfLife:d.endOfLife})),n.createElement("ul",{className:"game-info-groups"},d.endOfLife&&n.createElement("li",{style:{paddingTop:"10px"}},n.createElement("h1",null,"This game is nearing its end of life, and support will be fully removed at ",d.endOfLife)),n.createElement("li",{className:"main"},n.createElement(o,{metaData:d,type:"Game",disabledLinks:c(t)})),n.createElement("li",{className:"main"},n.createElement(o,{metaData:d,type:"Game",hasElectron:!0,disabledLinks:c(t)})),h&&n.createElement(n.Fragment,null,n.createElement("li",null,n.createElement(o,{metaData:h,type:"Game",disabledLinks:{docs:!1,status:!1,compliance:!1}}))),v&&v.map((e=>{const a=s.z[e];return n.createElement("li",null,n.createElement(o,{metaData:a,type:"Game",disabledLinks:(t=d,r=a,{docs:t.docs===r.docs,compliance:t.compliance===r.compliance,status:t.path===r.path})}));var t,r})),u&&n.createElement("li",null,n.createElement(o,{metaData:u,type:"Launcher",disabledLinks:{docs:!1,status:!1,compliance:!1}})))),f?.length&&n.createElement(i,{gamesListData:f}),"status"===t&&n.createElement("ul",{className:"legend"},n.createElement("li",{className:"good"},"Good to go"),n.createElement("li",{className:"medium"},"Some events may be unavailable"),n.createElement("li",{className:"bad"},"Events are currently unavailable"))):n.createElement(m.Z,{small:!0})}},55759:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(27378);const s=function(e){const{small:a}=e;return n.createElement("div",{className:"preloader "+(a?"small":"")},n.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"https://www.w3.org/2000/svg"},n.createElement("path",{d:"M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1",stroke:"white",strokeWidth:"2"})),n.createElement("span",null,"Loading..."))}},17382:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(25773),s=(t(27378),t(35318)),r=t(30809);const l={id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},o=void 0,i={unversionedId:"api/games/ids",id:"api/games/ids",title:"Games IDs",description:"What is an Overwolf Supported Game?",source:"@site/pages/docs/api/games/ids.mdx",sourceDirName:"api/games",slug:"/api/games/ids",permalink:"/api/games/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/ids.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:-3,frontMatter:{id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"overwolf.games API",permalink:"/api/games/"},next:{title:"overwolf.games.events API",permalink:"/api/games/events/"}},g={},m=[{value:"What is an Overwolf Supported Game?",id:"what-is-an-overwolf-supported-game",level:2},{value:"What is the Game ID",id:"what-is-the-game-id",level:2},{value:"The gamelist.xml file",id:"the-gamelistxml-file",level:2},{value:"Game-ID and Instance-ID",id:"game-id-and-instance-id",level:2},{value:"Games with game events support",id:"games-with-game-events-support",level:2},{value:"Game launcher IDs",id:"game-launcher-ids",level:2}],c={toc:m};function p(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-an-overwolf-supported-game"},"What is an Overwolf Supported Game?"),(0,s.kt)("p",null,'In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Overlay support - games that support overlay injection.\nIn these games, we can display OW apps as an overlay, and make use of Overwolf APIs.\nThe full list of games that support overlay injection can be found in the ",(0,s.kt)("a",{parentName:"p",href:"#the-gamelistxml-file"},"gamelist.xml")," file.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Game events support - games which support overlay injection as well as real-time game events.\nYou can create OW apps for these games, that leverage game events using the ",(0,s.kt)("a",{parentName:"p",href:"/api"},"overwolf.games.events")," API.\nThe full list of games that supports events can be found ",(0,s.kt)("a",{parentName:"p",href:"/status/"},"here"),"."),(0,s.kt)("admonition",{parentName:"li",title:"Note",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Game events can vary between games. If you'd like us to enable a new game event, you can request it as a ",(0,s.kt)("a",{parentName:"p",href:"/support/request-a-feature"},"new feature"),".")))),(0,s.kt)("h2",{id:"what-is-the-game-id"},"What is the Game ID"),(0,s.kt)("p",null,"Each ",(0,s.kt)("a",{parentName:"p",href:"#what-is-an-overwolf-supported-game"},"supported game")," has its own unique Game ID."),(0,s.kt)("p",null,"Game IDs are used in your app\u2019s manifest.json in multiple ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"../manifest#game_targeting"},"game_targeting")," property - A list of games which enable overlay for this app.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"../manifest#game_events"},"game_events")," property - A list of games for which game events are required.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"../manifest#launch_events"},"launch_events")," property -  A list of games triggering the app to launch."))),(0,s.kt)("h2",{id:"the-gamelistxml-file"},"The gamelist.xml file"),(0,s.kt)("p",null,"We support overlay injection in a vast and growing number of games.\nThe list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Navigate to your ",(0,s.kt)("inlineCode",{parentName:"p"},"%localappdata%")," folder and open the ",(0,s.kt)("inlineCode",{parentName:"p"},"overwolf")," folder.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Under each game, you can find game ID listed.\nIf you didn\u2019t find the game you need, ",(0,s.kt)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))),(0,s.kt)("h2",{id:"game-id-and-instance-id"},"Game-ID and Instance-ID"),(0,s.kt)("p",null,'A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.\nWe differentiate between them by adding one digit to each game ID, which is called an "Instance ID."\nBasically, you have the base game ID, and then a series of instances (212160, 212161, \u2026)'),(0,s.kt)("p",null,"When you call ",(0,s.kt)("a",{parentName:"p",href:"../games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),' you will get the same full ID including the instance ID.\nBesides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.\nIn order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.'),(0,s.kt)("p",null,"For example for Fortnite: in order to get 21216 instead of 212161, you can do:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Math.floor(gameInfoResult.gameInfo.id/10)\n")),(0,s.kt)("p",null,"You can see how we use it in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81"},"Fortnite events sample")," app."),(0,s.kt)("p",null,"Note that the ",(0,s.kt)("a",{parentName:"p",href:"../games#runninggameinfo-object"},"RunningGameInfo object")," also has a ",(0,s.kt)("inlineCode",{parentName:"p"},"classId")," property, which already equals the game ID."),(0,s.kt)("h2",{id:"games-with-game-events-support"},"Games with game events support"),(0,s.kt)(r.Z,{allGames:!0,onlyGames:!0,mdxType:"EventsData"}),(0,s.kt)("h2",{id:"game-launcher-ids"},"Game launcher IDs"),(0,s.kt)("p",null,"IDs for Launchers such as the League of Legends launcher can be found ",(0,s.kt)("a",{parentName:"p",href:"launchers/ids"},"here"),"."))}p.isMDXComponent=!0}}]);