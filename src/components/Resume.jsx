import '../styles/Resume.css'

function Resume({cvData}){
    return (
        <div>
            <Section personal={cvData.personal} />
            <Section personal={cvData.education} />
            <Section personal={cvData.experience} />
            <Section personal={cvData.projects} />
            <Section personal={cvData.skills} />
        </div>
    )
}

export {Resume}