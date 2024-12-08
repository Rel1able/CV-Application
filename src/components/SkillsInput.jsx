import CloseButton from "./CloseButton.jsx";

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

    return (
        <form>
            <h1>Skills<CloseButton setIsEditing={setIsEditing} /></h1>
            <label>
                Skill Name
                <input value={skillName} type="text" placeholder="enter your skill" onChange={handleInputChange} />
                <button onClick={handleAdd}>Add</button>
            </label>
            {skills.map((skill, index) =>
                <li key={index}>{skill}<button onClick={(e) => handleDelete(e, index) }>Del</button></li> )}
        </form>
    )
}