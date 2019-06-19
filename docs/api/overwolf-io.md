---
id: overwolf-io
title: overwolf.io API
sidebar_label: overwolf.io
---

Use the `overwolf.io` API to check if  a certain file exists or to write content to a file.  
For more I/O functionalities, please use our simple I/O plugin.  

## Methods Reference

* [`fileExists()`](#fileexistsfilepath-callback)
* [`writeFileContents()`](#writefilecontentsfilepath-content-encoding-triggeruacifrequired-callback)
* [`readFileContents()`](#readfilecontentsfilepath-encoding-callback)
* [`copyFile()`](#copyfilesrc-dst-overridefile-reserved-callback)

## Types Reference

* [`eEncoding()`](#eencoding)

## fileExists(filePath, callback)

#### Version added: 0.93

> Checks for the existance of the file in the given path.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | The path to check for |
callback | function | Returns with the result |   
   
#### Callback argument: Success

```json 
{ "status": "success", "found": true }
```

#### Callback argument: Failure
If the file doesn’t exist, an error status will be returned:

```json 
{"status":"error","reason":"File doesn't exists"}
```

## writeFileContents(filePath, content, encoding, triggerUacIfRequired, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Writes the content to the target file.

If the file doesn’t exist, it will be created, along with any needed directories along the path. Otherwise, the file’s content will be overwritten.

Parameter            | Type                    | Description                                                                             |
-------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
filePath             | string                  | The path to check for                                                                   |
content              | string                  | The content to write                                                                    |
encoding             | [eEncoding](#eEncoding) enmum | The encoding to use                                                               |
triggerUacIfRequired | bool                    | If additional permissions are required, allows the triggering of the Windows UAC dialog |
callback             | function                | Returns with the result                                                                 |   
   
#### Callback argument: Success
```json
{ "status": "success" }
```
#### Callback argument: Failure

```json
{"status":"error"}
```   

## readFileContents(filePath,encoding, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Returns a string with the targeted file’s content.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | The full path of the targeted file|
encoding | [eEncoding](#eEncoding) enum | The encoding to use |
callback | function | Returns with the result |   
   
#### Callback argument: Success

returns a string with the targeted file’s content.

```json
{"status":"success","content":"Hello World!"}
```

#### Callback argument: Failure

If the file doesn’t exist, an error status will be returned:

```json
{"status":"error","reason":"File doesn't exists"}
```

## copyFile(src, dst, overrideFile, reserved, callback)

#### Version added: 0.93

#### Permissions required: FileSystem

> Copy a file from the local extension directory to a destination in the local machine.

Parameter | Type | Description |
------------ | ------------ | ------------ |
src | string | A relative (to the root of your extension's folder) file path or a full overwolf-extension:// URI to the source file to be copied |
dst | string | The destination path (including filename) to copy to |
overrideFile | bool | "true" if you want an existing file to be overriden, "false" otherwise |
reserved | bool | For future use |
callback | function | Returns with the result |   

#### Callback argument: Success

returns a string with the targeted file’s content.

```json
{"status":"success""}
```

#### Callback argument: Failure

```json
{"status":"error"}
```   

## eEncoding
File encoding.

Options    | 
-----------| 
UTF8       | 
UTF8BOM    |
Unicode    |
UnicodeBOM |
ASCII      |