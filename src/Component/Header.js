import { useState } from "react";
import Logo from '../Component/Assets/img/food-villa.png';
import { Link } from "react-router-dom";

// SPA: Single Page Application
// ! There are two types of routing. They are: Server-side Routing and Client-side Routing
// ! Server-side Routing: In Server-side Routing where our all html, css and images came from Servers.
// ! Client-side Routing: In Client-side Routing where if we click on a link it'll go to that link without making a network call

// Export by Name
export const Title = () => {
    return (
        <Link className="navbar-brand text-white dancing-script" to="/">
            <img className="me-3" src={Logo} height="50px" width="50px" /> 
            Food Villa
        </Link>
    )
};

// Export by Default
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <Title />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white active text-17" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-17" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-17" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-17" to="/cart">Cart</Link>
                        </li>
                        {
                            (isLoggedIn == true) ? <li className="nav-item">
                                <button className="btn btn-white ps-4 pe-4 ms-3 text-purple text-17" href="#" onClick={() => {
                                    setIsLoggedIn(false);
                                }}>Log out</button>
                            </li> : <li className="nav-item">
                                <button className="btn btn-white ps-4 pe-4 ms-3 text-purple text-17" href="#" onClick={() => {
                                    setIsLoggedIn(true);
                                }}>Login</button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;