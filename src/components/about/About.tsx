import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './About.css';
import AboutSub from './About-sub';


function About() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-about">
      <div  className='div-stack title-alignment'>
        <h2>About Me</h2>
        <h3>An Astrophysicist turned Front-End Developer</h3>
      </div>

      <div>
        <AboutSub/>
      </div>
      
    </div>
  );
}

export default About;
