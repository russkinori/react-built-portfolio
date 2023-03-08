import React from "react";
import Project from "./Projects";
import projects from './Projects.json'
import './styles/Projects.css'



function ProjectGallery() {
  return (
    <div className="gallery">
      <h1>Project Gallery</h1>
      <div className="row projects-area">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
