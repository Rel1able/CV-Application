

export default function SaveButton({ setIsEditing }) {
    function handleSave() {
        setIsEditing(false);
    }
    return (
        <button onClick={handleSave}>
            Save
        </button>
    )
}