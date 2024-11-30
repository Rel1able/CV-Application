
import SwapButton from "./SwapButton.jsx";

export default function GeneralDivComponent({ setIsEditing}) {
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="../public/userIcon.svg"/>General Information<SwapButton setIsEditing={setIsEditing} /></h1>
            

        </div>
    )
}
 