import '../../styles/ResumeSection.css'

function EducationSection({sectionData}){
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

export {EducationSection}