import './Experience.css';
import ExperienceSub from './Experience-sub';
import ExperienceCTA from './ExperienceCTA';
import { SectionTitle } from '../SectionTitle';


function Experience() {



  return (
    <div id="section-experience" className='section-layout'>

      <div  className='title-alignment'>
        <SectionTitle title={"Experience"}/>
      </div>

      <div className='section-content' id="experience-sub">
        <ExperienceSub/>
      </div>
      
    </div>
  );
}

export default Experience;
