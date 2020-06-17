---
id: overwolf-games-events-overwatch
title: Overwatch
sidebar_label: Overwatch
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10844
:::

## Sample Apps
* [OVERWATCH game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [game_info](#game_info)
* [match_info](#match_info)
* [kill](#kill)
* [death](#death)

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
{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}
```

## `game_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
game_state   | game_info   | Current state of the game.|See [notes](#game_state-note)|   151.0       |
game_mode    | game_info   | Currently played game-mode.|See [notes](#game_mode-note)|   151.0       |
map       | game_info   | Name of currently played map.|See [notes](#map-note)   |   151.0       |

#### *game_state* note:

Data Example:

```json
        {
            "feature": "game_info",
            "category": "game_info",
            "key": "game_state",
            "value": "loading_screen_start"
        } {
            "feature": "game_info",
            "category": "game_info",
            "key": "game_state",
            "value": "game_loaded"
        } {
            "feature": "game_info",
            "category": "game_info",
            "key": "game_state",
            "value": "match_in_progress"
        }
```

#### *game_mode* note

Be wary that this is not supported in game-browser.

Full list of game-modes:

* 0003 = "Junkensteins Revenge"
* 0007 = "Ctf"
* 0008 = "Meis Snowball Offensive"
* 0009 = "Elimination"
* 0015 = "Uprising"
* 0016 = "Skirmish"
* 0020 = "Assault"
* 0021 = "Escort"
* 0022 = "Hybrid"
* 0023 = "Control"
* 0024 = "Practice Range"
* 0025 = "Tutorial"
* 0026 = "Uprising All Heroes"
* 0029 = "Team Deathmatch"
* 0030 = "Deathmatch"
* 0032 = "Lucioball"
* 0037 = "Retribution"
* 0041 = "Yeti Hunter"
* 0042 = "Halloween Holdout Endless"
* 0061 = "Calypso Heromode"
* 0067 = "Storm Rising"
* 0074 = "Survivor"
* 0089 = "Snowball Deathmatch"
* 0090 = "Practice Range"

Data Example:

```json
        {
            "feature": "game_info",
            "category": "game_info",
            "key": "game_mode",
            "value": "30"
        }
```

#### *map* note

Important to note there are some values that are still unknown. Most of them are listed down here.

Possible map values:

* 0091 = "Temple Of Anubis"
* 0212 = "Kingdom Kings Row"
* 0357 = "Hanamura"
* 0388 = "Watchpoint Gibraltar"
* 0468 = "Numbani"
* 0475 = "Volskaya Industries"
* 0687 = "Hollywood"
* 0707 = "Dorado"
* 1207 = "Nepal"
* 1467 = "Route 66"
* 1633 = "Tutorial"
* 1634 = "Lijiang Tower"
* 1645 = "Ilios"
* 1672 = "Practice Range"
* 1677 = "Eichenwalde"
* 1694 = "Oasis"
* 1707 = "Hollywood Halloween"
* 1713 = "Kingdom Kings Row Winter"
* 1715 = "Estadio Das Ras"
* 1717 = "Hanamura Winter"
* 1719 = "Lijiang Tower Lunar New Year"
* 1735 = "Vpp Green Room"
* 1737 = "Junkensteins Revenge Halloween"
* 1745 = "Ecopoint Antarctica"
* 1747 = "Horizon Lunar Colony"
* 1797 = "Necropolis"
* 1804 = "Black Forest"
* 1805 = "Ecopoint Antarctica Winter"
* 1809 = "Lijiang Garden Lunar New Year"
* 1810 = "Lijiang Night Market Lunar New Year"
* 1815 = "Nepal Sanctum"
* 1818 = "Lijiang Control Center Lunar New Year"
* 1820 = "Castillo"
* 1846 = "Nepal Village"
* 1848 = "Nepal Shrine"
* 1850 = "Ilios Well"
* 1853 = "Ilios Lighthouse"
* 1854 = "Ilios Ruins"
* 1860 = "Lijiang Control Center"
* 1861 = "Lijiang Garden"
* 1862 = "Lijiang Night Market"
* 1866 = "Oasis City Center"
* 1868 = "Oasis Gardens"
* 1869 = "Oasis University"
* 1878 = "Junkertown"
* 1886 = "Blizzard World"
* 1939 = "Sydney Harbour Arena"
* 1953 = "Ayutthaya"
* 1956 = "Chateau Guillard"
* 2018 = "Busan"
* 2036 = "Eichenwalde Halloween"
* 2039 = "Black Forest Winter"
* 2045 = "Nepal Village Winter"
* 2102 = "Chateau Guillard Halloween"
* 2161 = "Rialto"
* 2192 = "Petra"
* 2193 = "Paris"
* 2346 = "Busan Stadium"
* 2628 = "Havana"
* 2651 = "Blizzard World Winter"
* 2682 = "Busan Sanctuary Lunar New Year"
* 2694 = "Busan Downtown Lunar New Year"
* 3136 = "Workshop Island"
* 3140 = "Workshop Expanse"
* 3144 = "Workshop Chamber"
* 3280 = "Workshop Expanse Night"
* 3281 = "Workshop Island Night"

Data Example:

```json
        {
            "feature": "match_info",
            "category": "match_info",
            "key": "map",
            "value": "707"
        }
```

## `match_info`

### Events

Event  | Event Data        | Fired When (announcement)           | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------| ---------- | --------------|
match_start | null      | Match started. |See [notes](#match_start-note)|    150.0      |
match_end   | null      | Match ended.   |See [notes](#match_end-note)|    150.0      |

#### *match_start* note

Data Example:

```json
{"name":"match_start","data":""}
```

#### *match_end* note

Data Example:

```json
{"name":"match_end","data":""}
```

## `kill`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
eliminations  | kill    | Total amount of eliminations.|See [notes](#eliminations-note)|   151.0 |
objective_kills| kill   | Total amount of objective kills.|See [notes](#objective_kills-note)|   151.0 |

#### *eliminations* note

Data Example:

```json
        {
            "feature": "kill",
            "category": "kill",
            "key": "eliminations",
            "value": 1
        }
```

#### *objective_kills* note

Data Example:

```json
        {
            "feature": "kill",
            "category": "kill",
            "key": "objective_kills",
            "value": 1
        }
```

### Events

Event  | Event Data        | Fired When (announcement)           | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------| ---------- | --------------|
elimination | Integer      | Elimination is performed. |See [notes](#elimination-note)|    150.0      |
objective_kill | Integer   | Objective kill is performed.. |See [notes](#objective_kill-note)|    150.0      |

#### *elimination* note

The event includes the total amount performed in the match.

Data Example:

```json
{"name":"elimination","data":"8"}
```

#### *objective_kill* note

The event includes the total amount performed in the match.

Data Example:

```json
{"name":"objective_kill","data":"3"}
```

## `death`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | -------------  | 
deaths       | death       | Total amount of deaths.   |See [notes](#death-note)|   151.0       | 

#### *death* note

Data Example:

```json
        {
            "feature": "death",
            "category": "death",
            "key": "deaths",
            "value": 1
        }
```

### Events

Event  | Event Data        | Fired When (announcement)           | Notes      | Since GEP Ver. |
-------| ------------------| -------------------------------------| ---------- | --------------|
death  | Integer           | Death has occurred.                  |See [notes](#death-note)|    150.0      |

#### *death* note

The event includes the total amount performed in the match.

Data Example:

```json
{"name":"death","data":"2"}
```
