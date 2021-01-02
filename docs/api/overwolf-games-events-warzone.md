---
id: overwolf-games-events-warzone
title: Call of Duty: Warzone
sidebar_label: Call of Duty: Warzone
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21626
:::

## Sample Apps
* [Warzone game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [match_info](#match_info)
* [game_info](#game_info)
* [kill](#kill)
* [death](#death)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## gep_internal

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## match_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id | match_info | The current match’s ID code.</br></br>Example:</br></br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code, unrelated to Activision.  |   159.0 |
roster       | match_info  | The names and details of all players in the current server. |See [notes](#roster-note)|   158.1       |

### Events

Event        | Event Data        | Fired When   | Notes              | Since GEP Ver. |
-------------| ------------------| ------------ | ------------------ | ---------------|
match_start  | null              | Match started.| See [notes](#match_start-note)     | 157.0 |
match_end    | null              | Match ended. | See [notes](#match_end-note)        | 157.0 |

#### *roster* note

```json
{"info":{"match_info":{"roster_1":"{"player":"7766#6156337","is_local":true,"is_bot":0,"team_id":32,"armor":256,"damage":437,"rank":9,"ping":73,"cash":9000,"completed_contracts":1,"opened_supply_boxes":1,"kills":1,"deaths":0,"score":550,"assists":0}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_30":"{"player":"GiussaSimo13#2220952","is_local":false,"is_bot":0,"team_id":31,"rank":55,"ping":47,"kills":0,"deaths":0,"score":0,"assists":0}"}},"feature":"match_info"}
{"info":{"match_info":{"roster_31":"{"player":"HARPOON97#7053414","is_local":false,"is_bot":0,"team_id":14,"rank":137,"ping":46,"kills":0,"deaths":0,"score":0,"assists":0}"}},"feature":"match_info"}
```
- Note: The information provided for the local player also includes "damage" and "armor" & the same values are provided for team members aswell if you play on duos and above.

#### *match_start* note

Data Example:

```json
{"event":"match_start","data":null}
```

#### *match_end* note

Data Example:

```json
{"event":"match_end","data":null}
```

## game_info

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
activision_id| game_info   | Local player's Activision ID. |See [notes](#activision_id-note)|   157.0       |
battlenet_tag| game_info   | Local player's Battlenet tag. |See [notes](#battlenet_tag-note)|   157.0       |
match_state  | game_info   | Current game's match state.   |See [notes](#match_state-note)|   157.0       |
lobby_state  | game_info   | Current state of the lobby screen. |See [notes](#lobby_state-note)|   157.0       |
game_mode  | game_info   | Current game-mode type (solo/quads, etc). |See [notes](#game_mode-note)|   160.0       |
game_map  | game_info   | Currently played game-map. |See [notes](#game_map-note)|   160.0       |

#### *activision_id* note

Data Example:

```json
{"info":{"game_info":{"activision_id":"7766#6156337"}},"feature":"game_info"}
```

#### *battlenet_tag* note

Data Example:

```json
{"info":{"game_info":{"battlenet_tag":"Shargaas#2430"}},"feature":"game_info"}
```

#### *match_state* note

Data Example:

```json
{"info":{"game_info":{"match_state":"eIDLE"}},"feature":"game_info"}
```

Possible values:

* "eIDLE"
* "eINITING"
* "eWAITING_FOR_PLAYERS"
* "eSTARTING_MATCHMAKING"
* "eSTARTED_MATCHMAKING"
* "eSHUTDOWN_MATCHMAKING"
* "eSHUTTING_DOWN_MATCHMAKING"

#### *lobby_state* note

Data Example:

```json
{"info":{"game_info":{"lobby_state":"eWAITING_FOR_LOBBY_INFO"}},"feature":"game_info"}
```

Possible values:

* "eIDLE"
* "eINITING"
* "eWAITING_FOR_LOBBY_INFO"
* "eJOINING_LOBBY"
* "eLOBBY_JOINED"

#### *game_mode* note

Data Example:

```json
{"info":{"game_info":{"game_mode":"150"}},"feature":"game_info"}
```

Possible Values:

* 150 (solo)
* 152 (quads)
* 24 (training)
* 100 (plunder)

#### *game_map* note

Data Example:

```json
{"info":{"game_info":{"game_map":"mp_don3"}},"feature":"game_info"}
```

## kill

### Events

Event        | Event Data        | Fired When   | Notes              | Since GEP Ver. |
-------------| ------------------| ------------ | ------------------ | ---------------|
kill         | null              | Local player has performed a kill.| See [notes](#kill-note)     | 158.1 |
assist       | null              | Local player has performed an assist. | See [notes](#assist-note)        | 158.1 |

#### *kill* note

Data Example:

```json
{"events":[{"name":"kill","data":null}]}
```

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":null}]}
```

## death

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
death        | death       | Amount of deaths by the local player. |See [notes](#death-note)|   158.1       |

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":null}]}
```
