import '../styles/ResumeSection.css'

function ResumeSection({ section, sectionData}){
    if (section == "personal"){
        return (
            <div className='main'>
                <h1>{sectionData.name}</h1>
                <div className='personal'>
                    <span>{sectionData.number} {sectionData.number == '' ? '' : ' | '}
                        <a href={sectionData.email}>{sectionData.email}</a> {sectionData.email == '' ? '' : ' | '}
                        <a href={sectionData.linkedIn} target='_blank'> {sectionData.linkedIn && 'LinkedIn'}</a> {sectionData.linkedIn == '' ? '' : ' | '}
                        <a href={sectionData.portfolio} target='_blank'>{sectionData.portfolio && 'Portfolio'}</a> 
                    </span>
                </div>
            </div>
        )
    }
    if (section == "education") {
        return (
            <div className='education content'>
                <div className='heading'>Education</div>

            </div>
        )
    }
}

export {ResumeSection}