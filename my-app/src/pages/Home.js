import React from "react";
import Landing from "../componentes/landing/landin";
import { CarritoEstado } from "../componentes/context/contextoGlobal";
import Item from "../componentes/cards/Item";


const Home = () => {

    const { state:{ products } } =  CarritoEstado();

    return (
<>
    <Landing />

<div>
    {/* Filtros */}
</div>

<div>
 {products.map((prod) => { 
        return( 
<Item key={prod.id} id={prod.id} titulo={prod.titulo} stock={prod.stock} src={prod.src} delivery={prod.delivery}  />
        )   
    })};
    
</div>
   
    </>
    )
    
}
export default Home;

