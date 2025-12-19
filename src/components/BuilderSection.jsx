import "../styles/BuilderSection.css"

function BuilderSection({ section, sectionData, setCvData}){
    if(section ==="personal"){
        return (
        <div className="personal">
            <input />
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