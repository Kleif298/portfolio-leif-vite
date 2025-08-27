import GitHubProjects from "./GitHubProjects";
import TechStack from "./techStack";

const Mywork = () => {
    return(
        <div id="mywork" className="section-background">
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="projects main-container">
                        <h2>Projects</h2>
                        <GitHubProjects username={"Kleif298"} />
                    </div>
                    <div className="tech-stack main-container">
                        <h2>Tech Stack</h2>
                        <TechStack />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mywork; 