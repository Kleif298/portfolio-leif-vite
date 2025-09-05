import sunriseLogo from "../../assets/sunrise-svg.svg"

const Header = () => {
    return (
    <header className="header">
        <div className="header__mini-bar"></div>
        <div className="header__content">
            <img src={sunriseLogo} alt="sunrise-logo" className="header__logo"></img>
            <nav className="header__nav">
                <a href="#" className="header__nav-link">Home</a>
                <a href="#about" className="header__nav-link">About Me</a>
                <a href="#mywork" className="header__nav-link">My Work</a>
                <a href="#contact" className="header__nav-link">Contact</a>
            </nav>
        </div>
    </header>)
};

export default Header;
