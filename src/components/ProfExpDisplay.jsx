import "../styles/profExp.css"

export default function ProfExpDisplayComponent({company, jobTitle, profStartDate, profEndDate}) {
    return (
        <div className="profexp-display">
            <h1 className="section-name">Professional experience</h1>
            <h2>Company {company}</h2>
            <h2>JobTitle {jobTitle}</h2>
            <h2>from {profStartDate} - to {profEndDate}</h2>
        </div>
    )
}