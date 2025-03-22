import { axiosInstance } from "./axiosInstance";




export const makePayment = async ({token,amount})=>{

    try{

        const response = await axiosInstance.post("https://bookmyshowbackendscalerjanbatch.onrender.com/payments",{
            token,
            amount
        })
        
        return response.data

    }
    catch(err){
        console.log(err);
        return err.response;
    }



} 


export const createBooking = async ({show,seats,transactionId})=>{

    try{

        const response = await axiosInstance.post("https://bookmyshowbackendscalerjanbatch.onrender.com/bookings",{
            show,
            seats,
            transactionId
        })
        
        return response.data

    }
    catch(err){
        console.log(err);
        return err.response;
    }

}