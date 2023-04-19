import React from 'react';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';
import StarsBackground from './components/stars/StarsBackground';

import './App.css';
import ExperienceCTA from './components/experience/ExperienceCTA';

function App() {
  return (
    <div >
      <StarsBackground />
      <Home />
      <NavBar/>
      <About />
      <Skills />
      <Experience />
      <ExperienceCTA />
      <StarsBackground />
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
