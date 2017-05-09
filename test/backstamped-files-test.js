const fs = require('fs-extra');
const createFiles = require('../index.js');
const expect = require('chai').expect;
var chaiFiles = require('chai-files');
const file = chaiFiles.file;

describe(`backstamped-files`, function(){
    const testpath = './test/fileHolderFolder';

    before(function(done){
        fs.ensureFile(`${testpath}/file_0.txt`, err =>{
            if(err) throw err;
            fs.emptyDirSync(testpath);
            done();
        });
    });

    it(`returns an array of file names`, function(){
        expect(createFiles(testpath))
            .to.be.an('array');
    });

    it(`creates a series of files in a user-supplied directory`, function(){
        expect(file(`${testpath}/file_0.txt`)).to.exist;
    });
});
