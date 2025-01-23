import { useContext } from "react";
import { WatchListContext } from "../../App";


function MovieCard({movieObj}){

       const watchListContextValue = useContext(WatchListContext);
       const {watchlist, addMovieToAWatchList, removeMovieFromAWatchList} = watchListContextValue;

       console.log(watchlist);


       //wants to know a list of movies in the watchlist 

       const isMovieInWatchList = watchlist.find((movie)=>movie.id===movieObj.id);

    return <div className="relative  h-[40vh] w-[200px] bg-cover
    bg-center rounded-lg flex justify-center items-end 
    hover:scale-110 duration-300"
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>

       {
              (!isMovieInWatchList) ? <div onClick={()=>addMovieToAWatchList(movieObj)} className="cursor-pointer absolute top-2 right-2 rounded bg-gray-900/60 text-3xl" > &#128525; </div> : 
               <div onClick={()=>removeMovieFromAWatchList(movieObj)} className="cursor-pointer absolute top-2 right-2 rounded bg-gray-900/60 text-3xl"> &#10060; </div>
       }



       <div className="text-white bg-gray-900 w-full bg-opacity-70 text-xl p-2">
              {movieObj.title}
       </div>  
       </div>

}

export default MovieCard;