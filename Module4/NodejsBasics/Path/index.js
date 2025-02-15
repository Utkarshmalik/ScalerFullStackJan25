

const path = require("path");


const fullPath = path.join(__dirname, 'folder','file.txt');

console.log(fullPath);


const fileExtension = path.extname('example.txt');

console.log(fileExtension);