---
id: hotkeys-best-practices
title: Hotkeys Best Practices
sidebar_label: Hotkeys Best Practices
---

## a guide on how to use hotkeys

1. If you are using `focus_game_takeover": "ReleaseOnHidden"` flag, don't forget to use also the ``focus_game_takeover_release_hotkey` "`.  
2. if you are using a transparent background window, note that a toggle hotkey will not work as expected - the hotkey will start/show the OW app, but will not hide it.
   In order to hide it, you will have to call the registerHotkey(), from your background window - exactly like custom hotkey. You don't need to change the hotkey type to "custom". Everything should work now.