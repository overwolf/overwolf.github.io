---
id: reduce-opk-size
title: Reducing the OPK Size
sidebar_label: Reduce OPK Size
---

As explained in [the SDK introduction section](../start/sdk-introduction#opk-package), OPK files are Overwolf's app installation package which includes your app's files: the manifest, source files and other assets. All files are packed in a zipped package which has the OPK file extension.

## Why do we want to reduce OPK size?

Most of the time, basic compression is enough, and the OPK weighs between 1-3 Mb. But sometimes heavy assets push that higher, and the OPK can easily grow to more than 5Mb. This is a potential issue - heavy packages will take more time to release and download, and run some extra risk of things going wrong under pressure - imagine thousands of users needing to download larger files simultaneously. Moreover, it's a standing policy for us to minimize our footprint and requirements on the user's resources, storage and/or processing power.

## How can we reduce OPK size?
We suggest several proven ways to keep OPK size manageable: 

* Compress images to weigh as little as possible with [JPEGMini](https://www.jpegmini.com/), [TinyPNG](https://tinypng.com/) or a similar tool.

* Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.

* Use remote assets and scripts. This is excluding assets used by the Home and Notification pages of your app, which you should locally store for faster performance. However, when it comes to resources that do not change often or are not needed immediatly on launch - you can dynamically load them from remote locations when required. Use CDN references for assets like images and scripts. That will force the app to download these assets only on the first time the app loads (aftter the initial download the assets will be serverd from the cache), so you will not have to package these assets into the OPK.
  
* Remove map files before zipping (*.map).  
Many developers generate CSS style sheets using a CSS preprocessor, such as Sass, Less, or Stylus. That type of Developer tools in Firefox and Chrome will use the maps to link the generated css files to the original css to allow debugging as if the code was not compressed.

* Reduce font sizes.  
Most fonts that are used for large bodies of text are usually quite small in file size, especially if you are using a font delivery service like google fonts. Sometimes, however, designers include fonts that can be over 500KB. In these cases, you’ll need to reduce the character set's weight yourself. More info [here](https://parall.ax/blog/view/3072/tutorial-reducing-the-file-size-of-custom-web-fonts).

* Remove .DS_Store files.  
These files are proprietary Mac/OSX system files which hold attributes/meta-data about the folder it resides in. You're safe to just delete it.

If you have more ideas on how to reduce OPK size, please click on the EDIT button on the right, and add it in for everyone's benefit.
