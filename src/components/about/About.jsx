import bildLeifAngle from "../../assets/bild-leif-angle.jpg";
import SocialLinks from "../common/SocialLinks"
import { useState } from "react";

const About = () => {

    const [extended, setExtended] = useState(false);
    function handleExtending () {
        if (!extended){
            setExtended(true);
        } else {
            setExtended(false);
        }
    }


    return (
    <section id="about" className="about">
        <div className="about--background background">
            <div className="container about__outer-wrapper">
                <div className="about__image-box">
                    <img src={bildLeifAngle} alt="Leif" className="about__image" />
                </div>
                
                <div className="about__inner-wrapper">
                    <h2 className="about__title">About me</h2>
                    
                    <div className="about__text-box">
                        <p className="about__text">I'm an apprentice software developer at Sunrise GmbH, where I am learning 
                        to create innovative solutions and improve user experiences. I am passionate 
                        about coding and always eager to learn new technologies.
                        Feel free to connect with me on LinkedIn or check out my GitHub for my 
                        latest projects! Thank you for visiting my portfolio!</p>
                    </div>
                    <SocialLinks />
                </div>
                
            </div>
        </div>



        <div className={`about__extended background glass-effect ${extended ? 'about__extended--visible' : ''}`}>
            <div className="container about__extended-wrapper">
                <div className="about__cv-section glass-effect">
                    <h3 className="about__section-title">Career Timeline</h3>
                    <div className="about__cv-timeline">
                        <div className="about__cv-item">
                            <div className="about__cv-date">2023 - Present</div>
                            <div className="about__cv-title">Software Developer Apprentice</div>
                            <div className="about__cv-company">Sunrise GmbH</div>
                            <div className="about__cv-description">Learning modern web technologies and contributing to innovative projects</div>
                        </div>
                        <div className="about__cv-item">
                            <div className="about__cv-date">2022 - 2023</div>
                            <div className="about__cv-title">Web Development Student</div>
                            <div className="about__cv-company">Self-Taught</div>
                            <div className="about__cv-description">Intensive study of React, JavaScript, and modern development practices</div>
                        </div>
                    </div>
                </div>
                <div className="about__skills-section glass-effect">
                    <h3 className="about__section-title">Technical Skills</h3>
                    <div className="about__skills-grid">
                        <div className="about__skill-category">
                            <h4 className="about__skill-category-title">Frontend</h4>
                            <div className="about__skill-list">
                                <span className="about__skill-item hover-lift">React</span>
                                <span className="about__skill-item hover-lift">JavaScript</span>
                                <span className="about__skill-item hover-lift">HTML/CSS</span>
                                <span className="about__skill-item hover-lift">Vite</span>
                            </div>
                        </div>
                        <div className="about__skill-category">
                            <h4 className="about__skill-category-title">Tools</h4>
                            <div className="about__skill-list">
                                <span className="about__skill-item hover-lift">Git</span>
                                <span className="about__skill-item hover-lift">VS Code</span>
                                <span className="about__skill-item hover-lift">npm</span>
                                <span className="about__skill-item hover-lift">ESLint</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={handleExtending} className="about__footer background hover-lift gradient-text">
            {extended ? '↑ Collapse' : '↓ Extend'}
        </button>
    </section>
    );
};

export default About;

