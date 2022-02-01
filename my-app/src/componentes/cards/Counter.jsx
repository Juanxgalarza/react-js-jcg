import * as React from 'react';
import { useState } from 'react';
import './cards.scss';
import Button from '@mui/material/Button';

const Counter = (props) => {

  const [counter, setCounter] = useState(0);
  const resta = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };



  const suma = () => {
    if (counter === props.stock) {
      alert('No tenemos mas stock del producto seleccionado');
      return;
    }
    
    setCounter(counter + 1);
  };


  return (
    <>
    <div className='total'>
 <div>el Stock del producto es: {props.stock}</div>
    <Button  variant="contained" onClick={resta}> - </Button>
    <h2>{counter}</h2>
    <Button  variant="contained" onClick={suma}> + </Button>
    
    </div>
   
    </>
  )
}

export default Counter;