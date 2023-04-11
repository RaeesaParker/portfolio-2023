import React from 'react';

import './About.css';

function AboutExperience() {



  return (
    <div style={{width:"100%"}}>
      <p id="subtitle">Click below to find out more</p>
      <div className="education-flex-container">
        

          <div id="education-astrophysics" className="education-flex-item">
            <h4>Astrophysics</h4>
          </div>

        <div className="education-line"></div>


        <div id="education-msc" className='education-item'>
          <p>MSc. Astrophysics</p>
        </div>

        <div className="education-line"></div>

        <div id="education-msc" className='education-item'>
          <p>PhD. Astrophysics</p>
        </div>

        <div className="education-line"></div>

          <div id="education-development" className="education-flex-item">
            <h4>Web Developement</h4>
          </div>

        <div className="education-line"></div>

        <div id="education-lancaster" className='education-item'>
          <p>Junior Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default AboutExperience;
