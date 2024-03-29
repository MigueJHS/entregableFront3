import React from "react"
import { Link } from 'react-router-dom'
import { useProductStates } from "../Context";

const Card = ({ item }) => {
  const {username, email, phone, website} = item
  const {state, dispatch} = useProductStates()

  const addFavs = () => {
    const favsItems = JSON.parse(localStorage.getItem("favs"))
    
    dispatch ({type: "ADD_CART",payload: item}) || []
    localStorage.setItem ("favs", JSON.stringify([...favsItems, item]))

    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <Link to={'/Detail/' + item.id}><img src="/images/doctor.jpg" alt="Doc" width={200} /></Link>
        <h4>{item.name}</h4>
        <h5>{item.username}</h5>
        {/* En cada card deberan mostrar en name - username y el id */ }


  {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ }
  <button onClick={ addFavs }> ⭐</button>
    </div >
  );
};

export default Card;
