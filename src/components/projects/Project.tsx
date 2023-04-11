import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Project.css';
import ProjectSub from './Project-sub';


function Project() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-project">
      <div  className='div-stack title-alignment'>
        <h2>Projects</h2>
        <h3>A collection of the projects I have worked on</h3>
      </div>

      <div>
        <ProjectSub/>
      </div>
      
    </div>
  );
}

export default Project;
