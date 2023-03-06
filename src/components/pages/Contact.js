import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import linkedin from './Images/twitterLogoIcon.png';
import github from './Images/github_square_icon.png';
import twitter from './Images/linkedin-logo-icon.png';
import email from './Images/email_icon.png';
import Projects from './Projects';
import './styles/Contact.css'

function Contact(props) {
  return (
    <div className='row container-fluid col-12'>
      <h1>Contact</h1>
      {/* <div className='row'> */}

      <p>
        Feel free to contact me via social media or email. I just can't seem to understand why this page is not doing what it needs to do and decides to just play the fool.This must be having a laugh. Surely you can't be serious about why this just does't work how it should.
      </p>
      {/* </div> */}
      <div className='row col-12'>
        <div className="social col-lg-3 col-md-6 col-xs-12">
          <a className="social-icon" href="https://www.linkedin.com/in/russel-richard-6a3125a0">
            <img src={linkedin} alt='linkedin icon' ></img>
          </a>
        </div>
        <div className="social col-lg-3 col-md-6 col-xs-12">
          <a className="social-icon" href="https://github.com/russkinori">
            <img src={github} alt='github icon' ></img>
          </a>
        </div>
        <div className='social col-lg-3 col-md-6 col-xs-12'>
          <a className="social-icon" href="https://twitter.com/rsslrchrd">
            <img src={twitter} alt='twitter icon' ></img>
          </a>
        </div>
        <div className="social col-lg-3 col-md-6 col-xs-12">
          <a className="social-icon" href="mailto:russel.richard@outlook.com">
            <img src={email} alt='email icon' ></img>
          </a>
        </div>
      </div>

      <Routes>
        <Route path="projects" element={<Projects />} />
      </Routes>
      <div className='row email'>
        {/* <ul class="social-disc"> */}
        {/* <li><a href="http://www.twitter.com/AdhamDannaway" target="_blank" class="twitter">Twitter</a></li> */}
        {/* <li><a href="http://www.facebook.com/ilikeadham" target="_blank" class="facebook">Facebook</a></li> */}
        {/* <li><a href="http://www.linkedin.com/in/adhamdannaway" target="_blank" class="linkedin">LinkedIn</a></li> */}
        {/* <li><a href="https://www.instagram.com/adham.dannaway" target="_blank" class="instagram">Instagram</a></li>
						<!-- <li><a href="http://www.dribbble.com/AdhamDannaway" target="_blank" class="dribbble">Dribbble</a></li> --> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Contact;
