import { useCallback, useState } from "react";


function Items(){

    const [items, setItems] = useState(['Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3']);

    const removeItem = useCallback((itemToRemove)=>{
        const updatedItems = items.filter(item=>item!==itemToRemove);
        setItems(updatedItems);
    },[]);

    return <div>

        {
            items.map((item)=>(
                <div>
                    {item}
                    <button onClick={()=>removeItem(item)}> Remove </button>
                </div> 
            ))
        }

    </div>
}

export default Items;



// useCallback: The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. In this case, we have no dependencies, so removeItem will be memoized and will not change across renders.

// Optimization: Since removeItem is now memoized, it maintains the same reference between renders unless the state changes. This prevents unnecessary re-renders of the child components, thus improving performance.