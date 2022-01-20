---
id: overwolf-games-events-apex-legends
title: Apex Legends
sidebar_label: Apex Legends
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21566
:::

## Sample Apps
* [APEX game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [me](#me)
* [team](#team)
* [kill](#kill)
* [damage](#damage)
* [death](#death)
* [revive](#revive)
* [match_state](#match_state)
* [match_info](#match_info)
* [inventory](#inventory)
* [location](#location)
* [match_summary](#match_summary)
* [roster](#roster)
* [rank](#rank)
* [kill_feed](#kill_feed)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `me`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | -------------  | 
name              | game_info   | Local Player Name         |  See [notes](#name-note) |  128.0         |
ultimate_cooldown | me          | Ultimate ability cooldown (range between 0-100)   | See [notes](#ultimate_cooldown-note) |  128.0         |

#### *name* note

Data Example:

```json
{"info":{"me":{"name":"Shargaas"}},"feature":"me"}
```

#### *ultimate_cooldown* note

Data Example:

```json
{"info":{"me":{"ultimate_cooldown":"{"ultimate_cooldown":"20"}"}},"feature":"me"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
--------------- | -----------| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------- | 
pseudo_match_id | match_info | The current match’s ID code.</br></br>Example:</br></br> `0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`  |  This is an Overwolf-generated code, unrelated to Respawn.  |   130.0 |
game_mode      | match_info | The currently selected game mode. | See [notes](#game_mode-note) |   158.0 |
tabs            | match_info | The current amount of squads, players, cash, and kills of the match (in relation to local player).| See [notes](#tabs-note) |   158.0 |

#### *game_mode* note

Data Example:

```json
{"info":{"match_info":{"game_mode":"#PL_CAN_TRIO"}},"feature":"match_info"}
```
Possible values:

- "#PL_FIRINGRANGE"
- "#PL_TRAINING"
- "#PL_DUO"
- "#PL_TRIO"
- "#PL_Ranked_Leagues"
- "#SHADOWROYALE_MODE"

Note that we get these values from the game, so they might be changed from season to season.

#### *tabs* note

Data Example:

```json
{"info":{"match_info":{"tabs":"{"kills":1,"spectators":0,"teams":11,"players":30,"damage":394,"cash":0}"}},"feature":"match_info"}
```

## `match_state`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
match_state  | game_info   | active/inactive           | See [notes](#match_state-note) |  128.0       |

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start | null         | Match started |See [notes](#match_start-note)|     128.0     | 
match_end   | null         | Match ended   |See [notes](#match_end-note)|     128.0     | 

#### *match_state* note

Data Example:

```json
{"info":{"game_info":{"match_state":"active"}},"feature":"match_state"}
{"info":{"game_info":{"match_state":"inactive"}},"feature":"match_state"}
```

#### *match_start* note

Data Example:

```json
{"events":[{"name":"match_start","data":""}]}
```

#### *match_end* note

Currently we have a special case where if someone in your team got a yellow knockdown shield (the one that allows you to self-revive), and your entire team was knocked out, the match end will still fire despite no one reaching a death-state.
This is a very rare case that does not commonly happen in the game, however we're still working on fixing it.

## `team`

### Info Updates

key          | Category    | Values                                                                                                      | Notes   | Since GEP Ver. |
------------ | ------------| ----------------------------------------------------------------------------------------------------------- | ------- | ------------- | 
teammate_X   | match_info  | This feature provides the list of your squad members.                                                       |         |  128.0       |
legendSelect_X| match_info | The name of the legend & order of selection for every member in the team, including noting who the jump-master is. |         |  128.0       |
team_info| match_info | The current status of the local player’s team. |         |  128.0       |

#### *teammate_X* notes

Each squad member joining the game will be reported in the following way: 

```json
{"info":{"match_info":{"teammate_0":"{"name":"Sh4rgaas","state":"alive"}"}},"feature":"team"}
```

As  youcan see, this object includes:

* `player` – Player name
* `state` – alive/death/knocked out

#### *legendSelect_X* notes

Every team member, including the jump-master will be reported in the following way:

```json
{"playerName":"fReeeeezeeeee","legendName":"#character_pathfinder_NAME","selectionOrder":"1","lead":false}
```

#### *team_info* notes

The current status of the local player’s team ("active" or "eliminated").

```json
{"team_state":"active"}
```

As you can see, this object includes:

* Selection order
* Legend name
* Jumpmaster - Bool True/False

## `roster`

### Info Updates

key          | Category  | Values                                                         | Notes       | Since GEP Ver. |
------------ | ----------| -------------------------------------------------------------- | ----------- | ------------- | 
roster_XX  | match_info  | Provides the entire list of players in a match (~60 players).|             |  128.0       |

#### *roster_XX* notes

Each player joining the game will be reported in the following way:

```json
{"info":{"match_info":{"roster_13":"{"name":"ilgaru88","isTeammate":true,"team_id":12,"platform_hw":2,"platform_sw":2,"state":"alive"}"}},"feature":"roster"}
```

As you can see, this object includes:

* `name` - Player name
* `isTeammate` (Bool) - Player is/isn't a squad member
* `team_id` - Numerical value for each squad in-game.
* `platform` - The platform which the player plays on currently.

Possible platform values:

* `"platform_hw":2,"platform_sw":2` = PC/Origin
* `"platform_hw":2,"platform_sw":7` = PC/Steam
* `"platform_hw":1,"platform_sw":1` = PS4

## `location`

### Info Updates

key       | Category   | Values             | Notes       | Since GEP Ver. |
----------| -----------| ------------------ | ----------- | ------------- | 
location  | match_info | See example below  |             |  130.0        |

#### *location* notes

* Map Center is (0,0,z)
* King's Canyon appears to be 1x1km
* Location is polled up to two times in 1 second
* Location is accurate to a 1 meter resolution, do not use fractions of meters

#### Event data example

```json
{"info":{"match_info":{"location":"{"x":"93","y":"305","z":"49"}"}},"feature":"location"}
```

## `rank`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
victory  | match_info   | true/false   |  At the end of the match provides “true” for winning and “false” for losing.  |  128.0   |

#### *victory* note

Data Example:

```json
{"info":{"match_info":{"victory":"false"}},"feature":"rank"}
{"info":{"match_info":{"victory":"true"}},"feature":"rank"}
```

## `match_summary`

### Info Updates

key         | Category    | Values  | Notes     | Since GEP Ver. |
----------- | ------------| --------| --------- | ------------- | 
match_summary| match_info |         |           |   130.0      |

#### *match_summary* notes

After a match, this will return:
* The final position the squad has reached (ranked 1-20)
* Total number of teams in the match
* Total number of kills made by the squad

#### Event data example

```json
{"info":{"match_info":{"match_summary":"{"rank":"12","teams":"20","squadKills":"5"}"}},"feature":"match_summary"}
```

## `damage`

### Info Updates

key              | Category   | Values                                                                     | Notes   | Since GEP Ver. |
---------------- | -----------| -------------------------------------------------------------------------- | ------- | ------------- | 
totalDamageDealt | me         | The total amount of damage inflicted in a match of Apex. See example below.|         |  130.0        |

#### *totalDamageDealt* notes

Note that the game does not count damage that is inflicted on Armor, only Health damage after the armor was broken. However, our damage report includes damage done to armor, so it will always be higher than the in-game damage.

#### Event data example

```json
{"info":{"me":{"totalDamageDealt":668}},"feature":"damage"}
```

### Events

Event  | Event Data        | Fired When (announcement)                                          | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------------------------------------| ---------- | --------------|
damage | See example below | When the local player deals damage to another player. |            |    130.0      |

#### *damage* notes

The following properties are provided:

* targetName
* damageAmount
* armor
* headshot
* grenade

#### Event data example

```json
{"targetName": "Fortiziak","damageAmount": "25.000000","armor": "true","headshot": "true"}
```

## `inventory`

### Info Updates

key                | Category    | Values                                         | Notes  | Since GEP Ver. |
-------------------| ------------| -----------------------------------------------| ------ | ------------- | 
inventory_XX        | me   | Lists the items picked up into the local player's inventory (Tab).</br>Example:</br>`{"name":"unknown_42","amount":"40"}`   |        |    130.0      |
weapons | me   | Weapons currently used by the local player - there are two slots available marked 0 and 1.</br>Example:</br>`{"weapon0":"Wingman","weapon1":"Alternator SMG"}` |        |    0.130      |
inUse | me   | Items <b>currently used</b> by the local player.</br>Example:</br>`{"inUse":"Kunai Melee"}` |        |    0.130      |

#### *weapons* note

Data Example:

```json
{"info":{"me":{"weapons":"{"weapon0":"P2020"}"}},"feature":"inventory"}
```

#### *inUse* note

Data Example:

```json
{"info":{"me":{"inUse":"{"inUse":"R-99"}"}},"feature":"inventory"}
```

## `kill`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since GEP Ver. |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
kill | victimName   | Local player killed another player. `{"victimName": "6ewehrw0lf"}` |                    |     130.0      | 
knockdown | victimName  | Local player knocked out another player. `{"victimName":"J0GUR7"}` |                    |    130.0      | 
assist | victimName  | Local player participated in a team member’s kill.</br></br>Provided values:</br>1. victimName</br>2. type - knockdown / elimination</br></br>Example:</br></br>`{"victimName":"VioletAlbicocca","type":"knockdown"}` |                    |    130.0      | 

#### *kill* note

* Currently performing an execution does not catch a kill event. If you want to correctly count the amount of kills despite this issue, please use the new `tabs` key in the match_info feature.
* Furthermore, assist in a `knockdown` event currently is not supported, only for `elimination`.

Data Example:

```json
{"events":[{"name":"kill","data":"{  "victimName": "`1[LuL] Sladdi #limbo"}"}]}
```

#### *knockdown* note

Data Example:

```json
{"events":[{"name":"knockdown","data":"{  "victimName": "`1 Kixfoxn"}"}]}
```

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":"{  "victimName": "kazikov.qwerty",  "type": "elimination"}"}]}
```

## `revive`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since GEP Ver. |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
healed_from_ko | null                              | Local player was revived from knocked out state. | See [notes](#healed_from_ko-note) |     128.0     | 
respawn | null                              | Local player was returned to the game at a beacon. |See [notes](#respawn-note)|     128.0      | 

#### *healed_from_ko* note

Data Example:

```json
{"events":[{"name":"healed_from_ko","data":null}]}
```

#### *respawn* note

Data Example:

```json
{"events":[{"name":"respawn","data":null}]}
```

## `death`

### Events

Event        | Event Data                        | Fired When   | Notes              | Since GEP Ver. |
-------------| ----------------------------------| ----------------------------- | ------------------ | --------------|
knocked_out | null                              | Local player’s health drops to zero.	 | See [notes](#knocked_out-note)|     128.0      | 
death | null (in the future we will provide the killer name). | Local player died during knocked out state. | There is another health bar during knocked out</br>state, it’s orange, above the player name. See [notes](#death-note) |     128.0      | 

#### *knocked_out* note

Data Example:

```json
{"events":[{"name":"knocked_out","data":null}]}
```

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":null}]}
```

## `kill_feed`

### Events

Event     | Event Data        | Fired When                                                         | Notes              | Since GEP Ver. |
----------| ------------------| ------------------------------------------------------------------ | ------------------ | --------------|
kill_feed | See example below | When information is presented on the game’s UI (top right corner). |                    |     130.0     | 

#### *kill_feed* notes

The following properties are provided:

* local_player_name
* attackerName
* victimName
* weaponName
* action

#### Event data example

```json
{"events":[{"name":"kill_feed","data":"{"local_player_name":"Shargaas","attackerName":"shayan3200", "victimName":"i999n","weaponName":"alternator","action":"knockdown"}"}]}
```
#### "Bleed Out" note

The **weaponName** can return with a "Bleed Out" value. For example:

```
"events": [{
    "name": "kill_feed",
	"data": {
	    "attackerName": "Red_Wizard19TTV",
		"victimName": "SoSochek_1337",
		"weaponName": "Bleed Out",
		"action": "Bleed Out"
    }
}]
```

"Bleed Out" is when something "external" kills you, which is not an enemy player.  
For example, if you are knocked out already, and you are outside of the safe zone, your HP automatically depletes, and when it reaches zero, and you die, you will **Bleed Out**, and the **weaponName** and **action** will return with the "Bleed Out" value.  The same rules apply for the "Caustic" legend gas barrels; if they kill you, you also receive a "Bleed Out."
