import '../styles/BuilderSection.css'
function PersonalSection({sectionData, setCvData}){
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
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder={sectionData.name}/>
        </div>

        <div className="field">
            <label htmlFor="number">Phone number: </label>
            <input type="text" id="number" name="number" placeholder={sectionData.number} />
        </div>
        <div className="field">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder={sectionData.email} />
        </div>
        <div className="field">
            <label htmlFor="linkedin">LinkedIn: </label>
            <input type="text" id="linkedin" name="linkedin" placeholder={sectionData.linkedIn} />
        </div>
        <div className="field">
            <label htmlFor="portfolio">Portfolio: </label>
            <input type="text" id="portfolio" name="portfolio" placeholder={sectionData.portfolio}/>
        </div>
        <button type="submit">Save</button>
    </form>
    )


}

export {PersonalSection}