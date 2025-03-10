
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./src/db/dbServer");
const userRoutes = require("./src/Routes/user.routes");
const movieRoutes = require("./src/Routes/movie.routes");
var cors = require('cors');
const bodyParser = require("body-parser");
const theatreRoutes = require("./src/Routes/theatre.routes");
const showRoutes = require("./src/Routes/show.routes");
require('dotenv').config()


 const app = express();

connectDB();



app.use(bodyParser.json());
app.use(cors());

userRoutes(app);
movieRoutes(app);
theatreRoutes(app);
showRoutes(app);


app.listen(8000,()=>{
    console.log("Serving is running on port 8000");
})