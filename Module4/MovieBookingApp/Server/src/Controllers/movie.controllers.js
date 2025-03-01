

const getAllMovies = (req,res)=>{
    return res.send({success:true,data:[{name:"Movie1"},{name:"Movie2"}]})
}

const getMovieDetails = (req,res)=>{
    return res.send({success:true,data:{movieId:"randomId"}});
}

const createMovie = (req,res)=>{
    return res.send({success:true,message:"New Movie Created Successfully"});
}

const createBooking = (req,res)=>{

    //get token , verfiy token

    return res.send({success:true, message:"New Booking Created Succesfully"});
}

module.exports={
    getAllMovies,
    getMovieDetails,
    createMovie,
    createBooking
}

