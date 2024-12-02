import "../styles/profExp.css"

export default function ProfExpDisplayComponent({company, jobTitle, profStartDate, profEndDate}) {
    return (
        <div className="profexp-display">
            <h2 className="section-name">Career</h2>
            <div className="profExp-line">
                <h4 className="date">{profStartDate} - {profEndDate}</h4>
                <div>
                    <h4 className="company-name">{company}</h4>
                    <h4 className="job-title">{jobTitle}</h4>
                </div>
            </div>
            
            
        </div>
    )
}
