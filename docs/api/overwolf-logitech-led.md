---
id: overwolf-logitech-led
title: overwolf.logitech.led API
sidebar_label: overwolf.logitech.led
---

Provides API for Logitech Arx Control.

## Methods Reference

* [`init()`](#)
* [`setTargetDevice()`](#)
* [`saveCurrentLighting()`](#)
* [`setLighting()`](#)
* [`restoreLighting()`](#)
* [`flashLighting()`](#)
* [`pulseLighting()`](#)
* [`stopEffects()`](#)
* [`setLightingFromBitmap()`](#)
* [`setLightingFromBitmap()`](#)
* [`setLightingForKeyWithScanCode()`](#)
* [`setLightingForKeyWithHidCode()`](#)
* [`setLightingForKeyWithQuartzCode()`](#)
* [`setLightingForKeyWithKeyName()`](#)
* [`saveLightingForKey()`](#)
* [`restoreLightingForKey()`](#)
* [`flashSingleKey()`](#)
* [`pulseSingleKey()`](#)
* [`stopEffectsOnKey()`](#)
* [`shutdown()`](#shutdown)

## Events Reference

* [`onError`](#onerror)

## Types Reference

* [`overwolf.logitech.led.LogitechLedData`](#overwolflogitechledlogitechleddata-object) Object
* [`overwolf.logitech.led.LogitechArxData Object`](#overwolflogitechledlogitecharxdata-object) Object
* [`overwolf.logitech.led.enums.LogitechDeviceLightingType`](#LogitechDeviceLightingType) enum
* [`overwolf.logitech.led.enums.KeyboardNames`](##overwolflogitechledenumskeyboardnames-enum) enum

## init(identifier, friendlyName, callback)
#### Version added: 0.93

> Initializes the Arx API.

Parameter    | Type     | Description                                          |
------------ | ---------| ---------------------------------------------------- |
identifier   | string   | An id for the app that will be discovered by LGS     |
friendlyName | string   | A friendly display name                              |
callback     | function | A callback with the result of the request            |


## shutdown()
#### Version added: 0.93

> Shuts down the API.

## onError

#### Version added: 0.93

> Triggered when an error occurs, sent with an error code.

## overwolf.logitech.led.LogitechLedData Object
#### Version added: 0.93

> Describes an Arx event.

Parameter                | Type                                                             | Description                   |
------------------------ | -----------------------------------------------------------------| ----------------------------- |
required_devices         | [LogitechDevice](overwolf-logitech#logitech-device-object) Objet | A list of required devices    |
required_devices_details | string                                                   | Read only. The list of required devices with additional details.    |
required_lighting_types  | [LogitechDeviceLightingType](#overwolflogitechledenumslogitechdevicelightingtype-enum) enum                                                              | A list of required lighting types  |
required_lighting_details| string                                                           | The value string on the event |


## overwolf.logitech.led.LogitechArxData Object
#### Version added: 0.93

> Describes the Arx API data.

Parameter   | Type   | Description                                            |
------------| -------| ------------------------------------------------------ |
app_folder  | string | An optional folder to use when publishing a website    |

## overwolf.logitech.led.enums.LogitechDeviceLightingType enum
#### Version added: 0.93

> A list of Logitech devices lighting types.

Parameter   |  Description|
------------| ----------- |
Mono        |             |
RGB         |             |
PerkeyRGB   |             |
All         |             |

## overwolf.logitech.led.enums.KeyboardNames enum
#### Version added: 0.93

> The names of the keys.

Parameter  |  Description|
-----------| ----------- |
ESC        |             |
F1         |             |
F2         |             |
F3         |             |
F4         |             |
F5         |             |
F6         |             |
F7         |             |
F8         |             |
F9         |             |
F10        |             |
F11        |             |
F12        |             |
PRINT_SCREEN        |             |
SCROLL_LOCK         |             |
PAUSE_BREAK         |             |
TILDE         |             |
ONE         |             |
TWO         |             |
THREE         |             |
FOUR         |             |
FIVE         |             |
SIX         |             |
SEVEN        |             |
EIGHT        |             |
NINE        |             |
ZERO         |             |
MINUS         |             |
EQUALS         |             |
BACKSPACE         |             |
INSERT         |             |
HOME         |             |
SPAGE_UPEVEN        |             |
NUM_LOCK        |             |
NUM_SLASH        |             |
NUM_ASTERISK        |             |
NUM_MINUS        |             |
NINE        |             |
ZERO         |             |
MINUS         |             |
TAB         |             |
Q         |             |
W        |             |
HOME         |             |
E        |             |
R       |             |
T        |             |
Y        |             |
U       |             |
I       |             |
O      |             |
P       |             |
OPEN_BRACKET         |             |
CLOSE_BRACKET         |             |
BACKSLASH         |             |
KEYBOARD_DELETE         |             |
END        |             |
PAGE_DOWN         |             |
NUM_SEVEN        |             |
NUM_EIGHT       |             |
NUM_NINE        |             |
NUM_PLUS      |             |
CAPS_LOCK      |             |
I       |             |
O      |             |
P       |             |
A         |             |
S        |             |
D         |             |
F        |             |
G       |             |
H        |             |
J      |             |
K      |             |
L       |             |
SEMICOLON      |             |
APOSTROPHE       |             |
ENTER         |             |
NUM_FOUR         |             |
NUM_FIVE         |             |
NUM_SIX         |             |
LEFT_SHIFT        |             |
Z         |             |
X        |             |
C       |             |
V        |             |
B      |             |
N      |             |
M       |             |
COMMA      |             |
PERIOD       |             |
FORWARD_SLASH        |             |
RIGHT_SHIFT       |             |
ARROW_UP        |             |
NUM_ONE        |             |
NUM_TWO       |             |
NUM_THREE      |             |
NUM_ENTER     |             |
LEFT_CONTROL     |             |
LEFT_WINDOWS       |             |
LEFT_ALT      |             |
SPACE       |             |
RIGHT_ALT        |             |
RIGHT_WINDOWS       |             |
APPLICATION_SELECT        |             |
RIGHT_CONTROL        |             |
ARROW_LEFT       |             |
ARROW_DOWN      |             |
ARROW_RIGHT     |             |
NUM_ZERO     |             |
NUM_PERIOD       |             |
