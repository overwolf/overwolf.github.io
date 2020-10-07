---
id: overwolf-games-events-wow
title: World of Warcraft Game Events
sidebar_label: World of Warcraft
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
765
:::

## Sample Apps
* [World of Warcraft game events sample app](https://github.com/overwolf/events-sample-apps)

An official Blizzard API is available at the following link - https://develop.battle.net/.
If you have further requests for events that you require please contact us at developers@overwolf.com

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)

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

## `game_info`

### Info Updates

key            | Category         | Values                               | Notes                            | Since GEP Ver. |
-------------- | -----------------| ------------------------------------ | -------------------------------- | -------------  | 
group_applicants| game_info | The amount of applicants and information regarding their item score, role, class and name of their server. | See [notes](#group_applicants-note)   | 146.0.7 |

#### *group_applicants* note

Data Example:

```json
{
	"info": {
		"game_info": {
			"group_applicants": "{"Shivanpally":{"player_name" : "Shivanpally", "server_name" : "Draenor", "applicant_id" : "1", "application_status" : "1", "level" 			 : "120", "item_level" : "477", "honor_level" : "6", "role" : "8","class" : "2"},
			"Mêêrès":{"player_name" : "Mêêrès", "server_name" : "TarrenMill", "applicant_id" : "3", "application_status" : "1", "level" : "120", "item_level" 
			: "478", "honor_level" : "0", "role" : "12","class" : "11"},
			"Kayleb":{"player_name" : "Kayleb", "server_name" : "Blackhand", "applicant_id" : "2", "application_status" : "1", "level" : "120", "item_level" : "480", 			  "honor_level" : "214", "role" : "4","class" : "7"}}"
		}
	},
	"feature": "game_info"
}
```

Possible values for `application_status`:

* 0 - None
* 1 - Applied
* 2 - Invited
* 3 - Failed
* 4 - Cancelled
* 5 - Declined
* 6- DeclinedFull
* 7 - DeclinedDelist
* 8 - Timedout
* 9 - Invitedeclined
* 10 - Inviteaccepted

Possible values for `role`:

* 2- tank
* 4- healer
* 8- damage

Possible values for `class`:

* Warrior = 1
* Paladin = 2
* Hunter = 3
* Rogue = 4
* Priest = 5
* Death Knight = 6
* Shaman = 7
* Mage = 8
* Warlock = 9
* Monk = 10
* Druid = 11
* Demon Hunter = 12
