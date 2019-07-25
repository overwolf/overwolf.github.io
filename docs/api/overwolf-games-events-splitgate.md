---
id:overwolf-games-events-splitgate
title: Splitgate: Arena Warfare Game Events
sidebar_label: Splitgate: Arena Warfare Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21404
:::

:::tip
Tracker Network offers a [battle tested API for Splitgate: Arena Warfare](https://tracker.gg/developers/docs/titles/splitgate), which you can use while looking to build your own app on the Overwolf platform. Their server API is the easiest way to improve the quality of your app.
:::

## Sample Apps

* [Splitgate game events sample app](https://github.com/overwolf/splitgate-sample-app)

## Available Features

* [game_info](#game_info)
* [match_info](#match_info)
* [player](#player)
* [location](#location)
* [match](#match)
* [feed](#feed)
* [connection](#connection)
* [kill](#kill)
* [death](#death)
* [portal](#portal)

## `game_info`

### Info Updates

key               | Category    | Values                    | Notes                  | Since Version |
----------------- | ------------| ------------------------- | ---------------------- | ------------- |
scene             | game_info   | The current game scene    |See [notes](#scene-note)|    0.123      |

#### *scene* note

Possible values:

* main menu
* loading screen
* match summary

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
mapName           | match_info   |	The current map name.	  |See [notes](#mapName-note)|    0.123      |
mode              | match_info   |	The current match mode.	  |See [notes](#mode-note)|    0.123      |
state             | match_info   |	The current match state (active / inactive) |See [notes](#state-note)|    0.123      |
timer             | match_info   |	The current match timer value (in seconds).  |See [notes](#timer-note)|    0.123      |
score             | match_info   |	The current score  |See [notes](#score-note)|    0.123      |
type              | match_info   |	The current match type. |See [notes](#type-note)|    130.0      |

#### *mapName* note

Available maps: Olympus, Outpost, Helix, Silo, Pantheon, Highwind, Atlantis, Stadium

Data Example:

`{"match_info":{"mapName":"Olympus"}}`

#### *mode* note

Possible values:

* “TDM” – Team Deathmatch
* “FFA” – Free For All
* “KOTH” – King of the Hill
* “TBC” – Teabag Confirmed
* “DOM” – Domination
* “SWAT” – Team SWAT
* “TIG” – Team InstaGib
* “IG” – InstaGib
* “OB” – Oddball
* “TOB” – Team Oddball
* “CTF” – Capture the Flag

Data Example:

`{"match_info":{"mode":"TDM"}}`

#### *state* note

Data Example:

`{"match_info":{"state":"active"}}`

#### *timer* note

Date Example:

`{"match_info":{"timer":"476"}}`

#### *score* note

Data Example:

`{"score":"{"alpha": 6, "bravo": 9}"}`

#### *type* note

Possible values: “Unranked”, “Ranked”, “Custom”

## `player`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
id                | player_info   |	The local player id	  |See [notes](#id-note)|    0.123      |
name              | player_info   |	The local player name	  |See [notes](#name-note)|    0.123      |
health            | player_info   |	The local player health (0-100)	  |See [notes](#health-note)|    0.123      |
team              | player_info   |	The local player team (alpha/bravo)  |See [notes](#team-note)|    0.123      |

#### *id* note

Data Example:

`{"player_info":{"id":"76561198269560618"}}`

#### *name* note

Data Example:

`{"player_info":{"name":"csgostatsmarket"}}`

#### *health* note

Data Example:

`{"player_info":{"health":"88"}`

#### *team* note

Data Example:

`{"player_info":{"team":"alpha"}}`

## `location`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
location          | game_info   |	The current location of the local player (x,y,z) |See [notes](#location-note)|    0.123      |

#### *location* note

Data Example:

`{"game_info":{"location":"{"x": 108,"y": 3542,"z": 179}"}}`

## `match`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
matchOutcome| won/lost     |Player has died|See [notes](#matchOutcome-note)|     0.123     |
matchStart  | null         |Player has died|See [notes](#matchStart-note)|     0.123     |
matchEnd    | null         |Player has died|See [notes](#matchEnd-note)|     0.123     |

#### *matchOutcome* note

Data Example:

`{"name":"matchOutcome","data":"lost"}`

#### *matchStart* note

Data Example:

`{"name":"matchStart","data":""}`

#### *matchEnd* note

Data Example:

`{"name":"matchEnd","data":""}`

## `feed`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
killFeed    |<ul><li>killer name</li><li>weapon</li><li>victim name</li>|Player has died|See [notes](#killFeed-note)|     0.123     |

#### *killFeed* note

Data Example:

`{"name":"killFeed","data":"{"killer": "FinalCountDown","weapon": "Assault Rifle","victim": "Sicktattoo"}"}`

## `connection`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
disconnected| null         |The local player disconnects from the game.|           |     0.123     |
reconnected | null         |The local player reconnects to the game.|          |     0.123     |

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
kill        |  Kill type   | The local player killed an enemy|See [notes](#kill-note)|     0.123     |
victim      | Victim name  | The local player killed an enemy|See [notes](#victim-note)|     0.123     |
headshot    | null         |The local player killed an enemy with a headshot|          |     0.123     |
meleeKill   | null         |The local player killed an enemy with melee|          |     0.123     |
portalKill  | null         |The local player killed an enemy with a portal|          |     0.123     |
killThroughPortal | null   |The local player killed an enemy through a portal.|          |     0.123     |
teabag      | null         |The local player tea-bagged an enemy.|          |     130.0     |

#### *kill* note

* empty string for regular kill
* Double Kill
* Triple Kill
* Killeidoscope!
* Kaiser Killhelm!

Data Example:

`{"name":"kill","data":""}
{"name":"kill","data":"Triple Kill"}`

#### *victim* note

Data Example:

`{"name":"victim","data":"flying_low"}`

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
death        |  null   |  The local player was killed|See [notes](#death-note)|     0.123     |
killer        |  Killer name   |  The local player was killed|See [notes](#killer-note)|     0.123     |

#### *death* note

Data Example:

`{"name":"death","data":""}`

#### *killer* note

Data Example:

`{"name":"killer","data":"Dave Bunnett"}`

## `portal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since Version |
------------| -------------| --------------| ------------------ | --------------|
portalCreated|  null   |  The local player created a porta |    |     0.123     |
portalClosed |  null   |  The local player closed a portal |    |     0.123     |
portalUsed   |  null   |  The local player went through a portal|  |     0.123     |
