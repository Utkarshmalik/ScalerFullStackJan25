import { WatchListContext } from  "../App"
import { useContext, useState } from "react";
import genreIdMappings from "../Configurations/genreConfigs";


const useWatchListHook = ()=>{

    const watchListContextValue = useContext(WatchListContext);
    const {watchlist, removeMovieFromAWatchList} = watchListContextValue;
    const [watchListMoviesInDisplay, setWatchListMoviesInDisplay]= useState(watchlist);

    const genres = new Set();

    watchlist.forEach((movie)=>{
        genres.add(genreIdMappings[movie.genre_ids[0]]);
    })

    const genreArray = Array.from(genres);
    genreArray.unshift("All Genres");

    console.log(genreArray);


    const onSearch = (e)=>{
        const searchValue = e.target.value.toLowerCase();

        const filteredMovies = watchlist.filter((movie)=>{
            return movie.title.toLowerCase().startsWith(searchValue)
        });

        console.log(searchValue, filteredMovies);

        
        setWatchListMoviesInDisplay(filteredMovies);
    }


    const sortByRatings = ()=>{

        const watchListMoviesSortedByRatings = [...watchListMoviesInDisplay];

        
        watchListMoviesSortedByRatings.sort((a,b)=>{
            return a.vote_average - b.vote_average
        })

        setWatchListMoviesInDisplay(watchListMoviesSortedByRatings);

    }

    const filterByGenre = (genre)=>{

        if(genre==='All Genres'){
            setWatchListMoviesInDisplay(watchlist);
            return;
        }

        const filteredMovies = watchlist.filter((movie)=>{
            return  genreIdMappings[movie.genre_ids[0]]===genre;
        })

        setWatchListMoviesInDisplay(filteredMovies);

    }


    return {genreArray,onSearch, sortByRatings,watchListMoviesInDisplay};


}

export {useWatchListHook};
