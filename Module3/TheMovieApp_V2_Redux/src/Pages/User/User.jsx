import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/UserSlice";

function User(){

    const {users,loading,error} = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    

    if(loading){
        return <> 
        <h2> User Page </h2>
        <h3> ... Loading</h3> 
        </>
    }

    if(error){
        return <> 
        <h2> User Page </h2>
        <h3> {error}</h3>
          </>   
    }

    return <>

     <h2> User Page </h2>

     <h4> Name : {users.name} </h4>
     <h4> Phone : {users.phone} </h4>

   
 
    </>




}

export default User;