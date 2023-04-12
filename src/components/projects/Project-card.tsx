import { ProjectProfile } from "../../data/api"

export const ProjectCard = ({project}: {project:ProjectProfile}) => {
  return(
    <div className={"card-container"}>
      <div className={"card"}> 
        <FrontCard project={project} /> 
        <BackCard project={project} />   
      </div>  

    </div>
  )
}


export const FrontCard = ({project}: {project:ProjectProfile}) => {
  return(
    <div className="card-front">
      <img src={require('./assets/' + project?.projectImage + '.jpg')} alt="Project" />
    </div>
  )
}


export const BackCard = ({project}: {project:ProjectProfile}) => {
  return(
    <div className="card-back">
      <div>
        <h4>{project.projectName}</h4>
        <p>{project.projectDescription}</p>
      </div>
  
      <div className='div-split' id="project-tech">
        {project.techStack.map((tech:any, index:any) => {
        return( <div className='tech-card-project' key={index}> <p>{tech}</p> </div>)
        })}
      </div>

      <div id="project-buttons">
        {project.demoLink ? <a href={project.demoLink}  target="_blank" rel="noreferrer" ><button>Demo</button> </a> : <p>No link</p> }
        {project.codeLink ? <a href={project.codeLink}  target="_blank" rel="noreferrer"><button>Code</button> </a> : null }
      </div>    
    </div>
  )
}