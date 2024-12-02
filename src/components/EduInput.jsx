
import EduSaveButton from "./EduSaveButton.jsx";
import CloseButton from "./CloseButton.jsx";

import { useState } from "react";




export default function EducationalInputComponent({setIsEditing, schoolName, setSchoolName, titleOfStudy, setTitleOfStudy, startDate, setStartDate, endDate, setEndDate, educations, setEducations}) {

    const [formVisible, setFormVisible] = useState(false);

    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function toggleForm() {
        setFormVisible(!formVisible)
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
            <div>
                <div className="edu-input-header">
                    <h2>Education</h2>
                    <button onClick={toggleForm}><img className="plus-icon" src="../public/plusIcon.svg"/></button>
                    <CloseButton setIsEditing={setIsEditing}/>
                </div>
                {formVisible && (
                    <form className="general-inputs">
                        <h1 className="section-icon"><img className="div-icon" src="../public/eduIcon.svg" />Education</h1>
                        <label className="input-label">
                            School Name
                            <input type="text" value={schoolName} onChange={handleSchoolNameChange} placeholder="Enter the name of the school"/>
                        </label>
                        <label className="input-label">
                            Degree
                            <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange} placeholder="Enter your degree"/>
                        </label >
                        <label className="input-label">
                            Start date
                            <input type="text" value={startDate} onChange={handleStartDateChange} placeholder="Enter the start date"/>
                        </label>
                        <label className="input-label">
                            End date
                            <input type="text" value={endDate} onChange={handleEndDateChange} placeholder="Enter the end date"/>
                        </label>
                        <EduSaveButton setFormVisible={setFormVisible} setIsEditing={setIsEditing} educations={educations} setEducations={setEducations} schoolName={schoolName}
                                titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate} />
                    </form>  
                )}

                <ul>
                    {educations.map((education, index) => 
                        <li key={index}>{education.schoolName}</li>)}
                </ul>
            </div>
            
        )
    }

    
