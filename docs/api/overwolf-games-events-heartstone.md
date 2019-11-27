---
id:overwolf-games-events-heartstone
title: Hearthstone Game Events
sidebar_label: Heartstone
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
9898
:::

## Sample Apps
* [Hearthstone game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [scene_state](#scene_state)
* [collection](#collection)
* [decks](#decks)
* [match](#match)
* [match-info](#match_info)

## Game events status

It is highly recommended to communicate errors and warnings to your app users. Check game event status [here](../status/all), or easily check game events status from your app [using our API](../topics/howto-check-events-status-from-app).

## `collection`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
collection        | game_info   | Current card collection of the local player. See [notes](#collection-note) |     |   117.1 |

#### *collection* note

* The “collection”  data is available as soon as the player logs into Hearthstone.
* The collection is updated whenever the user adds/removes a card.
  
Example for cards "collection":

```json
{ CS2_065: "{"id" : "CS2_065", "count" : "1", "premiumCount" : "0" }",
  CS1_113: "{"id" : "CS1_113", "count" : "2", "premiumCount" : "0" }",
  NEW1_011: "{"id" : "NEW1_011", "count" : "2", "premiumCount" : "0" }",
  EX1_131: "{"id" : "EX1_131", "count" : "1", "premiumCount" : "2" }",
  CS2_121: "{"id" : "CS2_121", "count" : "2", "premiumCount" : "0" }",
  …
}
```

"Card" structure:

`{
  "id" : "card_id" ,
  "count" : "int" , 
  "premiumCount" : "int"
}  `

* “id” – The [card’s id](http://metastats.net/allcards/)
* “count” – The number of regular cards
* “premiumCount” – The number of premium (golden) cards

## `scene_state`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
scene_state | game_info   |  Current game scene. See [notes](#scene_state-note) |     |   117.1 |

#### *scene_state* note

Can be one of the following:
* scene_startup
* scene_login
* scene_hub
* scene_gameplay
* scene_collectionmanager
* scene_packs
* scene_tournament
* scene_friendly
* scene_fatal_error
* scene_draft
* scene_credits
* scene_reset
* scene_adventure
* scene_tavern_brawl

## `decks`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
deck_id           | decks       |  The “decks” feature provides data about the currently “visible” decks. | See [notes](#deck_id-note)    |   119.1 |
selected_deck     | selected_deck | The selected deck.  |  See [notes](#selected_deck-note)   |   119.1 |

#### *deck_id* note

Decks are “visible” when the local player starts a new game, during the “deck selection” screen, or when the local player enters the “My Collection” menu. The following data is being provided for each deck:
* Deck name / id
* Deck cards (array of cards)

“Card” structure:

`{
  "id" : "card_id" ,
  "count" : "int" , 
  "premiumCount" : "int"
}  `
* “id” – The [card's id](http://metastats.net/allcards/)
* “count” – The number of regular cards
* “premiumCount” – The number of premium (golden) cards

Example for a “deck” info-update structure:

`{"feature":"decks","category":"decks","key":"Basic Shaman",
"value":"{\"deck_id\":\"Basic Shaman\",
\"cards\":[{\"id\":\"CS1_042\",\"count\":\"1\",\"premiumCount\":\"0\"},
{\"id\":\"CS2_103\",\"count\":\"1\",\"premiumCount\":\"0\"},
...
{\"id\":\"LOOT_413\",\"count\":\"2\",\"premiumCount\":\"0\"},
{\"id\":\"UNG_923\",\"count\":\"1\",\"premiumCount\":\"0\"}],
\"deck_key\":\"deck_0\"}"} `

<b>Arena Decks</b>

Arena Decks, unlike standard decks, will be updated each time the local player chooses a card during the Arena Draft phase.

#### *selected_deck* note

The following data is provided when the local player selects a deck:

* “deck_id”
* “deck_name”
* “class_skin” – Deck image name

Example for a “selected deck” structure:

`{"feature":"decks","category":"selected_deck","key":"selected_deck","value":
"{\"deck_id\" : \"706741699\", \"deck_name\" : \"Basic Shaman\", \"class_skin\" : \"Thrall\" }`

## `match`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
localPlayer | playersInfo   |  See [notes](#localPlayer-note) |     |   123.0 |
opponent | playersInfo   |  See [notes](#opponent-note) |     |   123.0 |

#### *localPlayer* note

* "<b>name</b>" – name of local player
* "<b>standardRank</b>" – rank of the player in Constructed Standard mode (int)
* "<b>standardLegendRank</b>" – rank of the player in Constructed Standard mode, once he reached Legend (int)
* "<b>wildRank</b>" – rank of the player in Constructed Wild mode (int)
* "<b>wildLegendRank</b>"– rank of the player in Constructed Wild mode, once he reached Legend (int)
* "<b>cardBackId</b>" – ID of the card back used in the current game (int)
* "<b>cardId</b>" – ID of the card representing the hero (string)

`{"playersInfo":{"localPlayer":"{\"name\":\"ччггтуычб\",\"standardRank\":25,\"standardLegendRank\":0,
\"wildRank\":25,\"wildLegendRank\":0,\"cardBackId\":0,\"cardId\":\"HERO_02\"}"}`

#### *opponent* note

* "<b>name</b>" – name of the opponent
* "<b>standardRank</b>" – The rank of the player in Constructed, in Standard mode (int)
* "<b>standardLegendRank</b>"– The rank of the player in Constructed, in Standard mode, once he reached Legend (int)
* "<b>wildRank</b>" – The rank of the player in Constructed, in Wild mode (int)
* "<b>wildLegendRank</b> – The rank of the player in Constructed, in Wild mode, once he reached Legend (int)
* "<b>cardBackId</b>" – the ID of the card back used in the current game (int)
* "<b>cardId</b>" – the ID of the card representing the hero (string)

`{"playersInfo":{"opponent":"{\"name\":\"ПсевдоРыцарь\",\"standardRank\":25,\"standardLegendRank\":0,
\"wildRank\":25,\"wildLegendRank\":0,\"cardBackId\":0,\"cardId\":\"HERO_02\"}"}`

### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start| mode</br>`{"name":"match_start","data":"standard"}` | match starts	|  | 123.0  |
match_end  | null	 | match ends|  | 123.0  |

## `match`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
match_type        | match_info  | The type of the current match. |See [notes](#match_type-note)|   134.0 |

#### *match_type* note

:::tip
If you would like to know when the user is going to play the `battlegrounds` mode, you can listen to the match_type info update, and check If the value is `GT_BATTLEGROUNDS`.
:::

Data Example:

```json
{"info":{"match_info":{"match_type":"GT_CASUAL"}},"feature":"match"}

{"feature":"match","category":"match_info","key":"match_type","value":"GT_BATTLEGROUNDS"}
```


### Events

Event       | Event Data   | Fired When    | Notes              | Since GEP Ver. |
------------| -------------| --------------| ------------------ | --------------|
match_start| mode</br>`{"name":"match_start","data":"standard"}` | match starts	|  | 134.0  |
match_end   | null         | match ends   	|                   |     134.0     |
match_outcome| "WON" / "LOST" | match concludes	|               |     134.0     |

## `match_info`

### Info Updates

key               | Category    | Values                    | Notes                 | Since GEP Ver. |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
pseudo_match_id   | match_info  | The ID of the current match. |See [notes](#pseudo_match_id-note)|   134.0 |

#### *pseudo_match_id* note

This is an Overwolf generated code for internal use, not issued by the game or by Blizzard.

Data Example:

`{"info":{"match_info":{"pseudo_match_id":"5a7e3729-993c-414d-8e3f-592faeef81e7"}},"feature":"match_info"}`
