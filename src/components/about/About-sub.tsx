import React from 'react';

import AboutTech from './About-tech';
import './About.css';

function AboutSub() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div className='div-split' id="about-sub">

      <div id="about-text">
        <h3>Get to know me!</h3>
        <div>
          <p>I used to be an Astrophysicist, using code to solve problems on the largest of scales. But in 2022, I decided to take my passion for coding and problem solving from the stars down to the world wide web. </p>
          <p>I currently have the privilege of working as a Junior Front-End Developer on the Innovation Team at Lancaster University, where I develop accessible applications for a range of purposes. </p>
          {/* <p>I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, or would just like to say HI! then don't hesitate to contact me.</p> */}
          {/* <a href="#section-contact"><button>Contact</button> </a> */}
          <p>Feel free to follow or connect with me on my <a href="https://www.linkedin.com/in/raeesa-parker/">LinkedIn</a>.</p>
        </div>
      </div>

      <div id="about-tech">
        <AboutTech/>
      </div>
    </div>
  );
}

export default AboutSub;
