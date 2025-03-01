export default function SwapButton({ setIsEditing }) {
    
    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <button onClick={handleEdit}>
            <img className="swap-icon" src="/swapIcon.svg"/>
        </button>
    )
}