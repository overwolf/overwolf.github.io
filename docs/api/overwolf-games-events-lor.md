---
id: overwolf-games-events-lor
title: Legends of Runeterra Game Events
sidebar_label: Legends of Runeterra
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21620
:::

## Sample Apps
* [Legends of Runeterra game events sample app](https://github.com/overwolf/events-sample-apps)

An official Riot API is available at the following link - https://developer.riotgames.com/docs/lor.
If you have further requests for events that you require please contact us at developers@overwolf.com

## Available Features

* [game_client_data](#game_client_data)

## `game_client_data`

### Info Updates

key            | Category         | Values                               | Notes                            | Since GEP Ver. |
-------------- | -----------------| ------------------------------------ | -------------------------------- | -------------  | 
active_deck    | game_client_data | In-game data received by the client. | See [notes](#active_deck-note)   |   146.0.7      |
card_positions | game_client_data | In-game data received by the client. | See [notes](#card_positions-note)|   146.0.7      |
expeditions    | game_client_data | In-game data received by the client. | See [notes](#expeditions-note)   |   146.0.7      |
game_result    | game_client_data | In-game data received by the client. | See [notes](#game_result-note)   |   146.0.7      |

#### *active_deck* note

Describe the player's current deck in an active game.

Data Example:

```json
```

#### *card_positions* note

Determine the position of the cards in the collection, deck builder, Expedition drafts, and active games. returns the position of the cards at the time of the request.

Data Example:

```json
```

#### *expeditions* note

Determine the cards player drafts during an Expedition.
Returns a number of fields including the current state of the Expedition and a list of card codes that have been drafted.

Data Example:

```json
```

#### *game_result* note

Determine the result of the player's most recently completed game.
The request returns an int for GameID and a boolean for LocalPlayerWon.

Data Example:

```json
```