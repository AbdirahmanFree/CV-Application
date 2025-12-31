import { ExperienceSection } from "./ExperienceSection";
import '../../styles/BuilderSection.css'

function ExperienceCollection({collectionData, setCvData}){

    function deleteSection(id){
        const newCollection = collectionData.filter(section => section.id != id)
        setCvData(prev => ({...prev, 'experience': newCollection}))
    }

    function addSection(){
        const newCollection = [
            ...collectionData,
            {
                'id': crypto.randomUUID(),
                'title' : '',
                'start' : '',
                'end' : '',
                'company': '',
                'location': '',
                'bullets': []
            }
         ]
         setCvData( prev => (
            {
                ...prev,
                'experience': newCollection
            }
         ))
    }

    return (
        <>
            {collectionData.map(section => (
                <div key={section.key} className="section">
                    <ExperienceSection sectionData={section} setCvData={setCvData} />
                    <button type="button" onClick={() => deleteSection(section.id) }>Delete section</button>
                </div>
            ))}
            <div className="AddSection">
                <button type="button" onClick={addSection}>Add Experience</button>
            </div>
        </>
    )
    
}

export {ExperienceCollection}