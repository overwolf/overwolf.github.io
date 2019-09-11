---
id:overwolf-games-events-rocket-league
title: Rocket League Game Events
sidebar_label: Rocket League Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
10798
:::

## Sample Apps
* [Rocket League game events sample app](https://github.com/overwolf/rocket-league-events-sample-app)

## Available Features

* [stats](#stats)
* [teamGoal](#teamGoal)
* [opposingTeamGoal](#opposingTeamGoal)
* [match](#match)
* [roster](#roster)
* [me](#me)
* [match_info](#match_info)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `stats`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
goal        | Check notes  | A goal has been scored |See [notes](#goal-note)|     14.0      | 
death       | null         | You died      |Currently not supported|     86.0      | 
score       | Check notes  | The score of a player has changed|See [notes](#score-note)|     86.0      | 

#### *goal* note

Event Data:

* <b>steamId</b> – the steam id of the player that score the goal
* <b>score</b> – the score of the player that scored the goal
* <b>goals</b> – the goals count of the player
* <b>deaths</b> – the deaths count of the player
* <b>name</b> –  the name of the player that scored the goal
* <b>team</b> – the team number of the player (1 or 2)

Comments:

Encoded stringified JSON containing the properties.
Need to do a decodeURI() on the value and the JSON.parse() on the result

#### *score* note

Event Data:

* <b>steamId</b> – the steam id of the player
* <b>score</b> – the score of the player
* <b>goals</b> – the goals count of the player
* <b>deaths</b> – the deaths count of the player
* <b>name</b> –  the name of the player
* <b>state</b>
* <b>team_score</b>
* <b>team</b> – the team number of the player (1 or 2)
* <b>index</b>

Comments:

Encoded stringified JSON containing the properties.
Need to do a decodeURI() on the value and the JSON.parse() on the result

## `teamGoal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
teamGoal    | null         |When the local player’s team has scored a goal.|    |   131.0   | 

## `opposingTeamGoal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
opposingTeamGoal| null     |When the opposing team has scored a goal.|    |   131.0   | 

## `match`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
started      | matchState  | true / false              |                       |    14.0       |
ended        | matchState  | true / false              |                       |    86.0       |
matchType    | matchInfo   | The match type            |See [notes](#matchType-note)|    86.0  |
ranked       | matchInfo   |True if the match is ranked, false otherwise "True/False" |     |  86.0  |
maxPlayers   | matchInfo   |Maximum number of players allowed in this match.|See [notes](#maxPlayers-note)|    86.0       |
gameMode (Not Available)| matchInfo   |The game mode of the match |See [notes](#gameMode-note)|    86.0       |
gameState    | matchInfo   |The current state of the game.|See [notes](#gameState-note)|    86.0       |
gameType     | matchInfo   | The game’s type           |                       |    86.0       |

#### *matchType* note

Data Example:

`[“Lobby” | “Private” | “Online” | “Offline”]`

#### *maxPlayers* note

(integer – use parseInt)

#### *gameMode* note

Data Example:

`[“soccer” | “basketball”, “hockey”, “items”, “volleyball”, “breakout”, “playTest”]`

#### *gameState* note

Data Example:

`[“waitingForPlayers” | “countdown | “active” | “postGoalScored”]`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matchStart  | null         | match starts  |                    |      14.0     | 
matchEnd    | null         | match ends    |                    |      14.0     | 
victory     | null     |team_score (1 / 2)(1 – Victory, 2 - defeat)|    |   86.0   | 
defeat      | null     |team_score (1 / 2)(1 – Victory, 2 - defeat)|    |   86.0   | 

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
pseudo_match_id| match_info| The current session’s ID code. |See [notes](#pseudo_match_id-note)|    130.0   |

#### *pseudo_match_id* note

Data Example:

`0c0ea3df-97ea-4d3a-b1f6-f8e34042251f`

## `roster`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
player0 / player1 … palyerN(N = number of players in the match)| playersInfo| Check notes |See [notes](#player-note)|    14.0   |
team1 / team2| teamsInfo | Check notes |See [notes](#teamsInfo-note)|    24.0   |
team1_score / team2_score| teamsScore|team1 / team2 score – integer|See [notes](#pseudo_match_id-note)|    86.0   |

#### *player* note

* Encoded stringified JSON containing the properties:
  * steamId – the steam id of the player that died
  * score – the score of the player that died
  * goals – the goals count of the player
  * deaths – the deaths count of the player
  * name –  the name of the player that died
  * team – the team number of the player (1 or 2)

Comment:

Encoded stringified JSON containing the properties.
Need to do a decodeURI() on the value and the JSON.parse() on the result

#### *teamsInfo* note

Value:

Encoded stringified array of strings indicating the players ids for each team.
Each id corresponds to an id under the playersInfo category.

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
rosterChange|Array containing the players info|A player leaves/ enters a match|         |      14.0     | 
playerJoined| Check notes |A player joins the match|See [notes](#playerJoined-note)|      24.0     | 
playerLeft  | Check notes |A player leaves the match|See [notes](#playerLeft-note)|      24.0     | 

#### *playerJoined* note

Event Data:

* <b>steamId</b> – the steam id of the player
* <b>score</b> – the score of the player
* <b>goals</b> – the goals count of the player
* <b>deaths</b> – the deaths count of the player
* <b>name</b> –  the name of the player
* <b>team</b> – the team number of the player (1 or 2)

#### *playerLeft* note

Event Data:

* <b>steamId</b> – the steam id of the player
* <b>score</b> – the score of the player
* <b>goals</b> – the goals count of the player
* <b>deaths</b> – the deaths count of the player
* <b>name</b> –  the name of the player
* <b>team</b> – the team number of the player (1 or 2)

## `me`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
steamId      | me          | The player’s steam id     |                       |    14.0       |
name         | me          | The player’s name         |                       |    14.0       |
goals        | me          | The player’s goals count  |                       |    14.0       |
score        | me          | The player’s score        |                       |    14.0       |
deaths       | me          | The player’s death count  |                       |    14.0       |
team         | me          | The player’s team number  |                       |    14.0       |
team_score        | me          |  The team’s score    |                       |    86.0       |
