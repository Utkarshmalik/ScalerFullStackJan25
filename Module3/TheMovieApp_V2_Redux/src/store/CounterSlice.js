import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({

    name:"counter",   // Name of the slice, used in action types (e.g., counter/increment).
    initialState:{    // Initial state of the slice.
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        }
    }
})

const counterReducer = counterSlice.reducer;
const {increment,decrement, incrementByAmount} = counterSlice.actions;

export  {increment, decrement, incrementByAmount};

export default counterReducer;







/*


createSlice: A utility from Redux Toolkit that simplifies creating Redux slices (a slice of the Redux state).

Automatically generates:

Action creators (e.g., increment, decrement).
A reducer function to update the state.




The term "slice" typically refers to a slice of the Redux state. It is a portion of the global state managed by Redux, usually representing a specific 
feature or domain of your application.

In Redux Toolkit (RTK), a "slice" is a concept introduced to simplify Redux logic. A slice is essentially a reducer combined with actions for a particular feature or part of the state. It is created using createSlice from Redux Toolkit, which helps automatically generate action creators and reducers for managing state in a concise way.





*/