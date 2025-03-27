
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','user','partner'],
        default:'user'
    },
    otp:{
        type:Number
    },
    otpExpiry:{
        type:Date
    }
})

const UserModel = mongoose.model("users_fsJan25", userSchema);

module.exports = UserModel;
