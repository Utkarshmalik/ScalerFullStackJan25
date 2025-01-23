import { Link } from "react-router-dom";
import Logo from "../../assets/MovieLogo.png";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Navbar(){

    const {theme,toggleTheme} = useContext(ThemeContext);


    const backgroundColorClass = (theme==="light") ? "bg-white text-black":"bg-black text-white"

    return <div className={`flex space-x-8 items-center py-4 pl-3 ${backgroundColorClass}`} >

        <Link to="/">
        <img className="w-[50px] "  src={Logo} />
        </Link>
        
        <Link className="text-3xl font-bold text-blue-500" to="/" >
        Movies
        </Link>

        <Link className="text-3xl font-bold text-blue-500" to="/watchList">
        WatchList
        </Link>


        <button onClick={toggleTheme}> Toggle Theme </button>


    </div>

}

export default Navbar;