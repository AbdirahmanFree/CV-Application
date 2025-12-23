import '../styles/Resume.css'
import { ResumeSection } from './ResumeSection.jsx'

function Resume({cvData}){
    return (
        <div className='resume-container'>
            <ResumeSection section="personal" sectionData={cvData.personal} />
            <ResumeSection section="education" sectionData={cvData.education} />
        </div>
    )
}

export {Resume}