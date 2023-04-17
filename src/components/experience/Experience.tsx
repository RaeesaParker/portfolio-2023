import './Experience.css';
import ExperienceSub from './Experience-sub';


function Experience() {



  return (
    <div id="section-experience" className='section-layout'>

      <div  className='title-alignment'>
        <h2>Experience</h2>
        <hr/>
      </div>

      <div className='section-content' id="experience-sub">
        <ExperienceSub/>
      </div>
      
    </div>
  );
}

export default Experience;
