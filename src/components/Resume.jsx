import '../styles/Resume.css'
import { ResumeSection } from './ResumeSection.jsx'

function Resume({cvData}){
    return (
        <div className='content'>
            <ResumeSection section="personal" sectionData={cvData.personal} />
        </div>
    )
}

export {Resume}