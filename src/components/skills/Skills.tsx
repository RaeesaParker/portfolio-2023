import './Skills.css'

import SkillsTech from './Skills-tech'

export const Skills = () => {
  return(
    <div  id="section-skills" className='section-layout section-layout-switch'>
      <div  className='title-alignment'>
        <h2>Skills</h2>
        <hr/>
      </div>

      <div className='section-content'>
        <SkillsTech />
      </div>
    </div>
  )
}

export default Skills