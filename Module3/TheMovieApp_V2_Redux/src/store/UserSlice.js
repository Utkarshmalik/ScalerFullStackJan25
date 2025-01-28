import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//Define Async Thunk for Fetching Users

export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const users = await res.json();
        return users;
    }
    catch(error){
        throw new Error("Failed to fetch users");
    }
})


const userSlice = createSlice({

    name:"user",
    initialState:{
        users:null,
        loading:true,
        error:null
    },
    reducers:{},
    extraReducers:(builer)=>{
        builer.addCase(fetchUsers.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }

})

export default userSlice.reducer;