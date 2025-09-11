import { UserContext } from "../UserContext";
import { useContext } from "react";

function UserDetails() {
  const ContextData = useContext(UserContext);
  const { name, email } = ContextData;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email:{email} </p>
    </div>
  );
}

export default UserDetails;