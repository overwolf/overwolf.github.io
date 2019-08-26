---
id: howto-check-events-status-from-app
title: Check The Events Status From Your App
sidebar_label: Check Event Status From App
---

As recommended in the user flow and error handling page, errors and warnings need to be communicated to your users.
A simple and accurate message regarding the state of the app will contribute to better user experience and saves time and bad user reviews.

## Possible events health statuses

Each game that supports Overwolf events (full list here) can be in 4 health states:

Status code | Description                                   |
----------- | ----------------------------------------------|
0           |  unsupported                                  |
1           |  green (Good to go)                           |
2           |  yellow (Some game events may be unavailable) |
3           |  red (Game events are currently unavailable)  |

Same for specific event health state: possible state values are green, yellow or red.

:::important
statuses are being updated automatically so there might be a small delay (10~ min) between the real-time status to our server status.
:::

## get the status for all games

If your app using Overwolf events, we highly recommend checking at least the general status with the above endpoint. If it’s Yellow or Red, you should drill down as needed, to query a specific event state – as your app may not function correctly and you should communicate it to your users.

To get the general event’s [health status of ALL](../status/all) the games you can query this endpoint, that returns a JSON with the supported games and their general health status:

```json
https://game-events-status.overwolf.com/gamestatus_prod.json
```

#### Data Example: Success

```json
[
    {"game_id":10878,"state":0},
    {"game_id":7764,"state":1},
    {"game_id":7314,"state":1},
    {"game_id":21216,"state":1},
    {"game_id":10844,"state":3,"maintenance_msg":"Events are disabled","disabled":true},
    {"game_id":10906,"state":1},
    {"game_id":10798,"state":1},
    {"game_id":6365,"state":1}
]
```

## get the status for specific game

If your app using Overwolf game events, we highly recommend to check the health status of these events and communicate it to your app users as needed.

To get the event’s health status for a specific game, you can query this endpoint, that returns a JSON with all the events statuses for a particular game:

```json
https://game-events-status.overwolf.com/[your Game ID]_prod.json
```

Note that you should add your Game ID to this endpoint.  
For example, to get the LOL (Game ID 5426) event’s health status, you should call:

```json
https://game-events-status.overwolf.com/5426_prod.json
```

#### Data Example: Success

```json
{
    "game_id": 5426,
    "state": 1,
    "features": [{
            "name": "abilities",
            "state": 1,
            "keys": [{
                "name": "ability",
                "type": 0,
                "state": 1
            }, {
                "name": "usedAbility",
                "type": 0,
                "state": 1
            }]
        }
    },
    {
        "name": "assist",
        "state": 1,
        "keys": [{
            "name": "assist",
            "type": 0,
            "state": 1
        }]
    }
    "name": "teams",
    "state": 1,
    "keys": [{
        "name": "teams",
        "type": 1,
        "state": 1,
        "category": "game_info"
    }]
}
```

