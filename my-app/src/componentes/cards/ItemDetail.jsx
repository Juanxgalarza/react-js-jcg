import {useState, useEffect}  from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import { Button } from '@mui/material';

const URL = 'https://61fad67687801d0017a2c2d0.mockapi.io/products/:id'
 

export default function Detail(props) {
  

  const [loading, setLoading] = useState(false);
  const [products, setPosts] = useState([]);
  const {id} = useParams();
  console.log(props);
  useEffect(() => {
      const loadPost = async () => {

         //mostrar loading
          setLoading(true);

        //esperar hasta tener todos los datos
          const response = await axios.get(
          URL);

      
          setPosts(response.data);

          //sacar el loading
          setLoading(false);
      }
      loadPost();
  }, []);

  return (

      <>
   {loading ? <h1>Cargando...</h1> : products.filter(el => el.id === products.id ( 
     
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
  <Button  >Añadir al Carrito</Button>
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
