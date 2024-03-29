import {useEffect, useState} from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useProductStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useProductStates()
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       {state.list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
      </div>
    </main>
  )
}

export default Home