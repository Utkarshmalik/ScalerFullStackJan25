import axios from "axios";


export const axiosInstance = axios.create({
    headers:{
        'Content-Type':'application/json',
         'access-token':localStorage.getItem('token')
    }
})



