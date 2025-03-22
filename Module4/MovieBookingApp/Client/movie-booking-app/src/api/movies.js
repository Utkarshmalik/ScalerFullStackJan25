import { axiosInstance } from "./axiosInstance";


export const GetAllMovies = async ()=>{

    console.log("Make an API call to fetch all the movies");

    try{

        const response = await axiosInstance.get("https://bookmyshowbackendscalerjanbatch.onrender.com/movies");

        console.log(response);

        return response.data;

    }catch(err){
        console.log("error",err);
        return err.response;
    }

}


export const GetMovieData = async (movieId)=>{

    console.log(`Make an API call to fetch movie details for movieId ${movieId} `);

    try{
        
        const response = await axiosInstance.get(`https://bookmyshowbackendscalerjanbatch.onrender.com/movies/${movieId}`);

        console.log(response);

        return response.data;

    }catch(err){
        console.log("error",err);
        return err.response;
    }

}
