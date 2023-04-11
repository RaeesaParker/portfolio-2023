import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Contact.css';
import ContactSub from './Contact-sub';


function Contact() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-contact">
      <div  className='div-stack title-alignment'>
        <h2>Contact</h2>
        <h3>Feel free to get in touch</h3>
      </div>

      <div>
        <ContactSub/>
      </div>
      
    </div>
  );
}

export default Contact;
