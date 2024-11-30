import "../styles/profExp.css"

export default function ProfExpDisplayComponent({company, jobTitle, profStartDate, profEndDate}) {
    return (
        <div className="profexp-display">
            <h2 className="section-name">Professional experience</h2>
            <h4>Company {company}</h4>
            <h4>JobTitle {jobTitle}</h4>
            <h4>from {profStartDate} - to {profEndDate}</h4>
        </div>
    )
}