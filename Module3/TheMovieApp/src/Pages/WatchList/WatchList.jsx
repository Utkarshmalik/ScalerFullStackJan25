import genreIdMappings from "../../Configurations/genreConfigs";
import { useWatchListHook } from "../../hooks/useWatchListHook";


function WatchList(){

    const {genreArray, onSearch,sortByRatings,watchListMoviesInDisplay} = useWatchListHook();


    return <div>
        <div className="flex justify-center items-center m-5" >

            {
                genreArray.map((genre)=>{
                    return <div onClick={()=>filterByGenre(genre)} className="cursor-pointer bg-blue-400 h-[3rem] w-[9rem] mx-4 flex justify-center items-center text-white font-bolder rounded-xl text-lg"> {genre} </div>
                })
            }
        </div>

        <div>
            <input onChange={onSearch} className="h-[3rem] w-[20rem] px-4 border font-lg" type="text" placeholder="Search Movie" />
        </div>
        

        <div>

            <table className="w-full border my-10">


                <thead>

                   <tr className="border">
                        <th> Name </th>
                        <th className="underline cursor-pointer" onClick={sortByRatings} > Rating </th>
                        <th> Popularity </th>
                        <th> Genre </th>

                    </tr>

                </thead>


                <tbody>

                    {
                        watchListMoviesInDisplay.map((movie)=>{

                            return <tr className="border">

                                <td className="flex items-center gap-5">
                                    <img className="h-[10rem] w-[12rem]" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                    <span className="font-medium"> {movie.title} </span>

                                </td>

                                <td className=" items-center ">
                                <span className="font-medium"> {movie.vote_average} </span>

                                </td>


                                <td className=" items-center ">
                                <span className="font-medium"> {movie.popularity} </span>


                                    
                                </td>

                                <td className=" items-center ">
                                <span className="font-medium"> {genreIdMappings[movie.genre_ids[0]]} </span>
                                </td>


                                <td className=" items-center ">
                                <span onClick={()=>removeMovieFromAWatchList(movie)} className="cursor-pointer font-medium text-red-500">Delete </span>
                                </td>

                            </tr>

                        })
                    }



             
                </tbody>


                         
            </table>


        </div>




    </div>

}




export default WatchList;