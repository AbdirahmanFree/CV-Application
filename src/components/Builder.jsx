import '../styles/Builder.css'

function Builder({cvData, setCvData}){
    return (
        <div className='content'>
            <BuilderSection personal={cvData.personal} setCvData={setCvData} />
            <BuilderSection education={cvData.education} setCvData={setCvData} />
            <BuilderSection experience={cvData.experience} setCvData={setCvData} />
            <BuilderSection projects={cvData.projects} setCvData={setCvData} />
            <BuilderSection skills={cvData.skills} setCvData={setCvData} />
        </div>
    )
}

export {Builder}