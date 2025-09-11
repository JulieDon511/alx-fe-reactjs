import { Context } from "../UserContext";
import { useContext } from "react";

function UserDetails() {
  const ContextData = useContext(Context);
  const { name, email } = ContextData;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email:{email} </p>
    </div>
  );
}

export default UserDetails;