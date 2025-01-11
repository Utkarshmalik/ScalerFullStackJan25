import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import movieBackendResponse from "../data.json";


function Movies(){

    const movies = movieBackendResponse.data;

    return <>

    <Navbar/>


     <h1> Movies </h1>

     <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"10px"}}>
     {

        movies.map((movie)=> 
        <div>
            <Link to={`/movies/${movie._id}`} >
            <img src={movie.poster} height="300px" width="200px" />
            <h4> {movie.movieName} </h4>
            </Link>

        </div>)
     }
    </div>



    </> 

}

export default Movies;

