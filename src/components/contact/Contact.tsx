import './Contact.css';
import ContactSub from './Contact-sub';
import { SectionTitle } from '../SectionTitle';


function Contact() {


  return (
    <div id="section-contact" className='section-layout'>
      <div  className='title-alignment'>
        <SectionTitle title={"Contact"}/>
      </div>

      <div className='section-content' style={{padding:"0"}}>
        <ContactSub/>
      </div>

    </div>
  );
}

export default Contact;
