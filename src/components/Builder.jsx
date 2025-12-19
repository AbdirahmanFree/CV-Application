import '../styles/Builder.css'

function Builder({cvData, setCvData}){
    return (
        <div className='content'>
            <Section personal={cvData.personal} setCvData={setCvData} />
            <Section personal={cvData.education} setCvData={setCvData} />
            <Section personal={cvData.experience} setCvData={setCvData} />
            <Section personal={cvData.projects} setCvData={setCvData} />
            <Section personal={cvData.skills} setCvData={setCvData} />
        </div>
    )
}

export {Builder}