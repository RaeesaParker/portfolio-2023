import React from 'react';

// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import StarsBackground from './components/stars/StarsBackground';

import './App.css';

function App() {
  return (
    <div >
      <StarsBackground />
      <Home />
      <NavBar/>
      <About />
      <Skills />
      <Experience />
      <StarsBackground />
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
