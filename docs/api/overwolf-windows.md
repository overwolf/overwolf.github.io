---
id: overwolf-windows
title: overwolf.windows API
sidebar_label: overwolf.windows
---

Use this API to create, interact and modify your app’s windows.

:::important
Please make sure to read our guide on [how to use Overwolf windows](../topics/using-overwolf-windows), to learn everything about Overwolf app windows, and how to use them properly and efficiently in your app.
:::

## Methods Reference

* [overwolf.windows.getMainWindow()](#getmainwindow)
* [overwolf.windows.getCurrentWindow()](#getcurrentwindowcallback)
* [overwolf.windows.obtainDeclaredWindow()](#obtaindeclaredwindowwindowname-callback)
* [overwolf.windows.obtainDeclaredWindow()](#obtaindeclaredwindowwindowname-overridesetting-callback)
* [overwolf.windows.obtainDeclaredWindow()](#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback)
* [overwolf.windows.dragMove()](#dragmovewindowid-callback)
* [overwolf.windows.dragResize()](#dragresizewindowid-edge)
* [overwolf.windows.dragResize()](#dragresizewindowid-edge-contentrect)
* [overwolf.windows.dragResize()](#dragresizewindowid-edge-rect-callback)
* [overwolf.windows.changeSize()](#changesizewindowid-width-height-callback)
* [overwolf.windows.changePosition()](#changepositionwindowid-left-top-callback)
* [overwolf.windows.close()](#closewindowid-callback)
* [overwolf.windows.minimize()](#minimizewindowid-callback)
* [overwolf.windows.maximize()](#maximizewindowid-callback)
* [overwolf.windows.restore()](#restorewindowid-callback)
* [overwolf.windows.restore()](#restorewindowname-callback)
* [overwolf.windows.hide()](#hidewindowid-callback)
* [overwolf.windows.getWindowState()](#getwindowstatewindowid-callback)
* [overwolf.windows.getWindowsStates()](#getwindowsstatescallback)
* [overwolf.windows.openOptionsPage()](#openoptionspagecallback)
* [overwolf.windows.setDesktopOnly()](#setdesktoponlywindowid-shouldbedesktoponly-callback)
* [overwolf.windows.setRestoreAnimationsEnabled()](#setrestoreanimationsenabledwindowid-shouldenableanimations-callback)
* [overwolf.windows.setTopmost()](#settopmostwindowid-shouldbetopmost-callback)
* [overwolf.windows.sendToBack()](#sendtobackwindowid-callback)
* [overwolf.windows.sendMessage()](#sendmessagewindowid-messageid-messagecontent-callback)
* [overwolf.windows.setWindowStyle()](#setwindowstylewindowid-style-callback)
* [overwolf.windows.removeWindowStyle()](#removewindowstylewindowid-style-callback)
* [overwolf.windows.getOpenWindows()](#getopenwindowscallback)
* [overwolf.windows.setMute()](#setmutemute-callback)
* [overwolf.windows.muteAll()](#muteallcallback)
* [overwolf.windows.isMuted()](#ismutedcallback)
* [overwolf.windows.isWindowVisibleToUser()](#iswindowvisibletousercallback)
* [overwolf.windows.bringToFront()](#bringtofrontwindowid-callback)
* [overwolf.windows.bringToFront()](#bringtofrontcallback)
* [overwolf.windows.bringToFront()](#bringtofrontgrabfocus-callback)
* [overwolf.windows.bringToFront()](#bringtofrontwindowid-grabfocus-callback)
* [overwolf.windows.setPosition()](#setpositionproperties-callback)
* [overwolf.windows.setPosition()](#setpositionwindowid-properties-callback)
* [overwolf.windows.displayMessageBox()](#displaymessageboxmessageparams-callback)
* [overwolf.windows.isAccelreatedOSR()](#isaccelreatedosrcallback)
* [overwolf.windows.setMinSize()](#setminsizewindowid-width-height-callback)
* [overwolf.windows.flash()](#flashwindowid-behaviorcallback)


## Events Reference

* [overwolf.windows.onMainWindowRestored](#onmainwindowrestored)
* [overwolf.windows.onStateChanged](#onstatechanged)
* [overwolf.windows.onMessageReceived](#onmessagereceived)
* [overwolf.windows.onAltF4Blocked](#onaltf4blocked)
* [overwolf.windows.onScreenPropertyChanged](#onscreenpropertychanged)

## Types Reference

* [overwolf.windows.ODKWindow](#odkwindow-object) Object
* [overwolf.windows.WindowProperties](#windowproperties-object) Object
* [overwolf.windows.RelativeTo](#relativeto-object) Object
* [overwolf.windows.SetWindowPositionProperties](#setwindowpositionproperties-object) Object
* [overwolf.windows.MessageBoxParams](#messageboxparams-object) Object
* [overwolf.windows.ODKRect](#odkrect-object) Object
* [overwolf.windows.enums.MessagePromptIcon](#messageprompticon-enum) Enum
* [overwolf.windows.enums.WindowDragEdge](#windowdragedge-enum) Enum
* [overwolf.windows.enums.WindowStyle](#windowstyle-enum) Enum
* [overwolf.windows.enums.FlashBehavior](#flashbehavior-enum) Enum
* [overwolf.windows.onScreenPropertyChangedEvent](#onscreenpropertychangedevent-object) Object

## getMainWindow()
#### Version added: 0.113

> Returns a window object of the index page.

This function allows you to get direct access to your main index page (which should be a controller/background page) and it’s HTML Window object (and thus any JS function or DOM element). Read more in the ["Communication between windows"](../topics/communicating-between-windows) section.

## getCurrentWindow(callback)
#### Version added: 0.78

> Calls the given callback function with the current window object as a parameter.

Parameter | Type                       | Description                                                                            |
--------- | ---------------------------| -------------------------------------------------------------------------------------- |
callback  | function                   | A callback function which will be called with the current window object as a parameter |

#### Callback argument: Success

A callback function which will be called with the status of the request and a [ODKWindow](#odkwindow-object) Object.
* The callback param "stateEx" returns one of these states:  
  [closed | minimized | hidden | normal | maximized].

```json
{
    "status": "success",
    "window": {
        "id": "Window_Extension_hffhbjnafafjnehejohpkfhjdenpifhihebpkhni",
        "name": "index",
        "width": 600,
        "height": 600,
        "top": 153,
        "left": 417,
        "isVisible": true,
        "state": "Minimized", //deprecated and kept only for backward compatibility
        "stateEx": "hidden", //always use this param to get the state of the window
        "Parent": null
    }
```

## obtainDeclaredWindow(windowName, callback)
#### Version added: 0.78

> Creates an instance of your window (the window’s name has to be declared in the manifest.json) or returns a window by the window name.

Parameter | Type                       | Description                                                                            |
--------- | ---------------------------| -------------------------------------------------------------------------------------- |
windowName| string                     | The name of the window that was declared in the data.windows section in the manifest   |
callback  | function                   | A callback function which will be called with the current window object as a parameter |

#### Callback argument: Success

A callback function which will be called with the status of the request and a [ODKWindow](#odkwindow-object) Object.
* The callback param "stateEx" returns one of these states:  
  [closed | minimized | hidden | normal | maximized].

```json
{
    "status": "success",
    "window": {
        "id": "Window_Extension_hffhbjnafafjnehejohpkfhjdenpifhihebpkhni",
        "name": "index",
        "width": 600,
        "height": 600,
        "top": 153,
        "left": 417,
        "isVisible": true,
        "state": "Minimized", //deprecated and kept only for backward compatibility
        "stateEx": "hidden", //always use this param to get the state of the window
        "Parent": null
    }
```

## obtainDeclaredWindow(windowName, overrideSetting, callback)
#### Version added: 0.78

> Creates an instance of your window (the window’s name has to be declared in the manifest.json) or returns a window by the window name.

Parameter       | Type                                                | Description                                                                            |
--------------- | ----------------------------------------------------| -------------------------------------------------------------------------------------- |
windowName      | string                                              | The name of the window that was declared in the data.windows section in the manifest   |
overrideSetting	| [WindowProperties](#windowproperties-object) Object | Override manifest settings                                                             |
callback        | function                                            | A callback function which will be called with the current window object as a parameter |

## obtainDeclaredWindow(windowName, useDefaultSizeAndLocation, callback)
#### Version added: 0.136

> Creates an instance of your window (the window’s name has to be declared in the manifest.json) or returns a window by the window name.

Parameter                 | Type                                                | Description                                                                            |
------------------------- | ----------------------------------------------------| -------------------------------------------------------------------------------------- |
windowName                | string                                              | The name of the window that was declared in the data.windows section in the manifest   |
useDefaultSizeAndLocation	| [DefaultSizeAndLocation](#defaultsizeandlocation-object) Object | Enable the manifest size and position settings                            |
callback                  | function                                            | A callback function which will be called with the current window object as a parameter |

### Usage example

```js
overwolf.windows.obtainDeclaredWindow("main", {useDefaultSizeAndLocation: true}, console.log)
```

#### Callback argument: Success

A callback function which will be called with the status of the request and a [ODKWindow](#odkwindow-object) Object.
* The callback param "stateEx" returns one of these states:  
  [closed | minimized | hidden | normal | maximized].

```json
{
    "status": "success",
    "window": {
        "id": "Window_Extension_hffhbjnafafjnehejohpkfhjdenpifhihebpkhni",
        "name": "index",
        "width": 600,
        "height": 600,
        "top": 153,
        "left": 417,
        "isVisible": true,
        "state": "Minimized", //deprecated and kept only for backward compatibility
        "stateEx": "hidden", //always use this param to get the state of the window
        "Parent": null
    }
```

## dragMove(windowId, callback)
#### Version added: 0.78

> Start dragging a window.

Parameter            | Type        | Description                                           |
-------------------- | ------------| ------------------------------------------------------|
windowId	           | string      | The id or name of the window to drag                  |
callback (Optional)  | function    | A callback which is called when the drag is completed |

:::note
When you dragMove a **native window** between monitors with different DPIs, the window will automatically resize according to the new DPI.
:::

#### Callback argument: Success

```json
{
    "status": "success",
    "horizontalChange": -51,
    "verticalChange": 6
}
```

## dragResize(windowId, edge)
#### Version added: 0.100

> Start resizing the window from a specific edge or corner.

Parameter            | Type                                         | Description                                           |
-------------------- | ---------------------------------------------| ------------------------------------------------------|
windowId	         | string                                       | The id or name of the window to resize                |
edge                 | [WindowDragEdge](#windowdragedge-enum) Enum  | The edge or corner from which to resize the window    |

## dragResize(windowId, edge, contentRect)
#### Version added: 0.100

> Start resizing the window from a specific edge or corner.

Parameter            | Type                                         | Description                                                                    |
-------------------- | ---------------------------------------------| -------------------------------------------------------------------------------|
windowId	           | string                                         | The id or name of the window to resize                                       |
edge                 | [WindowDragEdge](#windowdragedge-enum) Enum  | The edge or corner from which to resize the window                             |
contentRect	         | [ODKRect](#odkrect-object) Object            | The real content of the window (for the ingame drawing resizing white area)    |

## dragResize(windowId, edge, rect, callback)
#### Version added: 0.100

> Start resizing the window from a specific edge or corner.

Parameter            | Type                                         | Description                                                                    |
-------------------- | ---------------------------------------------| -------------------------------------------------------------------------------|
windowId	           | string                                       | The id or name of the window to resize                                         |
edge                 | [WindowDragEdge](#windowdragedge-enum) Enum  | The edge or corner from which to resize the window                             |
rect    	           | [ODKRect](#odkrect-object) Object            | The real content of the window (for the ingame drawing resizing white area)    |
callback             | function                                     | Will be called when the resizing process is completed                          |

## changeSize(windowId, width, height, callback)
#### Version added: 0.78

> Changes the window size to the new width and height, in pixels.

Parameter           | Type       | Description                                                                                  |
--------------------| -----------| ---------------------------------------------------------------------------------------------|
windowId	          | string     | The id or name of the window to resize                                                       |
width	              | int        | The edge or corner from which to resize the window                                           |
height	    	      | int        | The real content of the window (for the ingame drawing resizing white area)                  |
callback (Optional) | function   | A callback which is called when the size change is completed with the status of the request  |

#### Callback argument: Success

```json
{ "status": "success" }
```

## changePosition(windowId, left, top, callback)
#### Version added: 0.78

> Changes the window position in pixels from the top left corner.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     |The id or name of the window for which to change the position                                   |
left		            | int        | The new window position on the X axis in pixels from the left                                  |
top		    	        | int        | The new window position on the Y axis in pixels from the top                                   |
callback (Optional) | function   |A callback which is called when the position change is completed with the status of the request |

#### Callback argument: Success

```json
{ "status": "success" }
```

## close(windowId, callback)
#### Version added: 0.78

> Closes the window.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     |The id or name of the window for which to change the position                                   |
callback (Optional) | function   | Called after the window is closed                                                              |

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```

## minimize(windowId, callback)
#### Version added: 0.78

> Minimizes the window.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     | The id or name of the window to minimize                                                       |
callback (Optional) | function   | Called after the window is minimized                                                           |

**Note** that this function will not work if the manifest [resizable flag](https://overwolf.github.io/docs/api/manifest-json#windows-resizable) is set to `false`.

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```

## maximize(windowId, callback)
#### Version added: 0.81

> Maximize the window.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     | The id or name of the window to maximize                                                         |
callback (Optional) | function   | Called after the window is maximized                                                           |

#### Notes

* This function will not work if the manifest [resizable flag](https://overwolf.github.io/docs/api/manifest-json#windows-resizable) is set to `false`.

* If you would like to "unmaximize" the window after calling "maximize()", you can call [window.restore()](#restorewindowid-callback), to restore the window to the previous size/position. 

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```

## restore(windowId, callback)
#### Version added: 0.78

> Restores a minimized/maximized/hidden window.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     | The id of the window to restore                                                                |
callback (Optional) | function   | Called after the window is restored                                                            |

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```
Note: When restoring a minimized/maximized window, it restores the window to the previous size/position.

## restore(windowName, callback)
#### Version added: 0.78

> Restores a minimized/maximize/hidden window.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowName	        | string     | The id of the window to restore                                                                |
callback (Optional) | function   | Called after the window is restored                                                            |

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```
Note: When restoring a minimized/maximized window, it restores the window to the previous size/position.

## hide(windowId, callback)
#### Version added: 0.108

> Hides the window from screen and taskbar.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	        | string     | The id or name of the window to hide                                                           |
callback            | function   |Called after the window was hidden                                                              |

## getWindowState(windowId, callback)
#### Version added: 0.85

> Returns the state of the window (normal/minimized/maximized/closed).

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	          | string     | The id or name of the window to restore                                                        |
callback            | function   | Called with the window state                                                                   |

#### Callback argument: Success

Note: the callback param "window_state_ex" returns one of these states: [closed | minimized | hidden | normal | maximized]

```json
{
    "status": "success",
    "window_id": "Window_Extension_onemchifcjibofkgemelmnjeialamgnigfpomeih",
    "window_state": "minimized", //deprecated and kept only for backward compatibility
    "window_state_ex": "hidden" //always use this param to get the state of the window.
}
```

## getWindowsStates(callback)
#### Version added: 0.90

> Returns the state of all windows owned by the app (normal/minimized/maximized/closed).

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
callback            | function   | Called with an array containing the states of the windows                                      |

#### Callback argument: Success

```json
{
    "status": "success",
    "result": {
        "index": "normal",
        "settings": "minimized",
        "notice": "closed"
    }
}
```

## openOptionsPage(callback)
#### Version added: 0.89

> Opens the options page specified in the manifest file. Does nothing if no such page has been specified.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	        | string     | The id or name of the window to restore                                                        |
callback            | function   | A callback function which will be called with the status of the request                        |

#### Callback argument: Success

```json
{ "status": "success" }
```

## setDesktopOnly(windowId, shouldBeDesktopOnly, callback)
#### Version added: 0.89

> Sets whether the window should be injected to games or not.

Parameter           | Type       | Description                                                                                    |
--------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	        | string     | The id or name of the window to set                                                            |
shouldBeDesktopOnly	| bool       |                                                                                                |
callback            | function   | A callback function which will be called with the status of the request                        |

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```

## setRestoreAnimationsEnabled(windowId, shouldEnableAnimations, callback)
#### Version added: 0.89

> Sets whether the window should have minimize/restore animations while in game.

Parameter              | Type       | Description                                                                                    |
-----------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	           | string     | The id or name of the window to set                                                            |
shouldEnableAnimations | bool       |                                                                                                |
callback               | function   | A callback function which will be called with the status of the request                        |

#### Callback argument: Success

```json
{
  "status": "success",
  "window_id": "Window_Extension_mhlpbbigoglahfnkpekoamfknlnaneebgodenaam"
}
```

## setTopmost(windowId, shouldBeTopmost, callback)
#### Version added: 0.89

> Change the window’s topmost status. Handle with care as topmost windows can negatively impact user experience.

Parameter              | Type       | Description                                                                                    |
-----------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	           | string     | The id or name of the window to set                                                            |
shouldBeTopmost	       | bool       |                                                                                                |
callback               | function   | A callback function which will be called with the status of the request                        |

#### Callback argument: Success

```json
{ "status": "success" }
```

## sendToBack(windowId, callback)
#### Version added: 0.89

> Sends the window to the back.

Parameter              | Type       | Description                                                                                    |
-----------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	           | string     | The id or name of the window to set                                                            |
shouldBeTopmost	       | bool       |                                                                                                |
callback               | function   | A callback function which will be called with the status of the request                        |

#### Callback argument: Success

```json
{ "status": "success" }
```

## sendMessage(windowId, messageId, messageContent, callback)
#### Version added: 0.92

> Sends a message to an open window.  
The window receiving the message needs to listen on the [onMessageReceived](#onmessagereceived) event.

:::warning
Using sendMessage is not our suggested choice for communication between windows since it might not work on some occasions (for example, when sending extremely big messages).  
Read more in the ["Communication between windows"](#) section.
:::

Parameter              | Type       | Description                                                                                    |
-----------------------| -----------| -----------------------------------------------------------------------------------------------|
windowId	             | string     | The id or name of the window to send the message to                                            |
messageId		           | string     | A message id                                                                                   |
messageContent	       | Object     | The content of the message                                                                     |
callback               | function   | A callback function which will be called with the status of the request                        |

#### Usage example

```js
overwolf.windows.sendMessage('secondWindow', '1', 'hello second window', ()=>{console.log('Message sent to window "secondWindow"')})
```

#### Callback argument: Success

```json
{ "status": "success" }
```

## setWindowStyle(windowId, style, callback)
#### Version added: 0.98

> Add Window In Game styling (for example, allowing mouse clicks to be passed through the window into the game)

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
windowId	           | string                                | The id or name of the window to style                                     |
style			       | [WindowStyle](#windowstyle-enum) Enum | The style to be added                                                     |
callback               | function                              | A callback function which will be called with the status of the request   |

#### Callback argument: Success

```json
{ "status": "success" }
```

## removeWindowStyle(windowId, style, callback)
#### Version added: 0.98

> Remove window style.

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
windowId	           | string                                | The id or name of the window to style                                     |
style			       | [WindowStyle](#windowstyle-enum) Enum | The style to be remvoed                                                   |
callback               | function                              | A callback function which will be called with the status of the request   |

#### Callback argument: Success

```json
{ "status": "success" }
```

## getOpenWindows(callback)
#### Version added: 0.92

> Returns an array of all open windows as objects. The objects can be manipulated like any other window.

:::warning
we highly recommend not to use getOpenWindows() for windows communication.  
Please read the ["Communication between windows"](#) section for more info.
:::

Parameter              | Type                                  | Description                                                                                       |
-----------------------| --------------------------------------| --------------------------------------------------------------------------------------------------|
callback               | function                              | A callback function which will be called with a map object of (window-name, Window Object) items  |

## setMute(mute, callback)
#### Version added: 0.102

> Set the current window mute state (on/off).

Parameter              | Type                                  | Description                                                                                       |
-----------------------| --------------------------------------| --------------------------------------------------------------------------------------------------|
mute	               | bool                                  | Window mute state (true - mute is on, false - mute is off)                                        |
callback               | function                              | Called with the result of the request                                                             |

## muteAll(callback)
#### Version added: 0.102

> Mutes all sound sources for the current window.

Parameter              | Type                                  | Description                                                                                       |
-----------------------| --------------------------------------| --------------------------------------------------------------------------------------------------|
callback               | function                              | Called with the result of the request                                                             |

## isMuted(callback)
#### Version added: 0.102

> Get the window’s mute state (true/false).

Parameter              | Type                                  | Description                                                                                       |
-----------------------| --------------------------------------| --------------------------------------------------------------------------------------------------|
callback               | function                              | Called with the result of the request `{"muted": true/false}`                                     |

## isWindowVisibleToUser(callback)
#### Version added: 0.102

> Get the Visibility state of the window.

:::warning
 Used only with windows without a transparent border.
:::

Parameter              | Type                                  | Description                                                                                       |
-----------------------| --------------------------------------| --------------------------------------------------------------------------------------------------|
callback               | function                              | Called with the result of the request `{"muted": true/false}`                                     |

#### Callback argument: Success

A callback function which will be called with the status of the request.

* “hidden” – The window is completely hidden.
* “fully” – The window is fully visible to the user.
* “partial” – The window is partially visible to the user (and partially covered by other window/s).

```json
{"status": "success","visible": "hidden" | "fully" | "partial"}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "reason": "something went wrong..." }
```

## bringToFront(windowId, callback)
#### Version added: 0.119

> Brings the requested window to the front.

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
windowId	           | string                                | The id or name of the window                                              |
callback               | function                              | Called with the result of the request                                     |

## bringToFront(callback)
#### Version added: 0.119

> Brings this window to the front.

Note: Using this method while you are playing a game in a fullscreen mode, will cause the game to auto-minimize (as the calling app window gets the front focus).


Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
callback               | function                              | Called with the result of the request                                     |

## bringToFront(grabFocus, callback)
#### Version added: 0.124

> Brings this window to the front.

Note: Using this method while you are playing a game in a fullscreen mode, will cause the game to auto-minimize (as the calling app window gets the front focus).

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
grabFocus		       | bool                                  | window will take system focus                                             |
callback               | function                              | Called with the result of the request                                     |

## bringToFront(windowId, grabFocus, callback)
#### Version added: 0.124

> Brings a window to the front.

Note: Using this method while you are playing a game in a fullscreen mode, will cause the game to auto-minimize (as the calling app window gets the front focus).

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
windowId	           | string                                | The id or name of the window                                              |
grabFocus		       | bool                                  | window will take system focus                                             |
callback               | function                              | Called with the result of the request                                     |

## setPosition(properties, callback)
#### Version added: 0.123

> Change this window location in the opened windows stack.

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
properties	           | [SetWindowPositionProperties](#setwindowpositionproperties-object) Object  | The desired location in the windows stack    |
callback               | function                              | Called with the result of the request                                     |

#### Usage Example

Using the following code will place your app window in front of League of Legends’ client window:

```javascript
overwolf.windows.setPosition({
    "relativeTo": {
        "processName": "LeagueClientUx",
        "windowTitle": "League of Legends"
    },
    "insertAbove": true,
    }, 
    console.log);
```

## setPosition(windowId, properties, callback)
#### Version added: 0.123

> Change a window location in the opened windows stack.

Parameter              | Type                                  | Description                                                               |
-----------------------| --------------------------------------| --------------------------------------------------------------------------|
windowId	           | string                                | The id or name of the window                                              |
properties	           | [SetWindowPositionProperties](#setwindowpositionproperties-object) Object  | The desired location in the windows stack    |
callback               | function                              | Called with the result of the request                                     |

## displayMessageBox(messageParams, callback)
#### Version added: 0.119

> Displays a customized popup message prompt.

Parameter              | Type                                              | Description                                                               |
-----------------------| --------------------------------------------------| --------------------------------------------------------------------------|
messageParams		   | [MessageBoxParams](#messageboxparams-object) Object  | The type and texts that the message prompt will have                      |
callback               | function                                          | Returns the user's action (confirmed = true / false)                      |

## isAccelreatedOSR(callback)
#### Version added: 0.126

> Is the current window accelerated and is OSR |GPU| acceleration is supported for this machine.

:::info
This function name is misspelled. It is kept this way for backwards compatibility.
:::

Parameter              | Type                                              | Description                                                               |
-----------------------| --------------------------------------------------| --------------------------------------------------------------------------|
callback               | function                                          | Returns the user's action (confirmed = true / false)                      |

#### Callback argument: Success

A callback function which will be called with the status of the request

```json
{"status":"success","accelerated":false,"supported":true}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "error": "something went wrong..." }
```

## setMinSize(windowId, width, height, callback)
#### Version added: 0.132

> Overrides the window's defined minimum size.

Parameter              | Type                                              | Description                                                               |
-----------------------| --------------------------------------------------| --------------------------------------------------------------------------|
windowId		           | string                                            | The id of the window                                                      |
width		               | int                                               | The new minimum width                                                     |
height		             | int                                               | The new minimum height                                                    |
callback               | function                                          | Called with the result of the request                                     |

## flash(windowId, behavior,callback)
#### Version added: 0.146

> Flashes a window.

Parameter              | Type                                              | Description                                                               |
-----------------------| --------------------------------------------------| --------------------------------------------------------------------------|
windowId		           | string                                            | The id of the window to flash                                             |
behavior               | [FlashBehavior](#flashbehavior-enum) enum         | Defines window flashing behavior                                          |
callback               | function                                          | Called after the window is flashed                                        |

## onMainWindowRestored
#### Version added: 0.85

> Fired when the main window is restored.

## onStateChanged
#### Version added: 0.85

> Fired when the state of a window is changed.

#### Event Data Example: Success

```json
{  
   "window_id":"Window_Extension_mafljdlldoddlbenhhdndoamnaficdiphpnjdlce_main",
   "window_state":"normal",
   "window_previous_state":"minimized",
   "app_id":"mafljdlldoddlbenhhdndoamnaficdiphpnjdlce",
   "window_name":"main"
}
```

## onMessageReceived
#### Version added: 0.85

> Fired when this window received a message.

#### Event Data Example: Success

```json
{
  "id": "1",
  "content": "hello"
}
```

#### Usage example

```js
overwolf.windows.onMessageReceived.addListener((message)=>{
    if(message.id ===  '1'){
      console.log('Message received', message.content)
  }
})
```

## onAltF4Blocked
#### Version added: 0.85

> Fired when the user was prevented from closing a window using Alt+F4.

## onScreenPropertyChanged
#### Version added: 0.143

> Fired when native window (or OSR on desktop) moved to other monitor when current monitor resolution changed, with the following structure: [overwolf.windows.onScreenPropertyChangedEvent](#onscreenpropertychangedevent-object) Object

## ODKWindow Object
#### Version added: 0.78

> An object that holds information about a requested window.

Parameter | Type   | Description                                                          |
--------- | -------| -------------------------------------------------------------------- |
id        | string | Gets the window ID                                                   |
name      | string | Gets the window name as declared in the manifest                     |
width     | int    | Gets the window width in pixels                                      |
height    | int    | Gets the window height in pixels                                     |
top       | int    | Gets the window Y coordinate in pixels from the top of the screen    |
left      | int    | Gets the window X coordinate in pixels from the top of the screen    |
isVisible | book   | Indicates if the window is currently visible or minimized            |
parent    | string | The parent window id                                                 |

#### Object Data Example

```json
"window": {
    "id": "Window_Extension_hffhbjnafafjnehejohpkfhjdenpifhihebpkhni",
    "name": "index",
    "width": 600,
    "height": 600,
    "top": 153,
    "left": 417,
    "isVisible": true,
    "Parent": null
}
```

## WindowProperties Object
#### Version added: 0.118

> An object that allows to override the manifest.json requested window settings.

Parameter           | Type   | Description                                                          |
------------------- | -------| -------------------------------------------------------------------- |
nativeWindow        | bool   |                                                                      |
enablePopupBlocker  | bool   |                                                                      |

## DefaultSizeAndLocation Object
#### Version added: 0.136

> An object that Enable the manifest size and position settings (default is false).

Parameter                   | Type   | Description                                                          |
--------------------------- | -------| -------------------------------------------------------------------- |
useDefaultSizeAndLocation   | bool   |                                                                      |

The default behaviour of OW is to "remember" the last size and position of a window, before it closes.
When `useDefaultSizeAndLocation` is set to true, the window will be created using the default (manifest) size and location, rather than the saved setting (if one exists).

If there is no "start_position" property (size and position) for a window in the manifest, it will default to 0,0.


## MessageBoxParams Object
#### Version added: 0.119

> Defines parameters required for displaying a message box.

Parameter            | Type                                               | Description                              |
-------------------- | ---------------------------------------------------| ---------------------------------------- |
message_title        | string                                             | The message prompt title text            |
message_body         | string                                             | The message prompt body text             |
confirm_button_text  | string                                             | The left (confirmation) button’s text    |
cancel_button_text   | string                                             | The right (cancellation) button’s text   |
message_box_icon     | [MessagePromptIcon](#messageprompticon-enum) enum  | The icon of the message prompt           |

## RelativeTo Object
#### Version added: 0.123

> Data to find OS relative window.

Parameter            | Type                              | Description                              |
-------------------- | ----------------------------------| ---------------------------------------- |
processName          | string                            | Relative window process name             |
windowTitle          | string                            | The window title                         |

## SetWindowPositionProperties Object
#### Version added: 0.123

> Data to find OS relative window.

Parameter            | Type                                    | Description                              |
-------------------- | ----------------------------------------| ---------------------------------------- |
relativeTo           | [RelativeTo](#relativeto-object) Object | Relative window data to search for       |
windowTitle          | string                                  | The window title                         |

## ODKRect Object
#### Version added: 0.100

> An object that holds information about the real content of the window (for the ingame drawing resizing white area).

Parameter   | Type    | Description    |
------------| --------| ---------------|
top         | int     |                |
left        | int     |                |
width       | int     |                |
height      | int     |                |

## WindowStyle enum
#### Version added: 0.78

> An object which specifies the window style.

Option            | Description                                                                                 |
----------------- | --------------------------------------------------------------------------------------------|
InputPassThrough  |  Mouse and keyboard input will pass through the window to the game (no input blocking).     |

Note: To set this property from the manifest, you can use the [clickthrough](manifest-json#windows-clickthrough) flag. 


## MessagePromptIcon enum
#### Version added: 0.78

> Message prompt icon.

Option          | Description        |
--------------- | -------------------|
None            |  No Icon           |
QuestionMark    |  Question mark     |
ExclamationMark |  Exclamation mark  |

## WindowDragEdge enum
#### Version added: 0.78

> Message prompt icon.

Option      |  Description                                              |
------------| ----------------------------------------------------------|
None        |  No window edge or corner to drag                         |
Left        |  Drag the left window edge in order to resize it          |
Right       |  Drag the right window edge in order to resize it         |
Top         |  Drag the top window edge in order to resize it           |
Bottom      |  Drag the bottom window edge in order to resize it        |
TopLeft     |  Drag the top-left window edge in order to resize it      |
TopRight    |  Drag the top-right window edge in order to resize it     |
BottomLeft  |  Drag the bottom-left window edge in order to resize it   |
BottomRight |  Drag the bottom-right window edge in order to resize it  |

## FlashBehavior enum
#### Version added: 0.146

> Window flashing behavior.

Option          | Description          |
--------------- | ---------------------|
automatic       |  Turns off automatically when the window regains focus. Does not turn on if window is already in focus.  |
on              |  Turns flashing on   |
off             |  Turns flashing off  |


## onScreenPropertyChangedEvent Object

Parameter       | Type                                                              | Description     |
----------------| ------------------------------------------------------------------|---------------- |
id              |  string                                                           | the window ID   | 
name            |  string                                                           | the window name |
monitor         |  [overwolf.utils.Display](overwolf-utils#display-object) object  | Display info    |

#### Event data example: Success

```json
{
  "id": "Window_Extension_anoahjhemlbnmhkljlgbmnfflpnhgjpmfjnhdfoe_desktop",
  "name": "desktop",
  "monitor": {"name": "DELL P2319H", "id": "DISPLAY4", "x": 0, "y": 0, "width": 1920, "height": 1080, "is_primary": true}
}
```
