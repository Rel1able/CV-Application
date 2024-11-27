
export default function GeneralDisplayComponent({name, email, phone}){
    return(
        <div className="general-info-data">
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>
        </div>
    )
}