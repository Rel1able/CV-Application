

export default function EduSaveButton({setFormVisible, educations, setEducations, schoolName, titleOfStudy, startDate, endDate }) {

    function addEducation() {
        const newEducation = { schoolName: schoolName, titleOfStudy: titleOfStudy, startDate: startDate, endDate: endDate };
        setEducations([...educations, newEducation]);
        setFormVisible(false);
    }

    return (
        <button className="save-button" onClick={addEducation}>
            Save
        </button>
    )
}