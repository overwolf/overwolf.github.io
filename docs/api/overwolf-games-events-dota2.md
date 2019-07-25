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
kill        | null         | The local player killed another player| |  77.3  |
