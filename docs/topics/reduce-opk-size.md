---
id: reduce-opk-size
title: Reducing the OPK Size
sidebar_label: Reduce OPK Size
---

As explained in [here](../start/sdk-introduction#opk-package), the OPK file is the Overwolf installation package, that includes all your apps files:  the manifest, the source files and other assets. All the files are packed in a zipped packge, with the OPK file extension.

## Why we want to reduce the OPK size

Most of the time, the basic zipping is enough, and the OPK total sizes is between 1-3 Mb. But sometimes, usually because of heavy weight assets, the OPK can increase easily to more than 5Mb, and that is not recomemnd: heavy packges will take more time to release and download - imgine a thousands of users that get push updates. Also, we always trying to leave the smallest footprint on the user computer and resources. 

## How we can reduce the OPK size
 
* Compress images to the smallest size possible with [JPEGMini](https://www.jpegmini.com/), [TinyPNG](https://tinypng.com/) or similar tools.

* Remove non-critical JavaScript from your app to reduce transmission times, CPU-intensive compiling and potential memory overhead.

* Use remote assets and scripts.  
  Locally store assets used by your app's Home and Notification windows, which are the ones seen by the user on launch. These images, fonts or other assets should be a part of the base .opk file for faster loading times. But for resources that do not change often or not needed immediatly on launch - you can dynamically load them from remote locations only when it neccesary: Use CDN references to assets like images and scripts. That will force the app to download these assets only on the first time that the app loads, so you will not have to include these assets in the OPK package.
  
* Remove map files before zipping (*.map).  
  Many developers generate CSS style sheets using a CSS preprocessor, such as Sass, Less, or Stylus. Developer tools such as those in Firefox and Chrome will use the maps to link the generated css files to the original css to allow debugging as if the code was not compressed.

* Reduce the fonts sizes.  
  Most fonts that are used for large bodies of text are usually quite small in file size, especially if you are using a font delivery service like google fonts.But sometimes, designers include fonts that can be over 500KB. In these cases, you’ll need to reduce the character set yourself. More info [here](https://parall.ax/blog/view/3072/tutorial-reducing-the-file-size-of-custom-web-fonts).

* Remove .DS_Store files.  
  That files are a proprietary Mac/OSX system files that holds attributes/meta-data about the folder it resides in. You're safe to just delete it.

If you have more ideas how to reduce the OPK size, please click on the EDIT button on the right, and suggest an edit.