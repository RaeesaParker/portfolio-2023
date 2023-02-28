import React from 'react';
import './App.css';

// Components
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
