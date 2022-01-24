import * as React from 'react';
import './menu.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Menu = () => {
  return(
  <>
  
  <div className='container2'>
    <div className="navbar">
     
      <a href="#home">Inicio</a>
      <a href="#about">Nosotros</a>
      <div className="dropdown">
        <button className="dropbtn">Tienda<i className="fa fa-caret-down"></i> </button>
        
          <div className="dropdown-content">
          <Button variant="text" className="dropdown-content" href="/my-app/src/index.js">Ir a tienda</Button>
          <Button variant="text" className="dropdown-content" href="/my-app/src/index.js">Especias</Button>
          <Button variant="text" className="dropdown-content" href="/my-app/src/index.js">Utensilios</Button>          
        </div> 
      </div>
       <div className='widgetParent'>
  
        <Button variant='outlined' className='botoncart'> <ShoppingCartIcon className='cartWidget' />Ir al carrito</Button>
    
     </div>

    </div>
  </div>
  </> );
}
export default Menu;