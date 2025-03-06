import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GetMovieData } from "../../api/movies";
import Navbar from "../../components/Navbar";
import { Flex, Input } from "antd";
import moment from "moment";

function MovieDetail(){

    const [movie , setMovie] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const {movieId} = useParams();
    const [date, setDate] = useState(searchParams.get('date'));
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetchMovieDetails();
    },[])

    const handleDateChange = (e)=>{

        setDate(e.target.value);
        navigate(`/movie/${movie._id}?date=${e.target.value}`);

    }

    const fetchMovieDetails = async ()=>{

        const response = await GetMovieData(movieId);

        if(response.success){
            setMovie(response.data);
        }

    }


    return <div>

        <Navbar/>

        {

            movie && (

                <Flex className="mt-8 ms-3" gap="large" align="center" >

                    <div> 
                        <img src={movie.poster} width={250}/>
                    </div>

                    <div>
                        <h1> {movie.movieName} </h1>

                        <p> Language : {movie.language} </p>
                        <p> Genre : {movie.genre} </p>
                        <p> Release Date : {movie.releaseDate} </p>
                        <p> Duration : {movie.duration} </p>


                        <hr/>

                        <div className="mt-3">
                            <label> Choose the Date :  </label>
                            <Input onChange={handleDateChange} type="date" value={date} />
                        </div>

                    </div>


               </Flex>     


            )


        }



    </div>


}

export default MovieDetail;