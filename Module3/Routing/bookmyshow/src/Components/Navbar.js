
import { Link } from "react-router-dom";

function Navbar(){



    return <div  >

        <ul style={{display:"flex", justifyContent:"space-around",listStyle:"none",backgroundColor:"grey",cursor:"pointer"}}>
           <Link to="/" >
           <li > Home </li>
           </Link> 
           <Link to="/movies">
           <li> Movie </li>
           </Link>
           <Link to="/bookings">
           <li> Bookings </li>
           </Link>
           <Link to="/payments">
           <li> Payments </li>
           </Link>
        </ul>

    </div>

}


//window.location.href , anchor 

// No Page Reloads: Link automatically handles navigation internally by updating the React component state and the browser's history. This avoids reloading the entire application and losing state.
// Performance: Maintains the performance benefits of a SPA by only re-rendering the components that need to change rather than the entire page.




export default Navbar;



//Link : is just to change the URL

