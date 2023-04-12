import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExperienceProfile } from "../../data/api";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";




const ExperienceDetails = ({experience}:  {experience:ExperienceProfile | undefined}) => {
  return (
    <div id="experience-details">
      <div>
        <h4>{experience?.Role} @ <a href={experience?.PlaceLink}> {experience?.PlaceName} </a></h4>
        <p id="experience-date">{experience?.YearStart} - {experience?.YearEnd}</p>
      </div>
      
      <div>
        {experience?.Responsibilities.map((item, index) => {
          return(
            <div key={index}>
              <p className="responsibility-item"> <FontAwesomeIcon icon={faAngleRight} className="experience-icon"/>  {item}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ExperienceDetails;