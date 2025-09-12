import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="app">
      <WelcomeMessage />
         <Header />
            <MainContent />
              <UserProfile
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" />
                <ProfilePage userData={userData} />;
                <Footer />
    </div>
      
  )
}

export default App
