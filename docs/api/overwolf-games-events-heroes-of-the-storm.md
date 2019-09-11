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

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
battletag    | me          | Battletag of local player | See [notes](#battletag-note)|    134.0|

#### *battletag* note

Data Example:

```json
{"feature":"me", "category":"me", "key":"battletag", "value":"Shargaas#2430"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id| match_info| The current session’s ID code. | See [notes](#pseudo_match_id-note)|  134.0  |
teams_level  | match_info  | The current level of both teams| See [notes](#teams_level-note)|  134.0  |
score        | match_info  | The current kill-score of both teams. | See [notes](#score-note)|  134.0  |
match_state  | match_info  | If a match is in progress - true/false. | See [notes](#match_state-note)|  134.0  |

### Events

Event  | Event Data        | Fired When   | Notes      | Since GEP Ver. |
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
{"info":{"match_info":{"teams_level":{"order":1, "chaos":1}}}, "feature":"match_info"}
```

#### *score* note:

Data Example:

```json
{"info":{"match_info":{"score":{"order":8, "chaos":19}}}, "feature":"match_info"}
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

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
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

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
roster       | game_info   | The full players roster   | See [notes](#roster-note)|    134.0    |

#### *roster* note:

Data Example:

```json
"roster":"{
"Player 10":{  
   "player_name":"Player 10",
   "battletag":"Player 10",
   "hero_name":"Kerrigan",
   "local":false,
   "team":"chaos"
},
"Player 2":{  
   "player_name":"Player 2",
   "battletag":"Player 2",
   "hero_name":"Malfurion",
   "local":false,
   "team":"order"
},
"Player 3":{  
   "player_name":"Player 3",
   "battletag":"Player 3",
   "hero_name":"Anub'arak",
   "local":false,
   "team":"order"
},
"Player 4":{  
   "player_name":"Player 4",
   "battletag":"Player 4",
   "hero_name":"Valla",
   "local":false,
   "team":"order"
},
"Player 5":{  
   "player_name":"Player 5",
   "battletag":"Player 5",
   "hero_name":"Malthael",
   "local":false,
   "team":"order"
},
"Player 6":{  
   "player_name":"Player 6",
   "battletag":"Player 6",
   "hero_name":"Rehgar",
   "local":false,
   "team":"chaos"
},
"Player 7":{  
   "player_name":"Player 7",
   "battletag":"Player 7",
   "hero_name":"Muradin",
   "local":false,
   "team":"chaos"
},
"Player 8":{  
   "player_name":"Player 8",
   "battletag":"Player 8",
   "hero_name":"Tychus",
   "local":false,
   "team":"chaos"
},
"Player 9":{  
   "player_name":"Player 9",
   "battletag":"Player 9",
   "hero_name":"Imperius",
   "local":false,
   "team":"chaos"
},
"alice":{  
   "player_name":"alice",
   "battletag":"alice#2742",
   "hero_name":"Butcher",
   "local":true,
   "team":"order"
}
```

## `kill`

### Events

Event  | Event Data        | Fired When   | Notes      | Since GEP Ver. |
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
{"events":[{"name":"assist", "data":""}]}
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

Event  | Event Data        | Fired When   | Notes      | Since GEP Ver. |
-------| ------------------| -------------| ---------- | --------------|
death  | null              | Local player dies. |See [notes](#death-note)|    134.0      |

#### *death* note:

Data Example:

```json
{"events":[{"name":"death", "data":""}]}
```
