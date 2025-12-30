import '../../styles/ResumeSection.css'

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
            <div className='education container'>
                <div className='heading'>Education</div>
                <div className='section-content'>
                    <div className='section-field'>
                        <span className='bold'>{sectionData.school}</span>
                        <span>{sectionData.location}</span>
                    </div>
                    <div className='section-field'>
                        <span className='italic'>{sectionData.degree}</span>
                        <span className='italic'>{sectionData.start} - {sectionData.end}</span>
                    </div>
                    <div className='section-field'> 
                        <ul>
                            {sectionData.bullets.map(bullet => {
                                return (
                                    <li>{bullet.text}</li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export {ResumeSection}