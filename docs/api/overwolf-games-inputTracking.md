---
id: overwolf-games-inputTracking
title: overwolf.games.inputTracking API
sidebar_label: overwolf.games.inputTracking
---

Provides keyboard and mouse activity information while the user is in-game.

## Methods Reference

* [overwolf.games.inputTracking.getActivityInformation()](#getactivityinformationcallback)
* [overwolf.games.inputTracking.getMatchActivityInformation()](#getmatchactivityinformationcallback)
* [overwolf.games.inputTracking.getMousePosition()](#getmousepositioncallback)

## Events Reference

* [overwolf.games.inputTracking.onKeyUp](#onkeyup)
* [overwolf.games.inputTracking.onKeyDown](#onkeydown)
* [overwolf.games.inputTracking.onMouseUp](#onmouseup)
* [overwolf.games.inputTracking.onMouseDown](#onmousedown)

## Types Reference

* [overwolf.games.inputTracking.InputActivity](#inputactivity-object) Object
* [overwolf.games.inputTracking.MousePosition](#mouseposition-object) Object
* [overwolf.games.inputTracking.GetActivityResult](#getactivityresult-object) Object
* [overwolf.games.inputTracking.GetMousePositionResult](#getmousepositionresult-object) Object


## getActivityInformation(callback)
#### Version added: 0.92

> Returns input activity information.

:::warning
Some functionality of this function might not work as intended. Instead, please use [getMatchActivityInformation()](#getmatchactivityinformationcallback).
:::

Parameter | Type                                 | Description                              |
--------- | -------------------------------------| ---------------------------------------- |
callback  | [(Result:GetActivityResult)](#getactivityresult-object) => void | Callback with input activity information |

#### Notes

* The information includes key presses and clicks for keyboard/mouse, total session time, idle time and overall actions-per-minute. This information resets between game executions.
* When a new game starts, we reset the entire session - when the game ends, the last activity information is available until the next game session.
* You have to play for 5 minutes and have at least 30 keys to be eligible.

## getMatchActivityInformation(callback)
#### Version added: 0.92

> Returns input activity information (similar to [getActivityInformation()](#getactivityinformationcallback)), however, when this is supported, it will return data only for the latest match of the current game.

Parameter | Type                  | Description                              |
--------- | ----------------------| ---------------------------------------- |
callback  | [(Result:GetActivityResult)](#getactivityresult-object) => void | Callback with input activity information |

In order to get the information:

* The latest match must have lasted for more than 5 minutes.
* The user must have clicked more than 30 times on either keyboard or mouse.

## getMousePosition(callback)
#### Version added: 0.93

> Returns the last mouse position in game.

The data includes the mouse position and a boolean stating whether the click was in the game or on an Overwolf widget (onGame).

Parameter | Type                  | Description                              |
--------- | ----------------------| ---------------------------------------- |
callback  | [(Result:GetMousePositionResult)](#getmousepositionresult-object) => void | Callback with input activity information |

## onKeyUp

#### Version added: 0.78

> Fired when a keyboard key has been released.

The event information includes the virtual key code (key) and a boolean stating whether the keypress was in the game or on an Overwolf widget (onGame).

#### Event Data Example: Success

```json
{
    "key": "81",
    "onGame": true
}
```

#### Using the onKeyUp event

We will use it to catch the user's keypress release, for example, catch the tab release:

```js
overwolf.games.inputTracking.onKeyUp.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key released: " + JSON.stringify(info));
});
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

#### Using the onKeyDown event

We can use it to catch the user's keypress, for example, catch the tab keypress:

```js
overwolf.games.inputTracking.onKeyDown.addListener(function(info) {
    if(info.key == "9") //9=tab
		console.log("Tab key pressed: " + JSON.stringify(info));
});
```

The event also returns a boolean stating whether that keypress happened in the game or outside of it.

Note that it's not recommended to use this method (catching user keypresses) for hotkeys.  
For that, use the [overwolf.settings.hotkeys](overwolf-settings-hotkeys) API.

## onMouseUp

#### Version added: 0.78

> Fired when a mouse key has been released.

The event information includes whether the left or right mouse button was clicked (button), x and y coordinates (x, y) and a boolean stating whether the keypress was in the game or on an Overwolf widget (onGame).

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

> Fired when a mouse key has been pressed.

#### Event Data Example: Success

```json
{
    "button": "xbutton2",
    "x": 177,
    "y": 529,
    "onGame": true
}
```

## InputActivity Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
aTime              | number   |                                             |
iTime              | number   |                                             |
apm                | boolean  |                                             |   
mouse              | object   | { total: number, dist: number, keys: any }  |   
keyboard           | object   | { total: number, keys: any }                |   

## MousePosition Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
x                  | number   |                                             |
y                  | number   |                                             |
onGame             | boolean  |                                             |   
handle             | object   |  { value: number }                          |   

## GetActivityResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
success            | boolean  |                                             |
error              | string   | null if success is true                     |
activity           | [InputActivity](#inputactivity-object) object |  the input  activity information |   

#### Example data: Success

```json
{  
   "success":true,
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

## GetMousePositionResult Object

Parameter          | Type     | Description                                 |
-------------------| ---------| ------------------------------------------- |
success            | boolean  |                                             |
error              | string   | null if success is true                     |
mousePosition      | [MousePosition](#mouseposition-object) object |  the input  activity information |   

#### Example data: Success

```json
{
    "success": true,
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
