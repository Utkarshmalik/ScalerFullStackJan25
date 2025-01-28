import counterReducer from "./CounterSlice";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import userReducer from "./UserSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoReducer,
        users:userReducer
    }
})

export default store;