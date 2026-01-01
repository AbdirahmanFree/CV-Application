import '../../styles/ResumeSection.css'

function SkillSection({sectionData}){
    return (
        <div className='experience container'>
            <div className='heading'>Technical Skills</div>
            <div className='section-content'>
                {sectionData.map(skill => (
                    <div className='section-container'>
                        <span className='bold'>{skill.type}{skill.type && ':'}</span>
                        <span>{skill.skills}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {SkillSection}