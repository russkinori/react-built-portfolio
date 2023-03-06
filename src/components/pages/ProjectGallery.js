import React from "react";
import { Link } from 'react-router-dom';
import Project from "./Projects";
import projects from './Projects.json'
import '../styles/Projects.css'



function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <div className="row projects-area">

        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}

      </div>




      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>


    </div>
  );
}

export default ProjectGallery;
