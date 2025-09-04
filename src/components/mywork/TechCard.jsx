const TechCard = ({ tech, onSelect, isSelected, onlyIcon }) => {
    return (
        <div key={tech.index} className={`tech-card ${isSelected ? 'tech-card--selected' : ''}`} onClick={() => onSelect(tech)}>
            {onlyIcon ? (
                <div className="tech-card__icon">{tech.icon}</div>
            ) : (
                <>
                    <div className="tech-card__icon">{tech.icon}</div>
                    <span className="tech-card__text">{tech.name}</span>
                </>
            )}
        </div>
    );
};

export default TechCard;