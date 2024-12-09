export default function CloseButton({ setIsEditing, setSchoolName, setTitleOfStudy, setStartDate, setEndDate }){
    
    function handleClose() {
        setIsEditing(false);
        setSchoolName("");
        setTitleOfStudy("");
        setStartDate("");
        setEndDate("");
    }

    return (
        <button onClick={handleClose}><img className="swap-icon" src="../public/closeIcon.svg"/></button>
    )
}