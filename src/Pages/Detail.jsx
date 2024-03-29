import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  console.log(params)
  
  useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users/'+params.id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
   <div>
        <img src="/public/images/doctor.jpg" alt="Doc" width={300} />
        <h3>   nombre:  {product.username}</h3>
        <h3>   email:  {product.email}</h3>
        <h3>   phone:  {product.phone}</h3>
        <h3>   website:  {product.website}</h3>
    
    </div>
  )
  
}

export default Detail