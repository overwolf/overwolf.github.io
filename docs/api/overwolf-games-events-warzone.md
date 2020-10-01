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

### Events

Event        | Event Data        | Fired When   | Notes              | Since GEP Ver. |
-------------| ------------------| ------------ | ------------------ | ---------------|
match_start  | null              | Match started.| See [notes](#match_start-note)     | 157.0 |
match_end    | null              | Match ended. | See [notes](#match_end-note)        | 157.0 |

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
