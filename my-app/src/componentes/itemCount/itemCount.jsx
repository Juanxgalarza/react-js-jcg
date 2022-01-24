import * as React from 'react';
import {useState} from 'react';
import './itemCount.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

   
const ItemCount = (props) => {

  const [counter, setCounter] = useState(0);
  const resta = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };



  const suma = () => {
    if (counter === props.stock) {
      alert('no mas stock');
      return;
    }
    
    setCounter(counter + 1);
  };


  return (
    <>
    <div className='total'>
 <div>el Stock del producto es: {props.productCant}</div>
    <Button onClick={resta}> - </Button>
    <h2>{counter}</h2>
    <Button onClick={suma}> + </Button>
    
    </div>
   
    </>
  )
}


export default ItemCount;