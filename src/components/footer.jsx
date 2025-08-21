import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            <div className="edge-content" id="contact">
                <div className="social-links">
                    <a href="https://github.com/Kleif298" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/leif-fieger-96aa1b2aa/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} color="white" />
                    </a>
                    <a href="mailto:leif.fieger@gmail.com">
                        <FaEnvelope size={40} color="white" /> 
                    </a>        
                </div>
            </div>
            <div className="edge-mini-bar">
                <p>&copy; {new Date().getFullYear()} Leif Fieger. All rights reserved.</p>
                <p>Built using React and Vite.</p>
            </div>
        </footer>
    );
}

export default Footer;