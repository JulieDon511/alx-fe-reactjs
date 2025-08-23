const UserProfile = (props)=>{
    return(
        <div className="profile"
            style={{
            backgroundColor: "#8e44ad",           // Rich violet tone
            border: "1px solid #2c3e50",          // Deep border for contrast
            padding: "20px",
            margin: "20px auto",
            borderRadius: "12px",                 // Smooth rounded corners
            width: "90%",
            maxWidth: "500px",
            color: "#ecf0f1",                     // Light text for readability
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>

                <h2 style={{fontSize: "1.8rem", color: "#3498db", textAlign: "center", marginBottom: "10px"}}>{props.name}</h2>
                <p style={{color:"yellow"}}>Age:  <span style={{fontWeight:"bold", color:"#f1c40f"}}> {props.age}</span></p>
                <p style={{ fontSize: "1rem" }}>Bio: {props.bio}</p>
        </div>

    )
}
export default UserProfile;