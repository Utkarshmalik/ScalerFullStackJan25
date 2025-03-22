
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");


//Create an express app 
const app = express();

//Create an HTTP server using the Express app
const server = http.createServer(app);

//Set up the Socket.IO on the server 
const io = socketIO(server);

// Handle incoming WebSocket connections
io.on("connection",(socket)=>{
    console.log(socket.id);
    console.log(`A new websocket connection has  been created with connectId ${socket.id} `);


    socket.on("chat-message",(msg)=>{

        console.log("Message Recieved From Client ",msg);


        //Emit this message to all connected connected clients 

        io.emit("chat-message",msg);

    })

})


app.get("/",(req,res)=>{
    res.sendFile("/Users/utmalik/Scaler/ScalerFullStackJan/Module4/Websockets/index.html");
})


server.listen(8000,(req,res)=>{
    console.log("Server is listening in port 8000")
})