import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Contact.css';

function ContactSub() {


  return (
    <div className='div-stack' id="contact-sub">

      <div id="contact-message">
        <h4> If you have a question, would like to work together, <br/> <br/> or just want to say hi, please send me a message... </h4>
      </div>  


			<div id="contact-form" >
        <form action="https://formspree.io/f/xzbqpgdj" method="POST">
          <input type="text" id="fname" name="firstname" placeholder="First Name..." required/>
          <input type="text" id="lname" name="lastname" placeholder="Last Name..." required />
          <input type="email" id="email" name="email" placeholder="Email..." required />
          <input type="text" id="subject" name="subject" placeholder="Subject..." required />
          <textarea id="message" name="message" placeholder="Say Hi..." required></textarea>
          <button type="submit" > Submit</button>
        </form>
      </div>
      
      <div id="footer">
        <div className='contact-icon'> 
          <a href="https://github.com/RaeesaParker" target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faGithub} className='font-icon'/> </a>
          <a href="https://www.linkedin.com/in/raeesa-parker/"  target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} className='font-icon'/> </a>
        </div>
        <p >Made by Raeesa Parker &#169; 2023</p>
      </div>
    </div>
  );
}

export default ContactSub;

