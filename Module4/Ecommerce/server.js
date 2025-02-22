

const express = require("express");
var bodyParser = require('body-parser')
const ProductRoutes = require("./src/Views/Product.routes");
const connectDB = require("./src/config/db");
const loggerMiddleware = require("./src/Middlewares/LoggerMiddleware");
const OrderRoutes = require("./src/Views/Order.routes");

// Create an Express application
const app = express();


connectDB();

//middleware to log the incoming requests 
app.use(loggerMiddleware);

//  middleware to parse the body in the requests
app.use(bodyParser.json());



//import the product routes
ProductRoutes(app);
OrderRoutes(app);


const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})