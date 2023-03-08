import React from "react";

function Projects({ project }) {
  function handleLinkClick() {
    window.location.href = project.deployedLink;
    window.location.href = project.githubLink
  }
  return (
    <div className="card col-lg-5 col-sm-10">
      <img src={project.image} className="card-img" alt={project.title} />
      <div className="card-header"><h3>{project.title}</h3></div>
      <div className="card-body">
        <section className="description">{project.description}</section>
        <section className="card-link col-4">
          <section><button className="button" onClick={handleLinkClick}>Live Link</button></section>
          <section><button className="button" onClick={handleLinkClick}>Repository</button></section>
        </section>
      </div>
    </div >
  );
}

export default Projects;