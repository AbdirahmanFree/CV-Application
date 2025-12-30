import '../styles/Builder.css'
import { EducationSection } from './BuilderComponents/EducationSection'
import { ExperienceCollection } from './BuilderComponents/ExperienceCollection'
import { PersonalSection } from './BuilderComponents/PersonalSection'



function Builder({cvData, setCvData}){
    return (
        <div className='Builder-section'>
            <PersonalSection sectionData={cvData.personal} setCvData={setCvData} />
            <EducationSection sectionData={cvData.education} setCvData={setCvData} />
            <ExperienceCollection collectionData={cvData.experience} setCvData={setCvData}/>
            
        </div>
    )
}

export {Builder}