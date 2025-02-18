

const express = require("express");
const { productsData } = require("./productsDB");
var bodyParser = require('body-parser')

// Create an Express application
const app = express();



const loggerMiddleware = (req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

app.use(loggerMiddleware);

// parse application/json
app.use(bodyParser.json());


//Get all the products 

app.get("/products",(req,res)=>{
    res.json(productsData);
})


//Get the product details via productId

app.get("/products/:id",(req,res)=>{

    const productId = req.params.id;

    const requiredProduct = productsData.find(product=>product.id==productId);

    if(!requiredProduct){
        return res.status(404).json({message:`Product with productId:${productId} is not present`})
    }

    res.json(requiredProduct);

})



//Create a new product 

app.post("/products",(req,res)=>{

    const productData = req.body;

    //validations 
    if(!productData.title){
        return res.status(400).json({message:"Title needs to be passed to create a new product"});
    }

    const uuid = Math.floor((Math.random() * 100)*10);

    productData.id = uuid;


    productsData.push(productData);

  return res.status(201).send({message:`Product succesfully created with ProductId:${productData.id}`});

})




















//Update the product details via productId 

//Delete the product via productId 






app.get("/",(req,res)=>{
    res.send("Hello Express");
})


app.get("/about",(req,res)=>{
    res.send("This is the about page");
})

app.post("/data",(req,res)=>{
    res.send("Recieved a POST request");
})



const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


















//GET , POST , DELETE , PUT , PATCH



// PUT VS PATCH 

// PUT (Idempotent, Full Update) : Replaces the entire resource with the provided data.

// PUT /users/123
// Content-Type: application/json

// {
//   "name": "John Doe",
//   "email": "john@example.com",
//   "age": 30
// }

// PATCH (Non-Idempotent, Partial Update)

// Partially updates a resource (only updates the fields provided).

// PATCH /users/123
// Content-Type: application/json

// {
//   "age": 31
// }

// Which one to use?

// Use PUT when you want to replace the entire resource.
// Use PATCH when you only want to modify specific fields.



//Query parameters are typically used when passing small, non-sensitive data in GET requests. (Filtering, searching, pagination)
// Body Best for: Creating or updating resources, sending complex or sensitive data  (Creating, updating, modifying data






//req.body -> undefined 

// Reads the HTTP body and make it avaiable under express req.body 







//Middleware 

// Middleware functions in Express.js are functions that have access to the request (req) and response (res) objects and can perform actions or transformations on them.

// They are used to handle tasks like parsing request data, authentication, logging, error handling, and more