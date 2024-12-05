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
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingEdu, setIsEditingEdu] = useState(false);
    const [isEditingProf, setIsEditingProf] = useState(false);

    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("youremail@gmail.com");
    const [phone, setPhone] = useState("444-444-444-444");
    const [address, setAddress] = useState("City Street 4");
  
    const [schoolName, setSchoolName] = useState("Harvard University");
    const [titleOfStudy, setTitleOfStudy] = useState("Bachelor Computer Science");
    const [startDate, setStartDate] = useState("09.11");
    const [endDate, setEndDate] = useState("09.15");

    const [company, setCompany] = useState("Google");
    const [ jobTitle, setJobTitle]  = useState("Software Engineer");
    const [profStartDate, setProfStartDate] = useState("01.16");
    const [profEndDate, setProfEndDate] = useState("present");

    const [educations, setEducations] = useState([{schoolName: "Harvard University", titleOfStudy: "Bachelor Computer Science", startDate: "01.12.2024", endDate: "01.12.2028"}]);


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
                        setProfEndDate={setProfEndDate} setIsEditing={setIsEditingProf} />
                        
                    : <ProfExpDiv setIsEditing={setIsEditingProf} />}
                
            </div>
            <div className="display-data">
                <GeneralDisplayComponent name={name} email={email} phone={phone} address={address} />
                    <EduDisplayComponent educations={educations} />
                <ProfExpDisplay company={company} jobTitle={jobTitle} profStartDate={profStartDate} profEndDate={profEndDate}/>
            </div>
            
            
            </div>
        </>
        
    )
} 




