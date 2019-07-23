---
id:overwolf-games-events-csgo
title: CS:GO Game Events
sidebar_label: CS:GO Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
7764
:::

## Sample Apps

* [CS:GO game events sample app](https://github.com/overwolf/events-consumer)

## Available Features

* [match_info](#match_info)
* [kill](#kill)
* [death](#death)
* [assist](#assist)
* [headshot](#headshot)
* [round_start](#round_start)
* [match_start](#match_start)
* [match_info](#match_info)
* [match_end](#match_end)
* [team_round_win](#team_round_win)
* [bomb_planted](#bomb_planted)
* [bomb_change](#bomb_change)
* [reloading](#reloading)
* [fired](#fired)
* [weapon_change](#weapon_change)
* [weapon_acquired](#weapon_acquired)
* [info](#info)
* [roster](#roster)
* [player_activity_change](#player_activity_change)
* [team_set](#team_set)

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
kill        | totalKills – total kills for player in match |Player has killed an enemy| |  0.7  |

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
death        | totalDeaths – total deaths of player in match |Player has died| |  0.7  |

## `assist`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
assist        | 	totalAssists – total assists for user it match |Player has assisted in killing an enemy| |  0.7  |

## `headshot`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
headshot    | headshotsInRound – total headshots for user in <b>current round</b> |Player has gained a killed with a headshot| Fired alongside kill event	 |  0.7  |

## `round_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
round_start | <ul><li>num_of_rounds – total number of rounds in current match</li><li>player_team – CT/T</li> | A new round has began | |      0.7      |

## `match_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_start |     None     |A new match has started|            |       0.7     |

## `match_end`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
match_end   |     None     |Match was ended|                    |       0.7     |

## `team_round_win`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
team_round_win|     None     |<ul><li>winningTeam – the team that won the round (CT/T)</li><li>bomb – bomb status (exploded/defused/planted)|   |       0.7     |
  
## `bomb_planted`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
bomb_planted|     None     |A bomb has been planted (by any player)|            |       0.7     |

## `bomb_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
bomb_change |Bomb state (planted / exploded / defused)|Bomb state was changed|  |       0.7     |

## `reloading`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
reloading |<ul><li>weapon_name</li><li>weapon_current_ammo</li><li>weapon_max_ammo</li><li>weapon_type| Player reloads his weapon | | 0.7
  
## `fired`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
fired       |<ul><li>weapon_name</li><li>weapon_current_ammo</li><li>weapon_max_ammo</li><li>weapon_type|  | “fired” is not available on “Arms Race” and “Demolition” modes |  0.7  |
  
## `weapon_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
weapon_change| <ul><li>weapon_name</li><li>weapon_type |Player switches weapons| See [notes](#weapon_change-note) |  0.7  |

#### *weapon_change* note

* <b>weapon_type:</b>
`“Knife”, “Pistol”, “Shotgun”, “Machine Gun”, “Submachine Gun”, “Rifle”, “SniperRifle”, “Grenade”, “C4”`
* <b>weapon_name:</b>
`“weapon_knife”, “weapon_knife_t”, “weapon_hkp2000”, “weapon_usp_silencer”, “weapon_glock”, “weapon_elite”,  “weapon_p250”, “weapon_fiveseven”, “weapon_cz75a”,“weapon_tec9”, “weapon_deagle”, “weapon_revolver”, “weapon_nova”, “weapon_xm1014”, “weapon_mag7”,“weapon_sawedoff”, “weapon_m249”, “weapon_negev”,  “weapon_mp9”, “weapon_mac10”, “weapon_mp7”,  “weapon_ump45”, “weapon_p90”, “weapon_bizon”,“weapon_famas”, “weapon_galilar”, “weapon_m4a1”,  “weapon_m4a1_silencer”, “weapon_ak47”,“weapon_ssg08”, “weapon_aug”, “weapon_sg556”, “weapon_awp”, “weapon_scar20”, “weapon_g3sg1”,“weapon_incgrenade”, “weapon_decoy”, “weapon_flashbang”, “weapon_hegrenade”, “weapon_smokegrenade”, “weapon_c4”`

## `weapon_acquired`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
weapon_acquired| <ul><li>weapon_name</li><li>weapon_type |Player acquires new weapon (either buy or picks up)|  |  0.7  |

## `player_activity_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
player_activity_change | <ul><li>playing</li><li>menu |<ul><li>The player started playing</li><li>The player entered the game’s menu | |  0.7  |

## `team_set`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
team_set    |<ul><li>CT</li><li>T|The player selected a team|   |       0.7     |

<b>Info Updates</b></br>
In order to get CS:GO info-updates, your app should request the `info` feature and listen to `overwolf.games.events.onInfoUpdates2` info updates. However, you might add the listener after the update has already happened so the app will miss the info-update event. For that reason, you should also call `overwolf.games.events.getInfo()` to get the current info state.

Let’s see an example of how to obtain the map name in CS:GO:

First we will set the required features and set up the listener:

```json
overwolf.games.events.setRequiredFeatures(['info', 'death', 'kill', 'headshot'], function(info) {
	if (info.status == "success") {
		setListener();
		getInfo();
	} else {
		// we should retry to set the required features in case 
		// the game events provider is still initializing
	}
});`

`function setListener() {
	overwolf.games.events.onInfoUpdates2.addListener(function(info) {
		console.log(info);   
	});
}`

`function getInfo() {
	overwolf.games.events.getInfo(function(info) { 
		console.log(info); 
	});
}
```

When the map info will be updated the `onInfoUpdate2` listener will print to the console:

`{"info":{"round":{"map":"de_dust2"}},"feature":"info"}`

After calling `getInfo()` the console will print (if the map info has already been updated):

`{"status":"status","res":{"player":{"totalKills":"0","totalDeaths":"0","totalMvps":"0","score":"0","team":"T","steamid":""},"round":{"map":"de_dust2","phase":"live","numOfRound":"0"}}}`

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id | match_info  |	The current session’s ID code. See [notes](#pseudo_match_id-note)	| |  130.0  |

#### *pseudo_match_id* note

This is an Overwolf-generated code, unrelated to Steam.	

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

## `info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
totalKills | player  |	Total kills in a match	            |                       |     7.0       |
totalDeaths | player  |	Total deaths in a match		    |                       |     7.0       |
totalMvps | player  |	Total MVP’s	 	            |                       |     7.0       |
score | player  |	Score in a match	            |                       |     7.0       |
team | player  |	T / CT	                            |                       |     7.0       |
steamid | player  |	The player’s steam id	            |                       |     7.0       |
map | round            |	Map name	            |                       |     7.0       |
mode | round  |	Map mode (for example: “casual”)            |                       |     7.0       |
numOfRound | round  |	Round number in the match (starting 0)|                     |     7.0       |
phase | round  |Match phase<ul><li>warmup</li><li>live</li><li>freezetime</li><li>over|    |     7.0       |
scene | scene  |<ul><li>MainMenu</li><li>LoadingScreen</li><li>Game</li><li>MenuInGame(ESC)|  |     7.0       |

## `roster`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
lobby | roster  |JSON containing array of lobby_players objects. See [notes](#lobby-note)|  |     77.8       |
match | roster  |JSON containing array of player objects. See [notes](#match-note)|  |     77.8       |

#### *lobby* note

Each player contains:<ul><li>steamId

Data Example:

`{"feature":"roster","category":"roster","key":"lobby","value":"{\"lobby_players\" : [{\"steamId\" : \"76561198269560618\"}]}"}`

#### *match* note

Each player contains:<ul><li>steamId</li><li>team

Data Example:

`{"feature":"roster","category":"roster","key":"match","value":"{\"players\" : [{\"steamId\" : \"76561198364007097\",\"team\" : \"Counter-Terrorists\"},...,{\"steamId\" : \"76561198389957131\",\"team\" : \"Counter-Terrorists\"}]}"}`
