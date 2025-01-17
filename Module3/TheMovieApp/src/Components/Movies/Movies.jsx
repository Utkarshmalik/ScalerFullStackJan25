import { useState,useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Commons/Spinner/Spinner";
import axios from "axios";

function Movies(){

    const [movies, setMovies]= useState(null);
    const [isLoading, setIsLoading] =  useState(true);

    const fetchMovieData = async ()=>{

        console.log("Inside Movies");

        try{
         const response = await  axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");
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
    },[]);


    return <div>

        <div className="m-5 font-bold text-2xl">
            <h1> Trending Movies </h1>
        </div>

        {
            (isLoading) ? <Spinner/> : <>

            <div className="flex flex-wrap gap-8 justify-evenly" >
            {
                movies.map((movieObj)=>{
                    return <div className="h-[40vh] w-[200px] bg-cover
                     bg-center rounded-lg flex justify-center items-end 
                     hover:scale-110 duration-300"
                     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>

                        <div className="text-white bg-gray-900 w-full bg-opacity-70 text-xl p-2">
                               {movieObj.title}
                        </div>  
                        </div>
                })
            }

        </div> 
        <Pagination/>          
            </>

        }

       

    </div>
}

export default Movies;





