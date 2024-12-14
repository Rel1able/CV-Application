


import { useState } from "react";




export default function EducationalInputComponent({ setIsEditing, schoolName, setSchoolName, titleOfStudy, setTitleOfStudy, startDate, setStartDate, endDate, setEndDate, educations, setEducations }) {

    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function toggleForm() {
        if (editingIndex !== null) {
            setSchoolName("");
            setTitleOfStudy("");
            setStartDate("");
            setEndDate("");
            setEditingIndex(null);
        } else {
            if (!formVisible) {
                setSchoolName("");
                setTitleOfStudy("");
                setStartDate("");
                setEndDate("");
                setEditingIndex(null);
            }
            setFormVisible(!formVisible)
        }
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

    function handleClose() {
        setIsEditing(false);
        setFormVisible(false);
        setSchoolName("");
        setTitleOfStudy("");
        setStartDate("");
        setEndDate("");
    }

    function handleSave(e) {
        e.preventDefault();
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
        let filtered = educations.filter((_, i) => i !== index);
        setEducations([...filtered]);
    }
    
        return (
            <div className="edu-form">
                <div className="edu-input-header">
                    <img className="mini-icon" src="../eduIcon.svg" />
                    <h2>Education</h2>
                    <div className="header-btns">
                        <button className="plus-btn" onClick={toggleForm}><img className="plus-icon" src="../public/plusIcon.svg" /></button>
                        <button onClick={handleClose}><img className="swap-icon" src="../public/closeIcon.svg"/></button>
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
                        <button className="save-button" onClick={e => handleSave(e)}>Save</button>
                    </form>
                )}
                {educations.length !== 0 && 
                    <ul className="items-container">
                    {educations.map((education, index) =>
                        <li className="list-items" key={index}>
                             <div className="item-name">{education.schoolName}</div>
                            
                            <div className="edu-buttons2">
                                <button className="edit-btn" onClick={() => handleEdit(index)}><img className="edu-edit-icon" src="../tools.svg"/></button>
                                <button className="delete-btn" onClick={() => handleDelete(index)}><img className="edu-del-icon" src="../trashCan.svg"/></button>
                            </div>
                            
                        </li>)}
                </ul>
                }
                
            </div>
            
        )
    }

