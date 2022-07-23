---
id: overwolf-games-events-valorant
title: Valorant
sidebar_label: Valorant
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21640
:::

## Sample Apps
* [VALORANT game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [me](#me)
* [game_info](#game_info)
* [match_info](#match_info)
* [kill](#kill)
* [death](#death)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
player_name  | me          | Name of local player.     |See [notes](#player_name-note)|   148.0       |
player_id    | me          | ID of the local player.   |See [notes](#player_id-note)|   148.0       |
region       | me          | Region of the local player.|See [notes](#region-note)|   148.0       |
agent        | me          | Character Internal ID.       |See [notes](#agent-note)|   149.0       |

#### *player_name* note

Data Example:

```json
{"info":{"me":{"player_name":"Doom#5339"}},"feature":"me"}
```

#### *player_id* note

Data Example:

```json
{"info":{"me":{"player_id":"f4029eff-92e6-56db-adba-4d073df968a4"}},"feature":"me"}
```

#### *region* note

Data Example:

```json
{"info":{"me":{"region":"esp"}},"feature":"me"}
```

#### *agent* note

Not all agents have their game-name match their ID data, since this is an internal name, so take that into account.
Furthermore, if a character has an ability that gives him different points of view (f.ex Sova with his drone), the ID will change accordingly to the drone.

Data Example:

```json
{"info":{"me":{"agent":"Phoenix_PC_C"}},"feature":"me"}
```

Possible agent values:

* "Clay_PC_C" = Raze
* "Pandemic_PC_C" = Viper
* "Wraith_PC_C" = Omen
* "Hunter_PC_C" = Sova
* "Thorne_PC_C" = Sage
* "Phoenix_PC_C" = Phoenix
* "Wushu_PC_C" = Jett
* "Gumshoe_PC_C" = Cypher
* "Sarge_PC_C" = Brimstone
* "Breach_PC_C" = Breach
* "Vampire_PC_C" = Reyna
* "Killjoy_PC_C" = Killjoy
* "Guide_PC_C" = Skye
* "Stealth_PC_C" = Yoru
* "Rift_PC_C" = Astra
* "Grenadier_PC_C" = KAY/O
* "Deadeye_PC_C" = Chamber
* "Sprinter_PC_C" = Neon

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id | match_info | The current match’s ID code.</br></br>Example:</br></br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code, unrelated to Riot.  |   159.0 |
round_number | match_info  | Number of current round.  |See [notes](#round_number-note)|   149.0       |
score        | match_info  | Amount of rounds won/lost.|See [notes](#score-note)|   149.0       |
round_phase  | match_info  | Current state of the round.|See [notes](#round_phase-note)|   149.0       |
team         | match_info  | Attack / Defense.      |See [notes](#team-note)|   149.0       |
match_outcome| match_info  | Victory / Defeat.      |See [notes](#match_outcome-note)|   149.0       |
round_report | match_info  | * Total Damage<br>* Total number of bullets hit.<br>* Number of bullets hit on head.<br>* Number of hit headshots that killed. |See [notes](#round_report-note)|   150.0       |
game_mode    | match_info  |* Mode: Bomb / Quick Bomb<br>* Ranked: 0 (Practice), 1 (Competitive), 2 (Spike Rush/Other) |See [notes](#game_mode-note)|   151.0       |
roster    | match_info  | * Player Name<br>* Player ID<br>* Name of picked character<br>* Player's Rank<br>* Whether it is the local player<br>* If player is a teammate or not. |See [notes](#roster-note)|   151.0       |

#### *round_number* note

Data Example:

```json
{"info":{"match_info":{"round_number":"1"}},"feature":"match_info"}
{"info":{"match_info":{"round_number":"2"}},"feature":"match_info"}
{"info":{"match_info":{"round_number":"3"}},"feature":"match_info"}
```

#### *score* note

Data example:

```json
{"info":{"match_info":{"score":"{"won":9,"lost":2}"}},"feature":"match_info"}
```

#### *round_phase* note

Data Example:

```json
{"info":{"match_info":{"round_phase":"shopping"}},"feature":"match_info"}
{"info":{"match_info":{"round_phase":"combat"}},"feature":"match_info"}
{"info":{"match_info":{"round_phase":"end"}},"feature":"match_info"}
{"info":{"match_info":{"round_phase":"game_end"}},"feature":"match_info"}
```

#### *team* note

Data Example:

```json
{"info":{"match_info":{"team":"attack"}},"feature":"match_info"}
{"info":{"match_info":{"team":"defense"}},"feature":"match_info"}
```

#### *match_outcome* note

Data Example:

```json
{"info":{"match_info":{"match_outcome":"victory"}},"feature":"match_info"}
{"info":{"match_info":{"match_outcome":"draw"}},"feature":"match_info"}
```

#### *round_report* note

This data is <b>per round</b>.

Data Example:

```json
{"info":{"match_info":{"round_report":"{"damage":331,"hit":6,"headshot":0,"final_headshot":1}"}},"feature":"match_info"}
```

#### *game_mode* note

Current values:

* Bomb = Regular game (Unrated).
* Quick Bomb = Spike Rush.
* Ranked = 1 = Competitive.
* Deathmatch = Deathmatch
* Escalation = Escalation

Both of these values also have "custom" value which is identified as a Boolean, either "True" or "False".<br>
True meaning that the current game is custom made, and false being an online game which is not custom.<br>
We recently added "ranked" value to game_mode which will indicate if the game you are playing is ranked or not. The values you will be getting range betweeb 0 which is received in the practice range, 1 which means it's a ranked game, and 2 which is received during Spike Rush and is just a random value, it does not represent a ranked game.

Data Example:

```json
{"info":{"match_info":{"game_mode":"{"mode":"bomb","custom":true,"ranked":"0"}"}},"feature":"match_info"}
{"info":{"match_info":{"game_mode":"{"mode":"bomb","custom":false,"ranked":"1"}"}},"feature":"match_info"}
{"info":{"match_info":{"game_mode":"{"mode":"deathmatch","custom":false,"ranked":"1"}"}},"feature":"match_info"}
```

#### *roster* note

<b>*Important:*</b> If players (or local player) in the match activate the option to hide their names from players outside their party, the output you will see will be the name of the agent (like `Jett` or in the case of the local player it will be `Me`) instead.
It is language dependant, so that is also important to take into account.

<b>*Important:*</b> Roster is not supported in game mode "escalation" 

<details open>
<summary>Rank value in roster can be translated using this list (Apr. 2022)</summary>
* 0 - Unranked
* 3 - Iron_01
* 4 - Iron_02
* 5 - Iron_03
* 6 - Bronze_01  
* 7 - Bronze_02
* 8 - Bronze_03
* 9 - Silver_01
* 10 - Silver_02
* 11 - Silver_03
* 12 - Gold_01
* 13 - Gold_02
* 14 - Gold_03
* 15 - Platinum_01
* 16 - Platinum_02
* 17 - Platinum_03
* 18 - Diamond_01
* 19 - Diamond_02
* 20 - Diamond_03
* 21 - Immortal_01
* 22 - Immortal_02
* 23 - Immortal_03
* 24 - Radiant
</details>

Data Example:

```json
{"info":{"match_info":{"roster_3":"{"name":"Sh4rgaas #EUNE","player_id":"2fb49e77-85c6-522c-a240-27c78a2f9a8f","character":"Pandemic","rank":0,"locked":false,"local":true,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_4":"{"name":"BreachMain #EUW","player_id":"d8b9c6f7-2cc6-5a75-825f-a5658b37eb1d","character":"Vampire","rank":0,"locked":true,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_3":"{"name":"Sh4rgaas #EUNE","player_id":"2fb49e77-85c6-522c-a240-27c78a2f9a8f","character":"Pandemic","rank":0,"locked":true,"local":true,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_1":"{"name":"NoobaHooba #8609","player_id":"f0be482b-d182-51a7-a17b-5d5d73d2f0cc","character":"Hunter","rank":0,"locked":false,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_0":"{"name":"TroyDarion #6170","player_id":"e70b9fb9-b64a-503e-a0ac-3bd12bcac218","character":"Gumshoe","rank":0,"locked":false,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_1":"{"name":"NoobaHooba #8609","player_id":"f0be482b-d182-51a7-a17b-5d5d73d2f0cc","character":"Hunter","rank":0,"locked":true,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_0":"{"name":"TroyDarion #6170","player_id":"e70b9fb9-b64a-503e-a0ac-3bd12bcac218","character":"Gumshoe","rank":0,"locked":true,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_2":"{"name":"SoloMeoParedes #ESP","player_id":"db36fb3b-e351-5da2-b0e3-c3a0400e8ddd","character":"Thorne","rank":0,"locked":false,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_2":"{"name":"SoloMeoParedes #ESP","player_id":"db36fb3b-e351-5da2-b0e3-c3a0400e8ddd","character":"Thorne","rank":0,"locked":true,"local":false,"teammate":true}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_6":"{"name":"zayed2 #EUW","player_id":"4d5efc43-b001-5c47-81d2-2f3cacff5ac7","character":"Wraith","rank":0,"teammate":false,"locked":false,"local":false}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_7":"{"name":"maheralkurdy #7836","player_id":"2080a484-c481-5362-812c-7572f5182b10","character":"Wushu","rank":0,"teammate":false,"locked":false,"local":false}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_5":"{"name":"Kubix11223 #5713","player_id":"dafa74b0-80ad-5dba-a753-70318f91d80a","character":"Thorne","rank":0,"teammate":false,"locked":false,"local":false}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_9":"{"name":"ImJOWY #2905","player_id":"162ec3aa-0114-554e-839f-fbe276467ece","character":"Clay","rank":0,"teammate":false,"locked":false,"local":false}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_8":"{"name":"kot #8059","player_id":"4d7d329c-efc4-5400-9910-2a6b76f13c7b","character":"Phoenix","rank":0,"teammate":false,"locked":false,"local":false}"}},"feature":"match_info"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         | Match started. | See [notes](#match_start-note) | 148.0  |
match_end   | null         | Match ended.   | See [notes](#match_end-note) | 148.0  |

#### *match_start* note

Data Example:

```json
{"event":"match_start","data":null}
```

#### *match_end* note

Please note that `match_end` does not work on custom matches nor training.

Data Example:

```json
{"event":"match_end","data":null}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The current scene-state.   |See [notes](#scene-note)|   148.0       |
state        | game_info   | The current game-state.   |See [notes](#state-note)|   148.0       |

#### *scene* note

"Scene" info includes the scenes of the game and the name of the map that is currently played (like in the example down below - Triad).

Data Example:

```json
{"info":{"game_info":{"scene":"Triad"}},"feature":"game_info"}
```
Possible Scene values:

* "MainMenu" - Main menu
* "Triad" - Haven map
* "Duality" - Bind map
* "Bonsai" - Split map
* "Ascent" - Ascent map
* "Port" - Icebox map
* "Foxtrot" - Breeze map
* "Canyon" - Fracture map
* "Pitt" - Pearl map
* "Range" - Practice Range map
* "CharacterSelectPersistentLevel" - Character Selection


#### *state* note

Data Example:

```json
{"info":{"game_info":{"state":"WaitingToStart"}},"feature":"game_info"}
{"info":{"game_info":{"state":"InProgress"}},"feature":"game_info"}
```

Possible states:
* "WaitingToStart"
* "LeavingMap"
* "Aborted"
* "InProgress"
* "Init"

## `kill`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
kills         | kill        | Amount of kills performed by the local player. |See [notes](#kill-note)|   148.0       |
assists       | kill        | Amount of assists performed by the local player. |See [notes](#assist-note)|   148.0  |
headshots     | kill   | Amount of headshots performed by the local player. |See [notes](#headshots-note)|   150.0  |


#### *kill* note

Data Example:

```json
{"info":{"kill":{"kills":1}},"feature":"kill"}
{"info":{"kill":{"kills":2}},"feature":"kill"}
{"info":{"kill":{"kills":3}},"feature":"kill"}
```

#### *assist* note

Data Example:

```json
{"info":{"kill":{"assists":1}},"feature":"kill"}
```

#### *headshots* note

Data Example:

```json
{"info":{"kill":{"headshots":1}},"feature":"kill"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill        | Total kills  | Kill is performed. | See [notes](#kill-note) | 148.0  |
assist      | Total assists| Assist is performed. | See [notes](#assist-note) | 148.0  |
headshot    | Total headshots| Headshot is performed. | See [notes](#headshot-note) | 150.0  |


#### *kill* note

Data Example:

```json
{"events":[{"name":"kill","data":6}]}
```

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":1}]}
```

#### *headshot* note

Data Example:

```json
{"events":[{"name":"headshot","data":"1"}]}
```

## `death`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
deaths       | death       | Amount of deaths by the local player. |See [notes](#death-note)|   148.0       |

#### *death* note

Data Example:

```json
{"info":{"death":{"deaths":1}},"feature":"death"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
death       | Total deaths | Local player died. | See [notes](#death-note) | 148.0  |

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":14}]}
```

