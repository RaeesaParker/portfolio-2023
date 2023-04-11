import React from 'react';
import './App.css';

// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Tech from './components/techstack/Tech';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div >
      <NavBar/>
      <Home />
      <hr/>
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
