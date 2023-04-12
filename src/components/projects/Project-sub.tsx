import { projectsArray } from './projects';
import { ProjectCard } from './Project-card';

import './Project.css';

function ProjectSub() {

  return (
    <div className='div-split' id="project-sub">
      <div id="project-cards"> 
        {projectsArray.map((item, index) => {
          return(
          <ProjectCard key={index} project={item} />
          )
        })}
      </div>
      
    </div>
  );
}

export default ProjectSub;
