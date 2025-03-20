const mongoose = require("mongoose");

const connectDB = ()=>{

    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to DB Succesfully")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;