import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

function Home() {

  // -------------------- //
  // Annotation set-up
  // -------------------- //

  return (
    <div id="section-home">



      <div id="hero-title" className='div-stack'>
        <h1>Hello there! I'm <span id="hero-name"> Raeesa Parker </span>.</h1>
        <h3>Astrophysicist turned web developer. </h3>
        <a href="#section-about"> 
          <button >View my work  &nbsp; <FontAwesomeIcon icon={faArrowRight} id="arrow-icon" /> </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
