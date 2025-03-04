import { axiosInstance } from "./axiosInstance";


export const GetAllMovies = async ()=>{

    console.log("Make an API call to fetch all the movies");

    try{

        const response = await axiosInstance.get("http://localhost:8000/movies");

        console.log(response);

        return response.data;

    }catch(err){
        console.log("error",err);
        return err.response;
    }

}
