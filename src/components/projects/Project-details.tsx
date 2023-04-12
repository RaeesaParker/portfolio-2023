import { ProjectProfile } from '../../data/api';

import './Project.css';

type ProjectProps = {
  profile : ProjectProfile|any ;
}

function ProjectDetails( props: ProjectProps ) {

  return (
    <div className='div-split' id="projects-details">

      <div id="project-img">
        {props.profile ? <img src={require('./assets/' + props.profile?.projectImage + '.jpg')} alt="Project" /> : null}
      </div>

      <div id="project-text">

        <div id="project-description">
          <p>{props.profile?.projectDescription}</p>
        </div>

        <div className='div-split' id="project-tech">
          {props.profile?.techStack.map((tech:any, index:any) => {
          return(
            <div className='tech-card-project' key={index}> <p>{tech}</p> </div>
          )
          })}
        </div>

        <div id="project-buttons">
          <div>
            {props.profile?.DemoLink ? <a href={props.profile.demoLink}  target="_blank" ><button>Demo</button> </a> : null }
          </div>
          <div>
            {props.profile?.CodeLink ? <a href={props.profile.codeLink}  target="_blank" ><button>Code</button> </a> : null }
          </div>
          </div>    
      </div>
      
    </div>
  );
}

export default ProjectDetails;
