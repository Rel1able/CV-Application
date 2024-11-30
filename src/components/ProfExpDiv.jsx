
import SwapButton from "./SwapButton.jsx";


export default function ProfExpDiv({setIsEditing}){
    return (
        <div className="general-divs">
            <h1><img className="div-icon prof-icon" src="../public/jobExpIcon.svg" />Professional Experience<SwapButton setIsEditing={setIsEditing} /></h1>

        </div>

    )
}