import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './Contact.css';
import ContactSub from './Contact-sub';


function Contact() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-contact" className='section-layout'>
      <div  className='div-stack title-alignment'>
        <h2>Contact</h2>
        <hr/>
      </div>

      <div>
        <ContactSub/>
      </div>

      <div>
        <p id="footer">Made by Raeesa Parker &#169; 2023</p>
      </div>
      
    </div>
  );
}

export default Contact;
