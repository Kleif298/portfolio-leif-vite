// TechStack.jsx
import React from "react";
import { DiJava, DiJavascript1, DiHtml5, DiCss3, DiReact, DiMysql, DiGit, DiPython, DiTerminal } from "react-icons/di";
import { SiVite, SiRaspberrypi } from "react-icons/si";

const techStack = [
  { name: "Java", icon: <DiJava size={32} color="#f89820" /> },
  { name: "C#", icon: <DiTerminal size={32} color="#239120" /> },      // Platzhalter
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
    <div className="sub-container">
      {techStack.map((tech, index) => (
        <div key={index} className="tech-item">
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
