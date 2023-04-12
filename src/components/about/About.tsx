import './About.css';
import AboutSub from './About-sub';


function About() {

  return (
    <div id="section-about">
      <div  className='div-stack title-alignment'>
        <h2>About</h2>
        <hr/>
      </div>

      <div>
        <AboutSub/>
      </div>
      
    </div>
  );
}

export default About;
