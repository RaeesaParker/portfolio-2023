import React from 'react';
import { useState } from 'react';
import './NavBar.css';

import NavMenu from './NavMenu';

function NavBar() {

  // State to open and close navmenu
  const [menuOpen, setMenuOpen] = useState(false)

  // Function to open and close menu
  function menuClickFunction (){
    setMenuOpen(!menuOpen)
  }

  return (
    <div id="navbar-div">
      <i className="fa-solid fa-bars" onClick={menuClickFunction}></i>
      {menuOpen == true? <NavMenu/ > : null}
    </div>
  );
}

export default NavBar;
