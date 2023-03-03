import React from 'react';
import './App.css';

// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Tech from './components/techstack/Tech';

function App() {
  return (
    <div >
      <NavBar/>
      <Home />
      <hr/>
      <About />
      <hr/>
      <Tech />
    </div>
  );
}

export default App;
