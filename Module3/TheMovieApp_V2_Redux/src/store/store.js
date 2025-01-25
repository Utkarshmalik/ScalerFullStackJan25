import counterReducer from "./CounterSlice";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";


const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer
    }
})

export default store;