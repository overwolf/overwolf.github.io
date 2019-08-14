---
id: events-SDK-for-game-developers
title: Events SDK for Game Developers
sidebar_label: Events SDK for Game Devs
---

## Introduction

The Overwolf events SDK allows game developers to expose relevant real time data and events for developers of Overwolf apps. 
This will allow app developers, for example, to build an app that creates a video compilation of kill shots in a shooter.

### How does it work?

As the game developer, your goal is to identify interesting events and embed them in your code. Every time such an event happens (e.g. a match has started, the player earned gold, an achievement had been won etc.), you are required to update a line of code that will be sent through Overwolf to the Overwolf apps.

This solution is:

1. Easy – all you need is to define the interesting event and expose it Overwolf with a simple function
2. Dynamic – you have complete flexibility on the types of events you expose
3. Safe – The solution will work regardless if Overwolf operates in the background or not, in one directional communication. Further, it runs on a different thread so it will not affect game performance

### Structure

The Overwolf event SDK is a configurable real-time database divided into two main sections:

1. Info categories – Information that is usually updated once per match. This will include the player’s ID, the members of his team, the player’s level and more.
2. Events – This section includes real-time database of events (e.g. double kill, head-shot, current gold), which are very frequently updated, and frequently expire.

### How to start?

Download the SDK from [this link](https://github.com/overwolf/game-events-sdk)

1. Include the 32/64 dll with your game
2. Review the tester
3. Start updating your code with the interesting events
4. If you need a list of recommended events, please send us an email

In case of any questions, always feel free to reach out to us directly at developers@overwolf.com
