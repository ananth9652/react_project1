import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() 
{
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">MOVIE APP</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/favorites" className="nav-link">FAVOURITES</Link>
        </div>
    </nav>
}

export default NavBar