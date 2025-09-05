import TechCard from "./TechCard";

const TechContainer = ({ techStack, selectedTechs, onSelect }) => {
  return (
    <div className="mywork__main-container">
      <div className="techs-container__header">
        <h2>Tech-Stack</h2>
      </div>

      <div className="techs-container__list">
        {techStack.map((tech) => (
          <TechCard key={tech.name} tech={tech} onSelect={onSelect} isSelected={selectedTechs.some(t => t.name === tech.name)} />
        ))}
      </div>
    </div>
  );
};

export default TechContainer;

