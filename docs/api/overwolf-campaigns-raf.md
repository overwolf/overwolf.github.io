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

* [overwolf.campaigns.raf.enums.RafUserAction ](#rafuseraction-enum) enum

## get(callback)
#### Version added: 0.145

> Returns active campaigns for the calling extension via callback.

Parameter | Type                  | Description                                                             |
--------- | ----------------------| ----------------------------------------------------------------------- |
callback  | function              | Returns an array of campaigns, or an error                              |

#### Callback argument: Success

```json

{"campaigns":[],"success":true}

```

#### Callback argument: Failure

```json
{"success":false,"error":"Extension nhmkaollkcmjiecdnnjmgfifjgkfegkljnjjbipp does not have a valid campaign"}
```

## getRedeemCode(campaignID,extra, callback)
#### Version added: 0.145

> Used to receive the rewarded code for a campaign that has been redeemed.

Parameter  | Type                  | Description                                                             |
---------- | ----------------------| ----------------------------------------------------------------------- |
campaignID | string                | The ID of the campaign the code was rewarded for                        |
extra      | object                | Any extra information the campaign requires                             |
callback   | function              | Returns with the code                                                   |

#### Callback argument: Success

Returns with the code

```json

```

#### Callback argument: Failure

```json

{"code":null,"success":false,"error":"Campaign was not found!"}
```

## reportUserAction(campaignID, RafUserAction, callback)
#### Version added: 0.145

> Used to send analytics involving user interaction with an extension's campaign.

Parameter     | Type                  | Description                                                             |
------------- | ----------------------| ----------------------------------------------------------------------- |
campaignID    | string                | The ID of the campaign the analytic is for                              |
RafUserAction | [RafUserAction](#rafuseraction-enum) enum    | One of defined   "RafUserAction"                                         |
callback      | function              | Reports success or failure                                              |

#### Callback argument: Success

Returns with the code

```json

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

