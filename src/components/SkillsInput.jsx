
export default function SkillsInput({ skills, setSkills, skillName, setSkillName, setIsEditing }) {

    function handleInputChange(e) {
        setSkillName(e.target.value);
    }

    function handleAdd(e) {
        e.preventDefault();
        setSkills([...skills, skillName])
        setSkillName("");
    }

    function handleDelete(e, index) {
        e.preventDefault();
        let filtered = skills.filter((_, i) => i !== index);
        setSkills([...filtered]);
    }

    function handleClose(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <form className="edu-form">
            <div className="skills-header">
                <img className="mini-icon" src="../public/tools.svg"/>
                 <h1>Skills</h1>
                 <button className="close-skills" onClick={e => handleClose(e)}><img className="swap-icon" src="../public/closeIcon.svg"/></button>
            </div>
           
            <label className="skills-data-container">
                <h1>Skill</h1>
                <input value={skillName} type="text" placeholder="Enter the skill namel" onChange={handleInputChange} />
                <button className="plus-btn" onClick={handleAdd}><img className="plus-icon" src="../public/plusIcon.svg" /></button>
            </label>
            <ul className="skills-container">
                {skills.map((skill, index) =>
                    <li className="skill-item" key={index}>
                        <div className="skill-name">{skill}</div>
                        <div className="skills-del-button">
                            <button className="delete-btn skill-del" onClick={(e) => handleDelete(e, index)}><img className="edu-del-icon" src="../public/trashCan.svg"/></button>
                        </div>
                        
                    </li>)}
            </ul>
            
        </form>
    )
}