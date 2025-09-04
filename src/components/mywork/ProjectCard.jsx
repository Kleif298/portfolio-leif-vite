import './ProjectCard.css';

const ProjectCard = ({ repo }) => {
  // Format the last updated date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Extract language or set default
  const primaryLanguage = repo.language || 'Code';

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{repo.name}</h3>
        <hr />
        <p className="project-card__description">
          {repo.description || 'No description available'}
        </p>
        
        <div className="project-card__meta">
          <div className="project-card__meta-item">
            <span className="project-card__meta-icon">🔧</span>
            <span>{primaryLanguage}</span>
          </div>
          <div className="project-card__meta-item">
            <span className="project-card__meta-icon">📅</span>
            <span>{formatDate(repo.updated_at)}</span>
          </div>
          {repo.stargazers_count > 0 && (
            <div className="project-card__meta-item">
              <span className="project-card__meta-icon">⭐</span>
              <span>{repo.stargazers_count}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
