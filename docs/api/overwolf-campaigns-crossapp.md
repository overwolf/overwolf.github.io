---
id: overwolf-campaigns-crossapp
title: overwolf.campaigns.crossapp API
sidebar_label: overwolf.campaigns.crossapp
---

Use this API to allow crossapp-promotions.

One app can promote another app and then get an indication for a successful conversion.  
For example - an app can promote a video capture and sharing app and receive a notification as soon as the user shares a video from the promoted app.

**Note that the Achievement Rewards app will only work on the Overwolf Client version 0.156.0.16 and above**.

## Methods Reference

* [overwolf.campaigns.crossapp.getAvailableActions()](#getavailableactionscallback)
* [overwolf.campaigns.crossapp.set()](#setcampaign-callback)
* [overwolf.campaigns.crossapp.reportConversion()](#)
* [overwolf.campaigns.crossapp.consumeConversions()](#)

## Events Reference

* [overwolf.campaigns.crossapp.onAvailableActionUpdated](#onavailableactionupdated)

## Types Reference

* [overwolf.campaigns.crossapp.CrossAppCampaign](#crossappcampaign-object) Object
* [overwolf.campaigns.crossapp.CrossAppCampaignConversion](#crossappcampaignconversion-object) Object
* [overwolf.campaigns.crossapp.GetCrossAppAvailableActionsResult](#getcrossappavailableactionsresult-object) Object
* [overwolf.campaigns.crossapp.GetCrossAppConversionsResult](#getcrossappconversionsresult-object) Object

## getAvailableActions(callback)
#### Version added: 0.158

> Receive all cross-app actions that target the currently running extension.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | ([Result: GetCrossAppAvailableActionsResult](#getcrossappavailableactionsresult-object)) => void  | Returns an array of cross-app actions   |

## set(campaign, callback)
#### Version added: 0.158

> Initiate or modify a cross-app campaign action for this extension.

You may modify an existing action by using the same id parameter. See [CrossAppCampaign.id](#crossappcampaign-object).

Parameter  | Type                  | Description                                                             |
---------- | ----------------------| ----------------------------------------------------------------------- |
campaign   | [CrossAppCampaign](#crossappcampaign-object) object   |                                         |
callback   | (Result) => void      | Reports success or failure.                                             |

#### Callback argument: Success

Returns with the code

```json
{"success":true}

```

## reportConversion(conversionInfo, callback)
#### Version added: 0.158

> Submit new conversion for a cross-app campaign.

Parameter      | Type                  | Description                                                             |
-------------- | ----------------------| ----------------------------------------------------------------------- |
conversionInfo | [CrossAppCampaignConversion](#crossappcampaignconversion-object) object    |                                                      |
callback       | (Result) => void      | Reports success or failure.                                             |

#### Callback argument: Success

Returns with the code

```json
{"success":true}

```

## onCampaignChanged

#### Version added: 0.158

> Fired when current extension campaign is updated.

## RafUserAction enum
#### Version added: 0.158

> Refer a Friend user action.

Option     | Description                               |
-----------| ------------------------------------------|
dismiss    | User dismissed the campaign notification  |
learn_more |  User clicked on "Learn more"             |
copy_link  |  User clicked on "Copy link"              |
redeem     | User clicked on "How do I redeem"         |
share      | User shared on social media               |

## GetCrossAppAvailableActionsResult Object

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
actions            | [CrossAppCampaign](#crossappcampaign-object)[]  |                                   |   

#### Example data: Success

```json
{"success":true, "actions":[]}
```

## CrossAppCampaign Object

> Container that represent a shared data parameters.

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
id                 | string                          | An id to identify the campaign (action/conversion). See [notes](#id-notes). |   
action             | string                          | The type of action this cross-app campaign supports.This is a free-text string. |   
expiration         | number                          | Expiration date expressed in milliseconds since epoch (Unix Time, UTC). See [notes](#expiration-notes). |   
owner_app_uid      | string                          | The UID of the app that owns the targeted cross-app campaign. Optional |   
target_apps_uids   | string[]                        | An array of app UIDs this cross-app campaign targets. Optional |   
data               | object                          | Information about the cross-app campaign. See [notes](#data-notes). |   

#### Example data: Success

```json
```

#### id notes

"id" should be unique per an extension (two different extensions can use the same id).

#### expiration notes

e.g. Date.now() or (new Date()).getTime().

#### data notes

This is a free-form json object that gives more instructions on the required action.

## Campaign Object
#### Version added: 0.158

> Describes a campaign

Parameter        | Type                          | Description                       |
---------------- | ------------------------------| --------------------------------- |
id               | string                        |                                   |
extensionId      | string                        |                                   |
games            | int[]                         |                                   |
revoked          | boolean                       |                                   |
publicToken      | string                        |                                   |
privateToken     | string                        |                                   |
type             | string                        |                                   |
extra            | object                        | Campaign-specific information     |
referralUrl      | string                        |                                   |
reward           | string                        |                                   |
disabled         | boolean                       | Set to true if an existing campaign is not returned from the server |
exposed          | boolean                       | Set to true when a user is informed of the campaign                 |

## CrossAppCampaignConversion Object

> Container that represent a shared data parameters.

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
id                 | string                          | The ID of the cross-app campaign the conversion targets. |   
owner_app_uid      | string                          | The UID of the app that owns the targeted cross-app campaign. |   
data               | object                          | Conversion data for the specified action. |   
origin_app_uid     | object                          | The UID of the app that performed the conversion (the promoted app). Optional. See [notes](). |   
timestamp          | number                          | When the conversion took place.  Optional. See [notes]().  |   

#### origin_app_uid notes

Set by the Overwolf client when calling |consumeConversions|.

#### timestamp notes

Set by the Overwolf client when calling |consumeConversions|.

