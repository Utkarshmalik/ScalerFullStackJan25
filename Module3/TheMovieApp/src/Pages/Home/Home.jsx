import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";



function Home({watchlist, addMovieToAWatchList,removeMovieFromAWatchList}){


    return <div>

        <Banner/>
        <Movies addMovieToAWatchList={addMovieToAWatchList} removeMovieFromAWatchList={removeMovieFromAWatchList} watchlist={watchlist} />
        
    </div>

}

export default Home;