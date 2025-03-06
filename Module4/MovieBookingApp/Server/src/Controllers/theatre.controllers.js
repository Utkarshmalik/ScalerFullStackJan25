const TheatreModel = require("../Model/theatre.model");


const createTheatre = async (req,res)=>{

    //perform validations 

    const theatreDetails = req.body;
    theatreDetails.owner = req.userDetails._id;

    try{

        const newTheatre = new TheatreModel(theatreDetails);
        const response= await newTheatre.save();

        return res.status(201).send({
            success:true,
            message:"New Theatre added successfully",
            data:response
        })


    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}

const getAllTheatres = async (req,res)=>{
 
    try{

        const allTheatres  =  await TheatreModel.find({});

        return res.status(200).send({
            success:true,
            message:"All Theatres fetched successfully",
            data:allTheatres
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}

module.exports = {
    createTheatre,
    getAllTheatres
}