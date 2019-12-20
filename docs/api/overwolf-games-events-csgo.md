---
id:overwolf-games-events-csgo
title: CS:GO Game Events
sidebar_label: CS:GO
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
7764
:::

## Sample Apps

* [CS:GO game events sample app](https://github.com/overwolf/events-sample-apps)

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
* [replay](#replay)
* [counters](#counters)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill        | totalKills – total kills for player in match |Player has killed an enemy| | 70.0  |

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
death        | totalDeaths – total deaths of the player in a match |Player has died| | 70.0  |

## `assist`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
assist        | 	totalAssists – total assists for user it match |Player has assisted in killing an enemy| | 70.0  |

## `headshot`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
headshot    | headshotsInRound – total headshots for user in the <b>current round</b> |Player has gained a killed with a headshot| Fired alongside kill event	 | 70.0  |

## `round_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
round_start | <ul><li>num_of_rounds – total number of rounds in current match</li><li>player_team – CT/T</li> | A new round has began | |     70.0      |

## `match_start`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start |     None     |A new match has started|            |      70.0     |

## `match_end`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_end   |     None     |Match has ended|                    |      70.0     |

## `team_round_win`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
team_round_win|     None     |<ul><li>winningTeam – the team that won the round (CT/T)</li><li>bomb – bomb status (exploded/defused/planted)|   |      70.0     |
  
## `bomb_planted`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
bomb_planted|     None     |A bomb has been planted (by any player)|            |      70.0     |

## `bomb_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
bomb_change |Bomb state (planted / exploded / defused)|Bomb state was changed|  |      70.0     |

## `reloading`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
reloading |<ul><li>weapon_name</li><li>weapon_current_ammo</li><li>weapon_max_ammo</li><li>weapon_type| Player reloads his weapon | |70.0
  
## `fired`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
fired       |<ul><li>weapon_name</li><li>weapon_current_ammo</li><li>weapon_max_ammo</li><li>weapon_type|  | "fired" is not available on "Arms Race" and "Demolition" modes | 70.0  |
  
## `weapon_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
weapon_change| <ul><li>weapon_name</li><li>weapon_type |Player switches weapons| See [notes](#weapon_change-note) | 70.0  |

#### *weapon_change* note

* **weapon_type:**

```json
"Knife", "Pistol", "Shotgun", "Machine Gun", "Submachine Gun", "Rifle", "SniperRifle", "Grenade", "C4"
```

* **weapon_name:**

```json
"weapon_knife", "weapon_knife_t", "weapon_hkp2000", "weapon_usp_silencer", "weapon_glock", "weapon_elite",  "weapon_p250", "weapon_fiveseven", "weapon_cz75a","weapon_tec9", "weapon_deagle", "weapon_revolver", "weapon_nova", "weapon_xm1014", "weapon_mag7","weapon_sawedoff", "weapon_m249", "weapon_negev",  "weapon_mp9", "weapon_mac10", "weapon_mp7",  "weapon_ump45", "weapon_p90", "weapon_bizon","weapon_famas", "weapon_galilar", "weapon_m4a1",  "weapon_m4a1_silencer", "weapon_ak47","weapon_ssg08", "weapon_aug", "weapon_sg556", "weapon_awp", "weapon_scar20", "weapon_g3sg1","weapon_incgrenade", "weapon_decoy", "weapon_flashbang", "weapon_hegrenade", "weapon_smokegrenade", "weapon_c4"
```

## `weapon_acquired`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
weapon_acquired| <ul><li>weapon_name</li><li>weapon_type |Player acquired a new weapon (either purchased or picked up)|  | 70.0  |

## `player_activity_change`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
player_activity_change | <ul><li>playing</li><li>menu |<ul><li>The player started playing</li><li>The player entered the game’s menu | | 70.0  |

## `team_set`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
team_set    |<ul><li>CT</li><li>T|The player selected a team|   |      70.0     |


## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id | match_info  |	The current match’s ID code. See [notes](#pseudo_match_id-note)	| | 130.0  |
server_info | match_info  |	The current session’s server ID. See [notes](#server_info-note)	| | 135.0  |
game_mode | match_info  |	The current game mode that is played. See [notes](#game_mode-note)	| | 135.0  |
phase | match_info  |	The current state of the match. See [notes](#phase-note)	| | 137.0  |
match_outcome | match_info  |	win/lose/tie. See [notes](#match_outcome-note)	| | 140.0  |


#### *pseudo_match_id* note

This is an Overwolf-generated code, unrelated to Steam.

Data Example:

```json
0c0ea3df-97ea-4d3a-b1f6-f8e34042251f
```

#### *server_info* note

Data Example:

```json
{"info":{"match_info":{"server_info":"{\"name\":\"Counter-Strike: Global Offensive\",\"ip\":\"=[A:1:2111360000:13753]:0:0\"}"}},"feature":"match_info"}

{"match_info":{"server_info":"{"name":"RU | ALTAI AWP [!ws,!knife,!gloves,!viptest] 128tick","ip":"212.22.93.74:27040"}"}}
```

#### *game_mode* note

Data Example:

Competitive mode on "Dust II" map
```json
{"match_info":{"game_mode":"Competitive Dust II"}}
```

VS BOTS on "Dust II" map
```json
{"match_info":{"game_mode":"Offline Deathmatch Dust II"}}
```

Community Server, "Causal" mode and server name
```json
{"match_info":{"game_mode":"Community Casual surf_ski_2_GO_sw"}}
```

"Casual" mode on "Dust II" map
```json
{"match_info":{"game_mode":"Casual Dust II"}}
```

Spectating "Casual" mode on "Dust II" map
```json
{"match_info":{"game_mode":"Watching Casual Dust II"}}
```

#### *phase* note

Possible Values:

* NotInGame (currently unavailable)
* Loading
* InGame
* InGameTerroristTeamPlay
* InGameCounterTerroristTeamPlay
* PauseExchangeTeam
* MatchResult
* UNKNOWN

Data Example:

```
{"feature":"match_info","category":"match_info","key":"phase","value":"MatchResult"}
```

#### *match_outcome* note

Data Example:

```json
{"info":{"match_info":{"match_outcome":"win"}},"feature":"match_info"}
```

## `info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
totalKills | player  |	Total kills in a match	            |                       |    70.0       |
totalDeaths | player  |	Total deaths in a match		    |                       |    70.0       |
totalMvps | player  |	Total MVP awards	 	            |                       |     70.0       |
score | player  |	Score in a match	            |                       |     70.0       |
team | player  |	T / CT	                            |                       |     70.0       |
steamid | player  |	The player’s steam id	            |                       |     70.0       |
map | round            |	Map name	            | See [notes](#map-note) |     70.0       |
mode | round  |	Map mode (for example: "casual")            |                       |     70.0       |
numOfRound | round  |	Round number in the match (starting 0)|                     |     70.0       |
phase | round  |Match phase<ul><li>warmup</li><li>live</li><li>freezetime</li><li>over|    |     70.0       |
scene | scene  |<ul><li>MainMenu</li><li>LoadingScreen</li><li>Game</li><li>MenuInGame(ESC)|  |     70.0       |

#### *map* note

List of all the map names and data:

Casual/Ranked/Deathmatch Maps:

* Dust II

```json
{"info":{"match_info":{"game_mode":"Offline Casual Dust II"}},"feature":"match_info"}
```

* Mirage

```json
{"info":{"match_info":{"game_mode":"Offline Casual Mirage"}},"feature":"match_info"}
```

* Inferno

```json
{"info":{"match_info":{"game_mode":"Offline Casual Inferno"}},"feature":"match_info"}
```

* Vertigo

```json
{"info":{"match_info":{"game_mode":"Offline Casual Vertigo"}},"feature":"match_info"}
```

* Cobblestone

```json
{"info":{"match_info":{"game_mode":"Offline Casual Cobblestone"}},"feature":"match_info"}
```

* Cache

```json
{"info":{"match_info":{"game_mode":"Offline Casual Cache"}},"feature":"match_info"}
```

* Zoo

```json
{"info":{"match_info":{"game_mode":"Offline Casual Zoo"}},"feature":"match_info"}
```

* Breach

```json
{"info":{"match_info":{"game_mode":"Offline Casual Breach"}},"feature":"match_info"}
```

* Seaside

```json
{"info":{"match_info":{"game_mode":"Offline Casual Seaside"}},"feature":"match_info"}
```

* Train

```json
{"info":{"match_info":{"game_mode":"Offline Casual Train"}},"feature":"match_info"}
```

* Overpass

```json
{"info":{"match_info":{"game_mode":"Offline Casual Overpass"}},"feature":"match_info"}
```

* Nuke

```json
{"info":{"match_info":{"game_mode":"Offline Casual Nuke"}},"feature":"match_info"}
```

* Canals

```json
{"info":{"match_info":{"game_mode":"Offline Casual Canals"}},"feature":"match_info"}
```

* Agency

```json
{"info":{"match_info":{"game_mode":"Offline Casual Agency"}},"feature":"match_info"}
```

* Miltia

```json
{"info":{"match_info":{"game_mode":"Offline Casual Militia"}},"feature":"match_info"}
```

* Office

```json
{"info":{"match_info":{"game_mode":"Offline Casual Office"}},"feature":"match_info"}
```

* Italy

```json
{"info":{"match_info":{"game_mode":"Offline Casual Italy"}},"feature":"match_info"}
```

* Assault

```json
{"info":{"match_info":{"game_mode":"Offline Casual Assault"}},"feature":"match_info"}
```

War Games Map names:

* Lake

```json
{"info":{"match_info":{"game_mode":"Offline War Games Lake"}},"feature":"match_info"}
```

* St.marc

```json
{"info":{"match_info":{"game_mode":"Offline War Games St. Marc"}},"feature":"match_info"}
```

* Safehouse

```json
{"info":{"match_info":{"game_mode":"Offline War Games Safehouse"}},"feature":"match_info"}
```

* Shoots

```json
{"info":{"match_info":{"game_mode":"Offline War Games Shoots"}},"feature":"match_info"}
```

* Baggage

```json
{"info":{"match_info":{"game_mode":"Offline War Games Baggage"}},"feature":"match_info"}
```

* Monastery

```json
{"info":{"match_info":{"game_mode":"Offline War Games Monastery"}},"feature":"match_info"}
```

* Sugarcane

```json
{"info":{"match_info":{"game_mode":"Offline War Games Sugarcane"}},"feature":"match_info"}
```

* Bank

```json
{"info":{"match_info":{"game_mode":"Offline War Games Bank"}},"feature":"match_info"}
```

* Shortdust

```json
{"info":{"match_info":{"game_mode":"Offline War Games Shortdust"}},"feature":"match_info"}
```

* Dizzy

```json
{"info":{"match_info":{"game_mode":"Offline War Games Dizzy"}},"feature":"match_info"}
```

## `roster`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
lobby | roster  |JSON containing array of lobby_players objects. See [notes](#lobby-note)|  |     77.0       |
match | roster  |JSON containing array of player objects. See [notes](#match-note)|  |     77.0       |

#### *lobby* note

Each player contains:

* steamId

Data Example:

```json
{
    "feature":"roster",
    "category":"roster",
    "key":"lobby",
    "value":"{"lobby_players\" : [{"steamId\":"76561198269560618"}]}"}
```

#### *match* note

Each player contains:

* steamId
* team

Data Example:

```json
{
    "feature":"roster",
    "category":"roster",
    "key":"match",
    "value":"{"players" : [
            {"steamId":"76561198364007097","team":"Counter-Terrorists"},{"steamId":"76561198389957131","team": "Counter-Terrorists"}
    ]}"}
```

## `replay`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
replay_list       | replay      | See [notes](#replay-note) |                       |     134.0     |

#### *replay* note

Values:

A list containing the URL address of all available replays that are currently stored in your profile (can be accessed via the main menu under "Your Matches").

Data Example:

```json
{"feature":"replay","category":"replay","key":"replay_list","value":"["steam://rungame/730/76561202255233023/+csgo_download_match CSGO-dVoC5-kwY8k-LCb3J-wCiMw-CrahQ","steam://rungame/730/76561202255233023/+csgo_download_match CSGO-myDzD-AOTzm-wYZzH-bCmrA-JebRF"]"}
```

## `counters`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
ping              | performance | Latency to server         |                       |               |
