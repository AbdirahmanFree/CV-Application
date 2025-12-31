import '../styles/Resume.css'
import { ResumeSection } from './ResumeComponents/ResumeSection'
import { PersonalSection } from './ResumeComponents/PersonalSection'
import { EducationSection } from './ResumeComponents/EducationSection'

function Resume({cvData}){
    return (
        <div className='resume-container'>
            <PersonalSection sectionData={cvData.personal} />
            <EducationSection sectionData={cvData.education} />
        </div>
    )
}


export {Resume}