import { SectionTitle } from '../SectionTitle';
import ProjectSub from './Project-sub';

import './Project.css';

function Project() {



  return (
    <div id="section-project" className='section-layout'>

      <div className='title-alignment' style={{marginTop:"15vh"}}>
        <SectionTitle title={"Projects"}/>
      </div>

      <div id="project-details-section">
        <ProjectSub/>
      </div>
      
    </div>
  );
}

export default Project;
