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

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)

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

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
detailed_logs_enabled | game_info   | True / False | See [notes](#detailed_logs_enabled-note) |     138.0      |
scene | game_info   | Current state (screen) of the game | See [notes](#scene-note) |     150.0      |
sideboard_cards | game_info   | Cards that are currently held in the sideboard. | See [notes](#sideboard_cards-note) |     150.0      |
main_deck_cards | game_info   | Cards that are currently in your main deck. | See [notes](#main_deck_cards-note) |     150.0      |


#### *scene* note

Possible values:

* scene_home
* scene_event_page
* scene_deck_builder
* scene_draft_table

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"scene","value":"home"}
```
```json
{"feature":"game_info","category":"game_info","key":"scene","value":"decks"}
```

#### *detailed_logs_enabled* note

In order to get events for this game, you need to enable "Detailed Logs" from your account settings in the game.
At the bottom you will have a checkbox - "Detailed Logs (Plugin Support)". You'll need to check it.

Data Example:

```json
{"feature":"game_info","category":"game_info","key":"detailed_logs_enabled","value":true}
```

#### *sideboard_cards* note

Data Example:

```json
{
"feature":"game_info",
"category":"game_info",
"key":"sideboard_cards",
"value":{
	"cards\":[
{"card_id":71182,"card_name":"FerociousTigorilla","card_amount":1},
...
{"card_id":71222,"card_name":"Gemrazer","card_amount":1}
		]
	}
}

```

#### *main_deck_cards* note

Data Example:

```json
{
"feature":"game_info",
"category":"game_info",
"key":"main_deck_cards",
"value":{
	"cards\":[
{"card_id":71182,"card_name":"FerociousTigorilla","card_amount":1},
...
{"card_id":71222,"card_name":"Gemrazer","card_amount":1}
		]
	}
}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
draft_pack   | match_info  | Pack number you currently pick for, time left to pick and pick number. | See [notes](#draft_pack-note) |     150.0      |
draft_cards  | match_info  | Name and ID of all picked cards during draft. | See [notes](#draft_cards-note) |     150.0      |
draft_picked_card | match_info | Name and ID of currently picked card. | See [notes](#draft_picked_card-note) |     150.0      |


#### *draft_pack* note

Data Example:

```json
{
"feature":"match_info",
"category":"match_info",
"key":"draft_pack",
"value":"{"pack_number":3, "pick_number":4,"pick_time":16}"
}
```

#### *draft_cards* note

Updates each time you add/remove cards from your pack.

Data Example:

```json
{
“feature”:”match_info”,
"category":"match_info",
"key":"draft_cards",
"value":"\"cards\":[
	{\"id\":71323, "name":"Thornwood Falls"},
	{"id":71111, "name":"Capture Sphere"},
	{"id":71069, "name":"Farfinder"},
	…
	,{"id":71231, "name":"Migration Path"}
	]",
"valueLength":459
}
```

#### *draft_picked_card* note

Data Example:

```json
{
“feature”:”match_info”,
"category":"match_info",
"key":"draft_picked_card",
"value":"{"picked_card_id":71080 , "picked_card_name":"Flourishing Fox"}",
"valueLength":63
}
```

### Events

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
game_outcome |  victory/defeat   | When the local player wins/loses. |See [notes](#game_outcome)|    139.0      |
match_outcome |  victory/defeat   | When the local player wins/loses. |See [notes](#match_outcome)|    139.0      |
match_start | game_format+deck_id   | When match has started + Deck information |See [notes](#match_start)|    139.0      |
draft_start | null   | When draft has started. |See [notes](#draft_start-note)|    150.0      |
draft_end | null   | When draft has ended. |See [notes](#draft_end-note)|    150.0      |

#### *game_outcome*

Data Example:

```json
{"feature":"game_outcome","data":"victory"}
{"feature":"game_outcome","data":"defeat"}
```

#### *match_outcome*

This event is relevant for modes that have a best-of-3 format, thus giving the final outcome.

Data Example:

```json
{"feature":"match_outcome","data":"victory"}
{"feature":"match_outcome","data":"defeat"}
```

#### *match_start*

Data Example:

```json
{"events":[{"name":"match_start","data":"{"game_format":"Constructed_Event_2020","deck_id":"b6ed3e9b-db31-43b5-a903-29694f21f977","main_deck":[{"id":69890,"count":1},{"id":70107,"count":1},{"id":69905,"count":4},{"id":68526,"count":3},{"id":68547,"count":3},{"id":70105,"count":3},{"id":70110,"count":3},{"id":70109,"count":4},{"id":69218,"count":3},{"id":69876,"count":2},{"id":69880,"count":2},{"id":69894,"count":3},{"id":69877,"count":2},{"id":70017,"count":1},{"id":70054,"count":25}],"sideboard":[]}"}]}
```

#### *draft_start* note

Data Example:

```json
{
"feature":"match_info",
“event”:”draft_start”,
“data”:null
}
```

#### *draft_end* note

Data Example:

```json
{
"feature":"match_info",
“event”:”draft_end”,
“data”:null
}

```
