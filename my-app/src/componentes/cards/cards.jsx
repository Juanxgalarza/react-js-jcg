import React from "react";
import './cards.scss'

const Cards = () => {
    return(
<>
<div className="container">

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="carne">Carne</h2>
        <p className="carne">La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida</p>
        <button className="carne">Comprar Carne</button>
      </div>
    </div>
    <div className="face face2">
      <h2>01</h2>
    </div>
  </div>

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="especias">Especias</h2> 
        <p className="especias">Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.</p>
    
    <button className="especias">Comprar Especias</button>

      </div>
    </div>
    <div className="face face2">
      <h2>02</h2>
    </div>
  </div>

  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <h2 className="utensilios">Utensilios</h2>
        <p className="utensilios">Los utensilios simplifican la tarea de comer de forma tal que construyeron hábitos alimenticios particulares alrededor de cada uno de ellos, además les debemos la existencia de la sopita.</p>
      <button className="utensilios">Comprar Utensilios</button>
      </div>
    </div>
    <div className="face face2">
      <h2>03</h2>
    </div>
  </div>
</div>
  </>
   
    
    

    );
    
    
; 
}
export default Cards;