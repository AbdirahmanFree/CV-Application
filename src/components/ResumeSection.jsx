import '../styles/ResumeSection.css'

function ResumeSection({ section, sectionData}){
    if (section == "personal"){
        return (
            <div>
                <h1>{sectionData.name}</h1>
            </div>
        )
    }
}

export {ResumeSection}