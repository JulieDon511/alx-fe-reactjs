import{ useContext } from 'react';
import Context  from './UserContext';
function UserDetails() {
    const userData = useContext(Context);
    const { name, email } = userData;   
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserDetails;