import '../../styles/ResumeSection.css'

function ExperienceSection({sectionData}){
    return (
        <div className='experience container'>
            <div className='heading'>Experience</div>
            <div className='section-content'>
                {sectionData.map(experience => (
                    <div className='section-container'>
                        <div className='section-field'>
                            <span className='bold'>{experience.title}</span>
                            <span className='italic'>{experience.start} - {experience.end}</span>
                        </div>
                        <div className='section-field'>
                            <span className='italic'>{experience.company}</span>
                            <span className='italic'>{experience.location}</span>
                        </div>

                        <div className='section-field'>
                            <ul>
                                {experience.bullets.map(bullet => (
                                    <li>{bullet.text}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export {ExperienceSection}