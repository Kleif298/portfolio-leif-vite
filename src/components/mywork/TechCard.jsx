const TechCard = ({ tech }) => {
    return (
        <div key={tech.index} className="tech-card">
            {tech.icon}
            <span>{tech.name}</span>
        </div>
    );
};

export default TechCard;