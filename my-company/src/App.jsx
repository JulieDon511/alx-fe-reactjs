import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
    <BrowserRouter>
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
