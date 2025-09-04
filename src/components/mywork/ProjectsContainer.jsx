import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import TechCard from "./TechCard";

const ProjectsContainer = ({ username, selectedTechs, onSelect }) => {
  const [repos, setRepos] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        // Sortiere Repos nach Update-Datum (neueste zuerst)
        const sortedRepos = data.sort((a, b) => 
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedRepos);
      })
      .catch(err => console.error(err));
  }, [username]);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };


  return (
    <div className="projects-container">
      <div className="projects-container__header">
        <h2>Projects</h2>

        <div className="projects-container__header__selected-tech-wrapper">
          <div className="projects-container__header__selected-tech">
            {selectedTechs && selectedTechs.length > 0 && (
              selectedTechs.map((tech) => (
                <TechCard key={tech.name} tech={tech} onSelect={onSelect} isSelected={true} onlyIcon={true} />
              ))
            )}
          </div>
          <div className="projects-container__header__selected-tech__fade-right" />
        </div>

        <button 
          className="showMore" 
          onClick={handleToggleProjects}
          aria-label={showAllProjects ? "Weniger Projekte anzeigen" : "Alle Projekte anzeigen"}
        >
          {showAllProjects ? "Weniger anzeigen" : "Alle anzeigen"}
        </button>
      </div>

      <div className={`projects-container__list ${showAllProjects ? 'show-all' : ''}`}>
        {repos.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
