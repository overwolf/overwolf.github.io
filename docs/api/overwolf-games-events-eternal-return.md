---
id: overwolf-games-events-eternal-return
title: Eternal Return
sidebar_label: Eternal Return
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21672
:::

## Sample Apps
* [Eternal Return game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features
This is a on-going development.
All events and info updates can be target to changes.

* [gep_internal](#gep_internal)
* [me](#me)
* [match_info](#match_info)

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

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
player_info  | me          | ID of the local player.     |See [notes](#player_info-note)|   148.0       |

#### *player_info* note

Data Example:

```json
{"info":{"me":{"player_info":{"user_num": 144222} }},"feature":"me"}
```

## `match_info`

### Info Updates
key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
team    | match_info          | ID of the team player in match.   |See [notes](#team-note)|   148.0       |
roster | match_info | All other player info known to the local player.  |  See [notes](#roster-note)  |   159.0 |
match | match_info | ID of the match.  |  See [notes](#match-note)  |   159.0 |
region | match_info | Starting location of all the users (if selected).  |  See [notes](#region-note)  |   159.0 |


#### *team* note

Data Example:

```json
{"info":{"match_info":{"team":{"ally1" : 1003024, "ally2" : 144240}}},"feature":"me"}
```

This distinction of ally1 and ally2 will be used as a reference point in later events.<br>
team's info update does not work for premade teams.<br>
User number will retrun 0 as value if there are none.<br>
eg) In solo mode, both ally1 and ally2 will return 0. 


#### *roster* note
Data Example:

```json
{"info":{"match_info" : {"roster" : [{"player_name" : "TestSubject1", "is_ally" : false, "player_character" : 12, "player_skin" : 1}]}},"feature":"me"}
```

is_ally will specify whether the subject is an ally or not.<br>
This info will contain the local player itself.


#### *match* note
Data Example:

```json
{"info":{"match_info" : {"match_id" : 1223222,"feature":"me"}
```


#### *region* note
Data Example:

```json
{"info":{"match_info" : {"enemy" : [1, 2, 5, 2, 0 ,0 ...],"Self" : 12, "Ally1" : 12, " Ally2" : 12 } ,"feature":"me"}
```

The enemy array will be an array containing 16 integers. Each index number + 1 will represent the area code of [area_code](#area_code-note).<br>
eg) index 0 of array represents the number of players selecting area code 1 as their starting point.


## `match_info`
### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matching_start | game_mode, matching_team_mode| Matching started. | See [notes](#matching_start-note) | 148.0  |
matching_standby| null         | Accept matching inquiry started   | See [notes](#matching_standby-note) | 148.0  |
matching_complete | null         | Match starts. | See [notes](#matching_complete-note) | 148.0  |


#### *matching_start* note

Data Example:

```json
{"event":"matching_start","data":{"game_mode" : "", "matching_team_mode" : ""}}
```

Possible game modes :
* Normal
* Rank

Possible matching team modes :
* Solo
* Duo
* Squad


#### *matching_standby* note

Data Example:

```json
{"event":"matching_standby","data":""}
```

This is triggered when the local player is inquired whether to accept or decline the current matching.<br>
It does not return the action of the local player.


#### *matching_complete* note

Data Example:

```json
{"event":"matching_complete","data":""}
```


## `character_selection`
### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
select_character| Character code  | Local player selects character in character selection. | See [notes](#select_character-note) | 148.0  |
select_weapon| Weapon code  | Local player selects weapon in character selection. | See [notes](#select_weapon-note) | 148.0  |
team_character| Ally, Character code  | Ally player selects character in character selection. | See [notes](#team_character-note) | 148.0  |
team_weapon| Weapon code  | Ally player selects weapon in character selection. | See [notes](#team_weapon-note) | 148.0  |
select_route| Target items, Target regions  | Local player selects plan in character selection. | See [notes](#select_route-note) | 148.0  |
select_starting_point| Area code  | Local player selects starting point in character selection. | See [notes](#select_starting_point-note) | 148.0  |
ally_starting_point| Area code, Area code  | Ally player selects starting point in character selection. | See [notes](#ally_starting_point-note) | 148.0  |

#### *select_character* note

Data Example:

```json
{"event":"select_character","data":1}
```

See [character_code](#character_code-note) for more info on character number.


#### *select_weapon* note

Data Example:

```json
{"event":"select_character","data":1}
```

See [weapon_code](#weapon_code-note) for more info on weapon number.


#### *team_character* note

Data Example:

```json
{"event":"team_character","data":{"who" : "ally1", "character_num" : 12}}
```

The data "who" refers to the distinction in [teams](#team-note).<br>
See [character_code](#character_code-note) for more info on character number.


#### *team_weapon* note

Data Example:

```json
{"event":"team_weapon","data":{"who" : "ally1", "weapon_num" : 12}}
```

The data "who" refers to the distinction in [teams](#team-note).<br>
See [weapon_code](#weapon_code-note) for more info on weapon number.


#### *select_route* note

Data Example:

```json
{"event":"select_route","data":{"items" : [122232, 144244, ...], "regions" : [11, 3, 8 , 5]}}
```

The 'items' array consists of 6 items, each representing the item code. See [item_code](#item_code-note) for more info.<br>
The 'regions' array is the area code in order of index. See [area_code](#area_code-note) for more info.<br>
eg) Local player's saved plan visits area 11, 3, 8, and 5 in written order.


#### *select_starting_point* note

Data Example:

```json
{"event":"select_starting_point","data":1}
```

Area code for the local player's starting point.<br>
See [area_code](#area_code-note) for more info.


#### *ally_starting_point* note

Data Example:

```json
{"event":"ally_starting_point","data":{"ally1" : 5, "ally2" : 5}}
```

Both ally's starting point area code is given.<br>
See [area_code](#area_code-note) for more info.


## `kills`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
knock_down| Victim name, Current kill count  | Local player kills, or knocks down an enemy. | See [notes](#knock_down-note) | 148.0  |
downed| Victim name, Time left  | Ally player is downed. | See [notes](#downed-note) | 148.0  |
down_count| Victim name, Time left  | Downed ally player has taken damag. | See [notes](#down_count-note) | 148.0  |
get_up| Victim name, Healer name  | Downed ally player has recovered. | See [notes](#get_up-note) | 148.0  |
hunt| Monster name, Level  | Local player hunts a monster. | See [notes](#hunt-note) | 148.0  |


#### *knock_down* note

Data Example:

```json
{"event":"knock_down","data":{"victim" : "TestSubject5", "total_kills" : 5}}
```

Knock-downs will also return kills in Solo game mode.<br>
The victim returns the name of the player.<br>
The name of the player can be an anonymous nickname such as "Test Subject 1"


#### *downed* note

Data Example:

```json
{"event":"downed","data":{"victim" : "AllyPlayer", "time_left" : 15.0f}}
```


#### *down_count* note

Data Example:

```json
{"event":"down_count","data":{"victim" : "MeOrAllyPlayer125", "time_left" : 10.5f}}
```

This triggers when a downed ally has taken damage and the time left is updated consequently.


#### *get_up* note

Data Example:

```json
{"event":"get_up","data":{"victim" : "MeOrAllyPlayer125", "healer" : "MeOrAlly112"}}
```


#### *hunt* note

Data Example:

```json
{"event":"hunt","data":{"monster" : "Chicken", "level" : 12}}
```

See [monster](#monster-note) for more info.


## `announces`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill| Killer name, Victim name, Killer kill count  | Player kills another player. (Announcement) | See [notes](#kill-note) | 148.0  |
death| Victim name, Killer type  | Player is dead. (Announcement) | See [notes](#death-note) | 148.0  |
resurrect| Player name  | Player is resurrected. (Announcement) | See [notes](#resurrect-note) | 148.0  |


#### *kill* note

Data Example:

```json
{"event":"kill","data":{"killer" : "Test Subject 15", "victim" : "Someone", "total_kills" : 5}}
```

Kill will return kill logs of all players. (Including the local player.)
This will be triggered via announcements.


#### *death* note

Data Example:

```json
{"event":"death","data":{"victim" : "Test Subject 15", "killer_type" : "WildLife"}}
```

Possible killer type
* WildLife
* Restriction
* Meteor



#### *resurrect* note

Data Example:

```json
{"event":"resurrect","data":"Test Subject 15"}
```


## `game_objects`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
wickeline_prep| Boolean | 1 minute before Wickeline is about to spawn.(Announcement) | See [notes](#wickeline_prep-note) | 148.0  |
wickeline_appear| Boolean | Wickeline hass spawned.(System chat) | See [notes](#wickeline_appear-note) | 148.0  |
wickeline_move| Area code | Wickeline has moved to another point.(System chat) | See [notes](#wickeline_move-note) | 148.0  |
wickeline_dead| Killer name | Player kills Wickeline. (System chat) | See [notes](#wickeline_dead-note) | 148.0  |
android_prep | Area code, Android name | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#android_prep-note) | 148.0  |
android_appear| Android name | Android Alpha/Omega has spawned.(Announcement) | See [notes](#android_appear-note) | 148.0  |
android_dead| Boolean | Android Alpha/Omega is dead.(Announcement) | See [notes](#android_dead-note) | 148.0  |
meteorite_prep | Area code | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#meteorite_prep-note) | 148.0  |
meteorite_appear| Boolean | Android Alpha/Omega has spawned.(Announcement) | See [notes](#meteorite_appear-note) | 148.0  |
tree_of_life_prep | Area code | 1 minute before tree of life is about to spawn.(Announcement) | See [notes](#tree_of_life_prep-note) | 148.0  |
tree_of_life_appear| Boolean | Tree of life has spawned.(Announcement) | See [notes](#tree_of_life_appear-note) | 148.0  |
android_prep | Area code, Android name | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#android_prep-note) | 148.0  |
android_appear| Boolean | Android Alpha/Omega has spawned.(Announcement) | See [notes](#android_appear-note) | 148.0  |


#### *wickeline_prep* note

Data Example:

```json
{"event":"wickeline_prep","data":true}
```


#### *wickeline_appear* note

Data Example:

```json
{"event":"wickeline_appear","data":true}
```


#### *wickeline_move* note

Data Example:

```json
{"event":"wickeline_move","data":14}
```

Area code of wickeline's new location. 
See [area_code](#area_code-note) for more info.


#### *wickeline_dead* note

Data Example:

```json
{"event":"wickeline_dead","data": "Test Subject 15"}
```

Player name of Wickeline's killer.


#### *android_prep* note

Data Example:

```json
{"event":"android_prep","data": {"region" : 15, "android" : "alpha"}}
```

Area code of androids's spawn location. <br>
See [area_code](#area_code-note) for more info. <br>

Possible android value :
* alpha
* omega


#### *android_appear* note

Data Example:

```json
{"event":"android_prep","data": "alpha"}
```

Note that android_appear will not specify the spawn area code. <br>
Possible android value :
* alpha
* omega



#### *android_dead* note

Data Example:

```json
{"event":"android_prep","data": "alpha"}
```

Possible android value :
* alpha
* omega


## `day_change`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
change_to_day| Date | Atmosphere changes from night to day. | See [notes](#change_to_day-note) | 148.0  |
change_to_night| Date | Atmosphere changes from day to night. | See [notes](#change_to_night-note) | 148.0  |
new_restriction| New area codes, Old area codes | New restricted areas are set. | See [notes](#new_restriction-note) | 148.0  |
restriction_accel| Boolean | Restriction accel announcement is made.| See [notes](#restriction_accel-note) | 148.0  |
final_restriction| Restriction step | Restriction steps announcement is made in Duo/Squaed matching team mode. | See [notes](#final_restriction-note) | 148.0  |
competitive_restriction| Restriction step | Restriction steps announcement is made in Solo matching team mode. | See [notes](#competitive_restriction-note) | 148.0  |


#### *change_to_day* note

Data Example:

```json
{"event":"change_to_day","data": 3}
```

Returns the current day count.


#### *change_to_night* note

Data Example:

```json
{"event":"change_to_night","data": 3}
```


#### *new_restriction* note

Data Example:

```json
{"event":"new_restriciont","data": {"added" : [1, 4, 3], "current" : [11, 13, 14]}}
```

Returns the newly broadcasted restriction areas.<br>
The 'current' array will represent currently restricted area codes. <br>
The 'added' array will represent newly reserved restricted area codes.
See [area_code](#area_code-note) for more info.


#### *restriction_accel* note

Data Example:

```json
{"event":"restriction_accel","data": true}
```

The restriction_accel will be called when it's true.


#### *final_restriction* note

Data Example:

```json
{"event":"final_restriction","data": 1}
```

This event is only called in Duo/Squad matching team mode.
This event cannot be used to find out the final safe area. Final safe area must be acquired by the "new_restriction" event.
The final_restriction will be called each step of the announcement.
Possible steps
* 1 : Final safe area is broadcasted.
* 2 : Final safe area is active.
* 3 : No more safe area.


#### *competitive_restriction* note

Data Example:

```json
{"event":"competitive_restriction","data": 1}
```

This event is only called in Solo matching team mode.
This event cannot be used to find out the final safe area. Final safe area must be acquired by the "new_restriction" event.
The competitive_restriction will be called each step of the announcement.
Possible steps
* 1 : Temporary safe area is set.
* 2 : Temporary safe area is active.
* 3 : Final safe area is set
* 4 : Final safe area is active.
* 5 : No more safe area.


## `move_regions`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
move_region| Area code | Local player moves to another region. | See [notes](#move_region-note) | 148.0  |


#### *move_region* note

Data Example:

```json
{"event":"move_region","data": 1}
```

See [area_code](#area_code-note) for more info.


## `scoreboards`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
scoreboard| Boolean | Local player opens/closes scoreboard. | See [notes](#scoreboard-note) | 148.0  |

#### *scoreboard* note

Data Example:

```json
{"event":"scoreboard","data": "open"}
```

Possible data :
* open
* close


## `damages`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
deal_damage| Victim, Boolean, Damage | Local player deals damage to another player. | See [notes](#deal_damage-note) | 148.0  |
take_damage| Bruiser, Boolean, Damage, Current Health | Local player takes damage from another player. | See [notes](#take_damage-note) | 148.0  |


#### *deal_damage* note

Data Example:

```json
{"event":"deal_damage","data": {"victim" : "Test Subject 15", "is_skill" : true, "damage" : 145.4f}}
```

Eternal Return has many different damage types. However, "is_skill" distinguishes the damage type into two categories.
* true : damage is given via character skill, item skill, or weapon skill.
* false : damage is given via character's normal(auto) attack.


#### *take_damage* note

Data Example:

```json
{"event":"take_damage","data": {"bruiser" : "Test Subject 15", "is_skill" : true, "damage" : 145.4f, "current_health" : 1525}}
```

Eternal Return has many different damage types. However, "is_skill" distinguishes the damage type into two categories.
* true : damage is given via character skill, item skill, or weapon skill.
* false : damage is given via character's normal(auto) attack.


## `level_ups`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
level_up | Current character level | Local character levels up. | See [notes](#level_up-note) | 148.0  |
mastery_level_up | Mastery ID, Current mastery level | Local character's mastery levels up. | See [notes](#mastery_level_up-note) | 148.0  |
skill_level_up | Current level | Local character levels up a skill. | See [notes](#skill_level_up-note) | 148.0  |
skill_evolve | Current level | Local character evolves a skill. | See [notes](#skill_evolve-note) | 148.0  |


#### *level_up* note

Data Example:

```json
{"event":"level_up","data": 15}
```


#### *mastery_level_up* note

Data Example:

```json
{"event":"mastery_level_up","data": {"mastery_type" : 15, "level" : 15}}
```

See [mastery_code](#mastery_code-note) for more info.


#### *skill_level_up* note

Data Example:

```json
{"event":"skill_level_up","data": {"skill_group" : 112400, "level" : 5}}
```

See [skill_group](#skill_group-note) for more info.


#### *skill_evolve* note

Data Example:

```json
{"event":"skill_evolve","data": {"skill_group" : 112400, "evolve" : 2}}
```

See [skill_group](#skill_group-note) for more info.


## `routes`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
add_to_route | Item code | Local player adds an item to plan. | See [notes](#add_to_route-note) | 148.0  |
delete_route | Item code | Local player removes an item from plan. | See [notes](#delete_route-note) | 148.0  |
change_route | Target items, Target regions | Local player changes to another saved plan. | See [notes](#change_route-note) | 148.0  |


#### *add_to_route* note

Data Example:

```json
{"event":"add_to_route","data": 125524}
```

See [item_code](#item_code-note) for more info.


#### *delete_route* note

Data Example:

```json
{"event":"delete_route","data": 125524}
```

See [item_code](#item_code-note) for more info.


#### *change_route* note

Data Example:

```json
{"event":"change_route","data": {"target_items" : [112400, 112402], "target_areas" : [1, 4, 2]}}
```

See [notes](#select_route-note) for more info.


## `equipments`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
equip_item | Item code | Local player adds an item to plan. | See [notes](#equip_item-note) | 148.0  |
unequip_item | Item code | Local player removes an item from plan. | See [notes](#unequip_item-note) | 148.0  |


#### *equip_item* note

Data Example:

```json
{"event":"equip_item","data": 122424}
```

See [item_code](#item_code-note) for more info.


#### *unequip_item* note

Data Example:

```json
{"event":"unequip_item","data": 122424}
```

See [item_code](#item_code-note) for more info.


## `restriction_timers`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
restriction_timer | Time left | Restriction timer reduces, increases | See [notes](#restriction_timer-note) | 148.0  |


#### *restriction_timer* note

Data Example:

```json
{"event":"restriction_timer","data": 15.4f}
```


## `match_ends`
### Events
Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_end | None | Match ends. | See [notes](#match_end-note) | 148.0  |


#### *match_end* note

Data Example:

```json
{"event":"match_end","data":null}
```


#### *character_code* note

Localized text can also be searched using the key "Character/Name/{character_code}" in the ER L10N file. (Available via ER Open API.)


#### *area_code* note
Area codes are represented as following. (Note that changes can occur, and this should be double checked via ER Open API.)<br>
Localized text can also be searched using the key "Area/Name/{area_code}" in the ER L10N file. (Available via ER Open API.)
* 1 : Docks
* 2 : Pond
* 3 : Beach
* 4 : Uptown
* 5 : Alley
* 6 : Hotel
* 7 : Avenue
* 8 : Hospital
* 9 : Temple
* 10 : Archery Range
* 11 : Cemetery
* 12 : Forest
* 13 : Factory
* 14 : Chapel
* 15 : School
* 16 : Research Center


#### *mastery_code* note

Mastery codes are represented as following.<br>
Localized text can also be searched using the key "MasteryType/Name/{mastery_type}" in the ER L10N file. (Available via ER Open API.)
* 0 : None
* 1 : Glove
* 2 : Tonfa
* 3 : Bat
* 4 : Whip
* 5 : HighAngleFire
* 6 : DirectFire
* 7 : Bow
* 8 : CrossBow
* 9 : Pistol
* 10 : AssaultRifle
* 11 : SniperRifle
* 13 : Hammer
* 14 : Axe
* 15 : OneHandSword
* 16 : TwoHandSword
* 17 : Polearm
* 18 : DualSword
* 19 : Spear
* 20 : Nunchaku
* 21 : Rapier
* 22 : Guitar
* 23 : Camera
* 101 : Trap
* 102 : Craft
* 103 : Search
* 104 : Move
* 201 : Health
* 202 : Defense
* 203 : Meditation
* 204 : Hunt


#### *weapon_code* note

Weapon codes are represented as following. (Mastery types share some common values.)<br>
Localized text can also be searched using the key "WeaponType/Name/{weapon_type}" in the ER L10N file. (Available via ER Open API.)
* 0 : None
* 1 : Glove
* 2 : Tonfa
* 3 : Bat
* 4 : Whip
* 5 : HighAngleFire
* 6 : DirectFire
* 7 : Bow
* 8 : CrossBow
* 9 : Pistol
* 10 : AssaultRifle
* 11 : SniperRifle
* 13 : Hammer
* 14 : Axe
* 15 : OneHandSword
* 16 : TwoHandSword
* 17 : Polearm
* 18 : DualSword
* 19 : Spear
* 20 : Nunchaku
* 21 : Rapier
* 22 : Guitar
* 23 : Camera


#### *skill_group* note

Skillgroup codes are distinct group codes.<br>
Localized text can also be searched using the key "Skill/Group/Name/{skill_group}" in the ER L10N file. (Available via ER Open API.)


#### *item_code* note

Localized text can also be searched using the key "Item/Name/{item_code}" in the ER L10N file. (Available via ER Open API.)
