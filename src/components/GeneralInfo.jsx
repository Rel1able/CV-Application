import GeneralInputComponent from "./GeneralInputComponent";
import GeneralDisplayComponent from "./GeneralDIsplayComponent";
import GeneralDivComponent from "./GeneralDivComponent";
import { useState } from "react";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="general-info-container">
            {isEditing ? <GeneralInputComponent name={name} setName={setName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                setIsEditing={setIsEditing} />
                : <GeneralDivComponent name={name}
                    email={email} phone={phone} setIsEditing={setIsEditing} />}
            
            <GeneralDisplayComponent name={name} email={email} phone={phone}/>
        </div>
    )
}