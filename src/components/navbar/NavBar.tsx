import './NavBar.css';
import { motion, useScroll } from "framer-motion";


function NavBar() {
const { scrollYProgress } = useScroll()

  return (
    <div id="navbar-div">
     <a href="#section-home">HOME</a>
     <a href="#section-about">ABOUT</a>
     <a href="#section-skills">SKILLS</a>
     <a href="#section-experience">EXPERIENCE</a>
     <a href="#section-project">PROJECTS</a>
     <a href="#section-contact">CONTACT</a>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

export default NavBar;
