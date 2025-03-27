//import
const EventEmitter = require("events");



// Initializing event emitter instances  
var eventEmitter = new EventEmitter();


var geek1 = (msg)=>{
    console.log("Message from geek1: "+msg);
}

var geek2 = (msg)=>{
    console.log("Message from geek2: "+msg);
}



//Resigration the event handlers / listeners 
eventEmitter.on('myEvent',geek1);
eventEmitter.on('myEvent',geek1);
eventEmitter.on('myEvent',geek2);





//Triggering of events 
eventEmitter.emit('myEvent', "Event Occured");




eventEmitter.emit('myEvent', "Event Occured");
























// The EventEmitter class is at the core of many Node.js modules and helps us emit (trigger) and listen to events.


// Think of it as a system where:

// You emit an event (like a button click),

// And listeners (event handlers) respond to that event.



// Publisher-Subscriber Pattern
// EventEmitter follows this design pattern:

// Publisher (Emitter): Emits or broadcasts an event.

// Subscriber (Listener): Listens for and responds to events.