import "../styles/edu.css"

export default function EduDisplayComponent({ schoolName, titleOfStudy, startDate, endDate }) {
    return (
        <div className="edu-display-content">
            <h2 className="section-name">Education</h2>
            <h4>School {schoolName}</h4>
            <h4>Title {titleOfStudy}</h4>
            <h4>from {startDate} -  to {endDate}</h4>
        </div>
    )
} 