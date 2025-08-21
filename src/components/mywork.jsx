import ProjectsPreview from "./ProjectPreview";
import GitHubProjects from "./GitHubProjects";

const Mywork = () => {
    return(
        <div id="mywork">
            <div className="background">
                <div className="viewmywork-box">
                    
                </div>
                <div className="projects main-container">
                    <h2>Projects</h2>
                    <GitHubProjects username={"Kleif298"} />
                </div>
                <div className="tech-stack main-container">
                    <h2>Tech Stack</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Mywork;