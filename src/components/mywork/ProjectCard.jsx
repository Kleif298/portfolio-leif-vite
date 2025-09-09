import './ProjectCard.css';

const ProjectCard = ({ repo, onOpenModal }) => {
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

  const handleClick = (e) => {
    e.preventDefault();
    onOpenModal(repo);
  };

  return (
    <div className="project-card" onClick={handleClick}>
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
        
        <div className="project-card__overlay">
          <span className="project-card__overlay-text">Click to view details</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

