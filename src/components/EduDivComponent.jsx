import Buttons from "./Buttons.jsx";

export default function EduDivComponent({setIsEditing, schoolName, titleOfStudy, startDate, endDate}) {
    return (
        <div className="general-divs">
            <h1>Educational experience</h1>
            <h3>School Name:<div>{schoolName}</div></h3>
            <h3>Title of Study: <div>{titleOfStudy}</div></h3>
            <h3>Start: {startDate}</h3>
            <h3>End: {endDate}</h3>
            <Buttons setIsEditing={setIsEditing}/>
        </div>
    )
}