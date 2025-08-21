import ProjectsPreview from "./ProjectPreview";

const myProjects = [[Projekt1, "Projekt 1", "Ein Projekt das superduper cool ist"], [Projekt2, "Projekt 2"], [Projekt3, "Projekt 3"], [Projekt4, "Projekt 4"]];

const Mywork = () => {
    return(
        <div id="mywork">
            <div className="background">
                <div className="viewmywork-box">
                    
                </div>
                <div className="projects main-container">
                    <h2>Projects</h2>
                    <div className="project-preview-container">
                        <ProjectsPreview/>
                        <ProjectsPreview/>
                        <ProjectsPreview/>
                        <ProjectsPreview/>
                    </div>
                </div>
                <div className="tech-stack main-container">
                    <h2>Tech Stack</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Mywork;