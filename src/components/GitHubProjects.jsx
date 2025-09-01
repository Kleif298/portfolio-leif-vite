import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const GitHubProjects = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, [username]);
  {console.log(repos)}
  return (
    <div className="sub-container">
      {repos.map(repo => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default GitHubProjects;
