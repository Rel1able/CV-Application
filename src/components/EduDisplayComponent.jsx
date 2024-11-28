import "../styles/edu.css"

export default function EduDisplayComponent({ schoolName, titleOfStudy, startDate, endDate }) {
    return (
        <div className="edu-display-content">
            <h2>School {schoolName}</h2>
            <h2>Title {titleOfStudy}</h2>
            <h2>from {startDate} -  to {endDate}</h2>
        </div>
    )
}