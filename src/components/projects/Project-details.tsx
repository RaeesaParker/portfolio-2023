import React from 'react';

import { ProjectProfile } from '../../data/api';

import './Project.css';

type ProjectProps = {
  profile : ProjectProfile|any ;
}

function ProjectDetails( props: ProjectProps ) {


  return (
    <div className='div-split' id="projects-details">

      <div id="project-img">
        <h4>Image</h4>
      </div>

      <div id="project-text">

        <div id="project-description">
          <p>{props.profile?.projectDescription}</p>
        </div>

        <div className='div-split' id="project-tech">
          {props.profile?.TechStack.map((tech:any, index:any) => {
          return(
            <div className='tech-card-project' key={index}> <p>{tech}</p> </div>
          )
          })}
        </div>

        <div id="project-buttons">
          <div >
            {props.profile ? <a href={props.profile.DemoLink}  target="_blank" ><button>Demo</button> </a> : null }
            
          </div>
          <div>
            {props.profile ? <a href={props.profile.CodeLink}  target="_blank" ><button>Code</button> </a> : null }
          </div>
          </div>    
      </div>
      
    </div>
  );
}

export default ProjectDetails;
