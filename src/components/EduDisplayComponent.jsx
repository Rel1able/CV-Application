import "../styles/edu.css"

export default function EduDisplayComponent({educations }) {
    return (
        <div className="edu-display-content">
            <h2 className="section-name">Education</h2>
            {educations.map((education, index) => 
                <div key={index} className="edu-line1">
                    <h4 className="date">{education.startDate} - {education.endDate}</h4>
                    <div>
                        <h4 className="school-name">{education.schoolName}</h4>
                        <h4 className="title-of-study">{education.titleOfStudy}</h4>
                    </div>
                </div>)}
            
            
           
        </div>
    )
} 



            