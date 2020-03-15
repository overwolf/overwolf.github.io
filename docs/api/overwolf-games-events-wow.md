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

* [game_info](#game_info)

## `game_info`

### Info Updates

key            | Category         | Values                               | Notes                            | Since GEP Ver. |
-------------- | -----------------| ------------------------------------ | -------------------------------- | -------------  | 
group_applicants| game_info | The amount of applicants and information regarding their item score and role. | See [notes](#group_applicants-note)   | 146.0.7 |

#### *group_applicants* note

Data Example:

```json
{
	"info": {
		"game_info": {
			"group_applicants": "{"Nocdem":{"player_name":"Nocdem","applicant_id":4,"application_status":1,"level":120,"item_level":468,"honor_level":1,"role":8}
      ,"Zvirblis":{"player_name":"Zvirblis","applicant_id":3,"application_status":1,"level":120,"item_level":468,"honor_level":22,"role":8}
      ,"Valliadri":{"player_name":"Valliadri","applicant_id":2,"application_status":1,"level":120,"item_level":472,"honor_level":27,"role":2}
      ,"Naity":{"player_name":"Naity","applicant_id":2,"application_status":1,"level":120,"item_level":469,"honor_level":13,"role":8}}"
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
