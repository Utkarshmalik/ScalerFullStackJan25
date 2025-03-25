

const express = require("express");
const {fork} = require("child_process");
const path = require("path");

const app = express();





app.get("/fib",(req,res)=>{

    const {number} = req.query;

    //create a new child process 
    const fibChildProcess = fork(path.join(__dirname,'fibWorker.js'));


    //Send a message to the child process to compute the fibonacii 
    fibChildProcess.send({number:number});


    fibChildProcess.on("message",(result)=>{
        return res.status(200).send({
            status:"success",
            data:result
        })
    })

})






app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})





