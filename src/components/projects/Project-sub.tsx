import React, { useEffect } from 'react';
import { useState } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { ProjectProfile } from '../../data/api';
import ProjectDetails from './Project-details';
import { projectsArray } from './projects';

import './Project.css';

function ProjectSub() {

  const [projectSelected, setProjectSelected] = useState("NeighbourWho?");
  const [projectProfile , setProjectProfile] = useState<ProjectProfile>();


  // Get list of project names => store in array for menu
  let  projectNames:string[] = [] 
  projectsArray.forEach( project => {
    projectNames.push(project.projectName)
  })

  // Load the initial profile
  useEffect(() => {
    setProjectFunc(projectSelected)
  }, [projectSelected])


  // Set the project when a new project is selected
  function setProjectFunc(projectName:string){
    setProjectSelected(projectName)
    projectsArray.forEach(project => {
      if (project.projectName == projectSelected){
        setProjectProfile(project)
      }
    })
  }


  return (
    <div className='div-stack' id="project-sub">

      <div id="projects-menu">
        {projectNames.map((project, index) => {
          return(
            <h4 key={index} 
              className= {project==projectSelected ? "project-chosen" : ""} 
              onClick={() => setProjectFunc(project)}
              >
              {project}
            </h4>)
        })}
      </div>

      <div >
        <ProjectDetails profile={projectProfile}/>
      </div>
      
    </div>
  );
}

export default ProjectSub;
