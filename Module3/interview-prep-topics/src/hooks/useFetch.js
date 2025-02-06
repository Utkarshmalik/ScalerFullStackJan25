
import {useEffect, useState} from "react";


function useFetch(url){


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchData = async ()=>{
            try{
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
            }catch(err){

            }

        }

        fetchData();
    },[])

    return {data,error,loading};


}

export default useFetch;