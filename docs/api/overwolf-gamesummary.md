---
id: overwolf-gamesummary
title: overwolf.gamesummary API
sidebar_label: overwolf.gamesummary
---

Use the `overwolf-gamesummary` API to.
 

## Methods Reference

* [overwolf.extensions.launch()](#launchuid-parameter)

## Events Reference

* [overwolf.extensions.onAppLaunchTriggered](#onapplaunchtriggered)

## launch(uid , parameter)
#### Version added: 0.78

> Launch an extension by unique ID.

Parameter | Type                  | Description                                                                           |
--------- | ----------------------| ------------------------------------------------------------------------------------- |
uid       | string                | Extension unique ID                                                               |
parameter | Object (optional)     | A parameter passed to the extension. The extension may or may not use this parameter |


Retrieve a service object by ID, which will usually provide external APIs.

Parameter | Type                  | Description                                                                              |
--------- | ----------------------| ---------------------------------------------------------------------------------------- |
id        | string                | Service ID                                                                           |
callback  | function              | A function called with the service, if found, and a flag indicating success or failure |




## onAppLaunchTriggered
#### Version added: 0.92

> Fires when the current app is launched while already running. This is useful in the case where the app has custom logic for clicking its dock button while it is already running.

### The origin string

The event returns an `origin` string which returns what triggered the app launch:

```json
overwolf-extension://hffhbjnafafjnehejohpkfhjdenpifhihebpkhni/index.html?source=gamelaunchevent
```

