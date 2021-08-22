---
id: overwolf-games-events-eternal-return
title: Eternal Return
sidebar_label: Eternal Return
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
1234
:::

## Sample Apps
* [Eternal Return game events sample app](https://github.com/overwolf/events-sample-apps)

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


#### *roster* note

<b>*Important:*</b> If players (or local player) in the match activate the option to hide their names from players outside their party, the output you will see will be the name of the agent (like `Jett` or in the case of the local player it will be `Me`) instead.
It is language dependant, so that is also important to take into account.

Data Example:

```json
{"info":{"match_info":{"roster_3":"{"name":"Sh4rgaas #EUNE","player_id":"2fb49e77-85c6-522c-a240-27c78a2f9a8f","character":"Pandemic","rank":0,"locked":false,"local":true,"teammate":true}"}},"feature":"match_info"}
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

