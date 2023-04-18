import './Experience.css';
import { experienceArray } from './experienceArray';
import { ExperienceProfile } from '../../data/api';
import { useEffect, useState } from 'react';
import ExperienceDetails from './Experience-Details';
import ExperienceCTA from './ExperienceCTA';
function ExperienceSub() {

  const [experienceSelected, setExperienceSelected] = useState("Lancaster University");
  const [experienceProfile , setExperienceProfile] = useState<ExperienceProfile>()  ;

    // Load the initial profile
  useEffect(() => {
    setExperienceFunc(experienceSelected)
  }, [experienceSelected])


  // Set the Experience when a new Experience is selected
  function setExperienceFunc(experienceName:string){
    setExperienceSelected(experienceName)
    experienceArray.forEach(experience => {
      if (experience.PlaceName === experienceSelected){
        setExperienceProfile(experience)
      }
    })
  }


  return (
    <div className='div-stack'  id="experience-details-section">
      <div className='div-split' id="experience-content">
        <div id="experience-menu">
          {experienceArray.map((item, index) => {
            return( 
              <div 
                key={index}
                className={item.PlaceName==experienceSelected ? "experience-chosen" : "experience-not-chosen"}
                onClick={() => setExperienceFunc(item.PlaceName)}
                > 
                <p className="menu-item-p">{item.PlaceName}</p> 
              </div>)
          })}
        </div>
      
        <div id="experience-details-item">
          <ExperienceDetails experience={experienceProfile} />
        </div>
    </div>
    <div>
      {/* <ExperienceCTA /> */}
    </div>
    </div>
  );
}

export default ExperienceSub;
