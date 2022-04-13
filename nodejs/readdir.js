const testFolder = '../data';
const fs = require('fs');

fs.readdir(testFolder, (error, FileList)=>{
    console.log(FileList);
})