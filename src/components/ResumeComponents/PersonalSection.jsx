import '../../styles/ResumeSection.css'

function PersonalSection({sectionData}){
    return (
        <div className='main'>
            <h1>{sectionData.name}</h1>
            <div className='personal'>
                <span>{sectionData.number} {sectionData.number == '' ? '' : ' , '}
                    <a href={sectionData.email}>{sectionData.email}</a> {sectionData.email == '' ? '' : ' , '}
                    <a href={sectionData.linkedIn} target='_blank'> {sectionData.linkedIn && 'LinkedIn'}</a> {sectionData.linkedIn == '' ? '' : ' , '}
                    <a href={sectionData.portfolio} target='_blank'>{sectionData.portfolio && 'Portfolio'}</a> 
                </span>
                </div>
        </div>
    )
}

export {PersonalSection}