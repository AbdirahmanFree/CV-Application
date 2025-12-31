import '../styles/Resume.css'
import { ResumeSection } from './ResumeComponents/ResumeSection'
import { PersonalSection } from './ResumeComponents/PersonalSection'

function Resume({cvData}){
    return (
        <div className='resume-container'>
            <PersonalSection sectionData={cvData.personal} />
            <ResumeSection section="education" sectionData={cvData.education} />
        </div>
    )
}


export {Resume}