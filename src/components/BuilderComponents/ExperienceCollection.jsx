import { ExperienceSection } from "./ExperienceSection";

function ExperienceCollection({collectionData, setCvData}){

    function deleteSection(id){
        const newCollection = collectionData.filter(section => section.id != id)
        setCvData(prev => ({...prev, 'experience': newCollection}))
    }

    return (
        <>
            {collectionData.map(section => (
                <div>
                    <ExperienceSection sectionData={section} setCvData={setCvData} />
                    <button type="button" onClick={() => deleteSection(section.id) }>Delete section</button>
                </div>
            ))}
        </>
    )
    
}

export {ExperienceCollection}