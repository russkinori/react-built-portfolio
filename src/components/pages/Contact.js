// import React from 'react';
import './styles/Contact.css'
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copy, setCopy] = useState(false);

  // handle form submission here
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, subject, message, copy);
    event.target.reset()
  };

  return (
    <div className="row container-fluid col-12">
      <section className='row container-fluid col-12'>
        <h1>Contact</h1>

        <p>
          Feel free to contact me via social media or email.
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
              <img src={process.env.PUBLIC_URL + "/Images/email_icon.png"} height={325} width={325} alt='email icon' ></img>
            </a>
          </div>
        </div>
      </section>
      {/* <br /> */}
      <hr />
      <br />

      <div className="row form-container">
        <form className="form col-6" onSubmit={handleSubmit}>
          <h2>What's on your mind?</h2>

          {/* Name */}
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            className="form-control mb-4"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Subject */}
          <div>
            <label>Subject</label>
            <br />
            <select
              className="browser-default custom-select mb-4"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              <option value="" defaultValue>
                Choose option
              </option>
              <option value="feedback">Feedback</option>
              <option value="report a bug">Report a bug</option>
              <option value="request a feature">Request a feature</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              rows="3"
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>

          {/* Copy */}
          <div className="custom-control custom-checkbox mb-4">
            <label className="custom-control-label" htmlFor="defaultContactFormCopy">
              Send me a copy of this message
            </label>
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultContactFormCopy"
              checked={copy}
              onChange={(event) => setCopy(event.target.checked)}
            />
          </div>

          {/* Send button */}
          <button className="btn btn-info btn-block" type="submit">
            Send
          </button>
        </form>
      </div>


    </div>


  );
}

export default ContactForm;
