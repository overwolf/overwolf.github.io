/* eslint-disable max-len */
export default `---
id: changelogs
title: "Changelogs"
image: "/img/embed/changelogs.jpg"
showLastUpdateAuthor: false
showLastUpdateTime: false
sidebar_custom_props:
  tags:
    overwolf_platform: true
    electron_platform: true
---

<meta http-equiv="refresh" content="0; url=https://dev.overwolf.com/ow-native/getting-started/changelog/ow-changelog" />

Follow this page for ongoing updates and changes to the project or tools.
Here you can find our [Developers Roadmap](/api/changelogs/roadmap).

Here you can find a summary of all past version releases:
* Latest major documentation update: [$doc-ver](changelogs/documentation/$doc-path) (Released on: $doc-date)
* Latest ow-electron version: [\`$ow-electron-ver\`](changelogs/electron-platform/ow-electron/$ow-electron-path) (Released on: $ow-electron-date)
* Latest ow-electron-builder version: [\`$ow-electron-builder-ver\`](changelogs/electron-platform/ow-electron-builder/$ow-electron-builder-path) (Released on: $ow-electron-builder-date)
* Public Overwolf platform version: [\`$latest-ver-display\`](changelogs/overwolf-platform/$latest-path/$latest-ver) (Released on: $latest-date)
* Developers' Overwolf platform version: [\`$dev-ver-display\`](changelogs/overwolf-platform/$dev-path/$dev-ver) (Released on: $dev-date)
* Latest developers' Console update: [$console-ver](changelogs/developers-console/$console-path) (Released on: $console-date)
* GEP Changelogs can be found in [their own respective page](changelogs/gep-changelogs)
* For specific versions, check the sidebar to the left of this page`;
