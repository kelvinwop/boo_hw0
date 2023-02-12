function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid container">
                <a className="navbar-brand" href="/">Main</a>
                <div className="collapse navbar-collapse w-100">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;