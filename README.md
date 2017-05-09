# backstamped-files

Synchronously write a series of files with different timestamps. This module
returns an array of the created files.

backstamped-files will take an options object as its second argument as follows:

{
  "count": 5,
  "filename": "file",
  "ext": ["txt", "js"]
}

count: the number of files you want created
filename: filename will have an underscore character and a number appended
  to it to make it unique
ext: an array that can have any number of extensions. The extensions will be
  randomly applied to different files.


## Install

```
npm install --save backstamped-files
```

## Usage

```
const createFiles = require('create-test-files');

const files = createFiles('/path/to/directory');
```


## License

MIT
