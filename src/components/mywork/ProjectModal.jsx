import { useEffect, useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch language data when modal opens
  useEffect(() => {
    if (isOpen && project) {
      setLoading(true);
      fetch(project.languages_url)
        .then(res => res.json())
        .then(data => {
          setLanguages(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching languages:', err);
          setLoading(false);
        });
    }
  }, [isOpen, project]);

  // Calculate language percentages
  const getLanguagePercentages = () => {
    if (!languages || Object.keys(languages).length === 0) return [];
    
    const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
    return Object.entries(languages)
      .map(([language, bytes]) => ({
        language,
        percentage: ((bytes / total) * 100).toFixed(1),
        bytes
      }))
      .sort((a, b) => b.bytes - a.bytes);
  };

  // Language color mapping
  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C': '#555555',
      'C#': '#239120',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#fa7343',
      'Kotlin': '#A97BFF',
      'Vue': '#41b883',
      'Shell': '#89e051',
      'Dockerfile': '#384d54',
      'SCSS': '#c6538c',
      'Less': '#1d365d'
    };
    return colors[language] || '#8b8b8b';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const languageData = getLanguagePercentages();

  return (
    <div className="project-modal__overlay" onClick={onClose}>
      <div className="project-modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal__header">
          <h2 className="project-modal__title">{project.name}</h2>
          <button 
            className="project-modal__close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="project-modal__content">
          <div className="project-modal__info-section">
            <div className="project-modal__description">
              <h3>Description</h3>
              <p>{project.description || 'No description available'}</p>
            </div>

            <div className="project-modal__details">
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Primary Language:</span>
                <span className="project-modal__detail-value">{project.language || 'N/A'}</span>
              </div>
              
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Created:</span>
                <span className="project-modal__detail-value">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
              
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Last Updated:</span>
                <span className="project-modal__detail-value">
                  {new Date(project.updated_at).toLocaleDateString()}
                </span>
              </div>
              
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Stars:</span>
                <span className="project-modal__detail-value">{project.stargazers_count}</span>
              </div>
              
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Forks:</span>
                <span className="project-modal__detail-value">{project.forks_count}</span>
              </div>
              
              <div className="project-modal__detail-item">
                <span className="project-modal__detail-label">Size:</span>
                <span className="project-modal__detail-value">{project.size} KB</span>
              </div>
              
              {project.license && (
                <div className="project-modal__detail-item">
                  <span className="project-modal__detail-label">License:</span>
                  <span className="project-modal__detail-value">{project.license.name}</span>
                </div>
              )}
              
              {project.topics && project.topics.length > 0 && (
                <div className="project-modal__detail-item project-modal__topics">
                  <span className="project-modal__detail-label">Topics:</span>
                  <div className="project-modal__topic-list">
                    {project.topics.map(topic => (
                      <span key={topic} className="project-modal__topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="project-modal__languages-section">
            <h3>Languages</h3>
            {loading ? (
              <div className="project-modal__loading">Loading language data...</div>
            ) : languageData.length > 0 ? (
              <div className="project-modal__languages">
                {languageData.map(({ language, percentage }) => (
                  <div key={language} className="project-modal__language-item">
                    <div className="project-modal__language-header">
                      <span className="project-modal__language-name">{language}</span>
                      <span className="project-modal__language-percentage">{percentage}%</span>
                    </div>
                    <div className="project-modal__language-bar">
                      <div 
                        className="project-modal__language-fill"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: getLanguageColor(language)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="project-modal__no-languages">No language data available</p>
            )}
          </div>
        </div>

        <div className="project-modal__footer">
          <a 
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__repo-btn"
          >
            View on GitHub
          </a>
          {project.homepage && (
            <a 
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal__demo-btn"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
