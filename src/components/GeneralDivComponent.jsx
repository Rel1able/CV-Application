import Buttons from "./Buttons.jsx";
export default function GeneralDivComponent({ setIsEditing}) {
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="../public/userIcon.svg"/>General Information</h1>
            
            <Buttons setIsEditing={setIsEditing} />
        </div>
    )
}
 