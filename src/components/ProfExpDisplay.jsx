import "../styles/profExp.css"

export default function ProfExpDisplayComponent({company, jobTitle, profStartDate, profEndDate}) {
    return (
        <div className="profexp-display">
            <h2 className="section-name">Career</h2>
            <div className="profExp-line">
                <h4>{profStartDate} - {profEndDate}</h4>
                <div>
                    <h4>{company}</h4>
                    <h4>{jobTitle}</h4>
                </div>
            </div>
            
            
        </div>
    )
}
