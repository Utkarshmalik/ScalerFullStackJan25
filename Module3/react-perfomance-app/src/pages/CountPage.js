
// calculates the sum of a large array of numbers whenever it renders.

import { useMemo, useState } from "react";

const generateLargeArray = ()=>{

    const largeArray = [];

    for(let i=0;i<1000000;i++){
        largeArray.push(i);
    }

    return largeArray;
}

const sumArray = (arr) =>{

    console.log("Calculating the sum");

    return arr.reduce((acc,curr)=>{
        return acc + curr;
    },0)

}



function CountPage(){

    const [count, setCount] = useState(0);

    const largeArray  = useMemo(()=>generateLargeArray(),[]);

     const sum =  useMemo(()=>sumArray(largeArray),[largeArray]);

    return <div>

        <h1> Sum :{sum} </h1>
        <button onClick={()=>setCount(count+1)}> Increment </button>
        <p> Count : {count} </p>

    </div>

    
}

export default CountPage;