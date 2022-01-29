import * as React from 'react';
import {useState} from 'react';
import './itemCount.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Item from './Item';
   
const ItemCount = (props) => {
  
const array = [
  {
      id: 1,
      titulo: "Carne premiun",
      paragraph: 'La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida',
      price: "$1200/kg",
      src:
          "https://picsum.photos/750"
  },
  {
      id: 2,
      titulo: "Especias importadas",
      price: "$79/gr",
      paragraph: 'Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.',
      src:
          "https://picsum.photos/751"
  },
  {
      id: 3,
      titulo: "Utensilios",
      price: "$buenprecio",
      paragraph: 'Los utensilios cambiaron la forma en que comemos, uala.'
      src:
          "https://picsum.photos/753"
  }
];

  array.map((e) => {
    return (
      <Item
        key={e.id}
        titulo={e.titulo}
        price={e.price}
        src={e.src} />
    );
  })

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