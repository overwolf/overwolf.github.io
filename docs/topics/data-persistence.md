---
id: data-persistence
title: Data persistence in Overwolf apps
sidebar_label:  Data persistence
---

## Overview

There are a number of ways for Overwolf apps to store data on the user's computer — with the user's permission — then retrieve it when necessary.  
This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more. This article explains the very basics of how these work.

## Cookies

## Web Storage

Web Storage provides a simple means to store key/value pairs in a user's browser.

* Web Storage is persistent. Once a value is stored, it doesn't disappear or expire until it's explicitly removed by the application or the user.
* Web Storage can handle large amounts of data. Current browsers limit total size per storage area to 5MB.
* Web Storage doesn't depend on the server and sends no data to the server. You're free to store data locally and sync it with the server asynchronously, of course, but Web Storage works equally well and is just as useful offline as it is online.
* Web Storage provides four primary methods — getItem(key); setItem(key,value); removeItem(key); and clear().

Web Storage includes of two different types of storage: SessionStorage and LocalStorage.

### Session storage

SessionStorage limits the scope of data saved in the current browser window to just that browser window. When used with an ecommerce application, for example, using sessionStorage to record the contents of a user's shopping cart eliminates the potential for accidental double purchases.

### LocalStorage

LocalStorage, meanwhile, persists across windows and tabs within a single browser. So, if you have the same site open in three windows in Chrome, all could all share the same localStorage container.

### Usage

Use the [Web Storage API](http://www.w3.org/TR/2013/REC-webstorage-20130730/) to set and get data:

```js
localStorage.setItem( "firstname", "Sparky" );
var name = localStorage.getItem( "firstname" );
```

Web Storage can pretty much be used anywhere you would normally have used cookies. It provides what's perhaps the simplest way — even easier than cookies — to set and retrieve key-value pairs in a browser.

## IndexedDB

## Comparision chart

Feature       | Cookies    | Session storage     | Local storage      |  IndexedDB    |
--------------| -----------| ------------------- | ------------------ | --------------|
Capacity      |            |                     |                    |               | 
Accessibility |            |                     |                    |               | 
Expiration    |            |                     |                    |               | 
