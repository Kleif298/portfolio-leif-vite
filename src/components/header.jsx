const Header = () => {
    return (
    <header>
        <div className="header-top-bar"></div>
        <div className="header-content">
            <img src="/src/assets/sunrise-logo-grey.png" alt="sunrise-logo-grey"></img>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>)
};

export default Header;