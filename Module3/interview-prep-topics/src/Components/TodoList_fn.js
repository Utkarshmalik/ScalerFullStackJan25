
import React, { useEffect, useState } from "react";


const TodoListFn = ()=>{

    const [todos,setTodos]= useState([]);
    const [searchValue,setSearchValue] = useState("");
    const [loading, setIsLoading] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
           const todoItemFromAPI = ['Learn React','Read a Book'];
           setTodos([...todoItemFromAPI]);
           setIsLoading(false);
        },2000)

        return ()=>{
            console.log('Component Will Unmount: Cleaning up resources.');
        }

    },[])


    const handleInputChange = (event)=>{
        setSearchValue(event.target.value);

    }

    const handleAddTodo = ()=>{
        setTodos([...todos,searchValue]);
        setSearchValue("");
    }


    return <div>

            <h1> My To-Do List </h1>

            {
                loading && <h4> Loading Items ... </h4>
            }
            

            <ul>

                { !loading && 

                    todos.map((todo, index)=>(
                        <li key={index}> {todo}  </li>
                    ))
                }

            </ul>

            <input value={searchValue} onChange={handleInputChange} type="text"/>

            <button onClick={handleAddTodo} > Add To-do </button>

        </div>


}


export default TodoListFn;