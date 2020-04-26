---
id: overwolf-extensions-io
title: overwolf.extensions.io API
sidebar_label: overwolf.extensions.io
---

Use this API to get I/O functionalities.

## Methods Reference

* [overwolf.extensions.io.createDirectory()](#createdirectoryspace-path-callback)
* [overwolf.extensions.io.getStoragePath()](#getstoragepathspace-callback)
* [overwolf.extensions.io.exist()](#existspace-path-callback)
* [overwolf.extensions.io.move()](#movespace-source-destination-callback)
* [overwolf.extensions.io.delete()](#deletespace-path-callback)
* [overwolf.extensions.io.copy()](#copyspace-source-destination-callback)
* [overwolf.extensions.io.dir()](#dirspace-directorypath-callback)
* [overwolf.extensions.io.readTextFile()](#readtextfilespace-filepath-callback)
* [overwolf.extensions.io.writeTextFile()](#writetextfilespace-filepath-content-callback)

## Types Reference

* [overwolf.extensions.io.enums.FileType](#filetype-enum) enum
* [overwolf.extensions.io.enums.StorageSpace](#storagespace-enum) enum
* [overwolf.extensions.io.Content](#content-object) Object
* [overwolf.extensions.io.ReadTextFileResult](#readtextfileresult-object) Object
* [overwolf.extensions.io.ExistResult](#existresult-object) Object
* [overwolf.extensions.io.ExistResult](#existresult-object) Object
* [overwolf.extensions.io.GetStoragePathResult](#getstoragepathresult-object) Object
* [overwolf.extensions.io.DirResult](#dirresult-object) Object
* [overwolf.extensions.io.DeleteResult](#deleteresult-object) Object

## createDirectory(space, path, callback)
#### Version added: 0.147

> Create directory.

Parameter | Type                                     | Description                                                         |
--------- | -----------------------------------------| --------------------------------------------------------------------|
space     | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
path      | string                                   | Path within the space. Use null or empty string for the space root. |
callback  | (Result) => void                         | Reports success or failure.                                         |

## getStoragePath(space, callback)
#### Version added: 0.147

> Returns the full path of given extension storage space.

Parameter | Type                                     | Description                                                         |
--------- | -----------------------------------------| --------------------------------------------------------------------|
space     | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
callback  | ([Result: GetStoragePathResult](#getstoragepathresult-object)) => void | Returns with the full path of the requested extension storage space                                                   |

## exist(space, path, callback)
#### Version added: 0.147

> Returns whether the file or folder specified exist.

Parameter | Type                                     | Description                                                         |
--------- | -----------------------------------------| --------------------------------------------------------------------|
space     | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
path      | string                                   | Path within the space. Use null or empty string for the space root. |
callback  | ([Result: ExistResult](#existresult-object)) => void       | Returns with the type of the file (if exist).     |

## move(space, source, destination, callback)
#### Version added: 0.147

> Moves source file or directory and its contents to destination.

Parameter   | Type                                     | Description                                                         |
----------- | -----------------------------------------| --------------------------------------------------------------------|
space       | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
source      | string                                   | Path for the source.                                                |
destination | string                                   | Path to move to, including filename.                                |
callback    | (Result) => void                         | Reports success or failure.                                         |

## delete(space, path, callback)
#### Version added: 0.147

> Deletes file or directory and its contents.

Parameter   | Type                                     | Description                                                         |
----------- | -----------------------------------------| --------------------------------------------------------------------|
space       | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
path        | string                                   | Path within the space. Use null or empty string for the space root. |
callback    | ([Result: DeleteResult](#deleteresult-object)) => void  | Returns with array of file and directory paths that could not be deleted.                                         |

## copy(space, source, destination, callback)
#### Version added: 0.147

> Copies source file or directory and its contents to destination.

Parameter   | Type                                     | Description                                                         |
----------- | -----------------------------------------| --------------------------------------------------------------------|
space       | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
source      | string                                   | Path for the source.                                                |
destination | string                                   | Path to copy to, including filename.                                |
callback    | (Result) => void                         | Reports success or failure.                                         |

## dir(space, directoryPath, callback)
#### Version added: 0.147

> Lists directories and files under given directory path.

Parameter     | Type                                     | Description                                                         |
------------- | -----------------------------------------| --------------------------------------------------------------------|
space         | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
directoryPath | string                                   | Path within the space. Use null or empty string for the space root. |
callback      | ([Result: DirResult](#dirresult-object)) => void   | Returns with array of file names within the directory.    |

## readTextFile(space, filePath, callback)
#### Version added: 0.147

> Returns the content of a given file.

Parameter     | Type                                     | Description                                                         |
------------- | -----------------------------------------| --------------------------------------------------------------------|
space         | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
filePath      | string                                   | Path of a file to read (within the space).                          |
callback      | ([Result: ReadTextFileResult](#)) => void| Returns with the content of the fil.                                |

## writeTextFile(space, filePath, content, callback)
#### Version added: 0.147

> Writes the provided text content to the provided file.

Parameter     | Type                                     | Description                                                         |
------------- | -----------------------------------------| --------------------------------------------------------------------|
space         | [StorageSpace](#storagespace-enum) enum  | The selected storage space.                                         |
filePath      | string                                   | Path of a file to write to (within the space).                      |
content       | string                                   | Text content to write.                                              |
callback      | (Result) => void                         | Reports success or failure.                                         |

## FileType enum
#### Version added: 0.147

> FileType is "file"|"directory".

Option     | Description                               |
-----------| ------------------------------------------|
file       |                                           |
directory  |                                           |

## StorageSpace enum
#### Version added: 0.147

> The selected storage space.

Option     | Description                                                                               |
-----------| ------------------------------------------------------------------------------------------|
pictures   | The extension's captured pictures folder, `OverwolfPicturesFolder\AppName\`               |
videos     | The extension's captured videos folder, `OverwolfVideosFolder\AppName\`                   |
appData    | The extension's folder under Roaming app data, `AppData\Roaming\Overwolf\Extensions\UID\` |

## Content Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
type               | [FileType](#filetype-enum) enum | FileType is "file" or "directory".                |   
path               | string                          |                                                   |

## ReadTextFileResult Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
content            | string                                                                              |   

#### Example data: Success

```json
```

#### Example data: Failure

```json
```

## ExistResult Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
type               | [FileType](#filetype-enum) enum | FileType is "file" or "directory".                |   

#### Example data: Success

```json
```

#### Example data: Failure

```json
```

## GetStoragePathResult Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
path               | string                          | Full path of the requested extension storage space|   

#### Example data: Success

```json
```

#### Example data: Failure

```json
```

## DirResult Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
files              | string[]                        | Array of file names within the directory.         |  
directories        | string[]                        | Array of directory names within the directory.    |   


#### Example data: Success

```json
```

#### Example data: Failure

```json
```

## DeleteResult Object
#### Version added: 0.147

Parameter          | Type                            | Description                                       |
-------------------| --------------------------------| ------------------------------------------------- |
*success*          | boolean                         | inherited from the "Result" Object                |
*error*            | string                          | inherited from the "Result" Object                |
status             | string                          | deprecated. For backward compatibility only       |
Reason             | string                          | deprecated. For backward compatibility only       |   
undeleted_content  | [Content[]](#content-object)    | Array of file and directory paths that could not be deleted. |  

#### Example data: Success

```json
```

#### Example data: Failure

```json
```

