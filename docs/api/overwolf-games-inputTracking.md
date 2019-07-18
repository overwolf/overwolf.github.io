---
id: overwolf-games-inputTracking
title: overwolf.games.inputTracking API
sidebar_label: overwolf.games.inputTracking
---

Provides keyboard and mouse activity information while in game.

## Methods Reference

* [overwolf.games.inputTracking.getActivityInformation()](#getactivityinformationcallback)
* [overwolf.games.inputTracking.getMatchActivityInformation()](#getmatchactivityinformationcallback)
* [overwolf.games.inputTracking.getMousePosition()](#getmousepositioncallback)

## Events Reference

* [overwolf.games.inputTracking.onKeyUp](#onkeyup)
* [overwolf.games.inputTracking.onKeyDown](#onkeydown)
* [overwolf.games.inputTracking.onMouseUp](#onmouseup)
* [overwolf.games.inputTracking.onMouseDown](#onmousedown)

## getActivityInformation(callback)
#### Version added: 0.92

> Returns the input activity information.

Parameter | Type                  | Description                              |
--------- | ----------------------| ---------------------------------------- |
callback  | function              | A callback with the activity information |

#### Callback argument: Success

The information includes presses for keyboard/mouse, total session time, idle time and actions-per-minute. This information resets between game executions.

```json
{
  "status": "success",
  "activity": {
    "mouse": {
      "total": 34,
      "dist": 18822,
      "keys": {
        "M_Right": 29,
        "M_Left": 5
      }
    },
    "keyboard": {
      "total": 0,
      "keys": {}
    },
    "aTime": 2.86,
    "iTime": 4.63,
    "apm": 12
  }
}
```

## getMatchActivityInformation(callback)
#### Version added: 0.92

> Returns the input activity information (similar to [getActivityInformation()](#getactivityinformationcallback)), however, when this is supported, it will return data only for the latest match of the current game.

In order to get the activity information:

* The latest match must last more than 5 minutes.
* The user must click more than 30 times on the keyboard or mouse.

Parameter | Type                  | Description                              |
--------- | ----------------------| ---------------------------------------- |
callback  | function              | A callback with the activity information |

#### Callback argument: Success

```json
{  
   "status":"success",
   "activity":{  
      "mouse":{  
         "total":424,
         "dist":111176,
         "keys":{  
            "M_Right":413,
            "M_Left":11
         }
      },
      "keyboard":{  
         "total":83,
         "keys":{  
            "4":1,
            "Q":20,
            "W":20,
            "E":19,
            "R":10,
            "SPACE":4,
            "LCONTROL+TAB":2,
            "TAB":2,
            "ESCAPE":2,
            "LMENU+F4":1,
            "F":1,
            "OEM_3":1
         }
      },
      "aTime":4.36,
      "iTime":1.31,
      "apm":116
   }
}
```

## getMousePosition(callback)
#### Version added: 0.93

> Returns the input last mouse position in game.

The data includes the mouse position and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame).

Parameter | Type                  | Description                              |
--------- | ----------------------| ---------------------------------------- |
callback  | function              | A callback with the activity information |

#### Callback argument: Success

```json
{
    "status": "success",
    "mousePosition": {
        "x": 1741,
        "y": 656,
        "onGame": true,
        "handle": {
            "value": 526402
        }
    }
}
```

## onKeyUp

#### Version added: 0.78

> Fired when a keyboard key has been released.

The event information includes the virtual key code (key) and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame).

#### Event Data Example: Success

```json
{
    "key": "81",
    "onGame": true
}
```

## onKeyDown

#### Version added: 0.78

> Fired when a keyboard key has been pressed.

#### Event Data Example: Success

```json
{
    "key": "81",
    "onGame": true
}
```

## onMouseUp

#### Version added: 0.78

> Fired when a mouse key has been released.

The event information includes whether the left or white mouse button was clicked (button), x and y coordinates (x, y) and a boolean stating whether the keypress was on a game or on an Overwolf widget (onGame).

#### Event Data Example: Success

```json
{
    "button": "none",
    "x": 1002,
    "y": 821,
    "onGame": false
}
```

## onMouseDown

#### Version added: 0.78

> Fired a mouse key has been pressed.

#### Event Data Example: Success

```json
{
    "button": "xbutton2",
    "x": 177,
    "y": 529,
    "onGame": true
}
```