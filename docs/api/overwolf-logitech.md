---
id: overwolf-logitech
title: overwolf.logitech API
sidebar_label: overwolf.logitech
---

## Methods Reference

* [`getVersion()`](#getversioncallback)
* [`getDevices()`](#getdvicescallback)

## Types Reference

* [`overwolf.logitech.LogitechData`](#overwolflogitechlogitechdata-object) Object
* [`Logitech Device`](#logitech-device-object) Object

## getVersion(callback)
#### Version added: 0.93

> Gets the current version of the LGS.

Parameter | Type                  | Description                                        |
--------- | ----------------------| -------------------------------------------------- |
callback  | function              | Called with the version of LGS currently installed |

## getDevices(callback)
#### Version added: 0.93

> Gets the currently installed Logitech devices.

Parameter | Type                  | Description                                        |
--------- | ----------------------| -------------------------------------------------- |
callback  | function              | Called with the current device information         |

## overwolf.logitech.LogitechData Object
#### Version added: 0.93

> Container for the Logitech data.

Parameter            | Type                                         | Description                                     |
-------------------- | ---------------------------------------------| ----------------------------------------------- |
minimal_lgs_version  | version Object (string wrapper)              | The minimal LGS version to require for this app |
arx                  | [overwolf.logitech.led.LogitechArxData](overwolf-logitech-led#overwolflogitechledlogitecharxdata-object) Object | The Arx API data  |
led                  | [overwolf.logitech.led.LogitechLedData](overwolf-logitech-led#overwolflogitechledlogitechleddata-object) Object | The LED API data  |

## Logitech Device Object
#### Version added: 0.93

> Logitech device type.

No further info.
