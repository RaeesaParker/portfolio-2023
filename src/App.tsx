import React from 'react';

import About from './components/about/About';
import Contact from './components/contact/Contact';
// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import Experience from './components/experience/Experience';
import ExperienceCTA from './components/experience/ExperienceCTA';

import './App.css';

function App() {
  return (
    <div >
      {/* <Home /> */}
      <NavBar/>
      <About />
      <Experience />
      <ExperienceCTA />
      <Project/>
      <Contact/>
      <p id="footer">Made by Raeesa Parker &#169; 2023</p>
    </div>
  );
}

export default App;
