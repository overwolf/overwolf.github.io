---
id: all
title: Events Status Health - ALL Games
sidebar_label: All Games Events Status
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

We highly recommended  to communicae errors and warnings to your app users.  
You can do that easily using the Overwolf API. [Read all the info here](../api/howto-check-events-status-from-app).

<div id="gameEventsStatus">
  <script type="text/jsx" src="/jsx/gameEventsStatus.jsx"></script>
</div>