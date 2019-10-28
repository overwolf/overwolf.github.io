---
id: overwolf-extension-sharedData
title: overwolf.extension.sharedData API
sidebar_label: overwolf.extension.sharedData
---

A set of APIs to allow independent extensions to communicate with each other.

## Methods Reference

* [overwolf.extension.sharedData.set()](#setstring-appid-object-value-callback)
* [overwolf.extension.sharedData.get()](#getshareddataparams-param-callback)

## Events Reference

* [overwolf.extensions.sharedData.OnChanged](#onchanged)

## Types Reference

* [overwolf.extension.sharedData.SharedDataParams](#shareddataparams-object) Object

## set(string appId, object value, callback)
#### Version added: 0.137

> Used by the owner app to set data for the consumer app, by appId.

This function is one part of the service providing app to communicate with the consumer apps.
for instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer.

Parameter | Type       | Description                                                                                    |
--------- | -----------| ---------------------------------------------------------------------------------------------- |
appId	  | string     | The requested app id                                                                           |
value	  | object     |                                                                                                |
callback  | function   | a status indicating success or failure                                                         |

## get(SharedDataParams param, callback)
#### Version added: 0.137

> Used by the consumer app to get data set by the owner app.

This function is one part of the service providing app to communicate with the consumer apps.
for instance, Game Summary hosts GPO app in a tab. Game Summary is the owner, GPO is the cosumer.

Parameter | Type                                                 | Description                                                                                    |
--------- | -----------------------------------------------------| ---------------------------------------------------------------------------------------------- |
param	  | [SharedDataParams](#shareddataparams-object) object  |                                                                                                |
callback  | function                                             | a status indicating success or failure                                                         |

#### Usage example

```js
overwolf.extensions.shareddata.get({},console.log) //retrun all data set to my self

overwolf.extensions.shareddata.get({origin:"*"},console.log) //return all data was set to my self

overwolf.extensions.shareddata.get({target:"fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm"},console.info) //retrun data i set to "fiekjlgoffmlmgfmggnoeoljkmfkcapcdmcgcfgm" (extension id)
```

## OnChanged
#### Version added: 0.137

> Fired when the hosting app state changes.

#### Event Data Example: Success

```json
{
    origin: string (uid),
    target: string (uid),
    data: string
}
```

## SharedDataParams Object
#### Version added: 0.137

> Container that represent a shared data parameters.

Parameter   | Type                                | Description                   |
----------- | ------------------------------------| ----------------------------- |
origin      | string                              |                               |
target      | string                              |                               |
