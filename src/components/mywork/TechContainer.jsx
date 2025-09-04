import { DiJava, DiJavascript1, DiHtml5, DiCss3, DiReact, DiMysql, DiGit, DiPython, DiTerminal } from "react-icons/di";
import { SiVite, SiRaspberrypi } from "react-icons/si";
import TechCard from "./TechCard"
import { div } from "framer-motion/client";

const techStack = [
  { name: "Java", icon: <DiJava size={32} color="#f89820" /> },
  { name: "C#", icon: <DiTerminal size={32} color="#9967e4ff" /> },      // Platzhalter
  { name: "JavaScript", icon: <DiJavascript1 size={32} color="#f0db4f" /> },
  { name: "HTML", icon: <DiHtml5 size={32} color="#e34c26" /> },
  { name: "CSS", icon: <DiCss3 size={32} color="#264de4" /> },
  { name: "React", icon: <DiReact size={32} color="#61DBFB" /> },
  { name: "Vite", icon: <SiVite size={32} color="#646cff" /> },
  { name: "MySQL", icon: <DiMysql size={32} color="#4479A1" /> },
  { name: "Git", icon: <DiGit size={32} color="#f1502f" /> },
  { name: "Bash", icon: <DiTerminal size={32} color="#4EAA25" /> },  // Platzhalter
  { name: "Raspberry Pi", icon: <SiRaspberrypi size={32} color="#C51A4A" /> },
];

const TechStack = () => {
  return (
    <div className="techs-container">
      <div className="techs-container__header">
        <h2>Tech-Stack</h2>
      </div>

      <div className="techs-container__list">
        {techStack.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>

    </div>
  );
};

export default TechStack;
