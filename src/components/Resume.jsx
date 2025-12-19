import '../styles/Resume.css'

function Resume({cvData}){
    return (
        <div className='content'>
            <Section personal={cvData.personal} />
            <Section education={cvData.education} />
            <Section experience={cvData.experience} />
            <Section projects={cvData.projects} />
            <Section skills={cvData.skills} />
        </div>
    )
}

export {Resume}