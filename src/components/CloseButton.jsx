export default function CloseButton({setIsEditing}){
    
    function handleClose(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <button onClick={handleClose}><img className="swap-icon" src="/closeIcon.svg"/></button>
    )
}