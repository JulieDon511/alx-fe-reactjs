import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {


  return (
    <div className="app">
      <WelcomeMessage />
         <Header />
            <MainContent />
              <UserProfile
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" />
                <Counter />
                <Footer />
    </div>
      
  )
}

export default App
