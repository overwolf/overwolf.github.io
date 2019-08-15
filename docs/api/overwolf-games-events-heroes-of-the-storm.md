---
id: overwolf-games-events-hots
title: Heroes of the Storm Game Events
sidebar_label: Heroes of the Storm Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10624
:::

## Sample Apps
* [HOTS game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [match_info](#match_info)
* [me](#me)
* [game_info](#game_info)
* [roster](#roster)
* [death](#death)
* [kill](#kill)

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
battletag    | me          | Battletag of local player | See [notes](#battletag-note)|    134.0|

#### *battletag* note

Data Example:

```json
{"feature":"me", "category":"me", "key":"battletag", "value":"Shargaas#2430"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id| match_info| The current session’s ID code. | See [notes](#pseudo_match_id-note)|  134.0  |
teams_level  | match_info  | The current level of both teams| See [notes](#teams_level-note)|  134.0  |
score        | match_info  | The current kill-score of both teams. | See [notes](#score-note)|  134.0  |
match_state  | match_info  | If a match is in progress - true/false. | See [notes](#match_state-note)|  134.0  |

### Events

Event  | Event Data        | Fired When   | Notes      | Since Version |
-------| ------------------| -------------| ---------- | --------------|
match_start| null          | Match starts |See [notes](#match_start-note)|    134.0      |
match_end  | victory/defeat| Match ends   |See [notes](#match_end-note)|    134.0      |
talent_available  | null | Skill point is available for use.  |See [notes](#talent_available-note)|    134.0      |
gates_opened  | null | When preparation-countdown has ended and the match begins.  |See [notes](#gates_opened-note)|    134.0      |

#### *pseudo_match_id* note:

Data Example:

```json
{"info":{"match_info":{"pseudo_match_id":"055accd3-5948-4444-903a-12400d484d4b"}}, "feature":"match_info"}
```

#### *teams_level* note:

Data Example:

```json
{"info":{"match_info":{"teams_level":"{"order":"1", "chaos":"1"}"}}, "feature":"match_info"}
```

#### *score* note:

Data Example:

```json
{"info":{"match_info":{"score":"{"order":"8", "chaos":"19"}}}, "feature":"match_info"}
```

#### *match_state* note:

Data Example:

```json
{"info":{"match_info":{"match_state":{"in_progress":true}}}, "feature":"match_info"}
```

##### *match_start* note:

Data Example:

```json
{"events":[{"name":"match_start", "data":""}]}
```

##### *match_end* note:

Data Example:

```json
{"events":[{"name":"match_end", "data":"victory"}]}
```

#### *talent_available* note:

Data Example:

```json
{"events":[{"name":"talent_available", "data":""}]}
```

#### *gates_opened* note:

Data Example:

```json
{"events":[{"name":"gates_opened", "data":""}]}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
scene        | game_info   | The current menu state    | See [notes](#scene-note)|    134.0    |

#### *scene* note:

Data Examples:

```json
{"info":{"game_info":{"scene":"hero_select"}}, "feature":"game_info"}
{"info":{"game_info":{"scene":"unranked_preparing"}}, "feature":"game_info"}
{"info":{"game_info":{"scene":"collection"}}, "feature":"game_info"}
{"info":{"game_info":{"scene":"home"}}, "feature":"game_info"}
{"info":{"game_info":{"scene":"unranked_preparing"}}, "feature":"game_info"}
```

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
roster       | game_info   | The full players roster   | See [notes](#roster-note)|    134.0    |

#### *roster* note:

Data Example:

```json
{"info":{"roster":"{"BabaYaga":{"player_name":"BabaYaga", "battletag":"BabaYaga", "hero_name":
"Nazeebo", "local":"0", "team":"chaos"}, "Bliss":{"player_name":"Bliss", "battletag":"Bliss", 
"hero_name":"Raynor", "local":"0", "team":"chaos"}, "DocWho":{"player_name":"DocWho", "battletag":"DocWho", "hero_name":"Chromie",  "local":"0", "team":"order"}, "Matsunaga":{"player_name":"Matsunaga", "battletag":"Matsunaga", "hero_name":"Malthael", "local":"0", "team":"order"}, "Signz":{"player_name":"Signz", "battletag":"Signz", "hero_name":"Qhira", "local":"0", "team":"chaos"}, "alice":
{"player_name":"alice", "battletag":"alice#2742", "hero_name":"Butcher", "local":"1", "team":"chaos"}, "alkaGOLIK":{"player_name":"alkaGOLIK", "battletag":"alkaGOLIK", "hero_name":"Sylvanas", "local":"0", "team":"order"}, "joasku":{"player_name":"joasku", "battletag":"joasku", "hero_name":"Stukov", "local":"0", "team":"chaos"}, "skrzat":{"player_name":"skrzat", "battletag":"skrzat", "hero_name":"Kharazim", "local":"0", "team":"order"}, "vikpa":{"player_name":"vikpa", "battletag":"vikpa", "hero_name":"Tychus", "local":"0", "team":"order"}}}, "feature":"roster"}
```

## `kill`

### Events

Event  | Event Data        | Fired When   | Notes      | Since Version |
-------| ------------------| -------------| ---------- | --------------|
kill   | null              | Local player kills an opponent. |See [notes](#kill-note)|    134.0      |
assist | null              | Local player takes part in the killing of an oponnent. |See [notes](#assist-note)|    134.0      |
minion_kill| null          | Local player kills a minion. |See [notes](#minion_kill-note)|    134.0      |
takedown| null             | Local player kills an opponent. |See [notes](#takedown-note)|    134.0      |


#### *kill* note:

Data Example:

```json
{"events":[{"name":"kill", "data":""}]}
```

#### *assist* note:

Data Example:

```json
{"events":[{"name":"assist", "data":""}]}`
```

#### *minion_kill* note:

Data Example:

```json
{"events":[{"name":"minion_kill", "data":""}]}
```

#### *takedown* note:

Data Example:

```json
{"events":[{"name":"takedown" ,"data":""}]}
```

## `death`

### Events

Event  | Event Data        | Fired When   | Notes      | Since Version |
-------| ------------------| -------------| ---------- | --------------|
death  | null              | Local player dies. |See [notes](#death-note)|    134.0      |

#### *death* note:

Data Example:

```json
{"events":[{"name":"death", "data":""}]}
```
