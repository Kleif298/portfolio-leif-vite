import { useRef, useEffect } from 'react';
import sunriseLogo from "../assets/sunrise-svg.svg"

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const getHeaderHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                console.log('Header height:', height);
                // You can store this height in state or use it as needed
            }
        };

        getHeaderHeight();
        window.addEventListener('resize', getHeaderHeight);
        
        return () => window.removeEventListener('resize', getHeaderHeight);
    }, []);

    return (
        <header ref={headerRef}>
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
        </header>
    );
};

export default Header;