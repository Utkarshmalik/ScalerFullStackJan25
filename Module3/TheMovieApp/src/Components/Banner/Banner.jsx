import { useEffect, useState } from "react";
import PlaceHolderImage from "../../assets/imapgePlaceholder.png"
import axios from 'axios';
import {getRandomValue} from "../../utils"

function Banner(){

    console.log("Rendering the banner component");

    const [bannerImage, setBannerImage] = useState(PlaceHolderImage);
    const [movieName, setMovieName] = useState("");

    const fetchMovieData = async ()=>{
        
        try{

         const response = await  axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");

         const movies = response.data.results;


         const requiredMovieIndex = getRandomValue(0,19);

         
         const movie = movies[requiredMovieIndex];

         const bannerImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

         setBannerImage(bannerImageUrl);

         setMovieName(movie.title);

        }
        catch(err){


        }

    }

    useEffect(()=>{
        console.log("I am inside useEffect");

        fetchMovieData();

    },[]);



    return <div className="h-[75vh] border bg-cover bg-center flex items-end justify-center"  
    style={{backgroundImage:`url(${bannerImage})`}}>

        <div className="text-white">

            {movieName}

        </div>


    </div>
}

export default Banner;



/*

When to make an API call : After the first initial render 

As soon as we have the data from backend 


Update my bannerImage state , this will ensure my entire UI is re-rendered 





Compoent LifeCycle : 

Initial Render or the mounting Phase     : ComponentDidMount
When it gets re-rendered : Update Phase  : ComponentDidUpdate 
UnMounting 

*/

