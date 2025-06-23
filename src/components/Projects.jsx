// File: src/components/Projects.jsx
import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    { name: "Portfolio Website", link: "#" },
    { name: "Todo App", link: "#" },
    { name: "Blog Template", link: "#" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;