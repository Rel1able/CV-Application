import SaveButton from "./SaveButton.jsx";

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
            <h1 className="section-icon"><img className="div-icon prof-icon" src="../public/jobExpIcon.svg" />Career</h1>
            <label className="input-label">
                Company
                <input type="text" value={company} onChange={handleCompanyChange}/>
            </label>
            <label className="input-label">
                Job title
                <input type="text" value={jobTitle} onChange={handleJobTitleChange}/>
            </label>
            <label className="input-label">
                Start date
                <input type="text" value={profStartDate} onChange={handleStartDate}/>
            </label>
            <label className="input-label">
                End date
                <input type="text" value={profEndDate} onChange={handleEndDate}/>
            </label>
            <SaveButton setIsEditing={setIsEditing} />
        </form>
        
    )
}