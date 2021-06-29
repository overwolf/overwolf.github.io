---
id: oopo
title: special overlay behavior 
sidebar_label: Special Overlay Behavior
---

Different kinds of games can cause some issues with the overlay interaction: mostly FPS games that don't have a mouse cursor, like Distney 2, CSGO, and Warzone.

In these games, we are forced to use different OW overlay options: You can interact with your OW app's windows only if they are in "exclusive" mode (more info about the exclusive mode in the next chapter).

In addition, if the game is running in "real" fullscreen (non-borderless), the exclusive mode is completely disabled, there for you CAN'T interact with the OW app's windows AT ALL.  More info on how to handle that [here].

## What is exclusive mode

In games such as Overwatch, World of Tanks, Distney 2, CSGO, Warzone, and more -  which have a state without a mouse cursor, the user can't control the Overwolf app window. The only way to interact with the OW apps window is to set the app window into "exclusive mode" – the game window becomes semi-transparent, input doesn't pass to the game, and a cursor interacts with the OW app available.

[screenshoot of exclusive mode in action]

## How to get into exclusive mode

basically, there are two options to enalbe the exclusive mode while you are in a game:

### Ctrl + Tab

Hitting Ctrl + tab while you are in a game set OW in exclusive mode - the game window get semi-transparent background, the OW dock is shown, and you can interact with your OW app's windows (if any windows are open).  

Hitting ctrl+tab again or clicking outside of the OW app's window will "release" the exclusive mode.

### Using Hotkey

if you have a window that is bundled to a hotkey, and you want to enter into an exclusive mode when the hotkey is fired, you should:

* Set the flag `focus_game_takeover` to `ReleaseOnHidden`.
* Set the `focus_game_takeover_release_hotkey` to the hotkey name. 

When the hotkey is fired, the window will show up and enter exclusive mode (enabling user interaction and accepting input from the user). When the hotkey is clicked again - the window will hide and exit the exclusive mode.

### Automatically on window launch

If you have a window that displayed automatically (a startup window, for example) and you want to enter exclusive mode automatically when the window is shown, you should:

* Set the flag `focus_game_takeover` to `ReleaseOnLostFocus`.

When the window is launched, it automatically enters exclusive mode (and enables user interaction and accepts input from the user).
Once the user clicks outside the window, the window will exit (and hide?) the exclusive mode.

## How to detect Fullscreen non-borderless

As we mentioned above, in particular games like Distney 2, CSGO, and Warzone, we forced to use a special kind of Overlay that enables you to interact with the OW app's windows only if you are in exclusive mode. But if the user is running the game in "real" fullscreen non-borderless mode, the exclusive mode is completely disabled, which means there is no option to interact with your app's window at all. The only thing that you can do is to notify him and ask him to change game mode to fullscreen borderless or windowed mode. 

To detect if the game is running in on-borderless fullscreen is to read the `exclusiveModeDisabled` flag. If it's `true. It means that the exclusive mode is disabled and you should display the user notification about it.