---
id:overwolf-games-events-rocket-league
title: Rocket League Game Events
sidebar_label: Rocket League
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10798
:::

## Sample Apps
* [Rocket League game events sample app](https://github.com/overwolf/rocket-league-events-sample-app)

## Available Features

* [gep_internal](#gep_internal)
* [stats](#stats)
* [teamGoal](#teamgoal)
* [opposingTeamGoal](#opposingteamgoal)
* [match](#match)
* [roster](#roster)
* [me](#me)
* [match_info](#match_info)

## Game events status

It's recommended to communicate errors and warnings to your users. You can check game event status [here](../status/all) or easily verify event status directly from your app [using our API](../topics/howto-check-events-status-from-app).

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

## `stats`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
goal        | Check notes  | A goal has been scored |See [notes](#goal-note)|     14.0      | 
death       | null         | Player has died      |Currently not supported|     86.0      | 
score       | Check notes  | Score of a player has changed|See [notes](#score-note)|     86.0      | 

#### *goal* note

Event Data:

* <b>steamId</b> – Steam id of the player scoring the goal
* <b>score</b> – Score of the player scoring the goal
* <b>goals</b> – Goal count of the player
* <b>deaths</b> – Death count of the player
* <b>name</b> –  Name of the player scoring the goal
* <b>team</b> – Team number of the scoring player (1 or 2)

Comments:

Encoded stringified JSON containing the properties. Need to do a decodeURI() on the value and then JSON.parse() on the result

Data Example:

```json
{"events":[{"name":"goal","data":"{"steamId":"76561198045142971","score":827,"goals":"5",  "deaths":"0","name":"Klide","state":"0","team_score":5,"team":"2","index":4}"}]}
```

#### *score* note

Event Data:

* <b>steamId</b> – Steam ID of the player
* <b>score</b> – Score of the player
* <b>goals</b> – Goal count of the player
* <b>deaths</b> – Death count of the player
* <b>name</b> –  Name of the player
* <b>state</b>
* <b>team_score</b>
* <b>team</b> – Team number of the player (1 or 2)
* <b>index</b>

Comments:

Encoded stringified JSON containing the properties. Need to do a decodeURI() on the value and the JSON.parse() on the result

Data Example:

```json
{"info":{"me":{"team_score":"0"}},"feature":"me"}
{"info":{"teamsScore":{"team1_score":"0"}},"feature":"roster"}
{"info":{"teamsScore":{"team2_score":"0"}},"feature":"roster"}
{"info":{"me":{"score":"725"}},"feature":"me"}
```

## `teamGoal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
teamGoal    | null         |When the local player’s team has scored a goal|See [notes](#teamGoal-note)|   131.0   | 

#### *teamGoal* note

Data Example:

```json
{"events":[{"name":"teamGoal","data":"{"steamId":"2535424769966317","score":126,"goals":"1","deaths": "0","name":"JteRushencroks0","state":"0","team_score":2,"team":"1","index":4}"}]}
```

## `opposingTeamGoal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
opposingTeamGoal| null     |When the opposing team has scored a goal|See [notes](#oppopsingTeamGoal-note)|   131.0   | 

#### *opposingTeamGoal* note

Data Example:

```json
{"events":[{"name":"opposingTeamGoal","data":"{"steamId":"2535461211167231","score":128,"goals":"1",  "deaths":"0","name":"JaffaCake200015","state":"0","team_score":1,"team":"1","index":2}"}]}
```

## `match`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
started      | matchState  | true / false              |                       |    14.0       |
ended        | matchState  | true / false              |                       |    86.0       |
matchType    | matchInfo   | Current match type            |See [notes](#matchType-note)|    86.0  |
ranked       | matchInfo   | True if the match is ranked, false otherwise "True/False" |     |  86.0  |
maxPlayers   | matchInfo   | Maximum number of players allowed in this match |See [notes](#maxPlayers-note)|    86.0       |
gameMode (Not Available)| matchInfo   | Game mode of the match |See [notes](#gameMode-note)|    86.0       |
gameState    | matchInfo   | Current state of the game|See [notes](#gameState-note)|    86.0       |
gameType     | matchInfo   | Current game type           |                       |    86.0       |

#### *matchType* note

Data Example:

`[“Lobby” | “Private” | “Online” | “Offline”]`

Data Example:

```json
{"info":{"matchInfo":{"matchType":"Online"}},"feature":"match"}
```

#### *maxPlayers* note

(integer – use parseInt)

Data Example:

```json
{"info":{"matchInfo":{"maxPlayers":"6"}},"feature":"match"}
```

#### *gameMode* note

Data Example:

`[“soccer” | “basketball”, “hockey”, “items”, “volleyball”, “breakout”, “playTest”]`

#### *gameState* note

Data Example:

`[“waitingForPlayers” | “countdown | “active” | “postGoalScored” | “ReplayPlayback” | “PrePodiumSpotlight” | “Finished” | “Unknown” | “PodiumSpotlight”]`

```json
{"info":{"matchInfo":{"gameState":"WaitingForPlayers"}},"feature":"match"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matchStart  | null         | Match starts  |See [notes](#matchStart-note)|      14.0     | 
matchEnd    | null         | Match ends    |See [notes](#matchEnd-note)|      14.0     | 
victory     | null     |team_score (1 / 2)(1 – Victory, 2 - defeat)|    |   86.0   | 
defeat      | null     |team_score (1 / 2)(1 – Victory, 2 - defeat)|    |   86.0   | 

#### *matchStart* note

Data Example:

```json
{"events":[{"name":"matchStart","data":""}]}
```

#### *matchEnd* note

Data Example:

```json
{"events":[{"name":"matchEnd","data":""}]}
```

#### *victory* note

Data Example:

```json
{"events":[{"name":"victory","data":"{"team_score":5}"}]}
```

#### *defeat* note

Data Example:

```json
{"events":[{"name":"defeat","data":"{"team_score":0}"}]}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id| match_info| Current match’s internal ID code.|See [notes](#pseudo_match_id-note)|    130.0   |
mutator_settings| match_info| The current-chosen settings of the private match.|See [notes](#mutator_settings-note)|    147.0   |
arena        | match_info| The current private match's arena setting. |See [notes](#arena-note)|    147.0   |
server_info  | match_info| The info of the current match's server info. |See [notes](#server_info-note)|    147.0   |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

#### *mutator_settings* note

Data Example:

```json
{"info":{"match_info":{"mutator_settings":"SmallBall,HighBounciness,FastBall,LightBall,Pinball,BotsNone"}},"feature":"match_info"}
```

#### *arena* note

Data Example:

```json
{"info":{"match_info":{"arena":"Random"}},"feature":"match_info"}
```

#### *server_info* note

Data Example:

```json
{"info":{"match_info":{"server_info":"EU511-Gimbal9"}},"feature":"match_info"}
```

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
player0 / player1 … palyerN(N = number of players in the match)| playersInfo| Check notes |See [notes](#player-note)|    14.0   |
team1 / team2| teamsInfo | Check notes |See [notes](#teamsInfo-note)|    24.0   |
team1_score / team2_score| teamsScore|team1 / team2 score – integer|See [notes](#pseudo_match_id-note)|    86.0   |

#### *player* note

* Encoded stringified JSON containing the properties:
  * steamId – Steam ID of the player who died
  * score – Score of the player who died
  * goals – Goal count of the player
  * deaths – Death count of the player
  * name –  Name of the player that died
  * team – Team number of the player (1 or 2)

Comment:

Encoded stringified JSON containing the properties. Need to do a decodeURI() on the value and then JSON.parse() on the result.

Data Example:

```json
{"info":{"playersInfo":{"player0":"%7B%22steamId%22:%222535441382512370%22,%22score%22:0,%22goals%22:%220%22,%22deaths%22:%220%22,%22name%22:%22Grexio%22,%22state%22:%220%22,%22team_score%22:0,%22team%22:%221%22,%22index%22:0%7D"}},"feature":"roster"}
```

#### *teamsInfo* note

Value:

Encoded stringified array of strings indicating the players IDs for each team. Each ID corresponds to an ID under the playersInfo category.

Data Example

```json
{"info":{"teamsInfo":{"team1":"%5B%22player0%22%5D"}},"feature":"roster"}
```

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
rosterChange| Array containing players' information|A player leaves or joins the match|See [notes](#rosterChange-note)|      14.0     | 
playerJoined| Check notes |A player joins the match|See [notes](#playerJoined-note)|      24.0     | 
playerLeft  | Check notes |A player leaves the match|See [notes](#playerLeft-note)|      24.0     | 

#### *rosterChange* note

Data Example:

```json
{"events":[{"name":"rosterChange","data":"{"roster":[{"steamId":"1","score": 0,"goals":"0","deaths":"0","name":"Fury","state":"64","team_score": 1,"team":"1","index":0},{"steamId":"2535423426833677","score":0,"goals": "0","deaths":"0","name":"IISGoAt708","state":"0","team_score": 3,"team":"2","index":1},{"steamId":"2535428144972964","score": 34,"goals":"0","deaths":"0","name":"Joschy900","state":"0","team_score": 1,"team":"1","index":2},{"steamId": "2535424769966317","score":0,"goals":"0","deaths":"0","name":"JteRushencroks0","state": "0","team_score":1,"team":"1","index":3},{"steamId": "76561198045142971","score":455,"goals":"3","deaths":"0","name":"Klide", "state":"0","team_score":3,"team":"2","index\":4},{ "steamId":"4193393565673947567","score":62,"goals":"0","deaths":"0","name": "YAHHOLAND","state":"0","team_score":3,"team":"2","index":5}]}"}]}
```

#### *playerJoined* note

Event Data:

* <b>steamId</b> – Steam ID of the player
* <b>score</b> – Score of the player
* <b>goals</b> – Goal count of the player
* <b>deaths</b> – Death count of the player
* <b>name</b> –  Name of the player
* <b>team</b> – Team number of the player (1 or 2)

Data Example:

```json
{"events":[{"name":"playerJoined","data":"{"steamId":"2535428144972964","score":0,"goals": "0","deaths":"0","name":"Joschy900","state":"0\","team_score":0,"team":"1","index": 2}"}]}
```

#### *playerLeft* note

Event Data:

* <b>steamId</b> – Steam ID of the player
* <b>score</b> – Score of the player
* <b>goals</b> – Goal count of the player
* <b>deaths</b> – Death count of the player
* <b>name</b> –  Name of the player
* <b>team</b> – Team number of the player (1 or 2)

Data Example:

```json
{"events":[{"name":"playerLeft","data":"{"steamId":"156382600742638838","score":52,"goals":"0",  "deaths":"0","name":"JHONNYHS","state":"0","team_score":1,"team":"2","index": 2}"}]}
```

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
steamId      | me          | Player’s Steam ID     |                       |    14.0       |
name         | me          | Player’s name         |                       |    14.0       |
goals        | me          | Player’s goal count  |                       |    14.0       |
score        | me          | Player’s score        |                       |    14.0       |
deaths       | me          | Player’s death count  | Currently not supported                       |    14.0       |
team         | me          | Player’s team number  |                       |    14.0       |
team_score        | me          | Team score    |                       |    86.0       |

#### *me* note

Data Examples:

```json
{"info":{"me":{"goals":"1"}},"feature":"me"}
{"info":{"me":{"score":"102"}},"feature":"me"}
{"info":{"me":{"team_score":"1"}},"feature":"me"}
```

