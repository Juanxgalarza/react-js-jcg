import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import Item from './Item';


export default function Detalle(props) {
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
  return (

      <>
   {array.map((props) => (
      <Card sx={{ maxWidth: 555 }}>
      <CardMedia
        component="img"
        height="180"
        image={props.src}
        alt={props.alt}
      />
      <CardContent>
    
 <Typography gutterBottom variant="h5" component="div">
 {props.titulo}
</Typography>
<Typography variant="body2" color="text.secondary">
{props.paragraph}
</Typography>
<Typography variant="body2" color="text.secondary">
</Typography>
</CardContent>
<CardActions>

<Counter stock={props.stock}/>

</CardActions>
</Card>
 
        
      ))}

 
    </>
  );
}
