
import SwapButton from "./SwapButton.jsx";



export default function EduDivComponent({setIsEditing}) {
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="/eduIcon.svg"/>Education<SwapButton setIsEditing={setIsEditing} /></h1>

        </div>
    )
} 