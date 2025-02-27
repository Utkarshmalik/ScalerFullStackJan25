
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/db/dbServer");
const userRoutes = require("./src/Routes/user.routes");
const bodyParser = require("body-parser");
 var cors = require('cors')

 const app = express();
connectDB();


app.use(bodyParser.json());
app.use(cors());


userRoutes(app);

app.listen(8000,()=>{
    console.log("Serving is running on port 8000");
})