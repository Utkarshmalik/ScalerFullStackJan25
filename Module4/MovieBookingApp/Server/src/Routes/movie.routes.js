const { getAllMovies, getMovieDetails, createMovie, createBooking } = require("../Controllers/movie.controllers");
const { verifyJWT, verifyAdmin } = require("../Middlewares/auth.middleware");


module.exports = (app)=>{
    app.get("/movies",getAllMovies);               //all the users 
    app.get("/movies/:id",getMovieDetails);        //all the users 
    app.post("/booking",[verifyJWT],createBooking);            //all authenticated users 
    app.post("/movies",[verifyJWT,verifyAdmin],createMovie);               // authenticated + authorised as admin  

}