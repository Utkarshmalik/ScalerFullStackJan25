//spawn 


const {spawn, exec} = require("child_process");
const { error } = require("console");

// // Spawning a new process to list files in the current directory
// const child = spawn('ls',['-lh','/usr']);

// // Listen to data from stdout
// child.stdout.on('data',(data)=>{
//     console.log(`stdout: ${data}`);
// })


// exec('ls -lh',(err,stdout)=>{

//     if(err){
//         console.log(`exec error:${error}`);
//     }

//     console.log(`stdout ${stdout}`);
// })



spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",["https://www.google.com/"]);