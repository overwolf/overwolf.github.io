---
id: overwolf-os-tray
title: overwolf.os.tray API
sidebar_label: overwolf.os.tray
---

Use the `overwolf.os.tray` API for windows system tray related functionalities.

## Methods Reference

* [overwolf.os.tray.setMenu()](#setmenumenu-callback)

## Events Reference

* [overwolf.os.tray.onMenuItemClicked](#onmenuitemclicked)
* [overwolf.os.tray.onTrayIconClicked](#ontrayiconclicked)
* [overwolf.os.tray.onTrayIconDoubleClicked](#ontrayicondoubleclicked)

## Types Reference

* [ExtensionTrayMenu](#extensiontraymenu-object) Object
* [overwolf.os.tray.onMenuItemClickedEvent](#onmenuitemclickedevent-object) Object


## setMenu(menu, callback)
#### Version added: 0.131
#### Permissions required: Tray

> Create a tray icon for the calling extension with the supplied context menu object.

Parameter | Type                                                    | Description             |
--------- | --------------------------------------------------------| ----------------------- |
menu      | [ExtensionTrayMenu](#extensiontraymenu-object) object   | The menu object         |
callback  | (Result) => void                                        | Returns with the result |

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
* [launcher_icon](manifest-json#meta-launcher_icon) must be set in the manifest.


#### Usage Example

```js
const trayMenu = {
    "menu_items": [{
            "label": "View main window",
            "id": "view_window"
        }
    ]
}

overwolf.os.tray.setMenu(trayMenu, (res) => {
	console.log("setMenu -> res", res) 
});
```

## onMenuItemClicked
#### Version added: 0.131

> Fired when an item from the tray icon’s context menu is selected, with the following structure: [onMenuItemClickedEvent](#onmenuitemclickedevent-object) Object

#### Event data example

```json
{ "item": "id" }
```

## onTrayIconClicked
#### Version added: 0.131

> Fired when the tray icon is left clicked.

## onTrayIconDoubleClicked
#### Version added: 0.131

> Fired when the tray icon is double clicked.

## onMenuItemClickedEvent Object

Parameter   | Type                              | Description           |
------------| ----------------------------------|---------------------- |
item        |  string                           |                       | 
