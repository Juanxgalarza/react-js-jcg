import React, { Component } from 'react';
import { render } from 'react-dom';
import './menu.css'
const Menu = () => {
    return <div>
       
<div class="navbar">
  <a href="#home">Inicio</a>
  <a href="#news">Nosotros</a>
  <div class="dropdown">
    <button class="dropbtn">Tienda 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Comida</a>
      <a href="#">Musica</a>
      <a href="#">Sin categoria</a>
    </div>
  </div> 
</div>
</div>
}

export default Menu;