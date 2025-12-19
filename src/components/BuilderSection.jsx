import "../styles/BuilderSection.css"

function BuilderSection({ section, sectionData, setCvData}){
    if(section ==="personal"){
        return (
        <div className="section">
            <label for="name">Name:</label>
            <input name="name"/>
        </div>
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