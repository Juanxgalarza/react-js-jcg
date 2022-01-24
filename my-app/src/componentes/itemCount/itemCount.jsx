import * as React from 'react';
import {useState} from 'react';
import './itemCount.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

   
export default function App() {
  const [counter, setCounter] = useState(0);

  const resta = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const stock = 10;

  const suma = () => {
    if (counter === stock) {
      alert('no mas stock');
      return;
    }
    
    setCounter(counter + 1);
  };

  return (
    <>
    <div className='total'>
 <div>Cantidades</div>
    <Button onClick={resta}> - </Button>
    <h2>{counter}</h2>
    <Button onClick={suma}> + </Button>
    
    </div>
   
    </>
  )
}