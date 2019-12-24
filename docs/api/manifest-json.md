---
id: manifest-json
title: manifest.json
sidebar_label: manifest.json
---

## Welcome to the manifest.json file

This [JSON](http://www.json.org/) formatted file is responsible for describing aspects of your app. This includes your app's name, window size, tranparency settings and more basic settings for how your app operates. This is a mandatory file which has to exist in the root folder for your app.
[Here](https://gist.github.com/eransharv/e74024e0b31d5e0525b5289b8b8b6ffc) you can see a basic version of the manifest.json file.

## manifest.json with fields summary

The following code shows supported manifest fields for Overwolf apps, with links to the section that discusses each field.
Note that not all flags are mandatory - we included all available flags for documentation purposes.

<pre><code class="json">
{
    //Mandatory
    "<a href="#manifest_version">manifest_version</a>": 1,
    "<a href="#type">type</a>": "WebApp",
    //Mandatory, The app metadata
    "<a href="#meta-object">meta</a>": {
        "<a href="#meta-name">name</a>": "Name of your app",
        "<a href="#meta-author">author</a>": "Author name",
        "<a href="#meta-version">version</a>": "1.2.3.456",
        "<a href="#meta-minimum">minimum-overwolf-version</a>": "128.0.0.1",
        "<a href="#meta-minimum-gep">minimum-gep-version</a>": "128.0.0.1",
        "<a href="#meta-minimum-gs">minimum-gs-version</a>": "128.0.0.1",
        "<a href="#meta-description">description</a>": "A plain text description",
        "<a href="#meta-dock">dock_button_title</a>": "Short name of your app",    
        "<a href="#meta-mouse-over">icon</a>": "iconMouseOver.png",
        "<a href="#meta-gray_icon">icon_gray</a>": "iconMouseNormal.png",
        "<a href="#meta-launcher_icon">launcher_icon</a>": "icon.ico",
        "<a href="#meta-splash">splash_image</a>": "splashIcon.png",
        "<a href="#meta-window-icon">window_icon</a>": "windowIcon.png"
    },
    //An array of permissions that the app requires
    "<a href="#permissions-array">permissions</a>": ["Streaming","Hotkeys","GameInfo"],
    //Mandatory, a list of additional meta-data on the app
    "<a href="#data">data</a>": {
        //An app can declare itself as targeted to one game or more
        "<a href="#game_targeting">game_targeting</a>": {"type": "dedicated","game_ids": [10906, 7764]},
        //The name of the window (from the “windows” list) initially loaded when the app starts
        "<a href="#start_window">start_window</a>": "windowName",
         //A map from window names to window settings
        "<a href="#window-data">windows</a>": {
            "windowName": {
                //Mandatory. Points to the file to be loaded inside the window
                "<a href="#window-file">file</a>": "name.html",
                "<a href="#window-show_in_taskbar">show_in_taskbar</a>": true,
                "<a href="#window-transparent">transparent</a>": true,
                "<a href="#window-override_on_update">override_on_update</a>": true,
                "<a href="#windows-resizable">resizable</a>": false,
                "<a href="#windows-show_minimize">show_minimize</a>": true,
                "<a href="#windows-clickthrough">clickthrough</a>": false,
                "<a href="#windows-disable_rightclick">disable_rightclick</a>": false,
                "<a href="#windows-forcecapture">forcecapture</a>": false,
                "<a href="#windows-show_only_on_stream">show_only_on_stream</a>": false,
                "<a href="#windows-ignore_keyboard_events">ignore_keyboard_events</a>": false,
                "<a href="#windows-in_game_only">in_game_only</a>": false,
                "<a href="#windows-desktop_only">desktop_only</a>": false,
                "<a href="#windows-disable_restore_animation">disable_restore_animation</a>": false,
                "<a href="#windows-grab_keyboard_focus">grab_keyboard_focus</a>": false,
                "<a href="#windows-size">size</a>": {...},
                "<a href="#windows-min_size">min_size</a>": {...},
                "<a href="#windows-max_size">max_size</a>": {...},
                "<a href="#windows-start_position">start_position</a>": {...},
                "<a href="#windows-topmost">topmost</a>": false,
                "<a href="#windows-block_top_window_navigation">block_top_window_navigation</a>": true,
                "<a href="#windows-keep_window_location">keep_window_location</a>": true,
                "<a href="#windows-use_os_windowing">use_os_windowing</a>": false,
                "<a href="#background_optimization">background_optimization</a>": true,
                "<a href="#windows-mute">mute</a>": true,
                "<a href="#mute_excluded_hosts">mute_excluded_hosts</a>": ["..."],
                "<a href="#popup_blocker">popup_blocker</a>": false,
                "<a href="#show_maximize">show_maximize</a>": true,
                "<a href="#disable_blur">disable_blur</a>": false,
                "<a href="#native_window">native_window</a>": false,
                "<a href="#is_background_page">is_background_page</a>": true,
                "<a href="#focus_game_takeover">focus_game_takeover</a>": "ReleaseOnLostFocus",
                "<a href="#focus_game_takeover_release_hotkey">focus_game_takeover_release_hotkey</a>": "...",
                "<a href="#enable_top_isolation">enable_top_isolation</a>": true,
                "<a href="#allow_local_file_access">allow_local_file_access</a>": true,
                "<a href="#is_alt_f4_blocked">is_alt_f4_blocked</a>": false,
                "<a href="#dev_tools_window_style">dev_tools_window_style</a>": false,
                "<a href="#debug_url">debug_url</a>": "http://localhost:3000",
                "<a href="#optimize_accelerate_rendering">optimize_accelerate_rendering</a>": false //Use directly shared texture rendering in game (only DX11)
            },
        },
        //Toggle printing of ads log to the console
        "<a href="#enable_top_isolated_sites_console">enable_top_isolated_sites_console</a>": false,
        //External URLs the web app should be able to access
        "<a href="#externally_connectable">externally_connectable</a>": { "matches": ["http://*.overwolf.com", "https://*.overwolf.com", "https://*.google-analytics.com"] },
        //Override the relative protocol with a preferred one
        "<a href="#protocol_override_domains">protocol_override_domains</a>": {"domain.com": "http","ajax.googleapis.com": "https"},
        //Causes links in the app to be opened using the user’s default browser ("user") or Overwolf’s browser ("overwolf")
        "<a href="#force_browser">force_browser</a>": "user"/"overwolf",
        //Enable OSR|GPU acceleration if supported by this machine
        "<a href="#enable_osr_acceleration">enable_osr_acceleration</a>": true,
        //A list of game ids for which game events are required
        "<a href="#game_events">game_events</a>": [...],
        //Disable the log file 1000 lines limitation. Don't enable it without Overwolf approval.
        "<a href="#disable_log_limit">disable_log_limit</a>": false,
        //Allows the access of custom plugin dlls
        "<a href="#extra-objects">extra-objects</a>": {"my-plugin":{"file":"plugins/my_plugin.dll","class":"MyPlugin.EntryPoint"}},
        //shortcut keys that trigger an app action
        "<a href="#hotkeys">hotkeys</a>":{"save_YourAppName": {"title": "Save Replay for later", "action-type":"custom", "default":"Ctrl+Shift+F9"}},
        //A list of content scripts to be loaded for specific windows
        "<a href="#content_scripts">content_scripts</a>": [{ "windows": [ "index" ], "js": [ "myscript.js" ] }s],
        //A list of events causing the app to launch
        "<a href="#launch_events">launch_events</a>": [{"event": "GameLaunch", "event_data":{"game_ids": [1136]}, "start_minimized": true}],
        //A custom user agent for the app to use when creating http requests. Don’t use this property if your app serves ads.
        "<a href="#user_agent">user_agent</a>": "...",
        //Disable opening of the developer tools for the app
        "<a href="#disable_dt">disable_dt</a>": false,
        //hosting app flexible data
        "<a href="#service_providers">service_providers</a>": {"nafihghfcpikebhfhdhljejkcifgbdahdhngepfb": {"whatever": "value"}},
        //Additional setting for developers (only when the app is in dev mode)
        "<a id="developer-manifest" href="#developer-game-settings">developer</a>": {
                //Enable auto App reloading when detecting local files changes.True by Default
                "<a href="#developer-game-settings">enable_auto_refresh</a>": true,
                //Reload delay (in ms) when detecting file changes (for multiple change)default is 1000 (1 second)
                "<a href="#developer-game-settings">reload_delay</a>": 1000,
                //Filter files which will be tracked.e.g (*.js;*.html)Default: all files (*.*)
                "<a href="#developer-game-settings">filter</a>": <span style="font-weight: 400;">"*.json;*.html"</span><span style="font-weight: 400;"> 
            }
    }
}
</code></pre>

## manifest.json without fields summary

<details>
<summary>Here you can see the same manifest.json file, but without comments</summary>

<pre><code class="json">
{
    "<a href="#manifest_version">manifest_version</a>": 1,
    "<a href="#type">type</a>": "WebApp",
    "<a href="#meta-object">meta</a>": {
        "<a href="#meta-name">name</a>": "Name of your app",
        "<a href="#meta-object">author</a>": "Author name",
        "<a href="#meta-object">version</a>": "1.2.3.456",
        "<a href="#meta-object">minimum-overwolf-version</a>": "128.0.0.1",
        "<a href="#meta-object">minimum-gep-version</a>": "128.0.0.1",
        "<a href="#meta-object">minimum-gs-version</a>": "128.0.0.1",
        "<a href="#meta-object">description</a>": "A plain text description",
        "<a href="#meta-object">dock_button_title</a>": "Short name of your app",    
        "<a href="#meta-object">icon</a>": "iconMouseOver.png",
        "<a href="#meta-object">icon_gray</a>": "iconMouseNormal.png",
        "<a href="#meta-object">launcher_icon</a>": "icon.ico",
        "<a href="#meta-object">splash_image</a>": "splashIcon.png",
        "<a href="#meta-window-icon">window_icon</a>": "windowIcon.png"
    },
    "<a href="#permissions-array">permissions</a>": ["Streaming","Hotkeys","GameInfo"],
    "<a href="#data">data</a>": {
        "<a href="#game_targeting">game_targeting</a>": {"type": "dedicated","game_ids": [10906, 7764]},
        "<a href="#start_window">start_window</a>": "windowName",
        "<a href="#window-data">windows</a>": {
            "windowName": {
                "<a href="#window-file">file</a>": "name.html",
                "<a href="#window-show_in_taskbar">show_in_taskbar</a>": true,
                "<a href="#window-transparent">transparent</a>": true,
                "<a href="#windows-resizable">resizable</a>": false,
                "<a href="#windows-show_minimize">show_minimize</a>": true,
                "<a href="#windows-clickthrough">clickthrough</a>": false,
                "<a href="#windows-disable_rightclick">disable_rightclick</a>": false,
                "<a href="#windows-forcecapture">forcecapture</a>": false,
                "<a href="#windows-show_only_on_stream">show_only_on_stream</a>": false,
                "<a href="#windows-ignore_keyboard_events">ignore_keyboard_events</a>": false,
                "<a href="#windows-in_game_only">in_game_only</a>": false,
                "<a href="#windows-desktop_only">desktop_only</a>": false,
                "<a href="#windows-disable_restore_animation">disable_restore_animation</a>": false,
                "<a href="#windows-grab_keyboard_focus">grab_keyboard_focus</a>": false,
                "<a href="#windows-grab_focus_on_desktop">grab_focus_on_desktop</a>": false,                
                "<a href="#windows-size">size</a>": {...},
                "<a href="#windows-min_size">min_size</a>": {...},
                "<a href="#windows-max_size">max_size</a>": {...},
                "<a href="#windows-start_position">start_position</a>": {...},
                "<a href="#windows-topmost">topmost</a>": false,
                "<a href="#windows-block_top_window_navigation">block_top_window_navigation</a>": true,
                "<a href="#windows-keep_window_location">keep_window_location</a>": true,
                "<a href="#windows-use_os_windowing">use_os_windowing</a>": false,
                "<a href="#background_optimization">background_optimization</a>": true,
                "<a href="#windows-mute">mute</a>": true,
                "<a href="#mute_excluded_hosts">mute_excluded_hosts</a>": ["..."],
                "<a href="#popup_blocker">popup_blocker</a>": false,
                "<a href="#show_maximize">show_maximize</a>": true,
                "<a href="#disable_blur">disable_blur</a>": false,
                "<a href="#native_window">native_window</a>": false,
                "<a href="#is_background_page">is_background_page</a>": true,
                "<a href="#focus_game_takeover">focus_game_takeover</a>": "ReleaseOnLostFocus",
                "<a href="#focus_game_takeover_release_hotkey">focus_game_takeover_release_hotkey</a>": "...",
                "<a href="#enable_top_isolation">enable_top_isolation</a>": true,
                "<a href="#allow_local_file_access">allow_local_file_access</a>": true,
                "<a href="#is_alt_f4_blocked">is_alt_f4_blocked</a>": false,
                "<a href="#dev_tools_window_style">dev_tools_window_style</a>": false,
                "<a href="#debug_url">debug_url</a>": "http://localhost:3000",
                "<a href="#optimize_accelerate_rendering">optimize_accelerate_rendering</a>": false 
            },
        },
        "<a href="#enable_top_isolated_sites_console">enable_top_isolated_sites_console</a>": false,
        "<a href="#externally_connectable">externally_connectable</a>": { "matches": ["http://*.overwolf.com", "https://*.overwolf.com", "https://*.google-analytics.com"] },
        "<a href="#protocol_override_domains">protocol_override_domains</a>": {"domain.com": "http","ajax.googleapis.com": "https"},
        "<a href="#force_browser">force_browser</a>": "user"/"overwolf",
        "<a href="#enable_osr_acceleration">enable_osr_acceleration</a>": true,
        "<a href="#game_events">game_events</a>": [...],
        "<a href="#disable_log_limit">disable_log_limit</a>": false,
        "<a href="#extra-objects">extra-objects</a>": {"my-plugin":{"file":"plugins/my_plugin.dll","class":"MyPlugin.EntryPoint"}},
        "<a href="#hotkeys">hotkeys</a>":{"save_YourAppName": {"title": "Save Replay for later", "action-type":"custom", "default":"Ctrl+Shift+F9"}},
        "<a href="#content_scripts">content_scripts</a>": [{ "windows": [ "index" ], "js": [ "myscript.js" ] }s],
        "<a href="#launch_events">launch_events</a>": [{"event": "GameLaunch", "event_data":{"game_ids": [1136]}, "start_minimized": true}],
        "<a href="#user_agent">user_agent</a>": "...",
        "<a href="#disable_dt">disable_dt</a>": false,
         "<a href="#service_providers">service_providers</a>": {"nafihghfcpikebhfhdhljejkcifgbdahdhngepfb": {"whatever": "value"}},
        "<a id="developer-manifest" href="#developer-game-settings">developer</a>": {
                "<a href="#developer-game-settings">enable_auto_refresh</a>": true,
                "<a href="#developer-game-settings">reload_delay</a>": 1000,
                "<a href="#developer-game-settings">filter</a>": <span style="font-weight: 400;">"*.json;*.html"</span><span style="font-weight: 400;"> 
            }
    }
}
</code></pre>
</details>

## Validate your manifest.json
To help you make sure that your manifest file is correct and complete, validate it against our schema file.

Please read all the info in our [schema validation best practice](../topics/validate-your-manifest).


## Access the manifest from your app

You can read the manifest JSON from your app's code using the [overwolf.extenstions.getManifest()](overwolf-extensions#getmanifestid-callback) function.


## Top manifest objects
There are many features enabled through this file. Some are mandatory (marked accordingly), others optional. Below is a description of features you can activate through the manifest.json :

| Name                                                                                    | Type                         | Description                               |   
| ----------------------------------------------------------------------------------------|------------------------------| ------------------------------------------|
| <a name="manifest_version" a class="anchor" aria-hidden="true"></a>manifest_version     | integer | Mandatory. Targets the manifest version you are working on. Currently there is only one version, therefore this value is always "1" |
| <a class="anchor" aria-hidden="true" id="type"></a>type                                 | string  | Mandatory. Declares the type of application. Can only be "WebApp"  |
| <a class="anchor" aria-hidden="true" id="meta"></a> meta                                | [meta](#meta-object) Object   | Mandatory. The app metadata  |  
| <a id="permissions">permissions</a>                                                     | [permissions[]](#permissions-array)     | An array of permissions that the app requires  |
| <a class="anchor" aria-hidden="true" id="data"></a>data                                 | [webapp settings](#webapp-settings-object) Object  | Mandatory. App data. Changes between different apps types. Currently can only be from type webapp settings |

## Permissions array
To use most overwolf.* APIs, your Overwolf app must declare relevant permissions in the relevant manifest.json field. It's an array of permissions that the app requires:  
<pre><code class="json">"permissions": ["Streaming","Hotkeys","GameInfo"]</pre></code>

| Permission             | Description                                                                                                       |
| ---------------------  |-------------------------------------------------------------------------------------------------------------------| 
| "Camera"               | Access webcam                                                                                                     | 
| "Microphone"           | Access microphone                                                                                                 | 
| "Logging"              | Access [overwolf.log](overwolf-log) API                                                                           | 
| "Extensions"           | Run or get information about other apps                                                                           | 
| "Streaming"            | Enable game streaming                                                                                             | 
| "DesktopStreaming"     | Enable desktop streaming                                                                                          | 
| "Profile"              | Access profile information and perform actions such as login and modifications                                    | 
| "Clipboard"            | Access clipboard                                                                                                  | 
| "Hotkeys"              | Get hotkey information for the current app                                                                        | 
| "Media"                | Access media library                                                                                              | 
| "GameInfo"             | Access current game information                                                                                   | 
| "GameControl"          | Allows to send key strokes to the game by using [overwolf.utils.sendKeyStroke()](overwolf-utils)                  | 
| "FileSystem"           | Allows accessing files from the local file system. </br>*Note: This is the only permission we currently enforce*  | 
| "LogitechLed"          | Allows accessing [overwolf.logitech.led](overwolf-logitech-led) API                                               | 
| "LogitechArx"          | Allows accessing [overwolf.logitech.arx](overwolf-logitech-arx) API                                               | 
| "OwWebview"            | Allows using the owwebview tag                                                                                    | 
| "VideoCaptureSettings" | Allows setting video capture settings                                                                             | 
| "Web"                  | access to the [overwolf.web](overwolf-web) API                                                                    | 
| "Tray"                 | Access to creating tray icons                                                                                     | 

## Meta object
Includes app metadata:

| Name                                        | Type     |  Description                                                                                               | Since |
|---------------------------------------------|----------| -----------------------------------------------------------------------------------------------------------| ----- | 
| <a class="anchor" aria-hidden="true" id="meta-name"></a>name                  | string   |  Mandatory. Name of your app. *See [note](#meta-note).*                                                    | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-author"></a>author              | string   |  Mandatory. The app's developer. *See [note](#meta-note).*                                               | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-version"></a>version            | string   |  Mandatory. Up to four dot-separated integers identifying the current app version.</br>Needs to be in the format of X.X.X where the X’s are numbers.</br>Here are some examples of valid versions: </br> ["version": "1", "version": "1.0", "version": "2.11.3", "version": "4.1.2.345"]                                          | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-minimum"></a>minimum-overwolf-version | string   |  Mandatory. Minimum version of the Overwolf Client with which the app is compatible. The format is similar to the "version" field.  | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-minimum-gep"></a>minimum-gep-version | string   |  Minimum version of the Overwolf Game Events Provider with which the app is compatible. The format is similar to the "version" field.  | 0.134  |
| <a class="anchor" aria-hidden="true" id="meta-minimum-gs"></a>minimum-gs-version | string   |  Minimum version of the Overwolf Game Summary with which the app is compatible. The format is similar to the "version" field.  | 0.137  |
| <a class="anchor" aria-hidden="true" id="meta-description"></a>description    | string   |  Mandatory. Your app's description in the Appstore tile. Limited to 180 characters.                   | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-dock"></a>dock_button_title | string   |  Short name of your app. Provide a short title that will fit in the dock button area – 18 chars max        | 0.79  |
| <a class="anchor" aria-hidden="true" id="meta-mouse-over"></a>icon            | string   |  Mandatory. A relative path from the app folder to the icon’s png file. This is the mouse-over (multi-colored) version of the icon that will be displayed on the Overwolf dock. The icon dimensions should be 256×256 pixels, 72 PPI. Overwolf will resize it to 37×37. Please make sure the png is smaller than 30KB.  More details on app icons can be found [here](../start/submit-your-app-to-the-store).                         | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-gray_icon"></a>icon_gray        | string   |  A relative path from the app folder to the icon’s png file. This grayscale version of the icon is for the default state that will be displayed on the Overwolf dock. The icon dimensions should be 256×256 pixels, 72 PPI. Overwolf will resize it to 37×37. Please make sure the png is smaller than 30KB                  | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-launcher_icon"></a>launcher_icon | string   |  A relative path from the app folder to the desktop shortcut icon’s ico file. This is a colored icon for the app’s desktop shortcut. More info [here](../start/submit-your-app-to-the-store).                             | 0.78  |
| <a class="anchor" aria-hidden="true" id="meta-splash"></a>splash_image        | string   |  A relative path from the app folder to the splash image icon’s png file. The image size should be 256x256px. If this image is missing, Overwolf will use the “icon” image as a splash image                                                                                                                                    | 0.116 |
| <a class="anchor" aria-hidden="true" id="meta-window-icon"></a>window_icon        | string   |  A relative path from the app folder to the icon’s png file. This is the window task bar icon \\ window header. The icon dimensions should be 256x256 pixels.                                                                                                                                    | 0.116 |

:::important
<a class="anchor" aria-hidden="true" id="meta-note"></a>Each app has a unique id (UID) that is generated out of the “name” and “author” strings. Once an app is published on the Appstore, its UID can’t be changed, so please choose your app and author names wisely before [submitting](../start/submit-app-proposal) your app.
:::

## Webapp settings object
A list of additional settings for the app.

| Name                              | Type     |  Description                                                                                               | Since |
|-----------------------------------|--------------------------------------------| -------------------------------------------------------------------------| ----- | 
| <a class="anchor" aria-hidden="true" id="game_targeting"></a>game_targeting              | [GameTargeting](#gametargeting-object) Object   |  An app can declare itself as targeted for one game or more.                  | 0.78  |
| <a class="anchor" aria-hidden="true" id="start_window"></a>start_window   | string     |  Mandatory. The name of the window (from the “windows” list) to initially load when the app starts.        | 0.78  |
| <a class="anchor" aria-hidden="true" id="window-data"></a>windows              | [extension_window_data](#extension-window-data-object) Object   |  Mandatory. A map from window names to window settings.                  | 0.78  |
| <a class="anchor" aria-hidden="true" id="enable_top_isolated_sites_console"></a>enable_top_isolated_sites_console | bool           |  Enable/Disable printing of ads log to the console. </br>*Default value is “false”.*   |0.115  |
| <a class="anchor" aria-hidden="true" id="externally_connectable"></a>externally_connectable    | [ExternallyConnectable](#externallyconnectable-object) Object  | A definition of external URLs the web app should be able to access. Allow your local app to be able to communicate with an iframe within the app. | 0.78  |
| <a class="anchor" aria-hidden="true" id="protocol_override_domains"></a>protocol_override_domains     | [ProtocolOverrideDomains](#protocoloverridedomains-object) Object   |  Overrides the relative protocol with a preferred one.  | 0.78  |
| <a class="anchor" aria-hidden="true" id="force_browser"></a>force_browser | string |  Choose whether links in the app will be opened using the user’s default browser or Overwolf’s browser.</br>*Possible values: "user" or "overwolf".* |0.91  |
| <a class="anchor" aria-hidden="true" id="enable_osr_acceleration"></a>enable_osr_acceleration | bool |  Enable OSR/GPU acceleration if supported by this machine. </br>*Note 1: this flag is still in Beta. It may not function as expected in some machines.*</br>*Note 2: This flag is only relevant for D3D11 supported games.* </br>*Note 3: see also the [optimize_accelerate_rendering](#optimize_accelerate_rendering) flag.* |0.126  |
| <a class="anchor" aria-hidden="true" id="game_events"></a>game_events | [game_events[]](#game-events-array) |  A list of game ids for which game events are required. |0.92  |
| <a class="anchor" aria-hidden="true" id="disable_log_limit"></a>disable_log_limit | bool |  Disable the log file's 1000-line limitation. </br>*Note: Do not enable it without Overwolf's approval.*        | 0.12 |
| <a class="anchor" aria-hidden="true" id="extra-objects"></a>extra-objects     | [extra-objects](#extra-objects-object) Object  |  Allows access to custom plugin dlls.  | 0.81  |
| <a class="anchor" aria-hidden="true" id="hotkeys"></a>hotkeys     | [hotkeys](#hotkeys-object) Object   |  Shortcut keys that trigger an app action.  | 0.78  |
| <a class="anchor" aria-hidden="true" id="content_scripts"></a>content_scripts | [content_scripts[]](#content_scripts-array) |  A list of content scripts to be loaded for specific windows. |0.78  |
| <a class="anchor" aria-hidden="true" id="launch_events"></a>launch_events | [launch_event_settings[]](#launch-event-settings-array) |  A list of events causing the app to launch. |0.82  |
| <a class="anchor" aria-hidden="true" id="user_agent"></a>user_agent | string |  A custom user agent for the app to use when creating http requests. </br>*Note: using ‘navigator.userAgent’ will not return the custom user agent, but the default one.* |0.86  |
| <a class="anchor" aria-hidden="true" id="disable_dt"></a>disable_dt | bool |  Disable opening of the developer tools for the app (with Ctrl+shift+I). </br>*Default value – “false”* |0.118  |
| <a class="anchor" aria-hidden="true" id="service_providers"></a>service_providers | [service_providers](#service_providers-object) object |  Extra data to external service providers |0.137  |
| <a class="anchor" aria-hidden="true" id="developer-game-settings"></a>developer | [developer setting](#developer-settings-object) object|  Additional setting for developers. |0.127  |

## GameTargeting object
An app can declare itself as targeted to one or more games.

| Name     | Type   |  Description   | Since |
|----------|---------------------------------|  ------------------------------------------------------------------- |------ |
| type     | string |  "all" – All games (e.g voice communication apps).</br>"dedicated" – Dedicated to a game or several games.</br> "none" – No games. | 0.78  |
| game_ids | [game_ids[]](#game-ids-array) |    The game IDs that your app targets                                                                                                  | 0.78  |

Example code:

```json
"game_targeting": {
    "type": "all" / "none" / "dedicated",
    "game_ids": [5426, 7764]  // only if type === "dedicated"
}
```

## extension_window_data object
A list of settings for the app windows.

| Name                   | Type   |  Description                                                                                                                                   | Since |
|------------------------|--------| --------------------------------------------------------------------------------------------------------------- |------ |
| <a class="anchor" aria-hidden="true" id="window-file"></a>file | string |  Mandatory. Points to a local HTML file to be loaded inside the window. If you wish to host your app in a remote web-site, you’ll have to have a local page that redirects to that remote website. In such cases, you need to make sure that the [block_top_window_navigation](#windows-block_top_window_navigation) property is set to false.                                                                                | 0.78  |
| <a class="anchor" aria-hidden="true" id="window-show_in_taskbar"></a>show_in_taskbar | bool   |  Define if the window is displayed in the Windows taskbar and alt-tab window selection menu.                                                   | 0.78  |
| <a class="anchor" aria-hidden="true" id="window-transparent"></a>transparent | bool   |  Indicates whether the window will be transparent and borderless. Any part of your window with transparent background ("background: transparent;") will become a see-through area that blends with the game or desktop. </br>If set to false a standard Overwolf window will be created.                  | 0.78  |
| <a class="anchor" aria-hidden="true" id="window-override_on_update"></a>override_on_update| bool |Indicates whether the window’s locally saved data should be overridden when the window’s size/location/opacity changes after a version update.|0.119 |
| <a class="anchor" aria-hidden="true" id="windows-resizable"></a>resizable | bool   |  Indicates whether the window can be resized.                                                                                                  | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-show_minimize"></a>show_minimize | bool   |  Indicates whether to show the window minimize button. Only relevant when not in transparent mode.                                             | 0.79  |
| <a class="anchor" aria-hidden="true" id="windows-clickthrough"></a>clickthrough  | bool   |  Indicates whether the window will not receive clicks in-game, instead, the clicks will be passed on to the game. To change this property at runtime, use [setWindowStyle()](overwolf-windows#setwindowstylewindowid-style-callback)                              | 0.80  |
| <a class="anchor" aria-hidden="true" id="windows-disable_rightclick"></a>disable_rightclick | bool   |  When set to true, disable right clicks entirely for this window.                                                    | 0.92  |
| <a class="anchor" aria-hidden="true" id="windows-forcecapture"></a>forcecapture | bool   |  Indicates whether this window should always be included in recordings, overriding any other setting.                                          | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-show_only_on_stream"></a>show_only_on_stream | bool   |  Indicates whether this window is visible only in streams (not visible to the streamer), overriding any other setting.    | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-ignore_keyboard_events"></a>ignore_keyboard_events | bool   |  Indicates whether the window will receive keyboard events or pass them on to the game.  | 0.83  |
| <a class="anchor" aria-hidden="true" id="windows-in_game_only"></a>in_game_only  | bool   |  Marks the window as available in-game only (Not accessible on Desktop).                                                             | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-desktop_only"></a>desktop_only | bool   |  Mark the window as available on desktop only, and not in-game. This flag should be used (set to “true”) when “use_os_windowing” or “native_window” flags are set to true. </br>*Note: using “desktop_only” and “native_window” flags for desktop windows will dramatically improve your app’s performance.*                                 | 0.89  |
| <a class="anchor" aria-hidden="true" id="windows-disable_restore_animation"></a>disable_restore_animation | bool |  Indicates whether the window will animate on minimize/restore while in game.                             | 0.89  |
| <a class="anchor" aria-hidden="true" id="windows-grab_keyboard_focus"></a>grab_keyboard_focus | bool |  Indicates whether the in-game window will 'steal' the keyboard focus automatically from the game when it opens, or leave the keyboard focus untouched. </br>*Default value is false* | 0.82  |
| <a class="anchor" aria-hidden="true" id="windows-grab_focus_on_desktop"></a>grab_focus_on_desktop  | bool   |  Indicates whether the desktop window will grab the focus automatically when it opens, or leave the focus untouched. </br>*Default value is true* | 0.99  |
| <a class="anchor" aria-hidden="true" id="windows-size"></a>size    | [size](#size-object) object |  Defines the size of the window in pixels when it is first opened. If your window is not resizable, this will be the constant size of your window. However, if your app is resizable – the app size is saved by Overwolf when closed so that the next time it is opened, it will preserve it. See our [window sizes tips](../topics/using-overwolf-windows#window-sizes)    | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-min_size"></a>min_size      | [size](#size-object) object |  Defines the minimum size of the window in pixels. See our [window sizes tips](../topics/using-overwolf-windows#window-sizes)                                                                         | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-max_size"></a>max_size      | [size](#size-object) object |  Defines the maximum size of the window in pixels. See our [window sizes tips](../topics/using-overwolf-windows#window-sizes)                                                                        | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-start_position"></a>start_position   | [point](#point-object) object|  The default starting position of the window counted in pixels from the top left corner of the screen.                       | 0.78  |
| <a class="anchor" aria-hidden="true" id="windows-topmost"></a>topmost     | bool    |  Indicates whether the window will be on top of other Overwolf windows. Handle with care as topmost windows can negatively impact user experience.   | 0.89  |
| <a class="anchor" aria-hidden="true" id="windows-block_top_window_navigation"></a>block_top_window_navigation | bool |  Refrain from non _blank <a> elements from “taking-over” the entire app’s window                         | 0.100  |
| <a class="anchor" aria-hidden="true" id="windows-keep_window_location"></a>keep_window_location   | bool        |  Window location won’t be changed when game focus is changed                                           | 0.101  |
| <a class="anchor" aria-hidden="true" id="windows-use_os_windowing"></a>use_os_windowing | bool |  When set to true, allows your window to have a full-screen maximize when calling the overwolf.windows.maximize function, and a real taskbar minimize when calling overwolf.windows.minimize. </br>*Note: Should only be used with desktop_only windows*                                                                                              | 0.102  |
| <a class="anchor" aria-hidden="true" id="background_optimization"></a>background_optimization | bool       | Enables JS engine background optimization. </br>*Default value is true*                                         | 0.103  |
| <a class="anchor" aria-hidden="true" id="windows-mute"></a>mute                    | bool       | Mutes sounds in window                                                                                                                    | 0.102  |
| <a class="anchor" aria-hidden="true" id="mute_excluded_hosts"></a>mute_excluded_hosts     | string[]   | Excludes hosts list so a stream from these hosts origins will not get muted even if the window is on "mute": true            | 0.103  |
| <a class="anchor" aria-hidden="true" id="popup_blocker"></a>popup_blocker           | bool       | Prevents new browser windows being opened automatically using script. </br>*Default value is false*                              | 0.103  |
| <a class="anchor" aria-hidden="true" id="show_maximize"></a>show_maximize           | bool       | Enables window maximize button. Relevant only for the standard Overwolf window ("transparent": false) </br>*Default value is false*       | 0.106  |
| <a class="anchor" aria-hidden="true" id="disable_blur"></a>disable_blur         | bool       | Causes the app’s window to never “lose focus”, so the window.onblur event is never triggered.  </br>*Default value is false*              | 0.106  |
| <a class="anchor" aria-hidden="true" id="native_window"></a>native_window  | bool  | Creates a native CEF desktop only window (which improves performance)</br>*Note: Should only be used with desktop_only windows*. </br>*Default value is false* | 0.107  |
| <a class="anchor" aria-hidden="true" id="is_background_page"></a>is_background_page | bool       | This flag MUST be used with background/hidden controller windows. </br>*Note: With this flag set to 'true', there's no need to set window related properties such as size, focus,  transparency, etc.*                                                                                                                                                        | 0.107  |
| <a class="anchor" aria-hidden="true" id="focus_game_takeover"></a>focus_game_takeover  | [string](#focus_game_takeover-options) |  Allows you to control the behavior of an app window while in a “mouse-less” game state. </BR>*Possible values: "ReleaseOnHidden" or "ReleaseOnLostFocus".*              | 0.107  |
| <a class="anchor" aria-hidden="true" id="focus_game_takeover_release_hotkey"></a>focus_game_takeover_release_hotkey | string | Allow Overwolf to display your app’s hotkey combination on the screen when the user switches to “exclusive mode”. </br>*The string value should be the hotkey name from the hotkeys section.*</br>*Relevant only if you set focus_game_takeover=ReleaseOnHidden*  | 0.110  |
| <a class="anchor" aria-hidden="true" id="enable_top_isolation"></a>enable_top_isolation    | bool       | Enable iframe isolation: runs it in a different process, so if some iframe is misbehaving (e.g. memory leak, etc.) it   won’t crash your app and will only crash the iframe process. </br>useful with Overwolf ads that run in an iframe.</br>*Default value is true*                       | 0.110  |
| <a class="anchor" aria-hidden="true" id="allow_local_file_access"></a>allow_local_file_access | bool  |  Allows access to local files that are not located in your app’s (extension) folder.</br>*Default value is false*       | 0.109 |
| <a class="anchor" aria-hidden="true" id="is_alt_f4_blocked"></a>is_alt_f4_blocked   | bool  |  Blocks the user from closing the window by using Alt+F4.</br>You can register to the onAltF4Blocked event to be noticed when a “block” was triggered.| 0.113  |
| <a class="anchor" aria-hidden="true" id="dev_tools_window_style"></a>dev_tools_window_style  | bool     |  Opens developer tools in dedicated window.                                                | 0.117  |
| <a class="anchor" aria-hidden="true" id="debug_url"></a>debug_url   | string     |  For local-server debugging (like react apps). You can use this field to set the localhost:port URL.</br>*Notes: You must have a local web server installed on your machine. </br>Valid only when loading unpacked extensions.</br>Valid only with "localhost" / "127.0.0.1"*                                                                                     | 0.127  |
| <a class="anchor" aria-hidden="true" id="optimize_accelerate_rendering"></a>optimize_accelerate_rendering | bool |  Valid only for transparent windows. Valid only if [enable_osr_acceleration](#enable_osr_acceleration) is on.| 0.127  |

## ExternallyConnectable object
A definition of external URLs the web app should be able to access. Read more [here](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing).  
Using "externally_connectable" will only allow your local app to be able to communicate with an iframe within the app (via [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)).

| Name    | Type     |  Description                                                                                                                               | Since |
|---------|----------| ------------------------------------------------------------------------------------------------------------------------------------------ |------ |
| matches | string[] |  Array of web page URL patterns to match with an external server URL | 0.78  |

Notes:

* Use star (*) in place of subdomain to allow access to all subdomains
* Make sure that the end of URL is WITHOUT any slash/backslash

Example code:
```json
"externally_connectable": {
    "matches": [
    "http://*.mysite.com", //make sure that the end of URL is WITHOUT any slash/backslash
    "https://*.mysecuredsite.com",
    "my-protocol://"
    ]
}
```

## ProtocolOverrideDomains object
Overwolf apps run under a custom url protocol and domain (overwolf-extension://[app-id]). 
This means that protocol-relative urls (//ajax.googleapis.com…) will try to load from a the overwolf-app protocol. 
Unless you want this to happen, you can use protocol_override_domains to override the relative protocol with a preferred one (e.g. https/http). 

| Name                      | Type   |  Description                        | Since |
|---------------------------|--------| ----------------------------------- |------ |
| protocol_override_domains | string |  web page URL patterns to override. | 0.78  |

Example code:
```json
"protocol_override_domains" : {"ajax.googleapis.com": "https", "domain.com": "http"}
```
This will swap the overwolf-app protocol with https for ajax.googleapis.com domain requestsand with http for domain.com requests.

## game_ids array
 A list of game ids for which game events are required.
 The full list of games that Overwolf supports real time event listnening can be found [here](games-ids).

| Name     | Type  |  Description                          | Since |
|----------|-------| ------------------------------------- |------ |
| game_ids | int[] |  The games IDs that your app targets. | 0.92  |

Example code:
```json
"game_ids": [7764, 5426, 7314]
```

## game_events array
 A list of game ids for which game events are required.
 The full list of games that Overwolf supports real time event listnening can be found [here](games-ids).

| Name        | Type  |  Description                          | Since |
|-------------|-------| ------------------------------------- |------ |
| game_events | int[] | The games IDs that your app targets.  | 0.92  |

Example code:
```json
"game_events": [7764, 5426, 7314]
```

Note: this array is exactly the same as the [game_ids[]](#game-ids-array), and we use it only for backwards compatibility.

## extra-objects object
Allows the access of custom plugin dlls. For more info see https://github.com/overwolf/overwolf-plugins.

| Name  | Type   |  Description                                          | Since |
|-------|--------|-------------------------------------------------------| ----- |
| file  | string |  the relative file path for the custom plugin dll.    | 0.81  |
| class | string |  the namespace entry point for the custom plugin dll. | 0.81  |


Example code:
```json
"extra-objects":{  
    "my-plugin":{  
        "file":"plugins/my_plugin.dll",
        "class":"MyPlugin.EntryPoint"
    },
    "simple-io-plugin":{  
        "file":"plugins/simple-io-plugin.dll",
        "class":"overwolf.plugins.SimpleIOPlugin"
    }
}
```
Then, from your app you can use the [overwolf.current_extension](overwolf-current_extension) API to get an instance:

```javascript
overwolf.current_extension.getExtraObject(“simple-io-plugin”, function…)
```
## hotKeys object
HotKeys are shortcut keystrokes that trigger app actions. The most common, basic usage is to show and hide your app in-game, but you can trigger more actions like saving, refreshing or any other custom actions.

:::note Note
Hotkeys will only work in-game, and never on desktop
:::

There are two types of hotkeys:
* **toggle** – Toggles application visibility by showing or hiding it. The advantage of it is that it can activate the app if it's closed, so use it if you want the hotkey to launch your app.   

* **custom** – Defines a custom hotkey to be used by the app. It is up to the app to register custom hotkeys and handle them. Custom hotkeys will only work when your app is already running. Unlike Toggle hotkeys, using a custom hotkey with the app closed will do nothing. In addition, you will need to use the [registerHotKey](overwolf-settings) function to register the hotkey, but the advantage is that you can use this callback function to customize your app window behavior.  

The map between the hotkey feature name and it’s settings:

| Name  | Type   |  Description                                          | Since |
|-------|--------|-------------------------------------------------------| ----- |
| title  | string |  Mandatory. Name of the hotkey as it will appear in the Hotkey tab in the settings. </br>*Note: the name must be unique in the client machine, so it's better to concatenate your app name to its tail*   | 0.78  |
| action-type | enum |  Defines the behavior of the hotkey: </br>**["toggle", "custom"]** | 0.78  |
| default | string |  The default key combination. | 0.78  |
| passthrough | bool |  Defines the behavior of the hotkey. | 0.78  |


Example code:
```json
"hotkeys": {
    "show_YourAppName": { 
        "title": "Show Player",
        "action-type": "custom",
        "default": "Shift+F9"
    },
    "save_YourAppName": {
        "title": "Save Replay for later",
        "action-type": "custom",
        "default": "Ctrl+Shift+F9"
    }
}
```

## content_scripts Array
A list of content scripts to be loaded for specific windows.   

| Name    | Type     | Description                                                 | Since |
|---------| ---------|-------------------------------------------------------------|------ |
| windows | string[] | The list of windows for which to apply this content script. | 0.78  |
| matches | string[] | The list of URLs for which to apply this content script. (regex supported)    | 0.78  |
| css     | string[] | The list of CSS files to be applied in this content script. | 0.78  |
| js      | string[] | The list of JS files to be applied in this content script.  | 0.78  |

In this example, when loading the index window, myscript.js will be loaded and when encountring https://google.com, mystyles.css and myscript2.js will be loaded:

```json
"content_scripts": [
    { "windows": [ "index" ], "js": [ "myscript.js" ] },
    { "matches": [ "https://google.com/" ], "css": [ "mystyles.css" ], "js": [ "myscript2.js" ] }
]
```

*Note: it also work for any iframes the app is hosting in an Overwolf window (not just the main page).*

## launch_event_settings array
A list of events causing the app to launch. It's enough that one of the events occurs to launch the app.

| Name    | Type   | Description                                                 | Since |
|---------| -------|-------------------------------------------------------------|------ |
| event | enum | The type name of the event. </br>**["GameLaunch", "AllGamesLaunch"]**| 0.82  |
| event_data |  [launch_event](#launch-event-object) object | The list of game class IDs for which the app will launch.    | 0.82  |
| start_minimized     | bool | The app’s main window will start minimized. | 0.82  |
| include_launchers      | bool | The app will be launched when game launcher is detected.  | 0.103  |

Code Example:

```json
"launch_events": [{
    "event": "GameLaunch",
    "event_data": {
        "game_ids": [1136],
        "wait_for_stable_framerate": 30
    },
    "start_minimized": true
}]
```
## launch_event object
Contains a list of game class IDs for which the app will launch.

| Name                      | Type  | Description                                                                                         | Since |
|---------------------------| ------|-----------------------------------------------------------------------------------------------------|------ |
| game_ids                  | int[] | The list of game class IDs for which the app will launch.                                           | 0.82  |
| wait_for_stable_framerate | int   | The app won’t start until the game’s framerate will stabilize around or above the stated framerate. | 0.82  |

Code Example:

```json
 "event_data": {
        "game_ids": [1136],
        "wait_for_stable_framerate": 30
    }
```
## developer settings object
Additional setting for helping apps developers. Mainly to set auto reloading of an app when local files changes.

:::note Note
These settings are relevant only if your app is in dev mode (channel="developers"), or if you are loading it as an unpacked folder.
:::

| Name                      | Type   | Description                                                                                                               | Since |
|---------------------------| ------ |---------------------------------------------------------------------------------------------------------------------------|------ |
| enable_auto_refresh       | bool   | Enable auto App reloading when detecting files changes. </br>*default is true*                                                  | 0.127 |
| reload_delay              | int    | Delay in milliseconds. When detecting file changes (for multiple changes).  </br>*default value is 1000 milliseconds (1 second)* | 0.127 |
| filter                    | string | Filter files which will be tracked.e.g (*.js;*.html. </br>*default value is “*.*” -> all files, but you can use several value like “*.json;*.html”* | 0.127 |

Code Example:

```json
"developer": {
    "enable_auto_refresh": true,
    "reload_delay": 1000, 
    "filter": "*.json;*.html"
}
```

## service_providers object

Provide extra data to external service providers. External apps (AKA service providers) can fetch this data from your app's manifest.

This object can contain any valid JSON objects, as long as it wrapped with the **hosting app UID**.

Code Example:

```json
"service_providers": {
    "nafihghfcpikebhfhdhljejkcifgbdahdhngepfb": {  //hosting app UID, Mandatory. On this case, it's the Game Summary built-in app UID.
        "whatever": "value"
    }
}
```

You can see a working example on the [hosted apps](../topics/hosted-apps#declare-your-tab) best practice guide.

## size Object
Defines a size (width and height) in pixels.

| Name    | Type | Description                                         | Since |
|---------| -----|-----------------------------------------------------|------ |
| width   | int  | Defines the width in pixels. *Optional parameter*   | 0.78  |
| height  | int  | Defines the height in pixels.  *Optional parameter* | 0.78  |



## point Object
Defines a top-left position in pixels.

| Name  | Type | Description                                                                       | Since |
|-------| -----|-----------------------------------------------------------------------------------|------ |
| top   | int  | Defines the position in the Y axis from the top in pixels. *Optional parameter*   | 0.78  |
| left  | int  | Defines the position in the X axis from the left in pixels.  *Optional parameter* | 0.78  |

## focus_game_takeover options
In games such as Overwatch and World of Tanks, which have a state without a mouse cursor, the user can’t control the Overwolf app window.
This flag automatically sets the app window into “exclusive mode” – input don’t pass to the game, and a cursor is available.

You can defines how the “exclusive mode” should be turned off:

* **ReleaseOnHidden** – When the window is hidden, automatically turn off exclusive mode. (if you are using this option, you must set also the [focus_game_takeover_release_hotkey](manifest-json#focus_game_takeover_release_hotkey) flag)
* **ReleaseOnLostFocus** – If the user clicks outside the window, exclusive mode is turned off.
