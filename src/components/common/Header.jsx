import sunriseLogo from "../../assets/sunrise-svg.svg"

const Header = () => {
    return (
    <header>
        <div className="edge-mini-bar"></div>
        <div className="edge-content">
            <img src={sunriseLogo} alt="sunrise-logo" className="header-logo"></img>
            <nav>
                <a href="#">Home</a>
                <a href="#about">About Me</a>
                <a href="#mywork">My Work</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>)
};

export default Header;