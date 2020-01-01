---
id:overwolf-games-events-dota2
title: Dota 2 Game Events
sidebar_label: Dota 2
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
* [hero_pool](#hero_pool)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `game_state_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
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

Event       | Event Data   | Fired When    | Notes                                  | Since GEP Ver. |
------------| -------------| --------------| -------------------------------------- | ---------------|
match_state | Check notes  |               | See [notes](#match_state-note) |      77.3      |

#### *match_state* note

Event Data:

match_state – One of the following:

* DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD
* DOTA_GAMERULES_STATE_HERO_SELECTION
* DOTA_GAMERULES_STATE_PRE_GAME
* DOTA_GAMERULES_STATE_GAME_IN_PROGRESS
* DOTA_GAMERULES_STATE_POST_GAME
* DOTA_GAMERULES_STATE_TEAM_SHOWCASE

Event data example:

```json
{"info":{"game":{"match_state":"DOTA_GAMERULES_STATE_TEAM_SHOWCASE"}},"feature":"match_state_changed"}
```

Fired when:

The internal game match state has changed.
* DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD – Shown during the pre-game “Waiting for loaders” screen.
* DOTA_GAMERULES_STATE_HERO_SELECTION – Shown during the hero selection screen.
* DOTA_GAMERULES_STATE_PRE_GAME – Shown when the game begins, before the battle horn is heard.
* DOTA_GAMERULES_STATE_GAME_IN_PROGRESS – Shown when the horn sounds to open the match.
* DOTA_GAMERULES_STATE_POST_GAME – Shown during the post-game screen.
* DOTA_GAMERULES_STATE_TEAM_SHOWCASE 

## `match_detected`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
daytime_changed   | Check notes |          |See [notes](#daytime_changed-note)|     77.3      |

#### *daytime_changed* note

Event Data:

* <b>daytime</b> – True if it is current day time, false otherwise.
* <b>clock_time</b> – The amount of seconds from when the game clocked shows (0:00). It can be negative during the Pre-Game phase.
* <b>nightstalker_night</b> – True if it is currently a Night Stalker ultimate night. 

Fired when:

Fired when the game transitions between day time and night time. 

Data Example:

```json
{"events":[{"name":"daytime_changed","data":"{"daytime":true,"clock_time":-89,"nightstalker_night":false}"}]}
```

## `clock_time_changed `

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
clock_time_changed    | Same as ‘map_daytime_changed’. 	 |Fired every second|   |     77.3      |

## `ward_purchase_cooldown_changed `

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
ward_purchase_cooldown_changed   | Check notes |Fired every second where wards are on cooldown. |See [notes](#ward_purchase_cooldown_changed-note)|     77.3      |

#### *ward_purchase_cooldown_changed* note

Event Data:

* <b>ward_purchase_cooldown</b> – The remaining store cooldown in seconds before a ward is available for purchase again. 

Data Example:

```json
{"events":[{"name":"ward_purchase_cooldown_changed","data":"{"ward_purchase_cooldown":128}"}]}
```

## `match_ended`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | -------------- |
match_ended | radiant/dire |When an ancient is destroyed and the game ends.  | See [notes](#match_ended-note)       |     77.3      |

#### *match_ended* note

```json
{"winner":"dire"}
```

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill    | Check notes |Whenever the player kills an enemy hero. 	|See [notes](#kill-note)|     77.3      |

#### *kill* note

Event Data:

```json
{"kills": 1,"kill_streak": 1,"label": "kill"}
```

* <b>kills</b> – The total number of kills the player has.
* <b>kill_streak</b> – The current number of hero kills without dying, denying oneself to neutral creeps does not reset this counter.
* <b>label</b> – the type of kill (kill/double_kill/triple_kill/ultra_kill/rampage)

## `assist`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
assist    |assists – The total number of assists the player has. |Whenever the player assists in a kill of an enemy champion.|See [notes](#assist-note)|     77.3      |

#### *assist* note

Data Example:

```json
{"events":[{"name":"assist","data":"{"assist":1}"}]}
```

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
death    |deaths – The total number of deaths the player has. |Whenever the player dies. |See [notes](#death-note)|     77.3      |

#### *death* note

Data Example:

```json
{"events":[{"name":"death","data":"{"deaths":1}"}]}
```

## `cs`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
cs  | Check notes |Whenever the player last hits/denies non-champion units that grant creep score. |See [notes](#cs-notes)|     77.3      |

#### *cs* note

Event Data:

* <b>last_hits</b> – The total amount of last hits (not denies) the player has.
* <b>denies</b> – The total amount of denies the player has.
* <b>type</b> – last_hits/deny.

Data Example:

```json
{"events":[{"name":"cs","data":"{"last_hits": 1,"denies":0,"type":"last_hit"}"}]}
```

## `xpm`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
xpm |xpm – The current Experience Per Minute value. |Whenever the XPM changes. |See [notes](#xpm-note)| 77.3 |

#### *xpm* note

<b>This event is currently NOT supported.</b>

## `gpm`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
gpm | gpm – The current Gold Per Minute value. |Whenever the GPM changes. |        |     77.3      |

#### *gpm* note

<b>This event is currently NOT supported.</b>

## `gold`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
gold | Check notes |Whenever gold changes. 	|See [notes](#gold-notes)|     77.3      |

#### *gold* note

<b>This event is currently NOT supported.</b>

* <b>gold</b> – Total current gold.
* <b>gold_reliable</b> – Reliable gold part.
* <b>gold_unreliable</b> – Unreliable gold part.

## `hero_leveled_up `

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_leveled_up | hero_level – The current hero level. |Whenever the player levels up. |See [notes](#hero_leveled_up-note)|     77.3      |

#### *hero_leveled_up* note

<b>Currently this event is NOT supported.</b>

## `hero_respawned`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_respawned | N/A	 |Whenever the player respawns. This is also true when buying back. |See [notes](#hero_respawned-note)|     77.3      |

#### *hero_respawned* note

<b>Currently this event is NOT supported.</b>

## `hero_buyback_info_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_buyback_info_changed | Check notes |        |See [notes](#hero_buyback_info_changed-notes)|     77.3      |

#### *hero_buyback_info_changed* note

<b>Currently this event is NOT supported.</b>

Event Data:

* <b>buyback_cost</b> – Gold cost to buyback
* <b>buyback_cooldown</b> – Cooldown remaining for buyback to become available

Fired when:

Every 4 seconds and every level-up, since buyback cost is affected by game time and player level. It will also be called every second when buyback is on cooldown.

## `hero_boughtback`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_boughtback |<b>buyback_cooldown</b> – The cooldown remaining for buyback to become available.|Whenever the player buys back.|See [notes](#hero_boughtback-note)|     77.3      |

#### *hero_boughtback* note

<b>This event is currently NOT supported.</b>

## `hero_health_mana_info`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_health_mana_info | Check notes |Whenever either of the players mana, health, max mana or max health changes.|See [notes](#hero_health_mana_info-notes)|     77.3      |

#### *hero_health_mana_info* note

<b>Currently this event is NOT supported.</b>

Event Data:

* <b>health</b> – Current health.
* <b>max_health</b> – Current maximum health.
* <b>mana</b> – Current mana.
* <b>max_mana</b> – Current maximum mana.

## `hero_status_effect_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_status_effect_changed | Check notes |Whenever any of these effects changes.	|See [notes](#hero_status_effect_changed-notes)|     77.3      |

#### *hero_status_effect_changed* note

<b>Currently this event is NOT supported.</b>

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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_attributes_skilled |<b>attributes_level</b> – The current level of the player’s attributes.|Whenever the player skills up his attributes.|          |     77.3      |

#### *hero_attributes_skilled* note

## `hero_ability_skilled`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_used |Same as ‘hero_ability_skilled’|Whenever the player uses an ability.|See [notes](#hero_ability_used-note)|     77.3      |

#### *hero_ability_used* note

Data Example:

```json
{"events":[{"name":"hero_ability_used","data":"{"slot":0,"name":"sven_storm_bolt","level":4,  "can_cast":false,"passive":false,"ability_active":true,"cooldown":7,"ultimate":false}"}]}
```

## `hero_ability_cooldown_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_cooldown_changed |Same as ‘hero_ability_skilled’|Whenever an ability’s remaining cooldown is changed.	|See [notes](#hero_ability_cooldown_changed-note)|     77.3      |

#### *hero_ability_cooldown_changed* note

<b>Currently this event is NOT supported.</b>

## `hero_ability_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_ability_changed |Same as ‘hero_ability_skilled’|Whenever an ability’s name changes.|See [notes](#hero_ability_changed-note)|     77.3      |

#### *hero_ability_changed* note

<b>Currently this event is NOT supported.</b>

## `hero_item_cooldown_changed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_item_cooldown_changed |Check notes|Whenever an item’s remaining cooldown is changed.|See [notes](#hero_item_cooldown_changed-notes)|     77.3      |

#### *hero_item_cooldown_changed* note

<b>Currently this event is NOT supported.</b>

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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_item_changed |Check notes|          |See [notes](#hero_item_changed-notes)|     77.3      |

#### *hero_item_changed* note

<b>Currently this event is NOT supported.</b>

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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_item_used |Same as ‘hero_item_changed’	|Whenever an item is used – Essentially this is when the item goes on cooldown. |See [notes](#hero_item_used-note)|     77.3      |

#### *hero_item_used* note

<b>Currently this event is NOT supported.</b>

## `hero_item_consumed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_item_consumed |Same as ‘hero_item_changed’	|Whenever an item’s charges decreases. |See [notes](#hero_item_consumed-note)|     77.3      |

#### *hero_item_consumed* note

<b>Currently this event is NOT supported.</b>

## `hero_item_charged`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
hero_item_charged |Same as ‘hero_item_changed’	|Whenever an item’s charges increases.|See [notes](#hero_item_charged-note)|     77.3      |

#### *hero_item_charged* note

<b>Currently this event is NOT supported.</b>

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  | The current match’s ID code.|See [notes](#pseudo_match_id-note)|  130.0   |
game_mode   | match_info  | Dota2/Auto-chess. |See [notes](#game_mode-note)|  130.0   |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

##### *game_mode* note

Data Example:

`{"info":{"match_info":{"game_mode":"autochess"}},"feature":"match_info"}`

## `roster`

### Events

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
players           | roster      | 	A string holding a JSON array of player objects.|See [notes](#players-note)|  77.3 |
bans           | roster      | 	A string holding a JSON array of bans objects.|See [notes](#bans-note)| 114.1 |
draft           | roster      | A string holding a JSON array of draft objects.|See [notes](#draft-note)| 114.1 |

#### *players* note

Data Example:

```json
{"steamId":"76561198095792069","name":"mladen90","pickConfirmed":false,"hero":"","team":2,"role":1,"player_index":4}
```

Player object structure:

* "steamId" - steamId string
* "name" - player name in game
* “teamId”
  * 2 – Radiant
  * 3 – Dire
  * 0 – Not in team
* “heroId” – <a href="https://github.com/kronusme/dota2-api/blob/master/data/heroes.json" target="_blank">Heroes IDs</a> (0 if still not picked)
* "role" - role type.
   (1 - Safelane, 2 - Offlane, 4 - Midlane, 8 - Other, 16 - HardSupport, 888\any other number - Can be received during bot matchups and should be ignored)
* "index" - player slot (int 0-9)

#### *bans* note

Data Example:

```json
[{"heroId": "75" , "team" : "0"},{"heroId": "14" , "team" : "0"}]
```

Bans object structure:

* “heroId” – <a href="https://github.com/kronusme/dota2-api/blob/master/data/heroes.json" target="_blank">Heroes IDs</a> (0 if still not picked)
* “teamId”
  * 2 – Radiant
  * 3 – Dire
  * 0 – Not in team

#### *draft* note

Data Example:

```json
"[{"heroId": 56 , "team" : 3},{"heroId": 69 , "team" : 2},{"heroId": 101 , "team" : 2},{"heroId": 28 , "team" : 3}]"
```

Draft object structure:

* “heroId” – <a href="https://github.com/kronusme/dota2-api/blob/master/data/heroes.json" target="_blank">Heroes IDs</a> (0 if still not picked)
* “teamId”
  * 2 – Radiant
  * 3 – Dire
  * 0 – Not in team

## `party`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
party   | party  |A string holding a JSON array of player objects.|See [notes](#party-note)|  130.0   |

#### *party* note

Data Example:

```json
[{"steamId":"76561198059980868","isLeader":false,"isCoach":false}]
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

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
plugin_error   | error  |This info update fires when the plugin is not initializing for some reason.|See [notes](#plugin_error-note)|  133.8   |

#### *plugin_error* note

Data Example:

```json
{"feature":"error","category":"error","key":"plugin_error","value":"failed_initializing_monitor"}
```

## `hero_pool`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
hero_pool | game_info  |The numberical ID's of heroes that are available for picking. |See [notes](#hero_pool-note)|  139.0   |

#### *hero_pool* note

This data is available only in "Single Draft" & "Random Draft" modes in Dota.

You can find the Hero ID's in the following <a href="https://github.com/kronusme/dota2-api/blob/master/data/heroes.json" target="_blank">link</a>

Data Example:

```json
{"category":"game_info","key":"hero_pool","value":"[2,4,5,7,8,16,18,20,21,22,23,27,31,32,34,35,37,38,44,47,48,49,52,53,59,64,65,67,70,71,72,74,75,81,84,85,91,92,95,98,99,100,104,105,106,109,110,113,120,121]}
```
