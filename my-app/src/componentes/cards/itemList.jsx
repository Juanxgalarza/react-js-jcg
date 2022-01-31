import './itemCount.css';
import Item from './Item';

const array = [
  {
      id: 1,
      titulo: "Carne premiun",
      paragraph: 'La carne es buena para la salud, además si lees esto puede ser que hayas entendido el sentido de la vida',
      price: "$1200/kg",
      src: "https://picsum.photos/150",
      stock: 8
  },
  {
      id: 2,
      titulo: "Especias importadas",
      price: "$79/gr",
      paragraph: 'Las especias condimentan nuestros alimentos proporcionando gusto y cualidades únicas que tienen y portan.',
      src: "https://picsum.photos/181",
      stock: 3
  },

  {
      id: 3,
      titulo: "Utensilios",
      price: "$buenprecio",
      paragraph: 'Los utensilios cambiaron la forma en que comemos, uala.',
      src: "https://picsum.photos/182",
      stock: 10
  }

];

const ItemList = () => {
  return (
    <>
      {array.map((e) => (
        <Item
          id={e.id}
          titulo={e.titulo}
          paragraph={e.paragraph}
          price={e.price}
          src={e.src}
          stock={e.stock}
        />
        
      ))}
    
    </>
  );
};

export default ItemList;