const os = require("os");


console.log("Operating System Info:");

console.log("Platform: ",os.platform());
console.log("Architecture: ",os.arch());

console.log("CPU info: ",os.cpus());



//Total Memory 

console.log("Total Memory: ",os.totalmem()/(1024**3));
console.log("Free Memory: ",os.freemem()/(1024**3));