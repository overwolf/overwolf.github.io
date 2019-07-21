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
match_start| None|A new match has started| |  0.7  |
