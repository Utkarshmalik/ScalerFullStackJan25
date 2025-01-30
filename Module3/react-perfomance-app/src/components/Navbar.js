import { Link } from "react-router-dom";



const Navbar = ()=>{

    return <nav>
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/contact"> Contact </Link> </li>
            <li> <Link to="/counter"> Counter </Link> </li>
            <li> <Link to="/items"> Items </Link> </li>

        </ul>
    </nav>


}

export default Navbar;