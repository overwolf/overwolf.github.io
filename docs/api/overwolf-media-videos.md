---
id: overwolf-media-videos
title: overwolf.media.videos API
sidebar_label: overwolf.media.videos
---

Use the `overwolf.media.videos` API to create video composition, delete video files, and get details of video files that were created by the app.

## Methods Reference

* [`overwolf.media.videos.createVideoComposition()`](#)
* [`overwolf.media.videos.createVideoCompositionFiles()`](#)
* [`overwolf.media.videos.createVideoCompositionFiles()`](#)
* [`overwolf.media.videos.getVideos()`](#)
* [`overwolf.media.videos.getVideosSize()`](#)
* [`overwolf.media.videos.deleteOldVideos()`](#)
* [`overwolf.media.videos.deleteVideo()`](#)

## Types Reference

* [`VideoCompositionSegment`](#) Object

## createVideoComposition(sourceVideoUrl, segments, callback)
#### Version added: 0.78
#### Permissions required: FileSystem

> Creates a compilation video out of a source video and a list of segments. Listen to the event to determine when the compilation video is ready.


Parameter      | Type                                | Description                                                             |
-------------- | ------------------------------------| ----------------------------------------------------------------------- |
sourceVideoUrl | string                              | The url of the source video in an overwolf://media form                 |
segments	   | [VideoCompositionSegment](#) array  | A JSON containing a list of segments. See example below                 |