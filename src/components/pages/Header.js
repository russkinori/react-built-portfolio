import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <nav>
      <ul className="header nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="react-built-portfolio/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <FontAwesomeIcon icon={faHouseChimney} />
          </NavLink>
        </li>
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
        {/* <li className="nav-item">
          <NavLink
            to="react-built-portfolio/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;
