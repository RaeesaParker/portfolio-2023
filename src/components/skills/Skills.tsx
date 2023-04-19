import './Skills.css'

import SkillsTech from './Skills-tech'
import { SectionTitle } from '../SectionTitle'

export const Skills = () => {
  return(
    <div  id="section-skills" className='section-layout section-layout-switch'>
      <div  className='title-alignment'>
        <SectionTitle title={"Skills"}/>
      </div>

      <div className='section-content'>
        <SkillsTech />
      </div>
    </div>
  )
}

export default Skills