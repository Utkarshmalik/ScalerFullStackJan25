

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/downloadFullFile",(req,res)=>{

    //read the entire file

    const filePath = '/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file';

    fs.readFile(filePath,(err,data)=>{

        if(err){
            return res.status(500).send({error:"Internal Server Error"});
        }

        res.setHeader('Content-Type','text/plain');
        res.send(data);


    })

})


app.get("/downloadFileWithStreams",(req,res)=>{

    const filePath = '/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file';

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






app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})






//Generate random content

// const content = Math.random().toString(36).repeat(10000000);
// fs.writeFileSync('/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Problems/Problem1/big.file',content);