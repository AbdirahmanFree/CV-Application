import { useState } from "react"
import "../styles/BuilderSection.css"

function BuilderSection({ section, sectionData, setCvData}){
    const [bullets, setBullets] = useState([''])
    const [sections, setSections] = useState([''])
    if(section ==="personal"){
        function handleSubmit(e){
            e.preventDefault()
            const form = e.currentTarget
            const email = form.email.value
            const name = form.name.value
            const number = form.number.value
            const portfolio = form.portfolio.value 
            const linkedIn = form.linkedin.value
            console.log(sectionData)
            setCvData(prev => ({
                ...prev,
                'personal': {
                    ...prev.personal,
                    'name': name,
                    'number': number,
                    'email': email,
                    'linkedIn': linkedIn,
                    'portfolio': portfolio
                    
                }
            }))

        }   
        return (
        <form className="section" onSubmit={handleSubmit}>
            <div className="field">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="John Doe"/>
            </div>

            <div className="field">
                <label for="number">Phone number: </label>
                <input type="text" id="number" name="number" placeholder="012-345-6789"/>
            </div>
            <div className="field">
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="username@gmail.com"/>
            </div>
            <div className="field">
                <label for="linkedin">LinkedIn: </label>
                <input type="text" id="linkedin" name="linkedin" placeholder="https://www.linkedin.com/in/username/"/>
            </div>
            <div className="field">
                <label for="portfolio">Portfolio: </label>
                <input type="text" id="portfolio" name="portfolio" placeholder="https://github.com/username"/>
            </div>
            <button type="submit">Save</button>
        </form>
        )
    }
    if(section ==="education"){
        function handleSubmit(e){
            e.preventDefault()
            const form = e.currentTarget
            const school = form.school.value
            const location = form.location.value
            const degree = form.degree.value
            const start = form.start.value
            const end = form.end.value
            const bullets = []

        }
        return (
        <form className="section">
            <div className="field">
                <label for="school">School: </label>
                <input type="text" id="school" name="school" placeholder="Toronto Metropolitan University"/>
            </div>

            <div className="field">
                <label for="location">Location: </label>
                <input type="text" id="location" name="location" placeholder="Toronto, ON"/>
            </div>
            <div className="field">
                <label for="degree">Degree: </label>
                <input type="text" id="degree" name="degree" placeholder="Bachelor of Science in Computer Science"/>
            </div>
            <div className="field">
                <label for="start">Start Date: </label>
                <input type="text" id="start" name="start" placeholder="Sept 2023"/>
            </div>
            <div className="field">
                <label for="end">End Date: </label>
                <input type="text" id="end" name="end" placeholder="Apr 2027"/>
            </div>

            <div className="bullets">
                {bullets.map((bullet,index) => (
                    <div className="field">
                        <label for={bullet}>Bullet: </label>
                        <input type="text" id={bullet} value={bullet} onChange={handleBulletChange}/>
                    </div>
                )) 

                }

            </div>
            
            <button type="submit">Save</button>
        </form>
        )
    }
    if(section ==="experience"){
        return (
        <>
        </>
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