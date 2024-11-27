import Buttons from "./Buttons.jsx";
export default function GeneralDivComponent({ name, email, phone, setIsEditing}) {
    return (
        <div className="general-divs">
            <h3>Name: <div>{name}</div></h3>
            <h3>Email: <div>{email}</div></h3>
            <h3>Phone: <div>{phone}</div></h3>
            <Buttons setIsEditing={setIsEditing} />
        </div>
    )
}
