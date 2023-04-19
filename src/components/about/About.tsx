import './About.css';
import AboutSub from './About-sub';
import { SectionTitle } from '../SectionTitle';


function About() {



  return (
    <div id="section-about" className='section-layout'>
      <div  className='title-alignment'>
        <SectionTitle title={"About"}/>
      </div>

      <div className='section-content'>
        <AboutSub/>
      </div>
      
    </div>
  );
}

export default About;
