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

* [Splitgate game events sample app](https://github.com/overwolf/events-sample-apps)

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
* [assist](#assist)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. 

Check [here](../status/all) the game events status. OR -  easily check the game events status from your app, [using our API](../topics/howto-check-events-status-from-app).

## `game_info`

### Info Updates

key               | Category    | Values                    | Notes                  | Since GEP Ver. |
----------------- | ------------| ------------------------- | ---------------------- | ------------- |
scene             | game_info   | The current game scene    |See [notes](#scene-note)|    123.0      |

#### *scene* note

Possible values:

* main menu
* loading screen
* match summary

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
mapName           | match_info   |	The current map name.	  |See [notes](#mapName-note)|    123.0      |
mode              | match_info   |	The current match mode.	  |See [notes](#mode-note)|    123.0      |
state             | match_info   |	The current match state (active / inactive) |See [notes](#state-note)|    123.0      |
timer             | match_info   |	The current match timer value (in seconds).  |See [notes](#timer-note)|    123.0      |
score             | match_info   |	The current score  |See [notes](#score-note)|    123.0      |
type              | match_info   |	The current match type. |See [notes](#type-note)|    130.0      |

#### *mapName* note

Available maps: Olympus, Outpost, Helix, Silo, Pantheon, Highwind, Atlantis, Stadium, Abyss

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

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
id                | player_info   |	The local player id	  |See [notes](#id-note)|    123.0      |
name              | player_info   |	The local player name	  |See [notes](#name-note)|    123.0      |
health            | player_info   |	The local player health (0-100)	  |See [notes](#health-note)|    123.0      |
team              | player_info   |	The local player team (alpha/bravo)  |See [notes](#team-note)|    123.0      |
kills              | player_info   |	The local player kills	  |See [notes](#kills-note)|    130.0      |
deaths              | player_info   |	The local player deaths	  |See [notes](#deaths-note)|    130.0      |
assists              | player_info   |	The local player assists	  |See [notes](#assists-note)|    130.0      |
doubleKills              | player_info   |	The local player double kills	  |See [notes](#doubleKills-note)|    130.0      |
tripleKills              | player_info   |	The local player triple kills	  |See [notes](#tripleKills-note)|    130.0      |
quadKills              | player_info   |	The local player quadra kills	  |See [notes](#quadKills-note)|    130.0      |
quintKills              | player_info   |	The local player quintuple kills	  |See [notes](#quintKills-note)|    130.0      |
sexKills              | player_info   |	The local player sextuple kills	  |See [notes](#sexKills-note)|    130.0      |
killstreak1              | player_info   |	The local player killstreak	  |See [notes](#killstreak1-note)|    130.0      |
killstreak2              | player_info   |	The local player killstreak	  |See [notes](#killstreak2-note)|    130.0      |
killstreak3              | player_info   |	The local player killstreak	  |See [notes](#killstreak3-note)|    130.0      |
killstreak4              | player_info   |	The local player killstreak	  |See [notes](#killstreak4-note)|    130.0      |
killstreak5              | player_info   |	The local player killstreak	  |See [notes](#killstreak5-note)|    130.0      |
killstreak6              | player_info   |	The local player killstreak	  |See [notes](#killstreak6-note)|    130.0      |
headshotKills              | player_info   |	The local player killed with headshot	  |See [notes](#headshotKills-note)|    130.0      |
meleeKills              | player_info   |	The local player killed with a melee	  |See [notes](#meleeKills-note)|    130.0      |
portalKills              | player_info   |	The local player portal killed	  |See [notes](#portalKills-note)|    130.0      |
killsThroughPortal              | player_info   |	The local player killed through a portal	  |See [notes](#killsThroughPortal-note)|    130.0      |
teabags              | player_info   |	The local player tea-bagged	  |See [notes](#teabags-note)|    130.0      |

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

#### *kills* note

Data Example:

`{"kills", 4 },`

#### *deaths* note

Data Example:

` {"deaths", 4 },`

#### *assists* note

Data Example:

`{"assists", 4 },`

#### *doubleKills* note

Data Example:

`{"doubleKills", 4 },`

#### *tripleKills* note

Data Example:

`{"tripleKills", 4 },`

#### *quadKills* note

Data Example:

`{"quadKills", 4 },`

#### *quintKills* note

Data Example:

`{"quintKills", 4 },`

#### *sexKills* note

Data Example:

`{"sexKills", 4 },`

#### *killstreak1* note

Data Example:

`{"killstreak1", 4 },`

#### *killstreak2* note

Data Example:

`{"killstreak2", 4 },`

#### *killstreak3* note

Data Example:

`{"killstreak3", 4 },`

#### *killstreak4* note

Data Example:

`{"killstreak4", 4 },`

#### *killstreak5* note

Data Example:

`{"killstreak5", 4 },`

#### *killstreak6* note

Data Example:

`{"killstreak6", 4 },`

#### *headshotKills* note

Data Example:

`{"headshotKills", 4 },`

#### *meleeKills* note

Data Example:

`{"meleeKills", 4 },`

#### *portalKills* note

Data Example:

`{"portalKills", 4 },`

#### *killsThroughPortal* note

Data Example:

`{"killsThroughPortal", 4},`

#### *teabags* note

Data Example:

`{"teabags", 4 }`

## `location`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
location          | game_info   |	The current location of the local player (x,y,z) |See [notes](#location-note)|    123.0      |

#### *location* note

Data Example:

`{"game_info":{"location":"{"x": 108,"y": 3542,"z": 179}"}}`

## `match`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
matchOutcome| won/lost     |Player has died|See [notes](#matchoutcome-note)|     123.0     |
matchStart  | null         |Player has died|See [notes](#matchstart-note)|     123.0     |
matchEnd    | null         |Player has died|See [notes](#matchend-note)|     123.0     |

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

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
killFeed    |<ul><li>killer name</li><li>weapon</li><li>victim name</li>|Player has died|See [notes](#killFeed-note)|     123.0     |

#### *killFeed* note

Data Example:

`{"name":"killFeed","data":"{"killer": "FinalCountDown","weapon": "Assault Rifle","victim": "Sicktattoo"}"}`

## `connection`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
disconnected| null         |The local player disconnects from the game.|           |     123.0     |
reconnected | null         |The local player reconnects to the game.|          |     123.0     |

## `kill`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
kill        |  Kill type   | The local player killed an enemy|See [notes](#kill-note)|     123.0     |
victim      | Victim name  | The local player killed an enemy|See [notes](#victim-note)|     123.0     |
headshot    | null         |The local player killed an enemy with a headshot|          |     123.0     |
meleeKill   | null         |The local player killed an enemy with melee|          |     123.0     |
portalKill  | null         |The local player killed an enemy with a portal|          |     123.0     |
killThroughPortal | null   |The local player killed an enemy through a portal.|          |     123.0     |
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

## `assist`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
assist        |  Kill type   | The local player assisted in killing an enemy|See [notes](#assists)|     130.0     |

#### *assists*

Data Example:

`{"name":"assist","data":""}`

## `death`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
death        |  null   |  The local player was killed|See [notes](#death-note)|     123.0     |
killer        |  Killer name   |  The local player was killed|See [notes](#killer-note)|     123.0     |

#### *death* note

Data Example:

`{"name":"death","data":""}`

#### *killer* note

Data Example:

`{"name":"killer","data":"Dave Bunnett"}`

## `portal`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
portalCreated|  null   |  The local player created a porta |    |     123.0     |
portalClosed |  null   |  The local player closed a portal |    |     123.0     |
portalUsed   |  null   |  The local player went through a portal|  |     123.0     |
