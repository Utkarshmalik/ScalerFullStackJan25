const { mongo, default: mongoose } = require("mongoose");
const MovieModel = require("../Model/movie.model");


const getAllMovies = async (req,res)=>{


    try{
        const allMovies = await  MovieModel.find({});

        return res.status(200).send({
            success:true,
            message:"All movies have been fetched",
            data:allMovies
        })
       
    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }

}

const getMovieDetails = async (req,res)=>{


    try{

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(400).send({
                success:false,
                message:"Movie Id format is invalid"
            })

        }


        const movie = await  MovieModel.findById(req.params.id);

        if(!movie){
            return res.status(400).send({
                success:false,
                message:"Movie Id doesnot exists in our systems"
            })
        }

        return res.status(200).send({
            success:true,
            message:"movie data has been fetched",
            data:movie
        })
       
    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }

}

const createMovie = async (req,res)=>{

    try{
        const newMovie = new MovieModel(req.body);

        const dbResponse = await newMovie.save();

        if(dbResponse!=null){

            return res.status(201).send({success:true,message:"New Movie Created Successfully",data:dbResponse});

        }

    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }


}

const deleteMovieById = async (req,res)=>{

    const movieId = req.params.id;

    try{ 

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(400).send({
                success:false,
                message:"Movie Id format is invalid"
            })

        }

        const movie = await  MovieModel.findById(req.params.id);

        if(!movie){
            return res.status(400).send({
                success:false,
                message:"Movie Id doesnot exists in our systems"
            })
        }


        const deleteResponse = await MovieModel.findByIdAndDelete(movieId);

        if(deleteResponse.deleteCount!=0){

            return res.status(200).send({
                success:true,
                message:`The movieId ${movieId} is deleted successfully`
            })
        }


    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }

}

const updateMovieById = async (req,res)=>{

    const movieId = req.params.id;

    try{ 

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){

            return res.status(400).send({
                success:false,
                message:"Movie Id format is invalid"
            })

        }

        const movie = await  MovieModel.findById(req.params.id);

        if(!movie){
            return res.status(400).send({
                success:false,
                message:"Movie Id doesnot exists in our systems"
            })
        }


        const updateResponse = await MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(updateResponse!=null){
            return res.status(200).send({
                success:true,
                message:`The data with movieId ${req.params.id} is updated successfully`,
                data:updateResponse
            })
        }


    }catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});
    }

}



module.exports={
    getAllMovies,
    getMovieDetails,
    createMovie,
    deleteMovieById,
    updateMovieById
}

