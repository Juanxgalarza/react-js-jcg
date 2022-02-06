import { useState, useEffect } from "react";
import React from "react";
import Badge from "@mui/icons-material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import { Button } from '@mui/material';
import CartHandler from "./cartHandler";



export default function Detail() {
 
  const [loading, setLoading] = useState(false);
  const [products, setPosts] = useState([]);
  const { id } = useParams();
  const URL = `https://61fad67687801d0017a2c2d0.mockapi.io/products/${id}`;


  useEffect(() => {
    const loadPost = async () => {
      //mostrar loading
      setLoading(true);
      //esperar hasta tener todos los datos
      const response = await axios.get(URL);
      setPosts(response.data);
      //sacar el loading
      setLoading(false);
    };
    loadPost();
  }, []);


  const [cart, setCart] = useState([]);
  const [productInCart, setProductInCart] = useState(true);
  const [itemCount, setItemCount] = useState(0);

 

  const handleStockClick = () => {   
    return (
      <CartHandler id={products.id} titulo={products.titulo} price={products.price} stock={products.stock} />
    
    )
  
  }


  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <Card sx={{ maxWidth: 555 }}>
            <CardMedia
              component='img'
              height='180'
              image={products.src}
              alt={products.alt}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {products.titulo}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {products.paragraph}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
              
               
               
       
        
          
               
              </Typography>
            </CardContent>
            <CardActions>
      
              <Counter stock={products.stock}  />
             
              <ShoppingCartIcon />{" "}
              <Link to={`/cart:${id}`} >
                <Button onClick={handleStockClick} >  
              
                Añadir al Carrito
                 
                  </Button>    
                  </Link>
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
}