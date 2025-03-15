
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


    show:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shows_fsJan25',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users_fsJan25',
        required:true
    },
    seats:{
        type:Array,
        required:true
    },
    transactionId:{
        type:String,
        required:true

    }

})


const BookingsModel = mongoose.model("bokings_fsJan25",bookingSchema);

module.exports = BookingsModel;
