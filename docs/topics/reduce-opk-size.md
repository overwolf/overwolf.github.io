---
id: reduce-opk-size
title: Reducing the OPK Size
sidebar_label: Reduce OPK Size
---

As explained in [here](../start/sdk-introduction#opk-package), the OPK file is the Overwolf installation package, that includes all your apps files:  the manifest, the source files and other assets. All the files are packed in a zipped packge, with the OPK file extension.

## Why we want to reduce the OPK size

Most of the time, the basic zipping is enough, and the OPK total sizes is between 1-3 Mb. But sometimes, usually because of heavy weight assets, the OPK can increase easily to more than 5Mb, and that is not recomemnd: heavy packges will take more time to release and download - imgine a thousands of users that get push updates. Also, we always trying to leave the smallest footprint on the user computer and resources. 

## How we can reduce the OPK size
 
* tinypng 
* remove map files before zipping (*.map)
* minimize the font sizes
* try to split reusable code into smaller chunk files with webpack etc.
* remove ds_store files - sometimes I also see these files (and deleting them manually). 
* download asset on the first time that the app loads