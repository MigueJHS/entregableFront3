import React from "react";
import Card from "../Components/Card";
import { useProductStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favsItems = JSON.parse(localStorage.getItem("favs"))

  return (
    <>
      <div className="card-grid">
        {favsItems.map((product)=><Card key={product.id} item={product}/>)}
      </div>
    </>
  );
};

export default Favs;
