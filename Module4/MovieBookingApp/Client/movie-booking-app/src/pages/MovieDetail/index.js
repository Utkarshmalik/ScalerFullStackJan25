import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { GetMovieData } from "../../api/movies";
import Navbar from "../../components/Navbar";
import { Col, Flex, Input, Row } from "antd";
import moment from "moment";
import { GetShowsForAMovie } from "../../api/shows";

function MovieDetail(){

    const [movie , setMovie] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const {movieId} = useParams();
    const [date, setDate] = useState(searchParams.get('date'));
    const navigate = useNavigate();
    const [shows, setShows] = useState(null);
    
    useEffect(()=>{
        fetchMovieDetails();
    },[])

    useEffect(()=>{
        fetchShowDetails();
    },[date])

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


    const fetchShowDetails = async ()=>{
        console.log("fetchiing shows");
        const showsData = await GetShowsForAMovie(movieId,date);
        if(showsData.success){
            setShows(showsData.data);
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

        {

            shows && (Object.keys(shows)).length===0 && (
                <div className="ms-3 pt-3">
                    <h2 className="blue-clr"> 
                    Currently, No Theatres available for this movie!
                    </h2>
                </div>
            )

        }

        {

            shows && Object.keys(shows).length>0 && (

                <div>


                    <div className="ms-3">

                        <h2> Theatres </h2>

                        {

                            Object.keys(shows).map((theatreId)=>{

                                const allShowsForThisTheatre = shows[theatreId];
                                const theatreDetails = allShowsForThisTheatre[0].theatre;


                                return <div>

                                    <Row gutter={24} >

                                        <Col lg={{span:8}} >

                                        <h3> {theatreDetails.name} </h3>
                                        <p> {theatreDetails.address} </p>
                                        
                                        </Col>

                                        <Col lg={{span:16}}>

                                        <ul className="show-ul">

                                            {

                                                allShowsForThisTheatre.map((show)=>{
                                                    return  <Link to={`/book-show/${show._id}`}  >  <li> {show.showTime}  </li></Link>
                                                })
                                               
                                            }

                                        </ul>
                                          

                                        
                                        </Col>

                                    </Row>

                                    </div>

                             


                            })

                        }


                     </div>



                </div>    

            )
        }



    </div>


}

export default MovieDetail;