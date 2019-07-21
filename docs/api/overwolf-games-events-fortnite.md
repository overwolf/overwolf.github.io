---
id:overwolf-games-events-fortnite
title: Fortnite Game Events
sidebar_label: Fortnite Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21216
:::

## Sample Apps
* [Fortnite game events sample app](https://github.com/overwolf/fortnite-sample-app)

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

## `kill`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
kills             | match_info  | Total number of kills in the match |              |  110.1        |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
kill        | null         | The local player killed another player | |  110.1  |
knockout    | null     | The local player knockedout another player |  | 110.1  |
hit         | isHeadshot – bool(“true” when the hit is a “headshot”)| The local player hits an enemy with a weapon (hits with a pickaxe are not counted) See [notes](#hit-note) |                    |     110.1     |

#### *hit* note

Data Example:

`{"name":"hit","data":"{"isHeadshot": true}"}`

## `killed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
killed      | The name of the killed player. See [notes](#killed-note)| The local player killed another player | |  117.1  |

#### *killed* note

Data Example:

`{"name":"killed","data":"itaygl"}`

## `killer`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
killer      | The name of the killer. See [notes](#killer-note) | The local player was killed | |  117.1  |

#### *killer* note

Data Example:

`{"name":"killer","data":"itaygl"}`

## `revived`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
revived      | null | The local player was revived |                  |  110.1  |

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
death      | null | The local player died |                  |  110.1  |
knockedout | The name of the player who knocked you out. See [notes](#knockedout-note) | The local player is knocked-out |  |  118.1  |

## `match`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
mode              | match_info  | Possible Values:<ul><li>"solo"</li><li>"duo"</li><li>"squad"</li><li>"Playlist_Playground"</li>`{"mode":"duo"}`|              |  110.1        |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
matchStart  | null         | Match started |                    |  110.1  |
matchEnd    | null         | Match ended   |                    |  110.1  |

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  |The current match’s ID code. See [notes](#pseudo_match_id-note)|                       |  130.2  |

#### *pseudo_match_id* note

Note that this is an Overwolf-generated code. Unrelated to Epic Games.

Example data:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

## `rank`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
rank         | match_info  |The player’s rank at the end of the match|         |   110.1       |
total_teams  | match_info  |The total number of active teams|                  |   110.1       |
total_players| match_info  |The total number of active players|                |   110.1       |

#### *total_teams* note

This is a dynamic variable that is being updated every time team joins or leaves (all of the team members died) the game

#### *total_players* note

This is a dynamic variable that is being updated every time a player joins or leaves (die) the game

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
name         | me          |   The player’s nickname. See [notes](#name-notes) |    |   110.1       |
health       | me  |The player’s current health % (100-0). See [notes](#health-notes)| |   110.1       |
accuracy     | me  |The current local player’s accuracy (hits/total shots). See [notes](#accuracy-note)|   |   110.1       |
shield       | me  |The amount of shield the local player currently has. See [notes](#shield-notes)|         |   110.1       |

#### *name* note

Data Example:

`{"name":"itayG"}`

#### *health* note

Data Example:

`{"health":"37"}`

#### *accuracy* note

Data Example:

`{"accuracy":"0.333333"}`

#### *shield* note

Data Example:

`{"info":{"me":{"shield":"50"}},"feature":"me"}`

## `phase`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
phase        | game_info   |The game’s current state, can be one of the following:<ul><li>'lobby'</li><li>‘loading_screen’</li><li>‘airfield’</li><li>‘aircraft’</li><li>‘freefly’ |    |   110.1       |
  
## `location`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
location     | game_info   |The player’s current grid location, represented by (x,y,z).<ul><li>Top left corner of the map is (0,0,z)</li><li>Bottom right corner of the map is (2500,2500,z). See [notes](#location-note)|    |   114.1       |
  
#### *location* note

Data Example:

{"x" : 621, "y" : 2469, "z" : 50}

## `team`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
nicknames    | match_info  | The names of the players in the user’s team. See [notes](#team-note) |    |   117.1       |

#### *team* note

Data Example:

`{"feature":"team","category":"match_info","key":"nicknames","value":"{\"team_members\":[{\"player\":\"Itaygl\"},{\"player\":\"ErW_iN\"},{\"player\":\"einhorn28\"},{\"player\":\"Jacqulees\"}]}"}`

## `items`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
item_X       | inventory   | The current inventory of the local player. See [notes](#item_X-note) |    |   119.2       |
selected_slot|selected_slot| The currently selected slot in the quickbar. See [notes](#selected_slot-note) |    |   119.2       |
quickbar_X   | quickbar    | The display names of the items in the primary quickbar. (list of possible display names can be found [here](https://www.stormshield.one/items?utf8=%E2%9C%93&items_grid%5Bkind%5D=br_weapon&items_grid%5Bpatch_added%5D=&items_grid%5Bhash_code%5D=&commit=Search)) See [notes](#quickbar_X-note) |    |   119.2       |
selected_material| selected_material  | The currently selected building material. See [notes](#selected_material-note) |    |   119.2 |

#### *item_X* note

Each item in the inventory contains the following properties:
* name – display name of the item (list of possible display names can be found [here](https://www.stormshield.one/items?utf8=%E2%9C%93&items_grid%5Bkind%5D=br_weapon&items_grid%5Bpatch_added%5D=&items_grid%5Bhash_code%5D=&commit=Search))
* count – number of units
* ammo – amount loaded ammo (when relevant)
* rarity – rarity of the item [0-4]
  * 0 – none
  * 1 – green
  * 2 – blue
  * 3 – purple
  * 4 – gold

Data Example:

`"inventory":{..."item_0":"{\"name\":\"WID_Harvest_Pickaxe_NeonCat\",\"count\":\"1\",\"ammo\":\"0\",\"rarity\":\"3\"}","item_3":"{\"name\":\"StoneItemData\",\"count\":\"2\",\"ammo\":\"0\",\"rarity\":\"0\"}","item_7":"{\"name\":\"AthenaAmmoDataShells\
",\"count\":\"4\",\"ammo\":\"0\",\"rarity\":\"0\"}","item_11":"{\"name\":\"Athena_Balloons_Consumable\",\"count\":\"7\",\"ammo\":\"0\",\"rarity\":\"3\"}","item_15":null,"item_14":null,"item_13":"{\"name\":\"WID_Assault_AutoHigh_Athena_SR_Ore_T03\",\"count\":\"1\",\"ammo\":\"30\",\"rarity\":\"4\"}",...         },`

#### *selected_slot* note

This info-update includes the  following properties:
*  isPrimary – “true” when the selected slot is in the main quickbar (weapons), “false” when the selected slot is in the secondary quickbar (build options)
* slot – the selected slot (0-5)

Data Example:

`{"info":{"selected_slot":{"selected_slot":"{\"isPrimary\":true,\"slot\":\"1\"}"}},"feature":"items"}`

#### *quickbar_X* note

Data Example:

`{"info":{"quickbar":{"quickbar_1":"{\"name\":\"WID_Shotgun_SemiAuto_Athena_UC_Ore_T03\"}"}},
"feature":"items"}`

#### *selected_material* note

Possible values are:
* 0 – wood
* 1 - stone
* 2 – metal

Data Example:

`{"info":{"selected_material":{"selected_material":"1"}},"feature":"items"}`

## `coutners`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
ping             | performance  |The latency changes of the local player in the current match.	| This feature is currently disabled.|  128.0       |
