---
id:overwolf-games-events-pubg-lite
title: PlayerUnkown's Battlegrounds Lite Game Events
sidebar_label: PUBG Lite
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21598
:::

## Sample Apps
* [PUBG game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [kill](#kill)
* [revived](#revived)
* [death](#death)
* [killer](#killer)
* [match](#match)
* [rank](#rank)
* [me](#me)
* [phase](#phase)
* [map](#map)
* [team_feed](#team_feed)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   146.0       |

#### *gep_internal* note

Data Example:

```json
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `kill`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
kills | match_info   | Total number of kills in the match  |                       |   146.0       |
headshots | match_info | Total number of headshots in the match |                       |  146.0       |
total_damage_dealt   | match_info   | Total damage dealt in the current match |   |  146.0       |
max_kill_distance   | match_info   | Max kill distance in CM|          |  146.0      |


### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
kill | null        | The local player killed another player |   |   146.0      | 
headshot   | null        |  The local player hit another player with a headshot 	   |     |  146.0      | 
damage_dealt   | amount of damage dealt by the local player |  The local player “damaged” an enemy or himself |      |  146.0   | 
knockout | weapon name + victim name  | The local player knocked-out another player |See [notes](#knockout-note)|   148.0      | 


#### `damage_dealt` note:

This event can not be used in real time, as it can give an un-fair advantage to the user. You can use it post-match.

#### *knockout* note

Data Example:

```json
{"feature":"kill","event":"knockout","data":{"weapon":"SCAR-L","victim":"moshi_official"}}
```

## `match`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- |
mode | match_info | Solo/Duo/Squad</br>Example:</br> `{"mode":"squad"}`|    |   146.0 |
match_id | match_info | The current match ID code.</br>Example:</br>`match.bro.official.pc-2018-03.steam.`</br>`solo.eu.2019.05.07.08.ce8d1a14-b2af`</br>`-41c8-8bf4-d2a504326630`  |  Can be compared and checked at this [link](https://pubglookup.com/) |   146.0 |
pseudo_match_id | match_info | The current match’s ID code.</br>Example:</br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code which is unrelated to the match ID given above.  | 146.0 |

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        | Match started |   |   146.0       | 
matchEnd | null        | Match ended. See [notes](#matchend-notes) below |   |   146.0       | 

#### `matchEnd` notes

The  matchEnd event fired when your player is killed, and when you exit to the lobby. (which means that if you get killed and than you exit to the lobby, you will see two calls for this event).

## `rank`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
me       | match_info   | The player’s rank at the end of the match |                       |   146.0        |
total       | match_info   | The total number of players |                       |  146.0      |

## `me`

### Info Updates

key          | Category    | Values                            | Notes                 | Since GEP Ver. |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
name       | me   | The player’s nickname</br>`{"name":"itayG"}` |                     |   146.0       |
health  | me   | The player’s current health |See [notes](#health-notes)               |   146.0       |

#### *health* note:

Data Example:

```json
{"health":"{"health":100,"ko_health":100}"}
```

## `phase`

### Info Updates

key    | Category    | Values                          | Notes                 | Since GEP Ver. |
-------| ------------| --------------------------------| --------------------- | ------------- | 
phase   | game_info   | The game’s current state, can be one of the following:<ul><li>‘lobby’</li><li>‘loading_screen’</li><li>‘airfield’</li><li>‘aircraft’</li><li>‘freefly’</li><li>‘landed’  |                       |  146.0         |

## `map`

### Info Updates

key                | Category    | Values                                         | Notes  | Since GEP Ver. |
-------------------| ------------| -----------------------------------------------| ------ | ------------- |
map    | match_info   | The current map name</br>`{"map":"Desert_Main"}`   | [map names mapping](https://github.com/pubg/api-assets/blob/master/dictionaries/telemetry/mapName.json) |    146.0       |

## `revived`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
revived    | null        | The local player was revived    |                    |   146.0        |

## `death`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
death      | null | The local player dies |                        |   146.0    |
knockedout | null | The local player is knocked-out |   |   146.0    |

## `killer`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
killer | The killer’s nickname | The local player was killed by one of the players |  |    146.0    |

#### `killer` notes:

When one of local player’s squad members kill the local player, the provided data will be "self_kill”.

## `team_feed`

### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------------------- | ------------------ | --------------|
team_feed | Action name, attacker name, weapon name, and victim name. | Whenever a game update appears in the middle of the screen. | See [notes](#team_feed-notes) |    148.0    |

#### *team_feed* note

Data Examples:

```json
{"events":[{"name":"team_feed","data":"{"message":"YouKilledPlayer","attacker":"Shargaas","weapon": "SKS","victim":"sOrgUsUs"}"}]}
```

```json
{"events":[{"name":"team_feed","data":"{"message":"YourTeammateKilledPlayer","attacker":"KingSlayer3x","weapon": "QBZ","victim":"4Senius"}"}]}
```

```json
{"events":[{"name":"team_feed","data":"{"message":"YourTeammateHaveBeenPutDown","attacker":"Egemen365", "weapon":"SLR","victim":"KingSlayer3x"}"}]}
```

```json
{"events":[{"name":"team_feed","data":"{"message":"YouPutDownPlayer","attacker":"Shargaas","weapon": "M416","victim":"cerenihat}"}]}
```
