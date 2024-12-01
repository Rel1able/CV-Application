

export default function SaveButton({ setIsEditing }) {
    function handleSave() {
        setIsEditing(false);
    }
    return (
        <button className="save-button" onClick={handleSave}>
            Save
        </button>
    )
}