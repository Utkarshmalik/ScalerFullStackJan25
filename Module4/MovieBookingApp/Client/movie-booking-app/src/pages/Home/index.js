import { Col, Flex, Input, Row } from "antd";
import Navbar from "../../components/Navbar";
import { use, useEffect, useRef, useState } from "react";
import { GetAllMovies } from "../../api/movies";
import {Link} from  "react-router-dom";
import moment from "moment";

function Home(){

  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState(null);
  const allMoviesRef = useRef(null);

  useEffect(()=>{

    fetchMoviesData();

  },[])

  useEffect(()=>{

    if(!movies){
      return;
    }

    const filtertedMovies = allMoviesRef.current.filter((movie)=>{
      return movie.movieName.toLowerCase().startsWith(searchValue.toLowerCase());
    })

    setMovies(filtertedMovies);

  },[searchValue])

  const fetchMoviesData = async ()=>{


    const moviesData = await GetAllMovies();

    if(moviesData.success){
      setMovies(moviesData.data);
      allMoviesRef.current = moviesData.data;
    }

  }


  const onInputChange = (e)=>{
    setSearchValue(e.target.value);
  }
 


    return (
        <div>

          <Navbar/>

          <Row className="d-flex justify-content-center" style={{marginTop:"20px"}} >

            <Col  lg={{span:12}} >

              <Input onChange={onInputChange} value={searchValue} placeholder="Search Movie here" />
            
            </Col>


          </Row>

          { movies==null && <div className="text-center"> <h3> Fetching Movies.... </h3> </div> }


          <Flex  wrap gap="large" justify="center" align="center"  style={{padding:"30px"}} className="mt-8">

            {
              movies &&  movies.map((movie)=>{
                return <div>

                  <Link to={`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`} >
                  <div  className="cursor-pointer text-center fs-12">
                    
                    <img width={250} src={movie.poster} />

                    <h3>
                      {movie.movieName}
                    </h3>

                  </div>
                  </Link>



                </div>
              })
            }


          </Flex>

        </div>
      )
}

export default Home;
