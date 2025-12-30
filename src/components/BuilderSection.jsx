import { useState } from "react"
import "../styles/BuilderSection.css"

function BuilderSection({ section, sectionData, setCvData}){
    const [bullets, setBullets] = useState(sectionData.bullets)
    const [sections, setSections] = useState(sectionData)
    if(section ==="education"){
        function handleSubmit(e){
            e.preventDefault()
            const form = e.currentTarget
            const school = form.school.value
            const location = form.location.value
            const degree = form.degree.value
            const start = form.start.value
            const end = form.end.value

            setCvData(prev => ({
                ...prev,
                'education': {
                    ...prev.section,
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
            setBullets(prevBullets => 
                prevBullets.map((b,i) =>(b.id== id ? {...b, 'text': value} : b))
            )

        }

        function addBullet(){
            setBullets(prevBullets => [...prevBullets, {'id': crypto.randomUUID(), 'text' : ''}]
            )
        }

        function removeBullet(id){
            setBullets(prev => prev.filter(b => b.id != id))
        }


        return (
        <form className="section" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="school">School: </label>
                <input type="text" id="school" name="school" value={sectionData.school}/>
            </div>

            <div className="field">
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" name="location" value={sectionData.location}/>
            </div>
            <div className="field">
                <label htmlFor="degree">Degree: </label>
                <input type="text" id="degree" name="degree" value={sectionData.degree}/>
            </div>
            <div className="field">
                <label htmlFor="start">Start Date: </label>
                <input type="text" id="start" name="start" value={sectionData.start}/>
            </div>
            <div className="field">
                <label htmlFor="end">End Date: </label>
                <input type="text" id="end" name="end" value={sectionData.end}/>
            </div>

            <div className="bullets">
                {bullets.map(bullet => (
                    <div className="field">
                        <label htmlFor={bullet.id}>Bullet: </label>
                        <input type="text" id={bullet.id} value={bullet.text}
                        onChange={(e) => handleBulletChange(bullet.id, e.target.value)}
                        />
                        <button type= "button" onClick={() => removeBullet(bullet.id)}>X</button>
                    </div>
                )) 

                }
                <button type ="button" onClick={addBullet}>Add</button>

            </div>
            
            <button type="submit">Save</button>
        </form>
        )
    }
    if(section ==="experience"){
        function handleSubmit(e){
            e.preventDefault()
            const form = e.currentTarget

        }
        function handleBulletChange(id, value){
            setBullets(prevBullets => 
                prevBullets.map(b => (b.id == id ? {...b, 'text': value} : b))
            )

        }
        function addBullet(){
            setBullets(prevBullets => [...prevBullets, {'id': crypto.randomUUID(), 'text': ''}])
        }

        function removeBullet(id){
            setBullets(prev => prev.filter(b => b.id != id))
        }
        return (
        <div className="sections">
            {sectionData.map(experience => {
                return (
                    <form className="section" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor={`title-${experience.id}`} >Title:</label>
                            <input id={`title-${experience.id}`} name="title" value={experience.title} />
                        </div>
                        <div className="field">
                            <label htmlFor={`start-${experience.id}`} >Start:</label>
                            <input id={`start-${experience.id}`} name="start" value={experience.start} />
                        </div>
                        <div className="field">
                            <label htmlFor={`end-${experience.id}`} >End:</label>
                            <input id={`end-${experience.id}`} name="end" value={experience.end} />
                        </div>
                        <div className="field">
                            <label htmlFor={`company-${experience.id}`} >Company:</label>
                            <input id={`company-${experience.id}`} name="company" value={experience.company} />
                        </div>
                        <div className="field">
                            <label htmlFor={`location-${experience.id}`} >location:</label>
                            <input id={`location-${experience.id}`} name="location" value={experience.location}/>
                        </div>
                        <div className="bullets">
                            {experience.bullets.map(bullet => {
                                return (
                                    <div className="field">
                                        <label htmlFor={bullet.id}>Bullet:</label>
                                        <input id={bullet.id} name={bullet.id} value={bullet.text}
                                        onChange={(e) => handleBulletChange(bullet.id, e.target.value)}
                                        />
                                        <button type= "button" onClick={() => removeBullet(bullet.id)}>X</button>
                                    </div>
                                )
                            })}
                            <button  type="button" onClick={addBullet}>Add</button>

                        </div>


                        <div>
                            <button type="submit"> Save</button>
                            <button onClick={(e) => deleteSection(experience.id)}>Delete</button>
                        </div>
                    </form>
                )
            })}
        </div>
        )
        
        
    }
    if(section ==="projects"){
        return (
        <>
        </>
        )
    }
    if(section ==="skills"){
        return (
        <>
        </>
        )
    }
}

export {BuilderSection}