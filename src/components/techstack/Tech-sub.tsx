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
        <h3>Typescript</h3>
      </div>

    </div>
  );
}

export default TechSub;
