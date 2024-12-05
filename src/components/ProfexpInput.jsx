
import CloseButton from "./CloseButton.jsx";
import { useState } from "react";

export default function ProfExpInputs({experiences, setExperiences, company, setCompany, jobTitle, setJobTitle, profStartDate,setProfStartDate, profEndDate, setProfEndDate, setIsEditing}) {

    const [formVisible, setFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function toggleForm() {
        setFormVisible(!formVisible);
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


    function handleSave() {
        const newExperience = { company, jobTitle, profStartDate, profEndDate };
        if (editingIndex !== null) {
            let updatedExperiences = [...experiences];
            updatedExperiences[editingIndex] = newExperience;
            setExperiences(updatedExperiences);
        } else {
            setExperiences([...experiences, newExperience]);
        }
        setFormVisible(false);
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

    return (
        <div>
            <div className="edu-input-header">
                <h2>Career</h2>
                <button onClick={toggleForm}><img className="plus-icon" src="../public/plusIcon.svg" /></button>
                <CloseButton setIsEditing={setIsEditing}/>
            </div>
            {formVisible && 
                <form className="general-inputs">

            <h1 className="section-icon"><img className="div-icon prof-icon" src="../public/jobExpIcon.svg" /></h1>
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
            <button onClick={handleSave}>Save</button>
                </form>}
            
            <ul>
                {experiences.map((experience, index) => 
                    <li key={index}>
                        {experience.jobTitle}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    </li>)}
            </ul>
        </div>
        
        
    )
}