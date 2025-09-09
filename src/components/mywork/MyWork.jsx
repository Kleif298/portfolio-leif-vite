import { DiJava, DiJavascript1, DiHtml5, DiCss3, DiReact, DiMysql, DiGit, DiPython, DiTerminal } from "react-icons/di";
import { SiVite, SiRaspberrypi, SiTypescript, SiCplusplus } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import TechCard from "./TechCard";
import ProjectModal from "./ProjectModal";
import { useEffect, useState } from "react";

const techStack = [
  { name: "Java", icon: <DiJava size={32} color="#f89820" /> },
  { name: "C#", icon: <DiTerminal size={32} color="#364664ff" /> },
  { name: "JavaScript", icon: <DiJavascript1 size={32} color="#f0db4f" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} color="#3178c6" /> },
  { name: "HTML", icon: <DiHtml5 size={32} color="#e34c26" /> },
  { name: "CSS", icon: <DiCss3 size={32} color="#264de4" /> },
  { name: "React", icon: <DiReact size={32} color="#61DBFB" /> },
  { name: "Vite", icon: <SiVite size={32}  color="#646cff" /> },
  { name: "MySQL", icon: <DiMysql size={32} color="#4479A1" /> },
  { name: "Git", icon: <DiGit size={32} color="#f1502f" /> },
  { name: "Python", icon: <DiPython size={32} color="#3776ab" /> },
  { name: "C++", icon: <SiCplusplus size={32} color="#00599c" /> },
  { name: "C", icon: <FaCode size={32} color="#555555" /> },
  { name: "Bash", icon: <DiTerminal size={32} color="#4EAA25" /> },
  { name: "Raspberry Pi", icon: <SiRaspberrypi size={32} color="#C51A4A" /> },
];




const MyWork = () => {
    const username = "Kleif298";

    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectedTechs, setSelectedTechs] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Language mapping to tech stack - more comprehensive mapping
    const getRepoLanguages = (repo) => {
        const languages = [];
        const repoLanguage = repo.language;
        const repoText = `${repo.name} ${repo.description || ''}`.toLowerCase();
        
        // Add primary language
        if (repoLanguage) {
            languages.push(repoLanguage);
        }
        
        // Add explicit tech mentions in repo name/description
        techStack.forEach(tech => {
            const techName = tech.name.toLowerCase();
            if (repoText.includes(techName)) {
                languages.push(tech.name);
            }
        });
        
        // Special detection for web technologies that are often not the primary language
        // Most web projects use HTML and CSS even if GitHub doesn't detect them as primary
        if (repoLanguage === 'JavaScript' || repoLanguage === 'TypeScript' || 
            repoText.includes('web') || repoText.includes('website') || 
            repoText.includes('frontend') || repoText.includes('portfolio') ||
            repoText.includes('react') || repoText.includes('vite') ||
            repoText.includes('html') || repoText.includes('css')) {
            languages.push('HTML', 'CSS', 'JavaScript');
        }
        
        // Special cases for common patterns
        if (repoText.includes('react')) languages.push('React');
        if (repoText.includes('vite')) languages.push('Vite');
        if (repoText.includes('mysql') || repoText.includes('database')) languages.push('MySQL');
        if (repoText.includes('raspberry') || repoText.includes('pi')) languages.push('Raspberry Pi');
        if (repoText.includes('bash') || repoText.includes('shell')) languages.push('Bash');
        
        return [...new Set(languages)]; // Remove duplicates
    };

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then(res => res.json())
          .then(data => {
            // Filter out forked repos and sort by update date
            const ownRepos = data.filter(repo => !repo.fork);
            const sortedRepos = ownRepos.sort((a, b) => 
              new Date(b.updated_at) - new Date(a.updated_at)
            );
            setRepos(sortedRepos);
            setFilteredRepos(sortedRepos);
          })
          .catch(err => console.error(err));
    }, [username]);

    // Filter repos when selected techs change
    useEffect(() => {
        if (selectedTechs.length === 0) {
            setFilteredRepos(repos);
        } else {
            const filtered = repos.filter(repo => {
                const repoLanguages = getRepoLanguages(repo);
                
                // Check if ANY selected tech matches ANY repo language
                return selectedTechs.some(selectedTech => 
                    repoLanguages.includes(selectedTech.name)
                );
            });
            setFilteredRepos(filtered);
        }
    }, [selectedTechs, repos]);

    const handleSelect = (tech) => {
        if (selectedTechs.some(t => t.name === tech.name)) {
            setSelectedTechs(selectedTechs.filter(t => t.name !== tech.name));
        } else {
            setSelectedTechs([...selectedTechs, tech]);
        }
    };

    const handleToggleProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    // Get repos to display (filtered and optionally limited)
    const reposToDisplay = showAllProjects ? filteredRepos : filteredRepos.slice(0, 6);

    // Calculate project count for each tech
    const getTechProjectCount = (tech) => {
        return repos.filter(repo => {
            const repoLanguages = getRepoLanguages(repo);
            return repoLanguages.includes(tech.name);
        }).length;
    };


    return(
    <section id="mywork" className="mywork background">
        <div className="mywork__container container">


            {/** Career Overview */}

            <div className="career-overview mywork__main-container">
                <div className="career-overview__card">
                    <h3 className="career-overview__card-title">Department:</h3>
                    <h2 className="career-overview__card-content">Digital Avengers Lab</h2>
                </div>
                <div className="career-overview__card">
                    <h3 className="career-overview__card-title">Years:</h3>
                    <h2 className="career-overview__card-content">2nd Year Apprentice</h2>
                </div>
                <div className="career-overview__card">
                    <h3 className="career-overview__card-title">Projects:</h3>
                    <h2 className="career-overview__card-content">1 Project</h2>
                </div>
            </div>


            {/** Projects-Container */}

            <div className="projects-container mywork__main-container">
                <div className="projects-container__header">
                    <h2>Projects</h2>
                    <div className="projects-container__selected-tech-wrapper">
                        <div className="projects-container__selected-tech-list">
                            {selectedTechs && selectedTechs.length > 0 ? (
                            selectedTechs.map((tech) => (
                                <TechCard key={tech.name} tech={tech} onSelect={handleSelect} isSelected={true} onlyIcon={true} />
                            ))
                            ) : (
                                <span className="projects-container__placeholder">Select a Tech</span>
                            )}
                        </div>
                        <div className="projects-container__fade-overlay" />
                    </div>

                    <button 
                        className="projects-container__show-more-btn" 
                        onClick={handleToggleProjects}
                        aria-label={showAllProjects ? "Show fewer projects" : "Show all projects"}
                        >
                        {showAllProjects ? "Show Less" : "Show All"} ({filteredRepos.length})
                    </button>
                </div>

                <div className={`projects-container__list ${showAllProjects ? 'projects-container__list--show-all' : ''}`}>
                    {reposToDisplay.length > 0 ? (
                        reposToDisplay.map(repo => (
                            <ProjectCard 
                                key={repo.id} 
                                repo={repo} 
                                onOpenModal={handleOpenModal}
                            />
                        ))
                    ) : (
                        <div className="projects-container__no-results">
                            <p>No projects found matching the selected technologies.</p>
                            {selectedTechs.length > 0 && (
                                <button 
                                    className="projects-container__clear-filter" 
                                    onClick={() => setSelectedTechs([])}
                                >
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>


            {/** Tech Stack */}

            <div className="tech-container mywork__main-container">
                <div className="techs-container__header">
                    <h2>Tech-Stack</h2>
                    <p className="techs-container__subtitle">Click to filter projects by technology</p>
                </div>

                <div className="techs-container__list">
                    {techStack.map((tech) => {
                        const projectCount = getTechProjectCount(tech);
                        return (
                            <div key={tech.name} className="tech-card-wrapper">
                                <TechCard 
                                    tech={tech} 
                                    onSelect={handleSelect} 
                                    isSelected={selectedTechs.some(t => t.name === tech.name)} 
                                />
                                {projectCount > 0 && (
                                    <span className="tech-card__count">{projectCount}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* Project Modal */}
        <ProjectModal 
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
        />
    </section>
    )
}

export default MyWork;
