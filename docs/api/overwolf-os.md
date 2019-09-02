---
id: overwolf-os
title: overwolf.os API
sidebar_label: overwolf.os
---

Use the `overwolf.os` API for Operating System related functionalities.

## Methods Reference

* [overwolf.os.tray.setMenu()](#setmenumenu-callback)
* [overwolf.os.getRegionInfo()](#getregioninfocallback)

## Events Reference

* [overwolf.os.tray.onMenuItemClicked](#onmenuitemclicked)
* [overwolf.os.tray.onTrayIconClicked](#ontrayiconclicked)
* [overwolf.os.tray.onTrayIconDoubleClicked](#ontrayicondoubleclicked)

## Types Reference

* [ExtensionTrayMenu](#extensiontraymenu-object) Object

## setMenu(menu, callback)
#### Version added: 0.131
#### Permissions required: Tray

> Create a tray icon for the calling extension with the supplied context menu object.

Parameter | Type                                                    | Description             |
--------- | --------------------------------------------------------| ----------------------- |
menu      | [ExtensionTrayMenu](#extensiontraymenu-object) object   | The menu object         |
callback  | function                                                | Returns with the result |

#### ExtensionTrayMenu Object

A container object for a menu.

```json
{
	"menu_items": [{
			"label": "View main window",
			"id": "view_window"
		},
		{
			"label": "More...",
			"enabled": true,
			"sub_items": [{
				"label": "Version 1.0.0",
				"id": "more_version",
				"enabled": false
			}]
		},
		{
			"label": "-"
		},
		{
			"label": "Visit website",
			"id": "more_website"
		}

	]
}
```

#### notes

* In order to create a separator, use the label "-".
* "id" must be set for items without "sub_items".
* Separators don't need ids.
* "Enabled" is set to true by default.

## getRegionInfo(callback)
#### Version added: 0.132

> Returns regional information about the user.

Parameter | Type                                                    | Description             |
--------- | --------------------------------------------------------| ----------------------- |
callback  | function                                                | Returns with the result |

#### Callback argument: Success

A callback function which will be called with the status of the request and the returned object:

```json
{ 
	"status": "success",
	"info":
	{ 
		"date_format": string,
		"time_format": string, 
		"currency_symbol": string, 
		"is_metric": bool 
	}
}
```

#### Callback argument: Failure

A callback function which will be called with the status of the request

```json
{ "status": "error", "reason": "something went wrong..." }
```

## onMenuItemClicked
#### Version added: 0.131

> Will be fired when an item from the tray icon’s context menu is selected.

#### Event data example

```json
{ "item": "id" }
```

## onTrayIconClicked
#### Version added: 0.131

> Will be fired when the tray icon is left clicked.

## onTrayIconDoubleClicked
#### Version added: 0.131

> Will be fired when the tray icon is double clicked.
