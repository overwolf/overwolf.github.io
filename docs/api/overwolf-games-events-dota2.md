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

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `game_state_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
game_state_changed |<ul><li>game_state</li><li>match_state</li><li>match_id</li><li>player_steam_id</li>|               |See [notes](#game_state_changed-note)|     77.3      |

#### *game_state_changed* note

* <b>game_state</b> – Can be ‘playing’, ‘idle’ or ‘spectating’. Idle is when there isn’t a game being played or spectated. 
* <b>match_state</b> – The internal match state. See ‘match_state_changed’ event for more info. 
* <b>match_id</b> (not available for ‘idle’): The id of the match. 
* <b>player_steam_id</b> (not available for ‘idle’): Steam id of the local player.

Fired when:

The user starts playing, begins spectating or stops playing. Note that simply bringing up the menu is not enough to trigger the ‘idle’ event – an active game (played or spectated) must be closed.

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
* DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD – Shown during the pre-game “Waiting for loaders” screen.
* DOTA_GAMERULES_STATE_HERO_SELECTION – Shown during the hero selection screen.
* DOTA_GAMERULES_STATE_PRE_GAME – Shown when the game begins, before the battle horn is heard.
* DOTA_GAMERULES_STATE_GAME_IN_PROGRESS – Shown when the horn sounds to open the match.
* DOTA_GAMERULES_STATE_POST_GAME – Shown during the post-game screen.

## `match_detected`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_detected  | Check notes |          |See [notes](#match_detected-note)|     77.3      |

#### *match_detected* note

<b>This feature is not available at the moment</b>

Event Data:

* <b>gameMode</b> – One of the supported game modes. 
* <b>playersInfo</b> – An array of 10 players' information with the following fields: 
  * <b>faction</b> – Radiant/Dire
  * <b>isLocalPlayer</b> – True if this is the local player's information, false otherwise.
  * <b>playerIndex</b> – The index of this player (0 – 9, left to right).
  * <b>steamId</b> – Steam Id of the player.

Fired when:

As soon as 10 players have accepted a match, right after the 'accept' button is clicked by all. 
Supported game modes:
* AllPick
* AllPickRanked
* SingleDraft
* RandomDraft
* AllRandom
* LeastPlayed
* LimitedHeroes
* CaptainsMode
* CaptainsDraft

## `daytime_changed `

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
daytime_changed   | Check notes |          |See [notes](#daytime_changed-note)|     77.3      |

#### *daytime_changed* note

Event Data:

* <b>daytime</b> – True if it is current day time, false otherwise.
* <b>clock_time</b> – The amount of seconds from when the game clocked shows (0:00). It can be negative during the Pre-Game phase.
* <b>nightstalker_night</b> – True if it is currently a Night Stalker ultimate night. 

Fired when:

Fired when the game transitions between day time and night time. 

## `clock_time_changed `

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
clock_time_changed    | Same as ‘map_daytime_changed’. 	 |Fired every second|   |     77.3      |

## `ward_purchase_cooldown_changed `

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
ward_purchase_cooldown_changed   | Check notes |Fired every second where wards are on cooldown. |See [notes](#ward_purchase_cooldown_changed-note)|     77.3      |

#### *ward_purchase_cooldown_changed* note

Event Data:

* <b>ward_purchase_cooldown</b> – The remaining store cooldown in seconds before a ward is available for purchase again. 

## `match_ended`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_ended   | winner – radiant/dire  |When an ancient is destroyed and the game ends.  |       |     77.3      |

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
kill    | Check notes |Whenever the player kills an enemy hero. 	|See [notes](#kill-note)|     77.3      |

#### *kill* note

Event Data:

* <b>kills</b> – The total number of kills the player has.
* <b>kill_streak</b> – The current number of hero kills without dying, denying oneself to neutral creeps does not reset this counter.
* <b>label</b> – the type of kill (kill/double_kill/triple_kill/ultra_kill/rampage)

## `assist`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
assist    |assists – The total number of assists the player has. |Whenever the player assists in a kill of an enemy champion.|      |     77.3      |

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
death    |deaths – The total number of deaths the player has. |Whenever the player dies. |           |     77.3      |

## `cs`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
cs  | Check notes |Whenever the player last hits/denies non-champion units that grant creep score. |See [notes](#cs-notes)|     77.3      |

#### *cs* note

Event Data:

* <b>last_hits</b> – The total amount of last hits (not denies) the player has.
* <b>denies</b> – The total amount of denies the player has.
* <b>type</b> – last_hits/deny.

## `xpm `

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
xpm |xpm – The current Experience Per Minute value. |Whenever the XPM changes. |          |     77.3      |

## `gpm`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
gpm | gpm – The current Gold Per Minute value. |Whenever the GPM changes. |        |     77.3      |

## `gold`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
gold | Check notes |Whenever gold changes. 	|See [notes](#gold-notes)|     77.3      |

#### *gold* note

* <b>gold</b> – Total current gold.
* <b>gold_reliable</b> – Reliable gold part.
* <b>gold_unreliable</b> – Unreliable gold part.

## `hero_leveled_up `

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_leveled_up | hero_level – The current hero level. |Whenever the player levels up. |          |     77.3      |

## `hero_respawned`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_respawned | N/A	 |Whenever the player respawns. This is also true when buying back. |          |     77.3      |

## `hero_buyback_info_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_buyback_info_changed | Check notes |        |See [notes](#hero_buyback_info_changed-notes)|     77.3      |

#### *hero_buyback_info_changed* note

Event Data:

* <b>buyback_cost</b> – Gold cost to buyback
* <b>buyback_cooldown</b> – Cooldown remaining for buyback to become available

Fired when:

Every 4 seconds and every level-up, since buyback cost is affected by game time and player level. It will also be called every second when buyback is on cooldown.

## `hero_boughtback`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_boughtback |<b>buyback_cooldown</b> – The cooldown remaining for buyback to become available.|Whenever the player buys back.|    |     77.3      |

## `hero_health_mana_info`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_health_mana_info | Check notes |Whenever either of the players mana, health, max mana or max health changes.|See [notes](#hero_health_mana_info-notes)|     77.3      |

#### *hero_health_mana_info* note

Event Data:

* <b>health</b> – Current health.
* <b>max_health</b> – Current maximum health.
* <b>mana</b> – Current mana.
* <b>max_mana</b> – Current maximum mana.

## `hero_status_effect_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_status_effect_changed | Check notes |Whenever any of these effects changes.	|See [notes](#hero_status_effect_changed-notes)|     77.3      |

#### *hero_status_effect_changed* note

Event Data:

* <b>silenced</b> – True if the player is silenced, false otherwise.
* <b>stunned</b> – True if the player is stunned, false otherwise.
* <b>disarmed</b> – True if the player is disarmed, false otherwise.
* <b>magicimmune</b> – True if the player is magic immune, false otherwise.
* <b>hexed</b> – True if the player is hexed, false otherwise.
* <b>muted</b> – True if the player is muted, false otherwise.
* <b>break</b> – True if the player is broken, false otherwise.
* <b>has_debuff</b> – True if the player is affected by any debuff, false otherwise.

## `hero_attributes_skilled`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_attributes_skilled |<b>attributes_level</b> – The current level of the player’s attributes.|Whenever the player skills up his attributes.|          |     77.3      |

## `hero_ability_skilled`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_skilled | Check notes |Whenever the player skills up an ability.|See [notes](#hero_ability_skilled-notes)|     77.3      |

#### *hero_ability_skilled* note

* slot – The index of the ability slot (0 – 5, left to right)
* name – The name of the ability.
* level – The current level of the ability.
* can_cast – True unless  the ability is not skilled, there’s not enough mana to cast it, the player is silenced, or is on cooldown.
* passive – True if the ability is passive.
* ability_active – Unknown, TBD.
* cooldown – Remaining cooldown until the ability is ready to cast.
* ultimate – True if the ability is an ultimate ability.

## `hero_ability_used`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_used |Same as ‘hero_ability_skilled’|Whenever the player uses an ability.|       |     77.3      |

## `hero_ability_cooldown_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_cooldown_changed |Same as ‘hero_ability_skilled’|Whenever an ability’s remaining cooldown is changed.	|       |     77.3      |

## `hero_ability_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_changed |Same as ‘hero_ability_skilled’|Whenever an ability’s name changes.|       |     77.3      |

## `hero_item_cooldown_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_item_cooldown_changed |Check notes|Whenever an item’s remaining cooldown is changed.|See [notes](#hero_item_cooldown_changed-notes)|     77.3      |

#### *hero_item_cooldown_changed* note

Event Data:

* <b>slot</b> – The index of the item slot (0 – 5, top row from the left to bottom row from the right)
* <b>location</b> – hero/stash
* <b>name</b> – The name of the item
* <b>passive</b> – True if the item is passive
* <b>can_cast</b> – True unless there’s not enough mana to use the item, the player is muted, or when the item is on cooldown. (only when passive = false)
* <b>cooldown</b> – The remaining cooldown until the item is ready to be used. (only when passive = false)
* <b>charges</b> – The remaining charges of the item (only when passive = false and where item can be charged)

## `hero_item_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_item_changed |Check notes|          |See [notes](#hero_item_changed-notes)|     77.3      |

#### *hero_item_changed* note

Event Data:

* <b>slot</b> – The index of the item slot (0 – 5, top row from the left to bottom row from the right)
* <b>location</b> – hero/stash
* <b>name</b> – The name of the item.
* <b>passive</b> – True if the item is passive.
* <b>can_cast</b> – True unless there’s not enough mana to use the item, the player is muted, or when the item is on cooldown. (only when passive = false)
* <b>cooldown</b> – Remaining cooldown until the item is ready to be used again (only when passive = false)
* <b>charges</b> – Remaining charges of the item (only when passive = false and where item can be charged)

Fired when:

Whenever the item name in some hero/stash slot changes. This would mean that swapping items will trigger 2 events, one for each item.	

## `hero_item_used`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_item_used |Same as ‘hero_item_changed’	|Whenever an item is used – Essentially this is when the item goes on cooldown. |       |     77.3      |

## `hero_item_consumed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_item_consumed |Same as ‘hero_item_changed’	|Whenever an item’s charges decreases. |       |     77.3      |

## `hero_item_charged`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
hero_item_charged |Same as ‘hero_item_changed’	|Whenever an item’s charges increases.|       |     77.3      |

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  | The current session’s ID code.|See [notes](#pseudo_match_id-note)|  130.0   |
game_mode   | match_info  | Dota2/Auto-chess. |See [notes](#game_mode-note)|  130.0   |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

##### *game_mode* note

Data Example:

`{"info":{"match_info":{"game_mode":"autochess"}},"feature":"match_info"}`

## `roster`

### Events

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
players           | roster      | 	A string holding a JSON array of player objects.|See [notes](#players-note)|  77.3 |
bans           | roster      | 	A string holding a JSON array of bans objects.|See [notes](#bans-note)| 114.1 |
draft           | roster      | A string holding a JSON array of bans objects.|See [notes](#draft-note)| 114.1 |

#### *players* note

Data Example:

```json
"[{"steamId":"90071996842377219","name":"Alfred Bot","team":2,"hero":43},
{"steamId":"90071996842377217","name":"Benjamin Bot","team":0,"hero":0},
...
{"steamId":"90071996842377216","name":"Monty Bot","team":2,"hero":47}]"
```

Player object structure:

```json
{
  "steamId": "steamId string",
  "name": "player name in game",
  "team": teamId,
  "hero": heroId
}
```

Notes:

* “teamId”
  * 2 – Radiant
  * 3 – Dire
  * 0 – Not in team
* “heroId” – [Heroes IDs](https://github.com/kronusme/dota2-api/blob/master/data/heroes.json) (0 if still not picked)

#### *bans* note

Data Example:

`"[ {"heroId": 90 , "team" : 2} , ... , {...} ]"`

Bans object structure:

```json
{
  "heroId" : heroId,
  "team" : teamId
}
```

Notes:

* “teamId”
  * 2 – Radiant
  * 3 – Dire
  * 0 – Not in team
* “heroId” – [Heroes IDs](https://github.com/kronusme/dota2-api/blob/master/data/heroes.json) (0 if still not picked)

#### *draft* note

Data Example:

```json
"[{"heroId": 56 , "team" : 3},{"heroId": 69 , "team" : 2},{"heroId": 101 , "team" : 2},{"heroId": 28 , "team" : 3}]"
```

Draft object structure:

```json
{
  "heroId" : heroId,
  "team" : teamId
}
```

Notes:

“teamId”
2 – Radiant
3 – Dire
0 – Not in team
“heroId” – [Heroes IDs](https://github.com/kronusme/dota2-api/blob/master/data/heroes.json) (0 if still not picked)

## `party`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
party   | party  |A string holding a JSON array of player objects.|See [notes](#party-note)|  130.0   |

#### *party* note

Data Example:

```json
"[{"steamId":steamId 1,"isLeader":true,"isCoach":false},
{"steamId":steamId 2,"isLeader":false,"isCoach":false},
 ... ,
{"steamId":steamId N,"isLeader":true,"isCoach":true}
]"
```

Player object structure:

```json
{
  "steamId": "steamId string",
  "isLeader": "true" | "false",
  "isCoach": "true" | "false"
}
```
* steamId – the player’s Steam ID
* isLeader – (bool) whether the player is the leader of the party
* isCoach – (bool) whether the player is the coach of the party

Important note:

* The leader can be the coach as well
* There’s exactly one leader
* There’s at most one coach (it’s optional)
* This info-update is being updated for every party change

## `error`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
plugin_error   | error  |This info update fires when the plugin is not initializing for some reason.|See [notes](#plugin_error-note)|  133.8   |

#### *plugin_error* note

Data Example:

```json
{"feature":"error","category":"error","key":"plugin_error","value":"failed_initializing_monitor"}
```
