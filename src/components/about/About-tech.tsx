import {techStackArray} from "./techstack"

import './About.css';

function AboutTech() {


  return (
    <div>
      <h3>My Skills</h3>

      <div id="tech-stack">
        {techStackArray.map((tech, index) => {
          return( <div className='tech-card' key={index}> <p>{tech}</p> </div>)
        })}
      </div>
      <div>
        <p> I am currently learning ...   </p>
        <h4>Typescript</h4>
      </div>
    </div>
  );
}

export default AboutTech;
