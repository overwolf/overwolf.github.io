---
id:overwolf-games-events-lol
title: League of Legends Game Events
sidebar_label: League of Legends
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
5426
:::

Note that you can also use the LOL game launcher events. Read more [here](overwolf-games-launchers-events-lol).

## Sample Apps

* [LOL game events sample app](https://github.com/overwolf/events-sample-apps)
* [Summoner and team info sample app](https://github.com/overwolf/lol-summoner-team-info-sample-app) – this sample app gets “summoner region” and “my team” info during the champion selection phase, before the game begins. More information about getting data from LoL launcher/client can be found [here](overwolf-games-launchers).

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
* [summoner_info](#summoner_info)
* [gameMode](#gamemode)
* [teams](#teams)
* [level](#level)
* [announcer](#announcer)
* [counters](#counters)

## Game events status

It's highly recommended to communicate errors and warnings to your app users. Check current game event status [here](../status/all) or  easily check game event status from your app [using our API](../topics/howto-check-events-status-from-app).

## `matchState`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
matchStarted | game_info   | true/false (string)       |                       |   140.0       |
matchOutcome | game_info   | win/lose                  |                       |   140       |
matchId      | game_info   | Current match id      |  `matchId:3828196424` |   120.0       |
queueId      | game_info   | Current match [queue id](https://developer.riotgames.com/game-constants.html)|  `queueId:440`        |   120.0       |

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        | Match has started   |  Match has started |   140.0       |
matchEnd   | null        |  Match has ended     |  Match is ended    |   140.0       |

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | Current session’s ID code. Example:</br> `a4e8fc75-b35e-466f-976c-09f4ee633d95`  |  This is an Overwolf-generated code unrelated to Riot Games.  |   0.130 |
game_mode | match_info | Whether the current game mode is TFT or default LoL. See [notes](#game_mode-notes) |                 |   133.0       |
#### *game_mode* notes

Data example:

`{"info":{"match_info":{"game_mode":"tft"}},"feature":"match_info"}`  
`{"info":{"match_info":{"game_mode":"lol"}},"feature":"match_info"}`

## `death`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
deaths       | game_info   | Number of deaths for this session |                       |   77.0        |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since GEP Ver. |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
death | Number of deaths for this session | The player’s champion died  |  Match has started |     77.0      | 

## `respawn`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
respawn    | null        | The player’s champion respawned |  Match has started |   140.0       | 

## `abilities`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
ability    | ability number        | player has selected an ability	 |  <ul><li>abilities are numbered from 1-4 “ability”</li><li>event is fired when the player clicked an ability key (but he may cancel the ability action later)</li></ul>  |   140.0       | 
usedAbility  | JSON containing: “type” with the ability number between 1-4. Example:</br> `{ type: "4" }` for ult        | player activated the ability	 |  “usedAbility” fired when the player actually activated the ability  |   0.31       | 

## `kill`

### Info Updates

key         | Category    | Values                          | Notes                 | Since GEP Ver. |
----------- | ------------| --------------------------------| --------------------- | ------------- | 
kills       | game_info   | Total kills in the match        |                       |   35.0        |
doubleKills | game_info   | Total double-kills in the match |                       |   35.0        |
tripleKills | game_info   | Total triple-kills in the match |                       |   35.0        |
quadraKills | game_info   | Total quadra-kills in the match |                       |   35.0        |
pentaKills  | game_info   | Total penta-kills in the match  |                       |   35.0        |

### Events

Event | Event Data                        | Fired When                  | Notes              | Since GEP Ver. |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
kill | A JSON containing:</br><ul><li>count: Number of times this kill type happened in the match</li><li>label: kill / double_kill / triple_kill / quadra_kill / penta_kill</li><li>totalKills: Total kills in this match</li></ul> | Killing another champion  |   |     70.0      | 

## `assist`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
assist | Number of times this event happened in the match | When you assist killing another champion |           |       70.00    |

## `gold`

### Info Updates

key    | Category    | Values                          | Notes                 | Since GEP Ver. |
-------| ------------| --------------------------------| --------------------- | ------------- | 
gold   | game_info   | numeric value – amount of gold  |                       |  70.00         |

## `minions`

### Info Updates

key                | Category    | Values                                         | Notes  | Since GEP Ver. |
-------------------| ------------| -----------------------------------------------| ------ | ------------- | 
minionKills        | game_info   | amount of enemy minions killed by the player   |        |    70.0       |
neutralMinionKills | game_info   | amount of neutral minions killed by the player |        |    70.0      |

## `summoner_info`

### Info Updates

key       | Category        | Values                                         | Notes                                                   | Since GEP Ver. |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- | 
id        | summoner_info   | User’s Summoner Id                         |   Fired immediately with game start                     |      70.0      |
region    | summoner_info   | User’s region (EUE, EUW, etc.)             |   Important note: Push runes/items feature is not allowed (by Riot) on Korea region, so in case your app provides such a feature, make sure to disable it for KR users.                                                                |    70.0        |
champion  | summoner_info   | Name of the selected champion              |  All champion names (provided by the Overwolf Game Events Provider) match the champion-key from the Riot API, except for `Fiddlesticks`.</br><ul><li>Game Events Provider value: “FiddleSticks”</li><li>Riot API value: “Fiddlesticks”</li></ul>  |    70.0 |
level     | summoner_info   | User’s summoner level                      |                                                         |    70.0        |
tier      | summoner_info   | User’s tier in his most played queue       |                                                         |    120.0      |
division  | summoner_info   | User’s division in his most played queue   |                                                         |    120.0      |
queue     | summoner_info   | Most played match queue                    |                                                         |    120.0      |
accountId | summoner_info   | User’s account id                           |                                                         |    120.0      |

## `teams`

:::warning
 `teams` info-update might be provided a bit late in some game modes, as late as a few seconds before the loading screen ends. This is a known issue and we’re working on a fix.
:::

### Info Updates

key         | Category    | Values                                                                                | Notes                 | Since GEP Ver. |
----------- | ------------| --------------------------------------------------------------------------------------| --------------------- | ------------- | 
teams       | game_info   |  A URI – decoded string that represents a JSON object with the teams formation        |   Need to decodeURI() the value and then JSON.parse() the result. See example below.                    |   70.0        |

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

And finally, we parse the string and get a Json array with the teams:

```javascript
var teams = JSON.parse(decoded);
```

## `level`

### Info Updates

key       | Category        | Values                                         | Notes                                                   | Since GEP Ver. |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- | 
level     | level           | Current level of the player's champion                 |   Fired immediately when game starts, updates whenever the champion levels up                     |      0.19     |

## `announcer`

### Events

Event             | Event Data                           | Fired When (announcement)                   | Notes              | Since GEP Ver. |
------------------| -------------------------------------| ------------------------------------------- | ------------------ | --------------|
welcome_rift      | null                                 | “Welcome to Summoner’s Rift!”               |                    |     70.05      | 
minions_30_sec    | null                                 | “Thirty seconds until minions spawn!”       |                    |     70.05      | 
minions_spawn     | null                                 | “Minions have spawned!”                     |                    |     70.05      | 
first_blood       | null                                 | “First Blood!”                              |                    |     70.05      | 
defeat            | null                                 | “Defeat!”                                   |                    |     70.05      | 
victory           | null                                 | “Victory!”                                  |                    |     75.0      | 
shutdown          | null                                 | “Shut down!”                                |                    |     75.0      | 
ace               | null                                 | “Aced!”                                     |                    |     75.0      | 
slain             | “team”                               | “An enemy has been slain!!”                 |                    |     75.0      | 
self_slain        | “team”                               | “You have slain an enemy!!”                 |                    |     75.0      | 
killing_spree     | “team”                               | “Killing Spree!”                            |                    |     75.0      | 
rampage           | “team”                               | “Rampage!”                                  |                    |     75.0      | 
unstoppable       | “team”                               | “Unstoppable”                               |                    |     75.0      | 
dominating        | “team”                               | “Dominating!”                               |                    |     75.0      | 
godlike           | “team”                               | “Godlike!”                                  |                    |     75.0      | 
legendary         | “team”                               | “Legendary!”                                |                    |     75.0      | 
double_kill       | “team”                               | “Double Kill!”                              |                    |     75.0      | 
triple_kill       | “team”                               | “Triple Kill!”                              |                    |     75.0      | 
quadra_kill       | “team”                               | “Quadra Kill!”                              |                    |     75.0      | 
penta_kill        | “team”                               | “Penta Kill!”                               |                    |     75.0      | 
turret_destroy    | "team"                               | “Your turret has been destroyed!”           |                    |     75.0      | 
inhibitor_destroy | “team”                               | “Your inhibitor has been destroyed!”        |                    |     75.0      | 
inhibitor_respawn | “team”                               | “Your inhibitor is respawning soon!”        |                    |     75.0      | 
slain             | "enemy"                              | “An ally has been slain!”                   |                    |     75.0      | 
slain_self        | “enemy”                              | “You have been slain!”                      |                    |     75.0      | 
killing_spree     | “enemy”                              | “Enemy Killing Spree!”                      |                    |     75.0      | 
rampage           | “enemy”                              | “Enemy Rampage!”                            |                    |     75.0      | 
unstoppable       | “enemy”                              | “An enemy is Unstoppable!”                  |                    |     75.0      | 
dominating        | “enemy”                              | “An enemy is Dominating!”                   |                    |     75.0      | 
godlike           | “enemy”                              | “An enemy is Godlike!”                      |                    |     75.0      | 
double_kill       | “enemy”                              | “Enemy Double Kill!”                        |                    |     75.0      | 
triple_kill       | “enemy”                              | “Enemy Triple Kill!”                        |                    |     75.0      | 
quadra_kill       | “enemy”                              | “Enemy Quadra Kill!”                        |                    |     75.0      | 
penta_kill        | “enemy”                              | “Enemy Penta Kill!”                         |                    |     75.0      | 
inhibitor_destroy | “enemy”                              | “Your team has destroyed an inhibitor!”     |                    |     75.0      | 
inhibitor_respawn | “enemy”                              | “The enemy’s inhibitor is respawning soon!” |                    |     75.0      | 
turret_destroy    | “enemy”                              | “Your team has destroyed a turret!”         |                    |     75.0      | 
executed          | "minion"                             | “Executed!”                                 |                    |     75.0      | 
executed          | "tower"                              | “Executed!”                                 |                    |     75.0      | 

## `counters`

### Info Updates

key  | Category    | Values                                     | Notes  | Since GEP Ver. |
-----| ------------| -------------------------------------------| ------ | ------------- | 
ping | performance | The change in latency values of the local player  |See [notes](#ping-note)|    128.0      |

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
match_clock | The exact time in the match. | Every second that the clock is ticking. |See [notes](#match_clock-note)|      138.0    |

#### *ping* note

Data Example:

```json
{"info":{"performance":{"ping":"77"}},"feature":"counters"}
```

#### *match_clock* note

Data Example:

```json
{"events":[{"name":"match_clock","data":"1249"}]}
```

## `gameMode`

#### *gameMode note*

The information provided by this feature is incorrect at the moment. Please use "queueID" instead. (can be found either in the launcher events provider or in the game events provider).
* [matchState](#matchstate) You can redirect from here.
