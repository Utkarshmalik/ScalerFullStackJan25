const mongoose = require("mongoose");


const showSchema = new mongoose.Schema({
    
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies_fsJan25',
        required:true
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatres_fsJan25',
        required:true
    },
    showDate:{
        type:Date,
        required:true
    },
    showTime:{
        type:String,
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:Array,
        default:[]
    },
    ticketPrice:{
        type:Number,
        default:500,
        required:true
    }
})


const showModel = mongoose.model("shows_fsJan25", showSchema);


module.exports = showModel;



