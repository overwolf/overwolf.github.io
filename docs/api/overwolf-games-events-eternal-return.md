---
id: overwolf-games-events-eternal-return
title: Eternal Return
sidebar_label: Eternal Return
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
1234
:::

## Sample Apps
* [Eternal Return game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

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
team    | match_info          | ID of the team player in match.   |See [notes](#team-note)|   148.0       |
roster | match_info | All other player info known to the local player.  |  See [notes](#roster-note)  |   159.0 |
match | match_info | ID of the match.  |  See [notes](#match-note)  |   159.0 |
region | match_info | Starting location of all the users (if selected).  |  See [notes](#region-note)  |   159.0 |

#### *player_info* note

Data Example:

```json
{"info":{"me":{"player_info":{"user_num": 144222} }},"feature":"me"}
```

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


## `match_info`
### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matching_start | game_mode, matching_team_mode| Matching started. | See [notes](#matching_start-note) | 148.0  |
matching_standby| null         | Accept matching inquiry started   | See [notes](#matching_standby-note) | 148.0  |
matching_complete | null         | Match starts. | See [notes](#matching_complete-note) | 148.0  |

select_character| Character code  | Local player changes character in character selection. | See [notes](#select_character-note) | 148.0  |
select_weapon| Weapon code  | Local player changes weapon in character selection. | See [notes](#select_weapon-note) | 148.0  |
team_character| Ally, Character code  | Ally player changes character in character selection. | See [notes](#team_character-note) | 148.0  |
team_weapon| Weapon code  | Ally player changes weapon in character selection. | See [notes](#team_weapon-note) | 148.0  |

select_route| target_items, target_regions  | Local player selects route in character selection. | See [notes](#select_route-note) | 148.0  |
select_starting_point| Area code  | Local player selects starting point in character selection. | See [notes](#select_starting_point-note) | 148.0  |
ally_starting_point| Ally, Area code  | Ally player selects starting point in character selection. | See [notes](#ally_starting_point-note) | 148.0  |

knock_down| Victim name, Current kill count  | Local player kills, or knocks down an enemy. | See [notes](#knock_down-note) | 148.0  |
downed| Victim name, Killer name, Time left  | Ally player is downed. | See [notes](#downed-note) | 148.0  |
down_count| Victim name, Time left  | Downed ally player has taken damag. | See [notes](#down_count-note) | 148.0  |
get_up| Victim name, Healer name  | Downed ally player has recovered. | See [notes](#down_count-note) | 148.0  |

kill| Killer name, Victim name, Killer kill count  | Player kills another player. (Announcement) | See [notes](#down_count-note) | 148.0  |
hunt| Monster name, Level  | Local player hunts a monster. | See [notes](#down_count-note) | 148.0  |
death| Victim name, Killer type  | Player is dead. (Announcement) | See [notes](#down_count-note) | 148.0  |
resurrect| Player name  | Player is resurrected. (Announcement) | See [notes](#down_count-note) | 148.0  |

wickeline_prep| Boolean | 1 minute before Wickeline is about to spawn.(Announcement) | See [notes](#down_count-note) | 148.0  |
wickeline_appear| Boolean | Wickeline hass spawned.(System chat) | See [notes](#down_count-note) | 148.0  |
wickeline_move| Area code | Wickeline has moved to another point.(System chat) | See [notes](#down_count-note) | 148.0  |
wickeline_dead| Killer name | Player kills Wickeline. (System chat) | See [notes](#down_count-note) | 148.0  |
android_prep | Area code, Android name | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#down_count-note) | 148.0  |
android_appear| Android name | Android Alpha/Omega has spawned.(Announcement) | See [notes](#down_count-note) | 148.0  |
android_dead| Boolean | Android Alpha/Omega is dead.(Announcement) | See [notes](#down_count-note) | 148.0  |
meteorite_prep | Area code | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#down_count-note) | 148.0  |
meteorite_appear| Boolean | Android Alpha/Omega has spawned.(Announcement) | See [notes](#down_count-note) | 148.0  |
android_prep | Area code, Android name | 1 minute before Android Alpha/Omega is about to spawn.(Announcement) | See [notes](#down_count-note) | 148.0  |
android_appear| Boolean | Android Alpha/Omega has spawned.(Announcement) | See [notes](#down_count-note) | 148.0  |

change_to_day| Date | Atmosphere changes from night to day. | See [notes](#down_count-note) | 148.0  |
change_to_night| Date | Atmosphere changes from day to night. | See [notes](#down_count-note) | 148.0  |
new_restriction| New area codes, Old area codes | New restricted areas are set. | See [notes](#down_count-note) | 148.0  |
restriction_accel| Boolean | Game is accelerated due to low survivor count.| See [notes](#down_count-note) | 148.0  |
final_restriction| Restriction step | Restriction steps in Duo/Squad game mode. | See [notes](#down_count-note) | 148.0  |
competitive_restriction| Restriction step | Restriction steps in Solo game mode. | See [notes](#down_count-note) | 148.0  |

move_region| Area code | Local player moves to another region. | See [notes](#down_count-note) | 148.0  |

scoreboard| Boolean | Local player opens/closes scoreboard. | See [notes](#down_count-note) | 148.0  |

deal_damage| Victim, Boolean, Damage | Local player deals damage to another player. | See [notes](#down_count-note) | 148.0  |
take_damage| Bruiser, Boolean, Damage, Current Health | Local player takes damage from another player. | See [notes](#down_count-note) | 148.0  |

level_up | Current level | Atmosphere changes from night to day. | See [notes](#down_count-note) | 148.0  |


#### *match_start* note

Data Example:

```json
{"event":"match_start","data":null}
```

#### *match_end* note

Please note that `match_end` does not work on custom matches nor training.

Data Example:

```json
{"event":"match_end","data":null}
```

