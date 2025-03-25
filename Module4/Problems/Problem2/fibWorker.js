
console.log("I am the child process");

function calculateFibonacci(number){

    if(number<=1){
        return number;
    }

    return calculateFibonacci(number-2) + calculateFibonacci(number-1);
}


//Recieved a message from a parent process 
process.on("message",(msg)=>{
    console.log(`Fib Process has recieved a message `,msg);

    //CPU Intensive Computation
    const result = calculateFibonacci(msg.number);

    //Sending some message to the parent process
    process.send(result);

})
