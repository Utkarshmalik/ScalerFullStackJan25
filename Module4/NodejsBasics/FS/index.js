
//read a file asychronously 

const fs = require("fs");


//Example 1: Reading a File (fs.readFile - Asynchronous)

// fs.readFile("sample.txt",'utf-8',(err,data)=>{

//     if(err){
//         console.log("Some error while reading a file", err);
//         return;
//     }

//     console.log("File Content:",data);

// })

// console.log("Checkpoint");




// const content = "Hello World! How are you doing ?";

// fs.writeFile('hello.txt',content,'utf-8',(err)=>{

//     if(err){
//         console.log("Some error while writing a file", err);
//         return;
//     }

//     console.log("File has been written successfully");
// })



// const data = fs.readFileSync("sample.txt",'utf8');

// console.log(data);

// console.log("Checkpoint");



// fs.mkdir("test",{ recursive: true }, (err) => {

//   });

// fs.rmdir("test",{ recursive: true }, (err) => {

//     console.log(err);
//  })






// fs.rename('hello.txt','hellonew.txt',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File has been renamed");

// })


// fs.unlink('sample.txt',(err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File has been deleted");

// })



// fs.stat("hellonew.txt",(err,stats)=>{

//     if(err){
//         console.error(err);
//         return;
//     }

//     console.log(stats.size);
//     console.log(stats.isDirectory());

// })