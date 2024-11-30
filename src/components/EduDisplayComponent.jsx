import "../styles/edu.css"

export default function EduDisplayComponent({ schoolName, titleOfStudy, startDate, endDate }) {
    return (
        <div className="edu-display-content">
            <h2 className="section-name">Education</h2>

            <div className="edu-line1">
                <h4>{startDate} - {endDate}</h4>
                <div>
                    <h4>{schoolName}</h4>
                <h4>{titleOfStudy}</h4>
                </div>
                 
            </div>
            
            
           
        </div>
    )
} 