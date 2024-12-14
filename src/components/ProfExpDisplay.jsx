import "../styles/profExp.css"

export default function ProfExpDisplay({experiences}) {
    return (
        <div className="profexp-display">
            <h2 className="section-name">Career</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="profExp-line">
                    <h4 className="date">{experience.profStartDate} - {experience.profEndDate}</h4>
                    <div className="right-div">
                        <h4 className="company-name">{experience.company}</h4>
                        <h4 className="job-title">{experience.jobTitle}</h4>
                    </div>
                </div>
            ))}



            
            
            
        </div>
    )
}
