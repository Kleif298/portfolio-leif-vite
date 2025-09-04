import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__container">
                <div className="footer__mini-bar"></div>
                
                <div className="footer__content">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">LF</div>
                            <span className="footer__logo-text">Leif Fieger</span>
                        </div>
                        <p className="footer__description">
                            Passionate developer creating innovative solutions with modern technologies.
                        </p>
                        <div className="footer__social">
                            <h4 className="footer__social-title">Connect with me</h4>
                            <div className="social-links">
                                <a href="https://github.com/Kleif298" target="_blank" rel="noopener noreferrer" className="social-links__link">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/leif-fieger-96aa1b2aa/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="mailto:leif.fieger@gmail.com" className="social-links__link">
                                    <FaEnvelope size={24} /> 
                                </a>        
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer__section">
                        <h3 className="footer__section-title">Quick Links</h3>
                        <div className="footer__links">
                            <a href="#home" className="footer__link">Home</a>
                            <a href="#about" className="footer__link">About</a>
                            <a href="#projects" className="footer__link">Projects</a>
                            <a href="#contact" className="footer__link">Contact</a>
                        </div>
                    </div>
                    
                    <div className="footer__section">
                        <h3 className="footer__section-title">Contact Info</h3>
                        <div className="footer__contact">
                            <div className="footer__contact-item">
                                <FaEnvelope className="footer__contact-icon" />
                                <span>leif.fieger@gmail.com</span>
                            </div>
                            <div className="footer__contact-item">
                                <FaMapMarkerAlt className="footer__contact-icon" />
                                <span>Germany</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        &copy; {new Date().getFullYear()} Leif Fieger. All rights reserved.
                    </div>
                </div>
                
                <p className="footer__text">Built with React and Vite • Modern Professional Design</p>
            </div>
        </footer>
    );
}

export default Footer;