import React, { Component } from 'react';
import './menu.css'
function Menu() {
  
  return <div className='container2'>

    <div className="navbar">
      <a href="#home">Inicio</a>
      <a href="#news">Nosotros</a>
      <div className="dropdown">
        <button className="dropbtn">Tienda
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Carne</a>
          <a href="#">Especias</a>
          <a href="#">Utensilios de Cocina</a>

        </div>
      </div>
    </div>
  </div>;
}

export default Menu;