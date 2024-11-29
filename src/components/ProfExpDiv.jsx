import Buttons from "./Buttons.jsx";

export default function ProfExpDiv({setIsEditing}){
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="../public/jobExpIcon.svg"/>Professional Experience</h1>
            <Buttons setIsEditing={setIsEditing} />
        </div>

    )
}