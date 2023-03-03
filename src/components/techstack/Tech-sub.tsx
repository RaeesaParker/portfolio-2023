import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import './Tech.css';
import {techStackArray} from "./techstack"


function TechSub() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div className='div-split'>
      <div id="tech-stack">
        {techStackArray.map((tech, index) => {
          return(
            <div className='tech-card' key={index}> <p>{tech}</p> </div>
          )
        })}
      </div>

      <div  id="tech-learn">
        <p> I absolutely love to learn. That is why I aim to always be exploring new technologies.  </p>
        <p> I am currently learning ...   </p>
        <RoughNotation 
          type="highlight" 
          color='var(--yellow)'
          show={true}
          strokeWidth={2}
          padding={[15, 0 , 15 , 0]}
          animationDelay={1000}
          > <h3>Typescript</h3>
        </RoughNotation>
      </div>

    </div>
  );
}

export default TechSub;
