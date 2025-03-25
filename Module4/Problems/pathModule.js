

//utilities for directries and files 

const path = require("path");


const filePath = '/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file';


console.log("Directory Name ",path.dirname(filePath));

console.log("Base Name ",path.basename(filePath));



const newPath = path.join('/user','local','bin','newFile.txt');
console.log(newPath);


//resolve to an absolute path 
const absolutePath = path.resolve('Problem1','bigFile');
console.log(absolutePath);
