
import CloseButton from "./CloseButton.jsx";

import { useState } from "react";




export default function EducationalInputComponent({ setIsEditing, schoolName, setSchoolName, titleOfStudy, setTitleOfStudy, startDate, setStartDate, endDate, setEndDate, educations, setEducations }) {

    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function toggleForm() {
        setFormVisible(!formVisible)
    }

    function handleTitleOfStudyChange(e) {
        setTitleOfStudy(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    function handleSave() {
        const newEducation = { schoolName, titleOfStudy, startDate, endDate };

        if (editingIndex !== null) {
            let updatedEducations = [...educations];
            updatedEducations[editingIndex] = newEducation;
            setEducations(updatedEducations);
            setEditingIndex(null);
        } else {
            setEducations([...educations, newEducation])
        }
        setFormVisible(false);
        setSchoolName("");
        setTitleOfStudy("");
        setStartDate("");
        setEndDate("");
    
    }

    function handleEdit(index) {
        const education = educations[index];
        setEditingIndex(index);
        setSchoolName(education.schoolName);
        setTitleOfStudy(education.titleOfStudy);
        setStartDate(education.startDate);
        setEndDate(education.endDate);
        setFormVisible(true);
    }

    function handleDelete(index) {
        let filtered = educations.filter((_, i) => {
            i !== index;
        })
        setEducations([...filtered]);
    }
    
        return (
            <div className="edu-form">
                <div className="edu-input-header">
                    <h2><img className="edu-icon" src="../public/eduIcon.svg" />Education</h2>
                    <div className="edu-header-btns">
                        <button onClick={toggleForm}><img className="edu-plus-icon" src="../public/plusIcon.svg" /></button>
                        <CloseButton setIsEditing={setIsEditing} />
                    </div>
                    
                </div>
                {formVisible && (
                    <form className="edu-inputs">
                        <label className="input-label">
                            School Name
                            <input type="text" value={schoolName} onChange={handleSchoolNameChange} placeholder="Enter the name of the school" />
                        </label>
                        <label className="input-label">
                            Degree
                            <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange} placeholder="Enter your degree" />
                        </label >
                        <label className="input-label">
                            Start date
                            <input type="text" value={startDate} onChange={handleStartDateChange} placeholder="Enter the start date" />
                        </label>
                        <label className="input-label">
                            End date
                            <input type="text" value={endDate} onChange={handleEndDateChange} placeholder="Enter the end date" />
                        </label>
                        <button className="save-button" onClick={handleSave}>Save</button>
                    </form>
                )}
                {educations.length !== 0 && 
                    <ul className="edu-items-container">
                    {educations.map((education, index) =>
                        <li className="edu-items" key={index}>
                            <div className="edu-item-name">{education.schoolName}</div>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Del</button>
                        </li>)}
                </ul>
                }
                
            </div>
            
        )
    }

