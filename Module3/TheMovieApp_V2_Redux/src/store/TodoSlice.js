import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    
    name:"todos",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:Date.now(),text:action.payload,completed:false});
        }
    }
 

})


const todoReducer = todoSlice.reducer;
const {addTodo} = todoSlice.actions;

export {addTodo};

export default todoReducer;