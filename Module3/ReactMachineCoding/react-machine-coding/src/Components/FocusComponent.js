import { useRef } from "react";


function FocusComponent(){
    
    console.log("Focus Component");

    const inputRef = useRef(null);

    const onButtonClick = ()=>{
        //add a focus on the input filed
        inputRef.current.focus();
    }

    return <div> 

        <input ref={inputRef} type="text" />

        <button onClick={onButtonClick}> Focus Input </button>

    </div>

}

export default FocusComponent;