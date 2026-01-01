import { SkillSection } from "./SkillSection";
import '../../styles/BuilderSection.css'

function SkillCollection({collectionData, setCvData}){

    function deleteSection(id){
        const newCollection = collectionData.filter(section => section.id != id)
        setCvData(prev => ({...prev, 'skills': newCollection}))
    }

    function addSection(){
        const newCollection = [
            ...collectionData,
            {
                'id': crypto.randomUUID(),
                'type' : '',
                'skills' : '',
            }
         ]
         setCvData( prev => (
            {
                ...prev,
                'skills': newCollection
            }
         ))
    }
    return (
        <>
            {collectionData.map(section => (
                <div key={section.id} className="section">
                    <SkillSection sectionData={section} setCvData={setCvData}/>
                    <button type="button" onClick={() => deleteSection(section.id) }>Delete Experience</button>
                </div>
            ))}
            <div className="AddSection">
                <button type="button" onClick={addSection}>Add Skills</button>
            </div>
        </>
    )
}
export {SkillCollection}