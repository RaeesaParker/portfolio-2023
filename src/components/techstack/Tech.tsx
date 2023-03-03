import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Tech.css';
import TechSub from './Tech-sub';


function Tech() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-tech">
      <div  className='div-stack title-alignment'>
        <h2>My Skills</h2>
        <h3>Here are the technologies I use to create awesome applications</h3>
      </div>

      <div>
        <TechSub/>
      </div>
      
    </div>
  );
}

export default Tech;
