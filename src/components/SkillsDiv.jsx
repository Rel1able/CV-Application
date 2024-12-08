import SwapButton from "./SwapButton.jsx";


export default function SkillsDivComp({setIsEditing}) {
    return (
        <div className="general-divs">
            <h1><img className="div-icon" src="../public/tools.svg"/>Skills<SwapButton setIsEditing={setIsEditing}/></h1>
        </div>
    )
}