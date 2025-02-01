import { useRef, useState } from "react";


function StopWatch(){

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const startTimer = ()=>{
        timerRef.current = setInterval(()=>{
            setTime((time)=>time+1);
        },1000);
    }

    const stopTimer = ()=>{
        clearInterval(timerRef.current);
    }

    const resetTimer = ()=>{
        setTime(0);
        clearInterval(timerRef.current);
    }


    return <div>
        
        <h2> {formatTime(time)}</h2>

        <button onClick={startTimer}> Start </button>
        <button onClick={stopTimer}> Stop </button>
        <button onClick={resetTimer} > Reset </button>

    </div>

}

const formatTime = (seconds)=>{

   // seconds = 500
    // 5 , 05  : 05
    // 15 , 015 : 15 
    //seconds = 10000 

      const getSeconds = `0${seconds%60}`.slice(-2);

      const minutes = Math.floor(seconds/60);

      const getMinutes = `0${minutes%60}`.slice(-2);

      const hours = Math.floor(minutes/60);

      const getHours = `0${hours}`.slice(-2);

      return  `${getHours}:${getMinutes}:${getSeconds}`

}

export default StopWatch;

