---
id:overwolf-games-events-dota2
title: Dota 2 Game Events
sidebar_label: Dota 2 Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
7314
:::

## Sample Apps
* [Dota2 game events sample app](https://github.com/overwolf/dota-events-sample-app)

## Available Features

* [game_state_changed](#game_state_changed)
* [match_state_changed](#match_state_changed)
* [match_detected](#match_detected)
* [daytime_changed](#daytime_changed)
* [clock_time_changed](#clock_time_changed)
* [ward_purchase_cooldown_changed](#ward_purchase_cooldown_changed)
* [match_ended](#match_ended)
* [kill](#kill)
* [assist](#assist)
* [death](#death)
* [cs](#cs)
* [xpm](#xpm)
* [gpm](#gpm)
* [gold](#gold)
* [hero_leveled_up](#hero_leveled_up)
* [hero_respawned](#hero_respawned)
* [hero_buyback_info_changed](#hero_buyback_info_changed)
* [hero_boughtback](#hero_boughtback)
* [hero_health_mana_info](#hero_health_mana_info)
* [hero_status_effect_changed](#hero_status_effect_changed)
* [hero_attributes_skilled](#hero_attributes_skilled)
* [hero_ability_skilled](#hero_ability_skilled)
* [hero_ability_used](#hero_ability_used)
* [hero_ability_cooldown_changed](#hero_ability_cooldown_changed)
* [hero_ability_changed](#hero_ability_changed)
* [hero_item_cooldown_changed](#hero_item_cooldown_changed)
* [hero_item_changed](#hero_item_changed)
* [hero_item_used](#hero_item_used)
* [hero_item_consumed](#hero_item_consumed)
* [hero_item_charged](#hero_item_charged)
* [match_info](#match_info)
* [roster](#roster)
* [party](#party)
* [error](#error)

## `game_state_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
game_state_changed |<ul><li>game_state</li><li>match_state</li><li>match_id</li><li>player_steam_id</li>|               |See [notes](#game_state_changed-note)|     77.3      |

#### *game_state_changed* note

* <b>game_state</b> – One of ‘playing’, ‘idle’ or ‘spectating’. Idle is when there isn’t a game being played or spectated. 
* <b>match_state</b> – The internal match state. See ‘match_state_changed’ event for more info. 
* <b>match_id</b> (not available for ‘idle’): The id of the match. 
* <b>player_steam_id</b> (not available for ‘idle’): The Steam id of the local player.

Fired when:

The user starts playing, spectating or stops playing (no game available to play or spectate). Note that simply bringing the menu is not enough to trigger the ‘idle’ event – the active game (played or spectated) must be closed.

## `match_state_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_state_changed  | Check notes |          |See [notes](#match_state_changed-note)|     77.3      |

#### *match_state_changed* note

Event Data:

match_state – One of the following:
* DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD
* DOTA_GAMERULES_STATE_HERO_SELECTION
* DOTA_GAMERULES_STATE_PRE_GAME
* DOTA_GAMERULES_STATE_GAME_IN_PROGRESS
* DOTA_GAMERULES_STATE_POST_GAME

Fired when:

The internal game match state has changed.
* DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD – Shown with the pre-game “Waiting for loaders” screen.
* DOTA_GAMERULES_STATE_HERO_SELECTION – Shown with the hero selection screen.
* DOTA_GAMERULES_STATE_PRE_GAME – Shown when the game begins, before the battle horn is heard.
* DOTA_GAMERULES_STATE_GAME_IN_PROGRESS – Shown with the start game battle horn.
* DOTA_GAMERULES_STATE_POST_GAME – Shown with the in-game post-game screen.

## `match_detected`
