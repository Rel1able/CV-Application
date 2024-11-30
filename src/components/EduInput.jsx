
import SaveButton from "./SaveButton.jsx";

export default function EducationalInputComponent({setIsEditing, schoolName, setSchoolName, titleOfStudy, setTitleOfStudy, startDate, setStartDate, endDate, setEndDate }) {
    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function handleTitleOfStudyChange(e){
        setTitleOfStudy(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    return (
        <form className="general-inputs">
            <h1>Educational experience</h1>
            <label className="input-label">
                School Name:
                <input type="text" value={schoolName} onChange={handleSchoolNameChange}/>
            </label>
            <label className="input-label">
                Title of Study:
                <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange}/>
            </label >
            <label className="input-label">
                Start
                <input type="date" value={startDate} onChange={handleStartDateChange}/>
            </label>
            <label className="input-label">
                End
                <input type="date" value={endDate} onChange={handleEndDateChange}/>
            </label>
            <SaveButton setIsEditing={setIsEditing}/>
        </form>  
    )
} 