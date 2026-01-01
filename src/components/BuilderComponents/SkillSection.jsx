import '../../styles/BuilderSection.css'

function SkillSection({sectionData, setCvData}){
     function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        const type = form.type.value
        const skills = form.skills.value

        setCvData(prev => (
            {
                ...prev,
                'skills': prev.skills.map(skill => (
                    skill.id == sectionData.id ? {
                        ...skill,
                        'type': type,
                        'skills': skills
                    } : skill
                ))
            }
        ))
     }

     return (
        <form className='skill' onSubmit={handleSubmit}>
            <div className='field'>
                <label htmlFor="type">Skill Group: </label>
                <input type='text' name='type' id='type' placeholder={sectionData.type}/>
            </div>
            <div className='field'>
                <label htmlFor="skills">Skills: </label>
                <input type='text' name='skills' id='skills' placeholder={sectionData.skills}/>
            </div>

            <button type='submit'>Save</button>
        </form>
     )

}

export {SkillSection}