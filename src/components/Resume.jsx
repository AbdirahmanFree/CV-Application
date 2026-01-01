import '../styles/Resume.css'
import { PersonalSection } from './ResumeComponents/PersonalSection'
import { EducationSection } from './ResumeComponents/EducationSection'
import { ExperienceSection } from './ResumeComponents/ExperienceSection'
import { ProjectSection } from './ResumeComponents/ProjectSection'

function Resume({cvData}){
    return (
        <div className='resume-container'>
            <PersonalSection sectionData={cvData.personal} />
            <EducationSection sectionData={cvData.education} />
            <ExperienceSection sectionData={cvData.experience} />
            <ProjectSection sectionData={cvData.projects} />
        </div>
    )
}


export {Resume}