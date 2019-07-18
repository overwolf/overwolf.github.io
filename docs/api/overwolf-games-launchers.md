---
id: overwolf-games-launchers
title: overwolf.games.launchers API
sidebar_label: overwolf.games.launchers
---

Returns an object with launchers status related events and functions.

## Methods Reference

* [overwolf.games.launchers.getRunningLaunchersInfo()](#getrunninglaunchersinfocallback)

## Events Reference

* [overwolf.games.launchers.onUpdated](#onupdated)
* [overwolf.games.launchers.onLaunched](#onlaunched)
* [overwolf.games.launchers.onTerminated](#onterminated)

## Types Reference

* [overwolf.games.launchers.ILauncherInfo](#ilauncherinfo-object) Object
* [overwolf.games.launchers.ILauncherInfoChangeData](#ilauncherinfochangedata-object) Object

## getRunningLaunchersInfo(callback)
#### Version added: 0.103

> Returns an object with information about the currently running launchers.

Parameter | Type                  | Description                                          |
--------- | ----------------------| ---------------------------------------------------- |
callback  | function              | Called with the currently running detected launchers |

#### Callback argument: Success

```json
{  
      "launchers":[  
         {  
            "title":"League of Legends Launcher",
            "id":54271,
            "classId":5427,
            "isInFocus":false,
            "position":{  
               "top":252,
               "left":2066,
               "width":1280,
               "height":720
            },
            "handle":329882,
            "commandLine":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe "--release=0.0.0.35" "--remoting-auth-token=scIN957coAwcbo0WW78nzg" "--rads-product-directory=E:/Games/RADS/solutions/league_client_sln/releases/0.0.0.35/deploy/" "--respawn-command=LeagueClient.exe" "--respawn-display-name=League of Legends" "--app-port=57610" "--install-directory=E:/Games/" "--app-name=LeagueClient" "--ux-name=LeagueClientUx" "--ux-helper-name=LeagueClientUxHelper" "--log-dir=LeagueClient Logs" "--bugsplat-name=league_client_riotgames_com" "--bugsplat-platform-id=EUW1" "--project=LeagueClient" "--app-log-file-path=E:/Games/Logs/LeagueClient Logs/2017-04-20T11-12-28_9576_LeagueClient.log" "--app-pid=9576"",
            "processId":1468,
            "path":"E:/Games/RADS/projects/league_client/releases/0.0.0.65/deploy/LeagueClientUx.exe"
         }
      ]
}
```

## onUpdated
#### Version added: 0.103

> Fired when the launcher info is updated. Passes an [`ILauncherInfo`](#ilauncherinfo-object) object.

## onLaunched
#### Version added: 0.103

> Fired when a launcher was launched.

## onTerminated
#### Version added: 0.103

> Fired when a launcher is closed.

## ILauncherInfoChangeData Object
#### Version added: 0.103

> An object containing the game info object in addition to a set of flags indicating the change from the last time that data was updated.

Parameter  | Type                                           | Description                   |
---------- | -----------------------------------------------| ----------------------------- |
info       | [ILauncherInfo](#ilauncherinfo-object) Object  | The launcher info data        |
changeType | LauncherInfoChangeType                         | The new game info data        |

## ILauncherInfo Object
#### Version added: 0.103

> An object containing the game info object in addition to a set of flags indicating the change from the last time that data was updated.

Parameter   | Type                                | Description                                                      |
----------- | ------------------------------------| ---------------------------------------------------------------- |
title       | string                              | Returns the title of the represented launcher                    |
id          | int                                 | Returns the instance id of the represented launcher              |
classId     | int                                 | Returns the class id of the represented launcher                 |
isInFocus   | bool                                | Returns whether the launcher represented is currently in focus   |
position    | [ODKRect](overwolf-windows) Object  | Returns the launcher’s window position                           |
handle      | uint                                | Returns the launcher’s main window handle                        |
commandLine | string                              | Returns the launcher’s process command-line                      |
processId   | uint                                | Returns the launcher’s process id                                |
path        | string                              | Returns the process path of the represented launcher             |
