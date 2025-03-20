
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const connectDB = require("./src/db/dbServer");
const userRoutes = require("./src/Routes/user.routes");
const movieRoutes = require("./src/Routes/movie.routes");
var cors = require('cors');
const bodyParser = require("body-parser");
const theatreRoutes = require("./src/Routes/theatre.routes");
const showRoutes = require("./src/Routes/show.routes");
const bookingRoutes = require("./src/Routes/booking.routes");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');



 const app = express();

connectDB();

const apiLimiter = rateLimit({
    windowMs:3 * 1000,
    max:5,
    message:'Too many requests from this IP, please try again after 3 minutes'
})




app.use(bodyParser.json());
app.use(cors());
app.use(apiLimiter);
app.use(mongoSanitize());

userRoutes(app);
movieRoutes(app);
theatreRoutes(app);
showRoutes(app);
bookingRoutes(app);


app.listen(8000,()=>{
    console.log("Serving is running on port 8000");
})