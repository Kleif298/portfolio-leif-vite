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
    <section id="about">
        <div className="common-about background">
            <div className="section-container common-about__outer-wrapper">
                <div className="common-about__image-box">
                    <img src={bildLeifAngle} alt="Leif" />
                </div>
                
                <div className="common-about__inner-wrapper">
                    <h2 className="title">About me</h2>
                    
                    <div className="common-about__text-box">
                        <p>I'm an apprentice software developer at Sunrise GmbH, where I am learning 
                        to create innovative solutions and improve user experiences. I am passionate 
                        about coding and always eager to learn new technologies.
                        Feel free to connect with me on LinkedIn or check out my GitHub for my 
                        latest projects! Thank you for visiting my portfolio!</p>
                    </div>
                    <SocialLinks />
                </div>
                
            </div>
        </div>



        <div className={`extended-about background ${extended ? 'extended' : ''}`}>
            <div className="section-container extended-about__wrapper">
                <div className="lebenslauf-prop">Lebenslauf</div>
                <div className="skills-prop">Skills</div>
            </div>
        </div>
        <button onClick={handleExtending} className="common-about__footer background">
            Extend
        </button>
    </section>
    );
};

export default About;
