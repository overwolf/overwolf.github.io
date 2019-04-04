---
id: api-manifest-json
title: manifest.json
sidebar_label: manifest.json
---
<script>hljs.initHighlightingOnLoad();</script>

## Welcome to the manifest.json file

This [JSON](http://www.json.org/) formatted file is responsible for describing the aspects of your app. This ranges from the name of the app and its author to the size of the window or if it is transparent. This is a mandatory file for all apps and has to exist in the root folder for your app. Here is the base version of the manifest.json

<pre>
  <code class="json">
{
    <a href="#field-summary">"manifest_version"</a>: 1,
    "type": "WebAp",
    "meta": {
        "name": "Demo_App",
        "version": "1.0.0",
        "author": "Developer_Name",
        "icon": "IconMouseOver.png",
        "icon_gray": "IconMouseNormal.png",
        "description": "Demo App"
    },
    "data": {
        "start_window": "MainWindow",
        "windows": {
            "MainWindow": {
                "file": "Files/index.html",
                "transparent": true,
                "resizable": true,
                "size": {
                    "width": 400,
                    "height": 300
                },
                "min_size": {
                    "width": 200,
                    "height": 200
                },
                "max_size": {
                    "width": 600,
                    "height": 500
                }
            }
        }
    }
}
  </code>
</pre>

## Field summary

The following code shows the supported manifest fields for Overwolf apps, with links to the section that discusses each field.

```json
{
    //Mandatory
    "manifest_version": 1,
    "type": "WebApp",
    //Mandatory, The app metadata
    "meta": {
        "name": "Name of your app",
        "dock_button_title": "Short name of your app",
        "version": "versionString",
        "minimum-overwolf-version": "versionString",
        "author": "Author name",
        "icon": "IconMouseOver.png",
        "icon_gray": "IconMouseNormal.png",
        "launcher_icon": "icon.ico",
        "splash_image": "splash_icon.png",
        "description": "A plain text description"
    },
    //An array of permissions that the app requires
    "permissions": [...],
    //Mandatory, a list of additional meta-data on the app.
    "data": {
        //A map from window names to window settings
        "windows": {
            "windowName": {
                //Mandatory. Points to the file to be loaded inside the window
                "file": "name.html",
                "show_in_taskbar": true,
                "transparent": true,
                "resizable": false,
                "show_minimize": true,
                "clickthrough": false,
                "disable_rightclick": false,
                "forcecapture": false,
                "show_only_on_stream": false,
                "ignore_keyboard_events": false,
                "in_game_only": false,
                "desktop_only": false,
                "disable_restore_animation": false,
                "grab_keyboard_focus": false,
                "size": {
                    ...
                },
                "min_size": {
                    ...
                },
                "max_size": {
                    ...
                },
                "start_position": {
                    ...
                },
                "topmost": false,
                "block_top_window_navigation": true,
                "keep_window_location": true,
                "use_os_windowing": false,
                "background_optimization": true,
                "mute": true,
                "mute_excluded_hosts": ["..."],
                "popup_blocker": false,
                "show_maximize": true,
                "disable_blur": false,
                "native_window": false,
                "is_background_page": true,
                "focus_game_takeover": "ReleaseOnLostFocus",
                "allow_local_file_access": true,
                "is_alt_f4_blocked": false,
                "debug_url": "http://localhost:3000"
            },
            //The name of the window (from the “windows” list) initially loaded when the app starts
            "start_window": "windowName",
            //External URLs the web app should be able to access
            "externally_connectable": {
                "matches": [...]
            },
            //Override the relative protocol with a preferred one
            "protocol_override_domains": {
                "url.com": "http"
            },
            //Causes links in the app to be opened using the user’s default browser ("user") or Overwolf’s browser ("overwolf")
            "force_browser": "user" / "overwolf",
            //A list of game ids for which game events are required
            "game_events": [...],
            //Allows the access of custom plugin dlls
            "extra-objects": {
                ...
            },
            //Hotkey feature name and it’s settings
            "hotkeys": {
                ...
            },
            //A list of content scripts to be loaded for specific windows
            "content_scripts": [...],
            //A list of events causing the app to launch
            "launch_events": [...],
        }
        "developer": {
            //auto reloading of app when local files change (only works when the app is in dev mode) 
            "enable_auto_refresh": true, ////default is true
            "reload_delay": 1000, ////default is 1000
            "filter": "*.json;*.html" //default is "*.*" -> all files
        }
    }
} 
```