---
id:overwolf-games-events-lol
title: League of Legends Game Events
sidebar_label: LOL Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
5426
:::

Note that you can consume also the LOL game launcher events. read more info [here](overwolf-games-launchers-events-lol).

## Sample Apps

* [LOL game events sample app](https://github.com/overwolf/events-sample-apps)
* [Summoner and team info sample app](https://github.com/overwolf/lol-summoner-team-info-sample-app) – this sample app gets “summoner region” and “my team” info before the game starts (while the user in the “champion select” phase) more information about getting data from LoL launcher/client can be found [here](overwolf-games-launchers).

## Available Features

* [matchState](#matchstate)
* [match_info](#match_info)
* [death](#death)
* [respawn](#respawn)
* [abilities](#abilities)
* [kill](#kill)
* [assist](#assist)
* [gold](#gold)
* [minions](#minions)
* [summoner_info](#summoner-info)
* [gameMode](#gamemode)
* [teams](#teams)
* [level](#level)
* [announcer](#announcer)
* [counters](#counters)

## `matchState`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
matchStarted | game_info   | true/false (string)       |                       |   0.140       |
matchOutcome | game_info   | win/lose                  |                       |   0.140       |
matchId      | game_info   | The current match id      |  `matchId:3828196424` |   0.120       |
queueId      | game_info   | The current match queue id|  `queueId:440`        |   0.120       |

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        | Match has started   |  Match has started |   0.140       |
matchEnd   | null        |  Match is ended     |  Match is ended    |   0.140       |

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current session’s ID code. Example:</br> `a4e8fc75-b35e-466f-976c-09f4ee633d95`  |  This is an Overwolf-generated code. Unrelated to Riot Games.  |   0.130 |
game_mode | match_info | Whether the current game mode is TFT or default LoL. See [notes](#game_mode-notes) |                 |   0.133       |
#### *game_mode* notes

Data example:

`{"info":{"match_info":{"game_mode":"tft"}},"feature":"match_info"}`  
`{"info":{"match_info":{"game_mode":"lol"}},"feature":"match_info"}`

## `death`

### Info Updates

key          | Category    | Values                            | Notes                 | Since Version |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
deaths       | game_info   | Number of deaths for this session |                       |   0.77        |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since Version |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
death | Number of deaths for this session | The player’s champion died  |  Match has started |     0.77      | 

## `respawn`

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
respawn    | null        | The player’s champion respawned |  Match has started |   0.140       | 

## `abilities`

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
ability    | ability number        | player use an ability	 |  <ul><li>abilityies are numbered between 1-4 “ability”</li><li>event is fired when the player clicked on the ability key (but he may cancel the ability action later)</li></ul>  |   0.140       | 
usedAbility  | JSON containing: “type” with the ability number between 1-4. Example:</br> `{ type: "4" }` for ult        | player activated the ability	 |  “usedAbility” fired when the player actually activated the ability  |   0.31       | 

## `kill`

### Info Updates

key         | Category    | Values                          | Notes                 | Since Version |
----------- | ------------| --------------------------------| --------------------- | ------------- | 
kills       | game_info   | Total kills in the match        |                       |   0.35        |
doubleKills | game_info   | Total double-kills in the match |                       |   0.35        |
tripleKills | game_info   | Total triple-kills in the match |                       |   0.35        |
quadraKills | game_info   | Total quadra-kills in the match |                       |   0.35        |
pentaKills  | game_info   | Total penta-kills in the match  |                       |   0.35        |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since Version |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
kill | A JSON containing:</br><ul><li>count: Number of times this kill type happened in the match</li><li>label: kill / double_kill / triple_kill / quadra_kill / penta_kill</li><li>totalKills: The total kills in this match</li></ul> | Killing another champion  |   |     0.7      | 

## `assist`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since Version |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
assist | Number of times this event happened in the match | When you assists killing another champion |           |       0.70    |

## `gold`

### Info Updates

key    | Category    | Values                          | Notes                 | Since Version |
-------| ------------| --------------------------------| --------------------- | ------------- | 
gold   | game_info   | numeric value – amount of gold  |                       |  0.70         |

## `minions`

### Info Updates

key                | Category    | Values                                         | Notes  | Since Version |
-------------------| ------------| -----------------------------------------------| ------ | ------------- | 
minionKills        | game_info   | amount of enemy minions killed by the player   |        |    0.70       |
neutralMinionKills | game_info   | amount of neutral minions killed by the player |        |    0.70       |

## `summoner_info`

### Info Updates

key       | Category        | Values                                         | Notes                                                   | Since Version |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- | 
id        | summoner_info   | The user’s Summoner Id                         |   Fired immediately with game start                     |      0.7      |
region    | summoner_info   | The user’s region (EUE, EUW, etc.)             |   Important note: Push runes/items feature is not allowed (by Riot) on Korea region, so in case your app provides such a feature, make sure to disable it for KR users.                                                                |    0.7        |
champion  | summoner_info   | the name of the selected champion              |  All champion names (provided by the Overwolf Game Events Provider) match the champion-key from the Riot API, except for `Fiddlesticks`.</br><ul><li>Game Events Provider value: “FiddleSticks”</li><li>Riot API value: “Fiddlesticks”</li></ul>  |    0.7 |
level     | summoner_info   | The user’s summoner level                      |                                                         |    0.7        |
tier      | summoner_info   | The user’s tier in his most played queue       |                                                         |    0.120      |
division  | summoner_info   | The user’s division in his most played queue   |                                                         |    0.120      |
queue     | summoner_info   | The most played match queue                    |                                                         |    0.120      |
accountId | summoner_info   |The user’s account id                           |                                                         |    0.120      |

## `teams`

:::warning
 `teams` info-update might be provided a bit late in some game modes (a few seconds before the loading screen ends), this is a known issue and we’re working on a fix.
:::

### Info Updates

key         | Category    | Values                                                                                | Notes                 | Since Version |
----------- | ------------| --------------------------------------------------------------------------------------| --------------------- | ------------- | 
teams       | game_info   |  A URI – decoded string that represents a JSON object with the teams formation        |   Need to decodeURI() the value and then JSON.parse() the result. See example below.                    |   0.7        |

Lets assume we save the data in a variable called `info`. It will be the equivalent of:

```javascript
var info = {"info":[{"category":"game_info","key":"teams","value":
"%5B%7B%22team%22:%22Order%22,%22champion%22:%22Riven%22,%22skinId%22:%227%22,%22summoner%22:%22ruizete%22%7D,
%7B%22team%22:%22Order%22,%22champion%22:%22Twitch%22,%22skinId%22:%228%22,%22summoner%22:%22heaser%22%7D,
%7B%22team%22:%22Order%22,%22champion%22:%22Vi%22,%22skinId%22:%222%22,%22summoner%22:%22hono%20kyumin%22%7D,
%7B%22team%22:%22Order%22,%22champion%22:%22Brand%22,%22skinId%22:%225%22,%22summoner%22:%22s%C3%A2baki%22%7D,
%7B%22team%22:%22Order%22,%22champion%22:%22Kennen%22,%22skinId%22:%226%22,%22summoner%22:%22fupnlul%22%7D,
%7B%22team%22:%22Chaos%22,%22champion%22:%22Nunu%22,%22skinId%22:%226%22,%22summoner%22:%22john1126y%22%7D,
%7B%22team%22:%22Chaos%22,%22champion%22:%22Orianna%22,%22skinId%22:%220%22,%22summoner%22:%22lp%20omg%20cartman%22%7D,
%7B%22team%22:%22Chaos%22,%22champion%22:%22Ryze%22,%22skinId%22:%227%22,%22summoner%22:%22bigmoney%C5%82egolas%22%7D,
%7B%22team%22:%22Chaos%22,%22champion%22:%22Malzahar%22,%22skinId%22:%220%22,%22summoner%22:%22hell0w0rld%22%7D,
%7B%22team%22:%22Chaos%22,%22champion%22:%22Kayn%22,%22skinId%22:%220%22,%22summoner%22:%22erikolo878%22%7D%5D"}]} 
```

So now we will decode the value:

```javascript
var decoded = decodeURI(info.info[0].value);
```

And get:

```json
"[{"team":"Order","champion":"Riven","skinId":"7","summoner":"ruizete"},
{"team":"Order","champion":"Twitch","skinId":"8","summoner":"heaser"},
{"team":"Order","champion":"Vi","skinId":"2","summoner":"hono kyumin"},
{"team":"Order","champion":"Brand","skinId":"5","summoner":"sâbaki"},
{"team":"Order","champion":"Kennen","skinId":"6","summoner":"fupnlul"},
{"team":"Chaos","champion":"Nunu","skinId":"6","summoner":"john1126y"},
{"team":"Chaos","champion":"Orianna","skinId":"0","summoner":"lp omg cartman"},
{"team":"Chaos","champion":"Ryze","skinId":"7","summoner":"bigmoneyłegolas"},
{"team":"Chaos","champion":"Malzahar","skinId":"0","summoner":"hell0w0rld"},
{"team":"Chaos","champion":"Kayn","skinId":"0","summoner":"erikolo878"}]"}
```

And finally, we will parse the string and get a Json array with the teams:

```javascript
var teams = JSON.parse(decoded);
```

## `level`

### Info Updates

key       | Category        | Values                                         | Notes                                                   | Since Version |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- | 
level     | level           | the level number of the player                 |   Fired immediately with game start                     |      0.19     |

## `announcer`

### Events

Event             | Event Data                           | Fired When (announcement)                   | Notes              | Since Version |
------------------| -------------------------------------| ------------------------------------------- | ------------------ | --------------|
welcome_rift      | null                                 | “Welcome to Summoner’s Rift!”               |                    |     0.75      | 
minions_30_sec    | null                                 | “Thirty seconds until minions spawn!”       |                    |     0.75      | 
minions_spawn     | null                                 | “Minions have spawned!”                     |                    |     0.75      | 
first_blood       | null                                 | “First Blood!”                              |                    |     0.75      | 
defeat            | null                                 | “Defeat!”                                   |                    |     0.75      | 
victory           | null                                 | “Victory!”                                  |                    |     0.75      | 
shutdown          | null                                 | “Shut down!”                                |                    |     0.75      | 
ace               | null                                 | “Aced!”                                     |                    |     0.75      | 
slain             | “team”                               | “An enemy has been slain!!”                 |                    |     0.75      | 
self_slain        | “team”                               | “You have slain an enemy!!”                 |                    |     0.75      | 
killing_spree     | “team”                               | “Killing Spree!”                            |                    |     0.75      | 
rampage           | “team”                               | “Rampage!”                                  |                    |     0.75      | 
unstoppable       | “team”                               | “unstoppable”                               |                    |     0.75      | 
dominating        | “team”                               | “Dominating!”                               |                    |     0.75      | 
godlike           | “team”                               | “Godlike!”                                  |                    |     0.75      | 
legendary         | “team”                               | “Legendary!”                                |                    |     0.75      | 
double_kill       | “team”                               | “Double Kill!”                              |                    |     0.75      | 
triple_kill       | “team”                               | “Triple Kill!”                              |                    |     0.75      | 
quadra_kill       | “team”                               | “Quadra Kill!”                              |                    |     0.75      | 
penta_kill        | “team”                               | “Penta Kill!”                               |                    |     0.75      | 
turret_destroy    | "team"                               | “Your turret has been destroyed!”           |                    |     0.75      | 
inhibitor_destroy | “team”                               | “Your inhibitor has been destroyed!”        |                    |     0.75      | 
inhibitor_respawn | “team”                               | “Your inhibitor is respawning soon!”        |                    |     0.75      | 
slain             | "enemy"                              | “An ally has been slain!”                   |                    |     0.75      | 
slain_self        | “enemy”                              | “You have been slain!”                      |                    |     0.75      | 
killing_spree     | “enemy”                              | “Enemy Killing Spree!”                      |                    |     0.75      | 
rampage           | “enemy”                              | “Enemy Rampage!”                            |                    |     0.75      | 
unstoppable       | “enemy”                              | “An enemy is Unstoppable!”                  |                    |     0.75      | 
dominating        | “enemy”                              | “An enemy is Dominating!”                   |                    |     0.75      | 
godlike           | “enemy”                              | “An enemy is Godlike!”                      |                    |     0.75      | 
double_kill       | “enemy”                              | “Enemy Double Kill!”                        |                    |     0.75      | 
triple_kill       | “enemy”                              | “Enemy Triple Kill!”                        |                    |     0.75      | 
quadra_kill       | “enemy”                              | “Enemy Quadra Kill!”                        |                    |     0.75      | 
penta_kill        | “enemy”                              | “Enemy Penta Kill!”                         |                    |     0.75      | 
inhibitor_destroy | “enemy”                              | “Your team has destroyed an inhibitor!”     |                    |     0.75      | 
inhibitor_respawn | “enemy”                              | “The enemy’s inhibitor is respawning soon!” |                    |     0.75      | 
turret_destroy    | “enemy”                              | “Your team has destroyed a turret!”         |                    |     0.75      | 
executed          | "minion"                             | “Executed!”                                 |                    |     0.75      | 
executed          | "tower"                              | “Executed!”                                 |                    |     0.75      | 

## `counters`

### Info Updates

key  | Category    | Values                                     | Notes  | Since Version |
-----| ------------| -------------------------------------------| ------ | ------------- | 
ping | performance | The change in latency of the local player  |        |    0.128      |
