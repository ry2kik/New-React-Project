// Export by Name
export const Title = () => {
    return (
        <a className="navbar-brand text-white dancing-script" href="/">Food Villa</a>
    )
};

// Export by Default
const Header = () => {
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
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;