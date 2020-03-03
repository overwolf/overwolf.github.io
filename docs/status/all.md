---
id: all
title: Game events status health
sidebar_label: All Games
---

<meta http-equiv="Content-Type" content="text/html charset=utf-8"/>
<!-- importing React -->
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<!-- importing React-Dom -->
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<!-- importing babel for jsx -->
<script src=" https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<!-- importing the remarkable plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.js"></script>
<!-- importing games metadata -->
<script src="/js/games_metadata.js"></script>

Pick any game to see its full events list.

It is highly recommended to communicate errors and warnings to your app users.  
You can easily do that by using the Overwolf API. [Read all the info here](../topics/howto-check-events-status-from-app).

Past services interruptions log can be found [here](past-incidents).

<div id="gameEventsStatus">
  <script type="text/jsx" src="/jsx/gameEventsStatus.jsx"></script>
</div>
