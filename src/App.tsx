import React from 'react';

import About from './components/about/About';
import Contact from './components/contact/Contact';
// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import Tech from './components/techstack/Tech';

import './App.css';

function App() {
  return (
    <div >
      {/* <Home /> */}
      <NavBar/>
      <About />
      <hr/>
      <Tech />
      <hr/>
      <Project/>
      <hr/>
      <Contact/>
      <p id="footer">Made by Raeesa Parker &#169; 2023</p>
    </div>
  );
}

export default App;
