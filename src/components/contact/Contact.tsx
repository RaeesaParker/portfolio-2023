import './Contact.css';
import ContactSub from './Contact-sub';


function Contact() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-contact" className='section-layout'>
      <div  className='title-alignment'>
        <h2>Contact</h2>
        <hr/>
      </div>

      <div className='section-content' style={{padding:"0"}}>
        <ContactSub/>
      </div>

    </div>
  );
}

export default Contact;
