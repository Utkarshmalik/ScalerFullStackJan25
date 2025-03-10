import { axiosInstance } from "./axiosInstance";


export const GetShowsForAMovie = async (movieId, date)=>{

    console.log("Make an API call to fetch all the movies");

    try{

        const response = await axiosInstance.get(`http://localhost:8000/shows/movies/${movieId}?date=${date}`);

        console.log(response);

        return response.data;

    }catch(err){
        console.log("error",err);
        return err.response;
    }

}


