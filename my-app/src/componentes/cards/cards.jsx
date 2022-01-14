import React from "react";
import './cards.scss'

const Cards = () => {
    return(
<>
<div class="container">

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="carne">Carne</h2>
        <p class="carne">La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida</p>
      </div>
    </div>
    <div class="face face2">
      <h2>01</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="especias">Especias</h2>
        <p class="especias">Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>02</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="utensilios">Utensilios</h2>
        <p class="utensilios">Los utensilios simplifican la tarea de comer de forma tal que construyeron hábitos alimenticios particulares alrededor de cada uno de ellos, además les debemos la existencia de la sopita.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>03</h2>
    </div>
  </div>
</div>
  </>
   
    
    

    );
    
    
; 
}
export default Cards;