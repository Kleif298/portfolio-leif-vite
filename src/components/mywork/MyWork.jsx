import ProjectsContainer from "./ProjectsContainer";
import TechContainer from "./TechContainer";

const MyWork = () => {
    return(
        <section id="mywork" className="section-background">
            <div className="section-container">
                
                <ProjectsContainer username={"Kleif298"} />
                
                <TechContainer />
                
            </div>
        </section>
    )
}

export default MyWork; 