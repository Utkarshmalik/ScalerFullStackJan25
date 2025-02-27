import { axiosInstance } from "./axiosInstance";


export const RegisterUser = async (data)=>{

    console.log("Make an API call with data ", data);

    try{

        const response = await axiosInstance.post("http://localhost:8000/register",data);

        console.log(response);

        return response.data;

    }catch(err){
        console.log("errr",err);
        return err.response;
    }

}

export const LoginUser = async (data)=>{

    console.log("Make an API call with data ", data);

    try{

        const response = await axiosInstance.post("http://localhost:8000/login",data);

        return response.data;

    }catch(err){
        return err.response.data;
    }

}



