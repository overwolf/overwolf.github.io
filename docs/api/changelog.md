---
id: changelog
title: Changelog
sidebar_label: Changelog
---

Follow this entry for ongoing updates and changes to the project or tools.


Here you can find our [Developers Roadmap](https://trello.com/b/1V10E4IB/overwolf-roadmap).

## Version 0.190 (in-progress)

* Note that iterations 189 to 190 were combined into a single iteration.
* Note that the documentation is still in progress.

#### Game events

* [Halo Infinite](overwolf-games-events-halo-infinite)
  * Update new events & info:
    * local_player_stats
    * scene
    * match_start, match_end
    * kill, death, assit
    * roster
 * [Minecraft](overwolf-games-events-minecraft)
   * New info_update
     * addons_xxx (mods)  
   * supported from Minecraft versions 1.8 to 1.18 for both Forge and Fabric 
* [Hunt: Showdown](overwolf-games-events-hunt-showdown)
  * New supported game
  * New game_info:
    * scene

#### Docs

* Soon.

#### API

 * We are removing the following APIs that have been obsolete for a several  months:
   * `overwolf.settings.OnHotKeyChanged()`
   * `overwolf.settings.getHotKey()`
   * `overwolf.settings.setFpsSettings()`
   * `overwolf.settings.RegisterHotkey()`

#### Platform

 * Added the "`path`" property to the File object when using the [HTML5 drag & drop feature.](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/files)
 * When launching games, in-game app windows now hide themselves for games that aren't defined in the `game_targeting` property in the `manifest.json` file.

#### Bug fixes

* Fixed a bug where the Task Bar icon would show the shortcut icon instead of the window icon.
* Fixed an issue with Auto highlights where `match_start_time` could be a negative value if the match closed before the highlight has finished capturing.
* Toast notifications now also work when loading an extension as "unpacked".

## Version 0.188 (Jan 2022)

#### API

* **Longer Replays** - The Replay API can now record up to 10 minutes unlike the
 3 minutes it was able to record before. Please use this wisely as it can affect
 memory usage, CPU and the time which it takes Overwolf to create the replay 
 video file.
* **getRunningGameInfo2** - _`getRunningGameInfo` is back and he's angrier than 
ever_ - In this sequel, `overwolf.games.getRunningGameInfo2` no longer returns 
just `null` when it's being called while there's no game running.
Now it returns: 
  ```JavaScript
    {
        gameInfo: null,
        success: true
    }
  ```
* **Media Folder Access** - `overwolf.media.videos` namespace now has access to 
previously chosen video folders (so if a user has changed the video folder, 
you'll now also have access to the previous folder when using that API).

#### Platform

* **App Validations** - Each and every app that a user downloads now gets 
  validated to make sure it includes only the content the App Creator has 
  intended.
* **Updated 3rd party DLLs** - We updated most of our 3rd party DLLs, The
  following DLLs were updated to the following versions:
  ```text
  Newtonsoft.Json.dll - 13.0.1.25517
  CommandLine.dll - 2.8.0.0
  log4net.dll - 2.0.13.0
  Ionic.Zip.Reduced.dll was replaced with DotNetZip.dll - 1.6.0.0
  ```
#### Bug fixes

* Fixed a bug that caused an app window to become invisible after resizing.
* Fixed an issue that created an offset issue when using multiple monitors with
  different DPIs.
* Fixed a small memory leak with certain OpenGL games.
* Uninstalling multiple apps from the Overwolf Uninstaller while Overwolf is closed now works as intended.
* Fixed possible memory leak when using `overwolf.extensions.io.readTextFile` or `overwolf.extensions.io.writeTextFile` for extremely large files.

## Version 0.187 (Dec 2021)

#### Docs

* [League of Legends](overwolf-games-events-lol)
  * New feature in:
    * jungle_camps
      * baron & rift_herald icon_status remains at zero value at all times (Full information [here](https://github.com/overwolf/overwolf.github.io/blob/source/docs/api/overwolf-games-events-lol.md#jungle_camp-note)).
* [MTGA](overwolf-games-events-mtga)
  * Removed draft token and sealed token from:
    * inventory stats info update.
* [Rainbow Six: Siege](overwolf-games-events-rainbow-six)
  * Since december 2021 patch - team colors provided by GEP do not correspond to the game's UI team color (the local player is always blue in the game's UI). The local player's score, team score and roster regarding to his color are still consistent.
* [World of Warcraft](overwolf-games-events-wow)
  * New feature in:
    * addons
* [Halo Infinite](overwolf-games-events-halo-infinite)
  * New supported game.

#### API

* New manifest flag for running background tasks when a user uninstalls an app like removing files DLLs, logs, images, and other files injected into the user's machine.
  * You can set the new manifest flag (under "data"):  
    `"uninstall_window": { "file": "name.html", "required_runtime": 20000 }`
  * More info [here](manifest-json#uninstall_window-object).

#### Platform

* Links open in default browser - All links existing in the store now open in the users’ default browser.
* Analytics - When installing apps from the store’s carousel we specify it was from the carousel in the InstalledApp analytic.

#### Bug fixes

* Fixed an issue where CEF wouldn’t receive the real window size in some cases when restoring native windows.
* Fixed cases where Overwolf would freeze when turning on Replays with a webcam and closing a game.
* Fixed an issue where users wouldn’t be able to resize the game window if Overwolf was running as Admin.

## Version 0.185 (Dec 2021)

#### Docs

* [League of Legends](overwolf-games-events-lol)
  * New feature:
    * jungle_camps
* [Rocket League](overwolf-games-events-rocket-league)
  * New info updates:
    * car_look_inventory
    * trade_my_inventory
* [Warframe](overwolf-games-events-warframe)
  * Temporarily disabled `inventory`
* [Rainbow Six](overwolf-games-events-rainbow-six)
  * New info updates:
     * game_mode_log	
     * general_log
     * match_start_log
     * round_start_log
     * round_end_log
     * move_log
     * score_log
     * kill_log
     * ko_log
     * death_log
     * match_end_log
     * account_id_log
 * [Minecraft](overwolf-games-events-minecraft)
   * New event:
     * chat

#### API

* Added support for file:// URI scheme in [overwolf.media.videoscreateVideoComposition()](https://overwolf.github.io/docs/api/overwolf-media-videos#createvideocompositionsourcevideourl-segments-callback).  
  Note that it only allows paths under the extension folder (`%localappdata%/overwolf/extensions/…`) or extension videos folder (`overwolf/videos/…`).

#### Dev Console

* Added internal release notes to uploaded OPKs

#### Bug fixes

* Fixed bug with OW overlay in Win 11:  
  Clicking an icon on the taskbar while in-game didn't shift the focus from the game to the window that opened. Instead, the window was left behind the game.


## Version 0.184 (Nov 2021)

* Note that iterations 182 to 184 were combined into a single iteration. 

#### Docs

* A new I/O sample app in our [APIs sample apps repository](https://github.com/overwolf/apis-sample-apps). Demonstrates how to open and load a file to your app, Display it, Add some content, and Write it back to the file.
* As for now, the [basic sample](../start/sample-app-overview#docsNav) app was built only for Fortnite. In the new version of the sample app, we added support for 14 more games to ease your learning:
League of Legends, Valorant, Minecraft, CSGO, Escape From Tarkov, Overwatch, PUBG, Rainbow Six Siege, Splitgate: Arena Warfare, Path of Exile, Dota 2, Call of Duty: Warzone, and Warframe.

#### API

* Warframe game events support is back.

## Version 0.181 (Oct 2021)

#### Docs

* [MTGA](overwolf-games-events-mtga)
  * New feature under:
    * game_info
* [Warzone](overwolf-games-events-warzone)
  * New update & note for:
    * roster
* [New World](overwolf-games-events-new-world)
  * New supported game.
* [Eternal Return](overwolf-games-events-eternal-return)
  * New supported game.
* [Hearthstone](overwolf-games-events-hearthstone)
  * New info update:
    * arena
* Our [official sample app](../start/sample-app-overview) now works and auto-launches with a few more games: Fortnite, CSGO, League of Legends, Escape From Tarkov, Minecraft, Overwatch, PUBG, Rainbow Six Siege, Splitgate: Arena Warfare, Path of Exile, Valorant, Dota 2, Call of Duty: Warzone or Warframe.
* New [IO sample app](overwolf-io#sample-app): Demonstrates how to open and load a file to your app, Display it, Add some content, and Write it back to the file.
    
#### API

* New flag for the [OverlayInfo](overwolf-games#overlayinfo-object) object: [isFullScreenOptimizationDisabled](overwolf-games#isfullscreenoptimizationdisabled-note). The OW overlay is not visible in full-screen mode for games that require an exclusive mode to interact with the OW app's windows (like Destiny 2, CSGO, and warzone). This indication lets you show the user a desktop notification to switch from full screen to windowed or borderless mode or enable full-screen optimization.

* New low disk space warnings when we are recording: 
  * If you are using the Streaming API, [onStreamingWarning](overwolf-streaming#onstreamingwarning) event is fired, with the error text `disk_space_warning`.
  * If you are using the Replays API,  [onCaptureWarning](overwolf-media-replays#oncapturewarning) event is fired, with the error text `disk_space_warning`.
  * It will show in the [obs log](../topics/logs-obs) as: `On disk space warning...`.

* New [encoding](overwolf-io#encoding-enum) param to [overwolf.io.listenOnFile()](overwolf-io#listenonfileid-path-option-callback).

#### Platform

* Support capturing rate of up to 120 FPS.  
  You have the option to either change the FPS in the Overwolf settings or App Creators can use it with our [Streaming API](overwolf-streaming).

#### Dev Console

* Internal enhancments.

#### Bug fixes

* Recording Final Fantasy XIV no longer fails.
* Game Capture no longer hangs when it fails to record.
* Fixed an issue with the Zoom API.

## Version 0.180 (Sep 2021)

#### Docs

* None.

#### API

* [bottommost](manifest-json#windows-bottommost) - a new manifest flag. Completely opposite to the [topmost](manifest-json#windows-topmost) flag. When set true to a window, it's not possible to drag it over other app's windows. Beside the manifest, you can set this flag through the API:
  * Added to [overwolf.windows.obtainDeclaredWindow()](overwolf-windows#obtaindeclaredwindowwindowname-overridesetting-callback): overrideSetting { isBottomMost :bool }.
* * New `keep_game_capture_on_lost_focus` flag added to the video options object of the [streaming](overwolf-streaming#streamvideooptions-object) and [replays](overwolf-media-replays#replayvideooptions-object) APIs.

#### Platform

* None.

#### Dev Console

* None.

#### Bug fixes

* None.

## Version 0.178 (Aug 2021)

* Note that iterations 178 to 179 were combined into a single iteration. 

#### Docs

* None.

#### API

* [overwolf.window.setZoom()](overwolf-windows#setzoomwinzoomfactorowid-windowid) can now be applied to a specific window and not to all of the app windows.

#### Platform

* Installer:
  * Auto-Launch - Up until now if Overwolf was already installed, downloading and installing an app from the "Appstore on web" will install the app, but it wouldn’t auto-launch the app after it was installed. Now it does.
  * Error Messages - We have improved our installer error messages. They will always include links to our Discord or to our Help Center.
* Analytics - A bunch of new analytics were created in this iteration.

#### Dev Console

* None.

#### Bug fixes

* Fixed a bug with increased text scaling in Windows.

## Version 0.176 (Aug 2021)

* Note that iterations 176 to 177 were combined into a single iteration. 

#### API

* Toast Notification - Overwolf apps can use the newly implemented API, [overwolf.notification](overwolf-notifications), to show users native Windows notifications (those that pop up on the right bottom side of your screen).
  * [showToastNotification(ToastNotificationParams, callback)](overwolf-notifications#showtoastnotificationargs-callback) - This self explanatory function shows the native Windows notification once called.
  * [onToastNotification](overwolf-notifications#ontoastnotification) - An event listener that triggers when a notification was interacted with.
  * New Enums: [AppLogoCrop](overwolf-notifications#applogocrop-enum), [ToatsEventType](overwolf-notifications#toatseventtype-enum), [ToastEventError](overwolf-notifications#toasteventerror-enum).
* Dedicate video capture option for specific games (CSGO, Warzone, Destiny 2) that requires [exclusive mode](../topics/exclusive-mode) to interact with the OW windows: up until now when we recorded these games in windowed mode, it resulted in a recording of the whole desktop. We now provide the option to record only the game window.
  * This feature is disabled by default, but you can enable it with the new `game_window_capture` property that you can find in the video settings object in the [replays API](overwolf-media-replays#replayvideooptions-object) or the [streaming API](overwolf-streaming#game_window_capture-notes).  
  * New `is_game_window_capture` properties added to [onStartStreaming](overwolf-streaming#onstartstreaming) and [onReplayServicesStarted](overwolf-media-replays#onreplayservicesstarted) to inform the app Creator if this new capturing feature was used or not on the current OW window.

#### Bug fixes

* Subscription in-app login form fix.
* Overwolf will no longer crash when merging too many files while using [createVideoCompositionFiles()](overwolf-media-videos#createvideocompositionfilesfiles-outputfile-callback).
* Fixed video recording for HyperScape.
* Implemented a fix aimed at the integrity of the LevelDB.
* Transparent windows in OpenGL games now get properly repainted.

## Version 0.174 (Jul 2021)

* Note that iterations 174 to 175 were combined into a single iteration. 

#### Docs

* [Porting your Electron app to Overwolf](../topics/electron-migration) - new guide.
* New sample apps to make the OW creators life easier: [login with Twitch/Steam sample app](../topics/login-with-twitch), [Replays API sample app](overwolf-media-replays#sample-app), [Streaming API sample app](overwolf-streaming#sample-app), and [Channels API sample app](../topics/app-channels#app-channels-sample-app).
* How to [get user info](../topics/login-with-overwolf#get-user-info-from-token) when you integrate the "login with Overwolf" feature in your website.

#### API
 
 * New manifest flag: Now you can set the [window style](manifest-json#windows-style) as `InputPassThrough` through the manifest, and not just with the [overwolf.windows.setWindowStyle()](overwolf-windows#setwindowstylewindowid-style-callback) function.
 * New enum: [overwolf.profile.subscriptions.inapp.enums.Theme](overwolf-profile-subscriptions-inapp#theme-enum), to use with [overwolf.profile.subscriptions.inapp.show()](overwolf-profile-subscriptions-inapp#showplanid-theme-callback).  
 * [overwolf.windows.changeSize(windowId, width, height, callback)](overwolf-windows#changesizewindowid-width-height-callback) is now obsolete, replaced by [overwolf.windows.changeSize(changeSizeParams, callback)](overwolf-windows#changesizechangesizeparams-callback).

#### Platform

* OBS enhancments.

#### Dev Console

* Subscriptions - The first asset in the sub plan can be animation or static image, and users can see the asset type above the image.

#### Bug fixes

* Fixed store showing logged in state when client does not (after being logged in previously but failing a startup web request).
* Fixed launch origin (relaunch) when using relaunch to launch apps.
* Fixed the overwolf.profile.openLoginDialog API in cases where the store was closed.
* Fixed an issue where failed to start game recording was not fired in some cases, even though we failed to record.

## Version 0.173 (Jun 2021)

* Note that iterations 171 to 173 were combined into a single iteration. 

#### API

* overwolf.utils.openUrlInDefaultBrowser - enhance security by checking the scheme and only allow requests to http/s or protocols allowed in the manifest.  
  * Manifest example: `"data": {"allowed_protocols": { "protocols": ["mailto", "steam"]}}`
  * 'file' in the scheme will always be blocked.
* Added `processId` to [overwolf.games.getRunningGameInfo](overwolf-games#getrunninggameinfocallback) and [overwolf.games.onGameInfoUpdated](overwolf-games#ongameinfoupdated).
* Coexistence API - API/Event to indicate if there is another overlay library running + if Overwolf doesn't manage to render anything, allow the app to give a relevant notification
  * Added a new object, [overwolf.games.OverlayInfo](overwolf-games#overlayinfo-object),  with info about the current out of process overlays.
  * Added a new [GameInfoChangeReason](overwolf-games#gameinfochangereason-enum) enum to the [overwolf.games.onGameInfoUpdated](overwolf-games#ongameinfoupdated) event,with some info about the hooking error reason. (if an hooking error has occurred).
  * Added a new [KnownOverlayCoexistenceApps](overwolf-games#knownoverlaycoexistenceapps-enum) enum with a list of known apps causing overlay coexistence issues with OW.
  * New API: [overwolf.games.getLastRunningGameInfo()](overwolf-games##getlastrunninggameinfocallback) - returns the last played gameinfo (when no game is currently running). 
  * new API: [overwolf.settings.games.setAutoLaunchEnabled](overwolf-settings-games#setautolaunchenabledgameclassid-callback): allows apps to control what games they auto-launch for following user gesture (similar to performUpdate).
  * New API: [overwolf.os.tray.destroy](overwolf-os-tray#destroy) - Added a new method for removing an extension tray icon and menu immediately.
  
#### Platform

* New client settings (Capture => Advanced Settings) with Rate Control and Max Kb/s sliders.
* Rebranding - we’re releasing almost all of Overwolf’s client modules with a new branding.

#### Dev Console

* App Channels - a new feature that enables you to create and distribute different app versions for your users /testers. The first part of this feature [announced already on v0.170](#api-1), and now [the second](../topics/app-channels) (and last) part is released - the app channels management tools from the dev console. 

#### Bug fixes

* Extension tray icons would get blurry when changing display settings (try changing DPI from 100% to 175%).
* Replay API - TurnOffResult typo.
* [GameInfoUpdatedEvent](overwolf-games#gameinfoupdatedevent-object) Object - fixed the issue that runningChanged is not being updated once a game starts running.
* Fixed the issue that Video recording won't start if game is minimized.
* Fixed a bug where subs oneapp page sometimes won't open.
* New Reddit (new.reddit.com) has an issue with escaped space characters in redirects. This fix ensures space (%20) won't be re-encoded to %2B and break the redirect

#### Game events

* overwolf.media.replays TurnOffResult typo.
* [Football Manager2021](overwolf-games-events-fm2021)
  * New supported game with updates and events under:
    * match_info
* [Warzone](overwolf-games-events-warzone)
  * New update under:
    * match_info

## Version 0.170 (May 2021)

#### API

* **App Channels:**  
  Channels are no longer exclusive to the Overwolf client, apps can now also have channels; Creators can set a specific channel to use a specific version, this way they can super easily create and distribute beta versions for their apps.
  * *Note that testing is still in progress. We will announce that soon for general usage.* 
  * API: [The overwolf.settings.setExtensionSettings](overwolf-settings#setextensionsettingsextensionsettings-callback) function now accepts a new property in its [GeneralExtensionSettings](overwolf-settings#generalextensionsettings-object) object called `channel`, this will set the app to a specific channel.
* **In-app Subscriptions flow:**  
  We now give Creators the option to show the subscription modal inside their apps. You will never have to send the users to the store again.
  * In order for this feature to work, the Creator will need to add `Subscription` to the “Permissions” array in the app’s `manifest.json` file.
  * New API, [overwolf.profile.subscriptions.inapp](overwolf-profile-subscriptions-inapp): Allow apps to launch the subscription window inside their app and change subscription through the app (includs new permission: "subscription").
  * API: New function introduced to return additional details about the subscribed user, such as expiry date and subscription state:  
    [overwolf.profile.subscriptions.getDetailedActivePlans()](overwolf-profile-subscriptions#getdetailedactiveplanscallback).
  *  new enum with the 3 available subscription states: active, cancelled, and revoked: [overwolf.profile.SubscriptionState](overwolf-profile-subscriptions#subscriptionstate-enum).
  * [overwolf.profile.getCurrentUser](overwolf-profile#getcurrentusercallback) - this API now also returns the user’s display name.

#### Platform

* .NET 4.8 implementation - we’ve upgraded the .NET version Overwolf uses to 4.8.

#### Dev Console

* Subscriptions statistics page was added

#### Bug fixes

* Fix [overwolf.utils.openUrlInOverwolfBrowser](): allow to open tab and redirect back to overwolf-extension when origin URL is at 'externally_connectable' and to tab was open from the same extension.
* Overwolf no longer reloads apps when a secondary GPU process is being created.
* Fixed a typo in setRequiredFeatures when getting the “Provider not ready” error, what was once `succedss` is now `success`.

#### Game events

* Support for the COD: Warzone game has been disabled temporarily.
* Support for the PUBG Lite game will be disabled permanently from Apr. 2021 since PUBG Lite will be shut down at that date. In addition, we will remove all the content from our site.
* * [VALORANT](overwolf-games-events-valorant)
  * New supported map - Breeze.
* [Rocket League](overwolf-games-events-rocket-league)
  * New info update under:
    * game_info
* [Apex Legends](overwolf-games-events-apex-legends)
  * New "Arena" game mode will be enabled in the near future.
* [Valheim](overwolf-games-events-valheim)
  * New updates and events under:
    * game_info
    * kill


## Version 0.169 (Apr. 2021)

#### API

* Improve OBS encoders support detection using the [overrwolf.streaming.getStreamEncoders()](overwolf-streaming#getstreamencoderscallback) API (we added new error state for unsupported encoders [EncoderData](overwolf-streaming#encoderdata-object) object).
* Added the following properties to [overwolf.io.paths](overwolf-io-paths):
  * overwolf install dir : 'overwolf.io.paths.overwolfInstallation'.
  * overwolf install dir with version number : 'overwolf.io.paths.overwolfInstallationWithVersion'.
  * obs dir : 'overwolf.io.paths.obsBin'.
* Improved behavior when switching a video to full screen in an Overwolf native window.
* New event: [overwolf.streaming.onSupportedEncodersUpdated](overwolf-streaming#supportedencodersupdatedevent-object) -  Fired upon support encoder list updated.

#### Platform

* General stability fixes for OBS and uncommon recording failures, Improved error indications when we do fail to record.
* Added support for overlay above UWP (Universal Windows Platform) games (minecraft, sea of thieves & roblox). some of these games are still not working perfectly, and currently, the plan is to only enable Sea of Thieves for UWP in the near future. 

#### Dev Console

* General enhancments for the crash reports section.

#### Bug fixes

* Fixed the issue where native windows can be resized greater than their manifest maximum size.
* Fixed the issue where Video elements "glitched" when switching the app to full-screen mode.
* Fixed the issue where you got an error that you should update your graphic card drivers only AFTER the game capturing starts. Now, you get this error before the capture starts.
* Fixed the Rocket league (Epic version) invisible cursor issue.
* CS:GO’s "Out of Process Overlay" is no longer the only supported overlay mode.
* We've killed the nameless Overwolf window that would sometimes appear when going in-game.

#### Game events

* [Valehim](overwolf-games-events-valheim)
  * New supported game
* [Dota](overwolf-games-events-dota2)
  * New info update
    * game_mode
* [TFT](overwolf-games-events-tft)
 * Riot is working on a new TFT mode named "Hyperoll". The mode is currently available in the PBE servers and soon in live servers and can be detected as 1130 in the `queueID`.

## Version 0.168 (Apr. 2021)

Note that iterations 167 to 168 were combined into a single iteration.  

#### API

* You can now detect if the [Windows 10 Hardware-Accelerated GPU Scheduling](../topics/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice) feature is enabled by calling [overwolf.utils.getSystemInformation()](../api/overwolf-utils#getsysteminformationresult-object). The callback object contains the **HAGSEnabled** property that can be true or false.  Note that the user can set the HA feature on or off therough the client settings.
* Close overwolf when closing an app: apps can now add the new 'Shutdown' permissions to it's manifest, then call [overwolf.settings.setExtensionSettings()](overwolf-settings#setextensionsettingsextensionsettings-callback) with "exit_overwolf_on_exit: true".
  * **Note: This option shouldn’t be used without Overwolf’s permission**.
* Social API: [overwolf.social.youtube.performLogin()](overwolf-social-youtube#performlogoutcallback) now opens in default browser and using pubsub to update client.
* [overwolf.util.openFilePicker()](overwolf-utils#openfilepickerfilter-callback): now returns both overwolf-url and path to file.  
  **Important: note that this function signature is not backwards compatible: the `url` property in the callback now returns the path in overwolf-fs:// format and not in an absolute path. (the new `file` property returns the absolute path).
* url-scheme: added 'overwolfstore' url-scheme - use 'overwolfstore://app/:uid/reviews/:commentId' to open a specific comment.  
  This originally intended to be used as a link in emails users would get if a dev replied to their comment.
* Some news for you on the video capture front. We added support for alternative recording resolutions. More info in our [Video capture best practices](../topics/video-capture#recording-resolutions) guide.

#### Platform

* General partner reports on redash - now you can export your reports to CSV.
* OW browser redirects: allow to open tab and redirect back to overwolf-extension when origin URL is at 'externally_connectable' and to tab was open from the same extension. See more details in our [OAuth integration guide](../topics/login-with-twitch).
* App UTM params: Until now, UTM params tagged with the installer were saved to the OW database only for new OW installations.
Now, they are saved to the DB in an app context, also for existing installations. (should be sent with 'InstalledApp' analytic). 
  * The parameters will be passed as command-line arguments in case overwolf is installed - more info about UTM params on our [Referral ID Guide](../topics/create-download-link).
  * In addition, for security and privacy reasons, the app sees only its context. Meaning, Your app will not be able to read other app's UTM params. You will get empty strings.


#### Dev Console

* Subscriptions
  * Added support for dark theme subscription plan page (coming soon)
  * Added the option to edit the Xsolla payment page background image
  * Added filters and improved sorting for your subscribers list
  * Bug fixes
* Release management
  * Improved UX 

#### Bug fixes

* DirectX 11 games should no longer be minimized while `overwolf.windows.restore()` is being used consecutively.

#### Game events

* [VALORANT](overwolf-games-events-valorant)
  * New supported game mode - Escalation
  * Fix to support the new patch
* [Teamfight Tactics](overwolf-games-events-tft)
  * Fix to support the new patch
* [Fortnite](overwolf-games-events-fortnite)
  * Support for the new season
* [Rainbow Six: Siege](overwolf-games-events-rainbow-six)
  * Support for the new season
* [CS:GO](overwolf-games-events-csgo)
  * Change & update to `kill_feed`
* [Fortnite](overwolf-games-events-fortnite)
  * Improved plugin code.


## Version 0.166 (Mar. 2021)


#### API

* The [disable_cleanup](manifest-json#disable_cleanup) flag in the manifest.json no longer deletes the app's files in the `%Localappdata%/Overwolf/Extensions` folder.

#### Platform

* Overwolf will now restore installed apps in cases where the local database got corrupted.
* Updated OBS to version 26.1.1. - now we have the latest and best recording capabilities.
* Improve the OBS crash reports.
* Overwolf Appstore as a default extension - So the Overwolf Appstore has all grown up, it is now a default extension within Overwolf. Most of you won’t
even notice a change, and that’s good, but under the hood, there are several big differences.


#### Dev Console

* Export data to CSV.


## Version 0.165 (Feb. 2021)

Note that iterations 163 to 165 were combined into a single iteration.  

#### API

* [overwolf.media.videos.addWatermark()](overwolf-media-videos#addwatermarksourcevideourl-watermarkurl-watermarkparams-callback) watermark file now supports absolute/local path to a file in the extension directory.  
* Max recording resolution is now capped at 4K - OBS has issues capturing resolutions higher than that so we are temporarily limiting it until we can find a more permanent fix.

#### Platform

* Increase max log file item to upload from 1 Mb to 3Mb (When using [uploadClientLogs()](overwolf-utils#uploadclientlogscallback)).
* Increase *.HTML dump limit log size to 5 Mb.
* Change Extension crash notification Text to: "%APP_NAME% has crashed".
* Browser inGame dragging: stop the drag when alt+tab from game. Make sure we stop the dragging when OnDragEnd is triggered.
* New Overlay process: internal changes and enhancements. no further details will be released. Just mentioned here as it includes many internal changes.
* App Updates - Some major refactoring to how we update our apps mostly in regards to smarter phasing.
  * When updating apps, it allows Overwolf to only download the part of the app that has changed, Overwolf then updates the app with these changes, saving a lot of time and bandwidth.
  * Diff didn’t work for apps that were being phased up until this iteration. But now it works.
  * Downloading Phased Apps From The Store - Users will get the latest app version if they are part of that app’s phasing when downloading it from the Appstore. Instead of getting the previous app version first, and
only then updating to the new version (which was the case until now).
* Windows Insider is no longer supported.
* Updated all the license text files Overwolf uses.


#### Docs

* [SSO guide](../topics/login-with-overwolf) - how to implement "login with Overwolf" button on your website.

#### Bug fixes

* Fixed: If a hotkey is defined in the manifest with no default key binding, [hotkeys.get()](overwolf-settings-hotkeys#getcallback)/attempting to set the hotkey would result in an error.
* The setting exit_overwolf_on_exit (can be set through [overwolf.settings.setExtensionSettings()](overwolf-settings#setextensionsettingsextensionsettings-callback)) no longer closes Overwolf when an app that was using that setting has crashed, however, it will still close Overwolf if the user has dismissed the crash notification or didn't click on the "Relaunch" button in that same notification.
* Fixed an issue with the hotkeys API for apps that have their hotkeys defined in the manifest.json, but have no default binding.

#### Dev Console

* Soon.

#### Game events
* [Rainbow Six: Siege](overwolf-games-events-rainbow-six)
  * New feature & updates:
    * defuser
    * match_id
    * map_id
    * round_outcome_type
   * 'name' update is currently unavailable.
* [Apex Legends](overwolf-games-events-apex)
  * New addition to update:
    * roster
    
## Version 0.162 (Jan. 2021)

Note that iterations 160 to 162 were combined into a single iteration.  

#### API

* Allow apps to add/remove their hotkeys right from the app (using a new API) without opening the OW client UI. You can assign only hotkeys that pre-defined in your manifest.
  * Use the new [overwolf.settings.hotkeys.assign()](overwolf-settings-hotkeys#assignhotkey-callback) and  [overwolf.settings.hotkeys.unassign()](overwolf-settings-hotkeys#unassignhotkey-callback) APIs.
* Reddit presents new required param for sharing: added a new share param called [Flair](overwolf-social-reddit#flair-object),  and a new function: [overwolf.social.reddit.getSubredditFlairs()](overwolf-social-reddit#getsubredditflairssubredditname-callback).
* Add to [GameInfoUpdatedEvent](overwolf-games#gameinfoupdatedevent-object):  
  * A new info change type: **gameOverlayChanged**.  Indicates if OW unable to hook input devices when hooking into a game.
  * If true, check if **overlayInputHookError** is true as well to identify that there is a hooking issue.
* Added a new API namespace: [overwolf.cryptography](overwolf-cryptography).
  * Currently supports two functions: *encryptForCurrentUser()* and *decryptForCurrentUser()*.
* Added [overwolf.games.inputTracking.init()](overwolf-games-inputTracking#initcallback) for using *getMousePosition* without pre-register to events.

#### Platform
 
* Security patches:
  * Block browser from creating iframe to *overwolf-extensions://*.
  * Block iframes inside apps from creating an iframe to *overwolf-extensions://* - unless in externally_connectable
  * Block app windows that run in a remote address - from creating iframes to *overwolf-extensions://* - unless in *externally_connectable*.
* Update to new OBS (141 with sdk 10.0.19041.1).
* Increase `localstorage` size to ~50MB. Note that localstorage should be used up to 20-25 MB saved data. If you need more than that, you should use other storage.
* Enable `navigator.storage.persist()` for *overwolf-extension:\\* scheme.

#### Bug Fixes

* FilePicker with multipleSelection splits files with comma in their names.

#### Dev Console

* Rates and Reviewes: users can leave reviews and rate your app in Overwolf’s App store, and you can browse these ratings and reviews and reply to users from the dev console.

#### Game Events

* [Rocket League](overwolf-games-events-rocket-league)
  * New events & updates:
    * death
    * action_points
* [Call of Duty: Warzone](overwolf-games-events-warzone)
  * New events & updates:
    * game_mode
    * game_map

## Version 0.159 (Dec. 2020)

#### API

* [overwolf.windows.obtainDeclaredWindow()](overwolf-windows#obtaindeclaredwindowwindowname-callback) will now also return monitorId (where applicable) - allowing one window (background) to know on which monitor another window exists. 
* Remove app indexedDB upon uninstall.
* [overwolf.streaming.start]() now support undefined settings.
* WebCam support: 
  * Allow adding a video source (Webcam), to replay's video. (generic obs source + secondary file).
  * The webcam source can be rendered to a different video file (or not).
  * Support multiple replay's consumers.
  * New API to retrieve connected WebCams: [overwolf.media.getWebcams](overwolf-media#getwebcamscallback).
* [overwolf.windows.setDesktopOnly()](overwolf-windows#setdesktoponlywindowid-shouldbedesktoponly-callback) - This function is now obsolete.

#### Platform

* Cleanup upon uninstall: Clear IndexedDB.
* New guide: [App login with Twitch, Discord, Facebook or Google](../topics/login-with-twitch).

#### Bug Fixes

* Call overwolf.media.replays.capture with futureDuration of -1.
* Remove State 'open' when opening OSR windw.
* Overwolf windows should no longer be considered as incognito.
* Twitch login popup window: allow extension popup window to handle OW custom scheme (if origin is match externally connectable regex).
* Block custom scheme when app ExternallyConnectable is null.
* Log when blocking Custom overwolf Scheme navigation.
* Fix overwolf.windows.bringToFront() api for native\desktop only: will move window to top most and will set the window as the foreground window (fullcreen game mode will be minimized).

#### Dev Console

* Crash logs are now available on the "Crash reports" section.
* Comments and Replies - It is now possible for app developers to reply to users' reviews (through the dev console). These replies will be visible to anyone who checks the reviews of the app.
* Comments Info - While on the subject of comments and reviews, we are now also sending some additional information about users' Overwolf versions and modules and some basic system information such as DPI and resolution. This will help you and us diagnose some issues when they happen.
* Test Subscription - It is now possible for app developers to see the test subscriptions they made in the Developers console. These will only be visible if the app developer is logged into Overwolf, and will be hidden otherwise, which allows the developer to play around with how the subscription flow looks and feels before adding the subscription feature.

#### Game Events

* Valorant.
  * Added new update: **pseudo_match_id**  under [match_info](overwolf-games-events-valorant#match_info).
* COD: Warzone.
  * Added new update: **pseudo_match_id**  under [match_info](overwolf-games-events-warzone#match_info).
* Overwatch.
  * Added new update: **pseudo_match_id**  under [match_info](overwolf-games-events-overwatch#match_info).

## Version 0.158 (Nov. 2020)

#### API

* [disable_hardware_acceleration](manifest-json#disable_hardware_acceleration) new manifest flag:
  * Diable GPU hardware acceleration, per window.
  * Relevant only for native windows.
  * It should always be used for native windows that are running on the secondary screen. It improves the game's performance by reducing the usage of the GPU while you are playing and fixes a bug where some users encountered FPS drops when using a secondary screen. 
* New API: [overwolf.games.inputTracking.onMouseWheel](overwolf-games-inputTracking#onmousewheel): Fired a mouse wheel event.
* New window manifest flag [restrict_to_game_bounds](manifest-json#restrict_to_game_bounds):  
  Restrict window to game client (window) area. A window will always stay inside the game window while dragging.
* URI protocol: allows apps to open by using a URI protocol that can be passed via the command-line or a web address.  
  Just add the new [url_protocol](manifest-json#url_protocol) flag to your app's manifest, to create a link to your app.  
  For example: "outplayed://something/null".  
  Then, you can use this link in a webpage or app, and it will open your OW app, with an option to send some additional data to your app. 

#### Platform

* Block custom schemas from non overwolf-extensions urls: make sure that only our schema still work: (overwolf://, overwolf-fs://, overwolf-extensions://, overwolf-folder://)
* [disable_hardware_acceleration](manifest-json#disable_hardware_acceleration) new manifest flag:
  * Diable GPU hardware acceleration, per window.
  * Relevant only for native windows.
  * It should always be used for native windows that are running on the secondary screen. It improves the game's performance by reducing the usage of the GPU while you are playing and fixes a bug where some users encountered FPS drops when using a secondary screen. 

#### Bug Fixes

* Fix bug that prevets to notify all the apps using highlights when the game was closed during the highlight capture.
* Removed user token from logs: we used to write the user token after changes to the login state.
* Improve in-game dragging: Fixes an offset when dragging windows ingame.
* Taken hotkeys don't appear as unassigned: Fix when the client can’t detect ‘unassigned’ hotkeys when they are already taken.

#### Dev Console

* Added the ability to reply to user feedback/review on the app store. 

#### Game Events

* [Call of Duty - Warzone](overwolf-games-events-warzone)
  * Auto-highlights support.
  * New events:
    * kill
    * death
    * assist
  
* [Final Fantasy XIV](overwolf-games-events-ffxiv)
  * New info update under:
    * match_info

## Version 0.157 (Nov. 2020)

#### API

* [overwolf.utils.openFilePicker](overwolf-utils#openfilepickerfilter-initialpath-callback) - now accepts multiple selection of files.  The selected files will be returned on the callback as an array.
* [overwolf.io.listenOnFile](overwolf-io#listenonfileid-path-option-callback) - add an indication that the watching on file started successfully.

#### Platform

* Release phasing - keep the same distribution per release.  
  When you release version 1.0 to 10% of your users using the phase system and found a major bug - you can release an immediate fix 1.1 that targets the same 10% of your users.
* <a href="https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241" target="_blank">Aero-snap</a> support for native windows - Resizable native windows should support aero-snap (winkey + arrows and sticky-behaviour to screen edges).

#### Bug Fixes

* Full-screen embedded videos no longer automatically repositioned in the top-left corner.
* Fixed an exception that could occur when shutting down Overwolf.
* Fixed a bug where the Windows 10 Controlled folder access prevented users from saving Overwolf videos in the default system directory.
* Rainbow 6: Siege - CPU usage no longer increases when the user Alt-Tabs to with Overwolf.
* Fixed several issues in Rainbow 6: Siege related to users who have enabled RawInput.
* Fixed an issue when using overwolf.extensions.relaunch too quickly.
* Several security patches for ransomware protection and processes protection.

#### Dev Console

* We added a "per-version" retention report to compare retention between different app versions. You can see it on your board.

#### Game Events

* We're expanding our library with typedef files for the different in-game events, starting with Valorant info updates.  You can find our def file in [this repo](https://github.com/overwolf/types), or as an [npm package](https://www.npmjs.com/package/@overwolf/types).  
  More info [here](../topics/type-definition-file#using-types-for-games-events).

## Version 0.156 (Oct. 2020)

#### API

* [overwolf.windows.onScreenPropertyChanged](overwolf-windows#onscreenpropertychanged) event:  
  Now the event is being fired for all the declared windows. So you also need to test the window name/id arguments that are passed to the event to see if it is relevant for your window.
* [overwolf.extensions.current.getExtraObject](overwolf-extensions-current#getextraobjectname-callback): Improve the robustness of the API. Write to log and return a callback.
* [overwolf.utils.getSystemInformation](overwolf-utils#getsysteminformationcallback): return if Windows 10 version 2004 *Hardware-Accelerated GPU Scheduling* is enabled. 

#### Platform

* Replay capture accuracy: change replay's timestamp logic: capture replay's with using PTS (Presentation timestamp) and not ETS (Encoding timestamp).
* Multiple audio tracks: It is now possible to record videos that support more than one audio track, using the new flag for [stream settings](overwolf-streaming#streamsettings-object): **separate_tracks": bool**.  
  When disabled (default), create the video source with track1 only.  
  When enabled, video (mp4) will be created with three different audio tracks:
  * track1: Microphone + Desktop.
  * track2: Desktop output.
  * track3: Microphone input.  
* Extension logs: Send the isolated relevant's extension logs to server (upon crash/request to send logs).

#### Bug Fixes

* Do not launch extension with "LaunchWithOverwolf" launch event when extension is disabled. 
* overwolf.extensions.current.getExtraObject - Fixed cases where this function wouldn’t return a callback.
* Fixed a bug with native windows when navigating to a different window.
* Reaching 50MB of free space no longer causes the OBS process to hang.
* The video recording UI no longer stays in a pending state if we can’t load ow-graphics-hook32.dll for whatever reason.

#### Dev Console

* Soon

#### Game events
* GENERAL
  * Recently both Path of Exile and Rocket League received an Epic Games version and our events are currently unreliable on those versions. We are adjusting the events and will update in the near future.
  * Be advised that currently in Apex Legends - the assist event is broken in relation to "knockdown". Only "elimination" is supported.
* [WARFRAME](overwolf-games-events-warframe)
  * New updates and events under:
    * inventory
    * username
* [Call of Duty - Warzone](overwolf-games-events-warzone)
  * New updates and events under:
    * match_info
    * game_info
* [Fortnite](overwolf-games-events-fortnite)
  * New update under:
    * me
    * match_info
* [World of Warcraft](overwolf-games-events-wow)
  * New update under:
    * group_applicants
* [Minecraft](overwolf-games-events-minecraft)
  * New update under:
    * match_info
* [VALORANT](overwolf-games-events-valorant)
  * New updates under:
    * match_info
* [Warframe](overwolf-games-events-warframe)
  * New updates under:
    * match_info
* [APEX LEGENDS](overwolf-games-events-apex-legends)
  * New updates under:
    * match_info
    
## Version 0.155 (Sep. 2020)

Note that iterations 154 and 155 were combined into a single iteration.  

#### API

* [overwolf.utils.placeOnClipboard()](overwolf-utils#placeonclipboarddata) and [overwolf.utils.getFromClipboard()](overwolf-utils#getfromclipboardcallback) reimplemented so that we tackle the coexistence issues with AutoHotKey script.

* [overwolf.games.inputTracking.getActivityInformation()](overwolf-games-inputTracking#getactivityinformationcallback) - remove the 5 minutes min time for getting a result.  
  Note that We're still not recording the first 30 characters, and we will send the activity info to our servers only if your sessions is longer than 5 minutes.

* New flag for [replay](overwolf-media-replays#replayvideooptions-object) \ [streaming](overwolf-streaming#streamvideooptions-object) video settings object: **use_app_display_name**.  
  If this flag in on, when creating a video capture folder, it will use the app "short name" as the folder name, instead of using the app name from the manifest. (the app "short name" is defined in the [dock_button_title](manifest-json#meta-dock) manifest flag).

* it is now possible to change the number of maximum saved log files that
apps are saving with the new max_rotation_log_file manifest flag
New manifest flag [max_rotation_log_files](manifest-json#max_rotation_log_files) - for app Log rotaion control. It allow to increase app log's file rotation (up to 40).
    
* New feature: Set window zoom level - [overwolf.window.setZoom()](overwolf-windows#setzoomwinzoomfactorowid-windowid).  
  Now you can change the zoom factor of your window through the API (the effect is exactly like changing the zoom in a web browser).

* The [overwolf.media.audio](overwolf-media-audio) is now considered obsolete, and will display the relevant warning in the console when using it.

* We marked several functions and APIs as **OBSOLETE**. Soon, we altogether remove them from the docs and from the API itself. Note that you should get a warning in your dev console when using one of the obsolete functions.  
This is the full list of OBSOLETE functions and APIs:
  * overwolf.media.stopGifBuffer()
  * overwolf.media.generateGif()
  * overwolf.media.startGifBuffer()
  * overwolf.media.replays.turnOff(replyID, callback) - this signature already removed from the docs.
  * overwolf.media.replays.getState()
  * overwolf.media.replays.startCapture(replayType, pastDuration, callback)
  * overwolf.media.replays.stopCapture(ReplayType, replayId, callback)
  * overwolf.media.replays.capture(replayType, pastDuration, futureDuration, captureFinishedCallback, callback)
  * overwolf.media.replays.finishCapture() - already removed from the docs.
  * overwolf.streaming.updateStreamingDesktopOptions()
  * overwolf.benchmarking (all)
  * overwolf.tobii (all)
  * overwolf.media.audio (all)
  * overwolf.settings.setFpsSettings()
  * overwolf.settings.getHotKey()
  * overwolf.settings.registerHotKey()
  * overwolf.settings.getCurrentOverwolfLanguage()
  * overwolf.settings.OnHotkeyChanged

#### Platform

* WebServer: [overwolf.web.webserver](overwolf-web-webserver) now allow CORS.  
  Now the built-in OW webserver sends the correct CORS headers ([Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)) to client.  
  It's useful for case when you need to pass some data (ex: authentication token) from your website to Overwolf app. More info [here](overwolf-web-webserver).
* Windows 10 version 2004 *Hardware-Accelerated GPU Scheduling* feature might cause captured videos to be laggy. More info [here](../topics/video-capture#windows-10-hardware-accelerated-gpu-scheduling-notice).

#### Bug fixes

* On Uninstall, Overwolf now deletes all related registry entries from all users.
* Fixed a highlights bug where on rare occasions it would record the video, but wouldn't inform the app requesting it.
* Fixed cases where the video onStop/onStart listeners wouldn't return a callback.
* Fixed a bug where HTML5 audio would play twice.
* Fixed a bug with video naming when using the split API and the configuration include_full_size_video was false.

#### Dev Console
 
* Now you can edit your subscription plan and manage your subscribers.  
  We have added to the Dev Console a new tab: "Subscription". When clicked, two options will appear:
  * Plans - you can edit the subscription plans you already own: title, price, description, period, status, and assets (that'll be shown in Overwolf's app store).  
    For now, you can only edit current plans. To create one, please ask your dev-rel manager.
  * Subscribers - you’ll be able to edit each subscriber expiration date and status (active/canceled/revoked/invalid).
* You can now see your app's URL to the Overwolf store listing directly from the console.
* To make our apps more transparent to users, we added the option to configure if you have ads, subs, and if the app is free. This will be shown to users on the app store.
* You can now see which tags are enabled for your app when searching for a game. To add more tags contact your dev-rel manager.


#### Game events

* [Hearthstone](overwolf-games-events-hearthstone) - "match_end" now includes a match outcome value.d
* [League of Legends](overwolf-games-events-lol#live_client_data) - new event - "port". Random port that comes from Riot

## Version 0.153 (Aug. 2020)

Note that iterations 150 to 153 were combined into a single iteration.  

#### API

* [overwolf.utils.openUrlInDefaultBrowser()](overwolf-utils#openurlindefaultbrowserurlopenurloptions) - Now allows extra behaviour. Right now "skip_in_game_notification" is the only option. When set to true, the alert notifying in-game users that their browser is about to open will not display. 
* Add to [overwolf.utils.enums.eStorePage](overwolf-utils#estorepage-enum) - Now you can Open the requested app’s reviews/feedabck page in the Overwolf Appstore.
* [overwolf.windows.getCurrentWindow()](overwolf-windows#getcurrentwindowcallback) now returns also the monitor id.  
  Now you quickly determine which monitor the window is displayed.
* New manifest flag - [process_name](manifest-json#process_name-notes).  
  using one simple flag in the manifest, app developers can now differentiate their own apps from the rest of the OverwolfBrwoser.exe process rubble in the Task Manager.  
  By adding your custom "process_name" to an app manifest, all the processes related to the app ads are now running with the name given them by this flag.
* Added extra info to the overwolf.settings.hotkeys.onChanged API, so it’s consistent with the overwolf.settings.hotkeys.get function.
* The "file" param is now optional when calling overwolf.social.discord.share(). Instead, you can use the "message" param to include a URL of a file that you want to share.

#### Platform

* [Disabled Dev Tools as a default](../topics/enable-dev-tools#supported-features).  
  From now on, when clicking Ctrl+Shift+I on a window will NOT open the developer tools. (Even if the [disable_dt](manifest-json#disable_dt) manifest flag is set to false). The only way to enable it back is by changing a registry key.  
* Allow pin to the taskbar (and launch the app + app icon):  
  Now you can pin an open app to the taskbar, and the app icon will not change to the Overwolf icon, and the pinned app can be launched from the taskbar. (even if OW is closed)
* Non-logged in app installations - We have reverted the need to be logged into Overwolf in order download and install apps.

#### Game events

* [Minecraft](overwolf-games-events-minecraft)
  * New supported game
* [LOL](overwolf-games-events-lol)
  * New updates under:
    * match_info
* [MTGA](overwolf-games-events-mtga)
  * New updates under:
    * game_info
* [LoL Launcher](overwolf-games-events-launchers-events-lol)
  * New updates under:
    * clash

## Version 0.149 (Jul. 2020)

#### API and Platform

* [overwolf.windows.changeSize()](overwolf-windows#changesizechangesizeparams-callback).  
  Accept now a new boolean param whether to automatically account for DPI scale when resizing ("auto_dpi_resize").
* ["LaunchWithOverwolf"](manifest-json#enable-app-auto-launch-with-overwolf) - new manifest flag, enable launching app together with the OW client.
* New API to support enabling/disabling auto-launch with the Overwolf client:  
  (Apps launched this way will have [origin](overwolf-extensions#the-origin-string) "overwolfstartlaunchevent") 
  * [overwolf.settings.setExtensionSettings(extensionSettings, callback)](overwolf-settings#setextensionsettingsextensionsettings-callback)
  * [overwolf.settings.getExtensionSettings](overwolf-settings#getextensionsettingscallback).

#### Game events

* [MTGA](overwolf-games-events-mtga)
  * New updates and events under:
    * match_info
    * game_info
* [VALORANT](overwolf-games-events-valorant)
  * New updates and events under:
    * match_info
    * kill
* [OVERWATCH](overwolf-games-events-overwatch)
  * New supported game
  * [Auto-highlights](../api/auto-highlights) support
* [RAINBOW SIX](overwolf-games-events-rainbow-six)
  * New updates and events under:
    * roster

#### Docs

* We are now supporting bigger [screenshots](../start/submit-your-app-to-the-store#3-screenshotxjpg) for your OW app store page: 1200x750 pixels, instead of the old 656X410.

## Version 0.148 (Jun. 2020)

#### API and Platform

* "DPI-aware" feature for [native](../topics/windows-types#native-window) windows:  
  It means that when you move the native window between monitors with different DPIs for example from 100 DPI to 125 DPI, the window will automatically resize according to the new DPI.  
  There's also a new manifest flag to disable that behavior if the developer wants none of that: [disable_auto_dpi_sizing](manifest-json#disable_auto_dpi_sizing).
* Moved to be part of our internal API and removed from the docs:
    * event *overwolf.streaming.onRecordingEngineStateChanged*.
    * function *overwolf.streaming.getRunningRecorders()*.

## Version 0.147 (May. 2020)

Note that iteration 146 and 147 were combined into a single iteration.  

#### API and Platform

* New feature: [overwolf.window.flash()](overwolf-windows#flashwindowid-behaviorcallback)  
  Flashes a window that is not in focus (for example, minimized to taskbar).  
  Support either constant pulses or a single flash - the choice is yours. 
* New manifest flag: [disable_cleanup](manifest-json#disable_cleanup).  
  If set to true, app local data will not be cleaned up after app uninstallation.
* New API: [overwolf.extensions.io](overwolf-extensions-io)  
  No need to use the external I/O plugin anymore for your current extension-related I/O functionalities.  
  Now you can easily create, delete, or update files on your extension's [dedicated storage space](overwolf-extensions-io#storagespace-enum).   
* Allow apps to request [opening the hotkey settings](../topics/hotkeys-best-practices#reassign-hotkeys) for a specific game. An example:
  * Current hotkey URL:  
    `overwolf://settings/hotkeys#hotkey_name_in_manifest`.  
  * New hotkey URL:  
    `overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id`.  
    game_id is optional.
* Upgrade to OBS 25.0.0 
  * Update obs-ffmpeg.dll (NVENC encoder).
    That can affect some devs that are trying to capture videos and get encoders errors and a message that the NVEC driver should be updated.
* Updates for the streaming and replay APIs: added a [quota object](#overwolf-streaming#streamquotaparams-object):  
  Allow setting max media folder size in GB, and exclude folders that are not part of this quota.
* Video recording engine updated, and now it supports Vulkan capturing!

#### Game events

* [PUBG Lite](overwolf-games-events-pubglite)
  * New event:
    * team_feed
    * knockout
* [CS: GO](overwolf-games-events-csgo)
  * New event:
    * kill_feed
  * New event:
    * scoreboard
* [Rainbow Six: Siege](overwolf-games-events-rainbow-six)
  * New feature:
    * me
* [Escape From Tarkov](overwolf-games-events-escape-from-tarkov)
  * New supported game
* [VALORANT](overwolf-games-events-valorant)
  * New supported game
* [Auto-highlights](../topics/video-capture#auto-highlights-capture) now supports VALORANT "kill", "death" and "assist" events

## Version 0.145 (Apr. 2020)

Note that iteration 144 and 145 were combined into a single iteration.

#### API and Platform

* New API: [overwolf.campaigns]() for the new LoL "Refer a friend" feature. **Note: the docs for this API will be released soon**
* Cookie Sync - Cookie Syncing was updated to support Microsoft Edge (non-dev version) and the new Firefox schema.
* Security and bug Fixes.

## Version 0.143 (Mar. 2020)

#### Game events

* The Vulkan Graphics API is now supported.
* From now, whenever you try to use an obsolete API, the dev console will print a warning.  
  Try: overwolf.setting.getCurrentOverwolfLanguage().
* New API - [overwolf.settings.language](overwolf-settings-language).  
  Returns an object with language methods and events.
  * [overwolf.settings.language.get()](overwolf-settings-language#getcallback).
  * [overwolf.settings.language.onLanguageChanged](overwolf-settings-language#onlanguagechanged) event.
* New event: [overwolf.windows.onScreenPropertyChanged](overwolf-windows#onscreenpropertychanged).  
  Detect moving window to another monitor.  
  Triggered if more than 50% of the window has been moved to another monitor.  
  Returns the new monitor handle.
* Upgrade OBS to 24.0.5.  
  * Update FFMpeg version.
  * Support new NVEC Encoders ("NVEC New").
* Allow overriding recording indication type and position in API:  
  Now when calling [overwolf.streaming.start()](overwolf-streaming#startsettings-callback), [indication_position](overwolf-streaming#indication_position-enum) and [indication_type](overwolf-streaming#indication_type-enum) can be set under video settings. (Until now, you could do that only from the OW client UI).
* HTTPS - "Referrers", "Origins", and "AncestorsOrigin" should now all be using HTTPS instead of HTTP.

#### Game events

* [PUBG Lite game events](overwolf-games-events-pubg-lite)
  * New supported game
* [Legends of Runeterra game events](overwolf-games-events-lor)
  * New supported game
* [World of Warcraft game events](overwolf-games-events-wow)
  * New supported game
* [Rocket League game events](overwolf-games-events-rocket-league)
  * New info updates:
    * server_info
    * mutator_settings
    * arena

## Version 0.142 (Feb. 2020)

#### API and Platform

* New API - [overwolf.settings.hotkeys](overwolf-settings-hotkey).  
  Returns an object with hotkeys methods and events.
  * New manifest flag: `hold`: Will be added to the [hotkeys object](manifest-json#hotkeys).  
    Defines a new type of hotkey - hotkey that works only while you are holding the key.  
    The flag also added to our [manifest schema file](https://github.com/overwolf/community-gists/blob/master/overwolf-manifest-schema.json).  
  * New function: [overwolf.settings.hotkeys.get()](overwolf-settings-hotkeys#getcallback). Returns all calling extension’s hotkeys.
  * New event: [overwolf.settings.onHold](overwolf-settings-hotkeys#onhold): will fire only for hotkeys that are defined as "hold".  
    This event will be fired twice - on key down and on key up.
  * New event: [overwolf.settings.onPressed](overwolf-settings-hotkeys#onpressed): will fire only for hotkeys that are not defined as "hold".  
    This event will replace the depracated [overwolf.settings.registerHotKey](overwolf-settings#registerhotkeyactionid-callback) function.    
  * New event: [overwolf.settings.onChanged](overwolf-settings-hotkeys#onchanged):  will fire on hotkeys change. 

* Cleanup upon uninstall:
  * Delete extension folder upon uninstall extension.
  * Clear all extension windows proprieties from setting.
  * Clear localstorage.
* Enable Drag & drop To Overwolf app window.

#### Game events

* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New info updates:
    * adventure_stats
* [League of Legends Events](overwolf-games-events-lol)
  * New event & info:
    * live_client_data
* [Path of Exile game events](games-events-path-of-exile)
  * New events & info
    * kill
    * death
    * match_outcome
    * current_zone
    * inventory open/close
    * character_name
    * character_level
    
## Version 0.141 (Jan. 2020)

* Manifest flag [enable_top_isolation](manifest-json#enable_top_isolation) has been "moved up" in the hirarchy:  
  Now it's per app and not per windows - means, it's under the "data" node and not the "window" node.  
  Note that it's backward compatible (means that if one of the app windows set this flag in the manifest - it will auto-merge to the entire app).
* New function: [overwolf.utils.OpenFilePicker](overwolf-utils#openfilepickerfilter-initialpath-callback).  
  Now also accepts an initialPath parameter.
* Logs: now end with the extension "log" (instead of numbers).  
  In addition, logs file names are now counted where the last number one is the newest file.  
* New function: [overwolf.streaming.split](overwolf-streaming#splitstreamid-callback).  
  Split video files.
* Implement the main features of the [IO-Pluign](../topics/simple-io-plugin) inside the [overwolf.io](overwolf-io) API: 
  * [overwolf.io.dir()](overwolf-io#dirpath-callback)
  * [overwolf.io.readBinaryFile()](overwolf-io#readbinaryfilepath-options-callback)
  * [overwolf.io.readTextFile()](overwolf-io#readtextfilepath-options-callback)
  * [overwolf.io.exist()](overwolf-io#existpath-callback)
  * [overwolf.io.listenOnFile()](overwolf-io#listenonfileid-path-option-callback)
  * [overwolf.io.stopFileListener()](overwolf-io#stopfilelistenerid)
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New [status page](../status/lol-launcher) for LOL launcher.
  * New update:
    * is_garena_user
* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New info updates:
    * Adventure Deck
    * adventure_loot_options
    * battlegrounds_rating
* All game-events
  * New update:
    * gep_internal

## Version 0.140 (Dec. 2019)

* Internal bug fixes and refactoring.

## Version 0.139 (Dec. 2019)

* [overwolf.utils.getSystemInformation()](overwolf-utils#getsysteminformationcallback) now has **VideoEncSupport** property.  
  (New boolean parameter in response, under SystemParams.
* [League of Legends Events](overwolf-games-events-lol)
  * New event & info:
    * damage
    * heal
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * close_client_during_game
* [MTGA Events](overwolf-games-events-mtga)
   * New info-update:
     * scene
* [Dota Underlords Events](https://overwolf.github.io/docs/api/overwolf-games-events-underlords)
  * New events:
    * round_outcome
    * match_outcome
* [Starcraft II Events](https://overwolf.github.io/docs/api/overwolf-games-events-sc2)
  * New supported game
* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * match_outcome
* [PUBG game events](overwolf-games-events-pubg#docsNav)
  * New update
    * team_index


## Version 0.138 (Nov. 2019)

* All API functions that take callback arguments:  
from now on, we guarantee that a non-null result object parameter will always be returned and it will always contain a |success| boolean field.  
This means no more if (!result || !result.status ...) checks. Instead, this should always work: if (result.success).
* New Overwolf definition file addition -  make your lives easier and your coding experience faster. Full details can be found [here](../topics/type-definition-file).
* New Event: [overwolf.extensions.onExtensionUpdated](overwolf-extensions#onextensionupdated). Notify when the app was updated.  
  This event will replace the depracated "overwolf.extensions.onExtensionUpdateStateChanged" event.   
  Fires after the current app were successfully updated.
* We updated the [recommended process](../start/submit-an-app-update#forced-user-updates) for manual update of your app.
* [overwolf.tobii](overwolf-tobii): this API has been deprecated.
* [League of Legends Events](overwolf-games-events-lol)
  * New event:
    * match_clock
* [Dota 2 Events](overwolf-games-launchers-events-dota2#docsNav)
  * New info-update:
    * role
    * hero_pool
* [Dota Underlords Events](https://overwolf.github.io/docs/api/overwolf-games-events-underlords)
  * New supported game events
  
## Version 0.137 (Nov. 2019)

* [MTGA Events](overwolf-games-events-mtga) - New supported game
   * New info-update:
     * detailed_logs_enabled
   * New event:
     * match_outcome
* [WOT Events](overwolf-games-launchers-events-wot#docsNav)
  * New event:
    * match_outcome
* New doc about our [Game Events Simulator app](../topics/using-events-simulator).
* New [sample app](../start/sample-app-overview) with enhanced UI.
* New manifest flag: [minimum-gs-version](manifest-json#meta-minimum-gs) - Allows extensions (apps) to set a minimum game summary app version in the manifest, this works similarly to minimum-overwolf-version and relevant only for apps thay using the game summary pannel.
* New manifest flag: [service_providers](manifest-json#service_providers) - you can use this flag to set different parameters that are relevant for a service provider app. Use the new API function [overwolf.extensions.getServiceConsumers()](overwolf-extensions#getserviceconsumerscallback) to read the flag value.
* New API function: [overwolf.utils.openStore()](overwolf-utils#openstoreparam) - Opens the requested app’s profile/login/subscription page in the Overwolf Appstore.
* New API namespace: [overwolf.extensions.shareddata](overwolf-extension-sharedData) - a new namespace that allows any app to share data with another app. the plan is to use it for the Game Summary tabs.
* New plugin: The [Process Manager plugin](../topics/process-manager-plugin) that allow OW apps to run executable (for example, run a game when you launch an OW app). 


## Version 0.136 (Oct. 2019)

* Added new override setting to overwolf.windows.obtainDeclaredWindow() - [useDefaultSizeAndLocation](overwolf-windows#obtaindeclaredwindowwindowname-usedefaultsizeandlocation-callback).
  When this flag is set to true, the window will be created using the default (manifest) size and location, rather than the saved setting.
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * lcu_info
    * lol_end_game_stats
    * game_version

## Version 0.135 (Sep. 2019)

* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * phase
* New properties for the [GameInfo](overwolf-games#gameinfo-object) object:
  * monitorHandle - Returns the current monitor handle. You can now check for example, on which monitor your app is running.
  * windowHandle - Returns the current app window handle.
* New function: [overwolf.extensions.checkForExtensionUpdate()](overwolf-extensions#checkforextensionupdatecallback) -  allows the current app to check if there is an extension update.

## Version 0.134 (Aug. 2019)

* New API: [overwolf.profile.subscriptions](overwolf-profile-subscriptions).  
  Provides functions and events to help with user subscription management.

* [Teamfight Tactics Events](overwolf-games-events-tft#docsNav)
  * New updates:
    * store
    * board
    * bench
    * carousel
    * local_player_damage
    
* [League of Legends Launcher Events](overwolf-games-launchers-events-lol#docsNav)
  * New update:
    * end_game
    
* [Hearthstone game events](overwolf-games-events-hearthstone#docsNav)
  * New events:
    * match_type
    * match_start/end
    * match_outcome
* [Rainbow Six: Siege game events](overwolf-games-events-rainbow-six#docsNav)
  * New update:
    * game_mode
* [CS: GO game events](overwolf-games-events-csgo#docsNav)
  * New update:
    * replay
    * server_info
    * game_mode
* [PUBG game events](overwolf-games-events-pubg#docsNav)
  * New update
    * team_location
    * health

## Version 0.133 (Jul. 2019)

* [minimum-gep-version](manifest-json#meta-minimum-gep) - New manifest flag. Allow extensions to set a minimum GEP version in manifest, this works similarly to minimum-overwolf-version.

* [overwolf.extensions.updateExtension()](overwolf-extensions#updateextensioncallback) - new method. Tries to download an update for the calling extension.

* [overwolf.extensions.onExtensionUpdateStateChanged](overwolf-extensions#onextensionupdatestatechanged) - new event. Notify when the app was updated.

## Version 0.132 (Jul. 2019)

* [overwolf.os.getRegionInfo()](overwolf-os#getregioninfocallback) - new method. Returns regional information about the user.
  
* [overwolf.windows.setMinSize()](overwolf-windows#setminsizewindowid-width-height-callback) - new method. Overrides the window's defined minimum size.

* [Teamfight Tactics Game Events](overwolf-games-events-tft) - TFT game events are now available. This game-mode is officially supported and more events will be added soon!

## Version 0.131 (Jun. 2019)

* [LoL Launcher events](overwolf-games-launchers-events-lol)
  * New update:
    * lobby_info
* [PUBG game events](overwolf-games-events-pubg)
  * New updates:
    * safe_zone
    * blue_zone
    * red_zone
* [Fortnite game events](overwolf-games-events-fortnite)
  * New update:
    * shield
