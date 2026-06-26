import { HashRouter, Route, Routes, Navigate } from "react-router-dom"
import '../src/style/App.css'
import Home from "./pages/Home";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TechBadges from "./components/Badge";






function App () {
  return (
    <HashRouter>
      <div className="bg-dark">
      <NavBar/>
      <TechBadges/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element= {<Contact/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>


      <Footer/> 
      </div>
    </HashRouter>
  )
}

export default App;