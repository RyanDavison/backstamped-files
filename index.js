const path = require('path');
const fs = require('fs');
const before = require('before-today');
const idx = require('random-array-index');

module.exports =
(dirpath, options = {}) => {
    const count = options.count || 5;
    const filename = options.filename || 'file';
    const ext = options.ext || ['txt'];
    let filelist = [];
    for (let i = 0; i < count; i++){
        filelist.push(path.join(dirpath, `${filename}_${i}.${ext[idx(ext)]}`));
        let t = before(i, true)/1000;
        fs.writeFileSync(filelist[i], i);
        fs.utimesSync(filelist[i], t, t);
    }
    return filelist;
}
