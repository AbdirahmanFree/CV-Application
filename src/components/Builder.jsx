import '../styles/Builder.css'

function Builder({cvData, setCvData}){
    return (
        <div className='content'>
            <Section personal={cvData.personal} setCvData />
            <Section personal={cvData.education} setCvData />
            <Section personal={cvData.experience} setCvData />
            <Section personal={cvData.projects} setCvData />
            <Section personal={cvData.skills} setCvData />
            
            

        </div>
    )
}

export {Builder}