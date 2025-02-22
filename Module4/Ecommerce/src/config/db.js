
const mongoose = require("mongoose");

const connectDB = ()=>{

        mongoose.connect("mongodb+srv://utmalik:qwerty123@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>{
            console.log("Connected to DB Succesfully")
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = connectDB;