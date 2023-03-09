import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import Icons from './components/pages/Icons'


function App() {
  return (
    <Router basename='react-built-portfolio'>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="react-built-portfolio">
          <Route path="react-built-portfolio/" element={<Home />} />
          <Route path="react-built-portfolio/resume" element={<Resume />} />
          {/* Define a route that will have descendant routes */}
          <Route path="react-built-portfolio/projects/*" element={<ProjectGallery />} />
          <Route path="react-built-portfolio/contact" element={<Contact />} />
          {/* <Route path="react-built-portfolio/icons" element={<Icons />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
