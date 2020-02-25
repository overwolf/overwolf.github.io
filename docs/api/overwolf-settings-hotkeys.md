---
id: overwolf-settings-hotkeys
title: overwolf.settings.hotkeys API
sidebar_label: overwolf.settings.hotkeys
---

Use the `overwolf.settings.hotkeys` API to view and modify the Overwolf hotkeys settings properties.

:::tip
Please read all the info about hotkeys and how to use them in our [hotkeys best practice](../topics/hotkeys-best-practices) guide.
:::

## Methods Reference

* [overwolf.settings.hotkeys.get()](#getcallback)

## Events Reference

* [overwolf.settings.hotkeys.onHold](#onhold)
* [overwolf.settings.hotkeys.onPressed](#onpressed)
* [overwolf.settings.hotkeys.onChanged](#onchanged)

## get(callback)
#### Version added: 0.142
#### Permissions required: Hotkeys

> Returns the hotkey assigned **for the current extension** in all the games.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              | A callback function which will be called with the status of the request |

#### Callback example

In the following example, we can see a callback example of an extension that set the same hotkeys (Ctrl + F3) for PUBG and Legends of Runeterra. Of course, you can set different hotkeys for different games.

```json
}
    "success":true,
    "globals":[], //see the next example for more details on this array
    "games":{
        "10906":[  //PUBG
        {
            "name":"shots_fired_toggle_visibility",
            "title":"Show In-Game",
            "virtualKeycode":114, //F3
            "modifierKeys":2, //Ctrl
            "extension-uid":"jdecmlblpoddjcmpdbhnefehffjfcjeijpkebedd",
            "isPassthrough":false,
            "hold":false,
            "IsUnassigned":false
        }
        ],
        "21620":[ // Legends of Runeterra
        {
            "name":"shots_fired_toggle_visibility",
            "title":"Show In-Game",
            "virtualKeycode":114, //F3
            "modifierKeys":2, //Ctrl
            "extension-uid":"jdecmlblpoddjcmpdbhnefehffjfcjeijpkebedd",
            "isPassthrough":false,
            "hold":false,
            "IsUnassigned":false
        }
        ]
    }
}
```

Note that the callback returns a virtualKeycode and a modifierKey code. You can convert these values easily to a string using the [MS ModifierKeys Enum](https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.modifierkeys) and the [MS VirtualKey Enum](https://docs.microsoft.com/en-us/uwp/api/windows.system.virtualkey).


#### Callback example with global hotkeys

For extensions that target more than one game (global apps), there is an option that available in the OW client UI, to set an extension hotkey as `global`.  
Read more about global hotkeys [here](../topics/hotkeys-best-practices#global-hotkeys).  

On the following example, you can see that the current extension set `Shift + F5` as a global hotkey for all the installed games: 

```json
{ 
    "success":true,
    "globals":[ 
    { 
         "name":"toggle_app",
         "title":"Show/Hide Buff window",
         "virtualKeycode":116, //F5
         "modifierKeys":4, //Shift
         "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",
         "isPassthrough":false,
         "hold":false,
         "IsUnassigned":false
    }
    ]
}
```

On the following example, you can see that the current extension set `Shift + F5` as a global hotkey for all the installed games,except "League of Legends", which set with `Ctrl +D`:

```json
{ 
    "success":true,
    "globals":[ 
    { 
         "name":"toggle_app",
         "title":"Show/Hide Buff window",
         "virtualKeycode":116, //F5
         "modifierKeys":4, //Shift
         "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",
         "isPassthrough":false,
         "hold":false,
         "IsUnassigned":false
    }
    ],
    "games":{ 
        "5426":[ 
        { 
            "name":"toggle_app",
            "title":"Show/Hide Buff window",
            "virtualKeycode":68, //D
            "modifierKeys":2, //Ctrl
            "extension-uid":"caboggillkkpgkiokbjmgldfkedbfnpkgadakcdl",
            "isPassthrough":false,
            "hold":false,
            "IsUnassigned":false
        }
        ]
    }
}
```

## onHold

#### Version added: 0.142

> Fired only for hotkeys that are set in the manifest as `hold`.

* Triggered only for the current extension hotkeys.
* This event will be fired twice - on key down and on key up.

#### Event data example

```json
{"name": "ges_showhide", "state": "down"}
{"name": "ges_showhide", "state": "up"}
```

## onPressed

#### Version added: 0.142

> Fired for hotkeys that are NOT set as `hold` hotkeys.

* Triggered only for the current extension hotkeys.
* This event will replace the depracated [overwolf.settings.registerHotKey()](overwolf-settings#registerhotkeyactionid-callback) function, as a way to register for hotkey events.

#### Event data example

```json
{"name": "ges_showhide"} //event triggered
```

## onChanged

#### Version added: 0.142

> Fired on hotkey setting change.

Triggered only for the current extension hotkeys.  

Listen to this event if you want to get notified when the user changed your app hotkeys from the OW client settings page.

#### Event data example

```json
{ 
   "name":"toggle_app",
   "gameId":10906,
   "description":"Buff Achievement Tracker: Show/Hide Buff window",
   "binding":"Shift+F4" //the new hotkey
}
```