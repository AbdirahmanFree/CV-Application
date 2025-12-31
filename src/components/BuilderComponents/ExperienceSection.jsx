import '../../styles/BuilderSection.css'
import { useState } from 'react'

function ExperienceSection({sectionData, setCvData}){
    const [bullets, setBullets] = useState(sectionData.bullets)
    function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const start = form.start.value
        const end = form.end.value
        const company = form.company.value
        const location = form.location.value

        setCvData(prev => ({
            ...prev,
            'experience': prev.experience.map(exp => (
                exp.id== sectionData.id ? {
                    ...exp,
                    'title': title,
                    'start': start,
                    'end': end,
                    'company': company,
                    'location': location,
                    'bullets': bullets
                    
                } : exp
            ))
        }))
        

    }
    function handleBulletChange(id, value){
        setBullets(b => b.map(bullet => (bullet.id == id ? ({...bullet, 'text': value}) : bullet )))

    }
    function deleteBullet(id){
        const newBullets = bullets.filter(b => b.id != id)
        setBullets(newBullets)
    }

    function addBullet(){
        const newBullet = [{
            'id': crypto.randomUUID(),
            'text': ''
        }]
        setBullets([...bullets,...newBullet])
    }



    return (
        <form className='experience' onSubmit={handleSubmit}>
            <div className='field'>
                <label htmlFor="title">Title: </label>
                <input type='text' name='title' id='title' placeholder={sectionData.title}/>
            </div>
            <div className='field'>
                <label htmlFor="start">Start: </label>
                <input type='text' name='start' id='start' placeholder={sectionData.start}/>
            </div>
            <div className='field'>
                <label htmlFor="end">End: </label>
                <input type='text' name='end' id='end' placeholder={sectionData.end}/>
            </div>
            <div className='field'>
                <label htmlFor="comp">Company: </label>
                <input type='text' name='company' id='company' placeholder={sectionData.company}/>
            </div>
            <div className='field'>
                <label htmlFor="location">Location: </label>
                <input type='text' name='location' id='location' placeholder={sectionData.location}/>
            </div>
            <div className='bullets'>
                {bullets.map(bullet => (
                    <div className='field' key={bullet.id}>
                        <label>Bullet: </label>
                        <div className='bullet-container'>
                            <input id={bullet.id} name={bullet.id} type='text' placeholder={bullet.text}
                                onChange={(e) => handleBulletChange(bullet.id, e.target.value)}
                            />
                            <button type='button' onClick={() => deleteBullet(bullet.id)}>X</button>
                        </div>
                    </div>
                ))}
                <button type='button' onClick={addBullet}>Add Bullets</button>

            </div>

            <button type='submit'>Save</button>
            
        </form>
    )
}

export {ExperienceSection}