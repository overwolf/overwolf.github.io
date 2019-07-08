---
id: overwolf-logitech-arx
title: overwolf.logitech.arx API
sidebar_label: overwolf.logitech.arx
---

Provides API for Logitech Arx Control.

## Methods Reference

* [`init()`](#initidentifier-friendlyname-callback)
* [`publishApp()`](#publishappindexfilename-callback)
* [`addFileAs()`](#addfileasfileurl-filename-mimetype-callback)
* [`addContentAs()`](#addcontentasbase64content-filename-callback)
* [`addContentAs()`](#addcontentascontent-filename-mimetype-callback)
* [`addUtf8StringAs()`](#addutf8stringasstringcontent-filename-mimetype-callback)
* [`addImageFromBitmap()`](#addimagefrombitmapbitmap-width-height-filename-callback)
* [`setIndex()`](#setindexfilename-callback)
* [`setTagPropertyById()`](#settagpropertybyidtagid-prop-newvalue-callback)
* [`setTagsPropertyByClass()`](#settagspropertybyclasstagsclass-prop-newvalue-callback)
* [`setTagContentById()`](#settagcontentbyidtagid-newcontent-callback)
* [`setTagsContentByClass()`](#settagscontentbyclasstagsclass-newcontent-callback)
* [`shutdown()`](#shutdown)

## Events Reference

* [`onEvent`](#onevent)
* [`onError`](#onerror)

## Types Reference

* [`Logitech.Arx.Event.Data`](#logitecharxeventdata-object) Object.

## init(identifier, friendlyName, callback)
#### Version added: 0.93

> Initializes the Arx API.

Parameter    | Type     | Description                                          |
------------ | ---------| ---------------------------------------------------- |
identifier   | string   | An id for the app that will be discovered by LGS     |
friendlyName | string   | A friendly display name                              |
callback     | function | A callback with the result of the request            |

## publishApp(indexFilename, callback)
#### Version added: 0.93

> Publishes an entire app according to the folder set in the manifest file and (optional) sets an index file.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
indexFilename | string   |An optional file to use as index index                |
callback      | function | A callback with the result of the request            |

## addFileAs(fileUrl, fileName, mimeType, callback)
#### Version added: 0.93

> Adds a file using an overwolf-extension:// or overwolf-media:// url.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
fileUrl       | string   |The Overwolf url to add                               |
fileName	  | string   |The file name to add as                               |
mimeType	  | string   |An optional mime type                                 |
callback      | function | A callback with the result of the request            |

## addContentAs(base64Content, fileName, callback)
#### Version added: 0.93

> Adds content from a base64 string.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
base64Content | string   |The base64 string                                     |
fileName	  | string   |The file name to add as                               |
callback      | function | A callback with the result of the request            |

## addContentAs(content, fileName, mimeType, callback)
#### Version added: 0.93

> Adds content from a byte array.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
content	      | Byte[]   |The base64 string                                     |
fileName	  | string   |The file name to add as                               |
mimeType	  | string   |An optional mime type                                 |
callback      | function | A callback with the result of the request            |

## addUtf8StringAs(stringContent, fileName, mimeType, callback)
#### Version added: 0.93

> Adds content from a UTF8 string.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
stringContent |string    |The UTF8 string                                       |
fileName	  | string   |The file name to add as                               |
mimeType	  | string   |An optional mime type                                 |
callback      | function | A callback with the result of the request            |

## addImageFromBitmap(bitmap, width, height, fileName, callback)
#### Version added: 0.93

> Add an image from a bitmap.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
bitmap	      |Byte[]    |A byte array representing a bitmap                    |
width		  | int      |The width of the bitmap                               |
height		  | int      |The height of the bitmap                              |
fileName	  | string   |The file name to add as                               |
callback      | function | A callback with the result of the request            |

## setIndex(fileName, callback)
#### Version added: 0.93

> Sets the index file of the website.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
fileName	  | string   |The file to use as index                              |
callback      | function | A callback with the result of the request            |

## setTagPropertyById(tagId, prop, newValue, callback)
#### Version added: 0.93

> Sets a property of a tag by ID.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
tagId	      | string   |The ID of the tag to set the property to              |
prop		  | string   |The name of the property to change                    |
newValue	  | string   |The new valuep                                        |
fileName	  | string   |The file name to add as                               |
callback      | function | A callback with the result of the request            |

## setTagsPropertyByClass(tagsClass, prop, newValue, callback)
#### Version added: 0.93

> Sets a property of a tag(s) by class.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
tagsClass	  | string   |The class of the tag(s) to set the property to        |
prop		  | string   |The name of the property to change                    |
newValue	  | string   |The new valuep                                        |
callback      | function | A callback with the result of the request            |

## setTagContentById(tagId, newContent, callback)
#### Version added: 0.93

> Sets the content of a tag by ID.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
tagId		  | string   | The ID of the tag to set the content to              |
newContent	  | string   | The new content                                      |
callback      | function | A callback with the result of the request            |

## setTagsContentByClass(tagsClass, newContent, callback)
#### Version added: 0.93

> Sets the content of a tag by ID.

Parameter     | Type     | Description                                          |
------------- | -------- | ---------------------------------------------------- |
tagsClass	  | string   | The class of the tag(s) to set the content to        |
newContent	  | string   | The new content                                      |
callback      | function | A callback with the result of the request            |

## shutdown()
#### Version added: 0.93

> Shuts down the API.

## onEvent

#### Version added: 0.93

> An Arx event send with a [Logitech.Arx.Event.Data] object.

## onError

#### Version added: 0.93

> Triggered when an error occurs, sent with an error code.


## Logitech.Arx.Event.Data Object
#### Version added: 0.93

> Describes an Arx event.

Parameter         | Type   | Description                   |
----------------- | -------| ----------------------------- |
eventType         | int    | The type code of the event    |
eventTypeString   | string | The type name of the event    |
eventValue        | int    | The value code of the event   |
eventValueString  | string | The value string on the event |
eventArg          | string | The argument of the event     |
context           | IntPtr | The context of the event      |