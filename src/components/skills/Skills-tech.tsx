import {techStackArray} from "./techstack"

import './Skills.css';

function SkillsTech() {


  return (
    <div id="tech-content">
      <div id="tech-stack">
        {techStackArray.map((tech, index) => {
          return( <div className='tech-card' key={index}> <p>{tech}</p> </div>)
        })}
      </div>
      <div id="tech-learn">
        <p> I am currently learning ...   </p>
        <h4>Typescript</h4>
      </div>
    </div>
  );
}

export default SkillsTech;
