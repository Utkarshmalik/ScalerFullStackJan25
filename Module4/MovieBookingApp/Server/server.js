
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/db/dbServer");
const userRoutes = require("./src/Routes/user.routes");
const bodyParser = require("body-parser");

const app = express();
connectDB();


app.use(bodyParser.json());


userRoutes(app);

app.listen(8082,()=>{
    console.log("Serving is running on port 8082");
})