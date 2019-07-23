---
id:overwolf-games-events-hearthstone
title: Hearthstone Game Events
sidebar_label: Hearthstone Events
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
9898
:::

## Sample Apps
* [Hearthstone game events sample app](https://github.com/overwolf/hearthstone-events-sample-app)

## Available Features

* [scene_state](#scene_state)
* [collection](#collection)
* [decks](#decks)

## `collection`

### Info Updates

key               | Category    | Values                    | Notes                 | Since Version |
----------------- | ------------| ------------------------- | --------------------- | ------------- |
collection        | game_info   | The current cards collection of the local player. See [notes](#collection-note) |     |   117.1 |

#### *collection* note

<ul><li>The “collection”  data is available as soon as the player logins into Hearthstone.</li><li>The collection is getting updated when the user adds/removes a card.
  
Example for cards "collection":

`{ CS2_065: "{"id" : "CS2_065", "count" : "1", "premiumCount" : "0" }",
  CS1_113: "{"id" : "CS1_113", "count" : "2", "premiumCount" : "0" }",
  NEW1_011: "{"id" : "NEW1_011", "count" : "2", "premiumCount" : "0" }",
  EX1_131: "{"id" : "EX1_131", "count" : "1", "premiumCount" : "2" }",
  CS2_121: "{"id" : "CS2_121", "count" : "2", "premiumCount" : "0" }",
  …
}`

"Card" structure:

`{
  "id" : "card_id" ,
  "count" : "int" , 
  "premiumCount" : "int"
}  `

<ul><li>“id” – The card's id (http://metastats.net/allcards/)</li><li>“count” – The amount of regular cards</li><li>“premiumCount” – The amount of premium (golden) cards
