import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://github.com/Kleif298" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/leif-fieger-96aa1b2aa/" target="_blank" rel="noopener noreferrer" className="social-links__link">
                <FaLinkedin size={40} />
            </a>
            <a href="mailto:leif.fieger@gmail.com" className="social-links__link">
                <FaEnvelope size={40} />
            </a>
        </div>
    );
};

export default SocialLinks;
