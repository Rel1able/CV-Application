import GeneralInputComponent from "./GeneralInputComponent";
import GeneralDisplayComponent from "./GeneralDIsplayComponent";
import GeneralDivComponent from "./GeneralDivComponent";


import EducationalInputComponent from "./EduInput.jsx";
import EduDivComponent from "./EduDivComponent.jsx";
import EduDisplayComponent from "./EduDisplayComponent.jsx";


import ProfExpInput from "./ProfexpInput.jsx";
import ProfExpDisplay from "./ProfExpDisplay.jsx";
import ProfExpDiv from "./ProfExpDiv.jsx";

import Header from "./Header.jsx";

import { useState } from "react";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [isEditingEdu, setIsEditingEdu] = useState(true);
    const [isEditingProf, setIsEditingProf] = useState(true);

    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("youremail@gmail.com");
    const [phone, setPhone] = useState("444-444-444-444");
  
    const [schoolName, setSchoolName] = useState("br");
    const [titleOfStudy, setTitleOfStudy] = useState("mr");
    const [startDate, setStartDate] = useState("00/00/00");
    const [endDate, setEndDate] = useState("00/00/00");

    const [company, setCompany] = useState("");
    const [ jobTitle, setJobTitle]  = useState("");
    const [profStartDate, setProfStartDate] = useState("00/00/00");
    const [profEndDate, setProfEndDate] = useState("00/00/00");

    return (
        <>
            <Header/>
        <div className="general-info-container">
            <div className="inputs-data">
                {isEditing ? <GeneralInputComponent name={name} setName={setName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                setIsEditing={setIsEditing} />
                : <GeneralDivComponent name={name}
                        email={email} phone={phone} setIsEditing={setIsEditing} />}
                
                {isEditingEdu ? <EducationalInputComponent schoolName={schoolName}
                setSchoolName={setSchoolName} titleOfStudy={titleOfStudy}
                startDate={startDate} endDate={endDate}
                setTitleOfStudy={setTitleOfStudy} setStartDate={setStartDate}
                setEndDate={setEndDate} setIsEditing={setIsEditingEdu} /> 
                : <EduDivComponent schoolName={schoolName}
                    titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate}
                        setIsEditing={setIsEditingEdu} />}
                
                {isEditingProf ? <ProfExpInput company={company} setCompany={setCompany} jobTitle={jobTitle}
                    setJobTitle={setJobTitle} profStartDate={profStartDate} setProfStartDate={setProfStartDate} profEndDate={profEndDate}
                    setProfEndDate={setProfEndDate} setIsEditing={setIsEditingProf} />
                    : <ProfExpDiv setIsEditing={setIsEditingProf} />}
                
            </div>
            <div className="display-data">
                <GeneralDisplayComponent name={name} email={email} phone={phone} />
                <EduDisplayComponent schoolName={schoolName} titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate} />
                <ProfExpDisplay company={company} jobTitle={jobTitle} profStartDate={profStartDate} profEndDate={profEndDate}/>
            </div>
            

        </div>
        </>
        
    )
} 




