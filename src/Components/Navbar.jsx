import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
       <h1>DHODONTO</h1>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/src/Pages/Favs.jsx'><h3>Favs</h3></Link>
      <Link to='/src/Pages/Contact.jsx'><h3>Contact</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar