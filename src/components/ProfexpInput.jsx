

import { useState } from "react";

export default function ProfExpInputs({experiences, setExperiences, company, setCompany, jobTitle, setJobTitle, profStartDate,setProfStartDate, profEndDate, setProfEndDate, setIsEditing}) {

    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function toggleForm() {
        if (editingIndex !== null) {
            setEditingIndex(null);
            setCompany("");
            setJobTitle("");
            setProfStartDate("");
            setProfEndDate("");
        } else {
            if (!formVisible) {
                setCompany("");
                setJobTitle("");
                setProfStartDate("");
                setProfEndDate("");
                setEditingIndex(null);
            }
            setFormVisible(!formVisible);
        }
        
    }

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

    function handleClose() {
        setIsEditing(false);
        setFormVisible(false);
        setCompany("");
        setJobTitle("");
        setProfStartDate("");
        setProfEndDate("");
    }


    function handleSave(e) {
        e.preventDefault();
        const newExperience = { company, jobTitle, profStartDate, profEndDate };
        if (editingIndex !== null) {
            let updatedExperiences = [...experiences];
            updatedExperiences[editingIndex] = newExperience;
            setExperiences(updatedExperiences);
        } else {
            setExperiences([...experiences, newExperience]);
        }
        setFormVisible(false);
        setCompany("");
        setJobTitle("");
        setProfStartDate("");
        setProfEndDate("");
    }

    function handleEdit(index) {
        let experience = experiences[index];
        setEditingIndex(index);
        setCompany(experience.company);
        setJobTitle(experience.jobTitle);
        setProfStartDate(experience.profStartDate);
        setProfEndDate(experience.profEndDate);
        setFormVisible(true);
    }

    function handleDelete(index) {
        let filtered = experiences.filter((_, i) => i !== index);
        setExperiences([...filtered]);
    }

    return (
        <div className="edu-form">
            <div className="profexp-input-header">
                <img className="mini-icon" src="/jobExpIcon.svg"/>
                <h2>Career</h2>
                <div className="header-btns">
                    <button className="plus-btn" onClick={toggleForm}><img className="plus-icon" src="/plusIcon.svg" /></button>
                    <button onClick={handleClose}><img className="swap-icon" src="/closeIcon.svg"/></button>
                </div>
                
            </div>
            {formVisible && 
                <form className="general-inputs">
            <label className="input-label">
                Company
                <input type="text" value={company} onChange={handleCompanyChange} placeholder="Enter company name"/>
            </label>
            <label className="input-label">
                Job title
                <input type="text" value={jobTitle} onChange={handleJobTitleChange} placeholder="Enter job title"/>
            </label>
            <label className="input-label">
                Start date
                <input type="text" value={profStartDate} onChange={handleStartDate} placeholder="Enter the start date"/>
            </label>
            <label className="input-label">
                End date
                <input type="text" value={profEndDate} onChange={handleEndDate} placeholder="Enter the end date"/>
            </label>
            <button className="save-button"  onClick={e => handleSave(e)}>Save</button>
                </form>}
            
            <ul className="items-container">
                {experiences.map((experience, index) => 
                    <li className="list-items" key={index}>
                        <div className="item-name">{experience.jobTitle}</div>
                        <div className="edu-buttons2">
                            <button className="edit-btn" onClick={() => handleEdit(index)}><img className="edu-edit-icon" src="/tools.svg"/></button>
                            <button className="delete-btn" onClick={() => handleDelete(index)}><img className="edu-del-icon" src="/trashCan.svg"/></button>
                        </div>
                    </li>)}
            </ul>
        </div>
        
        
    )
}