import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../store/CounterSlice";

function Counter(){

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();


    const onIncrementButtonClick=()=>{
        const incrementAction = increment();
        dispatch(incrementAction);
    }

    const onDecrementButtonClick=()=>{
        const decrementAction = decrement();
        dispatch(decrementAction);
    }

    const onIncrementButtonByFiveClick=()=>{
        const incrementAction = incrementByAmount(5);
        dispatch(incrementAction);      
    }


    onIncrementButtonByFiveClick


    return <div>

        <h1 className="font-lg"> Counter : {count} </h1>

        <button onClick={onIncrementButtonClick} className="border m-2 p-2 bg-black text-white bolder font-lg "> Increment </button>
        <button onClick={onDecrementButtonClick} className="border m-2 p-2 bg-black text-white bolder font-lg "> Decrement  </button>
        <button onClick={onIncrementButtonByFiveClick} className="border m-2 p-2 bg-black text-white bolder font-lg "> Increment by 5  </button>

        </div>
}

export default Counter;