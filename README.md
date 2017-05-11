# backstamped-files

Synchronously write a series of files with different timestamps. This module
returns an array of the created files.

backstamped-files will take an options object as its second argument as follows:

{
  "count": 5,
  "filename": "file",
  "ext": ["txt", "js"]
}

**count**

Type: number

The number of files you want created

---
**filename**

Type: String

Filename will have an underscore character and a number appended to it to make it unique

---

**ext**

Type: Array

Extensions will be randomly applied to different files.

---

## Install

```
npm install --save backstamped-files
```

## Usage

```
const createFiles = require('backstamped-files');

const files = createFiles('/path/to/directory');
```


## License

MIT
