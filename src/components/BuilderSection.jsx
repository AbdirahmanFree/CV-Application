import "../styles/BuilderSection.css"

function BuilderSection({ section, sectionData, setCvData}){
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
                section: {
                    ...section,
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
        return (
        <>
        </>
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