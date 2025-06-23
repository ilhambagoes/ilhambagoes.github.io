// File: src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projects = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "Personal website built with React and Vite, showcasing my work and contact.",
  },
  {
    id: "todo",
    name: "Todo App",
    description: "A simple and elegant todo app with local storage and filtering.",
  },
  {
    id: "blog",
    name: "Blog Template",
    description: "A clean blog UI with responsive layout and Markdown support.",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} id={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;