import '../../styles/BuilderSection.css'
import { useState } from 'react'

function ExperienceSection({sectionData, CvData}){
    const [bullets, setBullets] = useState(sectionData.bullets)
    function handleSubmit(e){

    }
    return (
        <form className='section' onSubmit={handleSubmit}>
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
                <input type='text' name='comp' id='comp' placeholder={sectionData.company}/>
            </div>
            <div className='field'>
                <label htmlFor="location"></label>
                <input type='text' name='location' id='location' placeholder={sectionData.location}/>
            </div>
        </form>
    )
}

export {ExperienceSection}