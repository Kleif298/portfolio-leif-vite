import bildLeifAngle from "../assets/bild-leif-angle.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const about = () => {
    return (
        <div id="about">
            <h2 className="title">About me</h2>
            <div className="text-box">
                <p>I’m an apprentice software developer at Sunrise GmbH, where I am learning to create innovative solutions and improve user experiences. I am passionate about coding and always eager to learn new technologies.
                Feel free to connect with me on LinkedIn or check out my GitHub for my latest projects!
                Thank you for visiting my portfolio!</p>
            </div>
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
            <div className="image-box">
                <img src={bildLeifAngle} alt="Leif" />
            </div>
        </div>
    )
};

export default about;