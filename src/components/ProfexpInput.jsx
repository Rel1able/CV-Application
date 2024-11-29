import Buttons from "./Buttons.jsx"

export default function ProfExpInputs({company, setCompany, jobTitle, setJobTitle, profStartDate,setProfStartDate, profEndDate, setProfEndDate, setIsEditing}) {
    function handleCompanyChange(e) {
        setCompany(e.target.value);
    }

    function handleJobTitleChange(e) {
        setJobTitle(e.target.value);
    }

    function handleStartDate(e) {
        setProfStartDate(e.target.value);
    }

    function handleEndDate(e) {
        setProfEndDate(e.target.value);
    }

    return (
        <form className="general-inputs">
            <h1>Professional Experience</h1>
            <label className="input-label">
                Company
                <input type="text" value={company} onChange={handleCompanyChange}/>
            </label>
            <label className="input-label">
                Job title
                <input type="text" value={jobTitle} onChange={handleJobTitleChange}/>
            </label>
            <label className="input-label">
                Start
                <input type="date" value={profStartDate} onChange={handleStartDate}/>
            </label>
            <label className="input-label">
                End
                <input type="date" value={profEndDate} onChange={handleEndDate}/>
            </label>
            <Buttons setIsEditing={setIsEditing} />
        </form>
        
    )
}