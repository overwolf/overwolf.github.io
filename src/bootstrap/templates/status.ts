export default `---
id: $path
image: "/img/embed/games/$imagePath.jpg"
title: "$name status"
hide_title: true
sidebar_label: "$name"
showLastUpdateAuthor: false
showLastUpdateTime: false
sidebar_custom_props:
  tags:
    overwolf_platform: true
    electron_platform: false
---

$tags

<EventsData specificGame={true} gameId={$id} endOfLife={$endOfLife}/>`;
