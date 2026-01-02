import '../styles/Resume.css'
import { PersonalSection } from './ResumeComponents/PersonalSection'
import { EducationSection } from './ResumeComponents/EducationSection'
import { ExperienceSection } from './ResumeComponents/ExperienceSection'
import { ProjectSection } from './ResumeComponents/ProjectSection'
import { SkillSection } from './ResumeComponents/SkillSection'

function Resume({cvData}){
    return (
        <>
    
            <div>
                <PersonalSection sectionData={cvData.personal} />
                <EducationSection sectionData={cvData.education} />
                <ExperienceSection sectionData={cvData.experience} />
                <ProjectSection sectionData={cvData.projects} />
                <SkillSection sectionData={cvData.skills} />
            </div>
        </>
    )
}


export {Resume}