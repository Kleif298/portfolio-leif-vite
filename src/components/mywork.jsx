import ProjectsContainer from "./ProjectsContainer";
import TechStack from "./TechStack";

const MyWork = () => {
    return(
        <div id="mywork" className="section-background">
            <div className="section-container">
                
                    <ProjectsContainer username={"Kleif298"} />
                
                <div className="tech-stack main-container">
                    <h2>Tech Stack</h2>
                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default MyWork; 