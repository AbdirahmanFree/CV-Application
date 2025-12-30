import '../../styles/BuilderSection.css'
import { useState } from 'react'

function EducationSection({sectionData, setCvData}){
    const [bullets , setBullets] = useState(sectionData.bullets)
    function handleSubmit(e){
        e.preventDefault()
        const form = e.currentTarget
        const school = form.school.value
        const location = form.location.value
        const degree = form.degree.value
        const start = form.start.value
        const end = form.end.value

        setCvData(prev =>({
            ...prev,
            'education': {
                ...prev.education,
                'school': school,
                'location': location,
                'degree': degree,
                'start' : start,
                'end': end,
                'bullets': bullets,
            }
        }))
    }

    function handleBulletChange(id, value){
        setBullets(b => b.map(bullet => (bullet.id == id ? ({...bullet, 'text': value}) : bullet )))
    }

    function addBullet(){
        const newBullet = [{
            'id': crypto.randomUUID(),
            'text': ''
        }]
        setBullets([...bullets,...newBullet])
    }

    function removeBullet(id){
        const newBullets = bullets.filter(b => b.id != id)
        setBullets(newBullets)
    }

    return (
        <form className="section" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="school">School: </label>
                <input type="text" id="school" name="school" placeholder={sectionData.school}/>
            </div>

            <div className="field">
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" name="location" placeholder={sectionData.location}/>
            </div>
            <div className="field">
                <label htmlFor="degree">Degree: </label>
                <input type="text" id="degree" name="degree" placeholder={sectionData.degree}/>
            </div>
            <div className="field">
                <label htmlFor="start">Start Date: </label>
                <input type="text" id="start" name="start" placeholder={sectionData.start}/>
            </div>
            <div className="field">
                <label htmlFor="end">End Date: </label>
                <input type="text" id="end" name="end" placeholder={sectionData.end}/>
            </div>

            <div className="bullets">
                {bullets.map(bullet => (
                    <div className="field">
                        
                        <label htmlFor={bullet.id}>Bullet: </label>
                        <div className='bullet-container'>
                            <input type="text" id={bullet.id} placeholder={bullet.text}
                            onChange={(e) => handleBulletChange(bullet.id, e.target.value)}
                            />
                            <button type= "button" onClick={() => removeBullet(bullet.id)}>X</button>
                        </div>

                    </div>
                )) 

                }
                <button type ="button" onClick={addBullet}>Add Bullet</button>

            </div>
            
            <button type="submit">Save</button>
        </form>
    )
}

export {EducationSection}