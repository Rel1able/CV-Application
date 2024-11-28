import GeneralInputComponent from "./GeneralInputComponent";
import GeneralDisplayComponent from "./GeneralDIsplayComponent";
import GeneralDivComponent from "./GeneralDivComponent";

import { useState } from "react";

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("youremail@gmail.com");
    const [phone, setPhone] = useState("444-444-444-444");

    return (
        <div className="general-info-container">
            {isEditing ? <GeneralInputComponent name={name} setName={setName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                setIsEditing={setIsEditing} />
                : <GeneralDivComponent name={name}
                    email={email} phone={phone} setIsEditing={setIsEditing} />}
            
            <GeneralDisplayComponent name={name} email={email} phone={phone} />
            
        </div>
    )
}