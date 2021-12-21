---
id: overwolf-games-events-makerking
title: MakerKing
sidebar_label: MakerKing
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21850
:::

## Sample Apps

* [MakerKing game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [level](#level)
* [user](#user)
* [race](#race)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `level`

### Info Updates

key          | Category    | Values                          | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------------- | --------------------- | ------------- | 
level        | level       | All data about current level    | See [notes](#level-note)|   ?       |

#### *level* note

Data Example:

```json
???
```


### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
loading_level         | Level ID and whether loading is for editor or game        | The local player makes an attempt to join a level for play or edition |   |  ?       | 
joined_level          | Level that has been joined                                |  Level is fully loaded and ready to be played                         |   |  ?       | 
reached_checkpoint    | Position of the checkpoint within the game world          |  The local player reaches a checkpoint in the level they are playing 	|   |  ?       | 
cleared_level         | null                                                      |  The local player reaches the end of the level they are playing       |   |  ?       | 
level_reset           | null                                                      |  The local player either dies or restarts                             |   |  ?       | 
joined_editor         | Level that has been opened in the editor                  |  Level is fully loaded and ready to be edited                         |   |  ?       |
started_playtest      | null                                                      |  Local player has started playtesting edited level                    |   |  ?       | 
ended_playtest        | null                                                      |  Local player ended playtesting level                                 |   |  ?       |  
opened_replay         | null                                                      |  Local player opened and is now watching a replay                     |   |  ?       |  
closed_replay         | null                                                      |  Local player closed the replay they were watching                    |   |  ?       |  


#### *loading_level* note

Data Example:

```json
{“event”:”joined_level”,“data”:”FILL level ID + boolean editing”}
```

#### *joined_level* note

Data Example:

```json
{“event”:”joined_level”,“data”:”FILL level”}
```


#### *reached_checkpoint* note

Data Example:

```json
{“event”:”reached_checkpoint”,“data”:”FILL position”}
```


#### *cleared_level* note

Data Example:

```json
{“event”:”cleared_level”,“data”:”null”}
```


#### *level_reset* note

Data Example:

```json
{“event”:”level_reset”,“data”:”null”}
```


#### *joined_editor* note

Data Example:

```json
{“event”:”joined_editor”,“data”:”FILL level”}
```


#### *started_playtest* note

Data Example:

```json
{“event”:”started_playtest”,“data”:”null”}
```



#### *ended_playtest* note

Data Example:

```json
{“event”:”ended_playtest”,“data”:”null”}
```


#### *opened_replay* note

Data Example:

```json
{“event”:”opened_replay”,“data”:”null”}
```


#### *closed_replay* note

Data Example:

```json
{“event”:”closed_replay”,“data”:”null”}
```

## `user`

### Info Updates

key          | Category    | Values                          | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------------- | --------------------- | ------------- | 
account        | user       | Username and player Id of current user    | See [notes](#account-note)|   ?       |
settings       | user       | All game settings of current user    | See [notes](#settings-note)|   ?       |

#### *account* note

Data Example:

```json
???
```

### *settings* note


Data Example:

```json
???
```


### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
game_open            | null                      | The game has finished loading and is fully open                         |   |  ?       | 
settings_changed     | New settings              | Settings for the game has been changed by the local player (either logged or not) 	|   |  ?       | 
logged_in            | Account of logged in user | The local player has logged in into their account       |   |  ?       | 
logged_out           | null                      | The local player has logged off of their account                |   |  ?       | 
entered_offline_menu | null                      | The local player decided to play offlne and entered the offline menu |   |  ?       | 

#### *game_open* note

Data Example:

```json
{“event”:”game_open”,“data”:”null”}
```

#### *settings_changed* note

Data Example:

```json
{“event”:”settings_changed”,“data”:”FILL settings”}
```

#### *logged_in* note

Data Example:

```json
{“event”:”logged_in”,“data”:”FILL account”}
```

#### *logged_out* note

Data Example:

```json
{“event”:”logged_out”,“data”:”null”}
```

#### *entered_offline_menu* note

Data Example:

```json
{“event”:”entered_offline_menu”,“data”:”null”}
```


## `race`


### Events

Event      | Event Data  | Fired When          | Notes              | Since GEP Ver. |
-----------| ------------| ------------------- | ------------------ | --------------|
joined_race      | null                      | The local player joins a race |   |  ?       | 
started_race     | null                      | The race the player had joined starts 	|   |  ?       | 
left_race        | null                      | The local player finishes or leaves a race       |   |  ?       | 

#### *joined_race* note

Data Example:

```json
{“event”:”joined_race”,“data”:”null”}
```

#### *started_race* note

Data Example:

```json
{“event”:”started_race”,“data”:”null”}
```

#### *left_race* note

Data Example:

```json
{“event”:”left_race”,“data”:”null”}
```
