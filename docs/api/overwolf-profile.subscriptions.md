---
id: overwolf-profile.subscriptions
title: overwolf.profile.subscriptions API
sidebar_label: overwolf.profile.subscriptions
---

The `overwolf.profile.subscriptions` API provides functions and events to help with user profile subscription management.

* **Permissions required: profile**

* **Read all the info about app subscriptions [here](../start/app-subscriptions).**

## Methods Reference

* [overwolf.profile.subscriptions.getActivePlans()](#getactiveplanscallback)

## Events Reference

* [overwolf.profile.subscriptions.onSubscriptionChanged](#onsubscriptionchanged)

## Types Reference

* [overwolf.profile.subscriptions.SubscriptionChangedEvent](#subscriptionchangedevent) Object
* [overwolf.profile.subscriptions.Info](#info-object) Object
* [overwolf.profile.subscriptions.eState](#estate-enum) Enum


## getActivePlans(callback)
#### Version added: 0.134

> Returns active subscriptions for the calling extension via callback.

Parameter | Type     | Description                                                                                        |
----------| ---------| -------------------------------------------------------------------------------------------------- |
callback  | function | Returns with the result                                                                            |   
 
#### Callback argument: Success

Returns an array of plan IDs, or an error.

```json
{
  "plans": [ 4564, 23455 ],
  "success": true
}
```

If there is no active plans, a null is returned.

```json
{
  "plans": null, 
  "success": true
}
```

## onSubscriptionChanged
#### Version added: 0.134

> Fired when current extension subscription has changed, with the following structure: [SubscriptionChangedEvent](#subscriptionchangedevent-object) Object


## SubscriptionChangedEvent Object

Parameter   | Type                              | Description     |
------------| ----------------------------------|---------------- |
id          |  int                              | SubscriptionID  | 
pid         |  int                              | PlanId          | 
uid         |  string                           | Username        | 
extid       |  string                           | ExtensionId     | 
muid        |  string                           | MUID            | 
exp         |  int                              |Expiry           | 
grc         |  int                              | Grace           | 
state       |  [eState](#estate-enum) enum      |                 | 
planInfo    |  [Info](#info-object) Object      |                 | 
expired     |  boolean                          |                 | 


## Info Object

Parameter     | Type       | Description     |
--------------| -----------|---------------- |
title         |  string    |                 | 
description   |  string    |                 |
periodMonths  |  int       |                 |
price         |  int       |                 |


## eState enum

Option         | Description                                 |
---------------| ------------------------------------------- |
Active         | 0                                           |
Cancelled      | 1                                           |
Revoked        | 2                                           |