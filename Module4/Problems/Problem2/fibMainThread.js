

const express = require("express");

const app = express();


function calculateFibonacci(number){

    if(number<=1){
        return number;
    }

    return calculateFibonacci(number-2) + calculateFibonacci(number-1);

}


app.get("/fib",(req,res)=>{


    const {number} = req.query;

    const answer = calculateFibonacci(number);

    return res.status(200).send({
        status:"success",
        data:answer
    })

})






app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})





