import { ProjectSection } from "./ProjectSection";
import '../../styles/BuilderSection.css'

function ProjectCollection({collectionData, setCvData}){
    function deleteSection(id){
        const newCollection = collectionData.filter(section => section.id != id)
        setCvData(prev => ({...prev, 'projects': newCollection}))
    }

    function addSection(){
        const newCollection = [
            ...collectionData,
            {
                'id': crypto.randomUUID(),
                'title' : '',
                'technologies' : '',
                'bullets': []
            }
         ]
         setCvData( prev => (
            {
                ...prev,
                'projects': newCollection
            }
         ))
    }

    return (
        <>
            {collectionData.map(section => (
                <div key={section.id} className="section">
                    <ProjectSection sectionData={section} setCvData={setCvData} />
                    <button type='button' onClick={() => deleteSection(section.id)} >Delete Project</button>
                </div>
            ))}
            <div className="AddSection">
                <button type="button" onClick={addSection}>Add Project</button>
            </div>
        </>
    )
}

export {ProjectCollection}