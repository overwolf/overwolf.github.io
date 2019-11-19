---
id:overwolf-games-events-fortnite
title: Fortnite Game Events
sidebar_label: Fortnite
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21216
:::

## Sample Apps
* [Fortnite game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [kill](#kill)
* [killed](#killed)
* [killer](#killer)
* [revived](#revived)
* [death](#death)
* [match](#match)
* [match_info](#match_info)
* [rank](#rank)
* [me](#me)
* [phase](#phase)
* [location](#location)
* [team](#team)
* [items](#items)
* [counters](#counters)

## Game events status

It is highly recommended to communicate errors and warnings to app users. Check game event status [here](../status/all). You can also easily check game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `kill`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
kills             | match_info  | Total number of kills in the match |              |  110.0        |

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill        | null         | The local player killed another player | |  110.0.0  |
knockout    | null     | The local player knocked out another player |  | 110.0.0  |
hit         | isHeadshot – bool(“true” when the hit is a “headshot”)| The local player hits an enemy with a weapon (hits with a pickaxe are not counted) See [notes](#hit-note) |                    |     110.0.0     |

#### *hit* note

Data Example:

```json
{"name":"hit","data":"{"isHeadshot": true}"}
```

## `killed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
killed      | The name of the killed player. See [notes](#killed-note)| The local player killed another player | |  117.0  |

#### *killed* note

Data Example:

```json
{"name":"killed","data":"itaygl"}
```

## `killer`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
killer      | Name of the killer. See [notes](#killer-note) | The local player was killed | |  117.0  |

#### *killer* note

Data Example:

```json
{"name":"killer","data":"itaygl"}
```

## `revived`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
revived      | null | The local player was revived |                  |  110.0  |

## `death`

### Events

Event      | Event Data                                                              | Fired When                      | Notes              | Since GEP Ver. |
-----------| ------------------------------------------------------------------------| --------------------------------| ------------------ | --------------|
death      | null                                                                    | The local player died           |                    |  110.0        |
knockedout | The name of the player who knocked you out. See [note](#knockedout-note)| The local player is knocked-out |                    |  118.1        |

#### `knockedout` note

Data example:

```json
{"events":[{"name":"knockedout","data":"itaygl"}]}
```

## `match`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
mode              | match_info  | Possible Values:<ul><li>"solo"</li><li>"duo"</li><li>"squad"</li><li>"Playlist_Respawn" (Team Rumble)</li><li>"Playlist_PlaygroundV2" (Creative)</li><li>"Playlist_Creative_PlayOnly" (Playground)</li><li>"Playlist_ShowdownAlt_Solo" (Arena Solo)</li><li>"Playlist_ShowdownAlt_Squads" (Arena Squads)</li><li>"Playlist_Crucible_Solo" (The Combine)</li>`{"mode":"duo"}`|              |  110.0        |

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matchStart  | null         | Match started |                    |  110.0  |
matchEnd    | null         | Match ended   |                    |  110.0  |

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  |The current match’s ID code. See [notes](#pseudo_match_id-note)|                       |  130.2  |
sessionID   | match_info  |The current session’s ID code. See [notes](#sessionID-note)|                       |  132.0  |
matchID   | match_info  |The current match’s ID. See [notes](#matchID-note)|                       |  132.0  |
userID   | match_info  |The current user’s ID code. See [notes](#userID-note)|                       |  132.0  |
ticketID   | match_info  |The current ticket’s ID code. See [notes](#ticketID-note)|                       |  132.0  |
partyID   | match_info  |The current party’s ID code. See [notes](#partyID-note)|                       |  132.0  |


#### *pseudo_match_id* note

Note that this is an Overwolf-generated code, not an Epic Games designation.

Example data:

```json
0c0ea3df-97ea-4d3a-b1f6-f8e34042251f
```

#### *sessionID* note

Data Example:

```json
{"info":{"match_info":{"sessionID":"03765ae468cb4e8ca21cc290302a0ba0"}},"feature":"match"}
```

#### *matchID* note

Data Example:

```
{"info":{"match_info":{"matchID":"ff75f8541670a4317136b0b239955416"}},"feature":"match"}
```

#### *userID* note

Data Example:

```json
{"info":{"match_info":{"userID":"0608873718b84a11a2ee66316d09c941"}},"feature":"match"}
```

#### *ticketID* note

Data Example:

```json
{"info":{"match_info":{"ticketID":"dd7fd486ad6c9ab52627514f1921d765"}},"feature":"match"}
```

#### *partyID* note

Data Example:

```json
{"info":{"match_info":{"partyID":"24f122daf9c446199e59f1f6841cacfe"}},"feature":"match"}
```


## `rank`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
rank         | match_info  |The player’s rank at the end of the match|         |   110.0       |
total_teams  | match_info  |Total number of active teams|                  |   110.0       |
total_players| match_info  |Total number of active players|                |   110.0       |

#### *total_teams* note

This is a dynamic variable that is being updated every time a team joins, leaves or dies during the game

#### *total_players* note

This is a dynamic variable that is being updated every time a player joins, leaves or dies during the game

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
name         | me          |   The player’s nickname. See [notes](#name-notes) |    |   110.0       |
health       | me  |The player’s current health % (100-0). See [notes](#health-notes)| |   110.0       |
accuracy     | me  |The local player’s current accuracy (hits/total shots). See [notes](#accuracy-note)|   |   110.0       |
shield       | me  |The amount of shield the local player currently has. See [notes](#shield-notes)|         |   110.0       |

#### *name* note

Data Example:

```json
{"name":"itayG"}
```

#### *health* note

Data Example:

```json
{"health":"37"}
```

#### *accuracy* note

Data Example:

```json
{"accuracy":"0.333333"}
```

#### *shield* note

Data Example:

```json
{"info":{"me":{"shield":"50"}},"feature":"me"}
```

## `phase`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
phase        | game_info   |The game’s current state, can be one of the following:<ul><li>'lobby'</li><li>‘loading_screen’</li><li>‘airfield’</li><li>‘aircraft’</li><li>‘freefly’ |    |   110.0       |
  
## `location`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
location     | game_info   |Player’s current grid location, represented by (x,y,z).<ul><li>Top left corner of the map is (0,0,z)</li><li>Bottom right corner of the map is (2500,2500,z). See [notes](#location-note)|    |   114.1       |
  
#### *location* note

Data Example:

```json
{"x" : 621, "y" : 2469, "z" : 50}
```

## `team`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
nicknames    | match_info  | Names of the players in the user’s team. See [notes](#team-note) |    |   170.0       |

#### *team* note

Data Example:

```json
{"feature":"team","category":"match_info","key":"nicknames","value":"{"team_members":[{"player":"Itaygl"},{"player":"ErW_iN"},{"player":"einhorn28"},{"player":"Jacqulees"}]}"}
```

## `items`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- |
item_X       | inventory   |Current inventory of the local player. See [notes](#item_X-note) |    |   119.2       |
selected_slot|selected_slot|Currently selected slot in the quickbar. See [notes](#selected_slot-note) |    |   119.2       |
quickbar_X   | quickbar    |Display names of the items in the primary quickbar. (list of possible display names can be found [here](https://www.stormshield.one/items?utf8=%E2%9C%93&items_grid%5Bkind%5D=br_weapon&items_grid%5Bpatch_added%5D=&items_grid%5Bhash_code%5D=&commit=Search)) See [notes](#quickbar_X-note) |    |   119.2       |
selected_material| selected_material  | The currently selected building material. See [notes](#selected_material-note) |    |   119.2 |

#### *item_X* note

Each item in the inventory has the following properties:
* name – display name of the item (list of possible display names can be found [here](https://www.stormshield.one/items?utf8=%E2%9C%93&items_grid%5Bkind%5D=br_weapon&items_grid%5Bpatch_added%5D=&items_grid%5Bhash_code%5D=&commit=Search))
* count – number of units
* ammo – amount of loaded ammo (when relevant)
* rarity – rarity of the item [0-4]
  * 0 – none
  * 1 – green
  * 2 – blue
  * 3 – purple
  * 4 – gold

Data Example:

```json
"inventory":
{
    "item_0":"{"name":"WID_Harvest_Pickaxe_NeonCat","count":"1","ammo":"0","rarity":"3"}",
    "item_3":"{"name":"StoneItemData","count":"2","ammo":"0","rarity":"0"}",
    "item_7":"{"name":"AthenaAmmoDataShells","count":"4","ammo":"0","rarity":"0"}",
    "item_11":"{"name":"Athena_Balloons_Consumable","count":"7","ammo":"0","rarity":"3"}",3
    "item_15":null,
    "item_14":null,
    "item_13":"{"name":"WID_Assault_AutoHigh_Athena_SR_Ore_T03","count":"1","ammo":"30","rarity":"4"}"
}
```

#### *selected_slot* note

This info-update includes the  following properties:
*  isPrimary – “true” when the selected slot is in the main quickbar (weapons), “false” when the selected slot is in the secondary quickbar (build options)
* slot – the selected slot (0-5)

Data Example:

```json
{"info":{"selected_slot":{"selected_slot":"{"isPrimary":true,"slot":"1"}"}},"feature":"items"}
```

#### *quickbar_X* note

Data Example:

```json
{"info":{"quickbar":{"quickbar_1":"{"name":"WID_Shotgun_SemiAuto_Athena_UC_Ore_T03"}"}},
"feature":"items"}
```

#### *selected_material* note

Possible values are:
* 0 – wood
* 1 - stone
* 2 – metal

Data Example:

```json
{"info":{"selected_material":{"selected_material":"1"}},"feature":"items"}
```

## `coutners`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
ping             | performance  |Latency changes of the local player in the current match.	| This feature is currently disabled.|  128.0       |
