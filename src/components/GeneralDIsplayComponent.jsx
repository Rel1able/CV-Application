
export default function GeneralDisplayComponent({name, email, phone}){
    return(
        <div className="display-data-container">
            <div  className="general-info-data">
                <h1>{name}</h1>
                <h3><img className="icon" src="../public/emailIcon.svg"/>{email}</h3>
                <h3><img className="icon" src="../public/phoneIcon.svg"/>{phone}</h3>
            </div>
            
        </div>
    )
}   