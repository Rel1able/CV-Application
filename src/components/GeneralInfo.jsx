import GeneralInputComponent from "./GeneralInputComponent";
import GeneralDisplayComponent from "./GeneralDIsplayComponent";
import GeneralDivComponent from "./GeneralDivComponent";


import EducationalInputComponent from "./EduInput.jsx";
import EduDivComponent from "./EduDivComponent.jsx";
import EduDisplayComponent from "./EduDisplayComponent.jsx";


import { useState } from "react";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("youremail@gmail.com");
    const [phone, setPhone] = useState("444-444-444-444");
  
    const [schoolName, setSchoolName] = useState("br");
    const [titleOfStudy, setTitleOfStudy] = useState("mr");
    const [startDate, setStartDate] = useState("00/00/00");
    const [endDate, setEndDate] = useState("00/00/00");

    return (
        <div className="general-info-container">
            <div className="inputs-datas">
                {isEditing ? <GeneralInputComponent name={name} setName={setName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                setIsEditing={setIsEditing} />
                : <GeneralDivComponent name={name}
                    email={email} phone={phone} setIsEditing={setIsEditing} />}
                {isEditing ? <EducationalInputComponent schoolName={schoolName}
                setSchoolName={setSchoolName} titleOfStudy={titleOfStudy}
                startDate={startDate} endDate={endDate}
                setTitleOfStudy={setTitleOfStudy} setStartDate={setStartDate}
                setEndDate={setEndDate} setIsEditing={setIsEditing} /> 
                : <EduDivComponent schoolName={schoolName}
                    titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate}
            setIsEditing={setIsEditing}    />}
            </div>
            <div className="display-data">
                <GeneralDisplayComponent name={name} email={email} phone={phone} />
                <EduDisplayComponent schoolName={schoolName} titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate} />
            </div>
            
            
            
        </div>
    )
} 




