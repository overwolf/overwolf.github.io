---
id: launchers-ids
title: Launchers IDs
sidebar_label: Launchers IDs
---

Launcher IDs can be used in order to auto launch your app when a game launcher starts (currently available only for [League of Legends](overwolf-games-launchers-events-lol)).

All you have to do is add the Launcher Id to the [launch_events](manifest-json#launch_events) option in your app’s manifest.json file.

Example:

```json
"launch_events": [
    {
        "event": "GameLaunch",
        "event_data": {
            "game_ids": [10902]
        },
        "start_minimized": true
    }
]
```

 In this example, the app will be auto-launched when the League of Legends client starts. 
 
 (In this specific example the app’s main window will be minimized, you can change this by using  `start_minimized` false).

 ## Available Launchers IDs

| Game Title         |  Launcher ID  |
| -------------------| --------------|
| League of Legends  | 10902         |
