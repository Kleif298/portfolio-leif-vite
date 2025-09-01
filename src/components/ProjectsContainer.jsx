import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = ({ username }) => {
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
    <div className="projects-container main-container">
      <div className="headOfContainer">
        <h2>Projects</h2>
        <button 
          className="showMore" 
          onClick={handleToggleProjects}
          aria-label={showAllProjects ? "Weniger Projekte anzeigen" : "Alle Projekte anzeigen"}
        >
          {showAllProjects ? "Weniger anzeigen" : "Alle anzeigen"}
        </button>
      </div>

      <div className={`sub-container ${showAllProjects ? 'show-all' : ''}`}>
        {repos.map(repo => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
