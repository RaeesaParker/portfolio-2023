import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Home.css';

function HeroSub() {
 
  //  ---------------------- //
  // Annotations Set-up



  //  ---------------------- //

  return (
    <div>
      <p>I love creating things for the web.</p>
      <p>I use React.js to develop simple, user-friendly, and fun applications.</p>
      <br/>
      <p >I'm currently looking for my next role as a developer. <br/> Hire Me? </p>
      <div id="home-buttons">
          <div >
            <a href="https://www.linkedin.com/in/raeesa-parker/"  target="_blank" ><button className="button-dark" > View LinkedIn</button> </a>
          </div>
          <div>
            <a href="https://github.com/RaeesaParker"  target="_blank"> <button className="button-light">View GitHub</button></a>
          </div>
        </div>
    </div>
  );
}

export default HeroSub;
