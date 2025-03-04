const { getAllMovies, getMovieDetails, createMovie, createBooking, deleteMovieById, updateMovieById } = require("../Controllers/movie.controllers");
const { verifyJWT, verifyAdmin } = require("../Middlewares/auth.middleware");
const verifyCreateMovieRequest = require("../Middlewares/movie.middleware");


module.exports = (app)=>{
    app.post("/movies",[verifyJWT,verifyAdmin,verifyCreateMovieRequest],createMovie);              
    app.get("/movies",getAllMovies);                
    app.get("/movies/:id",getMovieDetails);  
    app.delete("/movies/:id",[verifyJWT, verifyAdmin],deleteMovieById);      
    app.put("/movies/:id",[verifyJWT, verifyAdmin],updateMovieById);      

}