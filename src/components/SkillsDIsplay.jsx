import "../styles/skills.css"

export default function SkillsDisplay({ skills }) {
    return (
        <div className="skills-display">
            <h2 className="section-name">Skills</h2>
            <div className="skills-list">
                
                {skills.map((skill, index) => <h3 key={index}>{skill}</h3>)}
            </div>
        </div>
        
    )
}