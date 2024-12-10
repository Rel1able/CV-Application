export default function CloseButton({ setIsEditing}){
    
    function handleClose() {
        setIsEditing(false);
    }

    return (
        <button onClick={handleClose}><img className="swap-icon" src="../public/closeIcon.svg"/></button>
    )
}