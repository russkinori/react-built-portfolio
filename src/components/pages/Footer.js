import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className='copy'><a className="transition" href="#home">© 2023 Russel Richard</a></div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/resume"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/projects"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>,
        <ul>
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <FontAwesomeIcon icon={faGithub} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="react-built-portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
