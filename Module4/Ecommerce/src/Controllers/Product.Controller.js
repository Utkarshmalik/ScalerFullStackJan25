const ProductModel = require("../Models/Product.model");
const mongoose = require("mongoose");

const createProduct = async (req,res)=>{

    const productData = req.body;

    //validations 
    if(!productData.title){
        return res.status(400).json({message:"Title needs to be passed to create a new product"});
    }
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
        return res.status(500).send({message:"Internal Server Error! Please try again",err});
    }
}

const getAllProducts = async (req,res)=>{
        
    try{
        const data = await ProductModel.find({});
        return res.status(200).send(data);
    }catch(err){
        return res.status(500).send({message:"Internal Server Error! Please try again"});
    }
}

const getProductById = async (req,res)=>{   
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
}

const deleteProductById = async (req,res)=>{
        
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
}

const updateProductById = async (req,res)=>{
        
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

}

module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
}