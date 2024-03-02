import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (
    <header>
        <nav>
            <div className="navbar">
                <ul>
                    <li className={(location.pathname === "/")?"active":""}><Link to={'/'} onClick={() => {console.log(location.pathname)}}>Home</Link></li>
                    <li className={(location.pathname === "/search")?"active":""}><Link to={'/search'} onClick={() => {console.log(location.pathname)}}>Search</Link></li>
                    <li className={(location.pathname === "/contactus")?"active":""}><Link to={'/contactus'}>Contact Us</Link></li>
                    <li className="login-signup"><a href="#">Login</a> / <a href="#">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Navbar