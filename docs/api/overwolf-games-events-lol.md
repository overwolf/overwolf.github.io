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

* [gep_internal](#gep_internal)
* [live_client_data](#live_client_data)
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
* [damage](#damage)
* [heal](#heal)


## Game events status

It's highly recommended to communicate errors and warnings to your app users. Check current game event status [here](../status/all) or  easily check game event status from your app [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `live_client_data`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
active_player | live_client_data | In-game data received by the client. |See [notes](#active_player-note)|   143.1    |
all_players | live_client_data | In-game data received by the client. |See [notes](#all_players-note)|   143.1   |
events | live_client_data | In-game data received by the client. |See [notes](#events-note)|   143.1  |
game_data | live_client_data | In-game data received by the client. |See [notes](#game_data-note)|   143.1  |

#### *active_player* note

Data Example:

```json
{ 
   "info":{ 
      "live_client_data":{ 
         "active_player":"{"abilities":{"E":{"abilityLevel":5,"displayName":"Unspeakable Horror","id"
         :"NocturneUnspeakableHorror"
         ,"rawDescription":"GeneratedTip_Spell_NocturneUnspeakableHorror_Description"
         ...
         ,"rawDisplayName":"GeneratedTip_Spell_NocturneUnspeakableHorror_DisplayName"}  
{"id":5008,"rawDescriptio":"perk_tooltip_StatModAdaptive"},{"id":5002,"rawDescription":"perk_tooltip_StatModArmor"}]},"level":17,"summonerName":"Sh4rgaas"}"
      }
   },
   "feature":"live_client_data"
}
```

#### *all_players* note

Data Example:

```json
{ 
   "info":{ 
      "live_client_data":{ 
         "all_players":"[{"championName":"Sett","isBot":false,"isDead":true,"items":
         [{"canUse":false,"consumable":false,"count":1,"displayName":"Dead Man's Plate"
      ,"itemID":3742,"price":1100,"rawDescription":"game_item_description_3742","rawDisplayName":"game_item_displayname_3742","slot":0}
      ,{"canUse":false,"consumable":false,"count":1,"displayName":"Bramble Vest"
...
{"displayName":"Flash","rawDescription":"GeneratedTip_SummonerSpell_SummonerFlash_Description","rawDisplayName"
:"GeneratedTip_SummonerSpell_SummonerFlash_DisplayName"},"summonerSpellTwo":
{"displayName":"Ignite","rawDescription":"GeneratedTip_SummonerSpell_SummonerDot_Description"
,"rawDisplayName":"GeneratedTip_SummonerSpell_SummonerDot_DisplayName"}},"team":"CHAOS"}]"
      }
   },
   "feature":"live_client_data"
}
```

#### *events* note

Data Example:

```json
{ 
   "info":{ 
      "live_client_data":{ 
         "events":"{"Events":[{"EventID":0,"EventName":"GameStart"
         ,"EventTime":0.041107501834630966},{"EventID":1,"EventName":"MinionsSpawning",
         "EventTime":65.05073547363281},{"Assisters":
         ["CHOWCHOWTHEPAIN","CHAXILICIOUSLOL"],
...      
"EventID":2,"EventName":"ChampionKill","EventTime":321.79498291015625,"KillerName":"Adoucissant",
"VictimName":"finite area"},{"Assisters":["finite area","Dilipa"],"EventID":101,"EventName":
         "ChampionKill","EventTime":2256.623291015625,"KillerName":"St4ubwedel","VictimName":"CHOWCHOWTHEPAIN"}]}"
      }
   },
   "feature":"live_client_data"
}
```

#### *game_data* note

Data Example:

```json
{ 
   "info":{ 
      "live_client_data":{ 
         "game_data":"{"gameMode":"CLASSIC","gameTime":2258.9697265625,"mapName":"Map11","mapNumber":11,"mapTerrain":"Mountain"}"
      }
   },
   "feature":"live_client_data"
}
```

## `matchState`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
matchStarted | game_info   | true/false (string)       |See [notes](#matchStarted-note)|   140.0       |
matchId      | game_info   | Current match id          |See [notes](#matchId-note)     |   120.0       |
queueId      | game_info   | Current match [queue id](https://developer.riotgames.com/game-constants.html)|  `queueId:440`        |   120.0       |

:::tip
As there is no matchOutcome event for LoL, you can detect it by using the [announcer](l#announcer) or [live_client_data](#live_client_data) events.
:::

#### *matchStarted* note

Data Example:

```json
{"feature":"matchState","category":"game_info","key":"matchStarted","value":true}
```

#### *matchID* note

Data Example:

```json
{"feature":"matchState","category":"game_info","key":"matchId","value":"4346980872"}
```

#### *queueID* note

<b>This event is currently broken.</b>

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        | Match has started   |  Match has started |   140.0       |
matchEnd   | null        |  Match has ended     |  Match is ended    |   140.0       |

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ----------- | ------------------------- | --------------------- | -------------- | 
pseudo_match_id | match_info | Current match’s ID code. Example:</br> `a4e8fc75-b35e-466f-976c-09f4ee633d95`  |  This is an Overwolf-generated code unrelated to Riot Games.  |   0.130 |
game_mode | match_info | Whether the current game mode is TFT or default LoL. See [notes](#game_mode-notes) |                 |   133.0       |
#### *game_mode* notes

Data example:

`{"info":{"match_info":{"game_mode":"tft"}},"feature":"match_info"}`  
`{"info":{"match_info":{"game_mode":"lol"}},"feature":"match_info"}`

## `death`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- | 
deaths       | game_info   | Number of deaths for this session |See [notes](#deaths-note)|   77.0        |

#### *deaths* note

Data Example:

```json
{"info":{"game_info":{"deaths":"1"}},"feature":"death"}
```

### Events

Event | Event Data                        | Fired When                  | Notes              | Since GEP Ver. |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
death | Number of deaths for this session | The player’s champion died  | See [notes](#death-note) |     77.0      | 

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":"{"count":"1"}"}]}
```

## `respawn`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
respawn    | null        | The player’s champion respawned |                    |   140.0       | 

## `abilities`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
ability    | ability number | player has selected an ability	 |  <ul><li>abilities are numbered from 1-4 “ability”</li><li>event is fired when the player clicked an ability key (but he may cancel the ability action later)</li></ul>  |   140.0       | 
usedAbility  | JSON containing: “type” with the ability number between 1-4. Example:</br> `{ type: "4" }` for ult        | player activated the ability	 |  “usedAbility” fired when the player actually activated the ability  |   0.31       | 

#### *ability* note

Data Example:

```json
{"events":[{"name":"ability","data":"1"}]}
```

## `kill`

### Info Updates

key         | Category    | Values                          | Notes                 | Since GEP Ver. |
----------- | ------------| --------------------------------| --------------------- | ------------- | 
kills       | game_info   | Total kills in the match        | See [notes](#kills-note) |   35.0        |
doubleKills | game_info   | Total double-kills in the match |                       |   35.0        |
tripleKills | game_info   | Total triple-kills in the match |                       |   35.0        |
quadraKills | game_info   | Total quadra-kills in the match |                       |   35.0        |
pentaKills  | game_info   | Total penta-kills in the match  |                       |   35.0        |

#### *kills* note

```json
{"info":{"game_info":{"doubleKills":"1"}},"feature":"kill"}
```

### Events

Event | Event Data                        | Fired When                  | Notes              | Since GEP Ver. |
------| ----------------------------------| --------------------------- | ------------------ | --------------|
kill | A JSON containing:</br><ul><li>count: Number of times this kill type happened in the match</li><li>label: kill / double_kill / triple_kill / quadra_kill / penta_kill</li><li>totalKills: Total kills in this match</li></ul> | Killing another champion  |See [notes](#kill-note)|     70.0      | 

#### *kill* note

Data Example:

```json
{"events":[{"name":"kill","data":"{"label":"kill","count":"1","totalKills":"1"}"}]}
```

## `assist`

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
assist | Number of times this event happened in the match | When you assist killing another champion |See [notes](#assist-note)|       70.00    |

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":"{"count":"1"}"}]}
```

## `gold`

### Info Updates

key    | Category    | Values                          | Notes                 | Since GEP Ver. |
-------| ------------| --------------------------------| --------------------- | ------------- | 
gold   | game_info   | numeric value – amount of gold  |                       |  70.00         |

## `minions`

### Info Updates

key                | Category    | Values                                         | Notes  | Since GEP Ver. |
-------------------| ------------| -----------------------------------------------| ------ | ------------- | 
minionKills        | game_info   | amount of enemy minions killed by the player   |See [notes](#minionKills-note)|    70.0       |
neutralMinionKills | game_info   | amount of neutral minions killed by the player |        |    70.0      |

#### *minionKills* note

Data Example:

```json
{"info":{"game_info":{"minionKills":"37"}},"feature":"minions"}
```

## `summoner_info`

### Info Updates

key       | Category        | Values                                         | Notes                                                   | Since GEP Ver. |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- | 
id        | summoner_info   | User’s Summoner Id                         |   Fired immediately with game start. Check [notes](#id-note) |      70.0      |
region    | summoner_info   | User’s region (EUE, EUW, etc.)             |   Important note: Push runes/items feature is not allowed (by Riot) on Korea region, so in case your app provides such a feature, make sure to disable it for KR users. Also, check [notes](#region-note)|    70.0        |
champion  | summoner_info   | Name of the selected champion              |  All champion names (provided by the Overwolf Game Events Provider) match the champion-key from the Riot API, except for `Fiddlesticks`.</br><ul><li>Game Events Provider value: “FiddleSticks”</li><li>Riot API value: “Fiddlesticks”</li></ul></br>Also, check [notes](#champion-note)  |    70.0 |
level     | summoner_info   | User’s summoner level                      |  See [notes](#level-note) |    70.0        |
tier      | summoner_info   | User’s tier in his most played queue       | See [notes](#tier-note) |    120.0      |
division  | summoner_info   | User’s division in his most played queue   | See [notes](#division-note) |    120.0      |
queue     | summoner_info   | Most played match queue                    | See [notes](#queue-note) |    120.0      |
accountId | summoner_info   | User’s account id                           | See [notes](#accountId-note) |    120.0      |

#### *id* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"id","value":57427695}
```

#### *region* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"region","value":"EUW"}
```

#### *champion* note

```json
{"feature":"summoner_info","category":"summoner_info","key":"champion","value":"Ezreal"}
```

#### *level* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"level","value":"139"}
```

#### *tier* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"tier","value":"PLATINUM"}
```

#### *division* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"division","value":"IV"}
```

#### *queue* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"queue","value":"RANKED_SOLO_5x5"}
```

#### *accountId* note

Data Example:

```json
{"feature":"summoner_info","category":"summoner_info","key":"accountId","value":"209958980"}
```

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
match_clock | The exact time in the match (in seconds). | Every second that the clock is ticking. |See [notes](#match_clock-note)|      138.0    |

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

## `damage`

### Info Updates

key  | Category    | Values                                     | Notes  | Since GEP Ver. |
-----| ------------| -------------------------------------------| ------ | ------------- | 
total_damage_dealt               | damage | Value of all damage done in the match (Float). |See [notes](#total_damage_dealt-note)|    139.0      |
total_damage_dealt_to_champions  | damage | Value of all damage done to champions in the match (Float). |See [notes](#total_damage_dealt_to_champions-note)|    139.0      |
total_damage_taken               | damage | Value of all the damage that was taken in the match (Float). |See [notes](#total_damage_taken-note)|    139.0      |
total_damage_dealt_to_buildings  | damage | Value of all damage done to structures in the match (Float). |See [notes](#total_damage_dealt_to_buildings-note)|    139.0      |
total_damage_dealt_to_turrets    | damage | Value of all damage done to turrets in the match (Float). |See [notes](#total_damage_dealt_to_turrets-note)|    139.0      |
total_damage_dealt_to_objectives | damage | Value of all damage given to objectives in the match (Float). |See [notes](#total_damage_dealt_to_objectives-note)|    139.0      |
total_damage_self_mitigated      | damage | Value of all mitigated damage in the match (Float). |See [notes](#total_damage_self_mitigated-note)|    139.0      |

#### *total_damage_dealt* note

Data Example:

```json
{"info":{"damage":{"total_damage_dealt":"65.000000"}},"feature":"damage"}
```

#### *total_damage_dealt_to_champions* note

Data Example:

```json
{"info":{"damage":{"total_damage_dealt_to_champions":"65.000000"}},"feature":"damage"}
```

#### *total_damage_taken* note

Data Example:

```json
{"info":{"damage":{"total_damage_taken":"8.452381"}},"feature":"damage"}
```

#### *total_damage_dealt_to_buildings* note

Data Example:

```json
{"info":{"damage":{"total_damage_dealt_to_buildings":"49.191074"}},"feature":"damage"}
```

#### *total_damage_dealt_to_turrets* note

Data Example:

```json
{"info":{"damage":{"total_damage_dealt_to_turrets":"49.191074"}},"feature":"damage"}
```

#### *total_damage_dealt_to_objectives* note

Data Example:

```json
{"info":{"damage":{"total_damage_dealt_to_objectives":"49.191074"}},"feature":"damage"}
```

#### *total_damage_self_mitigated* note

Data Example:

```json
{"info":{"damage":{"total_damage_self_mitigated":"62.607620"}},"feature":"damage"}
```

### Events

Event  | Event Data                                       |               Fired When                  | Notes     | Since GEP Ver. |
-------| -------------------------------------------------| ----------------------------------------- | --------- | --------------|
physical_damage_dealt_player       | Float | Damaging an opponent with physical damage. |See [notes](#physical_damage_dealt_player-note)|      139.0    |
magic_damage_dealt_player          | Float | Damaging an opponent with magic damage. |See [notes](#magic_damage_dealt_player-note)|      139.0    |
true_damage_dealt_player           | Float | Damaging an opponent with true damage. |See [notes](#true_damage_dealt_player-note)|      139.0    |
physical_damage_dealt_to_champions | Float | Physical damage is inflicted on any opponent. |See [notes](#physical_damage_dealt_to_champions-note)|      139.0    |
magic_damage_dealt_to_champions    | Float | Magic damage is inflicted on any opponent. |See [notes](#magic_damage_dealt_to_champions-note)|      139.0    |
true_damage_dealt_to_champions     | Float | True damage is inflicted on any opponent. |See [notes](#true_damage_dealt_to_champions-note)|      139.0    |
physical_damage_taken              | Float | Receiving physical damage from an opponent.  |See [notes](#physical_damage_taken-note)|      139.0    |
magic_damage_taken                 | Float | Receiving magic damage from an opponent. |See [notes](#magic_damage_taken-note)|      139.0    |
true_damage_taken                  | Float | Receiving true damage from an opponent. |See [notes](#true_damage_taken-note)|      139.0    |

#### *physical_damage_dealt_player* note

Data Example:

```json
{"events":[{"name":"physical_damage_dealt_player","data":"47.65625"}]}
```

#### *magic_damage_dealt_player* note

Data Example:

```json
{"events":[{"name":"magic_damage_dealt_player","data":"65.0"}]}
```

#### *true_damage_dealt_player* note

Data Example:

```json
{"events":[{"name":"true_damage_dealt_player","data":"14.0"}]}
```

#### *physical_damage_dealt_to_champions* note

Data Example:

```json
{"events":[{"name":"physical_damage_dealt_to_champions","data":"47.65625"}]}
```

#### *magic_damage_dealt_to_champions* note

Data Example:

```json
{"events":[{"name":"magic_damage_dealt_to_champions","data":"65.0"}]}
```

#### *true_damage_dealt_to_champions* note

Data Example:

```json
{"events":[{"name":"true_damage_dealt_to_champions","data":"14.0"}]}
```

#### *physical_damage_taken* note

Data Example:

```json
{"events":[{"name":"physical_damage_taken","data":"8.452381"}]}
```

#### *magic_damage_taken* note

Data Example:

```json
{"events":[{"name":"magic_damage_taken","data":"11.355035"}]}
```

#### *true_damage_taken* note

Data Example:

```json
{"events":[{"name":"true_damage_taken","data":"6.0"}]}
```

## `heal`

### Info Updates

key  | Category    | Values                                     | Notes  | Since GEP Ver. |
-----| ------------| -------------------------------------------| ------ | ------------- | 
total_heal              | heal | Value of all healing done in the match (Float). |See [notes](#total_heal-note)|    139.0      |
total_heal_on_teammates | heal | Value of all healing on teammates in the match (Float). |See [notes](#total_heal_on_teammates-note)|    139.0      |
total_units_healed      | heal | Value of amount of units healed in the match (Float). |See [notes](#total_units_healed-note)|    139.0      |

#### *total_heal* note

Data Example:

```json
{"info":{"heal":{"total_heal":"27.0"}},"feature":"heal"}
```

#### *total_heal_on_teammates* note

Data Example:

```json
{"info":{"heal":{"total_heal_on_teammates":"27.0"}},"feature":"heal"}
```

#### *total_units_healed* note

Data Example:

```json
{"info":{"heal":{"total_units_healed":"1.0"}},"feature":"heal"}
```
