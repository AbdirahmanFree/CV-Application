import '../styles/Builder.css'
import { PersonalSection } from './PersonalBSection'

function Builder({cvData, setCvData}){
    return (
        <div className='Builder-section'>
            <PersonalSection sectionData={cvData.personal} setCvData={setCvData} />
        </div>
    )
}

export {Builder}