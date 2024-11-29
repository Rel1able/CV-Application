import Buttons from "./Buttons.jsx";

export default function EduDivComponent({setIsEditing}) {
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="../public/eduIcon.svg"/>Educational experience</h1>

            <Buttons setIsEditing={setIsEditing}/>
        </div>
    )
} 