import '../../styles/BuilderSection.css'
import { useState } from 'react'

function ProjectSection({sectionData, setCvData}){
    const [bullets, setBullets] = useState(sectionData.bullets)
    function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const tech = form.tech.value
        
        setCvData(prev => ({
            ...prev,
            'projects': prev.projects.map(proj => (
                proj.id == sectionData.id ? {
                    'title': title,
                    'tech': tech,
                    'bullets': bullets
                } : proj
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
        <form className='projects' onSubmit={handleSubmit}>
            <div className='field'>
                <label htmlFor="title">Title: </label>
                <input type='text' name='title' id='title' placeholder={sectionData.title}/>
            </div>
            <div className='field'>
                <label htmlFor="tech">Technologies: </label>
                <input type='text' name='tech' id='tech' placeholder={sectionData.tech}/>
            </div>

            <div className='bullets'>
                {bullets.map(bullet => (
                    <div className='field' key={bullet.id}>
                        <label htmlFor={bullet.id}>Bullet</label>
                        <div className='bullet-container'>
                            <input id= {bullet.id} name={bullet.id} type='text' placeholder={bullet.text}
                                onChange={(e) => handleBulletChange(bullet.id, e.target.value)} />
                            <button type='button' onClick={() => deleteBullet(bullet.id)}>X</button>
                        </div>
                    </div>
                ))}
                <button type='button' onClick={addBullet}>Add Bullet</button>
            </div>
            <button type='submit'>Save</button>

        </form>
    )
}

export {ProjectSection}