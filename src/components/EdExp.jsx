import { useState } from "react";
import EducationalInputComponent from "./EduInput.jsx";
import EduDivComponent from "./EduDivComponent.jsx";
import EduDisplayComponent from "./EduDisplayComponent.jsx";

export default function EduExpInput() {

    const [isEditing, setIsEditing] = useState(true);
    const [schoolName, setSchoolName] = useState("br");
    const [titleOfStudy, setTitleOfStudy] = useState("mr");
    const [startDate, setStartDate] = useState("00.00.00");
    const [endDate, setEndDate] = useState("00.00.00");

    return (
        <div className="general-info-container">
            {isEditing ? <EducationalInputComponent schoolName={schoolName}
                setSchoolName={setSchoolName} titleOfStudy={titleOfStudy}
                startDate={startDate} endDate={endDate}
                setTitleOfStudy={setTitleOfStudy} setStartDate={setStartDate}
                setEndDate={setEndDate} setIsEditing={setIsEditing} /> 
                : <EduDivComponent schoolName={schoolName}
                    titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate}
            setIsEditing={setIsEditing}    />}
            <EduDisplayComponent schoolName={schoolName} titleOfStudy={titleOfStudy} startDate={startDate} endDate={endDate} />
        </div>
    )
}

