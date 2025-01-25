import { useState,useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Commons/Spinner/Spinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

function Movies(){

    const [movies, setMovies]= useState(null);
    const [isLoading, setIsLoading] =  useState(true);

    const [pageNumber, setPageNumber] = useState(1);
    

    const onPrevClick = ()=>{
        if(pageNumber>1){
            setPageNumber(pageNumber-1);
        }
    }


    const onNextClick = ()=>{
        setPageNumber(pageNumber+1);
    }



    const fetchMovieData = async ()=>{

        console.log("Inside Movies");

        try{
         const response = await  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`);
         const movies = response.data.results;
         console.log(movies);
         setMovies(movies);
         setIsLoading(false);

        }
        catch(err){
            console.log(err);

        }
    }

    useEffect(()=>{
        console.log("I am inside useEffect");
        fetchMovieData();
    },[pageNumber]);


    return <div>

        <div className="m-5 font-bold text-2xl">
            <h1> Trending Movies </h1>
        </div>

        {
            (isLoading) ? <Spinner/> : <>

            <div className="flex flex-wrap gap-8 justify-evenly" >
            {
                movies.map((movieObj)=>{
                        return <MovieCard movieObj={movieObj} />
                })
            }

        </div> 
        <Pagination pageNumber={pageNumber} onNextClick={onNextClick} onPrevClick={onPrevClick} />          
            </>

        }

       

    </div>
}

export default Movies;





