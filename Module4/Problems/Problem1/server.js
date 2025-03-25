

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/downloadFullFile",(req,res)=>{

    //read the entire file

    // const filePath = '/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file';
    const filePath = path.join(__dirname,'big.file');

    fs.readFile(filePath,(err,data)=>{

        if(err){
            return res.status(500).send({error:"Internal Server Error"});
        }

        res.setHeader('Content-Type','text/plain');
        res.send(data);


    })

})


app.get("/downloadFileWithStreams",(req,res)=>{

    const filePath = path.join(__dirname,'big.file');


    //Create a readable Stream for the big file
    const readableStream = fs.createReadStream(filePath);

    //Create a writable Stream for the new file 
    const writeableStream = fs.createWriteStream("copyOfBigFile");

    readableStream.on("data",(chunk)=>{
        console.log(chunk);
        console.log(`Recieved ${chunk.length} bytes of data`);


        writeableStream.write(chunk);
    })
})


// The pipe() function is a method on Readable streams and is used to connect a readable stream to a writable stream. It automatically handles the data transfer from the readable stream to the writable stream. To simplify your code using the pipe method, you can replace the manual read and write operations with a single pipe() call.



app.get("/downloadFileWithStreamsV2",(req,res)=>{

    const filePath = path.join(__dirname,'big.file');


    const readableStream = fs.createReadStream(filePath);
    const writeableStream = fs.createWriteStream("copyOfBigFileV3");

    readableStream.pipe(writeableStream);

    readableStream.on("error",(err)=>{
        console.log("Error while reading", err);
    })
    
    writeableStream.on("error",(err)=>{
        console.log("Error while writing",err);
    })

 
})







app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})






//Generate random content

// const content = Math.random().toString(36).repeat(10000000);
// fs.writeFileSync('/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file',content);