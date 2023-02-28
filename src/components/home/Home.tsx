import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Home.css';
import profilePic from '../../assets/profile.jpg'
import HeroSub from './Hero-sub';

function Home() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-home">

      <div id="div-location"> 
        <i className="fa-solid fa-location-dot"></i>
        <p>Lancashire, England</p>
      </div>

      <div id="hero-title" className='div-stack'>
        <h1>Hello there! My name's Raeesa Parker</h1>
        <h3>I'm a  &nbsp;
          <RoughNotation 
          type="highlight" 
          color='var(--green)'
          show={true}
          animationDelay= {1000} >
            Front-End Developer. 
          </RoughNotation> 
        </h3>
      </div>
     
      <div className='div-split' id="hero-sub">
        <div id="hero-image">
          <img src={profilePic}  alt="Profile of Raeesa Parker"/>
        </div>
        <div id="hero-sub-text" >
          <HeroSub/>
        </div>
      </div>
    </div>
  );
}

export default Home;
