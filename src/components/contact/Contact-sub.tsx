import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import './Contact.css';

function ContactSub() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div className='div-split' id="contact-sub">

      <div id="contact-socials">
        <div id="contact-message">
          <h4> If you have a question, <br/> <br/> would like to work together, <br/> <br/> or just want to say hi, <br/><br/> please send me a message... </h4>
        </div>
        <div className='contact-icon'> 
          <a href="https://github.com/RaeesaParker" target="_blank" rel="noreferrer"> <i className="fa-brands fa-square-github fa-4x div-socials-icon"></i> </a>
          <a href="https://www.linkedin.com/in/raeesa-parker/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-4x div-socials-icon"></i> </a>
        </div>
      </div>  

      <div id="contact-form">
				<div className='div-form'>
          <form action="https://formspree.io/f/xzbqpgdj" method="POST">
            <input type="text" id="fname" name="firstname" placeholder="First Name..." required/>
            <input type="text" id="lname" name="lastname" placeholder="Last Name..." required />
					  <input type="email" id="email" name="email" placeholder="Email..." required />
            <input type="text" id="subject" name="subject" placeholder="Subject..." required />
            <textarea id="message" name="message" placeholder="Say Hi..." required></textarea>
            <button type="submit" > Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSub;
