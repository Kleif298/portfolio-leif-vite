const Footer = () => {
    return (
        <footer>
            <div className="edge-content">
                <p>
                &copy; {new Date().getFullYear()} Leif Fieger. All rights reserved.
                </p>
                <p>
                Built with ❤️ using React and Vite.
                </p>
            </div>
            <div className="edge-mini-bar"></div>
        </footer>
    );
}

export default Footer;