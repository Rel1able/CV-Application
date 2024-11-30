export default function Buttons({setIsEditing}) {
        function handleEdit() {
            setIsEditing(true);
        }

        function handleSave(){
            setIsEditing(false);
    }
    return (
        <div className="general-info-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
    
}