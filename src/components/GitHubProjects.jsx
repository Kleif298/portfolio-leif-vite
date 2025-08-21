import { useEffect, useState } from "react";

const GitHubProjects = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, [username]);

  return (
    <div className="sub-container">
      {repos.map(repo => (
        <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <h3 className="title">{repo.name}</h3>
            <hr />
            <p className="description">{repo.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default GitHubProjects;
