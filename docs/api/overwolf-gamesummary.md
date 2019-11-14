---
id: overwolf-gamesummary
title: overwolf.gamesummary API
sidebar_label: overwolf.gamesummary
---

Provides information about the currently running game.

:::important
This API is accessible only if your app is hosted in the Game Summary container.  
Read more in our [hosted apps](../topics/hosted-apps) guide.
:::

## Methods Reference

* [overwolf.gamesummary.getCurrentMatch()](#getcurrentmatchcallback)

## Events Reference

* [overwolf.gamesummary.onMatchChanged](#onmatchchanged)

## getCurrentMatch(callback)
#### Version added: 0.137

> Returns the current game and match. If no match is selected yet, returns null.

Parameter | Type                  | Description                                                                            |
--------- | ----------------------| -------------------------------------------------------------------------------------- |
callback  | function              | A callback function                                                                    |


## onMatchChanged
#### Version added: 0.137

> Fires when the user selects a new match.
