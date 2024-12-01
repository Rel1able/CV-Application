
export default function GeneralDisplayComponent({name, email, phone, address}){
    return(
        <div className="display-data-container">
            <div  className="general-info-data">
                <h1>{name}</h1>
                <div className="general-icons">
                    <h3><img className="icon" src="../public/emailIcon.svg"/>{email}</h3>
                    <h3><img className="icon" src="../public/phoneIcon.svg"/>{phone}</h3>
                    <h3><img className="icon" src="../public/locationIcon.svg"/>{address}</h3>
                </div>
                
            </div>
            
        </div>
    )
}   