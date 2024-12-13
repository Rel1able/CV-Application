import "../styles/generalInputs.css";

import CloseButton from "./CloseButton.jsx";

export default function GeneralInputComponent({ name, setName, email, setEmail, phone, setPhone, setIsEditing, address, setAddress}) {

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handleAddressChange(e) {
        setAddress(e.target.value);
    }

    function handleSave(e) {
        e.preventDefault();
        setIsEditing(false);
    }

 
    return (
        
        <form className="general-inputs">
            <h1 name="section-icon"><img className="div-icon" src="../public/userIcon.svg" />General Information<CloseButton setIsEditing={setIsEditing} /></h1>
            <label className="input-label">
                Name
                <input type="text"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Enter your name"/>
            </label>
            <label className="input-label">
                Email
                <input type="email"
                    onChange={handleEmailChange}
                    value={email}
                    placeholder="Enter your email" />
            </label>
            <label className="input-label">
                Phone
                <input type="tel"
                    onChange={handlePhoneChange}
                    value={phone} 
                    placeholder="Enter your phone number"/>
            </label>
            <label className="input-label">
                Address
                <input type="text"
                    onChange={handleAddressChange}
                    value={address}
                    placeholder="Enter your address"/>
            </label>
            <button onClick={e => handleSave(e)} className="save-button" >Save</button>
           
        </form>
    )
}