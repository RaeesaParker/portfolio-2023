import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import AboutExperience from './About-experience';
import './About.css';

function AboutSub() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div className='div-split' id="about-sub">

      <div id="about-text">
        <div>
          <p>I used to be an Astrophysicist, using code to solve problems on the largest of scales. But in 2022, I decided to take my passion for coding and problem solving from the stars down to the world wide web. </p>
          <p> I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        </div>

        <div id="about-bottom">
          <h3> Interested in  working together  or hiring me? </h3>
          <div id="about-buttons">
            <div >
              <a href="#section-contact"><button className="button-dark" > Contact</button> </a>
            </div>
            <div>
              <a href="https://github.com/RaeesaParker"  target="_blank"> <button className="button-light">CV</button></a>
            </div>
          </div>
        </div>

      </div>

      <div id="about-link">
        <AboutExperience/>
      </div>
    </div>
  );
}

export default AboutSub;
