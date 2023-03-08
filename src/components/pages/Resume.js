import "./styles/Resume.css";
import React from 'react';
import Icons from './Icons'
import icons from './Icons.json'

function Resume() {
  return (
    <div className="resume row">
      <div className="resume-area col-8">
        <header className="row">
          <h1>Russel Richard</h1>
          <h2>Front-End Web Developer</h2>
          <ul>
            <li>Email: jane.doe@example.com</li>
            <li>GitHub: github.com/janedoe</li>
            <li>Portfolio: janedoe.com</li>
          </ul>
        </header>
        <section className="summary row">
          <h2>Summary</h2>
          <p>
            I'm a Front-End Web Developer with limited experience, but a passion for creating beautiful and user-friendly web applications.
            I have experience working on personal projects and exploring various frontend technologies on my own.
            I am also currently in my final month of a 4-month bootcamp in Frontend Web Development.
            I'm excited to continue learning and growing as a developer and contributing to the development of innovative and impactful web applications.
          </p>
        </section>
        <section className="skills row">
          <h2>Skills</h2>
          <ul>
            <li><h4>Proficient in:</h4></li>
            <a className="skillset" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">html</a>
            <a className="skillset" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">css</a>
            <a className="skillset" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">javascript</a>
            <a className="skillset" href="https://reactjs.org/" target="_blank" rel="noreferrer">react</a>
            <a className="skillset" href="https://github.com/" target="_blank" rel="noreferrer">github</a>
            <a className="skillset" href="https://git-scm.com/" target="_blank" rel="noreferrer">git</a>
            <a className="skillset" href="https://nodejs.org/" target="_blank" rel="noreferrer">nodejs</a>
            <a className="skillset" href="https://jqueryui.com/" target="_blank" rel="noreferrer">jquery</a>
            <a className="skillset" href="https://netlify.com/" target="_blank" rel="noreferrer">nelify</a>
            <a className="skillset" href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a>

            <br />
            <br />
            <li>Strong attention to detail and ability to write clean and well-structured code</li>
            <li>Passion for creating intuitive and engaging user experiences</li>
          </ul>

          {/* <div className="row projects-area">

            {icons.map(icon => (
              <Icons key={icon.id} icon={icon} />
            ))}

          </div> */}
        </section>
        <section className="experience row">
          <h2>Experience</h2>
          <h3>Front-End Developer - Personal Project</h3>
          <p>January 2022 - Present</p>
          <ul>
            <li>Developed a responsive web application using React and styled-components</li>
            <li>Implemented user authentication and authorization using Firebase Authentication</li>
            <li>Integrated third-party APIs such as OpenWeatherMap and Mapbox to provide additional functionality</li>
            <li>Designed and implemented UI components to ensure consistency and improve user experience</li>
            <li>Deployed the application to GitHub Pages</li>
          </ul>
        </section>
        <section className="education row">
          <h2>Education</h2>
          <h3>Frontend Web Development Bootcamp - XYZ Academy</h3>
          <p>September 2021 - December 2021</p>
          <ul>
            <li>Learned HTML, CSS, JavaScript, React, and Git through hands-on projects and exercises</li>
            <li>Developed a portfolio of web applications to showcase skills and experience</li>
            <li>Participated in group projects to develop teamwork and collaboration skills</li>
            <li>Received certificate of completion</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
