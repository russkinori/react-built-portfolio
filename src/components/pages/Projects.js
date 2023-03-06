import React from "react";

function Projects({ project }) {
  return (
    <div className="card col-lg-3 col-md-5 col-sm-12">
      <img src={project.image} className="card-img" alt={project.title} />
      <div className="card-header"><h3>{project.title}</h3></div>
      <div className="card-body">
        <p><a href={project.deployedLink}>Link to the deployed version</a></p>
        <p><a href={project.githubLink}>Link to the GitHub repository</a></p>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Projects;