import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Scanlines from './components/Scanlines'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Scanlines />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
