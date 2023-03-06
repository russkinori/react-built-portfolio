import React from "react";

function Projects({ project }) {
  return (
    <div class="card col-3">
      <img src={project.image} class="card-img-top" alt={project.title} />
      <div class="card-header"><h3>{project.title}</h3></div>
      <div class="card-body">
        <p><a href={project.deployedLink}>Link to the deployed version</a></p>
        <p><a href={project.githubLink}>Link to the GitHub repository</a></p>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Projects;