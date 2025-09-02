import ProjectsContainer from "./ProjectsContainer";
import TechContainer from "./TechContainer";

const MyWork = () => {
    return(
        <div id="mywork" className="section-background">
            <div className="section-container">
                
                    <ProjectsContainer username={"Kleif298"} />
                
                <div className="tech-stack main-container">
                    <h2>Tech Stack</h2>
                    <TechContainer />
                </div>
            </div>
        </div>
    )
}

export default MyWork; 