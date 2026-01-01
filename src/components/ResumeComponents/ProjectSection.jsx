import '../../styles/ResumeSection.css'

function ProjectSection({sectionData}){
    return (
        <div className='project container'>
            <div className='heading'>Projects</div>
            <div className='section-content'>
                {sectionData.map(project => (
                    <div className='section-container'>
                        <div className='project-heading'>
                            <span className='bold'>{project.title}</span>
                |
                            <span className='italic'>{project.tech}</span>
                        </div>
                        <div className='section-field'>
                            <ul>
                                {project.bullets.map(bullet => (
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
export {ProjectSection}