import { useState } from "react";

// Export by Name
export const Title = () => {
    return (
        <a className="navbar-brand text-white dancing-script" href="/">Food Villa</a>
    )
};

// Export by Default
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Title />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active text-17" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-17" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-17" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-17" href="#">Cart</a>
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