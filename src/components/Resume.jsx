import '../styles/Resume.css'

function Resume({cvData}){
    return (
        <div className='content'>
            <ResumeSection personal={cvData.personal} />
            <ResumeSection education={cvData.education} />
            <ResumeSection experience={cvData.experience} />
            <ResumeSection projects={cvData.projects} />
            <ResumeSection skills={cvData.skills} />
        </div>
    )
}

export {Resume}