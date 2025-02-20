

const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");

// Create an Express application
const app = express();


mongoose.connect("mongodb+srv://utmalik:qwerty123@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB Succesfully")
})
.catch((err)=>{
    console.log(err);
})


const loggerMiddleware = (req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

app.use(loggerMiddleware);

// parse application/json
app.use(bodyParser.json());




//Ecommerce 

//Collections : Product 


//Create a Schema for that Collection 
const ProductSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewelery"]
    }
})



//Create a Collection 

const ProductModel = mongoose.model("Products_ScalerJan25",ProductSchema);




app.post("/products",async (req,res)=>{

    const productData = req.body;

    //validations 
    if(!productData.title){
        return res.status(400).json({message:"Title needs to be passed to create a new product"});
    }

    console.log(productData);


    //create a new Document
    const productDoc = new ProductModel({
        name:req.body.title,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category
    })

    try{   //Save a document in the collection 
        const saveResponse =  await productDoc.save();
        return res.status(201).send(saveResponse);
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }

})


app.get("/products",async (req,res)=>{

    try{

        const data = await ProductModel.find({});

        return res.status(200).send(data);


    }catch(err){

        return res.status(500).send({message:"Internal Server Error! Please try again"});

    }

})

app.get("/products/:id",async (req,res)=>{

    try{

        const productId = req.params.id;

        const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

        if(!isValidObjectId){

            return res.status(400).send({message:`Product with id:${productId} is not a valid Object Id format`})

        }


        const data = await ProductModel.findById(productId);

        if(data==null){
            return res.status(404).send({message:`Product with id:${productId} is not a valid productId`})
        }

        return res.status(200).send(data);


    }catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }

})


app.delete("/products/:id",async (req,res)=>{

    try{

        const productId = req.params.id;

        const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

        if(!isValidObjectId){
            return res.status(400).send({message:`Product with id:${productId} is not a valid Object Id format`})
        }


        const data = await ProductModel.findByIdAndDelete(productId);

        if(data==null){
            return res.status(200).send({message:`Product with id:${productId} is invalid product Id`,err})
        }

        return res.status(200).send({message:`Product with id:${productId} is deleted successfully`})



    }catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }

})


app.patch("/products/:id",async (req,res)=>{

    try{

        const productId = req.params.id;

        const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

        if(!isValidObjectId){
            return res.status(400).send({message:`Product with id:${productId} is not a valid Object Id format`})
        }


        const data = await ProductModel.findByIdAndUpdate(productId,{
            price:req.body.price
        },{
            new:true
        });

        if(data==null){
            return res.status(200).send({message:`Product with id:${productId} is invalid product Id`,err})
        }

        return res.status(200).send(data);



    }catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }

})









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














// mongodb 
// mongoose 
// mongodb atlas 