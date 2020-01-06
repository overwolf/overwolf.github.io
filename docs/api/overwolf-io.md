---
id: overwolf-io
title: overwolf.io API
sidebar_label: overwolf.io
---

Use the `overwolf.io` API to check whether a certain file exists, as well as to write content into files. For more I/O functionalities, please use our [simple I/O plugin](../topics/simple-io-plugin).  

## Methods Reference

* [overwolf.io.fileExists()](#fileexistsfilepath-callback)
* [overwolf.io.writeFileContents()](#writefilecontentsfilepath-content-encoding-triggeruacifrequired-callback)
* [overwolf.io.readFileContents()](#readfilecontentsfilepath-encoding-callback)
* [overwolf.io.copyFile()](#copyfilesrc-dst-overridefile-reserved-callback)
* [overwolf.io.dir()](#dirpath-callback)
* [overwolf.io.readBinaryFile()](#readbinaryfilepath-options-callback)
* [overwolf.io.readTextFile()](#readtextfilepath-options-callback)
* [overwolf.io.exist()](#existpath-callback)
* [overwolf.io.listenOnFile()](#listenonfileid-path-option-callback)
* [overwolf.io.stopFilelistener()](#stopfilelistenerid)

## Types Reference

* [overwolf.io.eEncoding](#eencoding-enum) enum
* [overwolf.io.enums.fileListenerState](#filelistenerstate-enum) enum
* [overwolf.io.enums.ReadFileOptions](#readfileoptions-object) Object



## fileExists(filePath, callback)

#### Version added: 0.93

> Checks for the existance of a file in the given path.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | Path to check for |
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

> Writes content into the target text file.

If the file doesn’t exist, it will be created, along with any needed directories along the path. Otherwise, the file’s content will be overwritten.

Parameter            | Type                    | Description                                                                             |
-------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
filePath             | string                  | Path to check for                                                                   |
content              | string                  | Content to write                                                                    |
encoding             | [eEncoding](#eencoding-enum) enum | Encoding to use                                                               |
triggerUacIfRequired | bool                    | If additional permissions are required, triggers the Windows UAC dialog |
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

> Returns a string with the targeted text file’s content.

Parameter | Type | Description |
------------ | ------------ | ------------ |
filePath | string | Full path of the targeted file|
encoding | [eEncoding](#eencoding-enum) enum | Encoding to use |
callback | function | Returns with the result |
   
#### Callback argument: Success

Returns a string with the targeted file’s content.

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
src | string | A relative file path from your extension's root folder, or a full overwolf-extension:// URI to the source file |
dst | string | Destination path to copy to including file name |
overrideFile | bool | "true" if you want an existing file to be overwritten, "false" otherwise |
reserved | bool | For future use |
callback | function | Returns with the result |   

#### Callback argument: Success

Returns a string with the targeted file’s content.

```json
{"status":"success""}
```

#### Callback argument: Failure

```json
{"status":"error"}
```

## dir(path, callback)

#### Version added: 0.141

#### Permissions required: FileSystem

> List all files and sub folder in path.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
path      | string   | The target path         |
callback  | function | Returns with the result | 

## readBinaryFile(path, options, callback)

#### Version added: 0.141

#### Permissions required: FileSystem

> Read binary file.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
path      | string   | The target path         |
options   | [ReadFileOptions](#readfileoptions-object) object |   |
callback  | function | Returns with the result |   

#### Callback argument: Success

```json
 {
    "success" : true,
    "error": "", 
    "content": "", // the file content
    "info" : {
        "eof" : true, // is EOF
        "totalRead" : 3000, // total read bytes
        "position" : 3000, // last file position
        "totalLines" :100, // total read lines
    }
}
```

## readTextFile(path, options, callback)

#### Version added: 0.141

#### Permissions required: FileSystem

> Read text file.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
path      | string   | The target path         |
options   | [ReadFileOptions](#readfileoptions-object) object |    |
callback  | function | Returns with the result |   

#### Callback argument: Success

```json
 {
    "success" : true,
    "error": "", 
    "content": "", // the file content
    "info" : {
        "eof" : true, // is EOF
        "totalRead" : 3000, // total read bytes
        "position" : 3000, // last file position
        "totalLines" :100, // total read lines
    }
}
```

## exist(path, callback)

#### Version added: 0.141

#### Permissions required: FileSystem

> Is path exist.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
path      | string   | The target path         |
callback  | function | Returns with the result | 

#### Callback argument: Success

```json
 {
    "success" : true,
    "error": "", 
    "exist": true
}
```

## listenOnFile(id, path, option, callback)

#### Version added: 0.141

#### Permissions required: FileSystem

> Start listen on file.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
id        | string   | listen Id               |
path      | string   | file path               |
options   | object   | Read [notes](#options-notes-2)          |
callback  | function | Returns with the result | 

#### `options` notes

```json
{
    "skipToEnd" : false //should skip directly to end of file
}
```

#### Callback argument: Success

```json
{
    "success" : true, // when false the callback will stop listen
    "error": "", // valid only when success = false
    "state": "running|terminated|truncated" // valid only when success =true (overwolf.io.enums.fileListenerState) 
    "content": "", //the line 
    "info" : 
    {
        "index" : 1, // line index
        "isNew" : false, //false when line exist (e.g skip to end is false), true when new line was add to file
        "position" : 3000, // last file position
        "eof" :false, // is eof reached
    }
}
```

#### listenOnFile notes 

* "state" is from type [overwolf.io.enums.fileListenerState](#filelistenerstate-enum).
* Please read what happens when you call [stopFileListener()](#stopfilelistener-notes).

## stopFileListener(id)

#### Version added: 0.141

#### Permissions required: FileSystem

> Stop listen on file.

Parameter | Type     | Description             |
----------| ---------| ----------------------- |
id        | string   | listen Id               |

#### stopFileListener notes

On stop, [listenOnFile](#listenonfileid-path-option-callback) callback will trigger with a "truncated" state:

```json
{
    "success" : true, 
    "error": "", 
    "state": "truncated" 
    ...
}
```


## fileListenerState enum

File listener state.

Options    | 
-----------| 
running    | 
terminated |
truncated  |

## eEncoding enum

File encoding.

Options    | 
-----------| 
UTF8       | 
UTF8BOM    |
Unicode    |
UnicodeBOM |
ASCII      |

## ReadFileOptions Object
#### Version added: 0.141

> Describes the different options to read a file.

Parameter        | Type                          | Description                       |
---------------- | ------------------------------| --------------------------------- |
encoding         | [eEncoding](#eencoding-enum) enum  |                                   |
maxBytesToRead   | int                           | default it 0 => read all file     |
offset           | int                           | start read position, default is 0 |