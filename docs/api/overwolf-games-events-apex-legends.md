---
id: overwolf-games-events-apex-legends
title: Apex Legends Game Events
sidebar_label: Apex Legends Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21566
:::

## Sample Apps
* [APEX game events sample app](https://github.com/overwolf/apex-events-sample-app)

## Available Features

* [me](#me)
* [team](#team)
* [kill](#kill)
* [damage](#damage)
* [death](#death)
* [revive](#revive)
* [match_state](#match_state)
* [match_info](#match-info)
* [inventory](#inventory)
* [location](#location)
* [match_summary](#match-summary)
* [roster](#roster)
* [victory](#victory)
* [kill_feed](#kill-feed)

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
me           | game_info   | Local Player Name         |                       |  0. 128       |
ultimate_cooldown | me     | Ultimate ability cooldown |                       |  0. 128       |

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current session’s ID code.</br></br>Example:</br></br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code. Unrelated to Respawn.  |   0.130|

## `match_state`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
match_state  | game_info   | active/inactive           |                       |  0. 128       |

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_Start | null         | Match started |                    |     0.128     | 
match_End   | null         | Match ended   |                    |     0.128     | 

## `team`

### Info Updates

key          | Category    | Values                                                                                                      | Notes   | Since Version |
------------ | ------------| ----------------------------------------------------------------------------------------------------------- | ------- | ------------- | 
teammate_X   | match_info  | This feature provides the list of your squad members.                                                       |         |  0. 128       |
legendSelect_X| match_info | The name of the legend & order of selection for every member in the team, including who is the jump-master. |         |  0. 128       |

#### `teammate_X` notes:

Each member from your squad that joins the game will be reported in the following way: 

`{"info":{"match_info":{"teammate_0":"{\"name\":\"Sh4rgaas\",\"state\":\"alive\"}"}},"feature":"team"}`

As  youcan see, this object includes:

* `player` – Player name
* `state` – alive/death/knockedout

#### `legendSelect_X` notes:

Every member in the team, including who is the jump-master will be reported in the following way:

`{"feature":"team","category":"match_info","key":"legendSelect_2","value":"{\"playerName\":\"Sh4rgaas\",\"legendName\":\"#character_octane_NAME\",\"selectionOrder\":\"2\",\"lead\":true}"}`

As you can see, this object includes:

* selection border
* legend name
* jumpmaster - Bool

## `roster`

### Info Updates

key          | Category  | Values                                                         | Notes       | Since Version |
------------ | ----------| -------------------------------------------------------------- | ----------- | ------------- | 
roster_XX  | match_info  | This feature provides the entire list of players (~60 players).|             |  0. 128       |

#### `roster_XX` notes:

Each player that joins the game will be reported in the following way:

`{"info":{"match_info":{"roster_3":"{\"name\":\"RunLikePistorius\",\"isTeammate\":false}"}},"feature":"roster"}`

As you can see, this object includes:

* `name` - Player name
* `isTeammate` (Bool) - Player is/not a squad member

## `location`

### Info Updates

key       | Category   | Values             | Notes       | Since Version |
----------| -----------| ------------------ | ----------- | ------------- | 
location  | game_info  | See example below  |             |  0.130        |

#### `location` notes:

* Map Center is (0,0,z)
* King's Canyon appears to be 1x1km
* The location is updated up to 2 updates in 1 second.
* Location accuracy is 1 meter.

#### Event data example:

`{"info":{"match_info":{"location":"{\"x\":\"93\",\"y\":\"305\",\"z\":\"49\"}"}},"feature":"location"}`

## `victory`

### Info Updates

key          | Category    | Values                    | Notes                 | Since Version |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
victory  | match_info   | active/inactive           |  This info update notifies at the end of the match and provides “true” for winning and “false” for losing.                     |  0.128   |

## `match_summary`

### Info Updates

key         | Category    | Values  | Notes     | Since Version |
----------- | ------------| --------| --------- | ------------- | 
match_summary| match_info |         |           |   0.130       |

#### `match_summary` notes:

The following info is provided:
* The final position the squad has reached (rank 1-20).
* Total number of teams
* Number of squad kills (total squad eliminated).

#### Event data example:

`{"feature":"match_summary","category":"match_info","key":"match_summary","value":"{\"rank\":\"12\",\"teams\":\"20\",\"squadKills\":\"5\"}"}`

## `damage`

### Info Updates

key              | Category   | Values                                                                     | Notes   | Since Version |
---------------- | -----------| -------------------------------------------------------------------------- | ------- | ------------- | 
totalDamageDealt | me         | The total amount of damage inflicted in 1 match of Apex. See example below.|         |  0.130        |

#### `totalDamageDealt` Notes:

Important to note that the game does not count damage that is inflicted on Armor. Only after the armor was broken. Our damage includes damage on armor aswell, so it will always be higher than game-damage.

#### Event data example:

`{"feature":"damage","category":"me","key":"totalDamageDealt","value":668}`

### Events

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since Version |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
damage | See example below | When information is presented on the game’s UI (top right corner). |            |    0.130      |

#### `damage` Notes:

The following properties are provided:

* targetName
* damageAmount
* armor
* headshot
* grenade

#### Event data example:

`{"name":"damage","data":"{\r\n \"targetName\": \"masiqu22\",\r\n \"damageAmount\": \"13.000000\",\r\n \"armor\": \"true\",\r\n \"headshot\": \"false\"\r\n}"}`

## `inventory`

### Info Updates

key                | Category    | Values                                         | Notes  | Since Version |
-------------------| ------------| -----------------------------------------------| ------ | ------------- | 
inventory_XX        | me   | The items that are picked up into the inventory slots of the local player (Tab).</br>Example:</br>`{"feature":"inventory","category":"me","key":"inventory_0","value":"{\"name\":\"Shotgun Shells\",\"amount\":\"36\"}"}`   |        |    0.130      |
weapons | me   | The weapons that are currently used by the local player (only 2 slots are available – 0 & 1).</br>Example:</br>`{"category":"game_info","key":"weapons","value":"{\"weapon_0\":\"mp_weapon_shotgun_pistol\",\"weapon_1\":\"mp_weapon_doubletake\",\"active_0\":\"mp_weapon_doubletake\"}","valueLength":107}` |        |    0.130      |
inUse | me   | Any item that is <u>currently used</u> by the local player.</br>Example:</br>`{"feature":"inventory","category":"me","key":"inUse","value":"{\"inUse\":\"Triple Take\"}"}` |        |    0.130      |

## `kill`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since Version |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
kill | victimName                              | The local player killed another player |                    |     0.130      | 
knockdown | victimName                              | The local player knocked out another player |                    |     0.130      | 
assist | victimName                              | The local player participated in a team member’s kill.</br></br>Provided values:</br>1. victimName</br>2. type - knockdown / elimination</br></br>Example:</br></br>`{"name":"assist","data":"{\r\n  \"victimName\": \"VioletAlbicocca\",\r\n  \"type\": \"knockdown\"\r\n}"}` |                    |     0.130      | 

## `revive`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since Version |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
healed_from_ko | null                              | Local player was revived from knocked out state. |                    |     0.128     | 
respawn | null                              | Local player was returned at the game beacon. |                    |     0.128      | 

## `death`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since Version |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
knocked_out | null                              | The local player’s health drops to zero.	 |                    |     0.128      | 
death | null (in the future we will provide the killer name). | The local player died during knocked out state. | There is another health bar during knocked out</br>state, it’s orange, above the player name. |     0.128      | 

## `kill_feed`

### Events

Event     | Event Data        | Fired When                                                         | Notes              | Since Version |
----------| ------------------| ------------------------------------------------------------------ | ------------------ | --------------|
kill_feed | See example below | When information is presented on the game’s UI (top right corner). |                    |     0.130     | 

#### `kill_feed` notes:

The following properties are provided:

* attackerName
* victimName
* weaponName
* action

#### Event data example:

`{"attackerName":"NerdGhela","victimName":"DJerryKhan","weaponName":"energy_ar","action":"knockdown"}`