
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Favs from "./Pages/Favs"
import Detail from "./Pages/Detail"

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element ={<Home/>}/> // Home
            <Route path="/detail/:id" element ={<Detail/>}/> // Detalle
            <Route path="/src/Pages/Favs.jsx" element ={<Favs/>}/> // Favs
            <Route path="/src/Pages/Contact.jsx" element ={<Contact/>} /> // Contacto 
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
