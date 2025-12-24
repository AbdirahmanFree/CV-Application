import '../styles/Builder.css'
import { BuilderSection } from './BuilderSection'
import { PersonalSection } from './PersonalSection'

function Builder({cvData, setCvData}){
    return (
        <div className='Builder-section'>
            <PersonalSection sectionData={cvData.personal} setCvData={setCvData} />
            <BuilderSection section="education" sectionData={cvData.education} setCvData={setCvData} />
            <BuilderSection section="experience" sectionData={cvData.experience} setCvData={setCvData} />
            <BuilderSection section="projects" sectionData={cvData.projects} setCvData={setCvData} />
            <BuilderSection section="skills" sectionData={cvData.skills} setCvData={setCvData} />
        </div>
    )
}

export {Builder}