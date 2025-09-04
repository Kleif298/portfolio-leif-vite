const TechCard = ({ tech, onSelect, isSelected, onlyIcon }) => {
    return (
        <div key={tech.index} className={`tech-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(tech)}>
            {onlyIcon ? tech.icon : (
                <>
                    {tech.icon}
                    <span>{tech.name}</span>
                </>
            )}
        </div>
    );
};

export default TechCard;