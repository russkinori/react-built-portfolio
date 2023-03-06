import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from "./Form";
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
            <img src={process.env.PUBLIC_URL + "/Images/linkedin-logo-icon.png"} alt='linkedin icon' ></img>
          </a>
        </div>
        <div className="social col-lg-3 col-md-6 col-xs-12">
          <a className="social-icon" href="https://github.com/russkinori">
            <img src={process.env.PUBLIC_URL + "/Images/github_square_icon.png"} alt='github icon' ></img>
          </a>
        </div>
        <div className='social col-lg-3 col-md-6 col-xs-12'>
          <a className="social-icon" href="https://twitter.com/rsslrchrd">
            <img src={process.env.PUBLIC_URL + "/Images/twitter-logo-icon.png"} alt='twitter icon' ></img>
          </a>
        </div>
        <div className="social col-lg-3 col-md-6 col-xs-12">
          <a className="social-icon" href="mailto:russel.richard@outlook.com">
            <img src={process.env.PUBLIC_URL + "/Images/email_icon.png"} alt='email icon' ></img>
          </a>
        </div>
      </div>

      <div className='row form col-12'>
        <Routes>
          <Route path="react-built-portfolio/form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default Contact;
