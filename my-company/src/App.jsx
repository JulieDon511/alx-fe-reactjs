import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
