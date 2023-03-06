import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Projects from './Projects';

function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <section><a className="github-icon" href="https://github.com/russkinori"><FontAwesomeIcon icon={faGithub} /></a></section>

      <section><a className="linkedin-icon" href="https://www.linkedin.com/in/russel-richard-6a3125a0"><FontAwesomeIcon icon={faLinkedin} /></a></section>


      <section><a className="twitter-icon" href="https://twitter.com/rsslrchrd"><FontAwesomeIcon icon={faTwitter} /></a></section>

      <Routes>
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Contact;
