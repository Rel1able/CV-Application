import GeneralInputComponent from "./GeneralInputComponent";
import GeneralDisplayComponent from "./GeneralDIsplayComponent";
import GeneralDivComponent from "./GeneralDivComponent";


import EducationalInputComponent from "./EduInput.jsx";
import EduDivComponent from "./EduDivComponent.jsx";
import EduDisplayComponent from "./EduDisplayComponent.jsx";



import ProfExpInput from "./ProfexpInput.jsx";
import ProfExpDisplay from "./ProfExpDisplay.jsx";
import ProfExpDiv from "./ProfExpDiv.jsx";

import SkillsDisplay from "./SkillsDIsplay.jsx";
import SkillsDivComp from "./SkillsDiv.jsx";
import SkillsInput from "./SkillsInput.jsx";

import Header from "./Header.jsx";

import { useState } from "react";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingEdu, setIsEditingEdu] = useState(false);
    const [isEditingProf, setIsEditingProf] = useState(false);

    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("youremail@gmail.com");
    const [phone, setPhone] = useState("+444-444-444-444");
    const [address, setAddress] = useState("City Street 444");
  
    const [schoolName, setSchoolName] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [company, setCompany] = useState("");
    const [ jobTitle, setJobTitle]  = useState("");
    const [profStartDate, setProfStartDate] = useState("");
    const [profEndDate, setProfEndDate] = useState("");

    const [educations, setEducations] = useState([{schoolName: "University", titleOfStudy: "Bachelor Computer Science", startDate: "04.04.2024", endDate: "07.07.2027"}]);
    const [experiences, setExperiences] = useState([{ company: "Company", jobTitle: "Software Engineer", profStartDate: "07.04", profEndDate: "present" }]);

    const [skillName, setSkillName] = useState("");
    const [skills, setSkills] = useState(["Html", "Css", "Java Script", "React", "Git"]);
    const [isEditingSkills, setIsEditingSkills] = useState(false);

    return (
        <>
            <Header/>
        <div className="general-info-container">
            <div className="inputs-data">
                    {isEditing ? <GeneralInputComponent name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        phone={phone} setPhone={setPhone}
                        setIsEditing={setIsEditing} address={address} setAddress={setAddress} />

                        : <GeneralDivComponent name={name}
                            email={email} phone={phone} setIsEditing={setIsEditing} address={address}
                            setAddress={setAddress} />}
                
                    {isEditingEdu ? <EducationalInputComponent schoolName={schoolName}
                        setSchoolName={setSchoolName} titleOfStudy={titleOfStudy}
                        startDate={startDate} endDate={endDate}
                        setTitleOfStudy={setTitleOfStudy} setStartDate={setStartDate}
                        setEndDate={setEndDate} setIsEditing={setIsEditingEdu} educations={educations} setEducations={setEducations} /> 
                        
                : <EduDivComponent schoolName={schoolName}
                    titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate}
                        setIsEditing={setIsEditingEdu} />}
                
                    {isEditingProf ? <ProfExpInput company={company} setCompany={setCompany} jobTitle={jobTitle}
                        setJobTitle={setJobTitle} profStartDate={profStartDate} setProfStartDate={setProfStartDate} profEndDate={profEndDate}
                        setProfEndDate={setProfEndDate} setIsEditing={setIsEditingProf} experiences={experiences} setExperiences={setExperiences} />
                        
                        : <ProfExpDiv setIsEditing={setIsEditingProf} />}
                    
                    {isEditingSkills ? <SkillsInput skills={skills} setSkills={setSkills} skillName={skillName} setSkillName={setSkillName}
                        setIsEditing={setIsEditingSkills} />
                        :  <SkillsDivComp setIsEditing={setIsEditingSkills}/>}
                    
                
            </div>
            <div className="display-data">
                <GeneralDisplayComponent name={name} email={email} phone={phone} address={address} />
                <EduDisplayComponent educations={educations} />
                <ProfExpDisplay experiences={experiences} />
                <SkillsDisplay skills={skills}/>
            </div>
            
            
            </div>
        </>
        
    )
} 






