/* eslint-disable max-len */
export default `---
id: status
image: "/img/embed/game-status.jpg"
title: Game events status health
sidebar_label: All Games
sidebar_position: 0
showLastUpdateAuthor: false
showLastUpdateTime: false
sidebar_custom_props:
  tags:
    overwolf_platform: true
    electron_platform: false
---

Pick any game to see its full events list.

It is highly recommended to communicate errors and warnings to your app users.
You can easily do that using the Overwolf API. [Read all the info here](/topics/using-events/how-to-check-events-status-from-app).

<EventsData allGames={true} />
`;
