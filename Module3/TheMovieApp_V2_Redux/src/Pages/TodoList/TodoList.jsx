import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/TodoSlice";
import UnAuthenticated from "../UnAuthenticated";


function TodoList(){


    const [text, setText] = useState("");

    const todos = useSelector((state)=>state.todos.todos);
    const dispatch = useDispatch();


    return <div>

            <h1 className="font-lg"> Todo List </h1> 

            <input onChange={(e)=>setText(e.target.value)} className="m-4 p-5 border" type="text" placeholder="Add a new task"/>
            <button onClick={()=>dispatch(addTodo(text))} className="border bg-black text-white m-3 p-4"> Add Todo </button>


            <ul className="m-3 p-5 border ">
                {
                    todos.map((todo)=>{

                        return  <li> 
                            <span> {todo.text} </span>

                        </li>
                    })
                }

            </ul>

    </div>


}

export default TodoList;