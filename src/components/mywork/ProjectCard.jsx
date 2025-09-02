const ProjectCard = ({ repo }) => {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        <h3 className="title">{repo.name}</h3>
        <hr />
        <p className="description">{repo.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
