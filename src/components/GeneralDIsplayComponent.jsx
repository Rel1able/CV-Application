
export default function GeneralDisplayComponent({name, email, phone, address}){
    return(
        <div className="display-data-container">
            <div  className="general-info-data">
                <h1>{name}</h1>
                <div className="general-icons">
                    <h3 className="gen-icon-container"><img className="icon" src="/emailIcon.svg"/><div>{email}</div></h3>
                    <h3 className="gen-icon-container"><img className="icon" src="/phoneIcon.svg"/><div>{phone}</div></h3>
                    <h3 className="gen-icon-container"><img className="icon" src="/locationIcon.svg"/><div>{address}</div></h3>
                </div>
                
            </div>
            
        </div>
    )
}   