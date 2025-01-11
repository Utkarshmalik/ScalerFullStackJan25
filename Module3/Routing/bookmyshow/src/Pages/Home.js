import Navbar from "../Components/Navbar";



function Home({onLogout}){

    return <>

    <Navbar/>

 <h1> HomePage </h1>

   <br/>

 <button onClick={onLogout} > Logout </button>   

    
    </> 


}

export default Home;

