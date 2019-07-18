---
id: overwolf-extension-current
title: overwolf.extension.current API
sidebar_label: overwolf.extension.current
---

A set of functions providing more information and utilities regarding the current extension.

## Methods Reference

* [overwolf.extension.current.getExtraObject()](#getextraobjectname-callback)
* [overwolf.extension.current.getManifest()](#getmanifestcallback)

## getExtraObject(name, callback)
#### Version added: 0.80

> Retrieves an extra object (providing external APIs) registered in the extension’s manifest.

Parameter | Type       | Description                                                                                    |
--------- | -----------| ---------------------------------------------------------------------------------------------- |
name	  | string     | The name of the object as appears in the manifest                                              |
callback  | function   | A function called with the extra object, if found, and a status indicating success or failure  |

## getManifest(callback)
#### Version added: 0.80

> Returns the current extension’s manifest object.

Parameter | Type       | Description                                       |
--------- | -----------| ------------------------------------------------- |
callback  | function   | A function called with the manifest data          |