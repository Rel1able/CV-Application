import "../styles/generalInputs.css";
import Buttons from "./Buttons.jsx";
export default function GeneralInputComponent({ name, setName, email, setEmail, phone, setPhone, setIsEditing}) {

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }



    return (
        <div className="general-inputs">
            <label className="input-label">
                Name:
                <input type="text"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Enter your name"/>
            </label>
            <label className="input-label">
                Email:
                <input type="email"
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Enter your email" />
            </label>
            <label className="input-label">
                Phone:
                <input type="tel"
                    onChange={handlePhoneChange}
                    value={phone}
                    placeholder="Enter your phone number"/>
            </label>
            <Buttons setIsEditing={setIsEditing} />
        </div>
    )
}