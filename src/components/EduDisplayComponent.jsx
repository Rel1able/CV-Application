import "../styles/edu.css"

export default function EduDisplayComponent({ schoolName, titleOfStudy, startDate, endDate }) {
    return (
        <div className="edu-display-content">
            <h2 className="section-name">Education</h2>

            <div className="edu-line1">
                <h4 className="date">{startDate} - {endDate}</h4>
                <div>
                    <h4 className="school-name">{schoolName}</h4>
                    <h4 className="title-of-study">{titleOfStudy}</h4>
                </div>
                 
            </div>
            
            
           
        </div>
    )
} 