---
id: overwolf-campaigns-raf
title: overwolf.campaigns.raf API
sidebar_label: overwolf.campaigns.raf
---

Use this API to get info about active campagins.

## Methods Reference

* [overwolf.campaigns.raf.get()](#getcallback)
* [overwolf.campaigns.raf.getRedeemCode()](#getredeemcodecampaignid-extra-callback)
* [overwolf.campaigns.raf.reportUserAction()](#reportuseractioncampaignid-erafuseraction-callback)

## Events Reference

* [overwolf.campaigns.raf.onCampaignChanged](#oncampaignchanged)

## Types Reference

* [overwolf.campaigns.raf.enums.RafUserAction](#rafuseraction-enum) enum
* [overwolf.campaigns.raf.GetCampaignsResult](#getcampaignsresult-object) Object
* [overwolf.campaigns.raf.GetRedeemCodeResult](#getredeemcoderesult-object) Object
* [overwolf.campaigns.raf.campaign](#campaign-object) Object

## get(callback)
#### Version added: 0.145

> Returns active campaigns for the calling extension via callback.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | ([Result: GetCampaignsResult](#getcampaignsresult-object)) => void  | Returns an array of campaigns   |


## getRedeemCode(campaignID,extra, callback)
#### Version added: 0.145

> Used to receive the rewarded code for a campaign that has been redeemed.

Parameter  | Type                  | Description                                                             |
---------- | ----------------------| ----------------------------------------------------------------------- |
campaignID | string                | The ID of the campaign the code was rewarded for                        |
extra      | object                | Any extra information the campaign requires                             |
callback   | ([Result: GetRedeemCodeResult](#getredeemcoderesult-object)) => void   | Returns with the code                                                   |


## reportUserAction(campaignID, RafUserAction, callback)
#### Version added: 0.145

> Used to send analytics involving user interaction with an extension's campaign.

Parameter     | Type                  | Description                                                             |
------------- | ----------------------| ----------------------------------------------------------------------- |
campaignID    | string                | The ID of the campaign the analytic is for                              |
RafUserAction | [RafUserAction](#rafuseraction-enum) enum    | One of defined   "RafUserAction"                 |
callback      | function              | Reports success or failure                                              |

#### Callback argument: Success

Returns with the code

```json
{"success":true}

```

#### Callback argument: Failure

```json
{"success":false,"error":"Extension nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp does not have a valid campaign"}
```

## onCampaignChanged

#### Version added: 0.145

> Fired when current extension campaign is updated.

## RafUserAction enum
#### Version added: 0.145

> Refer a Friend user action.

Option     | Description                               |
-----------| ------------------------------------------|
dismiss    | User dismissed the campaign notification  |
learn_more |  User clicked on "Learn more"             |
copy_link  |  User clicked on "Copy link"              |
redeem     | User clicked on "How do I redeem"         |
share      | User shared on social media               |

## GetCampaignsResult Object

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
campaigns          | [campaign](#campaign-object)[]  |                                                   |   

#### Example data: Success

```json
{"campaigns":[],"success":true}
```

#### Example data: Failure

```json
{"success":false,"error":"Extension nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp does not have a valid campaign"}
```

## GetRedeemCodeResult Object

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
code               | string                          |                                                   |   

#### Example data: Success

```json
```

#### Example data: Failure

```json
{"code":null,"success":false,"error":"Campaign was not found!"}

```

## Campaign Object
#### Version added: 0.145

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
