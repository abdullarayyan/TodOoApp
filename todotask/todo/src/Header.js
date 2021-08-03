const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="title_page">
                <h1>settings</h1>
            </div>
            <div className="navbar__left">
                <a href="#">General</a>
                <a href="#">User</a>
                <a href="#">Team</a>
                <a href="#">Localization</a>
                <a href="#">Exclude List</a>
                <a className="active_link" href="#">Usage & Billing</a>
            </div>
        </nav>
    )
}

export default Navbar