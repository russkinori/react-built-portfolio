import React from 'react';
import { Link } from 'react-router-dom';

function Project({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p><a href={project.deployedLink}>Link to the deployed version</a></p>
      <p><a href={project.githubLink}>Link to the GitHub repository</a></p>
      <img src={project.screenshot} alt={project.title} />
      <p>{project.description}</p>
      <Link to={project}>Read more</Link>
    </div>
  );
}

export default Project;

// import React from 'react';
// import projects from './Projects.json';
// import Project from './Project';

// function ProjectGallery() {
//   return (
//     <div>
//       <h2>Project Gallery</h2>
//       {projects.map(project => (
//         <Project key={project.id} project={project} />
//       ))}
//     </div>
//   );
// }

// export default ProjectGallery;
