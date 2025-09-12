import UserContext from "./UserContext";
import { useContext } from "react";

const UserProfile = ()=>{
    const userContext = useContext(UserContext);
    const { name, email } = userContext;
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {email}</p>
            <p>Bio: </p>
        </div>

    )
}
export default UserProfile;