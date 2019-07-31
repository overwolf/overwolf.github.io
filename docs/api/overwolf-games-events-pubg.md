---
id:overwolf-games-events-pubg
title: PlayerUnkown's Battlegrounds Game Events
sidebar_label: PUBG Game Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10906
:::

## Sample Apps
* [PUBG game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [kill](#kill)
* [revived](#revived)
* [death](#death)
* [killer](#killer)
* [match](#match)
* [rank](#rank)
* [counters](#counters)
* [location](#location)
* [me](#me)
* [team](#team)
* [phase](#phase)
* [map](#map)
* [roster](#roster)

## `kill`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- |
kills | match_info   | Total number of kills in the match  |                       |   0.90       |
headshots | match_info   | Total number of headshots in the match |                       |  0.127       |
total_damage_dealt      | match_info   | Total damage dealt in the current match |   |  0.127       |
max_kill_distance      | match_info   | Max kill distance in CM|          |  0.127       |

#### `kills` notes:

Currently there is a known issue where if a teammate knocks out an enemy and local player finishes him off, he will not get the kill event.

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------- | ------------------ | --------------|
kill | null        | The local player killed another player |   |   0.90       | 
knockout   | null        |  The local player knocked-out another player	   |     |  0.127       | 
headshot   | null        |  The local player hit another player with a headshot 	   |     |  0.127       | 
damage_dealt   | amount of damage dealt by the local player |  The local player “damaged” an enemy or himself |      |  0.127       | 
fire   | null        |  When local player attacks.  | Relevant also for fists. |  0.128       | 

#### `kill` note:

Currently there is a known issue where if a teammate knocks out an enemy and local player finishes him off, he will not get the kill event.

#### `damage_dealt` note:

This event can not be used in real time, as it can give an un-fair advantage to the user. You can use it post-match.

## `match`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- |
mode | match_info | Solo/Duo/Squad</br>Example:</br> `{"mode":"squad"}`|    |   0.90 |
match_id | match_info | The current match ID code.</br>Example:</br>`match.bro.official.pc-2018-03.steam.`</br>`solo.eu.2019.05.07.08.ce8d1a14-b2af`</br>`-41c8-8bf4-d2a504326630`  |  Can be compared and checked at this [link](https://pubglookup.com/) |   120.0 |
pseudo_match_id | match_info | The current session’s ID code.</br>Example:</br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code which is unrelated to the match ID given above.  | 130.0.15|

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------- | ------------------ | --------------|
matchStart | null        | Match started |   |   0.90       | 
matchEnd | null        | Match ended. See [notes](#matchend-notes) below |   |   0.90       | 
matchSummary | null        | The match summary screen (with the user’s rank) is shown</br>`{"name":"matchSummary","data":""}` |   |   120.0      |

#### `matchEnd` notes

The  matchEnd event fired when your player is killed, and when you exit to the lobby. (which means that if you get killed and than you exit to the lobby, you will see two calls for this event).

## `rank`

### Info Updates

key          | Category    | Values                            | Notes                 | Since Version |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
me       | match_info   | The player’s rank at the end of the match |                       |   0.90        |
total_teams       | match_info   | The total number of players |                       |   0.90        |

## `counters`

### Info Updates

key    | Category    | Values                                    | Notes                                   | Since Version |
-------| ------------| ----------------------------------------- | --------------------------------------- | ------------- |
ping   | performance | The local player’s latency                | Example: `{"name":"ping","data":"66"}`  |  0.133       |

## `location`

### Info Updates

key                 | Category  | Values                                                     | Notes                                           | Since Version |
------------------- | ----------| ---------------------------------------------------------- | ----------------------------------------------  | ------------- |
location            | game_info | The player’s current grid location (x,y,z).                | See example [below](#location-notes)            |   0.116       |
safe_zone           | game_info | The location of the white circle and its radius            | See example [below](#zones-notes)               |   0.133       |
blue_zone           | game_info | The location of the blue circle and its radius             | See example [below](#zones-notes)               |   0.133       |
red_zone            | game_info | The location of the red  circle and its radius             | See example [below](#zones-notes)               |   0.133       |

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------- | ------------------ | --------------|
time_to_next_circle | Amount of seconds left to next safe zone | From the moment the first safe zone is formed. | See example [below](#time-to-next-circle-notes)  |   0.133       | 

#### `location` notes

* Top-left is (0,0,z)
* Large map (Miramar, Erangel, etc.) size is 8000×8000 (8 sq. KM)
* Medium map (Vikendi) size is 6000×6000 (6 sq. KM)
* Small map (Sanhok) size is 4000×4000 (4 sq. KM)
* The location is being updated every two seconds while the player is in the airplane
* The location is being updated every second while the user is not in the airplane (freefly or on the ground)

Example:

`{"location":"{ \"x\" : 2300, \"y\" : 5740, \"z\" : 1520 }"}`

#### `zones` notes

* `x` & `y` are the center of the circle.
* `radius` is the circle’s radius.

Examples:

`{"info":{"game_info":{"safe_zone":"{\"x\":6727,\"y\":2556,\"radius\":1507}"}},"feature":"location"}`
`{"info":{"game_info":{"blue_zone":"{\"x\":6727,\"y\":2556,\"radius\":1507}"}},"feature":"location"}`

#### `time_to_next_circle` notes

`{"name":"time_to_next_circle","data":"{\"phase\" : \"3\",\"time\" : \"438\"}"}`

## `me`

### Info Updates

key          | Category    | Values                            | Notes                 | Since Version |
------------ | ------------| --------------------------------- | --------------------- | ------------- |
name       | me   | The player’s nickname</br>`{"name":"itayG"}` |                       |   0.90        |
bodyPosition       | me   | The local player’s peek-position.<ul><li>‘leanLeft’</li><li>‘leanRight’</li><li>‘straight’ |                       |  0.128        |
inVehicle       | me   | Whether local player is inside a vehicle or not.<ul><li>‘null’Bool - ‘True‘/‘False‘ | Valid for the airplane as well. |  0.128        |
aiming       | me   | The player’s different type of aim-focus usage.<ul><li>‘null’</li><li>‘focusedAim’</li><li>‘aimDownSight’</li><li>aimDownSight_holding_breath’ |                       |  0.128        |
view       | me   | The player’s perspective (Third Person/First Person).<ul><li>‘TPP’</li><li>‘FPP’</li> |                       |  0.128        |
freeView       | me   | When the local player uses ‘ALT’ feature to look around.<ul><li>Bool - ‘True‘/‘False‘</li> |                       |  0.128        |
movement       | me   | The player’s type of movement speed.<ul><li>‘normal’</li><li>‘fast’</li><li>‘stealth’</li> |                       |  0.128        |
inventory_XX       | inventory   | Info about the inventory of the local player. Each “inventory_XX” object </br>represents one item and is being cleared once this item is dropped/replaced </br>by the player.</br>This info-update provides:<ul><li>name (string) – name of the item</li><li>count (int) – number of items</li>`{"feature":"me","category":"inventory","key":"inventory_1",`</br>`"value":"{\"name\" :\"Item_Attach_Weapon_Muzzle_FlashHider`</br>`_Medium_C_2\",\"count\" : \"1\"}"}` |                       |    130.0.9        |
equipped_XX       | inventory   | Info about “equipable” items. Each “equipped_XX” object represents </br>one item and is being cleared once this item is dropped/replaced </br>by the player.</br>This info-update provides:<ul><li>name (string) – the name of the item</li><li>count (int) – number of items</li>`{"feature":"me","category":"inventory","key":"equipped_1",`</br>`"value":"{\"name\" : \"Item_Weapon_vz61Skorpion_C_1\"\`</br>`"count\" : \"1\"}"}` |                       |    130.0.9        |
weaponState       | inventory   | Info about the weapon and its state.</br>This info-update provides:<ul><li>name (string) – the name of the weapon used by the local player</li><li>equipped (bool) – in hand (true) or holstered (false)</li><li>count (int) – number of items |                       |    130.0.9        |

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
jump | null        | Local player jumps (space) |   |  0.128       |

## `team`

### Info Updates

key         | Category    | Values                          | Notes                 | Since Version |
----------- | ------------| --------------------------------| --------------------- | ------------- |
nicknames       | match_info   | The names of players in the player’s team</br>`{"nicknames":"{\"team_members\" : [{\"player\" : \"yy899189\"}`</br>`,{\"player\" : \"itayG\"},{\"player\" : \"fucis\"},{\"player\"`</br>`:\"gedyan\"}]}"}},"feature":"team"}`        |                       |   0.90        |
team_location| match_info  | The X,Y,Z location of your team members. |See [notes](#team_location-notes)|     134.0     |

#### *team_location* note

Data Example:

`{"info":{"game_info":{"team_location":"[{\"player\":\"Stilee\",\"location\":{\"x\":\"4185\",\"y\":\"1309\",\"z\":\"1500\"}},{\"player\":\"hajjjekc\",\"location\":{\"x\":\"4185\",\"y\":\"1309\",\"z\":\"1500\"}},{\"player\":\"itayG\",\"location\":{\"x\":\"4185\",\"y\":\"1309\",\"z\":\"1500\"}},{\"player\":\"ARNKC\",\"location\":{\"x\":\"4185\",\"y\":\"1309\",\"z\":\"1500\"}}]"}},"feature":"location"}`

## `phase`

### Info Updates

key    | Category    | Values                          | Notes                 | Since Version |
-------| ------------| --------------------------------| --------------------- | ------------- | 
phase   | game_info   | The game’s current state, can be one of the following:<ul><li>‘lobby’</li><li>‘loading_screen’</li><li>‘airfield’</li><li>‘aircraft’</li><li>‘freefly’</li><li>‘landed’  |                       |  0.90         |

## `map`

### Info Updates

key                | Category    | Values                                         | Notes  | Since Version |
-------------------| ------------| -----------------------------------------------| ------ | ------------- |
map    | match_info   | The current map name</br>`{"map":"Erangel_Main"}`   | [map names mapping](https://github.com/pubg/api-assets/blob/master/dictionaries/telemetry/mapName.json) |    0.90       |

## `roster`

### Info Updates
key       | Category        | Values                                         | Notes                                                   | Since Version |
----------| ----------------| -----------------------------------------------| ------------------------------------------------------- | ------------- |
roster_XX        | match_info   | This feature provides the entire list of players </br>(~99 players). See [notes below](#roster_xx-notes)  |    | 119.1   |

#### `roster_XX` notes

This feature provides the entire list of players (~99 players).
Each player that joins the game (during the “airfield” phase) will be reported in the following way:

`{"feature":"roster","category":"match_info","key":"roster_0","value":"{\"player\":\"Dr4ex\",\"kills\":\"0\",\"out\":false}"}`

As you can see, this object includes:
* **player** – Player name
* **kills** – Number of kills. This field is being updated once the player leaves the game ( = quit the match).
* **out** - false” when the player is “alive”, “true” when the player left the game (died or quit the match).  
  When a player “leaves” the match, the following info-update will be reported:  
  `{"feature":"roster","category":"match_info","key":"roster_0","value":"{\"player\":\"Dr4ex\"\"kills\":\"0\",\"out\":true}"}` 

## `revived`

### Events

Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
revived | null        | The local player was revived |   |   0.90    |

## `death`

### Events


Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
death | null | The local player dies |   |   0.90    |
knockedout | null | The local player is knocked-out |   |   0.90    |
damageTaken | null | The local player receives damage. | Not including damage </br>taken when outside the zone. |0.128 |

## `killer`

### Events


Event      | Event Data  | Fired When          | Notes              | Since Version |
-----------| ------------| ------------------------------- | ------------------ | --------------|
killer | The killer’s nickname | The local player was killed by one of the players |  |    90.4    |

#### `killer` notes:

When one of local player’s squad members kill the local player, the provided data will be "self_kill”.
