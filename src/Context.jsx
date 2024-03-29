import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer/reducer";

const ProductStates = createContext()

const initialState = {
  favs: [],
  list: []
}

const Context = ({children}) => {
  const [state, dispatch] = useReducer (reducer, initialState)
  
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch({type: "GET_LIST", payload: res.data})
    })
  }, [])



  return (
    <ProductStates.Provider value={{state, dispatch}}>
        {children}
    </ProductStates.Provider>
  )
}

export default Context      

export const useProductStates = () => useContext(ProductStates)