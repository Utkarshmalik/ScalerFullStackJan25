import { Link } from "react-router-dom";
import Logo from "../../assets/MovieLogo.png";

function Navbar(){

    return <div className="flex space-x-8 items-center py-4 pl-3" >

        <Link to="/">
        <img className="w-[50px] "  src={Logo} />
        </Link>
        
        <Link className="text-3xl font-bold text-blue-500" to="/" >
        Movies
        </Link>

        <Link className="text-3xl font-bold text-blue-500" to="/watchList">
        WatchList
        </Link>

        



    </div>

}

export default Navbar;