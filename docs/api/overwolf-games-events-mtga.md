---
id: overwolf-games-events-mtga
title: MTG Arena Game Events
sidebar_label: MTG Arena
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21308
:::

## Sample Apps
* [MTGA game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [game_info](#game_info)
* [match_info](#match_info)

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
scene | game_info   | Current state (screen) of the game | See [notes](#scene-note) |     150.0      |
sideboard_cards | game_info   | Cards that are currently held in the sideboard. | See [notes](#sideboard_cards-note) |     150.0      |
main_deck_cards | game_info   | Cards that are currently in your main deck. | See [notes](#main_deck_cards-note) |     150.0      |
game_mode     | game_info   | The currently played game-mode. | See [notes](#game_mode-note) |     150.0      |

#### *scene* note

Possible values:

* scene_home
* scene_event_page
* scene_deck_builder
* scene_draft_table
* scene_draft_table_queue: IKO_Premier_Draft

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"scene","value":"home"}
```

#### *sideboard_cards* note

Data Example:

```json
        {
            "info": {
                "game_info": {
                    "sideboard_cards": "{"
                    cards ":[{"
                    card_id ":71208,"
                    card_name ":"
                    Yidaro,
                    Wandering Monster ","
                    card_amount ":1}]}"
                }
            },
            "feature": "game_info"
        }
```

#### *main_deck_cards* note

Data Example:

```json
{
  "info": {
    "game_info": {
      "main_deck_cards": "{"cards":[{"card_id":71208,"card_name":"Yidaro, Wandering Monster","card_amount":0},{"card_id":71299,"card_name":"Yorion, Sky Nomad","card_amount":1},{"card_id":71177,"card_name":"Cathartic Reunion","card_amount":1},{"card_id":71099,"card_name":"Splendor Mare","card_amount":1}]}"
    }
  },
  "feature": "game_info"
}
```

#### *game_mode* note

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"game_mode","value":"AIBotMatch"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |
draft_pack   | match_info  | Pack number you currently pick for, time left to pick and pick number. | See [notes](#draft_pack-note) |     150.0      |
draft_cards  | match_info  | Name and ID of all picked cards during draft. | See [notes](#draft_cards-note) |     150.0      |
draft_picked_card | match_info | Name and ID of currently picked card. | See [notes](#draft_picked_card-note) |     150.0      |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{\"local_version\":\"157.0.1\",\"public_version\":\"157.0.1\",\"is_updated\":true}"}},"feature":"gep_internal"}
```

#### *draft_pack* note

Data Example:

```json
        {
            "info": {
                "match_info": {
                    "draft_pack": "{"
                    pack_number ":1,"
                    pick_number ":2,"
                    pick_time ":70}"
                }
            },
            "feature": "match_info"
        }
```

#### *draft_cards* note

Updates each time you add/remove cards from your pack.

Data Example:

```json
        {
            "info": {
                "match_info": {
                    "draft_cards": "{"
                    cards ":[{"
                    id ":71319, "
                    name ":"
                    Rugged Highlands "}, {
                        "id": 71196,
                        "name": "Prickly Marmoset"
                    },
                    {
                        "id": 71219,
                        "name": "Fertilid"
                    },
                    {
                        "id": 71090,
                        "name": "Maned Serval"
                    },
                    {
                        "id": 71307,
                        "name": "Sleeper Dart"
                    },
                    {
                        "id": 71162,
                        "name": "MemoryLeak"
                    },
                    {
                        "id": 71098,
                        "name": "Solid Footing"
                    },
                    {
                        "id": 71143,
                        "name": "Boot Nipper"
                    },
                    {
                        "id": 71309,
                        "name": "Zagoth Crystal"
                    },
                    {
                        "id": 71199,
                        "name": "Reptilian Reflection"
                    },
                    {
                        "id": 71215,
                        "name": "Colossification"
                    }]
            }
            "}},
            "feature": "match_info"
        }
```

#### *draft_picked_card* note

Data Example:

```json
        {
            "info": {
                "match_info": {
                    "draft_picked_card": "{"
                    picked_card_id ":71073 , "
                    picked_card_name ":"
                    Coordinated Charge "}"
                }
            },
            "feature": "match_info"
        }
```

### Events

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
draft_start | null   | When draft has started. |See [notes](#draft_start-note)|    150.0      |
draft_end | null   | When draft has ended. |See [notes](#draft_end-note)|    150.0      |

#### *draft_start* note

Data Example:

```json
{"events":[{"name":"draft_start","data":""}]}
```

#### *draft_end* note

Data Example:

```json
{"events":[{"name":"draft_end","data":""}]}
```
