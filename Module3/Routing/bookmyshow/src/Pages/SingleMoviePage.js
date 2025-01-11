import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import movieBackendResponse from "../data.json";
 


function SingleMoviePage(){

    //i need to know the value of the id param 

    const params = useParams();
    const movieId = params.id;
    const movies = movieBackendResponse.data;


    const fetchedMovieDetails = movies.find((movie)=>movie._id == movieId);

    console.log(fetchedMovieDetails);



    console.log("Single Movie Page")

    return <>

    <Navbar/>
 <h1> SingleMoviePage </h1>

    {

        !fetchedMovieDetails && 
        <h3> {`OOPS! It appears that the movieId ${movieId} is not in out systems`}</h3>
    
    }

    {

        fetchedMovieDetails && <div>

        <img src={fetchedMovieDetails.poster} height="500px" width="400px" />
        <h4> {fetchedMovieDetails.movieName} </h4>
        <p> {fetchedMovieDetails.description}</p>

        </div>

    }   

    </> 

}

export default SingleMoviePage;

