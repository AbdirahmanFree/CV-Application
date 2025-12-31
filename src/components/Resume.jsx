import '../styles/Resume.css'
import { PersonalSection } from './ResumeComponents/PersonalSection'
import { EducationSection } from './ResumeComponents/EducationSection'
import { ExperienceSection } from './ResumeComponents/ExperienceSection'

function Resume({cvData}){
    return (
        <div className='resume-container'>
            <PersonalSection sectionData={cvData.personal} />
            <EducationSection sectionData={cvData.education} />
            <ExperienceSection sectionData={cvData.experience} />
        </div>
    )
}


export {Resume}