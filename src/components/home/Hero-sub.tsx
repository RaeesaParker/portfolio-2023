import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Home.css';

function HeroSub() {
 
  //  ---------------------- //
  // Annotations Set-up



  //  ---------------------- //

  return (
    <div>
      <p>I love creating things for the web.</p>
      <p>I use React.js to develop &nbsp; 
        <RoughNotationGroup show={true}>
          <RoughNotation type="highlight" color='var(--pink)' animationDelay= {2000}  padding={[0,0,0,0]}>simple,</RoughNotation>
          &nbsp;
          <RoughNotation type="highlight" color='var(--purple)' animationDelay= {2000}  padding={[0,0,0,0]}>user-friendly </RoughNotation>
          &nbsp; and &nbsp;
          <RoughNotation type="highlight" color='var(--blue)' animationDelay= {2000} padding={[0,0,0,0]}>fun</RoughNotation>
        </RoughNotationGroup>
        &nbsp; applications.
      </p>
      <br/>
      <p >I'm currently looking for my next role as a developer.<br/>
        <RoughNotation 
          type="circle" 
          color='var(--orange)'
          show={true}
          animationDelay= {5000} 
          strokeWidth={2}
          padding={[10, 7 , 7 ,7]}
          >
            Hire Me?
          </RoughNotation> 
      </p>
      <div id="home-buttons">
          <div >
            <a href="https://www.linkedin.com/in/raeesa-parker/"  target="_blank" ><button className="button-dark" > View LinkedIn</button> </a>
          </div>
          <div>
            <a href="https://github.com/RaeesaParker"  target="_blank"> <button className="button-light">View GitHub</button></a>
          </div>
        </div>
    </div>
  );
}

export default HeroSub;
