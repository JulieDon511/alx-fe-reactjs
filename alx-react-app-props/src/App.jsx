import ProfilePage from './components/ProfilePage';
import Context from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return(
<>
  <Context.Provider value={userData}>
    <ProfilePage /> 
  </Context.Provider>
  </>
  )
  
   

   
}

export default App;