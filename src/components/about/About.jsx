import bildLeifAngle from "../../assets/bild-leif-angle.jpg";
import SocialLinks from "../common/SocialLinks"
import ExtendedInfo from "./ExtendedInfo";

const About = () => {
    return (
        <>
        <section id="about" className="section-background">
            <div className="section-container">
                <div className="about-top-wrapper">
                    {/* Image column */}
                    <div className="image-box">
                        <img src={bildLeifAngle} alt="Leif" />
                    </div>
                    
                    {/* Right column wrapper */}
                    <div className="content-wrapper">
                        <h2 className="title">About me</h2>
                        
                        <div className="text-box">
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
            
        </section>
        <ExtendedInfo />
        </>
    );
};

export default About;
