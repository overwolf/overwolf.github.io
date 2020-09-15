---
id: overwolf-games-events-warframe
title: Warframe Game Events
sidebar_label: Warframe
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
8954
:::

## Sample Apps
* [Warframe game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)

## Game events status

It's highly recommended to communicate errors and warnings to your app users. Check game event status [here](../status/all) or easily check game event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

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
------------ | ------------| ------------------------- | --------------------- | ------------- | 
username    | game_info   | Name of local player.      |See [notes](#username-note)|   156.0       |
inventory    | game_info   | Type and amount of items on the local player.|See [notes](#inventory-note)|   156.0       |

#### *username* note

Data Example:

```json
{"category":"game_info","key":"username","value":"dsa_gfdg","valueLength":8}
```

#### *inventory* note

Data Example:

```json
{
    "category": "game_info",
    "key": "inventory",
    "value": {"Slots":8},"PremiumCredits":50,"PremiumCreditsFree":50,"PveBonusLoadoutBin":{"Slots":0},"PvpBonusLoadoutBin":{"Slots":0},
    ...
    {"ItemCount":1,"ItemType":"Lotus/Types/Recipes/Components/VorBoltRemoverFakeItem"}],
    "valueLength": 16212
}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
inventory    | match_info  | Type and amount of items on the local player.|See [notes](#inventory-note)|   156.0       |

#### *inventory* note

Data Example:

```json
{
    "category": "match_info",
    "key": "inventory",
    "value": "{"SubscribedToEmails":0,"Created":{"$date":{"$numberLong":"1599480129791"}},
    ...
    {"ItemCount":1,"ItemType":"/Lotus/Types/Items/MiscItems/Morphic"},{"ItemCount":626,"ItemType":"/Lotus/Types/Items/MiscItems/PolymerBundle"},{"ItemCount":1627,"ItemType":"/Lotus/Types/Items/MiscItems/Salvage"},
}
```
